/* Se pega en la consola del navegador (o se ejecuta con la herramienta de navegador de
   Claude Code) estando en https://www.femebal.com/tournament-tracker/ .
   El tablero es una app React (LarrySport) con una API cifrada, así que se navega por la
   interfaz y se lee el DOM. Cada ejecución del navegador de Claude tiene 45 s: por eso
   las funciones se llaman de a un torneo por vez.

   Torneos donde juega el Bosco (Clausura 2026). El índice es la posición de la tarjeta
   "div.bg-white-h100" con el filtro aplicado; conviene listarlos con idx = null antes:
     __paso('Femenino','Mayores', 8)    → 1º División Clausura  (Primera damas)
     __paso('Femenino','Mayores', 15)   → 3º División Clausura Ascenso (Tercera damas)
     __paso('Femenino','Infantiles'|'Menores'|'Cadetes'|'Juveniles'|'Junior', <3er "Clausura">) → División C
     __paso('Masculino','Mayores', 21)  → 4º División Clausura Permanencia (Cuarta caballeros)

   Lo que devuelve:
     window.__pares   nombre FeMeBal → URL del escudo (CDN cloudfront)
     window.__fix     título del torneo → partidos del Bosco (texto de la fila, local, visita)
     window.__tablas  título del torneo → filas de la tabla de posiciones
   Después: JSON.stringify({pares: __pares, fix: __fix, tablas: __tablas}) y se guarda en
   herramientas/femebal-datos-<fecha>.json (mismo formato que el del 18/09/2026) para
   correr femebal-fixture.js, femebal-tablas.js y femebal-escudos.js. */

window.__pares = window.__pares || {}; window.__fix = window.__fix || {}; window.__tablas = window.__tablas || {};

// El tablero es React y tarda lo que quiere: en vez de esperar un rato fijo, se espera a que
// aparezca lo que viene después. Antes había esperas de dos segundos y algunos días no alcanzaban.
window.__hasta = async function(cond, ms){
  const t0 = Date.now();
  while (Date.now() - t0 < (ms || 25000)){
    try { if (cond()) return true; } catch {}
    await new Promise(r => setTimeout(r, 300));
  }
  return false;
};
// Deja la pantalla en el torneo pedido, con "Todas las fechas" abierto. Devuelve el título.
window.__abrir = async function(rama, categoria, idx){
  const combos = () => [...document.querySelectorAll('[role=combobox]')];
  const clickTexto = (sel, re) => { const e = [...document.querySelectorAll(sel)].find(x => re.test(x.textContent.trim())); if (e) e.click(); return !!e; };
  if (clickTexto('button', /Volver al menú/)) await window.__hasta(() => combos().length > 0);
  await window.__hasta(() => combos().length > 0);
  if (!new RegExp('^' + rama).test(combos()[0].textContent)){
    combos()[0].click();
    await window.__hasta(() => document.querySelector('[role=option]'));
    clickTexto('[role=option]', new RegExp('^' + rama));
    await window.__hasta(() => combos().length > 1 && new RegExp('^' + rama).test(combos()[0].textContent));
  }
  if (!combos()[1] || !new RegExp('^' + categoria).test(combos()[1].textContent)){
    combos()[1].click();
    await window.__hasta(() => document.querySelector('[role=option]'));
    clickTexto('[role=option]', new RegExp('^' + categoria));
    await window.__hasta(() => document.querySelectorAll('div.bg-white-h100').length > 0 && new RegExp('^' + categoria).test(combos()[1].textContent));
  }
  if (idx == null) return [...document.querySelectorAll('div.bg-white-h100')].map((c, i) => i + ': ' + c.textContent.trim().replace(/\s+/g, ' ').slice(0, 70));
  [...document.querySelectorAll('div.bg-white-h100')][idx].click();
  await window.__hasta(() => /\|/.test(document.body.innerText));
  clickTexto('button', /Todas las fechas/) || clickTexto('span, div', /^Todas las fechas$/);
  await window.__hasta(() => document.querySelectorAll('.ms-Grid-col.ms-sm12.mt-1').length > 3);
  return (document.body.innerText.split('\n').find(l => /\|/.test(l)) || '').trim();
};

