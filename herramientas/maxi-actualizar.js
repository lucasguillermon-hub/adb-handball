/* Sincroniza Maxihandball con la Liga Maxi Handball (LMHF), que publica en timbo.futbol.

   Uso: node herramientas/maxi-actualizar.js
   No es una liga oficial: tiene pocos partidos, reprogramaciones y fechas dobles. Los datos
   salen de la API que usa la web (admin.timbo.futbol/api/embeded/...), que pide dos
   encabezados de versión de la app. Si un día responde "update-app", cambiar API_VERSION.

   Escribe en datos.js, en el plantel "maxi": partidos (fecha, condición nominal, rival, hora
   propia, sede, resultado) y tabla del Clausura. Un partido sin horario (00:00) lleva
   sinHora:true y la web dice "hora a confirmar"; sin sede, sede:"a confirmar". Un rival nuevo corta el script: agregarlo a
   CORTO y bajar su escudo a fotos/rivales/ (este script lo baja si falta, con sharp). */
const fs = require("fs"); const path = require("path");
const REPO = path.resolve(__dirname, "..");
const API = "https://admin.timbo.futbol/api/embeded/editions/188158125";   // EDICION 2026 de la LMHF
const CATEGORIA = 401735312, ZONA = 1196986807;                            // Clausura - Femenino, zona VUELTA
const API_VERSION = "99999999999";
const CAB = { "api-version": API_VERSION, "rav": API_VERSION, "Accept": "application/json" };

// Nombre en la liga → nombre corto como lo usa el club (y nombre del escudo en fotos/rivales)
const CORTO = {
  "ATENEO DON BOSCO": "Ateneo Don Bosco",
  "MANUEL BELGRANO": "Manuel Belgrano",
  "INSTITUTO M. BELGRANO QUILMES": "Instituto Manuel Belgrano",
  "TEAM EZEIZA": "Team Ezeiza",
  "HANDBALL LAS 2P": "Las 2P",
  "PANTERAS HANDBALL CLUB": "Panteras Handball",
  "GOLONDRINAS HANDBALL LOS STUDS": "Golondrinas",
  "CLUB SOCIAL": "Club Social",
  "CLUB VILLA VATTEONE": "Villa Vatteone",
  "47 HANDBALL CLUB": "47 Handball Club",
  "HANDBALL LA PATRIADA": "La Patriada",
  "CAQ HANDBALL": "CAQ Handball",
};
const SEDES = { "Polideportivo Municipal Néstor Kirchner": "Polideportivo N. Kirchner (Ezeiza)" };
const slug = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esADB = n => /ATENEO DON BOSCO/i.test(n);
const corto = n => { const c = CORTO[n.trim()]; if (!c) throw new Error("Rival sin nombre corto: " + n + " (agregarlo a CORTO en maxi-actualizar.js)"); return c; };
const pedir = async u => { const r = await fetch(u, { headers: CAB }); const j = await r.json(); if (j && j.code === "update-app") throw new Error("La API pide otra versión de app: subir API_VERSION"); return j; };

