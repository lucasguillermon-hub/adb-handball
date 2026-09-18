/* Worker del Ateneo Don Bosco Handball.
   Sirve los archivos estáticos como siempre y suma dos cosas:
   - POST /api/suscribir guarda un contacto en la base D1 (tabla "contactos").
     Para bajar la lista, ver "Exportar los contactos" en recetas.md.
   - GET/POST /api/mvp lee y guarda los votos de la figura de la fecha (tabla
     "votos_mvp"). Una persona = una cookie anónima; solo vive la fecha vigente
     de cada plantel y la votación cierra el viernes a las 20 (hora argentina).
   - GET/POST /api/prode lee y guarda los pronósticos del próximo partido de cada
     plantel (tabla "prode"), con la misma cookie. Cierra cuando empieza el partido
     (la web manda la hora); solo vive el partido vigente de cada plantel. */

const ORIGENES = ["aviso-apertura", "newsletter", "quiero-jugar"];
const MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(req, env){
    const url = new URL(req.url);
    if (url.pathname === "/api/suscribir") return suscribir(req, env);
    if (url.pathname === "/api/mvp") return mvp(req, env, url);
    if (url.pathname === "/api/prode") return prode(req, env, url);
    if (url.pathname.startsWith("/api/")) return json({ error: "No existe" }, 404);
    return env.ASSETS.fetch(req);
  }
};

async function suscribir(req, env){
  if (req.method !== "POST") return json({ error: "Método no permitido" }, 405);

  // Solo aceptamos pedidos que salen de la propia web.
  const origin = req.headers.get("Origin");
  if (origin && new URL(origin).host !== new URL(req.url).host){
    return json({ error: "Origen no permitido" }, 403);
  }

  let datos;
  try { datos = await req.json(); }
  catch { return json({ error: "Cuerpo inválido" }, 400); }

  // "web" es un campo trampa: los humanos no lo ven, los bots lo completan.
  if (datos.web) return json({ ok: true });

  const mail = String(datos.mail || "").trim().toLowerCase();
  const nombre = String(datos.nombre || "").trim().slice(0, 120) || null;
  const origen = ORIGENES.includes(datos.origen) ? datos.origen : "newsletter";
  if (!MAIL_RE.test(mail) || mail.length > 200) return json({ error: "Mail inválido" }, 400);

  const ahora = new Date().toISOString();
  await env.DB.prepare(`
    INSERT INTO contactos (mail, nombre, origen, alta, ultimo_contacto)
    VALUES (?1, ?2, ?3, ?4, ?4)
    ON CONFLICT(mail) DO UPDATE SET
      nombre = COALESCE(excluded.nombre, contactos.nombre),
      ultimo_contacto = excluded.ultimo_contacto
  `).bind(mail, nombre, origen, ahora).run();

  return json({ ok: true });
}

/* ============================ votación de la figura ============================ */
const COOKIE = "adb_v";
const PLANTEL_RE = /^[a-z0-9-]{2,30}$/, FECHA_RE = /^\d{4}-\d{2}-\d{2}$/;

// La votación de un partido cierra el viernes siguiente a las 20:00 de Argentina (UTC-3).
function cierre(fecha){
  const d = new Date(fecha + "T00:00:00-03:00");
  const dias = (5 - d.getUTCDay() + 7) % 7 || 7;      // próximo viernes (si el partido es viernes, el siguiente)
  return new Date(d.getTime() + dias * 864e5 + 20 * 36e5);   // d ya está en hora argentina: + 20 h
}

function votante(req){
  const m = (req.headers.get("Cookie") || "").match(new RegExp("(?:^|;\\s*)" + COOKIE + "=([a-f0-9]{32})"));
  return m ? m[1] : null;
}
// Id anónimo de la persona: viene en la cookie o se crea uno y se manda a guardar.
function identidad(req, url){
  let id = votante(req), cookie = null;
  if (!id){
    id = [...crypto.getRandomValues(new Uint8Array(16))].map(b => b.toString(16).padStart(2, "0")).join("");
    cookie = COOKIE + "=" + id + "; Path=/api/; Max-Age=31536000; SameSite=Lax; HttpOnly" + (url.protocol === "https:" ? "; Secure" : "");
  }
  return { id, cookie };
}

