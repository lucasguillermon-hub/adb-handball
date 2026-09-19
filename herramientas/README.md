# Herramientas (no se publican)

Scripts que usa Claude Code para mantener el sitio. Corren con Node (instalado en
`C:\Program Files\nodejs`, no está en el PATH de la terminal de Claude: usar
`export PATH="/c/Program Files/nodejs:$PATH"`). Ninguno se publica: la carpeta está en
`.assetsignore`. Los paquetes que necesitan se instalan en una carpeta temporal, no en el
repo (regla 2: sin `node_modules` en el sitio).

## Sincronización semanal con FeMeBal

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
