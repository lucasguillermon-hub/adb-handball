/* Dorsales (y goles) de cada plantel desde las planillas de partido de FeMeBal.

   Uso: node herramientas/femebal-dorsales.js [herramientas/femebal-planillas-<fecha>.json]
   El JSON es { "<título del torneo>": [ { f, url } ] } y sale del navegador con __hojas()
   (femebal-scraper.browser.js): la URL del PDF "Ver planilla" de cada partido jugado del Bosco.

   - Baja cada PDF a material-club/planillas/<plantel>-f<n>.pdf (carpeta ignorada) si no está.
   - Lee la columna del Bosco: número, "Apellido, Nombre" y goles.
   - Para cada plantel arma dorsales: { "Nombre Apellido": número }, con el número que la jugadora
     usó más veces, y goles: { "Nombre Apellido": total }. Los nombres se emparejan con
     planteles[].jugadoras de datos.js (la lista del club, que manda en la grafía). Quien jugó
     dos o más partidos con el plantel y no está en la lista se agrega a jugadoras; quien jugó
     uno solo se toma como refuerzo de otra categoría y se informa nada más.
   - Minis e Infantiles (jugadoras:[]) no entran: son formativas.
   - Escribe en datos.js `dorsales:{...}`, `goles:{...}` (total del torneo) y `golesFecha:{ fecha:{...} }`
     (goles de cada partido, con la fecha del partido como clave) en cada plantel; reemplaza si
     existen. golesFecha va aparte de partidos:[...] para que femebal-actualizar.js no lo pise.

   Necesita pdf-parse en %TEMP%\adb-node. */
const fs = require("fs"); const path = require("path");
const pdf = require(path.join(process.env.TEMP, "adb-node/node_modules/pdf-parse"));
const REPO = path.resolve(__dirname, "..");
const archivo = process.argv[2] || fs.readdirSync(__dirname).filter(f => /^femebal-planillas-.*\.json$/.test(f)).sort().pop();
const PLANILLAS = JSON.parse(fs.readFileSync(path.resolve(__dirname, archivo), "utf8"));
const TORNEOS = { "Mayores - 1º División - Femenino": "mayores-a", "Mayores - 3º División - Femenino": "mayores-b", "Mayores - 4º División - Masculino": "masculino",
  "Infantiles - C - Femenino": "infantiles", "Menores - C - Femenino": "menores", "Cadetes - C - Femenino": "cadetas", "Juveniles - C - Femenino": "juveniles", "Junior - C - Femenino": "juniors" };
const idDe = t => { const k = Object.keys(TORNEOS).find(k => t.endsWith(k)); if (!k) throw new Error("Torneo desconocido: " + t); return TORNEOS[k]; };
const DIR = path.join(REPO, "material-club/planillas"); fs.mkdirSync(DIR, { recursive: true });

