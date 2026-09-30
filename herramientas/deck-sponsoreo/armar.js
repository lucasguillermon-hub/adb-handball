/* Pasa el deck de sponsoreo a PDF, para presentar o mandar por mail.

   Uso: node herramientas/deck-sponsoreo/armar.js [2026-10]
   Sin argumento toma el .html más nuevo de esta carpeta y deja el PDF al lado.

   Usa el Chrome que ya está instalado, en modo headless: una hoja por lámina, del tamaño
   que declara el @page del HTML (13,33 x 7,5 pulgadas, la proporción de una diapositiva).
   No necesita ningún paquete. */
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const AQUI = __dirname;
const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].find(p => fs.existsSync(p));
if (!CHROME) throw new Error("No encuentro Chrome");

const pedido = process.argv[2];
const archivo = pedido
  ? (pedido.endsWith(".html") ? pedido : pedido + ".html")
  : fs.readdirSync(AQUI).filter(f => f.endsWith(".html")).sort().pop();
if (!archivo || !fs.existsSync(path.join(AQUI, archivo))) throw new Error("No encuentro el deck: " + archivo);

const salida = path.join(AQUI, archivo.replace(/\.html$/, ".pdf"));
const esperar = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const perfil = path.join(process.env.TEMP || "/tmp", "adb-chrome-deck");
  const chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", "--remote-debugging-port=9223",
    "--user-data-dir=" + perfil, "about:blank"], { stdio: "ignore" });
  let ws;
  try {
    let paginas = null;
    for (let i = 0; i < 20 && !paginas; i++) {
      await esperar(700);
      try { paginas = (await (await fetch("http://127.0.0.1:9223/json")).json()).filter(t => t.type === "page"); } catch {}
    }
    if (!paginas || !paginas.length) throw new Error("Chrome no abrió el puerto de depuración");

    ws = new WebSocket(paginas[0].webSocketDebuggerUrl);
    await new Promise((ok, mal) => { ws.addEventListener("open", ok); ws.addEventListener("error", mal); });
    let id = 0; const pendientes = new Map();
    ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (pendientes.has(m.id)) { pendientes.get(m.id)(m); pendientes.delete(m.id); } });
    const cmd = (method, params) => new Promise(r => { const i = ++id; pendientes.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

    await cmd("Page.enable");
    await cmd("Page.navigate", { url: "file:///" + path.join(AQUI, archivo).replace(/\\/g, "/") });
    await esperar(4000);   // las tipografías de Google tardan un segundo

    const r = await cmd("Page.printToPDF", {
      printBackground: true, preferCSSPageSize: true, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
    });
    if (!r.result || !r.result.data) throw new Error("Chrome no devolvió el PDF: " + JSON.stringify(r).slice(0, 200));
    fs.writeFileSync(salida, Buffer.from(r.result.data, "base64"));
    console.log(path.basename(salida), Math.round(fs.statSync(salida).size / 1024) + " KB");
  } finally {
    if (ws) try { ws.close(); } catch {}
    chrome.kill();
  }
})();
