/* Corre el scraper de FeMeBal en un Chrome headless y deja el crudo en disco.

   Uso: node herramientas/femebal-navegador.js [torneo...]
   Sin argumentos hace los ocho torneos del Bosco. Los nombres cortos son los de TORNEOS.

   Antes esto se hacía pegando femebal-scraper.browser.js en el navegador de Claude y
   copiando el JSON a mano desde el resultado de la herramienta. Con esto no hay que copiar
   nada: el script maneja Chrome por el protocolo de DevTools, le inyecta el mismo scraper y
   escribe herramientas/femebal-crudo-<fecha>.json y femebal-planillas-<fecha>.json, que es
   justo lo que leen femebal-actualizar.js y femebal-dorsales.js.

   No necesita ningún paquete: usa el Chrome que ya está instalado y el WebSocket de Node. */
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const AQUI = __dirname;
const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].find(p => fs.existsSync(p));
if (!CHROME) throw new Error("No encuentro Chrome");

// Nombre corto → [rama, categoría, índice de la tarjeta del torneo]
const TORNEOS = {
  "mayores-a":  ["Femenino",  "Mayores",    8],
  "mayores-b":  ["Femenino",  "Mayores",    15],
  "masculino":  ["Masculino", "Mayores",    21],
  "infantiles": ["Femenino",  "Infantiles", 7],
  "menores":    ["Femenino",  "Menores",    7],
  "cadetas":    ["Femenino",  "Cadetes",    7],
  "juveniles":  ["Femenino",  "Juveniles",  7],
  "juniors":    ["Femenino",  "Junior",     7],
};

const pedidos = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(TORNEOS);
for (const p of pedidos) if (!TORNEOS[p]) throw new Error("Torneo desconocido: " + p + " (hay: " + Object.keys(TORNEOS).join(", ") + ")");

const esperar = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const perfil = path.join(process.env.TEMP || "/tmp", "adb-chrome-femebal");
  const chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", "--window-size=1400,900", "--remote-debugging-port=9222",
    "--user-data-dir=" + perfil, "about:blank"], { stdio: "ignore" });
  let ws;
  try {
    let paginas = null;
    for (let i = 0; i < 20 && !paginas; i++) {                 // Chrome tarda un segundo en abrir el puerto
      await esperar(700);
      try { paginas = (await (await fetch("http://127.0.0.1:9222/json")).json()).filter(t => t.type === "page"); } catch {}
    }
    if (!paginas || !paginas.length) throw new Error("Chrome no abrió el puerto de depuración");

    ws = new WebSocket(paginas[0].webSocketDebuggerUrl);
    await new Promise((ok, mal) => { ws.addEventListener("open", ok); ws.addEventListener("error", mal); });
    let id = 0; const pendientes = new Map();
    ws.addEventListener("message", e => { const m = JSON.parse(e.data); if (pendientes.has(m.id)) { pendientes.get(m.id)(m); pendientes.delete(m.id); } });
    const cmd = (method, params) => new Promise(r => { const i = ++id; pendientes.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
    const evaluar = async expr => {
      const r = await cmd("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true, timeout: 120000 });
      if (r.result.exceptionDetails) throw new Error(r.result.exceptionDetails.text + " " + ((r.result.exceptionDetails.exception || {}).description || ""));
      return r.result.result.value;
    };

    await cmd("Page.enable"); await cmd("Runtime.enable");
    await cmd("Page.navigate", { url: "https://www.femebal.com/tournament-tracker/" });
    // El tablero es una app React: hay que esperar a que pinte el selector de rama, que es
    // por donde entra el scraper. Algunos días tarda bastante más que otros.
    let listo = false;
    for (let i = 0; i < 40 && !listo; i++) {
      await esperar(1000);
      listo = await evaluar(`document.querySelectorAll("[role=combobox]").length > 0`);
    }
    if (!listo) throw new Error("El tablero de FeMeBal no terminó de cargar");
    await evaluar(fs.readFileSync(path.join(AQUI, "femebal-scraper.browser.js"), "utf8") + ";'ok'");

    // El tablero falla seguido: a veces no abre el desplegable, a veces devuelve la pantalla
    // anterior. En vez de afinar más las esperas, se reintenta recargando la página.
    const cargar = async () => {
      await cmd("Page.navigate", { url: "https://www.femebal.com/tournament-tracker/" });
      let ok = false;
      for (let i = 0; i < 40 && !ok; i++) { await esperar(1000); ok = await evaluar(`document.querySelectorAll("[role=combobox]").length > 0`); }
      if (!ok) throw new Error("El tablero de FeMeBal no terminó de cargar");
      await evaluar(fs.readFileSync(path.join(AQUI, "femebal-scraper.browser.js"), "utf8") + ";'ok'");
    };

    for (const nombre of pedidos) {
      const [rama, cat, idx] = TORNEOS[nombre];
      let listo = false, ultimo = null;
      for (let intento = 1; intento <= 3 && !listo; intento++) {
        try {
          const f = await evaluar(`__todas(${JSON.stringify(rama)}, ${JSON.stringify(cat)}, ${idx})`);
          if (!f.titulo.includes(" | ") || !f.n) throw new Error("no trajo los partidos (" + f.titulo + ")");
          const t = await evaluar(`__tabla(${JSON.stringify(rama)}, ${JSON.stringify(cat)}, ${idx})`);
          if (t.n < 8) throw new Error("la tabla vino con " + t.n + " equipos");
          const h = await evaluar(`__hojas(${JSON.stringify(rama)}, ${JSON.stringify(cat)}, ${idx})`);
          console.log(nombre.padEnd(11) + f.n + " partidos · " + t.n + " equipos · " + h.n + " planillas");
          listo = true;
        } catch (e) {
          ultimo = e;
          console.log(nombre.padEnd(11) + "intento " + intento + " falló (" + String(e.message).slice(0, 60) + "), recargo");
          await cargar();
        }
      }
      if (!listo) throw ultimo;
    }

    // Fecha local, no UTC: después de las 21 acá ya es el día siguiente en Greenwich y el
    // archivo quedaba con la fecha de mañana.
    const h = new Date();
    const hoy = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0");
    const todo = await evaluar(`JSON.stringify({fix: __fix, tablas: __tablas, planillas: __planillas})`);
    const { fix, tablas, planillas } = JSON.parse(todo);
    fs.writeFileSync(path.join(AQUI, "femebal-crudo-" + hoy + ".json"), JSON.stringify({ fix, tablas }));
    fs.writeFileSync(path.join(AQUI, "femebal-planillas-" + hoy + ".json"), JSON.stringify(planillas));
    console.log("\nfemebal-crudo-" + hoy + ".json y femebal-planillas-" + hoy + ".json listos");
  } finally {
    if (ws) try { ws.close(); } catch {}
    chrome.kill();
  }
})();
