const fs = require("fs");
const F = JSON.parse(fs.readFileSync(__dirname + "/femebal-datos-2026-09-18.json", "utf8"));
F.corto["Municipalidad de Tres de Febrero"] = "Cedem Caseros";
const REPO = "C:/Users/Lucas/adb-handball";
let s = fs.readFileSync(REPO + "/datos.js", "utf8");
const rep = (a, b) => { if (!s.includes(a)) throw new Error("no: " + a.slice(0, 70)); s = s.replace(a, b); };

const base = n => n.replace(/ [BCD]$/, "");
const corto = n => { const c = F.corto[base(n)]; if (!c) throw new Error("sin nombre corto: " + n); return c; };
const esADB = n => /^Ateneo Don Bosco/.test(n);

// Convierte una línea "f|fecha hora|local|visita|goles" en un partido de datos.js
function partido(linea, horaBase, resultado){
  const [, fechaHora, local, visita, goles] = linea.split("|");
  const [f, hora] = fechaHora.split(" ");
  if (local === "libre") return { f, c: "libre" };
  const somosLocal = esADB(local);
  const p = { f, c: somosLocal ? "L" : "V", r: corto(somosLocal ? visita : local) };
  if (hora && hora !== "00:00" && hora !== horaBase) p.h = hora;
  const g = resultado !== undefined ? resultado : goles;
  if (g) { const [a, b] = g.split("-").map(Number); p.g = somosLocal ? a + "-" + b : b + "-" + a; }   // siempre nuestros-de ellos
  return p;
}
const fila = p => "{" + Object.entries(p).map(([k, v]) => k + ':"' + v + '"').join(",") + "}";
const bloque = ps => "partidos:[\n      " + ps.map(fila).join(",").replace(/(.{100,}?),\{/g, "$1,\n      {") + "\n    ]";

const hora = { "mayores-a": "18:00", "mayores-b": "18:00", masculino: "18:00" };
const fix = {};
fix["mayores-a"] = F.fixtures["mayores-a"].map(l => partido(l, hora["mayores-a"]));
fix["mayores-b"] = F.fixtures["mayores-b"].map(l => partido(l, hora["mayores-b"]));
fix["masculino"] = F.fixtures["masculino"].map(l => partido(l, hora["masculino"]));
for (const [id, res] of Object.entries(F.fixtures.resultadosTira)) {
  fix[id] = F.fixtures.tira.map((l, i) => partido(l.replace(/^(\d+\|\S+)\|/, "$1 00:00|") + "|", null, res[i] || ""));
}

// Reemplaza el bloque partidos:[...] de un plantel
function ponerPartidos(id, ps){
  const ini = s.indexOf(`{ id:"${id}"`); if (ini < 0) throw new Error("plantel " + id);
  const a = s.indexOf("partidos:[", ini), b = s.indexOf("]", a) + 1;
  if (a < 0 || (s.indexOf('{ id:"', ini + 5) > 0 && a > s.indexOf('{ id:"', ini + 5))) throw new Error("sin partidos: " + id);
  s = s.slice(0, a) + bloque(ps) + s.slice(b);
}
function ponerHora(id, h){
  const ini = s.indexOf(`{ id:"${id}"`); const fin = s.indexOf("\n", ini);
  s = s.slice(0, ini) + s.slice(ini, fin).replace(/hora:"\d\d:\d\d",(\s*\/\/ ⚠️ confirmar horario)?/, `hora:"${h}",`) + s.slice(fin);
}

// Mayores y caballeros: partidos con resultado
ponerPartidos("mayores-a", fix["mayores-a"]);
ponerPartidos("mayores-b", fix["mayores-b"]);
ponerPartidos("masculino", fix["masculino"]);
ponerHora("mayores-a", "18:00"); ponerHora("mayores-b", "18:00"); ponerHora("masculino", "18:00");

// La tira: el fixture vive en Infantiles (el primero con torneo en FeMeBal); Minis lo comparte.
// Cada categoría tiene su horario y sus resultados, así que cada una lleva su bloque.
ponerPartidos("minis", fix["infantiles"].map(p => ({ f: p.f, c: p.c, r: p.r })));   // sin resultados: son encuentros formativos
rep('    { id:"minis", nombre:"Minis", dia:"Domingos", hora:"11:00",   // ⚠️ confirmar horario',
    '    { id:"minis", nombre:"Minis", dia:"Domingos", hora:"10:30",   // ⚠️ confirmar horario de Minis (no está en FeMeBal)');
for (const id of ["infantiles", "menores", "cadetas", "juveniles", "juniors"]) {
  const ini = s.indexOf(`{ id:"${id}"`); const fin = s.indexOf('{ id:"', ini + 5);
  let linea = s.slice(ini, fin).replace(/, mismoFixtureQue:"minis" \},/, ", " + bloque(fix[id]) + " },");
  if (!/partidos:\[/.test(linea)) throw new Error("no se pudo poner el fixture de " + id);
  linea = linea.replace(/hora:"\d\d:\d\d",(\s*\/\/ ⚠️ confirmar horario)?/, `hora:"${F.fixtures.horasTira[id]}",`);
  s = s.slice(0, ini) + linea + s.slice(fin);
}
// comentario de la tira
rep(`    // Inferiores damas es una tira: Minis, Infantiles, Menores, Cadetas, Juveniles y Juniors
    // juegan el mismo día en el mismo lugar, todas de local o todas de visitante. El fixture
    // se carga una vez (en Minis) y las demás lo comparten con mismoFixtureQue. Lo propio de
    // cada una es el horario y el plantel. Sin "sponsor", el marcador no muestra presentador.`,
`    // Inferiores damas es una tira: Minis, Infantiles, Menores, Cadetas, Juveniles y Juniors
    // juegan el mismo día en el mismo lugar, todas de local o todas de visitante, cada una
    // a su hora. Fixture, horarios y resultados vienen de FeMeBal (división C); Minis no
    // compite en FeMeBal y copia las fechas. Sin "sponsor", el marcador no muestra presentador.
    // Campos de cada partido: f fecha · c L/V/libre · r rival · h hora (si difiere de la del
    // plantel) · g resultado "nuestros-de ellos" cuando ya se jugó.`);
rep(`  // ⚠️ Horarios de inicio estimados. Cambialos cuando salga la programación.`,
    `  // Fixture sincronizado con FeMeBal (femebal.com/tournament-tracker) el 18/09/2026.`);
fs.writeFileSync(REPO + "/datos.js", s);
const D = new Function(s + ";return DATOS")();
for (const p of D.planteles) console.log(p.id.padEnd(11), p.hora, p.partidos.length + "f", p.partidos.filter(x => x.g).length + " jugados", "| " + p.partidos.slice(0, 3).map(x => x.c + " " + x.r + (x.h ? " " + x.h : "") + (x.g ? " " + x.g : "")).join(" · "));