(async () => {
  let s = fs.readFileSync(path.join(REPO, "datos.js"), "utf8");
  const D0 = new Function(s + ";return DATOS")();
  const pl = D0.planteles.find(p => p.id === "maxi");

  // Partidos del Bosco, fecha por fecha, hasta que una fecha venga vacía
  const partidos = [], escudos = {};
  for (let r = 1; r <= 30; r++) {
    const j = await pedir(`${API}/fixtures/${ZONA}?round=${r}`);
    const ms = (j && j.matches) || []; if (!ms.length) break;
    for (const m of ms) {
      const eq = m.positions.map(p => (p.roster || p.new_roster || {}).team || { name: "?" });
      if (!eq.some(t => esADB(t.name))) continue;
      eq.forEach(t => { if (!esADB(t.name) && t.logo) escudos[corto(t.name)] = t.logo; });
      // El orden de los equipos es nominal: la localía real la dice la sede (en Don Bosco 116 somos locales)
      const sedeApi = m.venue && m.venue.name;
      const somosLocal = sedeApi ? /Ateneo Don Bosco/i.test(sedeApi) : esADB(eq[0].name);
      const nuestroIndice = esADB(eq[0].name) ? 0 : 1;
      const [f, hora] = m.date_iso.slice(0, 16).split("T");
      const p = { f, c: somosLocal ? "L" : "V", r: corto(eq[1 - nuestroIndice].name) };
      if (hora === "00:00") p.sinHora = true; else if (hora !== pl.hora) p.h = hora;
      if (sedeApi && !somosLocal) p.sede = SEDES[sedeApi] || sedeApi;
      if (!sedeApi && !p.g) p.sede = "a confirmar";   // la liga todavía no dijo dónde se juega
      if (m.closed && m.show_result && m.goals) { const [a, b] = m.goals; p.g = nuestroIndice === 0 ? a + "-" + b : b + "-" + a; }
      partidos.push(p);
    }
  }
  partidos.sort((a, b) => a.f.localeCompare(b.f));

  // Tabla del Clausura
  const tablas = await pedir(`${API}/tables/points`);
  const cat = tablas.find(t => t.id === CATEGORIA); const zona = cat && cat.zones.find(z => z.id === ZONA);
  if (!zona) throw new Error("No encontré la tabla del Clausura");
  const tabla = zona.table.sort((a, b) => a.POS - b.POS).map(f => [f.POS, corto(f.name), f.PTS.value, f.PJ.value, f.PG.value, f.PE.value, f.PP.value, f.GF.value, f.GC.value]);

  // Escudos que falten (los baja del CDN de la liga y los deja a 400 px)
  let sharp = null; try { sharp = require(path.join(process.env.TEMP, "adb-node/node_modules/sharp")); } catch {}
  for (const [nombre, url] of Object.entries(escudos)) {
    const destino = path.join(REPO, "fotos/rivales", slug(nombre) + ".png");
    if (fs.existsSync(destino)) continue;
    if (!sharp) { console.log("Falta el escudo de " + nombre + " (sin sharp no lo puedo bajar): " + url); continue; }
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    await sharp(buf).resize({ width: 400, height: 400, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ palette: true, quality: 80, compressionLevel: 9 }).toFile(destino);
    console.log("escudo nuevo:", path.relative(REPO, destino));
  }

  // Escribir en datos.js
  const fila = p => "{" + Object.entries(p).map(([k, v]) => k + ":" + (typeof v === "string" ? '"' + v + '"' : v)).join(",") + "}";
  const bloqueP = "partidos:[\n      " + partidos.map(fila).join(",").replace(/(.{100,}?),\{/g, "$1,\n      {") + "\n    ]";
  const bloqueT = "tabla:[\n      " + tabla.map(f => "[" + f.map(v => typeof v === "string" ? JSON.stringify(v) : v).join(",") + "]").join(",\n      ") + "\n    ]";
  const ini = s.indexOf('{ id:"maxi"'); const fin = s.indexOf("\n  ],", ini);
  let b = s.slice(ini, fin);
  b = b.replace(/partidos:\[[\s\S]*?\]/, bloqueP);
  b = /tabla:\[/.test(b) ? b.replace(/,?\s*tabla:\[[\s\S]*?\n    \]/, ", " + bloqueT) : b.replace(/(partidos:\[[\s\S]*?\n    \])/, "$1, " + bloqueT);
  b = b.replace(/\n    \]\s*\}\s*$/, "\n    ] }");
  s = s.slice(0, ini) + b + s.slice(fin);
  s = s.replace(/\/\/ ⚠️ Maxihandball: falta cargar su fixture[^\n]*\n/, "// Maxihandball: fixture y tabla de la Liga Maxi Handball (timbo.futbol), con maxi-actualizar.js.\n");
  new Function(s + ";return DATOS")();
  fs.writeFileSync(path.join(REPO, "datos.js"), s);

  const D = new Function(s + ";return DATOS")(); const m = D.planteles.find(p => p.id === "maxi"); const adb = m.tabla.find(f => f[1] === "Ateneo Don Bosco");
  console.log("Maxihandball:", m.partidos.length, "partidos,", m.partidos.filter(p => p.g).length, "jugados ·", adb ? adb[0] + "º de " + m.tabla.length + " · " + adb[2] + " pts" : "sin tabla");
  m.partidos.forEach(p => console.log("  " + p.f + " " + (p.c === "L" ? "vs" : "en") + " " + p.r + (p.h ? " " + p.h : p.sinHora ? " (hora a confirmar)" : "") + (p.sede ? " · " + p.sede : "") + (p.g ? " → " + p.g : "")));
})();
