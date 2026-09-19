# Contexto del Ateneo Don Bosco Handball — para arrancar un proyecto nuevo

Escrito el 18/09/2026 al cierre de la primera etapa (la web). Sirve para que una conversación
nueva de Claude Code arranque sabiendo lo mismo que la anterior. Es un resumen: el detalle
vive en el repo de la web (`C:\Users\Lucas\adb-handball`), sobre todo en `CLAUDE.md`,
`datos.js`, `recetas.md` y `herramientas/README.md`.

## El club

- **Ateneo Don Bosco Handball**, Bernal (Quilmes, Buenos Aires). Sede: Don Bosco 116, colegio
  Don Bosco. Lema: *sensus pertinendi* (sentido de pertenencia). Colores: azul marino y rosa.
- Compite en **FeMeBal** (Federación Metropolitana de Balonmano), Torneo Metropolitano
  (Apertura y Clausura, 15 fechas cada uno). Maxihandball juega otra liga.
- **Gente:** Lucas Guillermon (dueño del proyecto web, juega en Cuarta caballeros; GitHub
  `lucasguillermon-hub`, mail lucasguillermon@gmail.com). Jimmy Righi e Iván Piscopo son los
  coordinadores. Hay una CM que hacía a mano fixture, resultados y escudos. Contacto del club:
  WhatsApp 11 5112 8153 (a verificar), ateneodonboscohandball@gmail.com, IG @adb.handball.

## Categorías y planteles (temporada 2026)

Nombres como los usa el club; entre paréntesis el de FeMeBal.

| Plantel | División FeMeBal | Jugadoras/es | DT y staff |
|---|---|---|---|
| Iniciación (grupos de 11-13, 14-15 y 16-17, para quienes arrancan) | no compite | — | Joel Szczur · Julieta Zárate |
| Minis (9 y 10) | formativa, sin resultados | 20 | Paula Glisciak |
| Infantiles (11 y 12) | Infantiles C | 26 | Cecilia Esquivel · Asist. Julieta Zárate |
| Menores (13 y 14) | Menores C | 22 | Iván Piscopo · Asist. Cecilia Esquivel · PF Agustín Valado |
| Cadetas (15 y 16) | Cadetes C | 6 | Iván Piscopo · Asist. Cecilia Esquivel · PF Agustín Valado |
| Juveniles (17 y 18) | Juveniles C | 10 | Iván Piscopo · PF Agustín Valado |
| Juniors (Sub-21) | Junior C | 11 | Joel Szczur · PF Facundo Fariña |
| Primera damas | Mayores 1º División | 15 | Christian Gull · PF Facundo Fariña |
| Tercera damas | Mayores 3º División | 18 | María José Daneri · PF Facundo Fariña |
| Cuarta caballeros | Mayores 4º División (masc.) | 22 | Joel Szczur |
| Maxihandball (+30, femenino) | liga aparte, fixture sin cargar | 22 | Iván Piscopo · PF Joel Szczur |
| Arqueras | entrenamiento específico | — | Nicolás Lizarraga |

- Minis a Juniors son **una tira**: juegan el mismo día en el mismo lugar (domingos), todas
  de local o todas de visitante, cada una a su hora (10:30, 11:30, 13:00, 14:30, 16:00).
- Horarios de entrenamiento y edades están en `datos.js` (`categorias`).
- Los planteles salen de `LISTAS PRESENTISMO 2026.xlsx` (una hoja por categoría, columna
  "JUGADORA", hojas de asistencia por mes). Está en la raíz del repo, ignorado en git.
- Minis e Infantiles son formativas: no se publican nombres de sus jugadoras.

## Sponsoreo

- **2026 (vigente):** 40 marcas en acuerdos por categoría (cada categoría tiene sus
  sponsors, están en la camiseta de esa categoría). Sponsor principal: Ladran Sancho.
  Logos en `fotos/sponsors/`, agrupados por categoría en `datos.js` (`tiers`). Solo 6 tienen
  un beneficio en el Club de Beneficios (que está escondido hasta acordarlos).
