# Web del Ateneo Don Bosco Handball

Sitio del club de handball de Bernal (Quilmes, Buenos Aires). Sin framework, sin build,
sin dependencias. Se publica solo con hacer push a `main` (Cloudflare Workers).

## Estructura

```
datos.js              ← TODO el contenido editable: el único archivo a tocar
index.html            ← página de lanzamiento (la que ve el público)
web.html              ← la web completa, todavía sin linkear ni indexar
manifest.webmanifest  ← datos de la app instalable
sw.js                 ← service worker (caché offline)
iconos/               ← escudo.svg (el escudo oficial, se usa en las tres páginas) e
                        íconos de la app (192, 512 y 180 px, generados desde el SVG)
fotos/                ← imágenes de la galería; fotos/sponsors/ los logos del muro
CLAUDE.md             ← este archivo
worker.js             ← backend mínimo: guarda los mails de los formularios en la base D1
migraciones/          ← esquema de la base de contactos (tabla `contactos`)
wrangler.jsonc        ← configuración de Cloudflare (Worker + base D1 `adb-contactos`)
plan-sponsoreo.html   ← plan de sponsoreo 2027, sin enlazar ni indexar (lee datos.js)
recetas.md            ← pedidos tipo para Claude Code
```

**Mientras dure el lanzamiento:** `index.html` es la página de espera con la cuenta
regresiva. La web completa vive en `web.html`, con `noindex` para que Google no la
levante a medio llenar. El día de la apertura se reemplaza el contenido de `index.html`
por el de `web.html`, se borra la etiqueta `noindex` y se sube la versión del `sw.js`.

## Reglas al editar

1. **Todo el contenido variable vive en `datos.js`.** Fixture, staff, categorías,
   sponsors, beneficios, álbumes de fotos, números del media kit, contacto y fecha de
   lanzamiento. Lo comparten las tres páginas (`plan-sponsoreo.html` toma de ahí el
   contacto y las cifras), así que un cambio ahí impacta en todas. El teléfono se
   muestra desde `contacto.tel`: no escribirlo a mano en el HTML.
   Si el cambio es de contenido, se toca `datos.js` y ningún otro archivo.

2. **No agregar dependencias.** Nada de React, Tailwind, npm ni CDN de librerías.
   El sitio tiene que seguir funcionando abriendo el archivo con doble clic.

3. **No usar `localStorage` ni `sessionStorage`.** El estado vive en memoria.

4. **Colores:** siempre por variable CSS, nunca hardcodeados.
   `--tinta` #0A1428 · `--azul` #152A54 · `--rosa` #F2B7CF · `--rosa-vivo` #E4568F ·
   `--hueso` #F5F2ED. Son los del escudo; no inventar colores nuevos.

5. **Tipografías:** `Anton` para títulos, `Archivo` para texto. No sumar familias.

6. **Todo botón o link que sea espacio de sponsor lleva `data-track="nombre-del-evento"`.**
   Es lo que después se le reporta al sponsor. Si agregás un espacio nuevo, agregá el
   atributo.

7. **Fotos:** exportadas a 1600 px de ancho, JPG calidad 80 o WebP, bajo 300 KB.
   Nunca subir archivos de cámara sin comprimir: rompen la velocidad del sitio.
   Toda `<img>` de la galería lleva `loading="lazy"` y un `alt` descriptivo en castellano.

8. **Si cambia algo de `index.html`, subir `VERSION` en `sw.js`** (adb-v1 → adb-v2).
   Si no, los teléfonos que ya la tienen instalada siguen viendo la versión vieja.

9. **Accesibilidad:** contraste suficiente, foco visible, y todo lo que sea interactivo
   tiene que funcionar con teclado.

10. **Contactos:** todo formulario que pida mail lo manda a `POST /api/suscribir`
    (`worker.js`), que lo guarda en la base D1 `adb-contactos`. Nunca mandar mail,
    teléfono ni nombre a Google Analytics: `track()` recibe solo el nombre del evento.
    Si un formulario nuevo pide mail, sumar su `origen` a la lista `ORIGENES` del Worker
    y ponerle el campo trampa `<input class="trampa" name="web">`. Un cambio de esquema
    va en un archivo nuevo en `migraciones/` y se aplica con
    `npx wrangler d1 migrations apply adb-contactos --remote` antes de hacer push.

## Tono de los textos

Castellano rioplatense, voseo, en frases cortas. Nada de lenguaje corporativo ni de
signos de exclamación en cadena. El lema del club es *sensus pertinendi*: sentido de
pertenencia. Los textos hablan de la tribuna, de las familias y del barrio, no de
"experiencias" ni de "soluciones".

## Cosas que todavía faltan

- Confirmar nombres de algunos rivales del fixture (Lapte, C.F.L., el rival del 04/10
  de inferiores, el "B" con flor de lis, M.A. Handball).
- Horarios reales de partido y de entrenamiento por categoría. Cadetas y Juveniles
  todavía no tienen horario. Confirmar si Iniciación sigue como grupo aparte (no está en
  la lista de DT ni en las listas de presentismo del club).
- Logos: los 39 de la temporada 2026 ya están en `fotos/sponsors/` (exportados de los PDF
  de la carpeta de diseño `6. SPONSORS 2026/`, que está ignorada en git y no se publica).
  Si llega un logo nuevo, va ahí en PNG transparente, azul sobre fondo claro, y se
  carga en `logo` dentro de `tiers`.
- Club de Beneficios: está escondido con `mostrarBeneficios: false` en `datos.js` (sección,
  menú, pie y tarjeta de la portada). Acordar cada beneficio con su comercio y pasarlo a true.
- Números reales del media kit (jugadores, familias, fechas de local).
- Link de la comunidad de WhatsApp.
- Votación de la MVP y prode: los votos viven en memoria (se pierden al recargar y no se
  suman entre personas). Para contarlos de verdad hay que guardarlos en D1 vía `worker.js`.
  Los planteles que se votan son los cuatro con fixture (`planteles[].jugadoras`, sacados
  de LISTAS PRESENTISMO 2026.xlsx, que está ignorado en git). Inferiores muestra nombres
  cortos (`nombresCortos: true`) porque son menores de edad.
- Galería: un álbum por categoría, todos vacíos hasta que se carguen fotos en `datos.js`.
  El álbum por fecha con sponsor queda para el plan 2027.
- Los sponsors del muro son acuerdos 2026, anteriores al plan; el plan de niveles
  arranca en 2027. Hasta entonces el muro sigue agrupado por categoría.
- Elegir la herramienta para mandar los mails (Brevo, MailerLite o similar) e importarle
  el CSV de contactos. Hasta entonces la lista solo se acumula en D1.

## Antes de dar por terminado un cambio

Abrir el `index.html` en el navegador y verificar que el marcador de la portada calcula
bien el próximo partido, que las cuatro pestañas del fixture pintan sus 15 fechas y que
el visor de fotos abre y cierra con Escape.
