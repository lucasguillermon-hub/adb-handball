/* Sincronización semanal con FeMeBal: pasa el crudo del scraper a datos.js.

   Uso: node herramientas/femebal-actualizar.js [herramientas/femebal-crudo-<fecha>.json]
   Sin argumento toma el femebal-crudo-*.json más nuevo.

   El crudo es lo que devuelve el navegador con femebal-scraper.browser.js:
   JSON.stringify({ fix: __fix, tablas: __tablas }). Para cada torneo del Bosco reemplaza en
   datos.js el bloque partidos:[...] (fecha, condición, rival, hora propia y resultado) y el
   bloque tabla:[...]. Minis copia las fechas de Infantiles sin resultados. Un rival que no
   esté en el mapa de nombres cortos (femebal-datos-2026-09-18.json, clave "corto") corta el
   script: hay que agregarlo ahí y bajar su escudo con femebal-escudos.js.
   femebal-correcciones.json: cambios confirmados por el club que FeMeBal no refleja (localía "c",
   hora "h"); se aplican encima del crudo en cada corrida. Sacar la entrada cuando FeMeBal lo corrija. */
const fs = require("fs");
const path = require("path");
const REPO = path.resolve(__dirname, "..");

const archivo = process.argv[2] || fs.readdirSync(__dirname).filter(f => /^femebal-crudo-.*\.json$/.test(f)).sort().pop();
if (!archivo) throw new Error("No hay ningún femebal-crudo-<fecha>.json en herramientas/");
const CORRECCIONES = fs.existsSync(path.join(__dirname, "femebal-correcciones.json")) ? JSON.parse(fs.readFileSync(path.join(__dirname, "femebal-correcciones.json"), "utf8")) : [];
const crudo = JSON.parse(fs.readFileSync(path.resolve(__dirname, archivo), "utf8"));
const fechaSync = (archivo.match(/(\d{4})-(\d{2})-(\d{2})/) || []).slice(1).reverse().join("/");

const CORTO = JSON.parse(fs.readFileSync(path.join(__dirname, "femebal-datos-2026-09-18.json"), "utf8")).corto;
CORTO["Municipalidad de Tres de Febrero"] = "Cedem Caseros";
const base = n => n.trim().replace(/ [BCD]$/, "");
const esADB = n => /^Ateneo Don Bosco/.test(n.trim());
const corto = n => { if (esADB(n)) return "Ateneo Don Bosco"; const c = CORTO[base(n)]; if (!c) throw new Error("Rival sin nombre corto: " + n); return c; };

// Título del torneo en FeMeBal → id del plantel en datos.js (y hora habitual del plantel)
const TORNEOS = {
  "Mayores - 1º División - Femenino": "mayores-a",
  "Mayores - 3º División - Femenino": "mayores-b",
  "Mayores - 4º División - Masculino": "masculino",
  "Infantiles - C - Femenino": "infantiles",
  "Menores - C - Femenino": "menores",
  "Cadetes - C - Femenino": "cadetas",
  "Juveniles - C - Femenino": "juveniles",
  "Junior - C - Femenino": "juniors",
};
const MESES = { enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6, julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12 };
const idDe = titulo => { const k = Object.keys(TORNEOS).find(k => titulo.endsWith(k)); if (!k) throw new Error("Torneo desconocido: " + titulo); return TORNEOS[k]; };

let s = fs.readFileSync(path.join(REPO, "datos.js"), "utf8");
const D0 = new Function(s + ";return DATOS")();
const horaPlantel = id => D0.planteles.find(p => p.id === id).hora;