- **2027 (plan nuevo, `plan-sponsoreo.html`):** un solo esquema para todo el club, cuatro
  niveles (Tribuna, Cancha, Camiseta, Sensus), siete posiciones en la camiseta, exclusividad
  por rubro desde Camiseta, ciclo marzo-febrero con cierre de indumentaria el 31/1, se acepta
  canje, reporte mensual al sponsor (vistas de marca y cupones abiertos). Precios "a convenir".
- A los sponsors se les reporta con los eventos `data-track` de la web (Google Analytics,
  todavía sin conectar) y con los cupones abiertos.

## La web (lo que ya existe y funciona)

- Repo `lucasguillermon-hub/adb-handball`, Cloudflare Workers + D1, publica con push a `main`.
  Sin framework ni build. **`datos.js` es la única fuente de contenido**: fixture, resultados,
  tablas, planteles, staff, categorías, sponsors, galería, contacto.
- Páginas: `index.html` (portada con cuenta regresiva al 20/9/2026, ya con todo lo vivo),
  `web.html` (la definitiva, sin indexar hasta el lanzamiento), `plan-sponsoreo.html`.
- Funciones: fixture con resultados y tabla de posiciones por plantel · marcador con la
  próxima fecha de cada plantel y escudos de rivales · votación de la figura (MVP) por plantel
  · prode por plantel con "lo que dice la tribuna" · muro de sponsors con logos · galería por
  categoría (vacía) · formularios que guardan mails.
- **Base D1 `adb-contactos`** con tres tablas: `contactos` (mails de los formularios, hoy 0
  reales), `votos_mvp` y `prode` (una cookie anónima por persona, solo la fecha vigente).
  Endpoints en `worker.js`: `/api/suscribir`, `/api/mvp`, `/api/prode`.
- **Sincronización con FeMeBal** (fixture, horarios, resultados, tablas, escudos): scripts y
  método en `herramientas/`. Se corre una vez por semana con la receta de `recetas.md`.

## Decisiones ya tomadas (no volver a discutir)

Ver "Decisiones tomadas" en `CLAUDE.md`. Las más importantes: lanzamiento el 20/9; sponsors
2026 como legado y plan de niveles para 2027; nombres de planteles del club con la división
de FeMeBal guardada aparte; nada por nombre para Minis e Infantiles.

## Pendientes conocidos

Fixture de Maxihandball · horario de Minis · qué sponsor presenta cada plantel · beneficios
acordados con cada comercio · números reales del media kit · link de la comunidad de WhatsApp
· herramienta de email marketing (Brevo/MailerLite) · fotos de la galería · Google Analytics.

## Lo que el club gestiona hoy a mano (insumo para un sistema de gestión)

- **Presentismo** por categoría y mes, en Excel (`LISTAS PRESENTISMO 2026.xlsx`): una fila
  por jugadora, una columna por fecha de entrenamiento.
- **Planteles** y altas/bajas (el Excel es la lista viva; cambió durante esta etapa).
- **Fixture, resultados y tablas**: la CM lo copiaba de FeMeBal a placas de Instagram; ahora
  hay scripts.
- **Sponsors**: acuerdos por categoría, logos en PDF de una diseñadora, placas por categoría,
  y a partir de 2027 niveles, posiciones en la camiseta y reportes mensuales.
- **Comunicación**: Instagram, WhatsApp (comunidad), newsletter de los jueves (todavía sin
  herramienta), mails acumulados en D1.
- **Cuotas, pagos, autorizaciones de imagen de menores, fichas médicas, indumentaria**: no
  tienen sistema conocido (no salieron en esta etapa; preguntar).

## Cómo trabaja Lucas

Castellano rioplatense, pedidos cortos, de a uno, y espera que se hagan completos y se
publiquen. Quiere que se le avise cuando algo se sale del alcance y decidir él. Manda capturas
para señalar problemas. Todo lo que sea contenido tiene que vivir en un solo lugar editable.
