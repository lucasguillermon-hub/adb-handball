/* Renderiza las placas de lanzamiento a PNG (1080 × 1350) con el Chrome instalado.
   Uso: node herramientas/lanzamiento/render.js
   Salida: material-club/lanzamiento/lanzamiento-<nombre>.png (carpeta ignorada en git). */
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find(fs.existsSync);
if (!CHROME) { console.error("No encontré Chrome ni Edge."); process.exit(1); }

const aqui = __dirname;
const salida = path.resolve(aqui, "../../material-club/lanzamiento");
fs.mkdirSync(salida, { recursive: true });

for (const nombre of ["padres", "sponsors"]) {
  const html = "file:///" + path.join(aqui, nombre + ".html").replace(/\\/g, "/");
  const png = path.join(salida, "lanzamiento-" + nombre + ".png");
  execFileSync(CHROME, [
    "--headless=new", "--hide-scrollbars", "--disable-gpu",
    "--window-size=1080,1350", "--force-device-scale-factor=1",
    "--virtual-time-budget=8000",          // espera a que bajen las tipografías
    "--screenshot=" + png, html,
  ], { stdio: "ignore" });
  console.log("→", path.relative(process.cwd(), png));
}
