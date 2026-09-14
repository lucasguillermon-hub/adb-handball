/* Worker del Ateneo Don Bosco Handball.
   Sirve los archivos estáticos como siempre y suma un solo endpoint:
   POST /api/suscribir guarda un contacto en la base D1 (tabla "contactos").
   Los formularios de index.html y web.html le pegan con fetch.
   Para bajar la lista, ver "Exportar los contactos" en recetas.md. */

const ORIGENES = ["aviso-apertura", "newsletter", "quiero-jugar"];
const MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(req, env){
    const url = new URL(req.url);
    if (url.pathname === "/api/suscribir") return suscribir(req, env);
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

function json(cuerpo, estado = 200){
  return new Response(JSON.stringify(cuerpo), {
    status: estado,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}
