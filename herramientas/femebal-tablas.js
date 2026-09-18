const fs = require("fs"); const REPO = "C:/Users/Lucas/adb-handball";
const F = JSON.parse(fs.readFileSync(__dirname + "/femebal-datos-2026-09-18.json", "utf8"));
F.corto["Municipalidad de Tres de Febrero"] = "Cedem Caseros";
const corto = n => /^Ateneo Don Bosco/.test(n) ? "Ateneo Don Bosco" : (F.corto[n.replace(/ [BCD]$/, "")] || n);

// tablas.txt → { plantel: [[pos, equipo, pts, pj, pg, pe, pp, gf, gc], ...] }
const tablas = {}; let actual = null;
for (const linea of fs.readFileSync(__dirname + "/femebal-tablas-2026-09-18.txt", "utf8").split(/\r?\n/)) {
  if (linea.startsWith("## ")) { actual = linea.slice(3).trim(); tablas[actual] = []; continue; }
  if (!linea.trim() || !actual) continue;
  const [pos, equipo, ...n] = linea.split("|");
  tablas[actual].push([+pos, corto(equipo), ...n.map(Number)]);
}

let s = fs.readFileSync(REPO + "/datos.js", "utf8");
// Cada fila: [posición, equipo, puntos, jugados, ganados, empatados, perdidos, goles a favor, en contra]
const bloque = filas => "tabla:[\n      " + filas.map(f => "[" + f.map(v => typeof v === "string" ? JSON.stringify(v) : v).join(",") + "]").join(",\n      ") + "\n    ]";
for (const [id, filas] of Object.entries(tablas)) {
  const ini = s.indexOf(`{ id:"${id}"`); if (ini < 0) throw new Error(id);
  const fin = s.indexOf('{ id:"', ini + 5);
  let b = s.slice(ini, fin < 0 ? undefined : fin);
  if (/tabla:\[/.test(b)) b = b.replace(/tabla:\[[\s\S]*?\n    \]/, bloque(filas));
  else b = b.replace(/(partidos:\[[\s\S]*?\n    \])/, "$1, " + bloque(filas));
  if (!/tabla:\[/.test(b)) throw new Error("no se pudo poner la tabla de " + id);
  s = s.slice(0, ini) + b + (fin < 0 ? "" : s.slice(fin));
}
s = s.replace(`    // Campos de cada partido: f fecha · c L/V/libre · r rival · h hora (si difiere de la del
    // plantel) · g resultado "nuestros-de ellos" cuando ya se jugó.`,
`    // Campos de cada partido: f fecha · c L/V/libre · r rival · h hora (si difiere de la del
    // plantel) · g resultado "nuestros-de ellos" cuando ya se jugó.
    // tabla: posiciones del torneo, una fila por equipo:
    // [puesto, equipo, puntos, jugados, ganados, empatados, perdidos, goles a favor, en contra].`);
fs.writeFileSync(REPO + "/datos.js", s);
const D = new Function(s + ";return DATOS")();
for (const p of D.planteles) { const t = p.tabla || []; const adb = t.find(f => f[1] === "Ateneo Don Bosco"); console.log(p.id.padEnd(11), t.length + " equipos", adb ? "· Bosco " + adb[0] + "º con " + adb[2] + " pts" : ""); }
