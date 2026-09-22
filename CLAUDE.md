# Web del Ateneo Don Bosco Handball

Sitio del club de handball de Bernal (Quilmes, Buenos Aires). Sin framework, sin build,
sin dependencias. Se publica solo con hacer push a `main` (Cloudflare Workers).

## Estructura

```
datos.js              ← TODO el contenido editable: el único archivo a tocar
index.html            ← la web completa (publicada el 20/9/2026)
manifest.webmanifest  ← datos de la app instalable
sw.js                 ← service worker (caché offline)
iconos/               ← escudo.svg (el escudo oficial, se usa en las tres páginas) e
                        íconos de la app (192, 512 y 180 px, generados desde el SVG)
fotos/                ← imágenes de la galería; fotos/sponsors/ los logos del muro;
                        fotos/rivales/ los escudos de los rivales (<nombre-en-minusculas>.png)
CLAUDE.md             ← este archivo
worker.js             ← backend mínimo: mails, votos de la MVP y prode en la base D1
migraciones/          ← esquema de la base (tablas `contactos`, `votos_mvp` y `prode`)
wrangler.jsonc        ← configuración de Cloudflare (Worker + base D1 `adb-contactos`)
plan-sponsoreo.html   ← plan de sponsoreo 2027, sin enlazar ni indexar (lee datos.js)
recetas.md            ← pedidos tipo para Claude Code
herramientas/         ← scripts de mantenimiento (sincronizar FeMeBal, planteles, logos,
                        íconos) y cómo correr el entorno local. Ver su README. No se publica.
```

## Reglas al editar