// "sáb 19 septiembre 18:00S.A.G. Polvorines 26 33Ateneo Don Bosco " → partido de datos.js
function partido(fila, horaBase){
  const m = fila.texto.match(/^\S+ (\d{2}) (\S+) (\d{2}:\d{2})(.*)$/);
  if (!m) throw new Error("No entiendo la fila: " + fila.texto);
  const f = "2026-" + String(MESES[m[2]]).padStart(2, "0") + "-" + m[1];
  if (/Fe\.Me\.Bal\.? Libre/.test(fila.local + fila.visita)) return { f, c: "libre" };
  const somosLocal = esADB(fila.local);
  const p = { f, c: somosLocal ? "L" : "V", r: corto(somosLocal ? fila.visita : fila.local) };
  if (m[3] !== "00:00" && m[3] !== horaBase) p.h = m[3];
  const g = m[4].match(/(\d+) (\d+)/);   // jugado: "local 26 33visita"; pendiente: "localVsvisita"
  if (g) p.g = somosLocal ? g[1] + "-" + g[2] : g[2] + "-" + g[1];   // siempre nuestros-de ellos
  return p;
}
const filaPartido = p => "{" + Object.entries(p).map(([k, v]) => k + ':"' + v + '"').join(",") + "}";
const bloquePartidos = ps => "partidos:[\n      " + ps.map(filaPartido).join(",").replace(/(.{100,}?),\{/g, "$1,\n      {") + "\n    ]";
const bloqueTabla = filas => "tabla:[\n      " + filas.map(f => "[" + f.map(v => typeof v === "string" ? JSON.stringify(v) : v).join(",") + "]").join(",\n      ") + "\n    ]";

function bloqueDe(id){ const ini = s.indexOf(`{ id:"${id}"`); if (ini < 0) throw new Error("plantel " + id); const fin = s.indexOf('{ id:"', ini + 5); return [ini, fin < 0 ? s.length : fin]; }
function reemplazar(id, re, nuevo){
  const [ini, fin] = bloqueDe(id); const b = s.slice(ini, fin);
  if (!re.test(b)) throw new Error("no encontré " + re + " en " + id);
  s = s.slice(0, ini) + b.replace(re, nuevo) + s.slice(fin);
}

const resumen = [];
for (const [titulo, filas] of Object.entries(crudo.fix)) {
  const id = idDe(titulo);
  const ps = filas.sort((a, b) => a.f - b.f).map(f => partido(f, horaPlantel(id)));
  // Correcciones del club que FeMeBal todavía no refleja (cambios de localía u hora): femebal-correcciones.json
  for (const c of CORRECCIONES.filter(c => c.id === id)) { const p = ps.find(p => p.f === c.f); if (!p) continue; if (c.c) p.c = c.c; if (c.h) p.h = c.h; if (c.h === null) delete p.h; }
  const antes = D0.planteles.find(p => p.id === id).partidos;
  const nuevos = ps.filter(p => p.g && !antes.find(a => a.f === p.f && a.g));
  reemplazar(id, /partidos:\[[\s\S]*?\n    \]/, bloquePartidos(ps));
  if (id === "infantiles") reemplazar("minis", /partidos:\[[\s\S]*?\n    \]/, bloquePartidos(ps.map(p => p.c === "libre" ? p : { f: p.f, c: p.c, r: p.r })));
  resumen.push({ id, nuevos });
}
for (const [titulo, filas] of Object.entries(crudo.tablas)) {
  const id = idDe(titulo);
  reemplazar(id, /tabla:\[[\s\S]*?\n    \]/, bloqueTabla(filas.map(f => [f.pos, corto(f.equipo), f.pts, f.pj, f.pg, f.pe, f.pp, f.gf, f.gc])));
}
if (fechaSync) s = s.replace(/Fixture sincronizado con FeMeBal \(femebal\.com\/tournament-tracker\) el \d\d\/\d\d\/\d{4}\./, `Fixture sincronizado con FeMeBal (femebal.com/tournament-tracker) el ${fechaSync}.`);
fs.writeFileSync(path.join(REPO, "datos.js"), s);

// Resumen: resultados nuevos y puesto de cada plantel
const D = new Function(s + ";return DATOS")();
for (const { id, nuevos } of resumen) {
  const pl = D.planteles.find(p => p.id === id); const adb = (pl.tabla || []).find(f => f[1] === "Ateneo Don Bosco");
  const res = nuevos.map(p => `${p.c === "L" ? "vs" : "en"} ${p.r} ${p.g} (${+p.g.split("-")[0] > +p.g.split("-")[1] ? "ganamos" : +p.g.split("-")[0] < +p.g.split("-")[1] ? "perdimos" : "empate"})`).join(", ");
  console.log(pl.nombre.padEnd(18), (res || "sin resultado nuevo").padEnd(44), adb ? `${adb[0]}º de ${pl.tabla.length} · ${adb[2]} pts` : "");
}