async function mvp(req, env, url){
  const origin = req.headers.get("Origin");
  if (origin && new URL(origin).host !== url.host) return json({ error: "Origen no permitido" }, 403);

  let plantel, fecha, jugadora;
  if (req.method === "GET"){ plantel = url.searchParams.get("plantel"); fecha = url.searchParams.get("fecha"); }
  else if (req.method === "POST"){
    let d; try { d = await req.json(); } catch { return json({ error: "Cuerpo inválido" }, 400); }
    plantel = d.plantel; fecha = d.fecha; jugadora = String(d.jugadora || "").trim().slice(0, 80);
  } else return json({ error: "Método no permitido" }, 405);
  if (!PLANTEL_RE.test(plantel || "") || !FECHA_RE.test(fecha || "")) return json({ error: "Plantel o fecha inválidos" }, 400);

  const { id, cookie } = identidad(req, url);
  const cerrada = Date.now() > cierre(fecha).getTime();

  if (req.method === "POST"){
    if (!jugadora) return json({ error: "Falta la jugadora" }, 400);
    if (cerrada) return json({ error: "La votación de esta fecha ya cerró" }, 409);
    // Solo vive la fecha vigente: los votos de fechas anteriores del plantel se borran.
    await env.DB.batch([
      env.DB.prepare("DELETE FROM votos_mvp WHERE plantel = ?1 AND fecha < ?2").bind(plantel, fecha),
      env.DB.prepare("INSERT OR IGNORE INTO votos_mvp (plantel, fecha, votante, jugadora, creado) VALUES (?1, ?2, ?3, ?4, ?5)")
        .bind(plantel, fecha, id, jugadora, new Date().toISOString())
    ]);
  }

  const { results } = await env.DB.prepare(
    "SELECT jugadora, COUNT(*) AS n, MAX(votante = ?3) AS mio FROM votos_mvp WHERE plantel = ?1 AND fecha = ?2 GROUP BY jugadora"
  ).bind(plantel, fecha, id).all();
  const conteo = {}; let total = 0, miVoto = null;
  for (const r of results){ conteo[r.jugadora] = r.n; total += r.n; if (r.mio) miVoto = r.jugadora; }

  const res = json({ ok: true, plantel, fecha, total, conteo, miVoto, cerrada, cierra: cierre(fecha).toISOString() });
  if (cookie) res.headers.append("Set-Cookie", cookie);
  return res;
}

/* ============================ prode ============================ */
async function prode(req, env, url){
  const origin = req.headers.get("Origin");
  if (origin && new URL(origin).host !== url.host) return json({ error: "Origen no permitido" }, 403);

  let plantel, fecha, inicio, local, visita;
  if (req.method === "GET"){ plantel = url.searchParams.get("plantel"); fecha = url.searchParams.get("fecha"); inicio = url.searchParams.get("inicio"); }
  else if (req.method === "POST"){
    let d; try { d = await req.json(); } catch { return json({ error: "Cuerpo inválido" }, 400); }
    plantel = d.plantel; fecha = d.fecha; inicio = d.inicio; local = Number(d.local); visita = Number(d.visita);
  } else return json({ error: "Método no permitido" }, 405);
  if (!PLANTEL_RE.test(plantel || "") || !FECHA_RE.test(fecha || "")) return json({ error: "Plantel o fecha inválidos" }, 400);

  const { id, cookie } = identidad(req, url);
  // "inicio" es la hora del partido en ISO; el prode cierra cuando empieza.
  const t = Date.parse(inicio || "");
  const cerrado = !isNaN(t) && Date.now() > t;

  if (req.method === "POST"){
    if (!Number.isInteger(local) || !Number.isInteger(visita) || local < 0 || visita < 0 || local > 99 || visita > 99) return json({ error: "Marcador inválido" }, 400);
    if (cerrado) return json({ error: "El partido ya empezó" }, 409);
    await env.DB.batch([
      env.DB.prepare("DELETE FROM prode WHERE plantel = ?1 AND fecha < ?2").bind(plantel, fecha),
      env.DB.prepare("INSERT OR IGNORE INTO prode (plantel, fecha, votante, local, visita, creado) VALUES (?1, ?2, ?3, ?4, ?5, ?6)")
        .bind(plantel, fecha, id, local, visita, new Date().toISOString())
    ]);
  }

  const { results } = await env.DB.prepare(
    "SELECT local, visita, COUNT(*) AS n, MAX(votante = ?3) AS mio FROM prode WHERE plantel = ?1 AND fecha = ?2 GROUP BY local, visita ORDER BY n DESC"
  ).bind(plantel, fecha, id).all();
  let total = 0, gana = 0, empata = 0, pierde = 0, sumaL = 0, sumaV = 0, mio = null, masVotado = null;
  for (const r of results){
    total += r.n; sumaL += r.local * r.n; sumaV += r.visita * r.n;
    if (r.local > r.visita) gana += r.n; else if (r.local === r.visita) empata += r.n; else pierde += r.n;
    if (r.mio) mio = { local: r.local, visita: r.visita };
    if (!masVotado) masVotado = { local: r.local, visita: r.visita, n: r.n };
  }
  const pct = n => total ? Math.round(n / total * 100) : 0;
  const res = json({ ok: true, plantel, fecha, total, gana: pct(gana), empata: pct(empata), pierde: pct(pierde),
    promedio: total ? { local: Math.round(sumaL / total), visita: Math.round(sumaV / total) } : null,
    masVotado, mio, cerrado });
  if (cookie) res.headers.append("Set-Cookie", cookie);
  return res;
}

function json(cuerpo, estado = 200){
  return new Response(JSON.stringify(cuerpo), {
    status: estado,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}