// Navega al menú, aplica rama y categoría, y (si idx no es null) abre ese torneo y junta nombre → escudo.
window.__paso = async function(rama, categoria, idx){
  const esperar = ms => new Promise(r => setTimeout(r, ms));
  const clickTexto = (sel, re) => { const e = [...document.querySelectorAll(sel)].find(x => re.test(x.textContent.trim())); if (e) e.click(); return !!e; };
  if (clickTexto('button', /Volver al menú/)) await esperar(1800);
  let combos = [...document.querySelectorAll('[role=combobox]')];
  if (!new RegExp('^' + rama).test(combos[0].textContent)) { combos[0].click(); await esperar(400); clickTexto('[role=option]', new RegExp('^' + rama)); await esperar(1800); combos = [...document.querySelectorAll('[role=combobox]')]; }
  if (!combos[1] || !new RegExp('^' + categoria).test(combos[1].textContent)) { combos[1].click(); await esperar(400); clickTexto('[role=option]', new RegExp('^' + categoria)); await esperar(2200); }
  const cards = [...document.querySelectorAll('div.bg-white-h100')];
  if (idx == null) return cards.map((c, i) => i + ': ' + c.textContent.trim().replace(/\s+/g, ' ')).filter(t => /Clausura/.test(t) && !/Copa|Super/.test(t) && t.length < 80);
  cards[idx].click(); await esperar(3000);
  clickTexto('button', /Todas las fechas/) || clickTexto('span, div', /^Todas las fechas$/); await esperar(2500);
  const titulo = (document.body.innerText.split('\n').find(l => /\|/.test(l)) || '').trim();
  const pares = {}; document.querySelectorAll('.ms-sm3.text-overflow').forEach(c => { const im = c.querySelector('img'); const n = c.textContent.trim().replace(/\s+/g, ' '); if (im && n) pares[n] = im.currentSrc || im.src; });
  const conADB = Object.keys(pares).some(n => /Ateneo Don Bosco/i.test(n));
  if (conADB) Object.assign(window.__pares, pares);
  return { titulo, conADB, equipos: Object.keys(pares).length };
};

// Abre un torneo y recorre los botones "1".."15": partidos del Bosco con fecha, hora, equipos y resultado.
window.__todas = async function(rama, categoria, idx){
  const esperar = ms => new Promise(r => setTimeout(r, ms));
  const clickTexto = (sel, re) => { const e = [...document.querySelectorAll(sel)].find(x => re.test(x.textContent.trim())); if (e) e.click(); return !!e; };
  if (clickTexto('button', /Volver al menú/)) await esperar(1800);
  let combos = [...document.querySelectorAll('[role=combobox]')];
  if (!new RegExp('^' + rama).test(combos[0].textContent)) { combos[0].click(); await esperar(400); clickTexto('[role=option]', new RegExp('^' + rama)); await esperar(1800); combos = [...document.querySelectorAll('[role=combobox]')]; }
  if (!combos[1] || !new RegExp('^' + categoria).test(combos[1].textContent)) { combos[1].click(); await esperar(400); clickTexto('[role=option]', new RegExp('^' + categoria)); await esperar(2200); }
  [...document.querySelectorAll('div.bg-white-h100')][idx].click(); await esperar(3000);
  const titulo = (document.body.innerText.split('\n').find(l => /\|/.test(l)) || '').trim();
  const out = [];
  for (let f = 1; f <= 15; f++){
    const b = [...document.querySelectorAll('button')].find(x => x.textContent.trim() === String(f)); if (!b) break; b.click(); await esperar(1000);
    document.querySelectorAll('.ms-Grid-col.ms-sm12.mt-1').forEach(fila => { if (!/Ateneo Don Bosco/.test(fila.textContent)) return;
      const eq = [...fila.querySelectorAll('.ms-sm3.text-overflow')].map(c => c.textContent.trim().replace(/\s+/g, ' ')); if (eq.length < 2) return;
      // texto: "sáb 08 agosto 19:45C.A. Talleres 30 18Ateneo Don Bosco" (jugado) o "... VsAteneo Don Bosco" (pendiente)
      out.push({ f, texto: fila.innerText.replace(/\s+/g, ' ').trim(), local: eq[0], visita: eq[1] }); });
  }
  window.__fix[titulo] = out;
  return { titulo, n: out.length };
};

