/* Pasa las fotos de un partido a la galería del sitio.

   Uso: node herramientas/fotos-galeria.js "fotos/Partidos/<Plantel>/<AAAA-MM-DD> <Fotógrafo>"
   Ejemplo: node herramientas/fotos-galeria.js "fotos/Partidos/Cuarta caballeros/2026-08-16 JZ Audiovisuales"

   - La carpeta del plantel se llama como en el club (Primera damas, Cuarta caballeros...).
   - La carpeta del partido empieza con la fecha; lo que sigue es quién sacó las fotos. Con la
     fecha se busca el partido en el fixture del plantel: de ahí salen rival y local/visitante.
   - Las fotos se exportan a fotos/<plantel>/<fecha>-<nn>.jpg, 1600 px de ancho, JPG, bajo
     300 KB (regla 7), y se suman a esa fecha del álbum en datos.js con un alt en castellano.
   - Un fotógrafo nuevo se agrega a galeria.fotografos (sin Instagram; se completa a mano).
   fotos/Partidos/ es solo el buzón de originales: está ignorada en git y no se publica.

   Necesita sharp, instalado en %TEMP%\adb-node (npm install sharp ahí, no en el repo). */
const fs = require("fs"); const path = require("path");
const sharp = require(path.join(process.env.TEMP, "adb-node/node_modules/sharp"));
const REPO = path.resolve(__dirname, "..");

const carpeta = process.argv[2];
if (!carpeta) { console.error("Falta la carpeta del partido."); process.exit(1); }
const origen = path.resolve(REPO, carpeta);
const [, plantelCarpeta, partidoCarpeta] = carpeta.replace(/\\/g, "/").match(/Partidos\/([^/]+)\/([^/]+)/) || [];
const [, fecha, fotografo] = (partidoCarpeta || "").match(/^(\d{4}-\d{2}-\d{2})\s+(.+)$/) || [];
if (!fecha) { console.error("La carpeta tiene que ser fotos/Partidos/<Plantel>/<AAAA-MM-DD> <Fotógrafo>."); process.exit(1); }

const slug = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
let s = fs.readFileSync(path.join(REPO, "datos.js"), "utf8");
const D = new Function(s + ";return DATOS")();

const album = D.galeria.albumes.find(a => a.titulo.toLowerCase() === plantelCarpeta.toLowerCase());
if (!album) { console.error("No hay álbum para " + plantelCarpeta + ". Álbumes: " + D.galeria.albumes.map(a => a.titulo).join(", ")); process.exit(1); }
const plantel = D.planteles.find(p => p.nombre.toLowerCase() === plantelCarpeta.toLowerCase());
const partido = plantel && plantel.partidos.find(p => p.f === fecha && p.c !== "libre");
if (!partido) { console.error("No hay partido de " + album.titulo + " el " + fecha + " en el fixture de datos.js."); process.exit(1); }

const fechaTxt = fecha.split("-").reverse().slice(0, 2).join("/");
const condicion = partido.c === "L" ? " de local" : " de visitante";
const destinoDir = path.join(REPO, "fotos", slug(album.titulo)); fs.mkdirSync(destinoDir, { recursive: true });
const archivos = fs.readdirSync(origen).filter(a => /\.(png|jpe?g|webp)$/i.test(a)).sort();
if (!archivos.length) { console.error("No hay fotos en " + origen); process.exit(1); }

(async () => {
  const yaHabia = album.fechas.find(fe => fe.f === fecha);
  const nuevas = [];
  let n = yaHabia ? yaHabia.fotos.length : 0;   // sigue la numeración si ya había fotos de esa fecha
  for (const a of archivos) {
    n++;
    const nombre = fecha + "-" + String(n).padStart(2, "0") + ".jpg";
    const salida = path.join(destinoDir, nombre);
    // Calidad 80 y, si pasa los 300 KB, baja de a poco hasta entrar
    for (const quality of [80, 72, 64, 56, 48]) {
      await sharp(path.join(origen, a)).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality, mozjpeg: true }).toFile(salida);
      if (fs.statSync(salida).size <= 300 * 1024) break;
    }
    const meta = await sharp(salida).metadata();
    const foto = { src: "fotos/" + slug(album.titulo) + "/" + nombre, alt: album.titulo + " contra " + partido.r + ", " + fechaTxt + condicion + " (foto " + n + ")" };
    if (meta.height > meta.width) foto.alto = true;
    nuevas.push(foto);
    console.log(a.padEnd(28), "→", foto.src, Math.round(fs.statSync(salida).size / 1024) + " KB");
  }

  const filaFoto = x => `          { src:"${x.src}", alt:"${x.alt}"${x.alto ? ", alto:true" : ""} }`;
  if (yaHabia) {
    // Suma las fotos al final de esa fecha
    const ini = s.indexOf(`{ f:"${fecha}"`, s.indexOf(`{ titulo:"${album.titulo}"`));
    const a = s.indexOf("fotos:[", ini) + "fotos:[".length, b = s.indexOf("\n        ]", a);
    s = s.slice(0, b) + ",\n" + nuevas.map(filaFoto).join(",\n") + s.slice(b);
  } else {
    // Fecha nueva dentro del álbum
    const bloque = `        { f:"${fecha}", rival:"${partido.r}", c:"${partido.c}", fotografo:"${fotografo}", fotos:[\n${nuevas.map(filaFoto).join(",\n")}\n        ]}`;
    const ini = s.indexOf(`{ titulo:"${album.titulo}", fechas:[`); if (ini < 0) throw new Error("No encontré el álbum en datos.js");
    const a = s.indexOf("fechas:[", ini) + "fechas:[".length;
    const vacio = /^\s*\]/.test(s.slice(a));
    s = vacio ? s.slice(0, a) + "\n" + bloque + "\n      " + s.slice(a).replace(/^\s*/, "")
              : s.slice(0, a) + "\n" + bloque + "," + s.slice(a);
  }
  if (!D.galeria.fotografos.hasOwnProperty(fotografo)) {
    const a = s.indexOf("fotografos: {") + "fotografos: {".length;
    s = s.slice(0, a) + `\n      "${fotografo}": "",    // ⚠️ pegar el Instagram` + s.slice(a);
    console.log(`\nFotógrafo nuevo: "${fotografo}". Pegale el Instagram en galeria.fotografos de datos.js.`);
  }
  fs.writeFileSync(path.join(REPO, "datos.js"), s);
  new Function(s + ";return DATOS")();   // datos.js tiene que seguir siendo válido
  console.log(`\n${nuevas.length} fotos de ${album.titulo} vs ${partido.r} (${fechaTxt}), fotos de ${fotografo}.`);
})();