1. **Todo el contenido variable vive en `datos.js`.** Fixture, staff, categorías,
   sponsors, beneficios, álbumes de fotos, números del media kit y contacto.
   Lo comparten las dos páginas (`plan-sponsoreo.html` toma de ahí el
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

## Decisiones tomadas (no volver a preguntar)

- La web completa se publicó el 20/9/2026 (antes `index.html` era una página de espera con
  cuenta regresiva y la web vivía en `web.html`, ya borrado).
- Los sponsors del muro son acuerdos 2026 agrupados por categoría; el plan de niveles es
  para 2027. Los 15 sponsors sin beneficio y los rubros repetidos quedan como legado 2026.
- La promo "diez comercios sin cargo" se sacó. No hay cantidad fija de fechas de local:
  se cuentan desde el fixture.
- El fixture por plantel se queda (entró al plan como acción a la carta). Prode y MVP por
  plantel, con el sponsor rotando entre las marcas del muro.
- Nombres de planteles como los usa el club (Primera damas, Tercera damas, Cuarta
  caballeros, Cadetas, Juniors); `division` guarda el nombre de FeMeBal.
- Grafías del cuerpo técnico según las listas del club: Szczur, Christian Gull.
- Minis e Infantiles no entran en nada por nombre (formativas).
- De Cadetas para abajo (Minis, Infantiles, Menores, Cadetas) no hay competencia entre jugadoras,
  por decisión del coordinador: `competencia:false` en `datos.js` saca al plantel de la votación
  de la figura, del prode y de las goleadoras. MVP, prode y goleadoras van de Juveniles en
  adelante.

## Cosas que todavía faltan

- El fixture, los horarios, los resultados y las tablas de posiciones salen de FeMeBal (femebal.com/tournament-tracker,
  Torneo Metropolitano Clausura: Mayores 1º y 3º división femenino, división C de Infantiles
  a Junior, 4º división masculino). Para actualizarlo, ver "Sincronizar con FeMeBal" en
  recetas.md. Maxihandball no está en FeMeBal: juega la Liga Maxi Handball (timbo.futbol) y se
  sincroniza con `herramientas/maxi-actualizar.js` (fixture con reprogramaciones, sede y tabla).
- Iniciación son grupos para quienes arrancan (11-13, 14-15 y 16-17 años), lunes y miércoles;
  no compiten. Horarios de entrenamiento según la planilla "Temporada 2026" (Horarios.jpeg,
  septiembre 2026).
- Logos: los 39 de la temporada 2026 ya están en `fotos/sponsors/` (exportados de los PDF
  de la carpeta de diseño `6. SPONSORS 2026/`, que está ignorada en git y no se publica).
  Si llega un logo nuevo, va ahí en PNG transparente, azul sobre fondo claro, y se
  carga en `logo` dentro de `tiers`.
- Aviso del club: `aviso` en `datos.js` pinta una barra rosa arriba de todo (etiqueta, texto y un
  botón que abre el detalle), se puede cerrar y no guarda nada, así que vuelve en la próxima
  visita. Desaparece sola pasada la fecha `hasta`. Hoy anuncia la Rifa 2026 (hasta el 30/11).
  Con `aviso:null` no se muestra.
- Club de Beneficios: está escondido con `mostrarBeneficios: false` en `datos.js` (sección,
  menú, pie y tarjeta de la portada). Acordar cada beneficio con su comercio y pasarlo a true.
- Números reales del media kit (jugadores, familias, fechas de local).
- Link de la comunidad de WhatsApp.
- MVP y prode se guardan en D1 (`GET/POST /api/mvp` y `/api/prode`): una cookie anónima
  por persona, solo la fecha vigente de cada plantel. La MVP cierra el viernes a las 20; el
  prode, cuando empieza el partido. Planteles de LISTAS PRESENTISMO 2026.xlsx (ignorado en
  git) más quienes jugaron dos o más partidos según las planillas de FeMeBal. `dorsales` y
  `goles` por jugadora salen de esas planillas (`herramientas/femebal-dorsales.js`); la lista
  de la MVP se ordena por dorsal. Minis e Infantiles son formativas: `jugadoras: []`, no entran
  en nada que sea por nombre. Menores, Cadetas y Juveniles muestran nombres cortos
  (`nombresCortos: true`).
- Planteles: los nombres son los del club (Primera damas, Tercera damas, Cuarta caballeros) y
  cada uno lleva `division`, el nombre de FeMeBal, que se muestra en la tabla de posiciones.
  Minis, Infantiles, Menores, Cadetas, Juveniles y Juniors son la tira de
  inferiores (mismas fechas y lugar, cada una a su hora). Cada partido puede llevar `h`
  (hora propia) y `g` (resultado "nuestros-de ellos"). Faltan: el horario de Minis, y decidir qué sponsor presenta cada plantel nuevo (sin
  `sponsor`, el marcador no muestra presentador). Un partido puede llevar `sinHora:true` (la liga
  no lo programó: se muestra "hora a confirmar") y `sede` ("a confirmar" o el nombre del lugar).
- Escudos de rivales en `fotos/rivales/<nombre-del-rival-en-minusculas>.png` (44 de FeMeBal
  y 13 de Maxi). Un rival nuevo se ve con su inicial hasta que se cargue el archivo.
- Galería: un álbum por categoría y adentro una entrada por fecha (rival, condición, fotógrafo,
  fotos), porque no siempre saca fotos la misma persona. Entran con `herramientas/fotos-galeria.js`
  desde `fotos/Partidos/<Plantel>/<fecha> <fotógrafo>/` (originales, ignoradas). Los Instagram de
  los fotógrafos van en `galeria.fotografos`. El álbum por fecha
  con sponsor queda para el plan 2027.
- Los sponsors del muro son acuerdos 2026, anteriores al plan; el plan de niveles
  arranca en 2027. Hasta entonces el muro sigue agrupado por categoría.
- Elegir la herramienta para mandar los mails (Brevo, MailerLite o similar) e importarle
  el CSV de contactos. Hasta entonces la lista solo se acumula en D1. Al 18/09/2026 la
  base tenía 0 contactos reales (el flujo está probado en producción): falta difundir el
  formulario; una opción es pedir el mail al votar en la MVP o el prode.
- Sede de un partido: cada categoría juega una fecha en la Casa del Handball (el estadio de
  FeMeBal) siendo local. Va como `sede` en el partido y en `herramientas/femebal-correcciones.json`
  (junto con cambios de localía u hora confirmados por el club) para que la sincronización no lo pise.
- Sponsors que presentan cada plantel: solo Primera damas (Franco Liontix), Tercera damas
  (Supermercado Magdalena) y Cuarta caballeros (Ladran Sancho) tienen; los demás no muestran
  presentador. Svencen Propiedades no tiene url.
- Las cuatro placas del fixture (Instagram) nunca llegaron como archivo; ya no hacen falta
  porque los escudos salieron de FeMeBal.

## Antes de dar por terminado un cambio

Abrir el `index.html` en el navegador y verificar que el marcador de la portada calcula
bien el próximo partido, que cada pestaña del fixture pinta sus 15 fechas y que
el visor de fotos abre y cierra con Escape.