// Abre un torneo y lee "Tabla posiciones". El texto viene como "1 S.A.G. Polvorines 21 7 7 0 0 0 213 186 27 2 ..."
// (# Club PTS PJ PG PE PP CP GF GC DF). Se cortan las tablas anuales y se limpian "(*)" y glifos raros.
window.__tabla = async function(rama, categoria, idx){
  const esperar = ms => new Promise(r => setTimeout(r, ms));
  const clickTexto = (sel, re) => { const e = [...document.querySelectorAll(sel)].find(x => re.test(x.textContent.trim())); if (e) e.click(); return !!e; };
  if (clickTexto('button', /Volver al menú/)) await esperar(1800);
  let combos = [...document.querySelectorAll('[role=combobox]')];
  if (!new RegExp('^' + rama).test(combos[0].textContent)) { combos[0].click(); await esperar(400); clickTexto('[role=option]', new RegExp('^' + rama)); await esperar(1800); combos = [...document.querySelectorAll('[role=combobox]')]; }
  if (!combos[1] || !new RegExp('^' + categoria).test(combos[1].textContent)) { combos[1].click(); await esperar(400); clickTexto('[role=option]', new RegExp('^' + categoria)); await esperar(2200); }
  [...document.querySelectorAll('div.bg-white-h100')][idx].click(); await esperar(3000);
  clickTexto('button', /Tabla posiciones/); await esperar(2500);
  const titulo = (document.body.innerText.split('\n').find(l => /\|/.test(l)) || '').trim();
  let t = document.body.innerText.replace(/\(\*\)/g, ' ').replace(/[^\x20-\x7EÀ-ſ]/g, ' ').replace(/\s+/g, ' ');
  const ini = t.indexOf('# Club PTS'); const mf = t.slice(ini).search(/Suma de Puntos|Tabla General|Tabla Anual/);
  t = t.slice(ini + '# Club PTS PJ PG PE PP CP GF GC DF'.length, mf > 0 ? ini + mf : undefined).trim();
  const filas = []; const re = /(\d+) (.+?) (\d+) (\d+) (\d+) (\d+) (\d+) (\d+) (\d+) (\d+) (-?\d+)(?= \d+ |$)/g; let m;
  while ((m = re.exec(t))) filas.push({ pos: +m[1], equipo: m[2], pts: +m[3], pj: +m[4], pg: +m[5], pe: +m[6], pp: +m[7], gf: +m[9], gc: +m[10], df: +m[11] });
  window.__tablas[titulo] = filas.filter(x => !/Fe\.Me\.Bal/.test(x.equipo));   // "Fe.Me.Bal Libre" son fechas libres, no equipos
  return { titulo, n: window.__tablas[titulo].length };
};

