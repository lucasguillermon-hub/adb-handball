/* =============================================================================
   PARÁMETROS DEL CLUB — Ateneo Don Bosco Handball

   Este es el ÚNICO archivo que hay que tocar para cambiar contenido.
   Lo usan las dos páginas: index.html (la web) y plan-sponsoreo.html
   (el plan 2027). Si cambiás el WhatsApp acá, cambia en las dos.

   Lo marcado con ⚠️ está pendiente de confirmar.
   ============================================================================= */

const DATOS = {

  /* --------- PORTADA DE LANZAMIENTO (index.html) --------- */

  // Día y hora en que abre la web completa.
  lanzamiento: "2026-09-20T10:00:00",

  // Promoción de apertura. Dejalo en "" para que no se muestre.
  oferta: "",

  // Aviso del club: una barra arriba de todo, con un botón que abre el detalle. Se puede cerrar
  // (vuelve a aparecer en la próxima visita, no se guarda nada). Con aviso:null no se muestra.
  // "hasta" es el último día que se muestra; después de esa fecha desaparece solo.
  aviso: {
    hasta: "2026-11-30",
    etiqueta: "Rifa 2026",
    texto: "Ya está en marcha la rifa del club. Pedile el talonario a tu entrenador.",
    boton: "De qué se trata",
    titulo: "Una rifa por nuestro club",
    bajada: "Ser parte de un club es mucho más que venir a entrenar y jugar un partido. Es compartir momentos, aprender, hacer amigos, ponerse la camiseta y sentir que somos parte de algo más grande. Para que eso sea posible hay un montón de cosas detrás, y esta vez nos toca a nosotros poner el granito de arena.",
    puntos: [
      { t: "Para qué es", l: [
        "Materiales para la temporada 2027.",
        "Premios de la fiesta de fin de año.",
        "Colaborar con la actividad de todos los días."
      ]},
      { t: "Premios", l: [
        "1º premio: $700.000",
        "2º premio: $500.000",
        "3º premio: $230.000",
        "4º premio: $70.000"
      ]},
      { t: "Los troqueles", l: [
        "El sorteo se hace a la vieja usanza, con los troqueles.",
        "Guardá el troquel de cada rifa que vendas: sin troquel, esa rifa no entra en el sorteo."
      ]}
    ],
    cierre: "Cada rifa que vendemos no es un número más: es una ayuda que, entre todos, se convierte en más oportunidades para seguir haciendo lo que nos gusta. Es por el club, por la actividad y por todos nosotros.",
    wsp: "Hola! Quiero consultar por la rifa 2026 del club."
  },

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

  // Fixture sincronizado con FeMeBal (femebal.com/tournament-tracker) el 26/09/2026.
  // nombre: como lo llama el club · division: como lo llama FeMeBal (se muestra en la tabla).
  // jugadoras: el plantel que se vota como figura de la fecha (de LISTAS PRESENTISMO 2026).
  // Minis e Infantiles son formativas: van con jugadoras:[] y no entran en nada que sea por nombre.
  // nombresCortos: true muestra "Nombre A." en vez del nombre completo (Menores y Cadetas, que
  // igual no aparecen por nombre en ningún lado). De Juveniles para arriba, nombre y apellido.
  planteles: [
    { id:"mayores-a", nombre:"Primera damas", division:"Mayores · 1º División", dia:"Sábados", hora:"18:00", sponsor:"Franco Liontix", jugadoras:[
      "Luz Agüero", "Noelia Alcala", "Millaray Cocha", "Daniela Cristaldo", "Katia Cuomo", "Guadalupe Fernandez",
      "Julieta Gimenez", "Mora Lionti", "Carla Martinez", "Thayssa Montaly", "Barbara Ramirez",
      "Micaela Ramirez", "Valeria Trelles", "Justine Vargas", "Emilia Zarantonello"
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Daniela Cristaldo":1, "Noelia Alcala":4, "Katia Cuomo":6, "Mora Lionti":7, "Emilia Zarantonello":9, "Micaela Ramirez":10, "Barbara Ramirez":14, "Carla Martinez":16, "Millaray Cocha":17, "Luz Agüero":19, "Valeria Trelles":20, "Guadalupe Fernandez":22, "Justine Vargas":23, "Julieta Gimenez":27, "Thayssa Montaly":28},
      goles:{"Noelia Alcala":17, "Katia Cuomo":14, "Mora Lionti":9, "Emilia Zarantonello":34, "Micaela Ramirez":32, "Barbara Ramirez":30, "Carla Martinez":2, "Millaray Cocha":13, "Luz Agüero":6, "Valeria Trelles":23, "Guadalupe Fernandez":7, "Justine Vargas":23, "Julieta Gimenez":1, "Thayssa Montaly":13},
      golesFecha:{
        "2026-08-08":{"Barbara Ramirez":4, "Emilia Zarantonello":2, "Micaela Ramirez":2, "Valeria Trelles":2, "Guadalupe Fernandez":2, "Thayssa Montaly":2, "Katia Cuomo":1, "Millaray Cocha":1, "Luz Agüero":1, "Justine Vargas":1},
        "2026-08-15":{"Micaela Ramirez":8, "Emilia Zarantonello":5, "Katia Cuomo":4, "Barbara Ramirez":4, "Valeria Trelles":3, "Justine Vargas":3, "Millaray Cocha":1, "Luz Agüero":1, "Thayssa Montaly":1},
        "2026-08-22":{"Justine Vargas":4, "Millaray Cocha":3, "Noelia Alcala":2, "Katia Cuomo":2, "Emilia Zarantonello":2, "Micaela Ramirez":2, "Thayssa Montaly":2, "Barbara Ramirez":1, "Carla Martinez":1, "Valeria Trelles":1, "Guadalupe Fernandez":1},
        "2026-08-29":{"Barbara Ramirez":10, "Valeria Trelles":7, "Noelia Alcala":4, "Emilia Zarantonello":4, "Micaela Ramirez":4, "Luz Agüero":2, "Justine Vargas":2, "Thayssa Montaly":2, "Katia Cuomo":1},
        "2026-09-05":{"Micaela Ramirez":7, "Millaray Cocha":6, "Noelia Alcala":3, "Mora Lionti":3, "Barbara Ramirez":3, "Valeria Trelles":3, "Emilia Zarantonello":2, "Luz Agüero":2, "Guadalupe Fernandez":2, "Katia Cuomo":1, "Justine Vargas":1, "Thayssa Montaly":1},
        "2026-09-12":{"Emilia Zarantonello":8, "Mora Lionti":4, "Justine Vargas":4, "Noelia Alcala":3, "Millaray Cocha":2, "Valeria Trelles":2, "Thayssa Montaly":2, "Katia Cuomo":1, "Micaela Ramirez":1, "Guadalupe Fernandez":1},
        "2026-09-19":{"Emilia Zarantonello":9, "Justine Vargas":6, "Barbara Ramirez":5, "Noelia Alcala":3, "Katia Cuomo":3, "Mora Lionti":2, "Micaela Ramirez":1, "Carla Martinez":1, "Valeria Trelles":1, "Guadalupe Fernandez":1, "Thayssa Montaly":1},
        "2026-09-25":{"Micaela Ramirez":7, "Valeria Trelles":4, "Barbara Ramirez":3, "Noelia Alcala":2, "Emilia Zarantonello":2, "Justine Vargas":2, "Thayssa Montaly":2, "Katia Cuomo":1, "Julieta Gimenez":1}
      }, partidos:[
      {f:"2026-08-08",c:"V",r:"Talleres",h:"19:45",g:"18-30"},{f:"2026-08-15",c:"L",r:"San Fernando",g:"30-25"},
      {f:"2026-08-22",c:"V",r:"Dorrego",h:"16:15",g:"21-21"},{f:"2026-08-29",c:"L",r:"Dep. Laferrere",h:"19:45",g:"36-26"},
      {f:"2026-09-05",c:"V",r:"AFALP",g:"34-21"},{f:"2026-09-12",c:"L",r:"Ferro Carril Oeste",h:"19:45",g:"28-24"},
      {f:"2026-09-19",c:"V",r:"Polvorines",g:"33-26"},{f:"2026-09-25",c:"L",r:"Sagrado Corazón",h:"20:00",g:"24-28",sede:"la Casa del Handball"},
      {f:"2026-10-03",c:"V",r:"All Boys"},{f:"2026-10-17",c:"L",r:"Vicente López"},{f:"2026-10-24",c:"V",r:"Temperley"},
      {f:"2026-10-31",c:"V",r:"Villa Ballester"},{f:"2026-11-07",c:"L",r:"Argentinos Juniors"},{f:"2026-11-14",c:"V",r:"Secla"},
      {f:"2026-11-21",c:"L",r:"Muñiz"}
    ], tabla:[
      [1,"Polvorines",22,8,7,0,1,239,219],
      [2,"Ateneo Don Bosco",19,8,5,1,2,224,201],
      [3,"Vicente López",18,8,5,0,3,216,199],
      [4,"Secla",17,7,4,2,1,172,159],
      [5,"Talleres",17,7,5,0,2,194,152],
      [6,"Sagrado Corazón",16,8,4,0,4,240,225],
      [7,"Argentinos Juniors",16,8,4,0,4,204,216],
      [8,"Dorrego",15,7,3,2,2,178,147],
      [9,"Ferro Carril Oeste",15,7,4,0,3,198,180],
      [10,"All Boys",15,7,4,0,3,192,197],
      [11,"Villa Ballester",15,7,4,0,3,152,157],
      [12,"Muñiz",14,8,3,0,5,188,199],
      [13,"Temperley",12,8,2,0,6,184,234],
      [14,"Dep. Laferrere",11,8,1,1,6,226,276],
      [15,"AFALP",9,7,1,0,6,182,202],
      [16,"San Fernando",9,7,1,0,6,151,177]
    ]},
    { id:"mayores-b", nombre:"Tercera damas", division:"Mayores · 3º División", dia:"Sábados", hora:"18:00", sponsor:"Supermercado Magdalena", jugadoras:[
      "Ariana Acosta", "Jazmin Alarcon", "Paula Ayala", "Mia Badaracco", "Marina Chazarreta", "Ariana Cuervo Diaz",
      "Sofía Deker", "Julieta Di Bona", "Cecilia Esquivel", "Paula Glisciak", "Camila Gomez", "Camila Hermosid",
      "Patricia Marsicovetere", "Sofia Marsicovetere", "Julieta Mercado", "Zoe Rodriguez", "Ariana Veiga",
      "Brenda Velozo",
      "Ariana Raminger", "Catalina Ravazzano", "Renata Giachello", "Milagros Mosqueda"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Marina Chazarreta":1, "Ariana Veiga":1, "Jazmin Alarcon":4, "Sofia Marsicovetere":7, "Renata Giachello":9, "Zoe Rodriguez":11, "Cecilia Esquivel":14, "Ariana Raminger":15, "Milagros Mosqueda":15, "Camila Gomez":16, "Ariana Cuervo Diaz":17, "Julieta Di Bona":18, "Brenda Velozo":19, "Paula Ayala":20, "Julieta Mercado":21, "Paula Glisciak":22, "Mia Badaracco":25, "Ariana Acosta":26, "Catalina Ravazzano":30, "Camila Hermosid":33},
      goles:{"Jazmin Alarcon":6, "Sofia Marsicovetere":4, "Renata Giachello":2, "Zoe Rodriguez":16, "Cecilia Esquivel":7, "Ariana Raminger":8, "Milagros Mosqueda":3, "Camila Gomez":1, "Ariana Cuervo Diaz":5, "Julieta Di Bona":11, "Brenda Velozo":4, "Paula Ayala":2, "Julieta Mercado":26, "Paula Glisciak":26, "Mia Badaracco":15, "Ariana Acosta":30, "Catalina Ravazzano":2, "Camila Hermosid":8},
      golesFecha:{
        "2026-08-08":{"Ariana Acosta":6, "Ariana Raminger":5, "Zoe Rodriguez":4, "Mia Badaracco":3, "Julieta Di Bona":2, "Paula Glisciak":2, "Julieta Mercado":1, "Camila Hermosid":1},
        "2026-08-17":{"Mia Badaracco":4, "Paula Glisciak":3, "Ariana Acosta":3, "Julieta Mercado":2, "Sofia Marsicovetere":2, "Zoe Rodriguez":1, "Ariana Raminger":1, "Julieta Di Bona":1, "Brenda Velozo":1, "Catalina Ravazzano":1},
        "2026-08-22":{"Zoe Rodriguez":4, "Sofia Marsicovetere":2, "Ariana Raminger":2, "Julieta Di Bona":2, "Paula Glisciak":2, "Mia Badaracco":2, "Ariana Cuervo Diaz":1, "Julieta Mercado":1, "Ariana Acosta":1, "Catalina Ravazzano":1},
        "2026-08-29":{"Julieta Mercado":9, "Mia Badaracco":4, "Paula Glisciak":3, "Jazmin Alarcon":2, "Camila Hermosid":2, "Cecilia Esquivel":1, "Ariana Cuervo Diaz":1, "Julieta Di Bona":1, "Brenda Velozo":1, "Ariana Acosta":1},
        "2026-09-05":{"Ariana Acosta":5, "Zoe Rodriguez":3, "Paula Glisciak":2, "Mia Badaracco":2, "Jazmin Alarcon":1, "Julieta Di Bona":1, "Julieta Mercado":1},
        "2026-09-12":{"Julieta Mercado":5, "Ariana Acosta":5, "Paula Glisciak":4, "Julieta Di Bona":3, "Cecilia Esquivel":2, "Milagros Mosqueda":2, "Camila Hermosid":2, "Jazmin Alarcon":1},
        "2026-09-19":{"Ariana Acosta":6, "Paula Glisciak":5, "Zoe Rodriguez":4, "Cecilia Esquivel":3, "Ariana Cuervo Diaz":3, "Julieta Mercado":3, "Camila Hermosid":3, "Jazmin Alarcon":2, "Renata Giachello":2, "Paula Ayala":2, "Milagros Mosqueda":1, "Julieta Di Bona":1, "Brenda Velozo":1},
        "2026-09-24":{"Paula Glisciak":5, "Julieta Mercado":4, "Ariana Acosta":3, "Cecilia Esquivel":1, "Camila Gomez":1, "Brenda Velozo":1}
      }, partidos:[
      {f:"2026-08-08",c:"V",r:"Campana Boat Club",g:"24-25"},{f:"2026-08-17",c:"L",r:"Almirante Brown",g:"19-25"},
      {f:"2026-08-22",c:"V",r:"Boca Juniors",h:"19:45",g:"18-21"},{f:"2026-08-29",c:"L",r:"AFALP",g:"25-32"},
      {f:"2026-09-05",c:"V",r:"Argentinos Juniors",h:"19:45",g:"15-14"},{f:"2026-09-12",c:"L",r:"Huracán de San Justo",g:"24-22"},
      {f:"2026-09-19",c:"V",r:"Independiente",g:"36-20"},{f:"2026-09-26",c:"L",r:"Querandí"},{f:"2026-10-03",c:"V",r:"Defensores de Moreno"},
      {f:"2026-10-17",c:"L",r:"Mariano Acosta"},{f:"2026-09-24",c:"L",r:"San Telmo",h:"21:15",g:"15-21"},{f:"2026-10-31",c:"V",r:"Nueva Chicago"},
      {f:"2026-11-07",c:"L",r:"Secla"},{f:"2026-11-14",c:"V",r:"Colegio del Parque"},{f:"2026-11-21",c:"L",r:"Cedem Caseros"}
    ], tabla:[
      [1,"Campana Boat Club",23,8,7,1,0,198,177],
      [2,"San Telmo",20,8,6,0,2,211,189],
      [3,"Mariano Acosta",19,7,6,0,1,185,145],
      [4,"Nueva Chicago",18,7,5,1,1,188,160],
      [5,"Colegio del Parque",17,7,5,0,2,206,174],
      [6,"Almirante Brown",17,7,5,0,2,218,193],
      [7,"Querandí",17,7,5,0,2,203,182],
      [8,"Secla",15,7,4,0,3,154,145],
      [9,"Ateneo Don Bosco",14,8,3,0,5,176,180],
      [10,"AFALP",13,8,3,0,4,175,203],
      [11,"Boca Juniors",11,7,2,0,5,150,165],
      [12,"Argentinos Juniors",11,7,2,0,5,128,149],
      [13,"Cedem Caseros",9,7,1,0,6,165,187],
      [14,"Defensores de Moreno",9,7,1,0,6,153,184],
      [15,"Huracán de San Justo",9,7,1,0,6,132,166],
      [16,"Independiente",9,7,1,0,6,154,197]
    ]},
    // competencia:false (de Cadetas para abajo, decisión del coordinador): sin votación de la
    // figura, sin prode y sin goleadoras. Los dorsales quedan igual, son datos del plantel.
    // Inferiores damas es una tira: Minis, Infantiles, Menores, Cadetas, Juveniles y Juniors
    // juegan el mismo día en el mismo lugar, todas de local o todas de visitante, cada una
    // a su hora. Fixture, horarios y resultados vienen de FeMeBal (división C); Minis no
    // compite en FeMeBal y copia las fechas. Sin "sponsor", el marcador no muestra presentador.
    // Campos de cada partido: f fecha · c L/V/libre · r rival · h hora (si difiere de la del
    // plantel) · g resultado "nuestros-de ellos" cuando ya se jugó · sede: dónde se juega si no es
    // Don Bosco 116 siendo locales (la Casa del Handball de FeMeBal: cada categoría juega una fecha ahí).
    // tabla: posiciones del torneo, una fila por equipo:
    // [puesto, equipo, puntos, jugados, ganados, empatados, perdidos, goles a favor, en contra].
    { id:"minis", competencia:false, nombre:"Minis", dia:"Domingos", hora:"10:30",   // ⚠️ confirmar horario de Minis (no está en FeMeBal)
      nombresCortos:true, jugadoras:[], partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto"},{f:"2026-08-16",c:"L",r:"Independiente"},{f:"2026-08-23",c:"V",r:"Colegio Ward"},
      {f:"2026-08-30",c:"L",r:"Boca Juniors"},{f:"2026-09-06",c:"V",r:"Banfield"},{f:"2026-09-13",c:"L",r:"Villa Modelo"},
      {f:"2026-09-20",c:"V",r:"Vélez Sarsfield"},{f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},
      {f:"2026-10-11",c:"L",r:"La Patriada"},{f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},
      {f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},{f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ]},
    { id:"infantiles", competencia:false, nombre:"Infantiles", division:"Infantiles · División C", dia:"Domingos", hora:"10:30",
      nombresCortos:true, jugadoras:[], partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"35-15"},{f:"2026-08-16",c:"L",r:"Independiente",g:"27-7"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"15-21"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"21-12"},{f:"2026-09-06",c:"V",r:"Banfield",g:"27-20"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"32-13"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"23-8"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},
      {f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Sagrado Corazón",21,7,7,0,0,187,77],
      [2,"C.I.D. Moreno",21,7,7,0,0,155,110],
      [3,"Ateneo Don Bosco",19,7,6,0,1,180,96],
      [4,"La Patriada",19,7,6,0,1,192,120],
      [5,"Polvorines",19,7,6,0,1,121,95],
      [6,"Colegio Ward",18,7,5,1,1,154,111],
      [7,"Muñiz",17,7,5,0,2,190,148],
      [8,"Hurlingham",15,7,4,0,3,148,132],
      [9,"Estrella de Boedo",13,7,2,2,3,157,158],
      [10,"Banfield",11,7,2,0,5,140,180],
      [11,"Boca Juniors",10,7,1,1,5,118,146],
      [12,"Independiente",9,7,1,0,6,101,144],
      [13,"Vélez Sarsfield",9,7,1,0,6,101,157],
      [14,"Villa Modelo",9,7,1,0,6,117,189],
      [15,"Cedem Caseros",7,7,0,0,7,96,173],
      [16,"Círculo de Villa Devoto",7,7,0,0,7,121,242]
    ] },
    { id:"menores", competencia:false, nombre:"Menores", division:"Menores · División C", dia:"Domingos", hora:"11:30",
      nombresCortos:true, jugadoras:[
      "Martina Antero", "Sofia Ballares", "Matilda Barrera", "Victoria Bassi", "Celeste Bello",
      "Pilar Bustamante", "Mia Calo", "Macarena De León", "Guillemina Fortunato", "Emilia Greco",
      "Celina Kronemberg", "Victoria Kyanco", "Valentina Manchi", "Luana Martinez", "Helena Paz",
      "Martina Rosales", "Lupe Sosa", "Nina Stambullian", "Isabella Stoll", "Agustina Villa", "Julieta Villa",
      "Serena Zabatta",
      "Amanda D'Urzo"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Isabella Stoll":1, "Martina Rosales":2, "Celina Kronemberg":3, "Sofia Ballares":4, "Serena Zabatta":5, "Nina Stambullian":6, "Matilda Barrera":6, "Celeste Bello":7, "Valentina Manchi":8, "Victoria Kyanco":9, "Guillemina Fortunato":11, "Mia Calo":14, "Luana Martinez":15, "Amanda D'Urzo":16, "Helena Paz":17, "Emilia Greco":19, "Martina Antero":20},
      goles:{"Martina Rosales":1, "Celina Kronemberg":12, "Serena Zabatta":28, "Nina Stambullian":1, "Valentina Manchi":7, "Victoria Kyanco":16, "Guillemina Fortunato":26, "Mia Calo":22, "Luana Martinez":4, "Helena Paz":6, "Emilia Greco":57, "Martina Antero":15},
      golesFecha:{
        "2026-08-09":{"Emilia Greco":7, "Guillemina Fortunato":4, "Serena Zabatta":3, "Victoria Kyanco":3, "Martina Antero":3, "Helena Paz":2, "Celina Kronemberg":1, "Valentina Manchi":1, "Luana Martinez":1},
        "2026-08-16":{"Emilia Greco":5, "Serena Zabatta":4, "Mia Calo":4, "Victoria Kyanco":3, "Martina Antero":3, "Guillemina Fortunato":2, "Luana Martinez":1, "Helena Paz":1},
        "2026-08-23":{"Emilia Greco":6, "Guillemina Fortunato":4, "Serena Zabatta":3, "Mia Calo":3, "Victoria Kyanco":2, "Martina Antero":2, "Nina Stambullian":1, "Valentina Manchi":1},
        "2026-08-30":{"Emilia Greco":10, "Serena Zabatta":5, "Guillemina Fortunato":4, "Mia Calo":4, "Victoria Kyanco":2, "Celina Kronemberg":1},
        "2026-09-06":{"Emilia Greco":8, "Celina Kronemberg":6, "Guillemina Fortunato":4, "Serena Zabatta":3, "Victoria Kyanco":3, "Martina Antero":3, "Mia Calo":2, "Valentina Manchi":1, "Luana Martinez":1},
        "2026-09-13":{"Emilia Greco":12, "Mia Calo":8, "Serena Zabatta":6, "Celina Kronemberg":4, "Guillemina Fortunato":3, "Martina Antero":3, "Valentina Manchi":2, "Victoria Kyanco":2, "Helena Paz":2, "Luana Martinez":1},
        "2026-09-20":{"Emilia Greco":9, "Guillemina Fortunato":5, "Serena Zabatta":4, "Valentina Manchi":2, "Martina Rosales":1, "Victoria Kyanco":1, "Mia Calo":1, "Helena Paz":1, "Martina Antero":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"25-19"},{f:"2026-08-16",c:"L",r:"Independiente",g:"23-29"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"22-37"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"26-23"},{f:"2026-09-06",c:"V",r:"Banfield",g:"31-19"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"43-23"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"25-24"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},
      {f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"La Patriada",21,7,7,0,0,248,142],
      [2,"Independiente",21,7,7,0,0,211,127],
      [3,"Colegio Ward",19,7,6,0,1,219,123],
      [4,"Sagrado Corazón",17,7,5,0,2,192,127],
      [5,"Ateneo Don Bosco",17,7,5,0,2,195,174],
      [6,"C.I.D. Moreno",16,7,4,1,2,164,154],
      [7,"Vélez Sarsfield",15,7,4,0,3,164,152],
      [8,"Cedem Caseros",14,7,3,1,3,136,138],
      [9,"Boca Juniors",13,7,2,2,3,146,148],
      [10,"Hurlingham",13,7,2,2,3,169,178],
      [11,"Polvorines",12,7,2,1,4,107,123],
      [12,"Estrella de Boedo",12,7,2,1,4,166,199],
      [13,"Muñiz",9,7,1,0,6,136,188],
      [14,"Banfield",9,7,1,0,6,145,211],
      [15,"Villa Modelo",9,7,1,0,6,136,229],
      [16,"Círculo de Villa Devoto",7,7,0,0,7,101,222]
    ] },
    { id:"cadetas", competencia:false, nombre:"Cadetas", division:"Cadetes · División C", dia:"Domingos", hora:"13:00",
      nombresCortos:true, jugadoras:[
      "Luciana Chiesa", "Abril Coria", "Isabella Greco", "Emilia Juarez Leikam", "Ema Rosello", "Maria Eugenia Rotta",
      "Victoria Kyanko", "Emilia Greco", "Guillermina Fortunato", "Serena Zabatta", "Mia Calo"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Guillermina Fortunato":11, "Luciana Chiesa":15, "Abril Coria":16, "Serena Zabatta":20, "Mia Calo":20, "Emilia Greco":21, "Emilia Juarez Leikam":24, "Ema Rosello":25, "Victoria Kyanko":26, "Isabella Greco":27, "Maria Eugenia Rotta":32},
      goles:{"Guillermina Fortunato":6, "Luciana Chiesa":12, "Serena Zabatta":3, "Mia Calo":3, "Emilia Greco":34, "Emilia Juarez Leikam":8, "Ema Rosello":10, "Victoria Kyanko":11, "Isabella Greco":42, "Maria Eugenia Rotta":5},
      golesFecha:{
        "2026-08-09":{"Isabella Greco":8, "Emilia Greco":6, "Luciana Chiesa":4, "Guillermina Fortunato":2, "Victoria Kyanko":1},
        "2026-08-16":{"Luciana Chiesa":4, "Isabella Greco":4, "Serena Zabatta":2, "Mia Calo":2, "Maria Eugenia Rotta":2, "Emilia Juarez Leikam":1, "Ema Rosello":1, "Victoria Kyanko":1},
        "2026-08-23":{"Emilia Greco":5, "Isabella Greco":4, "Ema Rosello":3, "Luciana Chiesa":1, "Serena Zabatta":1, "Emilia Juarez Leikam":1, "Victoria Kyanko":1, "Maria Eugenia Rotta":1},
        "2026-08-30":{"Isabella Greco":8, "Emilia Greco":6, "Ema Rosello":3, "Luciana Chiesa":2, "Mia Calo":1},
        "2026-09-06":{"Isabella Greco":7, "Emilia Juarez Leikam":4, "Emilia Greco":3, "Luciana Chiesa":1, "Ema Rosello":1},
        "2026-09-13":{"Emilia Greco":9, "Isabella Greco":9, "Victoria Kyanko":4, "Guillermina Fortunato":2, "Ema Rosello":1, "Maria Eugenia Rotta":1},
        "2026-09-20":{"Emilia Greco":5, "Victoria Kyanko":4, "Guillermina Fortunato":2, "Emilia Juarez Leikam":2, "Isabella Greco":2, "Ema Rosello":1, "Maria Eugenia Rotta":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"21-19"},{f:"2026-08-16",c:"L",r:"Independiente",g:"17-30"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"17-25"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"20-24"},{f:"2026-09-06",c:"V",r:"Banfield",g:"16-19"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"26-31"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"17-25"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},
      {f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Vélez Sarsfield",20,7,6,1,0,141,119],
      [2,"Banfield",18,6,6,0,0,131,103],
      [3,"Cedem Caseros",16,7,4,1,2,174,150],
      [4,"Independiente",16,6,5,0,1,149,126],
      [5,"Sagrado Corazón",16,7,4,1,2,174,169],
      [6,"Villa Modelo",15,7,4,0,3,165,159],
      [7,"C.I.D. Moreno",15,7,4,0,3,146,142],
      [8,"Colegio Ward",14,6,3,2,1,135,130],
      [9,"Polvorines",13,7,2,2,3,151,155],
      [10,"Hurlingham",12,7,2,1,4,132,123],
      [11,"La Patriada",11,7,2,0,5,128,145],
      [12,"Muñiz",11,7,2,0,5,114,132],
      [13,"Estrella de Boedo",10,6,2,0,4,133,137],
      [14,"Ateneo Don Bosco",9,7,1,0,6,134,173],
      [15,"Boca Juniors",8,6,1,0,5,91,111],
      [16,"Círculo de Villa Devoto",8,6,1,0,5,135,159]
    ] },
    { id:"juveniles", nombre:"Juveniles", division:"Juveniles · División C", dia:"Domingos", hora:"14:30",
      jugadoras:[
      "Julieta Antero", "Valentina Antero", "Camila Dib", "Uma Estanga", "Angela Farias",
      "Renata Giachello", "Martina Gomez", "Isabella Scarfo", "Luciana Toledo",
      "Antonella D'Urzo", "Isabella Greco", "Luciana Chiesa Hornung", "Maria Rotta",
      "Ema Rosello"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Julieta Antero":1, "Antonella D'Urzo":5, "Ema Rosello":5, "Isabella Scarfo":7, "Martina Gomez":11, "Isabella Greco":14, "Angela Farias":16, "Renata Giachello":17, "Maria Rotta":20, "Luciana Toledo":21, "Luciana Chiesa Hornung":22, "Camila Dib":24, "Uma Estanga":25, "Valentina Antero":28},
      goles:{"Antonella D'Urzo":2, "Martina Gomez":26, "Isabella Greco":5, "Renata Giachello":46, "Maria Rotta":1, "Luciana Toledo":26, "Luciana Chiesa Hornung":2, "Camila Dib":4, "Uma Estanga":22, "Valentina Antero":19},
      golesFecha:{
        "2026-08-09":{"Renata Giachello":8, "Uma Estanga":5, "Valentina Antero":2, "Isabella Greco":1, "Luciana Toledo":1},
        "2026-08-16":{"Martina Gomez":5, "Uma Estanga":4, "Renata Giachello":3, "Luciana Toledo":3, "Isabella Greco":3, "Luciana Chiesa Hornung":2},
        "2026-08-23":{"Renata Giachello":8, "Martina Gomez":7, "Luciana Toledo":4, "Valentina Antero":3, "Uma Estanga":2},
        "2026-08-30":{"Luciana Toledo":7, "Renata Giachello":5, "Valentina Antero":5, "Martina Gomez":3, "Camila Dib":1},
        "2026-09-06":{"Martina Gomez":5, "Uma Estanga":4, "Renata Giachello":3, "Luciana Toledo":3, "Valentina Antero":3, "Camila Dib":1},
        "2026-09-13":{"Renata Giachello":8, "Luciana Toledo":5, "Martina Gomez":4, "Antonella D'Urzo":2, "Isabella Greco":1, "Maria Rotta":1},
        "2026-09-20":{"Renata Giachello":11, "Uma Estanga":7, "Valentina Antero":6, "Luciana Toledo":3, "Martina Gomez":2, "Camila Dib":2}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"17-34"},{f:"2026-08-16",c:"L",r:"Independiente",g:"20-29"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"24-28"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"21-17"},{f:"2026-09-06",c:"V",r:"Banfield",g:"19-28"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"21-25"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"31-40"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},
      {f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Polvorines",21,7,7,0,0,233,178],
      [2,"Círculo de Villa Devoto",18,6,6,0,0,204,118],
      [3,"Cedem Caseros",17,7,5,0,2,200,179],
      [4,"Sagrado Corazón",16,6,5,0,1,206,164],
      [5,"Hurlingham",15,7,4,0,3,172,141],
      [6,"Banfield",14,6,4,0,2,146,137],
      [7,"Villa Modelo",14,6,4,0,2,142,143],
      [8,"Vélez Sarsfield",13,7,3,0,4,183,192],
      [9,"Colegio Ward",12,6,3,0,3,174,171],
      [10,"Boca Juniors",12,6,3,0,3,147,150],
      [11,"Independiente",12,6,3,0,3,157,170],
      [12,"La Patriada",10,6,2,0,4,138,137],
      [13,"Ateneo Don Bosco",9,7,1,0,6,153,201],
      [14,"C.I.D. Moreno",8,6,1,0,5,123,164],
      [15,"Muñiz",7,7,0,0,7,114,187],
      [16,"Estrella de Boedo",6,6,0,0,6,156,216]
    ] },
    { id:"juniors", nombre:"Juniors", division:"Junior · División C", dia:"Domingos", hora:"16:00",
      jugadoras:[
      "Jazmin Alarcon", "Mia Badaracco", "Katia Cuomo", "Julia Damario", "Camila Gomez", "Patricia Marsicovetere",
      "Thayssa Montaly", "Milagros Mosqueda", "Catalina Ravazzano", "Emilia Zarantonello",
      "Julieta Antero", "Sofia Marsicovetere Palmieri", "Valentina Antero", "Luciana Toledo Rodriguez", "Martina Gomez", "Renata Giachello"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Julieta Antero":1, "Sofia Marsicovetere Palmieri":3, "Jazmin Alarcon":4, "Valentina Antero":5, "Katia Cuomo":6, "Mia Badaracco":8, "Emilia Zarantonello":9, "Thayssa Montaly":10, "Martina Gomez":11, "Camila Gomez":16, "Renata Giachello":17, "Luciana Toledo Rodriguez":21, "Milagros Mosqueda":22, "Julia Damario":25, "Catalina Ravazzano":33},
      goles:{"Sofia Marsicovetere Palmieri":11, "Jazmin Alarcon":21, "Valentina Antero":10, "Katia Cuomo":40, "Mia Badaracco":17, "Emilia Zarantonello":48, "Thayssa Montaly":16, "Martina Gomez":3, "Renata Giachello":5, "Luciana Toledo Rodriguez":3, "Milagros Mosqueda":5, "Julia Damario":9, "Catalina Ravazzano":17},
      golesFecha:{
        "2026-08-09":{"Emilia Zarantonello":5, "Katia Cuomo":4, "Mia Badaracco":4, "Thayssa Montaly":3, "Catalina Ravazzano":3, "Sofia Marsicovetere Palmieri":2, "Valentina Antero":2},
        "2026-08-16":{"Katia Cuomo":13, "Jazmin Alarcon":5, "Julia Damario":4, "Catalina Ravazzano":4, "Mia Badaracco":3, "Sofia Marsicovetere Palmieri":2, "Emilia Zarantonello":2, "Milagros Mosqueda":2, "Thayssa Montaly":1},
        "2026-08-23":{"Emilia Zarantonello":9, "Katia Cuomo":7, "Catalina Ravazzano":4, "Sofia Marsicovetere Palmieri":3, "Jazmin Alarcon":3, "Thayssa Montaly":3, "Renata Giachello":2, "Valentina Antero":1, "Mia Badaracco":1, "Martina Gomez":1, "Julia Damario":1},
        "2026-08-30":{"Emilia Zarantonello":14, "Thayssa Montaly":4, "Sofia Marsicovetere Palmieri":3, "Katia Cuomo":2, "Julia Damario":2, "Catalina Ravazzano":2, "Jazmin Alarcon":1, "Mia Badaracco":1, "Renata Giachello":1},
        "2026-09-06":{"Emilia Zarantonello":7, "Katia Cuomo":6, "Jazmin Alarcon":5, "Mia Badaracco":4, "Martina Gomez":2, "Sofia Marsicovetere Palmieri":1, "Valentina Antero":1, "Thayssa Montaly":1, "Milagros Mosqueda":1, "Julia Damario":1},
        "2026-09-13":{"Jazmin Alarcon":7, "Valentina Antero":4, "Emilia Zarantonello":4, "Catalina Ravazzano":4, "Mia Badaracco":2, "Renata Giachello":2, "Katia Cuomo":1, "Thayssa Montaly":1, "Milagros Mosqueda":1},
        "2026-09-20":{"Katia Cuomo":7, "Emilia Zarantonello":7, "Thayssa Montaly":3, "Luciana Toledo Rodriguez":3, "Valentina Antero":2, "Mia Badaracco":2, "Milagros Mosqueda":1, "Julia Damario":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"23-34"},{f:"2026-08-16",c:"L",r:"Independiente",g:"36-31"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"35-32"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"30-31"},{f:"2026-09-06",c:"V",r:"Banfield",g:"29-16"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"26-36"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"26-26"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},
      {f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Villa Modelo",18,6,6,0,0,203,148],
      [2,"Vélez Sarsfield",18,7,5,1,1,186,141],
      [3,"Círculo de Villa Devoto",18,6,6,0,0,177,134],
      [4,"Cedem Caseros",17,7,5,0,2,184,153],
      [5,"C.I.D. Moreno",15,7,4,0,3,196,156],
      [6,"Muñiz",15,7,4,0,3,158,171],
      [7,"Boca Juniors",14,6,4,0,2,183,144],
      [8,"Estrella de Boedo",14,6,4,0,2,198,160],
      [9,"Sagrado Corazón",14,6,4,0,2,177,158],
      [10,"Ateneo Don Bosco",14,7,3,1,3,205,206],
      [11,"Polvorines",12,7,2,1,4,156,184],
      [12,"La Patriada",11,7,2,0,5,160,221],
      [13,"Banfield",8,6,1,0,5,112,169],
      [14,"Colegio Ward",7,6,0,1,5,151,176],
      [15,"Hurlingham",7,7,0,0,7,147,188],
      [16,"Independiente",6,6,0,0,6,126,210]
    ] },
    { id:"masculino", nombre:"Cuarta caballeros", division:"Mayores · 4º División", dia:"Domingos", hora:"18:00", sponsor:"Ladran Sancho", jugadoras:[
      "Lionel Benitez", "Patricio Britez", "Maximiliano Burakoski", "Valentin Carriego", "Martin Casco",
      "Guillermo Corbelli", "Agustin Fernandez", "Fabian Franco", "Gabriel Franco", "Enzo Golnner",
      "Maximiliano Gomez", "Lucas Guillermon", "Agustin Iacuzzi", "Leonel Legal", "Leandro Maggi",
      "Julian Ponce", "Leandro Salvetti", "Marcelo Sanchez", "Matias Solis", "Matias Vallejos",
      "Martin Vega", "Mariano Magnani",
      "Facundo Fernandez"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Agustin Fernandez":1, "Guillermo Corbelli":10, "Leonel Legal":11, "Marcelo Sanchez":12, "Enzo Golnner":14, "Maximiliano Gomez":16, "Gabriel Franco":17, "Julian Ponce":18, "Lionel Benitez":19, "Martin Casco":20, "Valentin Carriego":21, "Martin Vega":24, "Facundo Fernandez":41, "Fabian Franco":42, "Maximiliano Burakoski":43, "Lucas Guillermon":44},
      goles:{"Guillermo Corbelli":1, "Enzo Golnner":52, "Gabriel Franco":2, "Julian Ponce":5, "Martin Casco":16, "Valentin Carriego":2, "Martin Vega":3, "Facundo Fernandez":7, "Fabian Franco":24, "Maximiliano Burakoski":11, "Lucas Guillermon":3},
      golesFecha:{
        "2026-08-09":{"Enzo Golnner":4, "Fabian Franco":4, "Maximiliano Burakoski":3, "Martin Casco":1, "Valentin Carriego":1},
        "2026-08-16":{"Enzo Golnner":11, "Martin Casco":3, "Fabian Franco":2, "Maximiliano Burakoski":2},
        "2026-08-23":{"Fabian Franco":7, "Enzo Golnner":6, "Julian Ponce":2, "Martin Casco":2, "Maximiliano Burakoski":2, "Facundo Fernandez":1, "Lucas Guillermon":1},
        "2026-08-30":{"Enzo Golnner":7, "Martin Casco":3, "Fabian Franco":3, "Gabriel Franco":2, "Facundo Fernandez":2, "Julian Ponce":1, "Maximiliano Burakoski":1},
        "2026-09-06":{"Enzo Golnner":14, "Martin Casco":5, "Fabian Franco":4, "Facundo Fernandez":3, "Lucas Guillermon":1, "Maximiliano Burakoski":1},
        "2026-09-13":{"Enzo Golnner":10, "Fabian Franco":4, "Martin Vega":3, "Julian Ponce":2, "Martin Casco":2, "Maximiliano Burakoski":2, "Guillermo Corbelli":1, "Valentin Carriego":1, "Lucas Guillermon":1, "Facundo Fernandez":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Almirante Brown",g:"13-28"},{f:"2026-08-16",c:"L",r:"Dep. Laferrere",g:"18-19"},
      {f:"2026-08-23",c:"V",r:"Federal Juniors",g:"21-23"},{f:"2026-08-30",c:"L",r:"General Las Heras",g:"19-25"},
      {f:"2026-09-06",c:"V",r:"Dorrego",h:"20:15",g:"28-27"},{f:"2026-09-13",c:"L",r:"Ferrocarril Mitre",g:"27-37"},
      {f:"2026-09-20",c:"libre"},{f:"2026-09-27",c:"libre"},{f:"2026-10-04",c:"V",r:"Defensores de Glew"},{f:"2026-10-11",c:"L",r:"Talleres"},
      {f:"2026-10-25",c:"V",r:"Ducilo"},{f:"2026-11-01",c:"L",r:"San Telmo"},{f:"2026-11-08",c:"V",r:"El Portugués"},
      {f:"2026-11-15",c:"V",r:"Círculo General Belgrano"},{f:"2026-11-22",c:"L",r:"Escobar"}
    ], tabla:[
      [1,"Almirante Brown",20,7,6,1,0,243,160],
      [2,"Defensores de Glew",19,7,6,0,1,155,117],
      [3,"Ferrocarril Mitre",19,7,6,0,1,223,191],
      [4,"General Las Heras",17,7,5,0,2,221,198],
      [5,"Talleres",17,7,5,0,2,125,120],
      [6,"Escobar",16,7,4,1,2,175,174],
      [7,"El Portugués",16,7,4,1,2,161,161],
      [8,"Federal Juniors",15,7,4,0,3,190,183],
      [9,"Ducilo",15,7,4,0,3,135,139],
      [10,"San Telmo",13,7,3,0,4,117,137],
      [11,"Dep. Laferrere",11,7,2,0,5,161,187],
      [12,"Ateneo Don Bosco",11,7,2,0,5,128,159],
      [13,"Dorrego",10,7,1,1,5,156,180],
      [14,"Círculo General Belgrano",6,7,1,0,5,103,163]
    ]},
    // Maxihandball: fixture y tabla de la Liga Maxi Handball (timbo.futbol), con maxi-actualizar.js.
    { id:"maxi", nombre:"Maxihandball", division:"Liga Maxi Handball · Clausura", dia:"Sábados", hora:"11:00", jugadoras:[
      "Camila Lalin", "Nahir Alvarez", "Maru Pereiras", "Tiziana Sanfelice", "Magali Prisco",
      "Giselle Loffler", "Camila Seguin", "Ariadna Aristizabal", "Martina Quintana", "Marcela Rodríguez",
      "Agustina Michl", "Florencia Rossaro", "Paula Subiza", "Agustina Bajko", "Valentina Bajko",
      "Mora Otamendi", "Mariana Benítez", "Julieta Biazzo", "Julieta Milanesi", "Martina Panetta",
      "Jimena Berutti"
    ],
      // Goles del Clausura según la tabla de goleadoras de la liga (maxi-actualizar.js).
      goles:{"Magali Prisco":14, "Ariadna Aristizabal":5, "Julieta Milanesi":5, "Maru Pereiras":5, "Marcela Rodríguez":4, "Jimena Berutti":2, "Agustina Michl":2, "Florencia Rossaro":2, "Camila Seguin":2, "Agustina Bajko":1, "Giselle Loffler":1, "Martina Panetta":1, "Julieta Zarate":1},
      // Dorsales según la lista del club (septiembre 2026).
      dorsales:{"Camila Lalin":3, "Nahir Alvarez":4, "Maru Pereiras":5, "Tiziana Sanfelice":6, "Magali Prisco":7, "Giselle Loffler":8, "Camila Seguin":9, "Ariadna Aristizabal":11, "Martina Quintana":12, "Marcela Rodríguez":13, "Agustina Michl":14, "Florencia Rossaro":18, "Paula Subiza":19, "Agustina Bajko":20, "Valentina Bajko":21, "Mora Otamendi":22, "Mariana Benítez":24, "Julieta Biazzo":25, "Julieta Milanesi":27, "Martina Panetta":31, "Jimena Berutti":47}, partidos:[
      {f:"2026-08-29",c:"L",r:"Manuel Belgrano",h:"09:15",g:"12-20"},{f:"2026-09-05",c:"V",r:"Instituto Manuel Belgrano",sede:"Polideportivo N. Kirchner (Ezeiza)",g:"18-19"},
      {f:"2026-09-12",c:"V",r:"Team Ezeiza",h:"11:30",sede:"Polideportivo N. Kirchner (Ezeiza)",g:"15-14"},{f:"2026-09-26",c:"V",r:"Las 2P",h:"10:00",sede:"Polideportivo N. Kirchner (Ezeiza)"},
      {f:"2026-10-03",c:"V",r:"Panteras Handball",h:"14:30",sede:"Instituto Manuel Belgrano Quilmes"},{f:"2026-10-10",c:"L",r:"Golondrinas",sinHora:true,sede:"a confirmar"},
      {f:"2026-10-17",c:"V",r:"Club Social",sinHora:true,sede:"a confirmar"},{f:"2026-10-31",c:"V",r:"Villa Vatteone",sinHora:true,sede:"a confirmar"},
      {f:"2026-11-14",c:"V",r:"47 Handball Club",sinHora:true,sede:"a confirmar"},{f:"2026-11-14",c:"L",r:"La Patriada",sinHora:true,sede:"a confirmar"},
      {f:"2026-11-28",c:"L",r:"CAQ Handball",sinHora:true,sede:"a confirmar"}
    ], tabla:[
      [1,"Manuel Belgrano",8,3,2,1,0,66,35],
      [2,"Panteras Handball",8,3,2,1,0,59,42],
      [3,"Team Ezeiza",7,3,2,0,1,47,33],
      [4,"CAQ Handball",6,3,1,1,1,41,41],
      [5,"Las 2P",6,3,1,1,1,65,53],
      [6,"Instituto Manuel Belgrano",6,3,1,1,1,42,45],
      [7,"Villa Vatteone",5,2,1,1,0,36,22],
      [8,"Club Social",5,3,1,0,2,38,63],
      [9,"Ateneo Don Bosco",5,3,1,0,2,45,53],
      [10,"47 Handball Club",4,2,1,0,1,43,48],
      [11,"La Patriada",3,3,0,0,3,26,61],
      [12,"Golondrinas",1,1,0,0,1,11,23]
    ] }
  ],

  // La votación de la figura usa `jugadoras` de cada plantel y el último partido jugado.
  // El prode no tiene sponsor fijo: cada partido lo presenta una marca distinta del
  // muro, elegida de forma pareja y estable (todos ven la misma para ese partido).

  // ============ NOVEDADES ============
  // Lo que pasa en el club: entrenamientos temáticos, avisos, el resumen del mes. La más
  // nueva va primero (se ordenan por fecha sola). Cada noticia tiene su propio link para
  // compartir: adbhandball.com/#n/<slug>.
  //   slug     · lo que va en el link, en minúsculas y con guiones
  //   etiqueta · una palabra para ubicarla (Club, Formativas, Rifa, Newsletter...)
  //   firma    · quién cubrió la nota, si la firma alguien (sale abajo del copete)
  //   foto     · la que se ve en la tarjeta (1600 px de ancho, menos de 300 KB, como la galería)
  //   cuerpo   · los bloques de la nota, en orden. Cada uno es uno de estos:
  //     { t:"texto",     v:"un párrafo" }
  //     { t:"destacado", v:"una frase que va resaltada" }
  //     { t:"cita",      v:"lo que dijo", quien:"quién lo dijo" }
  //     { t:"foto",      v:"fotos/noticias/archivo.jpg", alt:"qué se ve", pie:"opcional" }
  //     { t:"video",     v:"https://www.youtube.com/watch?v=...", alt:"de qué es el video" }
  //     { t:"link",      v:"https://...", texto:"Ver en Instagram" }
  noticias: [
    {
      slug: "primera-sagrado-corazon-casa-del-handball",
      fecha: "2026-09-26",
      etiqueta: "Primera damas",
      titulo: "Derrota de la Primera en la Casa del Handball",
      copete: "24 a 28 con Sagrado Corazón de Varela, por la octava fecha del Clausura. El Bosco sigue segundo y con el ascenso a tiro.",
      firma: "Gabriel Franco",
      foto: "fotos/noticias/2026-09-sagrado-01.jpg",
      alt: "Dos jugadoras de espaldas saliendo a la cancha, una con la camiseta azul del Ateneo Don Bosco",
      cuerpo: [
        { t: "texto", v: "El viernes se enfrentaron el Ateneo Don Bosco y Sagrado Corazón de Varela por la octava fecha del torneo Clausura, y la victoria en esta ocasión fue para el equipo varelense: 28 a 24." },
        { t: "texto", v: "Un partido áspero, de muchos goles y parejo de principio a fin. El resultado no fue el esperado, pero sin dudas que seguimos más vivas que nunca en la búsqueda del ascenso." },
        { t: "destacado", v: "Seguimos más vivas que nunca en la búsqueda del ascenso." },
        { t: "texto", v: "Charlamos con Vale Trelles, una de nuestras jugadoras, y declaró:" },
        { t: "cita", quien: "Vale Trelles", v: "Fue un partido duro físicamente. Se notaron los nervios y eso hizo que tuviéramos imprecisiones durante todo el partido. Como siempre tenemos altibajos durante los 60 minutos, pero ellas supieron resolver mejor y el resultado se dio en los detalles. Esto no queda acá, tenemos muchos partidos por delante y si nosotras sabemos de algo, es de levantar cabeza y hacernos más fuertes. El objetivo sigue en pie y depende de nosotras únicamente, así que batallaremos hasta el último partido." },
        { t: "texto", v: "Mención especial para la hinchada del Bosco, que alentó los 60 minutos. Gracias a cada familia y a cada amigo que vino a bancar a las pibas." },
        { t: "texto", v: "Los goles fueron de Micaela Ramírez (7), la propia Trelles (4), Bárbara Ramírez (3), Noelia Alcalá, Emilia Zarantonello, Justine Vargas y Thayssa Montaly (2 cada una), Katia Cuomo y Julieta Giménez. Con la derrota, el Bosco queda segundo en el Clausura con 19 puntos, a tres de Polvorines." }
      ]
    },
    {
      slug: "rifa-2026",
      fecha: "2026-09-23",
      etiqueta: "Rifa 2026",
      titulo: "Arrancó la rifa del club: $700.000 al primer premio",
      copete: "Cuatro premios en plata, sorteo en diciembre y un talonario a nombre de cada jugadora y jugador. Pedile el tuyo a tu entrenador.",
      foto: "fotos/noticias/2026-09-rifa-01.jpg",
      alt: "El plantel de Juveniles posando frente al arco antes de un partido",
      cuerpo: [
        { t: "texto", v: "Ya está en la calle la rifa con la que el club cierra el año. Hay un talonario a nombre de cada jugadora y cada jugador, de Minis a Maxi: se retira en el club, en el horario de entrenamiento, y se lo pedís a tu entrenador o entrenadora. Que no quede ninguno sin el suyo." },
        { t: "destacado", v: "$700.000 · $500.000 · $230.000 · $70.000" },
        { t: "texto", v: "Cuatro premios en efectivo, de mayor a menor, y el sorteo en diciembre." },
        { t: "texto", v: "Se sortea a la vieja usanza, con los troqueles. Guardá el troquel de cada rifa que vendas: sin troquel, esa rifa no entra en el sorteo." },
        { t: "texto", v: "Vender es más fácil de lo que parece. La familia, los vecinos, el kiosco de la esquina, los compañeros de trabajo, el grupo del colegio. Contá que es por el club y que los premios son en efectivo: el número se vende solo." },
        { t: "texto", v: "Y si no jugás pero venís a la cancha, también podés comprar: preguntale a cualquiera de las chicas o los chicos, todos tienen su talonario encima." },
        { t: "texto", v: "Dudas, cambios de talonario o rifas que se te terminaron: hablá con tu entrenador o escribinos por el WhatsApp del club." }
      ]
    },
    {
      slug: "casa-del-handball-sagrado-corazon",
      fecha: "2026-09-24",
      etiqueta: "Primera damas",
      titulo: "La Primera juega en la Casa del Handball y va por televisión",
      copete: "Las dirigidas por Christian Gull abren la fecha 8 el viernes a las 20:00, contra Sagrado Corazón, en el estadio de FeMeBal. Lo pasa FemebalTV y los menores de 17 con la camiseta del club entran gratis.",
      foto: "fotos/noticias/2026-09-casa-del-handball-01.jpg",
      alt: "Una jugadora de Primera damas salta a rematar entre dos rivales",
      cuerpo: [
        { t: "texto", v: "La fecha 8 del Clausura nos saca de Don Bosco 116. Somos locales igual, pero se juega en la Casa del Handball Argentino, el estadio de FeMeBal en el Parque Olímpico de la Juventud. Cambia la cancha, no la tribuna." },
        { t: "texto", v: "Es uno de los dos partidos televisados del viernes. La Primera abre la jornada a las 20:00 contra Sagrado Corazón, de Florencio Varela, y se puede seguir por FemebalTV." },
        { t: "foto", v: "fotos/noticias/2026-09-casa-del-handball-02.jpg", alt: "Las jugadoras de Primera damas abrazadas en la charla previa al partido", pie: "La charla de siempre, esta vez en otra cancha." },
        { t: "texto", v: "El equipo de Gull llega segundo en el Clausura, con 18 puntos en siete fechas, y primero en la tabla anual. Hoy está en zona de ascenso a la Liga de Honor Plata, así que sumar de a tres en la recta final del torneo no es un detalle." },
        { t: "texto", v: "Enfrente viene Sagrado Corazón, undécimo, que pelea por meterse en el Super 8. En el Apertura las nuestras se lo llevaron 36 a 25." },
        { t: "destacado", v: "Los menores de 17 con la camiseta del club no pagan entrada." },
        { t: "texto", v: "Es para que vayan todas las inferiores a alentar: camiseta puesta y a la tribuna." },
        { t: "texto", v: "Para ir: Av. Roca 4170. La entrada general sale $7.000 y se paga en efectivo, con QR, débito o crédito. No se entra con comida, pero hay stand gastronómico adentro y el equipo de mate pasa sin problema." },
        { t: "texto", v: "Después, a las 21:45, la jornada sigue con el masculino entre Muñiz y Grilli, dos que están peleando abajo." },
        { t: "link", v: "https://www.instagram.com/p/Ddpp88Qmjlb/", texto: "El anuncio de la fecha, en el Instagram de FeMeBal" }
      ]
    },
    {
      slug: "primavera-minis-infantiles",
      fecha: "2026-09-22",
      etiqueta: "Formativas",
      titulo: "Las Minis y las Infantiles le dieron la bienvenida a la primavera",
      copete: "Entrenamiento temático, accesorios de primavera y una jornada de juegos y mucho handball.",
      foto: "fotos/noticias/2026-09-primavera-01.jpg",
      alt: "Las jugadoras de Minis e Infantiles posando frente al arco con vinchas de flores y accesorios de primavera",
      pie: "Toda la tira formativa, antes de empezar los juegos.",
      cuerpo: [
        { t: "texto", v: "Las Minis y las Infantiles entrenaron con temática de primavera. Cada una vino con sus accesorios: vinchas de flores, guirnaldas, lentes y orejitas." },
        { t: "texto", v: "Fue una jornada de juegos y mucho handball, de esas que hacen que las más chicas se queden con ganas de volver el martes." },
        { t: "destacado", v: "Así se arma el club desde abajo: jugando." },
        { t: "link", v: "https://instagram.com/adb.handball", texto: "Más fotos en el Instagram del club" }
      ]
    }
  ],

  // ============ GALERÍA ============
  // Un álbum por categoría, y adentro una entrada por fecha (partido): rival, condición,
  // quién sacó las fotos y las fotos. No siempre es el mismo fotógrafo, por eso el crédito
  // va por fecha. Las fotos entran con herramientas/fotos-galeria.js desde fotos/Partidos/
  // (originales, ignoradas): las exporta a 1600 px, bajo 300 KB, y arma esta lista.
  // fotografos: nombre → Instagram (o "" si no tiene). El crédito linkea ahí.
  // Cada foto: { src, alt (qué se ve, en castellano), alto:true si es vertical }.
  galeria: {
    fotografos: {
      "Male Acosta": "https://instagram.com/maaleacosta",
      "Dulce Méndez Terres": "https://instagram.com/dulcephfotografia",
      "Melanie Weber": "https://instagram.com/melweber.ph",
      "Maxy Canteros": "https://instagram.com/maxyyft",
      "JZ Audiovisuales": "https://instagram.com/jz_audiovisuales"
    },
    albumes: [
      { titulo:"Minis", fechas:[] },
      { titulo:"Infantiles", fechas:[] },
      { titulo:"Menores", fechas:[] },
      { titulo:"Cadetas", fechas:[] },
      { titulo:"Juveniles", fechas:[
        { f:"2026-08-09", rival:"Círculo de Villa Devoto", c:"V", fotografo:"Dulce Méndez Terres", fotos:[
          { src:"fotos/juveniles/2026-08-09-01.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 1)" },
          { src:"fotos/juveniles/2026-08-09-02.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 2)" },
          { src:"fotos/juveniles/2026-08-09-03.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 3)" },
          { src:"fotos/juveniles/2026-08-09-04.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 4)" },
          { src:"fotos/juveniles/2026-08-09-05.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 5)" },
          { src:"fotos/juveniles/2026-08-09-06.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 6)" },
          { src:"fotos/juveniles/2026-08-09-07.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 7)" },
          { src:"fotos/juveniles/2026-08-09-08.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 8)" },
          { src:"fotos/juveniles/2026-08-09-09.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 9)" },
          { src:"fotos/juveniles/2026-08-09-10.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 10)" },
          { src:"fotos/juveniles/2026-08-09-11.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 11)" },
          { src:"fotos/juveniles/2026-08-09-12.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 12)" },
          { src:"fotos/juveniles/2026-08-09-13.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 13)" },
          { src:"fotos/juveniles/2026-08-09-14.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 14)" },
          { src:"fotos/juveniles/2026-08-09-15.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 15)" },
          { src:"fotos/juveniles/2026-08-09-16.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 16)" },
          { src:"fotos/juveniles/2026-08-09-17.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 17)" },
          { src:"fotos/juveniles/2026-08-09-18.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 18)" },
          { src:"fotos/juveniles/2026-08-09-19.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 19)" },
          { src:"fotos/juveniles/2026-08-09-20.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 20)", alto:true },
          { src:"fotos/juveniles/2026-08-09-21.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 21)" },
          { src:"fotos/juveniles/2026-08-09-22.jpg", alt:"Juveniles contra Círculo de Villa Devoto, 09/08 de visitante (foto 22)" }
        ]}
      ] },
      { titulo:"Juniors", fechas:[
        { f:"2026-08-09", rival:"Círculo de Villa Devoto", c:"V", fotografo:"Dulce Méndez Terres", fotos:[
          { src:"fotos/juniors/2026-08-09-01.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 1)" },
          { src:"fotos/juniors/2026-08-09-02.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 2)" },
          { src:"fotos/juniors/2026-08-09-03.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 3)" },
          { src:"fotos/juniors/2026-08-09-04.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 4)", alto:true },
          { src:"fotos/juniors/2026-08-09-05.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 5)" },
          { src:"fotos/juniors/2026-08-09-06.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 6)" },
          { src:"fotos/juniors/2026-08-09-07.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 7)" },
          { src:"fotos/juniors/2026-08-09-08.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 8)" },
          { src:"fotos/juniors/2026-08-09-09.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 9)" },
          { src:"fotos/juniors/2026-08-09-10.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 10)" },
          { src:"fotos/juniors/2026-08-09-11.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 11)" },
          { src:"fotos/juniors/2026-08-09-12.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 12)" },
          { src:"fotos/juniors/2026-08-09-13.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 13)" },
          { src:"fotos/juniors/2026-08-09-14.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 14)" },
          { src:"fotos/juniors/2026-08-09-15.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 15)" },
          { src:"fotos/juniors/2026-08-09-16.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 16)" },
          { src:"fotos/juniors/2026-08-09-17.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 17)" },
          { src:"fotos/juniors/2026-08-09-18.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 18)" },
          { src:"fotos/juniors/2026-08-09-19.jpg", alt:"Juniors contra Círculo de Villa Devoto, 09/08 de visitante (foto 19)" }
        ]}
      ] },
      { titulo:"Primera damas", fechas:[
        { f:"2026-08-22", rival:"Dorrego", c:"V", fotografo:"Melanie Weber", fotos:[
          { src:"fotos/primera-damas/2026-08-22-01.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 1)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-02.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 2)" },
          { src:"fotos/primera-damas/2026-08-22-03.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 3)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-04.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 4)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-05.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 5)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-06.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 6)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-07.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 7)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-08.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 8)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-09.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 9)" },
          { src:"fotos/primera-damas/2026-08-22-10.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 10)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-11.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 11)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-12.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 12)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-13.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 13)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-14.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 14)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-15.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 15)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-16.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 16)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-17.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 17)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-18.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 18)", alto:true },
          { src:"fotos/primera-damas/2026-08-22-19.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 19)" },
          { src:"fotos/primera-damas/2026-08-22-20.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 20)" },
          { src:"fotos/primera-damas/2026-08-22-21.jpg", alt:"Primera damas contra Dorrego, 22/08 de visitante (foto 21)" }
        ]},
        { f:"2026-08-15", rival:"San Fernando", c:"L", fotografo:"JZ Audiovisuales", fotos:[
          { src:"fotos/primera-damas/2026-08-15-01.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 1)" },
          { src:"fotos/primera-damas/2026-08-15-02.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 2)" },
          { src:"fotos/primera-damas/2026-08-15-03.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 3)", alto:true },
          { src:"fotos/primera-damas/2026-08-15-04.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 4)", alto:true },
          { src:"fotos/primera-damas/2026-08-15-05.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 5)", alto:true },
          { src:"fotos/primera-damas/2026-08-15-06.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 6)", alto:true },
          { src:"fotos/primera-damas/2026-08-15-07.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 7)", alto:true },
          { src:"fotos/primera-damas/2026-08-15-08.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 8)" },
          { src:"fotos/primera-damas/2026-08-15-09.jpg", alt:"Primera damas contra San Fernando, 15/08 de local (foto 9)" }
        ]},
        { f:"2026-08-08", rival:"Talleres", c:"V", fotografo:"Maxy Canteros", fotos:[
          { src:"fotos/primera-damas/2026-08-08-01.jpg", alt:"Primera damas contra Talleres, 08/08 de visitante (foto 1)" },
          { src:"fotos/primera-damas/2026-08-08-02.jpg", alt:"Primera damas contra Talleres, 08/08 de visitante (foto 2)" },
          { src:"fotos/primera-damas/2026-08-08-03.jpg", alt:"Primera damas contra Talleres, 08/08 de visitante (foto 3)", alto:true },
          { src:"fotos/primera-damas/2026-08-08-04.jpg", alt:"Primera damas contra Talleres, 08/08 de visitante (foto 4)", alto:true },
          { src:"fotos/primera-damas/2026-08-08-05.jpg", alt:"Primera damas contra Talleres, 08/08 de visitante (foto 5)", alto:true },
          { src:"fotos/primera-damas/2026-08-08-06.jpg", alt:"Primera damas contra Talleres, 08/08 de visitante (foto 6)", alto:true },
          { src:"fotos/primera-damas/2026-08-08-07.jpg", alt:"Primera damas contra Talleres, 08/08 de visitante (foto 7)", alto:true },
          { src:"fotos/primera-damas/2026-08-08-08.jpg", alt:"Primera damas contra Talleres, 08/08 de visitante (foto 8)", alto:true }
        ]}
      ] },
      { titulo:"Tercera damas", fechas:[] },
      { titulo:"Cuarta caballeros", fechas:[
        { f:"2026-09-13", rival:"Ferrocarril Mitre", c:"L", fotografo:"Male Acosta", fotos:[
          { src:"fotos/cuarta-caballeros/2026-09-13-01.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 1)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-02.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 2)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-03.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 3)" },
          { src:"fotos/cuarta-caballeros/2026-09-13-04.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 4)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-05.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 5)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-06.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 6)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-07.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 7)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-08.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 8)" },
          { src:"fotos/cuarta-caballeros/2026-09-13-09.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 9)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-10.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 10)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-11.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 11)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-12.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 12)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-13.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 13)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-09-13-14.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 14)" },
          { src:"fotos/cuarta-caballeros/2026-09-13-15.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 15)" },
          { src:"fotos/cuarta-caballeros/2026-09-13-16.jpg", alt:"Cuarta caballeros contra Ferrocarril Mitre, 13/09 de local (foto 16)" }
        ]},
        { f:"2026-08-16", rival:"Dep. Laferrere", c:"L", fotografo:"JZ Audiovisuales", fotos:[
          { src:"fotos/cuarta-caballeros/2026-08-16-01.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 1)" },
          { src:"fotos/cuarta-caballeros/2026-08-16-02.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 2)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-08-16-03.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 3)" },
          { src:"fotos/cuarta-caballeros/2026-08-16-04.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 4)" },
          { src:"fotos/cuarta-caballeros/2026-08-16-05.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 5)" },
          { src:"fotos/cuarta-caballeros/2026-08-16-06.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 6)" },
          { src:"fotos/cuarta-caballeros/2026-08-16-07.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 7)" },
          { src:"fotos/cuarta-caballeros/2026-08-16-08.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 8)", alto:true }
        ]}
      ]},
      { titulo:"Maxihandball", fechas:[] }
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
      { n:"Ladran Sancho", destacado:true, logo:"fotos/sponsors/ladran-sancho.png", url:"https://instagram.com/ladran.sancho25", fondoOscuro:false }
    ]},
    { titulo:"Minis", marcas:[
      { n:"Administración Palmieri", logo:"fotos/sponsors/administracion-palmieri.png", url:"", fondoOscuro:false },
      { n:"Century 21 Sunset",       logo:"fotos/sponsors/century-21.png",              url:"", fondoOscuro:false },
      { n:"INK 360",                 logo:"fotos/sponsors/ink-360.png",                 url:"", fondoOscuro:false },
      { n:"La Conocida",             logo:"fotos/sponsors/parrilla-la-conocida.png",    url:"", fondoOscuro:false }
    ]},
    { titulo:"Infantiles", marcas:[
      { n:"A lo Rabal",                        logo:"fotos/sponsors/a-lo-rabal.png",                   url:"https://instagram.com/alorabal", fondoOscuro:false },
      { n:"Cortinas Calchaquí",                logo:"fotos/sponsors/cortinas-calchaqui.png",           url:"", fondoOscuro:false },
      { n:"Expreso Vitale",                    logo:"fotos/sponsors/expreso-vitale.png",               url:"https://instagram.com/expresovitale_", fondoOscuro:false },
      { n:"Mundo Dental",                      logo:"fotos/sponsors/mundo-dental.png",                 url:"https://instagram.com/mundodental.bernal", fondoOscuro:false },
      { n:"Kinesiología Lic. Valeria Trelles", logo:"fotos/sponsors/valeria-trelles-kinesiologia.png", url:"", fondoOscuro:false }
    ]},
    { titulo:"Menores", marcas:[
      { n:"Expreso Vitale", logo:"fotos/sponsors/expreso-vitale.png", url:"https://instagram.com/expresovitale_", fondoOscuro:false },
      { n:"Fior Pilates",   logo:"fotos/sponsors/fior-pilates.png",   url:"https://instagram.com/studiofiorpilates", fondoOscuro:false },
      { n:"Ladran Sancho",  logo:"fotos/sponsors/ladran-sancho.png",  url:"https://instagram.com/ladran.sancho25", fondoOscuro:false },
      { n:"Núcleo Deportes",logo:"fotos/sponsors/nucleo-deportes.png",url:"https://instagram.com/nucleocentrodedeportes", fondoOscuro:false },
      { n:"Via Cosenza",    logo:"fotos/sponsors/via-cosenza.png",    url:"https://instagram.com/viacosenza", fondoOscuro:false }
    ]},
    { titulo:"Cadetas", marcas:[
      { n:"Body Bernal",   logo:"fotos/sponsors/body-bernal.png",   url:"https://instagram.com/bodybernal", fondoOscuro:false },
      { n:"Nelo Café",     logo:"fotos/sponsors/nelo-cafe.png",     url:"", fondoOscuro:false },
      { n:"Ladran Sancho", logo:"fotos/sponsors/ladran-sancho.png", url:"https://instagram.com/ladran.sancho25", fondoOscuro:false },
      { n:"Neobrokers",    logo:"fotos/sponsors/neobrokers.png",    url:"https://instagram.com/neobrokerseguros", fondoOscuro:false },
      { n:"Sr. Cartel",    logo:"fotos/sponsors/senor-cartel.png",  url:"https://instagram.com/srcarteloficial", fondoOscuro:false },
      { n:"Via Cosenza",   logo:"fotos/sponsors/via-cosenza.png",   url:"https://instagram.com/viacosenza", fondoOscuro:false }
    ]},
    { titulo:"Juveniles", marcas:[
      { n:"AB Transbelt · Autogoma Bernal", logo:"fotos/sponsors/autogoma-bernal-transvelt.png", url:"https://instagram.com/ab_transbelt", fondoOscuro:false },
      { n:"Granja del Este",                logo:"fotos/sponsors/granja-del-este.png",           url:"", fondoOscuro:false },
      { n:"Grupo Uno",                      logo:"fotos/sponsors/grupo-uno.png",                 url:"", fondoOscuro:false },
      { n:"La Asunción",                    logo:"fotos/sponsors/la-asuncion.png",               url:"", fondoOscuro:false },
      { n:"Ladran Sancho",                  logo:"fotos/sponsors/ladran-sancho.png",             url:"https://instagram.com/ladran.sancho25", fondoOscuro:false },
      { n:"Le Coin",                        logo:"fotos/sponsors/le-coin.png",                   url:"https://instagram.com/lecoin.cafeteria", fondoOscuro:false },
      { n:"Morty's Burgers",                logo:"fotos/sponsors/morty-s.png",                   url:"https://instagram.com/mortys.burgers", fondoOscuro:false }
    ]},
    { titulo:"Juniors", marcas:[
      { n:"A los Mandarines", logo:"fotos/sponsors/a-los-mandarines.png", url:"https://instagram.com/alosmandarines.quilmes", fondoOscuro:false },
      { n:"Acimet",           logo:"fotos/sponsors/acimet.png",           url:"", fondoOscuro:false },
      { n:"Cosentino",        logo:"fotos/sponsors/cosentino.png",        url:"", fondoOscuro:false },
      { n:"Paher Plásticos",  logo:"fotos/sponsors/paher-plasticos.png",  url:"", fondoOscuro:false },
      { n:"Agua Tronador",    logo:"fotos/sponsors/tronador.png",         url:"https://instagram.com/aguatronador", fondoOscuro:false }
    ]},
    { titulo:"Primera damas", marcas:[
      { n:"Franco Liontix",         logo:"fotos/sponsors/franco-lionti.png",                url:"", fondoOscuro:false },
      { n:"Cimino y Costantini",    logo:"fotos/sponsors/cimino-y-costantini.png",          url:"https://instagram.com/ciminoycostantini", fondoOscuro:false },
      { n:"Agua Tronador",          logo:"fotos/sponsors/tronador.png",                     url:"https://instagram.com/aguatronador", fondoOscuro:false },
      { n:"Delicias Doradas",       logo:"fotos/sponsors/delicias-doradas.png",             url:"", fondoOscuro:false },
      { n:"De Cascia",              logo:"fotos/sponsors/de-cascia.png",                    url:"", fondoOscuro:false },
      { n:"Carnevale",              logo:"fotos/sponsors/carnevale.png",                    url:"", fondoOscuro:false },
      { n:"Lic. Kine Vale Trelles", logo:"fotos/sponsors/valeria-trelles-kinesiologia.png", url:"", fondoOscuro:false }
    ]},
    { titulo:"Tercera damas", marcas:[
      { n:"Textil Calchaquí",       logo:"fotos/sponsors/cortinas-calchaqui.png",     url:"https://instagram.com/textilcalchaqui.arg", fondoOscuro:false },
      { n:"Supermercado Magdalena", logo:"fotos/sponsors/magdalena-supermercado.png", url:"", fondoOscuro:false },
      { n:"Sorar RRHH",             logo:"fotos/sponsors/sora-rrhh.png",              url:"", fondoOscuro:false },
      { n:"JL Javier López",        logo:"fotos/sponsors/javier-lopez.png",           url:"", fondoOscuro:false },
      { n:"Bernuts",                logo:"fotos/sponsors/bernutss.png",               url:"", fondoOscuro:false },
      { n:"Agua Tronador",          logo:"fotos/sponsors/tronador.png",               url:"https://instagram.com/aguatronador", fondoOscuro:false }
    ]},
    { titulo:"Cuarta caballeros", marcas:[
      { n:"Ladran Sancho",        logo:"fotos/sponsors/ladran-sancho.png", url:"https://instagram.com/ladran.sancho25", fondoOscuro:false },
      { n:"Svencen Propiedades",  logo:"fotos/sponsors/svencen.png",       url:"", fondoOscuro:false }
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
  // Horarios según la planilla "Temporada 2026" del club (septiembre 2026).
  // Las que tienen especial:true no cuentan en el total de categorías que muestra el sitio.
  categorias: [
    { n:"Iniciación", e:"Para arrancar, de 11 a 17 años", dt:"Joel Szczur · Julieta Zárate", h:"Lunes y miércoles, 17:30 a 18:30 y 18:30 a 19:30 (por edad: 11-13, 14-15 y 16-17)" },
    { n:"Minis", e:"9 y 10 años", dt:"Paula Glisciak", h:"Martes y jueves, 17:30 a 18:30" },
    { n:"Infantiles", e:"11 y 12 años", dt:"Cecilia Esquivel · Asist. Julieta Zárate", h:"Martes, jueves y viernes, 17:30 a 19:00" },
    { n:"Menores", e:"13 y 14 años", dt:"Iván Piscopo · Asist. Cecilia Esquivel · PF Agustín Valado", h:"Martes y jueves, 17:30 a 20:00 (físico 17:30 a 18:30) · Viernes, 17:30 a 19:00" },
    { n:"Cadetas", e:"15 y 16 años", dt:"Iván Piscopo · Asist. Cecilia Esquivel · PF Agustín Valado", h:"Martes y jueves, 18:30 a 20:30 (físico 18:30 a 19:30) · Viernes, 18:30 a 20:00" },
    { n:"Juveniles", e:"17 y 18 años", dt:"Iván Piscopo · PF Agustín Valado", h:"Martes y jueves, 18:30 a 20:30 (físico 18:30 a 19:30) · Viernes, 18:30 a 20:00" },
    { n:"Juniors", e:"Sub-21, hasta 21 años", dt:"Joel Szczur · PF Facundo Fariña", h:"Entrenan con Juveniles · Viernes, 21:00 a 21:45, solo Juniors" },
    { n:"Primera damas", e:"Mayores · 1º División", dt:"Christian Gull · PF Facundo Fariña", h:"Martes y jueves, 20:30 a 23:00 (físico 20:30 a 21:30) · Viernes, 20:00 a 21:00" },
    { n:"Tercera damas", e:"Mayores · 3º División", dt:"María José Daneri · PF Facundo Fariña", h:"Martes y jueves, 19:30 a 22:00 (físico 19:30 a 20:30) · Viernes, 21:45 a 23:00" },
    { n:"Cuarta caballeros", e:"Mayores · 4º División", dt:"Joel Szczur", h:"Lunes y miércoles, 21:30 a 23:00" },
    { n:"Maxihandball", e:"Femenino, +30", dt:"Iván Piscopo · PF Joel Szczur", h:"Lunes y miércoles, 19:30 a 21:30 (físico 19:30 a 20:00)" },
    { n:"Arqueras", e:"Entrenamiento específico", dt:"Nicolás Lizarraga", h:"Martes y jueves, en dos bloques: 19:30 a 20:00 y 20:00 a 20:30", especial:true }   // no cuenta como categoría
  ],

  staff: [
    { n:"Jimmy Righi", r:"Coordinador" },
    { n:"Iván Piscopo", r:"Coordinador · DT menores, cadetas, juveniles y maxi" },
    { n:"Christian Gull", r:"DT Primera damas" },
    { n:"María José Daneri", r:"DT Tercera damas" },
    { n:"Joel Szczur", r:"DT juniors y Cuarta caballeros · PF maxi" },
    { n:"Cecilia Esquivel", r:"DT infantiles · asistente de menores y cadetas" },
    { n:"Paula Glisciak", r:"DT minis" },
    { n:"Julieta Zárate", r:"Asistente de infantiles" },
    { n:"Facundo Fariña", r:"PF de juniors y mayores" },
    { n:"Agustín Valado", r:"PF de menores, cadetas y juveniles" },
    { n:"Nicolás Lizarraga", r:"Entrenador de arqueras" }
  ],

  // ⚠️ Poné tus números reales antes de mostrarle esto a un sponsor.
  // Los usan index.html y plan-sponsoreo.html. El de partidos de local se calcula
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
    ], cta:"Hablemos de Sensus" }
  ]
};

// Un plantel con mismoFixtureQue:"id" juega las mismas fechas que ese otro plantel (una tira).
DATOS.planteles.forEach(p => {
  if (p.mismoFixtureQue) p.partidos = DATOS.planteles.find(x => x.id === p.mismoFixtureQue).partidos;
});
