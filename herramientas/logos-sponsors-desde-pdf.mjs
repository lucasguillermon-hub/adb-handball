import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import sharp from "sharp";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";
const RAIZ = "C:/Users/Lucas/adb-handball/6. SPONSORS 2026", DEST = "C:/Users/Lucas/adb-handball/fotos/sponsors";
const slug = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").replace(/-azul-blanco$/, "");
const FORZAR = { "ladran-sancho": 1, "graferne": 1, "delicias-doradas": 1, "expreso-vitale": 1, "magdalena-supermercado": 1, "grupo-uno": 1 };
const vistos = new Map();
for (const c of readdirSync(RAIZ, { withFileTypes: true }).filter(d => d.isDirectory() && !/PRE MATCH/.test(d.name))) {
  for (const f of readdirSync(join(RAIZ, c.name)).filter(f => /\.pdf$/i.test(f))) {
    const id = slug(f.replace(/\.pdf$/i, "").replace(/^LOGO /, ""));
    if (vistos.has(id)) { vistos.get(id).cats.push(c.name); continue; }
    const doc = await pdfjs.getDocument({ data: new Uint8Array(readFileSync(join(RAIZ, c.name, f))), useSystemFonts: true }).promise;
    const pags = [];
    for (let p = 1; p <= doc.numPages; p++) {
      const page = await doc.getPage(p); const vp0 = page.getViewport({ scale: 1 });
      const vp = page.getViewport({ scale: 1600 / Math.max(vp0.width, vp0.height) });
      const cv = createCanvas(Math.ceil(vp.width), Math.ceil(vp.height)); const ctx = cv.getContext("2d");
      await page.render({ canvasContext: ctx, viewport: vp, background: "rgba(0,0,0,0)" }).promise;
      const png = await sharp(cv.toBuffer("image/png")).trim({ threshold: 10 }).png().toBuffer();
      const { data: px } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      let n = 0, lum = 0; for (let i = 0; i < px.length; i += 4) if (px[i+3] > 128) { n++; lum += 0.2126*px[i] + 0.7152*px[i+1] + 0.0722*px[i+2]; }
      pags.push({ p, png, lum: n ? lum / n : 999 });
    }
    const elegida = FORZAR[id] ? pags[FORZAR[id] - 1] : pags.reduce((a, b) => b.lum < a.lum ? b : a);
    const salida = join(DEST, id + ".png");
    await sharp(elegida.png).resize({ width: 800, height: 800, fit: "inside", withoutEnlargement: true }).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(salida);
    vistos.set(id, { cats: [c.name], pagina: elegida.p, kb: Math.round(statSync(salida).size / 1024) });
  }
}
for (const [id, v] of vistos) console.log(id.padEnd(32), "pág", v.pagina, String(v.kb).padStart(4) + " KB ", v.cats.map(c => c.replace(/^\d+\. /, "")).join(", "));
