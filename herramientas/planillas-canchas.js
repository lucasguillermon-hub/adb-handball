/* Dónde se jugó cada partido, según las planillas de FeMeBal.

   Uso: node herramientas/planillas-canchas.js

   El fixture de FeMeBal no dice la sede, pero la planilla del partido sí: trae "Jugado en"
   y "Cancha". Este script lee los PDF que ya bajó femebal-dorsales.js a
   material-club/planillas/ y lista plantel, fecha y cancha. Sirve para saber a qué planteles
   les toca la Casa del Handball (el estadio de FeMeBal), que es lo que se transmite por
   FemebalTV, y para cargar esas fechas en femebal-correcciones.json.

   Necesita pdf-parse en %TEMP%\adb-node. */
const fs = require("fs");
const path = require("path");
const pdf = require(path.join(process.env.TEMP, "adb-node/node_modules/pdf-parse"));

const REPO = path.resolve(__dirname, "..");
const DIR = path.join(REPO, "material-club/planillas");
const NOMBRE = {
  "mayores-a": "Primera damas", "mayores-b": "Tercera damas", "masculino": "Cuarta caballeros",
  "infantiles": "Infantiles", "menores": "Menores", "cadetas": "Cadetas",
  "juveniles": "Juveniles", "juniors": "Juniors",
};
const campo = (texto, etiqueta) => ((texto.match(new RegExp(etiqueta + ":\\s*\\n?\\s*([^\\n]+)")) || [])[1] || "").trim();

(async () => {
  const filas = [];
  for (const archivo of fs.readdirSync(DIR).filter(f => f.endsWith(".pdf"))) {
    const [, id, f] = archivo.match(/^(.+)-f(\d+)\.pdf$/) || [];
    if (!id) continue;
    const texto = (await pdf(fs.readFileSync(path.join(DIR, archivo)))).text;
    filas.push({
      plantel: NOMBRE[id] || id,
      fecha: campo(texto, "Fecha"),
      nro: +f,
      lugar: campo(texto, "Jugado en"),
      cancha: campo(texto, "Cancha"),
    });
  }
  filas.sort((a, b) => a.plantel.localeCompare(b.plantel) || a.nro - b.nro);
  for (const x of filas) console.log(x.plantel.padEnd(18) + "f" + String(x.nro).padEnd(3) + x.fecha + "  " + x.cancha + (x.lugar ? " (" + x.lugar + ")" : ""));

  const casa = filas.filter(x => /casa del handball|parque ol[ií]mpico|roca 4170/i.test(x.cancha + " " + x.lugar));
  console.log("\nEn la Casa del Handball: " + (casa.length ? casa.map(x => x.plantel + " " + x.fecha).join(" · ") : "ninguno de estos partidos"));
  console.log("Canchas distintas: " + [...new Set(filas.map(x => x.cancha))].join(" | "));
})();