const sinTilde = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();
const titulo = s => s.toLowerCase().replace(/(^|[\s'])\S/g, c => c.toUpperCase());
// Distancia de edición, para perdonar una letra distinta entre la planilla y la lista del club
const dist = (a, b) => { const m = []; for (let i = 0; i <= a.length; i++) { m[i] = [i]; for (let j = 1; j <= b.length; j++) m[i][j] = i ? Math.min(m[i-1][j] + 1, m[i][j-1] + 1, m[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)) : j; } return m[a.length][b.length]; };
// Iguales, a una letra de distancia, o uno es el principio del otro (la lista del club a veces
// corta apellidos largos: "Marsico" por "Marsicovetere")
const parecidos = (a, b) => a === b || (a.length > 4 && b.length > 4 && (dist(a, b) <= 1 || a.startsWith(b) || b.startsWith(a)));

// Texto de una planilla → filas del Bosco: [{ n, apellido, nombre, goles }]
function filasDelBosco(texto){
  const t = texto.replace(/\r/g, "");
  // Dos columnas, "NºLocal" y "NºVisitante"; el Bosco está en la que sigue a su nombre en el encabezado.
  const local = /Equipo local\s*\n\s*Ateneo Don Bosco/.test(t);
  const ini = t.search(local ? /Nº ?Local/ : /Nº ?Visitante/); if (ini < 0) throw new Error("planilla sin columna del Bosco");
  const desde = t.slice(ini);
  const fin = desde.search(local ? /Nº ?Visitante/ : /Arbitros/);
  const filas = [];
  for (const linea of desde.slice(0, fin > 0 ? fin : undefined).split("\n")) {
    const m = linea.match(/^\s*(\d{1,2})\s+([^,]+),\s*([^-\d]+?)\s+(\d+|-)\s+(\d+|-)\s+(\d+|-)\s+(\d+|-)\s+(\d+|-)\s*$/);
    if (!m) continue;   // A/B/C/D son el cuerpo técnico
    filas.push({ n: +m[1], apellido: m[2].replace(/\s*[́´’'`]\s*/g, "'").trim(), nombre: m[3].replace(/\.{3}$/, "").trim(), goles: m[4] === "-" ? 0 : +m[4] });
  }
  return filas;
}

(async () => {
  let s = fs.readFileSync(path.join(REPO, "datos.js"), "utf8");
  const D = new Function(s + ";return DATOS")();
  const agregadas = [], refuerzos = [];
  for (const [tit, hojas] of Object.entries(PLANILLAS)) {
    const id = idDe(tit); const pl = D.planteles.find(p => p.id === id);
    if (!pl.jugadoras || !pl.jugadoras.length) continue;   // formativas
    const usos = {}, goles = {}, partidos = {};   // por nombre: { numero → veces }, goles, partidos jugados
    const porFecha = {};   // fecha del partido → { nombre → goles }
    for (const h of hojas) {
      const pdfPath = path.join(DIR, id + "-f" + h.f + ".pdf");
      if (!fs.existsSync(pdfPath)) fs.writeFileSync(pdfPath, Buffer.from(await (await fetch(h.url)).arrayBuffer()));
      const texto = (await pdf(fs.readFileSync(pdfPath))).text;
      // Manda la fecha del fixture (partidos[] viene en orden de fecha 1..15): la planilla a veces
      // trae el día en que se cerró y no el que se jugó, y la clave tiene que coincidir con el partido.
      const enFixture = (pl.partidos || [])[h.f - 1];
      const fechaPartido = (enFixture && enFixture.f) || (texto.match(/Fecha:\s*\n?\s*(\d{4}-\d{2}-\d{2})/) || [])[1];
      if (fechaPartido) porFecha[fechaPartido] = porFecha[fechaPartido] || {};
      for (const fila of filasDelBosco(texto)) {
        // Emparejar con la lista del club: apellido igual (o casi) y algún nombre en común
        // El apellido también se compara todo junto, por los apóstrofos ("D'Urzo" y "Durzo" son la misma)
        const aps = sinTilde(fila.apellido).split(" "), nom = sinTilde(fila.nombre).split(" "); aps.push(aps.join(""));
        const nombreClub = pl.jugadoras.find(j => { const jj = sinTilde(j).split(" "); jj.push(jj.slice(1).join(""));
          return aps.some(a => jj.some(x => parecidos(x, a))) && nom.some(a => jj.some(x => parecidos(x, a))); });
        const clave = nombreClub || titulo(fila.nombre.split(" ")[0] + " " + fila.apellido);
        usos[clave] = usos[clave] || {}; usos[clave][fila.n] = (usos[clave][fila.n] || 0) + 1;
        goles[clave] = (goles[clave] || 0) + fila.goles;
        partidos[clave] = (partidos[clave] || 0) + 1;
        if (fechaPartido && fila.goles) porFecha[fechaPartido][clave] = fila.goles;
      }
    }
    // Quien no está en la lista del club: con dos o más partidos entra al plantel; con uno, es refuerzo
    const nuevas = [];
    for (const nombre of Object.keys(usos)) {
      if (pl.jugadoras.includes(nombre)) continue;
      if (partidos[nombre] >= 2) { nuevas.push(nombre); agregadas.push(pl.nombre + ": " + nombre + " (" + partidos[nombre] + " partidos)"); }
      else { refuerzos.push(pl.nombre + ": " + nombre); delete usos[nombre]; delete goles[nombre]; for (const f of Object.values(porFecha)) delete f[nombre]; }
    }
    const dorsales = {};
    for (const [nombre, nums] of Object.entries(usos)) dorsales[nombre] = +Object.entries(nums).sort((a, b) => b[1] - a[1])[0][0];

    // Escribir en datos.js: jugadoras nuevas al final de la lista, y dorsales/goles después
    const ini = s.indexOf(`{ id:"${id}"`); const finPl = s.indexOf('{ id:"', ini + 5);
    let b = s.slice(ini, finPl < 0 ? undefined : finPl);
    b = b.replace(/,\s*\/\/ Dorsales y goles[^\n]*\n\s*dorsales:\{[^}]*\},\s*goles:\{[^}]*\}(,\s*golesFecha:\{[\s\S]*?\n      \})?/, "");
    const orden = Object.keys(dorsales).sort((a, b) => dorsales[a] - dorsales[b]);
    const fechas = Object.keys(porFecha).sort();
    const txt = "\n      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).\n      dorsales:{" + orden.map(n => JSON.stringify(n) + ":" + dorsales[n]).join(", ") + "},\n      goles:{" + orden.filter(n => goles[n]).map(n => JSON.stringify(n) + ":" + goles[n]).join(", ") + "}"
      + ",\n      golesFecha:{\n" + fechas.map(f => "        " + JSON.stringify(f) + ":{" + Object.keys(porFecha[f]).sort((a, b) => porFecha[f][b] - porFecha[f][a]).map(n => JSON.stringify(n) + ":" + porFecha[f][n]).join(", ") + "}").join(",\n") + "\n      }";
    const m = b.match(/jugadoras:\[[\s\S]*?\]/); if (!m) throw new Error("sin jugadoras: " + id);
    // Las nuevas van al final de la lista; si la última línea ya tenía el comentario, se reemplaza
    const lista = nuevas.length ? m[0].replace(/,?\s*(\/\/[^\n]*)?\s*\]$/, ",\n      " + nuevas.map(n => JSON.stringify(n)).join(", ") + "   // según las planillas de FeMeBal\n    ]") : m[0];
    b = b.replace(m[0], lista + "," + txt);
    s = s.slice(0, ini) + b + (finPl < 0 ? "" : s.slice(finPl));
    const top = Object.keys(goles).sort((a, b) => goles[b] - goles[a])[0];
    console.log(pl.nombre.padEnd(18), String(Object.keys(dorsales).length).padStart(2) + " con dorsal", "· goleadora: " + top + " (" + goles[top] + ")");
  }
  new Function(s + ";return DATOS")();   // datos.js tiene que seguir siendo válido antes de escribirlo
  fs.writeFileSync(path.join(REPO, "datos.js"), s);
  if (agregadas.length) console.log("\nAgregadas a jugadoras (dos o más partidos, no estaban en la lista del club):\n  " + agregadas.join("\n  "));
  if (refuerzos.length) console.log("\nRefuerzos de un solo partido (no se agregan):\n  " + refuerzos.join("\n  "));
})();
