const sharp = require("sharp");
const REPO = "C:/Users/Lucas/adb-handball";
const svg = require("fs").readFileSync(REPO + "/iconos/escudo.svg");

// Fondo --tinta redondeado (como los íconos anteriores) y el escudo centrado.
// altoPct deja el escudo dentro de la zona segura del ícono "maskable" (círculo central del 80 %).
async function icono(size, radioPct, altoPct, salida){
  const alto = Math.round(size * altoPct), ancho = Math.round(alto * 300 / 400);
  const escudo = await sharp(svg, { density: 600 }).resize(ancho, alto).png().toBuffer();
  const fondo = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${size*radioPct}" fill="#0A1428"/></svg>`);
  await sharp(fondo).composite([{ input: escudo, gravity: "centre" }]).png({ compressionLevel: 9 }).toFile(REPO + "/iconos/" + salida);
  console.log(salida, size + "px");
}
(async () => {
  await icono(512, 0.22, 0.66, "icono-512.png");
  await icono(192, 0.22, 0.66, "icono-192.png");
  await icono(180, 0,    0.72, "icono-180.png");   // iOS le pone las esquinas solo
})();