// Abre un torneo y, en cada fecha jugada, toma la URL del PDF "Ver planilla" del partido del Bosco
// (la app lo abre con window.open; acá se intercepta). Sirve para femebal-dorsales.js.
// Después: JSON.stringify(__planillas) → herramientas/femebal-planillas-<fecha>.json
window.__planillas = window.__planillas || {};
window.__hojas = async function(rama, categoria, idx){
  const esperar = ms => new Promise(r => setTimeout(r, ms));
  const clickTexto = (sel, re) => { const e = [...document.querySelectorAll(sel)].find(x => re.test(x.textContent.trim())); if (e) e.click(); return !!e; };
  if (clickTexto('button', /Volver al menú/)) await esperar(1800);
  let combos = [...document.querySelectorAll('[role=combobox]')];
  if (!new RegExp('^' + rama).test(combos[0].textContent)) { combos[0].click(); await esperar(400); clickTexto('[role=option]', new RegExp('^' + rama)); await esperar(1800); combos = [...document.querySelectorAll('[role=combobox]')]; }
  if (!combos[1] || !new RegExp('^' + categoria).test(combos[1].textContent)) { combos[1].click(); await esperar(400); clickTexto('[role=option]', new RegExp('^' + categoria)); await esperar(2200); }
  [...document.querySelectorAll('div.bg-white-h100')][idx].click(); await esperar(3000);
  const titulo = (document.body.innerText.split('\n').find(l => /\|/.test(l)) || '').trim();
  const out = []; const orig = window.open;
  for (let f = 1; f <= 15; f++){
    const b = [...document.querySelectorAll('button')].find(x => x.textContent.trim() === String(f)); if (!b) break; b.click(); await esperar(900);
    const fila = [...document.querySelectorAll('.ms-Grid-col.ms-sm12.mt-1')].find(x => /Ateneo Don Bosco/.test(x.textContent)); if (!fila) continue;
    const jugado = /\d+\s+\d+/.test(fila.innerText.replace(/\s+/g, ' ').replace(/^\S+ \d\d \S+ \d\d:\d\d/, '')); if (!jugado) continue;
    const bp = [...fila.querySelectorAll('button')].find(x => x.title === 'Ver planilla'); if (!bp) continue;
    let url = null; window.open = u => { url = u; return null; }; bp.click(); await esperar(400); window.open = orig;
    if (url) out.push({ f, url });
  }
  window.open = orig; window.__planillas[titulo] = out;
  return { titulo, n: out.length };
};

// Dónde se juega cada partido del Bosco. El fixture no muestra la cancha, pero cada fila tiene
// un botón "Ver estadio" que abre un globito con el nombre: se lo toca uno por uno y se lee.
// Sirve para saber qué fechas caen en la Casa del Handball (el estadio de FeMeBal, el que a
// veces transmite FemebalTV) y cargarlas en femebal-correcciones.json. A diferencia de las
// planillas, esto también sabe la sede de los partidos que todavía no se jugaron.
// Después: JSON.stringify(__sedes)
window.__sedes = window.__sedes || {};
window.__estadios = async function(rama, categoria, idx){
  const esperar = ms => new Promise(r => setTimeout(r, ms));
  const clickTexto = (sel, re) => { const e = [...document.querySelectorAll(sel)].find(x => re.test(x.textContent.trim())); if (e) e.click(); return !!e; };
  if (clickTexto('button', /Volver al menú/)) await esperar(2000);
  let c = [...document.querySelectorAll('[role=combobox]')];
  if (!new RegExp('^' + rama).test(c[0].textContent)) { c[0].click(); await esperar(500); clickTexto('[role=option]', new RegExp('^' + rama)); await esperar(2000); c = [...document.querySelectorAll('[role=combobox]')]; }
  if (!c[1] || !new RegExp('^' + categoria).test(c[1].textContent)) { c[1].click(); await esperar(500); clickTexto('[role=option]', new RegExp('^' + categoria)); await esperar(2400); }
  [...document.querySelectorAll('div.bg-white-h100')][idx].click(); await esperar(3200);
  clickTexto('button', /Todas las fechas/) || clickTexto('span, div', /^Todas las fechas$/); await esperar(2600);
  const titulo = (document.body.innerText.split('\n').find(l => /\|/.test(l)) || '').trim();
  const out = [];
  for (const fila of [...document.querySelectorAll('.ms-Grid-col.ms-sm12.mt-1')].filter(f => /Ateneo Don Bosco/.test(f.textContent))){
    const b = [...fila.querySelectorAll('button')].find(x => x.title === 'Ver estadio');
    let sede = "";
    if (b){
      b.click(); await esperar(650);
      const cajas = [...document.querySelectorAll('[role=dialog], .ms-Callout')].map(x => (x.innerText || '').trim()).filter(Boolean);
      sede = (cajas.pop() || '').replace(/\s*Ver direcci[oó]n\s*$/i, '').replace(/\s+/g, ' ').trim();
      document.body.click(); await esperar(250);   // cerrar el globito antes del siguiente
    }
    out.push({ texto: fila.innerText.replace(/\s+/g, ' ').trim(), sede });
  }
  window.__sedes[titulo] = out;
  return { titulo, n: out.length, casa: out.filter(o => /casa del handball/i.test(o.sede) && !/Libre/.test(o.texto)).length };
};
