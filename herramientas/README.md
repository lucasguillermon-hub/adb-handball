# Herramientas (no se publican)

Scripts que usa Claude Code para mantener el sitio. Corren con Node (instalado en
`C:\Program Files\nodejs`, no está en el PATH de la terminal de Claude: usar
`export PATH="/c/Program Files/nodejs:$PATH"`). Ninguno se publica: la carpeta está en
`.assetsignore`. Los paquetes que necesitan se instalan en una carpeta temporal, no en el
repo (regla 2: sin `node_modules` en el sitio).

## Sincronización semanal con FeMeBal

Cada semana, después de la fecha:

1. En el navegador, sobre `https://www.femebal.com/tournament-tracker/`, pegar
   `femebal-scraper.browser.js` y correr `__todas` y `__tabla` para los ocho torneos del Bosco
   (índices en el encabezado del script). Guardar `JSON.stringify({fix: __fix, tablas: __tablas})`
   en `herramientas/femebal-crudo-<fecha>.json`.
2. `node herramientas/femebal-actualizar.js`: toma el crudo más nuevo y reemplaza en `datos.js`
   los partidos (fecha, condición, rival, hora propia, resultado) y las tablas de cada plantel.
   Minis copia las fechas de Infantiles. Imprime los resultados nuevos y el puesto de cada uno.
   Si aparece un rival nuevo, corta: agregarlo a `corto` en `femebal-datos-2026-09-18.json` y
   bajar su escudo con `femebal-escudos.js`.
3. Dorsales y goles: en el navegador correr `__hojas` para los ocho torneos, guardar
   `JSON.stringify(__planillas)` en `herramientas/femebal-planillas-<fecha>.json` y correr
   `node herramientas/femebal-dorsales.js`. Baja las planillas de partido (PDF) a
   `material-club/planillas/`, lee número, nombre y goles de cada jugadora del Bosco y escribe
   `dorsales` y `goles` en cada plantel de `datos.js`. Quien jugó dos o más partidos y no estaba en
   la lista del club se suma a `jugadoras`; los refuerzos de un partido no. Necesita `pdf-parse`.
4. Verificar en el navegador y hacer push. `datos.js` se pide primero a la red desde el service
   worker, así que no hace falta subir la versión de `sw.js` por un cambio de resultados.

Los scripts de abajo son los de la carga inicial (18/09/2026); quedan por si hay que rehacerla.

1. **`femebal-scraper.browser.js`** — se ejecuta en el navegador sobre
   `https://www.femebal.com/tournament-tracker/`. Define `__paso`, `__todas` y `__tabla`
   (documentadas adentro, con los índices de los ocho torneos del Bosco). Devuelve
   `__pares` (escudos), `__fix` (partidos) y `__tablas` (posiciones). Se guardan en un
   `femebal-datos-<fecha>.json` con la forma del de 2026-09-18 (`escudos`, `corto`,
   `fixtures`) y un `femebal-tablas-<fecha>.txt` (`## plantel` + `pos|equipo|pts|pj|pg|pe|pp|gf|gc`).
2. **`femebal-fixture.js`** — pasa el JSON a `datos.js`: partidos con `f`, `c`, `r`
   (nombre corto), `h` (hora propia) y `g` (resultado nuestros-de ellos), y el horario
   de cada categoría de la tira. Guardar una copia de `datos.js` antes; el script
   reemplaza bloques enteros.
3. **`femebal-tablas.js`** — carga las tablas en `planteles[].tabla`.
4. **`femebal-escudos.js`** — baja los escudos nuevos del CDN de FeMeBal (los originales
   van a `placas-fixture/escudos-femebal/`, ignorado) y los deja en `fotos/rivales/` a
   400 px, PNG, nombre = nombre corto en minúsculas con guiones. Necesita `sharp`.

El mapa de nombres FeMeBal → nombre corto está en `femebal-datos-2026-09-18.json` (clave
`corto`). Un rival nuevo hay que agregarlo ahí. "Municipalidad de Tres de Febrero" se muestra
como "Cedem Caseros" (así lo conoce el club).

Maxihandball no está en FeMeBal: su fixture se carga a mano en `datos.js`. Minis es
formativa: copia las fechas de la tira sin resultados.

## Fotos de partidos

**`fotos-galeria.js`** — `node herramientas/fotos-galeria.js "fotos/Partidos/<Plantel>/<AAAA-MM-DD> <Fotógrafo>"`.
Las originales van a `fotos/Partidos/<Plantel>/<fecha> <fotógrafo>/` (ignorada en git y sin publicar;
el plantel con el nombre del club). Con la fecha busca el partido en el fixture, y de ahí saca rival y
local/visitante. Exporta a `fotos/<plantel>/<fecha>-<nn>.jpg` a 1600 px y menos de 300 KB, marca las
verticales con `alto:true` y suma la fecha al álbum del plantel en `datos.js`, con el crédito del
fotógrafo de esa fecha. Un fotógrafo nuevo queda en `galeria.fotografos` sin Instagram: pegarlo a mano.
Necesita `sharp` en `%TEMP%\adb-node`.

## Otros

- **`planteles-excel.js`** — planteles desde `LISTAS PRESENTISMO 2026.xlsx` (raíz del repo,
  ignorado). Necesita `xlsx`. Convierte "APELLIDO NOMBRE" a "Nombre Apellido".
- **`logos-sponsors-desde-pdf.mjs`** — exporta los logos de los PDF de
  `6. SPONSORS 2026/` (ignorada) a `fotos/sponsors/`. Cada PDF trae dos páginas (azul sobre
  transparente y blanco sobre azul); elige la azul por luminancia, con excepciones a mano.
  Necesita `pdfjs-dist`, `@napi-rs/canvas` y `sharp`.
- **`iconos-app.js`** — regenera `iconos/icono-{512,192,180}.png` desde `iconos/escudo.svg`
  (fondo `--tinta` redondeado, escudo al 66 % para la zona segura "maskable"). Necesita `sharp`.

## Entorno local

- `npx wrangler dev --port 8787 --persist-to <carpeta fuera del repo>`: si el estado local
  queda dentro del repo, el servidor entra en bucle de recarga (vigila `.`).
- Antes de probar votos o mails en local: `npx wrangler d1 migrations apply adb-contactos --local --persist-to <la misma carpeta>`.
- La base real: `npx wrangler d1 execute adb-contactos --remote --command "SELECT ..."`.
- Wrangler está logueado con la cuenta de Cloudflare del club (`npx wrangler whoami`); la
  base D1 es `adb-contactos`, id en `wrangler.jsonc`.
- Al probar en el navegador de Claude, la página puede quedar cacheada: navegar a
  `/web?nocache=N` en vez de `/web.html`.

## Placas de lanzamiento

`lanzamiento/` tiene las dos placas para WhatsApp (familias y sponsors) en HTML, con los
colores y tipografías del sitio, y los textos que las acompañan en `mensajes.md`.
`node herramientas/lanzamiento/render.js` las pasa a PNG (1080 × 1350) con el Chrome
instalado y las deja en `material-club/lanzamiento/` (ignorada en git).
