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

  // El Club de Beneficios queda escondido hasta que los cupones estén acordados con cada
  // comercio. Ponelo en true y aparece la sección, el link del menú y el del pie.
  mostrarBeneficios: false,

  contacto: {
    wsp: "5491151128153",                       // ⚠️ verificar
    tel: "11 5112 8153",                        // el mismo número, como se muestra en pantalla
    mail: "ateneodonboscohandball@gmail.com",
    ig: "https://instagram.com/adb.handball",
    comunidad: "https://chat.whatsapp.com/"      // ⚠️ pegar el link real de la comunidad
  },

  // ⚠️ Horarios de inicio estimados. Cambialos cuando salga la programación.
  // jugadoras: el plantel que se vota como figura de la fecha (de LISTAS PRESENTISMO 2026).
  // Minis e Infantiles son formativas: van con jugadoras:[] y no entran en nada que sea por nombre.
  // nombresCortos: true muestra "Nombre A." en vez del nombre completo (para menores de edad).
  planteles: [
    { id:"mayores-a", nombre:"Mayores A", dia:"Sábados", hora:"20:00", sponsor:"Franco Liontix", jugadoras:[
      "Luz Agüero", "Noelia Alcala", "Millaray Cocha", "Daniela Cristaldo", "Katia Cuomo", "Guadalupe Fernandez",
      "Julieta Gimenez", "Mora Lionti", "Carla Martinez", "Thayssa Montaly", "Barbara Ramirez",
      "Micaela Ramirez", "Valeria Trelles", "Justine Vargas", "Emilia Zarantonello"
    ], partidos:[
      {f:"2026-08-08",c:"V",r:"C.A.T."},{f:"2026-08-15",c:"L",r:"San Fernando"},{f:"2026-08-22",c:"V",r:"Dorrego"},
      {f:"2026-08-29",c:"L",r:"Lapte"},{f:"2026-09-05",c:"V",r:"AFALP"},{f:"2026-09-12",c:"L",r:"C.F.L."},
      {f:"2026-09-19",c:"V",r:"Polvorines"},{f:"2026-09-26",c:"L",r:"Sagrado Corazón"},{f:"2026-10-03",c:"V",r:"All Boys"},
      {f:"2026-10-17",c:"L",r:"Vilo"},{f:"2026-10-24",c:"V",r:"C.A.T."},{f:"2026-10-31",c:"V",r:"V.J.B."},
      {f:"2026-11-07",c:"L",r:"Argentinos Jrs."},{f:"2026-11-14",c:"V",r:"Secla"},{f:"2026-11-21",c:"L",r:"C.S.C.D.M."}
    ]},
    { id:"mayores-b", nombre:"Mayores B", dia:"Sábados", hora:"18:00", sponsor:"Supermercado Magdalena", jugadoras:[
      "Ariana Acosta", "Jazmin Alarcon", "Paula Ayala", "Mia Badaracco", "Marina Chazarreta", "Ariana Cuervo Diaz",
      "Sofia Dekker", "Julieta Di Bona", "Cecilia Esquivel", "Paula Glisciak", "Camila Gomez", "Camila Hermosid",
      "Patricia Marsicovetere", "Sofia Marsicovetere", "Julieta Mercado", "Zoe Rodriguez", "Ariana Veiga",
      "Brenda Velozo"
    ], partidos:[
      {f:"2026-08-08",c:"V",r:"C.B.C."},{f:"2026-08-15",c:"L",r:"Bernal B."},{f:"2026-08-22",c:"V",r:"Boca Juniors"},
      {f:"2026-08-29",c:"L",r:"AFALP"},{f:"2026-09-05",c:"V",r:"Argentinos Jrs."},{f:"2026-09-12",c:"L",r:"D.B.H."},
      {f:"2026-09-19",c:"V",r:"Independiente"},{f:"2026-09-26",c:"L",r:"Querandí"},{f:"2026-10-03",c:"V",r:"C.A.D.M."},
      {f:"2026-10-17",c:"L",r:"M.A. Handball"},{f:"2026-10-24",c:"V",r:"San Telmo"},{f:"2026-10-31",c:"V",r:"C.A.N.CH."},
      {f:"2026-11-07",c:"L",r:"Secla"},{f:"2026-11-14",c:"V",r:"Colegio del Parque"},{f:"2026-11-21",c:"L",r:"Ceder Caseros"}
    ]},
    // Inferiores damas es una tira: Minis, Infantiles, Menores, Cadetas, Juveniles y Juniors
    // juegan el mismo día en el mismo lugar, todas de local o todas de visitante. El fixture
    // se carga una vez (en Minis) y las demás lo comparten con mismoFixtureQue. Lo propio de
    // cada una es el horario y el plantel. Sin "sponsor", el marcador no muestra presentador.
    { id:"minis", nombre:"Minis", dia:"Domingos", hora:"11:00",   // ⚠️ confirmar horario
      nombresCortos:true, jugadoras:[], partidos:[
      {f:"2026-08-09",c:"V",r:"C.V.D."},{f:"2026-08-16",c:"L",r:"Independiente"},{f:"2026-08-23",c:"V",r:"Colegio Ward"},
      {f:"2026-08-30",c:"L",r:"Boca Juniors"},{f:"2026-09-06",c:"V",r:"C.A.B."},{f:"2026-09-13",c:"L",r:"Villa Modelo"},
      {f:"2026-09-20",c:"V",r:"Vélez Sarsfield"},{f:"2026-09-27",c:"L",r:"Ceder Caseros"},{f:"2026-10-04",c:"V",r:"Ciudad Jardín"},
      {f:"2026-10-11",c:"L",r:"La Patriada"},{f:"2026-10-25",c:"V",r:"C.S.C.D.M."},{f:"2026-11-01",c:"L",r:"Polvorines"},
      {f:"2026-11-08",c:"V",r:"Handball C.I.D."},{f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"C.E.B."}
    ]},
    { id:"infantiles", nombre:"Infantiles", dia:"Domingos", hora:"11:00",   // ⚠️ confirmar horario
      nombresCortos:true, jugadoras:[], mismoFixtureQue:"minis" },
    { id:"menores", nombre:"Menores", dia:"Domingos", hora:"11:00",   // ⚠️ confirmar horario
      nombresCortos:true, jugadoras:[
      "Martina Antero", "Sofia Ballares", "Matilda Barrera", "Victoria Bassi", "Celeste Bello",
      "Pilar Bustamante", "Mia Calo", "Macarena De León", "Guillemina Fortunato", "Emilia Greco",
      "Celina Kronemberg", "Victoria Kyanco", "Valentina Manchi", "Luana Martinez", "Helena Paz",
      "Martina Rosales", "Lupe Sosa", "Nina Stambullian", "Isabella Stoll", "Agustina Villa", "Julieta Villa",
      "Serena Zabatta"
    ], mismoFixtureQue:"minis" },
    { id:"cadetas", nombre:"Cadetas", dia:"Domingos", hora:"11:00",   // ⚠️ confirmar horario
      nombresCortos:true, jugadoras:[
      "Luciana Chiesa", "Abril Coria", "Isabella Greco", "Elilia Juarez Leikam", "Ema Rosello", "Maria Eugenia Rotta"
    ], mismoFixtureQue:"minis" },
    { id:"juveniles", nombre:"Juveniles", dia:"Domingos", hora:"11:00",   // ⚠️ confirmar horario
      nombresCortos:true, jugadoras:[
      "Julieta Antero", "Valentina Antero", "Camila Dib", "Antonella Durzo", "Uma Estanga", "Angela Farias",
      "Renata Giachello", "Martina Gomez", "Isabella Scarfo", "Luciana Toledo"
    ], mismoFixtureQue:"minis" },
    { id:"juniors", nombre:"Juniors", dia:"Domingos", hora:"11:00",   // ⚠️ confirmar horario
      jugadoras:[
      "Jazmin Alarcon", "Mia Badaracco", "Katia Cuomo", "Julia Damario", "Camila Gomez", "Patricia Marsico",
      "Sofia Marsico", "Thayssa Montali", "Milagros Mosqueda", "Catalina Ravazzano", "Emilia Zarantonello"
    ], mismoFixtureQue:"minis" },
    { id:"masculino", nombre:"Mayores caballeros", dia:"Domingos", hora:"16:00", sponsor:"Ladran Sancho", jugadoras:[
      "Lionel Benitez", "Patricio Britez", "Valentin Burakoski", "Valentin Carriego", "Martin Casco",
      "Guillermo Corbelli", "Agustin Fernandez", "Fabian Franco", "Gabriel Franco", "Enzo Golnner",
      "Maximiliano Gomez", "Lucas Guillermon", "Agustin Iacuzzi", "Leonel Legal", "Leandro Maggi",
      "Julian Ponce", "Leandro Salvetti", "Marcelo Sanchez", "Matias Solis", "Matias Vallejos",
      "Martin Vega"
    ], partidos:[
      {f:"2026-08-09",c:"V",r:"Bernal B."},{f:"2026-08-16",c:"L",r:"Dep. Laferrere"},{f:"2026-08-23",c:"V",r:"Juniors"},
      {f:"2026-08-30",c:"L",r:"General Las Heras"},{f:"2026-09-06",c:"V",r:"Dorrego"},{f:"2026-09-13",c:"L",r:"Ferrocarril Mitre"},
      {f:"2026-09-20",c:"libre"},{f:"2026-09-27",c:"libre"},{f:"2026-10-04",c:"V",r:"C.A.D.G."},
      {f:"2026-10-11",c:"L",r:"C.A.T."},{f:"2026-10-25",c:"V",r:"H.M.B."},{f:"2026-11-01",c:"L",r:"San Telmo"},
      {f:"2026-11-08",c:"V",r:"El Portugués"},{f:"2026-11-15",c:"V",r:"Círculo Gral. Belgrano"},{f:"2026-11-22",c:"L",r:"Handball Escobar"}
    ]},
    // ⚠️ Maxihandball: falta cargar su fixture (fechas, rivales, día y hora).
    { id:"maxi", nombre:"Maxihandball", dia:"Domingos", hora:"11:00", jugadoras:[
      "Nahir Alvarez", "Ariadna Aristizabal", "Agustina Bajko", "Valentina Bajko", "Mariana Benitez",
      "Jimena Berutti", "Julieta Biazzo", "Mayra Borrely", "Camila Lalin", "Gisela Loffler", "Agustina Michl",
      "Julieta Milanesi", "Martina Panetta", "Maru Pereyras", "Magali Prisco", "Marcela Rodriguez",
      "Florencia Rossaro", "Camila Seguin", "Paula Subiza", "Gianella Turquia", "Belen Varela",
      "Julieta Zarate"
    ], partidos:[] }
  ],

  // La votación de la figura usa `jugadoras` de cada plantel y el último partido jugado.
  // El prode no tiene sponsor fijo: cada partido lo presenta una marca distinta del
  // muro, elegida de forma pareja y estable (todos ven la misma para ese partido).

  // ============ GALERÍA ============
  // Un álbum por categoría. Poné las fotos en /fotos con el nombre que quieras y cargalas
  // acá: { src:"fotos/mayores-a-01.jpg", alt:"qué se ve, en castellano", alto:true si es vertical }.
  // Exportalas a 1600 px de ancho, JPG calidad 80 o WebP, bajo 300 KB cada una.
  // Un álbum con fotos:[] muestra "todavía no hay fotos" en vez de huecos.
  galeria: {
    fotografa: { nombre:"María Fotografía", ig:"https://instagram.com/" },   // ⚠️ nombre y link reales
    albumes: [
      { titulo:"Minis", fotos:[] },
      { titulo:"Infantiles", fotos:[] },
      { titulo:"Menores", fotos:[] },
      { titulo:"Cadetas", fotos:[] },
      { titulo:"Juveniles", fotos:[] },
      { titulo:"Juniors", fotos:[] },
      { titulo:"Mayores A", fotos:[] },
      { titulo:"Mayores B", fotos:[] },
      { titulo:"Mayores caballeros", fotos:[] },
      { titulo:"Maxihandball", fotos:[] }
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

  // Edades según las categorías del handball: Minis hasta 9-10, Infantiles 11-12, Menores 13-14,
  // Cadetas 15-16, Juveniles 17-18, Juniors (Sub-21) hasta 21, Mayores desde 19, Maxi +30.
  // ⚠️ Horarios: confirmá con la coordinación.
  // Las que tienen especial:true no cuentan en el total de categorías que muestra el sitio.
  categorias: [
    { n:"Iniciación", e:"6 a 8 años", dt:"Joel Szczur", h:"Martes y jueves, 17:30" },   // ⚠️ no figura en la lista de DT del club: confirmar si sigue
    { n:"Minis", e:"9 y 10 años", dt:"Paula Glisciak", h:"Martes y jueves, 18:00" },
    { n:"Infantiles", e:"11 y 12 años", dt:"Cecilia Esquivel · Asist. Julieta Zárate", h:"Martes y jueves, 18:30" },
    { n:"Menores", e:"13 y 14 años", dt:"Iván Piscopo · Asist. Cecilia Esquivel · PF Agustín Valado", h:"Lunes, miércoles y viernes, 19:00" },
    { n:"Cadetas", e:"15 y 16 años", dt:"Iván Piscopo · Asist. Cecilia Esquivel · PF Agustín Valado", h:"Martes y jueves, 18:30 · Viernes, 19:00" },
    { n:"Juveniles", e:"17 y 18 años", dt:"Iván Piscopo · PF Agustín Valado", h:"Martes y jueves, 18:30 · Viernes, 19:00" },
    { n:"Juniors", e:"Sub-21, hasta 21 años", dt:"Joel Szczur · PF Facundo Fariña", h:"Lunes, miércoles y viernes, 20:00" },
    { n:"Mayores A", e:"Primera damas", dt:"Christian Gull · PF Facundo Fariña", h:"Lunes, miércoles y viernes, 21:00" },
    { n:"Mayores B", e:"Tercera damas", dt:"María José Daneri · PF Facundo Fariña", h:"Lunes, miércoles y viernes, 21:00" },
    { n:"Mayores caballeros", e:"Cuarta caballeros", dt:"Joel Szczur", h:"Martes y jueves, 21:00" },
    { n:"Maxihandball", e:"Femenino, +30", dt:"Iván Piscopo · PF Joel Szczur", h:"Miércoles, 21:00" },
    { n:"Arqueras", e:"Entrenamiento específico", dt:"Nicolás Lizarraga", h:"A coordinar con cada categoría", especial:true }   // no cuenta como categoría
  ],

  staff: [
    { n:"Jimmy Righi", r:"Coordinador" },
    { n:"Iván Piscopo", r:"Coordinador · DT menores, cadetas, juveniles y maxi" },
    { n:"Christian Gull", r:"DT Mayores A" },
    { n:"María José Daneri", r:"DT Mayores B" },
    { n:"Joel Szczur", r:"DT juniors y caballeros · PF maxi" },
    { n:"Cecilia Esquivel", r:"DT infantiles · asistente de menores y cadetas" },
    { n:"Paula Glisciak", r:"DT minis" },
    { n:"Julieta Zárate", r:"Asistente de infantiles" },
    { n:"Facundo Fariña", r:"PF de juniors y mayores" },
    { n:"Agustín Valado", r:"PF de menores, cadetas y juveniles" },
    { n:"Nicolás Lizarraga", r:"Entrenador de arqueras" }
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

// Un plantel con mismoFixtureQue:"id" juega las mismas fechas que ese otro plantel (una tira).
DATOS.planteles.forEach(p => {
  if (p.mismoFixtureQue) p.partidos = DATOS.planteles.find(x => x.id === p.mismoFixtureQue).partidos;
});
