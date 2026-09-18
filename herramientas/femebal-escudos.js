const fs = require("fs"); const path = require("path");
const sharp = require("sharp");
const F = JSON.parse(fs.readFileSync(__dirname + "/femebal-datos-2026-09-18.json", "utf8"));
const REPO = "C:/Users/Lucas/adb-handball";
const ORIG = path.join(REPO, "placas-fixture/escudos-femebal"); fs.mkdirSync(ORIG, { recursive: true });
const slug = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

(async () => {
  const hechos = {};
  for (const [femebal, url] of Object.entries(F.escudos)) {
    if (femebal === "Ateneo Don Bosco") continue;
    const corto = F.corto[femebal]; if (!corto) { console.log("SIN NOMBRE CORTO:", femebal); continue; }
    const id = slug(corto), out = path.join(REPO, "fotos/rivales", id + ".png");
    if (hechos[id]) continue;
    const orig = path.join(ORIG, id + path.extname(new URL(url).pathname));
    if (!fs.existsSync(orig)) {
      const r = await fetch(url); if (!r.ok) { console.log("FALLA", femebal, r.status); continue; }
      fs.writeFileSync(orig, Buffer.from(await r.arrayBuffer()));
    }
    await sharp(orig).trim({ threshold: 12 }).resize({ width: 400, height: 400, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(out);
    hechos[id] = Math.round(fs.statSync(out).size / 1024);
  }
  console.log(Object.keys(hechos).length, "escudos:", Object.entries(hechos).map(([k, v]) => k + " (" + v + " KB)").join(", "));
})();
