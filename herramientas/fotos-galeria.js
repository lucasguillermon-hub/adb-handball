/* Pasa las fotos de un partido a la galería del sitio.

   Uso: node herramientas/fotos-galeria.js "fotos/Partidos/<Plantel>/<vs Rival>" [fecha]
   Ejemplo: node herramientas/fotos-galeria.js "fotos/Partidos/Cuarta Caballeros/vs Lafferrere" 2026-08-16

   - Lee las fotos originales de esa carpeta (PNG o JPG de cámara, sin comprimir).
   - Las exporta a fotos/<plantel>/<rival>-<nn>.jpg, 1600 px de ancho, JPG calidad 80 (regla 7).
   - Las agrega al álbum del plantel en datos.js con un alt en castellano.
   La carpeta fotos/Partidos/ es solo el buzón de originales: está ignorada en git y no se publica.

   Necesita sharp, instalado en %TEMP%\adb-node (npm install sharp ahí, no en el repo). */
const fs = require("fs"); const path = require("path");
const sharp = require(path.join(process.env.TEMP, "adb-node/node_modules/sharp"));
const REPO = path.resolve(__dirname, "..");

const carpeta = process.argv[2]; const fecha = process.argv[3] || "";
if (!carpeta) { console.error("Falta la carpeta del partido."); process.exit(1); }
const origen = path.resolve(REPO, carpeta);
const [, plantelCarpeta, partidoCarpeta] = carpeta.replace(/\\/g, "/").match(/Partidos\/([^/]+)\/([^/]+)/) || [];
if (!partidoCarpeta) { console.error("La carpeta tiene que ser fotos/Partidos/<Plantel>/<vs Rival>."); process.exit(1); }

const slug = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
let s = fs.readFileSync(path.join(REPO, "datos.js"), "utf8");
const D = new Function(s + ";return DATOS")();

// El álbum se busca por el nombre del plantel (como el club lo llama), sin distinguir mayúsculas.
const album = D.galeria.albumes.find(a => a.titulo.toLowerCase() === plantelCarpeta.toLowerCase());
if (!album) { console.error("No hay álbum para " + plantelCarpeta + ". Álbumes: " + D.galeria.albumes.map(a => a.titulo).join(", ")); process.exit(1); }
const plantel = D.planteles.find(p => p.nombre.toLowerCase() === plantelCarpeta.toLowerCase());

// Rival: se toma el nombre corto del fixture si coincide (para el alt y para la fecha si no se pasó).
const rivalCarpeta = partidoCarpeta.replace(/^vs\.?\s*/i, "").trim();
const partido = plantel && plantel.partidos.find(p => p.r && (slug(p.r).includes(slug(rivalCarpeta).slice(0, 6)) || slug(rivalCarpeta).includes(slug(p.r).slice(-6))) && (!fecha || p.f === fecha));
const rival = partido ? partido.r : rivalCarpeta;
const f = fecha || (partido && partido.f) || "";
const fechaTxt = f ? f.split("-").reverse().slice(0, 2).join("/") : "";
const condicion = partido ? (partido.c === "L" ? " de local" : " de visitante") : "";

const destinoDir = path.join(REPO, "fotos", slug(album.titulo)); fs.mkdirSync(destinoDir, { recursive: true });
const archivos = fs.readdirSync(origen).filter(a => /\.(png|jpe?g|webp)$/i.test(a)).sort();
if (!archivos.length) { console.error("No hay fotos en " + origen); process.exit(1); }

(async () => {
  const nuevas = [];
  let n = album.fotos.filter(x => x.src.includes("/" + slug(rival) + "-")).length;   // sigue la numeración si ya había fotos de ese partido
  for (const a of archivos) {
    n++;
    const nombre = slug(rival) + "-" + String(n).padStart(2, "0") + ".jpg";
    const salida = path.join(destinoDir, nombre);
    // Calidad 80 y, si pasa los 300 KB, baja de a poco hasta entrar
    for (const quality of [80, 72, 64, 56, 48]) {
      await sharp(path.join(origen, a)).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality, mozjpeg: true }).toFile(salida);
      if (fs.statSync(salida).size <= 300 * 1024) break;
    }
    const src = "fotos/" + slug(album.titulo) + "/" + nombre;
    const alt = album.titulo + " contra " + rival + (fechaTxt ? ", " + fechaTxt : "") + condicion + " (foto " + n + ")";
    nuevas.push({ src, alt });
    console.log(a.padEnd(28), "→", src, Math.round(fs.statSync(salida).size / 1024) + " KB");
  }
  // Agrega las fotos al álbum en datos.js (después de las que ya tenía)
  const ini = s.indexOf(`{ titulo:"${album.titulo}", fotos:[`); if (ini < 0) throw new Error("No encontré el álbum en datos.js");
  const a = s.indexOf("fotos:[", ini) + "fotos:[".length; const b = s.indexOf("]", a);
  const previas = s.slice(a, b).trim();
  const filas = nuevas.map(x => `\n        { src:"${x.src}", alt:"${x.alt}" }`).join(",");
  s = s.slice(0, a) + (previas ? previas.replace(/,?\s*$/, ",") : "") + filas + "\n      " + s.slice(b);
  fs.writeFileSync(path.join(REPO, "datos.js"), s);
  console.log(`\n${nuevas.length} fotos en el álbum "${album.titulo}" (${album.fotos.length + nuevas.length} en total).`);
})();
