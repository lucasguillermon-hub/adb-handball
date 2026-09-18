# Recetas para pedirle cambios a Claude Code

Cada bloque de abajo se copia y se pega tal cual en Claude Code, con la carpeta del
proyecto abierta. Cambiá lo que está entre corchetes por tus datos.

Regla general: pedí **una cosa por vez** y revisá antes de publicar. Un pedido chico
sale bien casi siempre; uno que junta cinco cambios sale a medias.

---

## Al empezar cada sesión

```
Leé el CLAUDE.md antes de tocar nada y respetá esas reglas.
```

Con eso alcanza. No hace falta repetirlo en cada mensaje de la misma conversación.

---

## Cargar el resultado de una fecha

La primera vez el sitio todavía no muestra resultados, así que hay que crear la función:

```
Quiero mostrar los resultados de los partidos ya jugados. Agregá un campo opcional
de resultado a cada partido en datos.js, con los goles nuestros y los del rival.
En el fixture de web.html, los partidos que tengan resultado tienen que mostrarlo
en lugar de la fecha, y distinguirse visualmente entre ganado, empatado y perdido.
Los que no tengan resultado siguen como están. Cargá de ejemplo el partido de
[plantel] contra [rival]: [goles nuestros] a [goles de ellos].
```

De ahí en adelante, cada lunes:

```
Cargá estos resultados en datos.js: [plantel] [goles] a [goles] contra [rival],
fecha [día/mes]. Después subilo a GitHub.
```

---

## Actualizar la votación de la figura

```
Actualizá la votación de la MVP en datos.js: el contexto es el partido contra
[rival], que salió [resultado]. Las jugadoras a votar son: [número y nombre],
[número y nombre], [número y nombre]. Poné todos los votos en cero. El sponsor
que la presenta es [marca]. Subilo.
```

---

## Publicar un álbum de fotos

Poné las fotos en la carpeta `fotos` antes de pedirlo.

```
Puse [cantidad] fotos nuevas en la carpeta fotos, del partido contra [rival] del
[día/mes]. Verificá que ninguna pese más de 300 KB y avisame si alguna hay que
comprimir. Después agregá el álbum en datos.js con el sponsor [marca], escribiendo
para cada foto un alt descriptivo en castellano. Subilo.
```

---

## Sumar un sponsor nuevo

```
Sumá el sponsor [nombre] en datos.js, en la categoría [cuál]. Su beneficio para el
Club de Beneficios es: [descripción exacta del descuento], con el código [código]
y la letra chica [condiciones]. El rubro es [rubro]. Subilo.
```

Si te pasó el logo:

```
Guardé el logo de [nombre] en fotos/sponsors/. Reemplazá el texto por la imagen en
el muro de sponsors, manteniendo el tamaño parejo con el resto.
```

---

## Corregir datos del club

```
Corregí en datos.js: [categoría] entrena [días y horario] y es para [edades].
El rival del [fecha] de [plantel] en realidad se llama [nombre correcto].
Los números del media kit reales son [X] jugadores y [Y] familias. Subilo.
```

---

## Conectar Google Analytics

```
Pegá este código de Google Analytics en el head de index.html y de web.html:
[pegar acá el fragmento que te da Google]
Verificá que la función track() que ya existe le esté reportando los eventos.
Subilo.
```

---

## Publicar la web completa (el día del lanzamiento)

```
Llegó el día del lanzamiento. Reemplazá el contenido de index.html por el de
web.html, sacá la etiqueta noindex, borrá web.html, actualizá el robots.txt para
que no la excluya, ajustá el sitemap y subí la versión del service worker.
Antes de subir nada, mostrame qué vas a cambiar.
```

---

## Exportar los contactos

Los mails que deja la gente en la web (Avisame, la newsletter y "quiero jugar") se
guardan en la base `adb-contactos` de Cloudflare. Para bajarlos:

```
Exportá los contactos de la base D1 a un archivo contactos.csv en mi escritorio,
con las columnas mail, nombre, origen y fecha de alta, solo los que no pidieron la
baja. Decime cuántos hay y cuántos entraron por cada formulario.
```

Ese CSV es el que se importa en la herramienta de envío (Brevo, MailerLite o la que
elijan) cuando quieran mandar un mail a todos.

Si alguien pide que no le escriban más:

```
Marcá la baja en la base de contactos para [mail] con la fecha de hoy. No lo borres.
```

---

## Sincronizar con FeMeBal (fixture, horarios, resultados y escudos)

Lo que la CM hacía a mano. Una vez por semana, después de la fecha:

```
Sincronizá el fixture con FeMeBal: entrá a femebal.com/tournament-tracker, Torneo
Metropolitano Clausura (Mayores 1º y 3º división femenino, división C de Infantiles a
Junior, 4º división masculino), sacá los partidos del Ateneo Don Bosco de cada torneo con
fecha, hora, rival y resultado, y actualizá datos.js. Si aparece un rival nuevo, bajá su
escudo a fotos/rivales/ con el nombre en minúsculas. Decime qué cambió y subilo.
```

---

## Ver cómo va la votación de la figura

```
Mostrame los votos de la figura de la fecha vigente de cada plantel, con el total y
el porcentaje de cada jugadora, desde la tabla votos_mvp de la base D1.
```

---

## Si algo se rompió

```
El sitio está fallando: [describí qué ves]. Revisá el último cambio que subimos
y volvé atrás si hace falta.
```

Y desde el panel de Cloudflare, en el Worker, la sección de Deployments te deja
volver a una versión anterior con un clic. Eso es más rápido que cualquier arreglo.

---

## Antes de cada publicación

Pedile siempre esto como último paso:

```
Antes de subir: verificá que el sitio abra bien, que el fixture pinte las cuatro
pestañas, que la cuenta regresiva calcule, y subí la versión del sw.js.
```
