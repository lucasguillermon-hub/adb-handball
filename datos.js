/* =============================================================================
   PARÁMETROS DEL CLUB — Ateneo Don Bosco Handball

   Este es el ÚNICO archivo que hay que tocar para cambiar contenido.
   Lo usan las dos páginas: index.html (portada de lanzamiento) y web.html
   (la web completa). Si cambiás el WhatsApp acá, cambia en las dos.

   Lo marcado con ⚠️ está pendiente de confirmar.
   ============================================================================= */

const DATOS = {

  /* --------- PORTADA DE LANZAMIENTO (index.html) --------- */

  // Día y hora en que abre la web completa.
  lanzamiento: "2026-10-04T10:00:00",

  // Promoción de apertura. Dejalo en "" para que no se muestre.
  oferta: "",

  /* --------- DATOS GENERALES DEL CLUB --------- */
  torneo: "Clausura 2026",

  contacto: {
    wsp: "5491151128153",                       // ⚠️ verificar
    tel: "11 5112 8153",                        // el mismo número, como se muestra en pantalla
    mail: "ateneodonboscohandball@gmail.com",
    ig: "https://instagram.com/adb.handball",
    comunidad: "https://chat.whatsapp.com/"      // ⚠️ pegar el link real de la comunidad
  },

  // ⚠️ Horarios de inicio estimados. Cambialos cuando salga la programación.
  planteles: [
    { id:"mayores-a", nombre:"Mayores A", dia:"Sábados", hora:"20:00", sponsor:"Franco Liontix", partidos:[
      {f:"2026-08-08",c:"V",r:"C.A.T."},{f:"2026-08-15",c:"L",r:"San Fernando"},{f:"2026-08-22",c:"V",r:"Dorrego"},
      {f:"2026-08-29",c:"L",r:"Lapte"},{f:"2026-09-05",c:"V",r:"AFALP"},{f:"2026-09-12",c:"L",r:"C.F.L."},
      {f:"2026-09-19",c:"V",r:"Polvorines"},{f:"2026-09-26",c:"L",r:"Sagrado Corazón"},{f:"2026-10-03",c:"V",r:"All Boys"},
      {f:"2026-10-17",c:"L",r:"Vilo"},{f:"2026-10-24",c:"V",r:"C.A.T."},{f:"2026-10-31",c:"V",r:"V.J.B."},
      {f:"2026-11-07",c:"L",r:"Argentinos Jrs."},{f:"2026-11-14",c:"V",r:"Secla"},{f:"2026-11-21",c:"L",r:"C.S.C.D.M."}
    ]},
    { id:"mayores-b", nombre:"Mayores B", dia:"Sábados", hora:"18:00", sponsor:"Supermercado Magdalena", partidos:[
      {f:"2026-08-08",c:"V",r:"C.B.C."},{f:"2026-08-15",c:"L",r:"Bernal B."},{f:"2026-08-22",c:"V",r:"Boca Juniors"},
      {f:"2026-08-29",c:"L",r:"AFALP"},{f:"2026-09-05",c:"V",r:"Argentinos Jrs."},{f:"2026-09-12",c:"L",r:"D.B.H."},
      {f:"2026-09-19",c:"V",r:"Independiente"},{f:"2026-09-26",c:"L",r:"Querandí"},{f:"2026-10-03",c:"V",r:"C.A.D.M."},
      {f:"2026-10-17",c:"L",r:"M.A. Handball"},{f:"2026-10-24",c:"V",r:"San Telmo"},{f:"2026-10-31",c:"V",r:"C.A.N.CH."},
      {f:"2026-11-07",c:"L",r:"Secla"},{f:"2026-11-14",c:"V",r:"Colegio del Parque"},{f:"2026-11-21",c:"L",r:"Ceder Caseros"}
    ]},
    { id:"inferiores", nombre:"Inferiores damas", dia:"Domingos", hora:"11:00", sponsor:"Administración Palmieri", partidos:[
      {f:"2026-08-09",c:"V",r:"C.V.D."},{f:"2026-08-16",c:"L",r:"Independiente"},{f:"2026-08-23",c:"V",r:"Colegio Ward"},
      {f:"2026-08-30",c:"L",r:"Boca Juniors"},{f:"2026-09-06",c:"V",r:"C.A.B."},{f:"2026-09-13",c:"L",r:"Villa Modelo"},
      {f:"2026-09-20",c:"V",r:"Vélez Sarsfield"},{f:"2026-09-27",c:"L",r:"Ceder Caseros"},{f:"2026-10-04",c:"V",r:"Ciudad Jardín"},
      {f:"2026-10-11",c:"L",r:"La Patriada"},{f:"2026-10-25",c:"V",r:"C.S.C.D.M."},{f:"2026-11-01",c:"L",r:"Polvorines"},
      {f:"2026-11-08",c:"V",r:"Handball C.I.D."},{f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"C.E.B."}
    ]},
    { id:"masculino", nombre:"Mayores caballeros", dia:"Domingos", hora:"16:00", sponsor:"Ladran Sancho", partidos:[
      {f:"2026-08-09",c:"V",r:"Bernal B."},{f:"2026-08-16",c:"L",r:"Dep. Laferrere"},{f:"2026-08-23",c:"V",r:"Juniors"},
      {f:"2026-08-30",c:"L",r:"General Las Heras"},{f:"2026-09-06",c:"V",r:"Dorrego"},{f:"2026-09-13",c:"L",r:"Ferrocarril Mitre"},
      {f:"2026-09-20",c:"libre"},{f:"2026-09-27",c:"libre"},{f:"2026-10-04",c:"V",r:"C.A.D.G."},
      {f:"2026-10-11",c:"L",r:"C.A.T."},{f:"2026-10-25",c:"V",r:"H.M.B."},{f:"2026-11-01",c:"L",r:"San Telmo"},
      {f:"2026-11-08",c:"V",r:"El Portugués"},{f:"2026-11-15",c:"V",r:"Círculo Gral. Belgrano"},{f:"2026-11-22",c:"L",r:"Handball Escobar"}
    ]}
  ],

  // Votación de la figura. ⚠️ Cargá los nombres reales del plantel.
  mvp: {
    sponsor: "Delicias Doradas",
    contexto: "Fecha 5 · Ateneo Don Bosco 24 – 21 AFALP",
    opciones: [
      { d:"7",  nom:"Jugadora #7",  pos:"Lateral izquierda", votos:41 },
      { d:"10", nom:"Jugadora #10", pos:"Central",           votos:63 },
      { d:"1",  nom:"Arquera #1",   pos:"Arco",              votos:52 },
      { d:"14", nom:"Jugadora #14", pos:"Pivote",            votos:28 },
      { d:"20", nom:"Jugadora #20", pos:"Extremo derecho",   votos:19 }
    ]
  },
  // El prode no tiene sponsor fijo: cada partido lo presenta una marca distinta del
  // muro, elegida de forma pareja y estable (todos ven la misma para ese partido).

  // ============ GALERÍA ============
  // Poné las fotos en una carpeta /fotos junto a este archivo.
  // Exportalas a 1600 px de ancho, JPG calidad 80 o WebP (unos 200 KB cada una).
  // La versión en alta guardala aparte: acá va la liviana.
  galeria: {
    fotografa: { nombre:"María Fotografía", ig:"https://instagram.com/" },   // ⚠️ nombre y link reales
    albumes: [
      { titulo:"Fecha 5 · vs AFALP", sponsor:"Delicias Doradas", fotos:[
        { src:"fotos/f5-01.jpg", alt:"Contraataque de Mayores A", alto:false },
        { src:"fotos/f5-02.jpg", alt:"Atajada de la arquera", alto:true },
        { src:"fotos/f5-03.jpg", alt:"Festejo del equipo", alto:false },
        { src:"fotos/f5-04.jpg", alt:"Lanzamiento desde nueve metros", alto:true },
        { src:"fotos/f5-05.jpg", alt:"La tribuna del Bosco", alto:false },
        { src:"fotos/f5-06.jpg", alt:"Charla técnica en el minuto", alto:false }
      ]},
      { titulo:"Fecha 4 · vs Lapte", sponsor:"Agua Tronador", fotos:[
        { src:"fotos/f4-01.jpg", alt:"Salida del equipo a la cancha", alto:false },
        { src:"fotos/f4-02.jpg", alt:"Defensa cerrada", alto:true },
        { src:"fotos/f4-03.jpg", alt:"Gol de pivote", alto:false },
        { src:"fotos/f4-04.jpg", alt:"Abrazo tras el partido", alto:false }
      ]},
      { titulo:"Primera fecha del masculino", sponsor:"Ladran Sancho", fotos:[
        { src:"fotos/masc-01.jpg", alt:"Plantel de mayores caballeros", alto:false },
        { src:"fotos/masc-02.jpg", alt:"Lanzamiento en suspensión", alto:true },
        { src:"fotos/masc-03.jpg", alt:"Banco de suplentes", alto:false }
      ]}
    ]
  },

  // ⚠️ Los beneficios son ejemplos. Acordá cada uno con el comercio antes de publicar.
  beneficios: [
    { marca:"La Conocida", rubro:"Parrilla y vermutería", oferta:"15% de descuento en el salón", letra:"De lunes a jueves. No acumulable con otras promos.", codigo:"BOSCO15" },
    { marca:"Delicias Doradas", rubro:"Panadería", oferta:"Docena de facturas al precio de 10", letra:"Presentando el código en el mostrador.", codigo:"BOSCO12" },
    { marca:"Santa Paz", rubro:"Kinesiología y rehabilitación", oferta:"Primera consulta sin cargo", letra:"Para jugadores y familiares directos.", codigo:"BOSCOKINE" },
    { marca:"INK 360", rubro:"Central gráfica", oferta:"20% en trabajos de impresión", letra:"Pedidos mayores a una unidad.", codigo:"BOSCO360" },
    { marca:"Century 21 Sunset", rubro:"Inmobiliaria", oferta:"Tasación sin cargo", letra:"Zona Bernal, Quilmes y Don Bosco.", codigo:"BOSCOC21" },
    { marca:"Agua Tronador", rubro:"Bidones y dispensers", oferta:"Primer bidón bonificado", letra:"Clientes nuevos de la zona.", codigo:"BOSCOAGUA" }
  ],

  // Muro de sponsors de la temporada 2026. Son acuerdos anteriores al plan de
  // sponsoreo (que arranca en 2027), por eso siguen agrupados por categoría y no
  // por nivel. Por cada marca:
  //   n            nombre, siempre.
  //   logo         archivo en fotos/sponsors/, por ejemplo "fotos/sponsors/ladran-sancho.png".
  //                Vacío = se muestra el nombre en texto.
  //   url          Instagram o sitio del sponsor. Vacío = la tarjeta lleva al Club de Beneficios.
  //   fondoOscuro  true si el logo es claro y necesita la tarjeta azul para verse.
  tiers: [
    { titulo:"Sponsor principal", marcas:[
      { n:"Ladran Sancho", destacado:true, logo:"fotos/sponsors/ladran-sancho.png", url:"", fondoOscuro:false }
    ]},
    { titulo:"Minis", marcas:[
      { n:"Administración Palmieri", logo:"fotos/sponsors/administracion-palmieri.png", url:"", fondoOscuro:false },
      { n:"Century 21 Sunset",       logo:"fotos/sponsors/century-21.png",              url:"", fondoOscuro:false },
      { n:"INK 360",                 logo:"fotos/sponsors/ink-360.png",                 url:"", fondoOscuro:false },
      { n:"La Conocida",             logo:"fotos/sponsors/parrilla-la-conocida.png",    url:"", fondoOscuro:false }
    ]},
    { titulo:"Infantiles", marcas:[
      { n:"A lo Rabal",                        logo:"fotos/sponsors/a-lo-rabal.png",                   url:"", fondoOscuro:false },
      { n:"Cortinas Calchaquí",                logo:"fotos/sponsors/cortinas-calchaqui.png",           url:"", fondoOscuro:false },
      { n:"Expreso Vitale",                    logo:"fotos/sponsors/expreso-vitale.png",               url:"", fondoOscuro:false },
      { n:"Mundo Dental",                      logo:"fotos/sponsors/mundo-dental.png",                 url:"", fondoOscuro:false },
      { n:"Kinesiología Lic. Valeria Trelles", logo:"fotos/sponsors/valeria-trelles-kinesiologia.png", url:"", fondoOscuro:false }
    ]},
    { titulo:"Menores", marcas:[
      { n:"Expreso Vitale", logo:"fotos/sponsors/expreso-vitale.png", url:"", fondoOscuro:false },
      { n:"Fior Pilates",   logo:"fotos/sponsors/fior-pilates.png",   url:"", fondoOscuro:false },
      { n:"Ladran Sancho",  logo:"fotos/sponsors/ladran-sancho.png",  url:"", fondoOscuro:false },
      { n:"Núcleo Deportes",logo:"fotos/sponsors/nucleo-deportes.png",url:"", fondoOscuro:false },
      { n:"Via Cosenza",    logo:"fotos/sponsors/via-cosenza.png",    url:"", fondoOscuro:false }
    ]},
    { titulo:"Cadetas", marcas:[
      { n:"Body Bernal",   logo:"fotos/sponsors/body-bernal.png",   url:"", fondoOscuro:false },
      { n:"Ladran Sancho", logo:"fotos/sponsors/ladran-sancho.png", url:"", fondoOscuro:false },
      { n:"Neobrokers",    logo:"fotos/sponsors/neobrokers.png",    url:"", fondoOscuro:false },
      { n:"Sr. Cartel",    logo:"fotos/sponsors/senor-cartel.png",  url:"", fondoOscuro:false },
      { n:"Via Cosenza",   logo:"fotos/sponsors/via-cosenza.png",   url:"", fondoOscuro:false }
    ]},
    { titulo:"Juveniles", marcas:[
      { n:"AB Transbelt · Autogoma Bernal", logo:"fotos/sponsors/autogoma-bernal-transvelt.png", url:"", fondoOscuro:false },
      { n:"Grupo Uno",                      logo:"fotos/sponsors/grupo-uno.png",                 url:"", fondoOscuro:false },
      { n:"La Asunción",                    logo:"fotos/sponsors/la-asuncion.png",               url:"", fondoOscuro:false },
      { n:"Ladran Sancho",                  logo:"fotos/sponsors/ladran-sancho.png",             url:"", fondoOscuro:false },
      { n:"Le Coin",                        logo:"fotos/sponsors/le-coin.png",                   url:"", fondoOscuro:false },
      { n:"Morty's Burgers",                logo:"fotos/sponsors/morty-s.png",                   url:"", fondoOscuro:false }
    ]},
    { titulo:"Juniors", marcas:[
      { n:"A los Mandarines", logo:"fotos/sponsors/a-los-mandarines.png", url:"", fondoOscuro:false },
      { n:"Acimet",           logo:"fotos/sponsors/acimet.png",           url:"", fondoOscuro:false },
      { n:"Cosentino",        logo:"fotos/sponsors/cosentino.png",        url:"", fondoOscuro:false },
      { n:"Paher Plásticos",  logo:"fotos/sponsors/paher-plasticos.png",  url:"", fondoOscuro:false },
      { n:"Agua Tronador",    logo:"fotos/sponsors/tronador.png",         url:"", fondoOscuro:false }
    ]},
    { titulo:"Mayores A", marcas:[
      { n:"Franco Liontix",         logo:"fotos/sponsors/franco-lionti.png",                url:"", fondoOscuro:false },
      { n:"Agua Tronador",          logo:"fotos/sponsors/tronador.png",                     url:"", fondoOscuro:false },
      { n:"Delicias Doradas",       logo:"fotos/sponsors/delicias-doradas.png",             url:"", fondoOscuro:false },
      { n:"De Cascia",              logo:"fotos/sponsors/de-cascia.png",                    url:"", fondoOscuro:false },
      { n:"Carnevale",              logo:"fotos/sponsors/carnevale.png",                    url:"", fondoOscuro:false },
      { n:"Lic. Kine Vale Trelles", logo:"fotos/sponsors/valeria-trelles-kinesiologia.png", url:"", fondoOscuro:false }
    ]},
    { titulo:"Mayores B", marcas:[
      { n:"Textil Calchaquí",       logo:"fotos/sponsors/cortinas-calchaqui.png",     url:"", fondoOscuro:false },
      { n:"Supermercado Magdalena", logo:"fotos/sponsors/magdalena-supermercado.png", url:"", fondoOscuro:false },
      { n:"Sorar RRHH",             logo:"fotos/sponsors/sora-rrhh.png",              url:"", fondoOscuro:false },
      { n:"JL Javier López",        logo:"fotos/sponsors/javier-lopez.png",           url:"", fondoOscuro:false },
      { n:"Bernuts",                logo:"fotos/sponsors/bernutss.png",               url:"", fondoOscuro:false },
      { n:"Agua Tronador",          logo:"fotos/sponsors/tronador.png",               url:"", fondoOscuro:false }
    ]},
    { titulo:"Maxihandball", marcas:[
      { n:"Inti Bernal",      logo:"fotos/sponsors/inti-bernal.png", url:"", fondoOscuro:false },
      { n:"Lalomatic",        logo:"fotos/sponsors/lalomatic.png",   url:"", fondoOscuro:false },
      { n:"Redbee",           logo:"fotos/sponsors/redbee.png",      url:"", fondoOscuro:false },
      { n:"Graferme Gráfica", logo:"fotos/sponsors/graferne.png",    url:"", fondoOscuro:false },
      { n:"Santa Paz",        logo:"fotos/sponsors/santa-paz.png",   url:"", fondoOscuro:false }
    ]}
  ],

  // ⚠️ Edades y horarios: confirmá con la coordinación.
  // Las que tienen especial:true no cuentan en el total de categorías que muestra el sitio.
  categorias: [
    { n:"Iniciación", e:"6 a 8 años", dt:"Joel Szczur", h:"Martes y jueves, 17:30" },
    { n:"Minis", e:"9 y 10 años", dt:"Paula Glisciak", h:"Martes y jueves, 18:00" },
    { n:"Infantiles", e:"11 y 12 años", dt:"Cecilia Esquivel", h:"Martes y jueves, 18:30" },
    { n:"Menores", e:"13 y 14 años", dt:"Iván Piscopo y Cecilia Esquivel", h:"Lunes, miércoles y viernes, 19:00" },
    { n:"Cadetas", e:"15 y 16 años", dt:"A confirmar", h:"A confirmar" },        // ⚠️ edad, DT y horario
    { n:"Juveniles", e:"17 y 18 años", dt:"A confirmar", h:"A confirmar" },      // ⚠️ edad, DT y horario
    { n:"Juniors", e:"19 a 21 años", dt:"Joel Szczur · PF Facundo Fariña", h:"Lunes, miércoles y viernes, 20:00" },   // ⚠️ edad: antes decía 15 a 18
    { n:"Mayores A", e:"Primera damas", dt:"Christian Gull · PF Facundo Fariña", h:"Lunes, miércoles y viernes, 21:00" },
    { n:"Mayores B", e:"Tercera damas", dt:"Majo Daneri · PF Facundo Fariña", h:"Lunes, miércoles y viernes, 21:00" },
    { n:"Mayores caballeros", e:"Cuarta caballeros", dt:"Joel Szczur", h:"Martes y jueves, 21:00" },
    { n:"Maxihandball", e:"Femenino, +30", dt:"Iván Piscopo · PF Joel Szczur", h:"Miércoles, 21:00" },
    { n:"Arqueras", e:"Entrenamiento específico", dt:"Nicolás Lizarraga", h:"A coordinar con cada categoría", especial:true }   // no cuenta como categoría
  ],

  staff: [
    { n:"Jimmy Righi", r:"Coordinador" },
    { n:"Iván Piscopo", r:"Coordinador · DT menores y maxi" },
    { n:"Christian Gull", r:"DT Mayores A" },
    { n:"Majo Daneri", r:"DT Mayores B" },
    { n:"Joel Szczur", r:"DT juniors, iniciación y caballeros" },
    { n:"Cecilia Esquivel", r:"DT infantiles y menores" },
    { n:"Paula Glisciak", r:"DT minis" },
    { n:"Nicolás Lizarraga", r:"Entrenador de arqueras" },
    { n:"Facundo Fariña", r:"Preparador físico" }
  ],

  // ⚠️ Poné tus números reales antes de mostrarle esto a un sponsor.
  // Los usan web.html y plan-sponsoreo.html. El de partidos de local se calcula
  // solo desde el fixture: la cantidad cambia cada torneo.
  numeros: [
    { b:"2.717", l:"seguidores en Instagram, casi todos de Quilmes y Bernal" },
    { b:"150+", l:"jugadoras y jugadores en {categorias} categorías" },   // {categorias} se reemplaza por el total real
    { calc:"local", l:"partidos de local este torneo" },   // se calcula solo desde el fixture
    { b:"600+", l:"familias del club y del colegio en la comunidad" }
  ],

  // Los cuatro niveles del plan de sponsoreo. Mismos textos que plan-sponsoreo.html:
  // si cambia uno, cambiá el otro.
  paquetes: [
    { t:"Tribuna", p:"Para el comercio de la cuadra que quiere estar cerca.", destacado:false, items:[
      "Logo en el muro de sponsors de la web",
      "Tu beneficio en el Club de Beneficios del club",
      "Una historia en Instagram por mes",
      "Reporte mensual de cuánta gente vio tu marca y abrió tu cupón"
    ], cta:"Quiero estar cerca" },
    { t:"Cancha", p:"Para el que quiere que lo vean todos los fines de semana.", destacado:false, items:[
      "Todo lo del nivel Tribuna",
      "Banner en la cancha en todos los partidos de local",
      "Logo en los flyers de fixture y resultados",
      "Presentás dos fechas al año en la portada de la web",
      "Mención en el newsletter de los jueves"
    ], cta:"Quiero estar en la cancha" },
    { t:"Camiseta", p:"Para la marca que quiere quedarse todo el año.", destacado:true, items:[
      "Todo lo del nivel Cancha",
      "Tu logo en una posición de la camiseta, en todas las categorías",
      "Exclusividad en tu rubro",
      "Presentás la votación de la figura un mes al año",
      "Una producción de fotos con un plantel"
    ], cta:"Hablemos del año" },
    { t:"Sensus", p:"Un solo sponsor por temporada. El que le pone el nombre al año.", destacado:false, items:[
      "Todo lo del nivel Camiseta",
      "El pecho de la camiseta, en todas las categorías",
      "Naming de la copa de pretemporada del club",
      "Presentás el marcador de la web todo el año",
      "Presencia en todas las comunicaciones del club"
    ], cta:"Hablemos de la temporada" }
  ]
};
