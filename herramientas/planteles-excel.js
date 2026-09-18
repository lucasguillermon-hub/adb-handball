/* Saca los planteles de LISTAS PRESENTISMO 2026.xlsx (raíz del repo, ignorado en git) y los
   deja como "Nombre Apellido" para pegar en datos.js (planteles[].jugadoras).
   Uso:  npm i xlsx   (en una carpeta temporal)  ·  node planteles-excel.js
   Hojas → plantel: MAYORES A→mayores-a · MAYORES B→mayores-b · MENORES→menores ·
   CAD-JUV→cadetas (hasta "CATEGORIA: JUVENILES") y juveniles · JUNIORS→juniors ·
   MAXI HANDBALL→maxi · CABALLEROS→masculino · MINI e infantiles: formativas, no se cargan. */
const X = require("xlsx");
const wb = X.readFile("C:/Users/Lucas/adb-handball/LISTAS PRESENTISMO 2026.xlsx");
const tc = w => w.charAt(0) + w.slice(1).toLowerCase();
const DOS_NOMBRES = /^(MARIA|ANA|JUAN|JOSE) /;   // dos nombres de pila: van al final en la lista
function nombre(raw){
  const w = raw.trim().replace(/\s+/g, " ").split(" ").map(tc); if (w.length === 1) return w[0];
  let ap, pila;
  if (w.length >= 3 && DOS_NOMBRES.test(w.slice(-2).join(" ").toUpperCase())) { pila = w.slice(-2); ap = w.slice(0, -2); }
  else { pila = w.slice(-1); ap = w.slice(0, -1); }
  return [...pila, ...ap].join(" ").replace(/\bDe Leon\b/, "De León");
}
function lista(hoja){
  const rows = X.utils.sheet_to_json(wb.Sheets[hoja], { header: 1, defval: "" });
  const h = rows.findIndex(r => /^JUGADOR/i.test(String(r[1]).trim()));
  return rows.slice(h + 1).map(r => String(r[1]).trim()).filter(b => b && !/^(CATEGORIA|JUGADOR)/i.test(b)).map(nombre);
}
const hojas = { "mayores-a": "MAYORES A", "mayores-b": "MAYORES B", menores: "MENORES", juniors: "JUNIORS", maxi: "MAXI HANDBALL", masculino: "CABALLEROS" };
for (const [id, hoja] of Object.entries(hojas)) console.log(id + ":", JSON.stringify(lista(hoja).filter(n => !/^(Cadetas|Juveniles)$/i.test(n))));
// CAD-JUV trae las dos categorías en la misma hoja, separadas por "CATEGORIA: JUVENILES"
const cj = X.utils.sheet_to_json(wb.Sheets["CAD-JUV"], { header: 1, defval: "" }).map(r => String(r[1]).trim());
const corte = cj.findIndex((b, i) => i > 8 && /^CATEGORIA/i.test(b));
console.log("cadetas:", JSON.stringify(cj.slice(7, corte).filter(b => b && !/^(CATEGORIA|JUGADOR)/i.test(b)).map(nombre)));
console.log("juveniles:", JSON.stringify(cj.slice(corte + 2).filter(b => b && !/^(CATEGORIA|JUGADOR)/i.test(b)).map(nombre)));
