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

  // Fixture sincronizado con FeMeBal (femebal.com/tournament-tracker) el 16/11/2026.
  // nombre: como lo llama el club · division: como lo llama FeMeBal (se muestra en la tabla).
  // jugadoras: el plantel que se vota como figura de la fecha (de LISTAS PRESENTISMO 2026).
  // Minis e Infantiles son formativas: van con jugadoras:[] y no entran en nada que sea por nombre.
  // nombresCortos: true muestra "Nombre A." en vez del nombre completo (Menores y Cadetas, que
  // igual no aparecen por nombre en ningún lado). De Juveniles para arriba, nombre y apellido.
  planteles: [
    { id:"mayores-a", nombre:"Primera damas", division:"Mayores · 1º División", dia:"Sábados", hora:"18:00", sponsor:"Franco Liontix", jugadoras:[
      "Luz Agüero", "Jazmin Alarcon", "Noelia Alcala", "Millaray Cocha", "Daniela Cristaldo", "Katia Cuomo", "Guadalupe Fernandez",
      "Julieta Gimenez", "Mora Lionti", "Carla Martinez", "Thayssa Montaly", "Barbara Ramirez",
      "Micaela Ramirez", "Valeria Trelles", "Justine Vargas", "Emilia Zarantonello",
      "Mia Badaracco"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Daniela Cristaldo":1, "Jazmin Alarcon":3, "Noelia Alcala":4, "Katia Cuomo":6, "Mora Lionti":7, "Mia Badaracco":8, "Emilia Zarantonello":9, "Micaela Ramirez":10, "Barbara Ramirez":14, "Carla Martinez":16, "Millaray Cocha":17, "Luz Agüero":19, "Valeria Trelles":20, "Guadalupe Fernandez":22, "Justine Vargas":23, "Julieta Gimenez":27, "Thayssa Montaly":28},
      goles:{"Jazmin Alarcon":4, "Noelia Alcala":44, "Katia Cuomo":20, "Mora Lionti":25, "Emilia Zarantonello":39, "Micaela Ramirez":55, "Barbara Ramirez":50, "Carla Martinez":2, "Millaray Cocha":31, "Luz Agüero":7, "Valeria Trelles":38, "Guadalupe Fernandez":9, "Justine Vargas":39, "Julieta Gimenez":1, "Thayssa Montaly":23},
      golesFecha:{
        "2026-08-08":{"Barbara Ramirez":4, "Emilia Zarantonello":2, "Micaela Ramirez":2, "Valeria Trelles":2, "Guadalupe Fernandez":2, "Thayssa Montaly":2, "Katia Cuomo":1, "Millaray Cocha":1, "Luz Agüero":1, "Justine Vargas":1},
        "2026-08-15":{"Micaela Ramirez":8, "Emilia Zarantonello":5, "Katia Cuomo":4, "Barbara Ramirez":4, "Valeria Trelles":3, "Justine Vargas":3, "Millaray Cocha":1, "Luz Agüero":1, "Thayssa Montaly":1},
        "2026-08-22":{"Justine Vargas":4, "Millaray Cocha":3, "Noelia Alcala":2, "Katia Cuomo":2, "Emilia Zarantonello":2, "Micaela Ramirez":2, "Thayssa Montaly":2, "Barbara Ramirez":1, "Carla Martinez":1, "Valeria Trelles":1, "Guadalupe Fernandez":1},
        "2026-08-29":{"Barbara Ramirez":10, "Valeria Trelles":7, "Noelia Alcala":4, "Emilia Zarantonello":4, "Micaela Ramirez":4, "Luz Agüero":2, "Justine Vargas":2, "Thayssa Montaly":2, "Katia Cuomo":1},
        "2026-09-05":{"Micaela Ramirez":7, "Millaray Cocha":6, "Noelia Alcala":3, "Mora Lionti":3, "Barbara Ramirez":3, "Valeria Trelles":3, "Emilia Zarantonello":2, "Luz Agüero":2, "Guadalupe Fernandez":2, "Katia Cuomo":1, "Justine Vargas":1, "Thayssa Montaly":1},
        "2026-09-12":{"Emilia Zarantonello":8, "Mora Lionti":4, "Justine Vargas":4, "Noelia Alcala":3, "Millaray Cocha":2, "Valeria Trelles":2, "Thayssa Montaly":2, "Katia Cuomo":1, "Micaela Ramirez":1, "Guadalupe Fernandez":1},
        "2026-09-19":{"Emilia Zarantonello":9, "Justine Vargas":6, "Barbara Ramirez":5, "Noelia Alcala":3, "Katia Cuomo":3, "Mora Lionti":2, "Micaela Ramirez":1, "Carla Martinez":1, "Valeria Trelles":1, "Guadalupe Fernandez":1, "Thayssa Montaly":1},
        "2026-09-25":{"Micaela Ramirez":7, "Valeria Trelles":4, "Barbara Ramirez":3, "Noelia Alcala":2, "Emilia Zarantonello":2, "Justine Vargas":2, "Thayssa Montaly":2, "Katia Cuomo":1, "Julieta Gimenez":1},
        "2026-10-03":{"Noelia Alcala":6, "Mora Lionti":6, "Barbara Ramirez":5, "Micaela Ramirez":4, "Valeria Trelles":3, "Justine Vargas":3, "Emilia Zarantonello":2, "Luz Agüero":1, "Guadalupe Fernandez":1},
        "2026-10-17":{"Barbara Ramirez":6, "Noelia Alcala":4, "Emilia Zarantonello":3, "Millaray Cocha":3, "Justine Vargas":3, "Micaela Ramirez":2, "Valeria Trelles":1},
        "2026-10-24":{"Millaray Cocha":9, "Micaela Ramirez":8, "Katia Cuomo":5, "Noelia Alcala":4, "Barbara Ramirez":4, "Mora Lionti":3, "Valeria Trelles":3, "Justine Vargas":3, "Jazmin Alarcon":2, "Thayssa Montaly":2, "Guadalupe Fernandez":1},
        "2026-10-31":{"Noelia Alcala":5, "Micaela Ramirez":3, "Barbara Ramirez":3, "Mora Lionti":2, "Millaray Cocha":2, "Valeria Trelles":2, "Justine Vargas":2, "Thayssa Montaly":2},
        "2026-11-07":{"Valeria Trelles":4, "Justine Vargas":4, "Mora Lionti":3, "Thayssa Montaly":3, "Noelia Alcala":2, "Micaela Ramirez":2, "Barbara Ramirez":2, "Millaray Cocha":2, "Jazmin Alarcon":1, "Katia Cuomo":1},
        "2026-11-13":{"Noelia Alcala":6, "Micaela Ramirez":4, "Thayssa Montaly":3, "Mora Lionti":2, "Millaray Cocha":2, "Valeria Trelles":2, "Jazmin Alarcon":1, "Justine Vargas":1}
      }, partidos:[
      {f:"2026-08-08",c:"V",r:"Talleres",h:"19:45",g:"18-30"},{f:"2026-08-15",c:"L",r:"San Fernando",g:"30-25"},
      {f:"2026-08-22",c:"V",r:"Dorrego",h:"16:15",g:"21-21"},{f:"2026-08-29",c:"L",r:"Dep. Laferrere",h:"19:45",g:"36-26"},
      {f:"2026-09-05",c:"V",r:"AFALP",g:"34-21"},{f:"2026-09-12",c:"L",r:"Ferro Carril Oeste",h:"19:45",g:"28-24"},
      {f:"2026-09-19",c:"V",r:"Polvorines",g:"33-26"},{f:"2026-09-25",c:"L",r:"Sagrado Corazón",h:"20:00",g:"24-28",sede:"la Casa del Handball"},
      {f:"2026-10-03",c:"V",r:"All Boys",g:"31-26"},{f:"2026-10-17",c:"L",r:"Vicente López",h:"19:45",g:"22-22"},
      {f:"2026-10-24",c:"V",r:"Temperley",g:"44-24"},{f:"2026-10-31",c:"V",r:"Villa Ballester",h:"19:45",g:"21-12"},
      {f:"2026-11-07",c:"L",r:"Argentinos Juniors",h:"19:45",g:"24-26"},{f:"2026-11-13",c:"V",r:"Secla",h:"20:00",g:"21-20",sede:"la Casa del Handball"},
      {f:"2026-11-21",c:"L",r:"Muñiz",h:"19:45"}
    ], tabla:[
      [1,"Polvorines",38,14,12,0,2,413,384],
      [2,"Dorrego",34,14,9,2,3,376,311],
      [3,"Ateneo Don Bosco",34,14,9,2,3,387,331],
      [4,"Talleres",33,14,9,1,4,391,335],
      [5,"Vicente López",33,14,9,1,4,370,341],
      [6,"Sagrado Corazón",32,14,8,2,4,409,375],
      [7,"All Boys",29,14,7,1,6,374,378],
      [8,"Ferro Carril Oeste",28,13,7,1,5,368,331],
      [9,"Villa Ballester",28,14,7,0,7,305,314],
      [10,"Argentinos Juniors",27,14,6,1,7,349,373],
      [11,"Secla",26,14,4,4,6,344,346],
      [12,"AFALP",24,14,5,0,9,376,383],
      [13,"Muñiz",22,14,4,0,10,335,371],
      [14,"San Fernando",19,13,3,0,10,292,332],
      [15,"Dep. Laferrere",19,14,2,1,11,384,479],
      [16,"Temperley",18,14,2,0,12,332,421]
    ]},
    { id:"mayores-b", nombre:"Tercera damas", division:"Mayores · 3º División", dia:"Sábados", hora:"18:00", sponsor:"Supermercado Magdalena", jugadoras:[
      "Ariana Acosta", "Paula Ayala", "Mia Badaracco", "Marina Chazarreta", "Ariana Cuervo Diaz",
      "Sofía Deker", "Julieta Di Bona", "Cecilia Esquivel", "Paula Glisciak", "Camila Gomez", "Camila Hermosid",
      "Patricia Marsicovetere", "Sofia Marsicovetere", "Julieta Mercado", "Zoe Rodriguez", "Ariana Veiga",
      "Brenda Velozo",
      "Ariana Raminger", "Catalina Ravazzano", "Renata Giachello", "Milagros Mosqueda"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Ariana Veiga":1, "Jazmin Alarcon":4, "Sofia Marsicovetere":7, "Renata Giachello":9, "Zoe Rodriguez":11, "Cecilia Esquivel":14, "Ariana Raminger":15, "Milagros Mosqueda":15, "Marina Chazarreta":16, "Camila Gomez":16, "Ariana Cuervo Diaz":17, "Julieta Di Bona":18, "Brenda Velozo":19, "Paula Ayala":20, "Julieta Mercado":21, "Paula Glisciak":22, "Mia Badaracco":25, "Ariana Acosta":26, "Catalina Ravazzano":30, "Camila Hermosid":33},
      goles:{"Jazmin Alarcon":15, "Sofia Marsicovetere":16, "Renata Giachello":12, "Zoe Rodriguez":21, "Cecilia Esquivel":10, "Ariana Raminger":14, "Milagros Mosqueda":6, "Camila Gomez":1, "Ariana Cuervo Diaz":10, "Julieta Di Bona":15, "Brenda Velozo":12, "Paula Ayala":12, "Julieta Mercado":41, "Paula Glisciak":50, "Mia Badaracco":23, "Ariana Acosta":57, "Catalina Ravazzano":2, "Camila Hermosid":15},
      golesFecha:{
        "2026-08-08":{"Ariana Acosta":6, "Ariana Raminger":5, "Zoe Rodriguez":4, "Mia Badaracco":3, "Julieta Di Bona":2, "Paula Glisciak":2, "Julieta Mercado":1, "Camila Hermosid":1},
        "2026-08-17":{"Mia Badaracco":4, "Paula Glisciak":3, "Ariana Acosta":3, "Julieta Mercado":2, "Sofia Marsicovetere":2, "Zoe Rodriguez":1, "Ariana Raminger":1, "Julieta Di Bona":1, "Brenda Velozo":1, "Catalina Ravazzano":1},
        "2026-08-22":{"Zoe Rodriguez":4, "Sofia Marsicovetere":2, "Ariana Raminger":2, "Julieta Di Bona":2, "Paula Glisciak":2, "Mia Badaracco":2, "Ariana Cuervo Diaz":1, "Julieta Mercado":1, "Ariana Acosta":1, "Catalina Ravazzano":1},
        "2026-08-29":{"Julieta Mercado":9, "Mia Badaracco":4, "Paula Glisciak":3, "Jazmin Alarcon":2, "Camila Hermosid":2, "Cecilia Esquivel":1, "Ariana Cuervo Diaz":1, "Julieta Di Bona":1, "Brenda Velozo":1, "Ariana Acosta":1},
        "2026-09-05":{"Ariana Acosta":5, "Zoe Rodriguez":3, "Paula Glisciak":2, "Mia Badaracco":2, "Jazmin Alarcon":1, "Julieta Di Bona":1, "Julieta Mercado":1},
        "2026-09-12":{"Julieta Mercado":5, "Ariana Acosta":5, "Paula Glisciak":4, "Julieta Di Bona":3, "Cecilia Esquivel":2, "Milagros Mosqueda":2, "Camila Hermosid":2, "Jazmin Alarcon":1},
        "2026-09-19":{"Ariana Acosta":6, "Paula Glisciak":5, "Zoe Rodriguez":4, "Cecilia Esquivel":3, "Ariana Cuervo Diaz":3, "Julieta Mercado":3, "Camila Hermosid":3, "Jazmin Alarcon":2, "Renata Giachello":2, "Paula Ayala":2, "Milagros Mosqueda":1, "Julieta Di Bona":1, "Brenda Velozo":1},
        "2026-09-24":{"Paula Glisciak":5, "Julieta Mercado":4, "Ariana Acosta":3, "Cecilia Esquivel":1, "Camila Gomez":1, "Brenda Velozo":1},
        "2026-09-26":{"Ariana Acosta":7, "Paula Glisciak":5, "Brenda Velozo":4, "Julieta Mercado":4, "Mia Badaracco":4, "Zoe Rodriguez":3, "Jazmin Alarcon":2, "Paula Ayala":2, "Ariana Cuervo Diaz":1, "Julieta Di Bona":1, "Camila Hermosid":1},
        "2026-10-03":{"Ariana Acosta":7, "Ariana Cuervo Diaz":4, "Julieta Mercado":4, "Paula Ayala":3, "Sofia Marsicovetere":2, "Renata Giachello":2, "Ariana Raminger":2, "Camila Hermosid":2, "Jazmin Alarcon":1, "Mia Badaracco":1},
        "2026-10-17":{"Ariana Acosta":8, "Jazmin Alarcon":6, "Paula Glisciak":4, "Sofia Marsicovetere":2, "Cecilia Esquivel":2, "Mia Badaracco":2, "Renata Giachello":1, "Ariana Raminger":1, "Julieta Mercado":1},
        "2026-10-31":{"Sofia Marsicovetere":4, "Julieta Mercado":4, "Milagros Mosqueda":3, "Ariana Raminger":2, "Paula Glisciak":2, "Ariana Acosta":2, "Mia Badaracco":1, "Camila Hermosid":1},
        "2026-11-07":{"Paula Glisciak":8, "Paula Ayala":4, "Julieta Di Bona":2, "Julieta Mercado":2, "Ariana Acosta":2, "Sofia Marsicovetere":1, "Ariana Raminger":1, "Camila Hermosid":1, "Brenda Velozo":1},
        "2026-11-14":{"Renata Giachello":7, "Paula Glisciak":5, "Sofia Marsicovetere":3, "Brenda Velozo":3, "Zoe Rodriguez":2, "Camila Hermosid":2, "Cecilia Esquivel":1, "Julieta Di Bona":1, "Paula Ayala":1, "Ariana Acosta":1}
      }, partidos:[
      {f:"2026-08-08",c:"V",r:"Campana Boat Club",g:"24-25"},{f:"2026-08-17",c:"L",r:"Almirante Brown",g:"19-25",sede:"la Casa del Handball"},
      {f:"2026-08-22",c:"V",r:"Boca Juniors",h:"19:45",g:"18-21"},{f:"2026-08-29",c:"L",r:"AFALP",g:"25-32"},
      {f:"2026-09-05",c:"V",r:"Argentinos Juniors",h:"19:45",g:"15-14"},{f:"2026-09-12",c:"L",r:"Huracán de San Justo",g:"24-22"},
      {f:"2026-09-19",c:"V",r:"Independiente",g:"36-20"},{f:"2026-09-26",c:"L",r:"Querandí",g:"34-25"},{f:"2026-10-03",c:"V",r:"Defensores de Moreno",g:"28-22"},
      {f:"2026-10-17",c:"L",r:"Mariano Acosta",g:"27-22"},{f:"2026-09-24",c:"L",r:"San Telmo",h:"21:15",g:"15-21"},
      {f:"2026-10-31",c:"V",r:"Nueva Chicago",h:"19:45",g:"19-26"},{f:"2026-11-07",c:"L",r:"Secla",g:"22-21"},
      {f:"2026-11-14",c:"V",r:"Colegio del Parque",g:"26-30"},{f:"2026-11-21",c:"L",r:"Cedem Caseros"}
    ], tabla:[
      [1,"Querandí",36,14,11,0,3,394,342],
      [2,"Colegio del Parque",36,14,11,0,3,434,334],
      [3,"Mariano Acosta",35,14,10,1,3,345,305],
      [4,"Nueva Chicago",35,14,9,3,2,353,309],
      [5,"Campana Boat Club",34,14,9,2,3,345,325],
      [6,"Almirante Brown",32,14,9,0,5,416,366],
      [7,"Secla",29,14,7,1,6,310,282],
      [8,"San Telmo",29,14,7,1,6,353,338],
      [9,"Argentinos Juniors",29,14,7,1,6,307,310],
      [10,"Ateneo Don Bosco",28,14,7,0,7,332,326],
      [11,"Independiente",24,14,4,2,8,322,375],
      [12,"Boca Juniors",22,14,4,0,10,320,353],
      [13,"Huracán de San Justo",22,14,4,0,10,310,359],
      [14,"Cedem Caseros",21,14,3,1,10,313,355],
      [15,"AFALP",19,14,3,0,10,323,389],
      [16,"Defensores de Moreno",16,14,1,0,13,290,399]
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
      {f:"2026-09-27",c:"L",r:"Cedem Caseros",g:"32-6"},{f:"2026-10-04",c:"V",r:"Hurlingham",g:"34-14"},{f:"2026-10-11",c:"L",r:"La Patriada",g:"26-22"},
      {f:"2026-10-25",c:"V",r:"Muñiz",g:"21-22"},{f:"2026-11-01",c:"L",r:"Polvorines",g:"31-7"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno",h:"09:30",g:"14-14"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón",g:"16-23"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Sagrado Corazón",39,13,13,0,0,343,149],
      [2,"C.I.D. Moreno",36,13,11,1,1,273,215],
      [3,"Colegio Ward",34,13,10,1,2,282,198],
      [4,"Ateneo Don Bosco",34,13,10,1,2,338,181],
      [5,"Muñiz",31,13,9,0,4,325,273],
      [6,"La Patriada",31,13,9,0,4,321,260],
      [7,"Polvorines",29,13,8,0,5,214,216],
      [8,"Estrella de Boedo",27,13,6,2,5,327,285],
      [9,"Hurlingham",25,13,6,0,7,253,271],
      [10,"Independiente",23,13,5,0,8,234,255],
      [11,"Banfield",23,13,5,0,8,319,311],
      [12,"Boca Juniors",22,13,4,1,8,244,287],
      [13,"Vélez Sarsfield",17,13,2,0,11,196,296],
      [14,"Villa Modelo",17,13,2,0,11,253,360],
      [15,"Cedem Caseros",14,13,0,1,12,169,335],
      [16,"Círculo de Villa Devoto",14,13,0,1,12,220,419]
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
      dorsales:{"Isabella Stoll":1, "Martina Rosales":2, "Celina Kronemberg":3, "Sofia Ballares":4, "Serena Zabatta":5, "Nina Stambullian":6, "Celeste Bello":7, "Valentina Manchi":8, "Victoria Kyanco":9, "Matilda Barrera":10, "Guillemina Fortunato":11, "Mia Calo":14, "Luana Martinez":15, "Amanda D'Urzo":16, "Helena Paz":17, "Julieta Villa":18, "Emilia Greco":19, "Martina Antero":20},
      goles:{"Martina Rosales":12, "Celina Kronemberg":21, "Sofia Ballares":8, "Serena Zabatta":55, "Nina Stambullian":1, "Celeste Bello":3, "Valentina Manchi":8, "Victoria Kyanco":29, "Matilda Barrera":2, "Guillemina Fortunato":47, "Mia Calo":50, "Luana Martinez":5, "Helena Paz":10, "Emilia Greco":106, "Martina Antero":31},
      golesFecha:{
        "2026-08-09":{"Emilia Greco":7, "Guillemina Fortunato":4, "Serena Zabatta":3, "Victoria Kyanco":3, "Martina Antero":3, "Helena Paz":2, "Celina Kronemberg":1, "Valentina Manchi":1, "Luana Martinez":1},
        "2026-08-16":{"Emilia Greco":5, "Serena Zabatta":4, "Mia Calo":4, "Victoria Kyanco":3, "Martina Antero":3, "Guillemina Fortunato":2, "Luana Martinez":1, "Helena Paz":1},
        "2026-08-23":{"Emilia Greco":6, "Guillemina Fortunato":4, "Serena Zabatta":3, "Mia Calo":3, "Victoria Kyanco":2, "Martina Antero":2, "Nina Stambullian":1, "Valentina Manchi":1},
        "2026-08-30":{"Emilia Greco":10, "Serena Zabatta":5, "Guillemina Fortunato":4, "Mia Calo":4, "Victoria Kyanco":2, "Celina Kronemberg":1},
        "2026-09-06":{"Emilia Greco":8, "Celina Kronemberg":6, "Guillemina Fortunato":4, "Serena Zabatta":3, "Victoria Kyanco":3, "Martina Antero":3, "Mia Calo":2, "Valentina Manchi":1, "Luana Martinez":1},
        "2026-09-13":{"Emilia Greco":12, "Mia Calo":8, "Serena Zabatta":6, "Celina Kronemberg":4, "Guillemina Fortunato":3, "Martina Antero":3, "Valentina Manchi":2, "Victoria Kyanco":2, "Helena Paz":2, "Luana Martinez":1},
        "2026-09-20":{"Emilia Greco":9, "Guillemina Fortunato":5, "Serena Zabatta":4, "Valentina Manchi":2, "Martina Rosales":1, "Victoria Kyanco":1, "Mia Calo":1, "Helena Paz":1, "Martina Antero":1},
        "2026-09-27":{"Serena Zabatta":7, "Emilia Greco":6, "Victoria Kyanco":3, "Mia Calo":3, "Martina Rosales":2, "Celeste Bello":1, "Valentina Manchi":1, "Guillemina Fortunato":1, "Luana Martinez":1, "Helena Paz":1, "Martina Antero":1},
        "2026-10-04":{"Guillemina Fortunato":6, "Martina Antero":4, "Victoria Kyanco":3, "Serena Zabatta":3, "Celina Kronemberg":2, "Emilia Greco":2, "Mia Calo":1},
        "2026-10-11":{"Emilia Greco":10, "Mia Calo":5, "Sofia Ballares":4, "Serena Zabatta":3, "Celina Kronemberg":2, "Celeste Bello":2, "Guillemina Fortunato":2, "Martina Antero":2, "Helena Paz":1},
        "2026-10-25":{"Emilia Greco":12, "Serena Zabatta":4, "Martina Rosales":3, "Mia Calo":3, "Sofia Ballares":2, "Victoria Kyanco":2, "Guillemina Fortunato":2, "Martina Antero":2, "Celina Kronemberg":1, "Matilda Barrera":1},
        "2026-11-01":{"Emilia Greco":10, "Mia Calo":4, "Martina Rosales":3, "Serena Zabatta":3, "Guillemina Fortunato":3, "Celina Kronemberg":2, "Victoria Kyanco":2, "Martina Antero":2, "Sofia Ballares":1, "Helena Paz":1},
        "2026-11-08":{"Mia Calo":8, "Emilia Greco":7, "Serena Zabatta":6, "Martina Rosales":3, "Guillemina Fortunato":3, "Celina Kronemberg":2, "Martina Antero":2, "Matilda Barrera":1, "Helena Paz":1},
        "2026-11-15":{"Guillemina Fortunato":4, "Mia Calo":4, "Victoria Kyanco":3, "Martina Antero":3, "Emilia Greco":2, "Sofia Ballares":1, "Serena Zabatta":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"25-19"},{f:"2026-08-16",c:"L",r:"Independiente",g:"23-29"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"22-37"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"26-23"},{f:"2026-09-06",c:"V",r:"Banfield",g:"31-19"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"43-23"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"25-24"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros",g:"27-22"},{f:"2026-10-04",c:"V",r:"Hurlingham",g:"21-23"},{f:"2026-10-11",c:"L",r:"La Patriada",g:"31-44"},
      {f:"2026-10-25",c:"V",r:"Muñiz",g:"32-23"},{f:"2026-11-01",c:"L",r:"Polvorines",g:"31-16"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno",h:"10:30",g:"33-27"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón",g:"18-14"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Independiente",42,14,14,0,0,444,250],
      [2,"Colegio Ward",40,14,13,0,1,455,245],
      [3,"La Patriada",40,14,13,0,1,490,296],
      [4,"Ateneo Don Bosco",34,14,10,0,4,388,343],
      [5,"C.I.D. Moreno",33,14,9,1,4,322,300],
      [6,"Vélez Sarsfield",31,14,8,1,5,315,303],
      [7,"Estrella de Boedo",30,14,7,2,5,341,339],
      [8,"Sagrado Corazón",27,14,6,1,7,311,267],
      [9,"Boca Juniors",26,14,5,2,7,270,297],
      [10,"Polvorines",25,14,5,1,8,221,258],
      [11,"Hurlingham",25,14,4,3,7,302,347],
      [12,"Cedem Caseros",23,14,4,1,9,268,324],
      [13,"Muñiz",20,14,3,0,11,263,350],
      [14,"Banfield",18,14,2,0,12,275,388],
      [15,"Villa Modelo",18,14,2,0,12,279,457],
      [16,"Círculo de Villa Devoto",16,14,1,0,13,227,407]
    ] },
    { id:"cadetas", competencia:false, nombre:"Cadetas", division:"Cadetes · División C", dia:"Domingos", hora:"13:00",
      nombresCortos:true, jugadoras:[
      "Luciana Chiesa", "Abril Coria", "Isabella Greco", "Emilia Juarez Leikam", "Ema Rosello", "Maria Eugenia Rotta",
      "Victoria Kyanko", "Emilia Greco", "Guillermina Fortunato", "Serena Zabatta", "Mia Calo"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Guillermina Fortunato":11, "Luciana Chiesa":15, "Abril Coria":16, "Serena Zabatta":20, "Emilia Greco":22, "Emilia Juarez Leikam":24, "Ema Rosello":25, "Victoria Kyanko":26, "Isabella Greco":27, "Mia Calo":28, "Maria Eugenia Rotta":32},
      goles:{"Guillermina Fortunato":17, "Luciana Chiesa":12, "Serena Zabatta":7, "Emilia Greco":74, "Emilia Juarez Leikam":14, "Ema Rosello":15, "Victoria Kyanko":17, "Isabella Greco":92, "Mia Calo":10, "Maria Eugenia Rotta":21},
      golesFecha:{
        "2026-08-09":{"Isabella Greco":8, "Emilia Greco":6, "Luciana Chiesa":4, "Guillermina Fortunato":2, "Victoria Kyanko":1},
        "2026-08-16":{"Luciana Chiesa":4, "Isabella Greco":4, "Serena Zabatta":2, "Mia Calo":2, "Maria Eugenia Rotta":2, "Emilia Juarez Leikam":1, "Ema Rosello":1, "Victoria Kyanko":1},
        "2026-08-23":{"Emilia Greco":5, "Isabella Greco":4, "Ema Rosello":3, "Luciana Chiesa":1, "Serena Zabatta":1, "Emilia Juarez Leikam":1, "Victoria Kyanko":1, "Maria Eugenia Rotta":1},
        "2026-08-30":{"Isabella Greco":8, "Emilia Greco":6, "Ema Rosello":3, "Luciana Chiesa":2, "Mia Calo":1},
        "2026-09-06":{"Isabella Greco":7, "Emilia Juarez Leikam":4, "Emilia Greco":3, "Luciana Chiesa":1, "Ema Rosello":1},
        "2026-09-13":{"Emilia Greco":9, "Isabella Greco":9, "Victoria Kyanko":4, "Guillermina Fortunato":2, "Ema Rosello":1, "Maria Eugenia Rotta":1},
        "2026-09-20":{"Emilia Greco":5, "Victoria Kyanko":4, "Guillermina Fortunato":2, "Emilia Juarez Leikam":2, "Isabella Greco":2, "Ema Rosello":1, "Maria Eugenia Rotta":1},
        "2026-09-27":{"Isabella Greco":10, "Emilia Greco":4, "Ema Rosello":2, "Maria Eugenia Rotta":2, "Guillermina Fortunato":1, "Emilia Juarez Leikam":1, "Mia Calo":1},
        "2026-10-04":{"Isabella Greco":7, "Victoria Kyanko":3, "Maria Eugenia Rotta":3, "Serena Zabatta":2, "Emilia Greco":1, "Emilia Juarez Leikam":1},
        "2026-10-11":{"Isabella Greco":12, "Emilia Greco":9, "Maria Eugenia Rotta":4, "Guillermina Fortunato":3, "Serena Zabatta":2, "Emilia Juarez Leikam":1, "Ema Rosello":1},
        "2026-10-25":{"Emilia Greco":7, "Isabella Greco":5, "Mia Calo":3, "Emilia Juarez Leikam":3, "Victoria Kyanko":3},
        "2026-11-01":{"Emilia Greco":9, "Isabella Greco":6, "Maria Eugenia Rotta":5, "Guillermina Fortunato":3, "Mia Calo":3, "Ema Rosello":1},
        "2026-11-08":{"Emilia Greco":10, "Isabella Greco":10, "Guillermina Fortunato":4, "Maria Eugenia Rotta":2, "Ema Rosello":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"21-19"},{f:"2026-08-16",c:"L",r:"Independiente",g:"17-30"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"17-25"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"20-24"},{f:"2026-09-06",c:"V",r:"Banfield",g:"16-19"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"26-31"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"17-25"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros",g:"21-28"},{f:"2026-10-04",c:"V",r:"Hurlingham",g:"17-22"},{f:"2026-10-11",c:"L",r:"La Patriada",g:"32-33"},
      {f:"2026-10-25",c:"V",r:"Muñiz",g:"21-29"},{f:"2026-11-01",c:"L",r:"Polvorines",g:"27-21"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno",h:"12:00",g:"27-29"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Banfield",37,13,12,0,1,282,233],
      [2,"Sagrado Corazón",33,13,9,2,2,331,296],
      [3,"Villa Modelo",31,13,9,0,4,307,282],
      [4,"Cedem Caseros",31,13,8,2,3,336,287],
      [5,"Independiente",30,13,8,1,4,283,255],
      [6,"Vélez Sarsfield",30,13,8,1,4,247,234],
      [7,"Muñiz",25,13,6,0,7,247,251],
      [8,"C.I.D. Moreno",25,13,6,0,7,284,290],
      [9,"Colegio Ward",25,13,5,2,6,271,285],
      [10,"Hurlingham",24,13,5,1,7,246,244],
      [11,"Polvorines",24,13,4,3,6,280,291],
      [12,"Círculo de Villa Devoto",23,13,5,0,8,289,288],
      [13,"La Patriada",23,13,5,0,8,267,297],
      [14,"Boca Juniors",21,13,4,0,9,207,249],
      [15,"Estrella de Boedo",17,13,2,0,11,279,318],
      [16,"Ateneo Don Bosco",17,13,2,0,11,279,335]
    ] },
    { id:"juveniles", nombre:"Juveniles", division:"Juveniles · División C", dia:"Domingos", hora:"14:30",
      jugadoras:[
      "Julieta Antero", "Valentina Antero", "Camila Dib", "Uma Estanga", "Angela Farias",
      "Renata Giachello", "Martina Gomez", "Isabella Scarfo", "Luciana Toledo",
      "Antonella D'Urzo", "Isabella Greco", "Luciana Chiesa Hornung", "Maria Rotta",
      "Ema Rosello"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Julieta Antero":1, "Antonella D'Urzo":5, "Ema Rosello":5, "Isabella Scarfo":7, "Martina Gomez":11, "Isabella Greco":14, "Angela Farias":16, "Renata Giachello":17, "Uma Estanga":18, "Luciana Toledo":21, "Luciana Chiesa Hornung":22, "Maria Rotta":22, "Camila Dib":24, "Valentina Antero":28},
      goles:{"Antonella D'Urzo":6, "Martina Gomez":48, "Isabella Greco":17, "Renata Giachello":90, "Uma Estanga":45, "Luciana Toledo":61, "Luciana Chiesa Hornung":3, "Maria Rotta":3, "Camila Dib":6, "Valentina Antero":38},
      golesFecha:{
        "2026-08-09":{"Renata Giachello":8, "Uma Estanga":5, "Valentina Antero":2, "Isabella Greco":1, "Luciana Toledo":1},
        "2026-08-16":{"Martina Gomez":5, "Uma Estanga":4, "Renata Giachello":3, "Luciana Toledo":3, "Isabella Greco":3, "Luciana Chiesa Hornung":2},
        "2026-08-23":{"Renata Giachello":8, "Martina Gomez":7, "Luciana Toledo":4, "Valentina Antero":3, "Uma Estanga":2},
        "2026-08-30":{"Luciana Toledo":7, "Renata Giachello":5, "Valentina Antero":5, "Martina Gomez":3, "Camila Dib":1},
        "2026-09-06":{"Martina Gomez":5, "Uma Estanga":4, "Renata Giachello":3, "Luciana Toledo":3, "Valentina Antero":3, "Camila Dib":1},
        "2026-09-13":{"Renata Giachello":8, "Luciana Toledo":5, "Martina Gomez":4, "Antonella D'Urzo":2, "Isabella Greco":1, "Maria Rotta":1},
        "2026-09-20":{"Renata Giachello":11, "Uma Estanga":7, "Valentina Antero":6, "Luciana Toledo":3, "Martina Gomez":2, "Camila Dib":2},
        "2026-09-27":{"Renata Giachello":5, "Valentina Antero":4, "Uma Estanga":3, "Martina Gomez":2, "Isabella Greco":2, "Luciana Toledo":2},
        "2026-10-04":{"Renata Giachello":7, "Valentina Antero":4, "Isabella Greco":3, "Luciana Toledo":3, "Martina Gomez":1, "Maria Rotta":1, "Uma Estanga":1},
        "2026-10-11":{"Renata Giachello":11, "Luciana Toledo":7, "Antonella D'Urzo":3, "Uma Estanga":3, "Martina Gomez":2},
        "2026-10-25":{"Renata Giachello":8, "Luciana Toledo":7, "Valentina Antero":4, "Martina Gomez":2, "Uma Estanga":2},
        "2026-11-01":{"Martina Gomez":6, "Renata Giachello":4, "Luciana Toledo":4, "Uma Estanga":3, "Valentina Antero":2, "Isabella Greco":1, "Maria Rotta":1},
        "2026-11-08":{"Renata Giachello":8, "Luciana Toledo":7, "Uma Estanga":6, "Martina Gomez":4, "Valentina Antero":2, "Camila Dib":1, "Isabella Greco":1, "Luciana Chiesa Hornung":1},
        "2026-11-15":{"Isabella Greco":5, "Martina Gomez":5, "Uma Estanga":5, "Luciana Toledo":5, "Valentina Antero":3, "Antonella D'Urzo":1, "Renata Giachello":1, "Camila Dib":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"17-34"},{f:"2026-08-16",c:"L",r:"Independiente",g:"20-29"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"24-28"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"21-17"},{f:"2026-09-06",c:"V",r:"Banfield",g:"19-28"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"21-25"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"31-40"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros",g:"18-25"},{f:"2026-10-04",c:"V",r:"Hurlingham",g:"20-24"},{f:"2026-10-11",c:"L",r:"La Patriada",g:"26-20"},
      {f:"2026-10-25",c:"V",r:"Muñiz",g:"23-28"},{f:"2026-11-01",c:"L",r:"Polvorines",g:"21-35"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno",h:"13:30",g:"30-28"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón",g:"26-29"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Polvorines",42,14,14,0,0,477,366],
      [2,"Círculo de Villa Devoto",40,14,13,0,1,458,294],
      [3,"Cedem Caseros",34,14,9,2,3,403,353],
      [4,"Sagrado Corazón",33,14,9,1,4,448,404],
      [5,"Hurlingham",30,14,8,0,6,351,316],
      [6,"Independiente",29,14,7,1,6,380,384],
      [7,"C.I.D. Moreno",27,14,6,1,7,357,373],
      [8,"Colegio Ward",26,14,6,0,8,397,388],
      [9,"La Patriada",26,14,6,0,8,331,337],
      [10,"Banfield",26,14,6,0,8,346,353],
      [11,"Vélez Sarsfield",26,14,6,0,8,357,370],
      [12,"Villa Modelo",26,14,6,0,8,357,388],
      [13,"Boca Juniors",25,14,5,1,8,297,352],
      [14,"Ateneo Don Bosco",20,14,3,0,11,317,390],
      [15,"Estrella de Boedo",20,14,3,0,11,347,461],
      [16,"Muñiz",18,14,2,0,12,274,368]
    ] },
    { id:"juniors", nombre:"Juniors", division:"Junior · División C", dia:"Domingos", hora:"16:00",
      jugadoras:[
      "Jazmin Alarcon", "Mia Badaracco", "Katia Cuomo", "Julia Damario", "Camila Gomez", "Patricia Marsicovetere",
      "Thayssa Montaly", "Milagros Mosqueda", "Catalina Ravazzano", "Emilia Zarantonello",
      "Julieta Antero", "Sofia Marsicovetere Palmieri", "Valentina Antero", "Luciana Toledo Rodriguez", "Martina Gomez", "Renata Giachello",
      "Angela Farias"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Julieta Antero":1, "Angela Farias":1, "Sofia Marsicovetere Palmieri":3, "Jazmin Alarcon":4, "Valentina Antero":5, "Katia Cuomo":6, "Mia Badaracco":8, "Emilia Zarantonello":9, "Thayssa Montaly":10, "Martina Gomez":11, "Camila Gomez":16, "Renata Giachello":17, "Luciana Toledo Rodriguez":18, "Milagros Mosqueda":22, "Julia Damario":25, "Catalina Ravazzano":33},
      goles:{"Julieta Antero":2, "Sofia Marsicovetere Palmieri":23, "Jazmin Alarcon":44, "Valentina Antero":12, "Katia Cuomo":84, "Mia Badaracco":41, "Emilia Zarantonello":64, "Thayssa Montaly":39, "Martina Gomez":4, "Renata Giachello":14, "Luciana Toledo Rodriguez":7, "Milagros Mosqueda":19, "Julia Damario":19, "Catalina Ravazzano":32},
      golesFecha:{
        "2026-08-09":{"Emilia Zarantonello":5, "Katia Cuomo":4, "Mia Badaracco":4, "Thayssa Montaly":3, "Catalina Ravazzano":3, "Sofia Marsicovetere Palmieri":2, "Valentina Antero":2},
        "2026-08-16":{"Katia Cuomo":13, "Jazmin Alarcon":5, "Julia Damario":4, "Catalina Ravazzano":4, "Mia Badaracco":3, "Sofia Marsicovetere Palmieri":2, "Emilia Zarantonello":2, "Milagros Mosqueda":2, "Thayssa Montaly":1},
        "2026-08-23":{"Emilia Zarantonello":9, "Katia Cuomo":7, "Catalina Ravazzano":4, "Sofia Marsicovetere Palmieri":3, "Jazmin Alarcon":3, "Thayssa Montaly":3, "Renata Giachello":2, "Valentina Antero":1, "Mia Badaracco":1, "Martina Gomez":1, "Julia Damario":1},
        "2026-08-30":{"Emilia Zarantonello":14, "Thayssa Montaly":4, "Sofia Marsicovetere Palmieri":3, "Katia Cuomo":2, "Julia Damario":2, "Catalina Ravazzano":2, "Jazmin Alarcon":1, "Mia Badaracco":1, "Renata Giachello":1},
        "2026-09-06":{"Emilia Zarantonello":7, "Katia Cuomo":6, "Jazmin Alarcon":5, "Mia Badaracco":4, "Martina Gomez":2, "Sofia Marsicovetere Palmieri":1, "Valentina Antero":1, "Thayssa Montaly":1, "Milagros Mosqueda":1, "Julia Damario":1},
        "2026-09-13":{"Jazmin Alarcon":7, "Valentina Antero":4, "Emilia Zarantonello":4, "Catalina Ravazzano":4, "Mia Badaracco":2, "Renata Giachello":2, "Katia Cuomo":1, "Thayssa Montaly":1, "Milagros Mosqueda":1},
        "2026-09-20":{"Katia Cuomo":7, "Emilia Zarantonello":7, "Thayssa Montaly":3, "Luciana Toledo Rodriguez":3, "Valentina Antero":2, "Mia Badaracco":2, "Milagros Mosqueda":1, "Julia Damario":1},
        "2026-09-27":{"Katia Cuomo":8, "Emilia Zarantonello":5, "Jazmin Alarcon":4, "Catalina Ravazzano":4, "Mia Badaracco":3, "Thayssa Montaly":2, "Milagros Mosqueda":2, "Julia Damario":2},
        "2026-10-04":{"Emilia Zarantonello":6, "Katia Cuomo":5, "Mia Badaracco":3, "Milagros Mosqueda":3, "Jazmin Alarcon":2, "Thayssa Montaly":2, "Julia Damario":1, "Catalina Ravazzano":1},
        "2026-10-11":{"Katia Cuomo":6, "Mia Badaracco":5, "Emilia Zarantonello":5, "Sofia Marsicovetere Palmieri":4, "Catalina Ravazzano":3, "Jazmin Alarcon":2, "Thayssa Montaly":2, "Julia Damario":2, "Renata Giachello":1, "Milagros Mosqueda":1},
        "2026-10-25":{"Thayssa Montaly":10, "Katia Cuomo":6, "Jazmin Alarcon":5, "Mia Badaracco":5, "Catalina Ravazzano":4, "Luciana Toledo Rodriguez":2, "Julieta Antero":1, "Martina Gomez":1, "Renata Giachello":1},
        "2026-11-01":{"Katia Cuomo":7, "Milagros Mosqueda":7, "Sofia Marsicovetere Palmieri":6, "Renata Giachello":3, "Mia Badaracco":2, "Luciana Toledo Rodriguez":2, "Julieta Antero":1, "Jazmin Alarcon":1, "Valentina Antero":1, "Thayssa Montaly":1, "Julia Damario":1, "Catalina Ravazzano":1},
        "2026-11-08":{"Katia Cuomo":10, "Thayssa Montaly":5, "Jazmin Alarcon":4, "Renata Giachello":2, "Sofia Marsicovetere Palmieri":1, "Mia Badaracco":1, "Milagros Mosqueda":1, "Julia Damario":1, "Catalina Ravazzano":1},
        "2026-11-15":{"Jazmin Alarcon":5, "Mia Badaracco":5, "Julia Damario":3, "Katia Cuomo":2, "Renata Giachello":2, "Sofia Marsicovetere Palmieri":1, "Valentina Antero":1, "Thayssa Montaly":1, "Catalina Ravazzano":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"23-34"},{f:"2026-08-16",c:"L",r:"Independiente",g:"36-31"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"35-32"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"30-31"},{f:"2026-09-06",c:"V",r:"Banfield",g:"29-16"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"26-36"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"26-26"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros",g:"30-27"},{f:"2026-10-04",c:"V",r:"Hurlingham",g:"23-17"},{f:"2026-10-11",c:"L",r:"La Patriada",g:"31-28"},
      {f:"2026-10-25",c:"V",r:"Muñiz",g:"35-26"},{f:"2026-11-01",c:"L",r:"Polvorines",g:"33-16"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno",h:"15:00",g:"26-35"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón",g:"21-34"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Círculo de Villa Devoto",42,14,14,0,0,425,303],
      [2,"Estrella de Boedo",38,14,12,0,2,488,350],
      [3,"C.I.D. Moreno",35,14,10,1,3,461,334],
      [4,"Villa Modelo",34,14,10,0,4,422,362],
      [5,"Boca Juniors",33,14,9,1,4,418,334],
      [6,"Sagrado Corazón",32,14,9,0,5,416,340],
      [7,"Vélez Sarsfield",31,14,8,1,5,367,324],
      [8,"Ateneo Don Bosco",31,14,8,1,5,404,389],
      [9,"Cedem Caseros",28,14,7,0,7,359,337],
      [10,"Colegio Ward",25,14,5,1,8,376,387],
      [11,"Polvorines",25,14,5,1,8,349,398],
      [12,"Muñiz",24,14,5,0,9,297,406],
      [13,"Independiente",17,13,2,0,11,286,396],
      [14,"La Patriada",17,13,2,0,11,317,429],
      [15,"Banfield",16,14,1,0,13,256,440],
      [16,"Hurlingham",16,14,1,0,13,288,400]
    ] },
    { id:"masculino", nombre:"Cuarta caballeros", division:"Mayores · 4º División", dia:"Domingos", hora:"18:00", sponsor:"Ladran Sancho", jugadoras:[
      "Lionel Benitez", "Patricio Britez", "Maximiliano Burakoski", "Valentin Carriego", "Martin Casco",
      "Guillermo Corbelli", "Agustin Fernandez", "Fabian Franco", "Gabriel Franco", "Enzo Golnner",
      "Maximiliano Gomez", "Lucas Guillermon", "Agustin Iacuzzi", "Leonel Legal", "Leandro Maggi",
      "Ivan Piscopo", "Julian Ponce", "Leandro Salvetti", "Marcelo Sanchez", "Matias Solis", "Matias Vallejos",
      "Martin Vega", "Mariano Magnani",
      "Facundo Fernandez"   // según las planillas de FeMeBal
    ],
      // Dorsales y goles del Clausura según las planillas de FeMeBal (femebal-dorsales.js).
      dorsales:{"Agustin Fernandez":1, "Guillermo Corbelli":10, "Leonel Legal":11, "Marcelo Sanchez":12, "Enzo Golnner":14, "Maximiliano Gomez":16, "Gabriel Franco":17, "Julian Ponce":18, "Lionel Benitez":19, "Patricio Britez":19, "Martin Casco":20, "Valentin Carriego":21, "Martin Vega":22, "Mariano Magnani":22, "Ivan Piscopo":23, "Lucas Guillermon":40, "Facundo Fernandez":41, "Fabian Franco":42, "Maximiliano Burakoski":43},
      goles:{"Guillermo Corbelli":2, "Enzo Golnner":69, "Gabriel Franco":9, "Julian Ponce":8, "Lionel Benitez":1, "Patricio Britez":54, "Martin Casco":30, "Valentin Carriego":5, "Martin Vega":15, "Mariano Magnani":1, "Ivan Piscopo":5, "Lucas Guillermon":4, "Facundo Fernandez":18, "Fabian Franco":43, "Maximiliano Burakoski":27},
      golesFecha:{
        "2026-08-09":{"Enzo Golnner":4, "Fabian Franco":4, "Maximiliano Burakoski":3, "Martin Casco":1, "Valentin Carriego":1},
        "2026-08-16":{"Enzo Golnner":11, "Martin Casco":3, "Fabian Franco":2, "Maximiliano Burakoski":2},
        "2026-08-23":{"Fabian Franco":7, "Enzo Golnner":6, "Julian Ponce":2, "Martin Casco":2, "Maximiliano Burakoski":2, "Facundo Fernandez":1, "Lucas Guillermon":1},
        "2026-08-30":{"Enzo Golnner":7, "Martin Casco":3, "Fabian Franco":3, "Gabriel Franco":2, "Facundo Fernandez":2, "Julian Ponce":1, "Maximiliano Burakoski":1},
        "2026-09-06":{"Enzo Golnner":14, "Martin Casco":5, "Fabian Franco":4, "Facundo Fernandez":3, "Lucas Guillermon":1, "Maximiliano Burakoski":1},
        "2026-09-13":{"Enzo Golnner":10, "Fabian Franco":4, "Martin Vega":3, "Julian Ponce":2, "Martin Casco":2, "Maximiliano Burakoski":2, "Guillermo Corbelli":1, "Valentin Carriego":1, "Lucas Guillermon":1, "Facundo Fernandez":1},
        "2026-10-04":{"Patricio Britez":10, "Enzo Golnner":8, "Fabian Franco":3, "Maximiliano Burakoski":3, "Gabriel Franco":2, "Martin Casco":2, "Valentin Carriego":1},
        "2026-10-12":{"Patricio Britez":6, "Enzo Golnner":5, "Martin Vega":3, "Martin Casco":3, "Fabian Franco":3, "Maximiliano Burakoski":1},
        "2026-10-25":{"Patricio Britez":8, "Enzo Golnner":4, "Ivan Piscopo":4, "Facundo Fernandez":3, "Martin Vega":1, "Martin Casco":1, "Lucas Guillermon":1, "Fabian Franco":1, "Maximiliano Burakoski":1},
        "2026-11-01":{"Maximiliano Burakoski":6, "Patricio Britez":5, "Martin Vega":5, "Fabian Franco":5, "Julian Ponce":3, "Martin Casco":2, "Facundo Fernandez":2, "Ivan Piscopo":1},
        "2026-11-08":{"Patricio Britez":10, "Facundo Fernandez":5, "Fabian Franco":5, "Maximiliano Burakoski":5, "Martin Casco":3, "Gabriel Franco":2, "Valentin Carriego":2, "Martin Vega":2, "Guillermo Corbelli":1, "Lionel Benitez":1, "Mariano Magnani":1},
        "2026-11-15":{"Patricio Britez":15, "Gabriel Franco":3, "Martin Casco":3, "Fabian Franco":2, "Martin Vega":1, "Facundo Fernandez":1}
      }, partidos:[
      {f:"2026-08-09",c:"V",r:"Almirante Brown",g:"13-28"},{f:"2026-08-16",c:"L",r:"Dep. Laferrere",g:"18-19"},
      {f:"2026-08-23",c:"V",r:"Federal Juniors",g:"21-23"},{f:"2026-08-30",c:"L",r:"General Las Heras",g:"19-25"},
      {f:"2026-09-06",c:"V",r:"Dorrego",h:"20:15",g:"28-27"},{f:"2026-09-13",c:"L",r:"Ferrocarril Mitre",g:"27-37"},
      {f:"2026-09-20",c:"libre"},{f:"2026-09-27",c:"libre"},{f:"2026-10-04",c:"V",r:"Defensores de Glew",h:"19:45",g:"29-38"},
      {f:"2026-10-12",c:"L",r:"Talleres",h:"19:45",g:"21-24",sede:"la Casa del Handball"},{f:"2026-10-25",c:"V",r:"Ducilo",h:"19:45",g:"24-24"},
      {f:"2026-11-01",c:"L",r:"San Telmo",h:"19:45",g:"29-22"},{f:"2026-11-08",c:"V",r:"El Portugués",g:"37-29"},
      {f:"2026-11-15",c:"V",r:"Círculo General Belgrano",h:"19:45",g:"25-22"},{f:"2026-11-22",c:"L",r:"Escobar"}
    ], tabla:[
      [1,"Almirante Brown",40,14,12,2,0,407,289],
      [2,"Defensores de Glew",37,14,11,1,2,389,300],
      [3,"General Las Heras",36,14,11,0,3,402,352],
      [4,"Escobar",35,14,10,1,3,338,288],
      [5,"Ferrocarril Mitre",34,14,10,0,4,402,360],
      [6,"Federal Juniors",32,14,9,0,5,310,312],
      [7,"Talleres",30,14,8,0,6,298,304],
      [8,"El Portugués",29,14,7,1,6,351,375],
      [9,"Ducilo",27,14,6,1,7,305,328],
      [10,"Ateneo Don Bosco",27,14,6,1,7,295,318],
      [11,"Dep. Laferrere",26,14,6,0,8,287,320],
      [12,"Dorrego",23,14,4,1,9,264,312],
      [13,"San Telmo",22,14,4,0,10,281,340],
      [14,"Círculo General Belgrano",17,14,3,0,10,280,359]
    ]},
    // Maxihandball: fixture y tabla de la Liga Maxi Handball (timbo.futbol), con maxi-actualizar.js.
    { id:"maxi", nombre:"Maxihandball", division:"Liga Maxi Handball · Clausura", dia:"Sábados", hora:"11:00", jugadoras:[
      "Camila Lalin", "Nahir Alvarez", "Maru Pereiras", "Tiziana Sanfelice", "Magali Prisco",
      "Giselle Loffler", "Camila Seguin", "Ariadna Aristizabal", "Martina Quintana", "Marcela Rodríguez",
      "Agustina Michl", "Florencia Rossaro", "Paula Subiza", "Agustina Bajko", "Valentina Bajko",
      "Mora Otamendi", "Mariana Benítez", "Julieta Biazzo", "Julieta Milanesi", "Martina Panetta",
      "Jimena Berutti", "Julieta Zárate"
    ],
      // Goles del Clausura según la tabla de goleadoras de la liga (maxi-actualizar.js).
      goles:{"Magali Prisco":23, "Maru Pereiras":18, "Julieta Milanesi":16, "Marcela Rodríguez":16, "Ariadna Aristizabal":8, "Florencia Rossaro":7, "Paula Subiza":7, "Agustina Bajko":4, "Jimena Berutti":3, "Camila Seguin":3, "Julieta Biazzo":2, "Agustina Michl":2, "María Varela":2, "Sofía Dekker":1, "Camila Lalin":1, "Giselle Loffler":1, "Martina Panetta":1, "Julieta Zárate":1},
      // Dorsales según la lista del club (septiembre 2026).
      dorsales:{"Camila Lalin":3, "Nahir Alvarez":4, "Maru Pereiras":5, "Tiziana Sanfelice":6, "Magali Prisco":7, "Giselle Loffler":8, "Camila Seguin":9, "Julieta Zárate":10, "Ariadna Aristizabal":11, "Martina Quintana":12, "Marcela Rodríguez":13, "Agustina Michl":14, "Florencia Rossaro":18, "Paula Subiza":19, "Agustina Bajko":20, "Valentina Bajko":21, "Mora Otamendi":22, "Mariana Benítez":24, "Julieta Biazzo":25, "Julieta Milanesi":27, "Martina Panetta":31, "Jimena Berutti":47}, partidos:[
      {f:"2026-08-29",c:"L",r:"Manuel Belgrano",n:1,h:"09:15",g:"12-20"},{f:"2026-09-05",c:"V",r:"Instituto Manuel Belgrano",n:2,sede:"Polideportivo N. Kirchner (Ezeiza)",g:"18-19"},
      {f:"2026-09-12",c:"V",r:"Team Ezeiza",n:3,h:"11:30",sede:"Polideportivo N. Kirchner (Ezeiza)",g:"15-14"},
      {f:"2026-09-26",c:"V",r:"Las 2P",n:4,h:"10:00",sede:"Polideportivo N. Kirchner (Ezeiza)",g:"15-18"},{f:"2026-10-03",c:"V",r:"Panteras Handball",n:5,h:"14:30",sede:"Instituto Manuel Belgrano Quilmes",g:"14-16"},
      {f:"2026-10-10",c:"V",r:"Golondrinas",n:6,h:"13:00",sede:"Polideportivo N. Kirchner (Ezeiza)",g:"26-11"},
      {f:"2026-10-17",c:"V",r:"Club Social",n:7,h:"16:00",sede:"Polideportivo N. Kirchner (Ezeiza)",g:"16-19"},
      {f:"2026-11-07",c:"L",r:"47 Handball Club",n:9,h:"13:15"},{f:"2026-11-09",c:"V",r:"Villa Vatteone",n:8,h:"15:00",sede:"Polideportivo N. Kirchner (Ezeiza)"},
      {f:"2026-11-14",c:"L",r:"La Patriada",n:10,sinHora:true,sede:"a confirmar"},{f:"2026-11-28",c:"L",r:"CAQ Handball",n:11,sinHora:true,sede:"a confirmar"}
    ], tabla:[
      [1,"Panteras Handball",23,8,7,1,0,150,114],
      [2,"Villa Vatteone",22,8,6,2,0,146,105],
      [3,"Instituto Manuel Belgrano",18,9,4,1,4,129,132],
      [4,"Manuel Belgrano",16,6,4,2,0,132,81],
      [5,"Club Social",16,8,4,0,4,117,149],
      [6,"Las 2P",15,8,3,1,4,148,144],
      [7,"Team Ezeiza",15,7,4,0,3,107,96],
      [8,"47 Handball Club",12,6,3,0,3,135,129],
      [9,"CAQ Handball",12,7,2,1,4,107,103],
      [10,"Ateneo Don Bosco",11,7,2,0,5,116,117],
      [11,"La Patriada",8,6,1,0,5,75,107],
      [12,"Golondrinas",8,8,0,0,8,92,177]
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
      slug: "ascenso-liga-plata",
      fecha: "2026-11-16",
      etiqueta: "Primera damas",
      titulo: "Triunfo agónico y ascenso a Liga Plata",
      copete: "21 a 20 contra Secla en la Casa del Handball, dado vuelta en los últimos minutos. Con ese resultado la Primera damas se subió a Liga Plata.",
      foto: "fotos/noticias/2026-11-ascenso-liga-plata-01.webp",
      alt: "El plantel de Primera damas festejando en la cancha de la Casa del Handball, con el marcador en 21 a 20 y la tribuna llena atrás",
      cuerpo: [
        { t: "texto", v: "La noche del viernes la Primera se jugaba un partido clave por el ascenso frente a Secla en la Casa del Handball. El resultado fue 21 a 20 para las nuestras, que con ese resultado consumaron el ascenso a Liga Plata." },
        { t: "texto", v: "En un partido donde se trabajó muy duro en defensa y costó el gol, las dirigidas por Gull supieron dar una muestra de carácter y remontar el resultado para conseguir la victoria en los últimos minutos." },
        { t: "destacado", v: "Se jugaba el ascenso, en la Casa del Handball y con la tribuna llena." },
        { t: "texto", v: "Hablamos con Mora Lionti, una de las capitanas de este equipo, y declaró lo siguiente:" },
        { t: "cita", quien: "Mora Lionti", v: "Creo que se vivió con muchos nervios, sabíamos que era un partido que teníamos que ganar y fue un rejunte de cosas como el jugarnos el ascenso a Liga Plata, jugar en la Casa del Handball, que no habíamos tenido buenas experiencias lo que nos hizo sentir la presión. Creo que además de los nervios, nunca negociamos el ir para adelante, defendimos cada pelota como si fuese la última, por eso pudimos remontarlo y sacarlo adelante los últimos minutos. Si bien nosotras no sabíamos que ascendíamos con este partido, sabíamos que teníamos que ganarlo porque no podíamos darle vida a los otros equipos. Enterarnos al final del partido del ascenso fue un plus." },
        { t: "texto", v: "Los goles fueron de Noelia Alcalá (6), Micaela Ramírez (4), Thayssa Montaly (3), Mora Lionti, Millaray Cocha y Valeria Trelles (2 cada una), y Jazmín Alarcón y Justine Vargas." },
        { t: "texto", v: "Las chicas lo dieron todo dentro de la cancha, pero no podemos dejar pasar que desde la tribuna se alentó los 60 minutos. Increíble la cantidad de gente que fue a alentar. Gracias a cada uno que estuvo ahí y bancó hasta el final." },
        { t: "texto", v: "En la tabla la Primera quedó tercera con 34 puntos y le queda una fecha: el sábado 21 a las 19:45 en Don Bosco 116 contra Muñiz." }
      ]
    },
    {
      slug: "cuarta-debut-casa-del-handball",
      fecha: "2026-10-15",
      etiqueta: "Cuarta caballeros",
      titulo: "Debut de la Cuarta en la Casa del Handball",
      copete: "24 a 21 para Talleres en la fecha 10. El resultado no acompañó, pero el plantel masculino pisó por primera vez el estadio de FeMeBal y la tribuna se hizo sentir.",
      foto: "fotos/noticias/2026-10-cuarta-debut-01.jpg",
      alt: "El plantel de Cuarta caballeros posando en la cancha de la Casa del Handball, con la tribuna llena de familias atrás",
      cuerpo: [
        { t: "texto", v: "El lunes pasado se vivió un hecho histórico para nuestro club: la Cuarta caballeros visitó por primera vez la Casa del Handball." },
        { t: "texto", v: "Fue por la fecha 10 contra Talleres de Remedios de Escalada y el resultado fue 24 a 21 a favor del rival." },
        { t: "texto", v: "Fue un partido inestable, con buenos momentos de juego y otros no tanto, pero nuestros mayores nos regalaron unos últimos minutos electrizantes donde dejaron demostrado que no se rindieron hasta que el árbitro marcó el final del partido." },
        { t: "destacado", v: "No se rindieron hasta que el árbitro marcó el final." },
        { t: "texto", v: "Charlamos con Gabriel Franco, uno de nuestros jugadores, que declaró lo siguiente:" },
        { t: "cita", quien: "Gabriel Franco", v: "Fue un partido cargado de emociones, que por momentos nos jugaron en contra a la hora de la toma de decisiones tanto en ataque como en defensa. Nos hubiera gustado traernos los tres puntos, pero si algo podemos decir es que lo dejamos todo hasta el final. Gracias a todos los que estuvieron presentes alentando, se hicieron sentir y nos dejaron un recuerdo inolvidable." },
        { t: "texto", v: "Los goles fueron de Patricio Britez (6), Enzo Golnner (5), Martín Vega, Martín Casco y Fabián Franco (3 cada uno) y Maximiliano Burakoski. Golnner llegó a 65 en el torneo y sigue siendo el goleador del plantel." },
        { t: "texto", v: "La próxima es el 25 de octubre, de visitante contra Ducilo. Y en 2027 habrá revancha: a cada plantel le toca su fecha en ese estadio una vez por torneo." }
      ]
    },
    {
      slug: "cuarta-caballeros-casa-del-handball",
      fecha: "2026-10-06",
      etiqueta: "Cuarta caballeros",
      titulo: "El lunes la Cuarta juega en la Casa del Handball y los queremos a todos ahí",
      copete: "Lunes 12, 19:45, contra Talleres. Es la primera vez del plantel en el estadio de FeMeBal y la idea es llenar la tribuna.",
      foto: "fotos/noticias/2026-10-cuarta-casa-02.jpg",
      alt: "El plantel de Cuarta caballeros posando frente al arco antes de un partido",
      cuerpo: [
        { t: "texto", v: "El lunes 12, feriado, la Cuarta caballeros juega contra Talleres a las 19:45 en la Casa del Handball Argentino, el estadio de FeMeBal en el Parque Olímpico de la Juventud. Somos locales, pero se juega ahí." },
        { t: "texto", v: "Es la primera vez que el plantel masculino pisa ese estadio. En lo que va del año solo pasaron por ahí la Primera y la Tercera damas, así que para los muchachos es un estreno." },
        { t: "foto", v: "fotos/noticias/2026-10-cuarta-casa-01.jpg", alt: "Placa del club con un teléfono que marca 19:45, lunes 12 de octubre", pie: "Lunes 12/10, 19:45, Casa del Handball. Anotalo." },
        { t: "destacado", v: "Vamos a ser locales en una cancha prestada. Depende de nosotros que se note." },
        { t: "texto", v: "Por eso los esperamos a todos: familias, jugadoras de las otras categorías, amigos, los que vienen siempre a Don Bosco 116 y los que hace rato no se dan una vuelta. Un lunes feriado a la tarde no hay excusa, y la cancha queda a un rato de viaje." },
        { t: "texto", v: "Para ir: Av. Roca 4170, Parque Olímpico de la Juventud. Se entra con entrada general y se puede llevar el equipo de mate." },
        { t: "texto", v: "La Cuarta viene de perder 38 a 29 con Defensores de Glew después de dos fechas libres, así que el aliento va a hacer falta. Vamos Bosco." }
      ]
    },
    {
      slug: "resumen-fecha-9",
      fecha: "2026-10-05",
      etiqueta: "Fecha 9",
      titulo: "Resumen de la fecha 9",
      copete: "Dos triunfos el sábado con la Primera y la Tercera, y una tira de inferiores que se repartió los resultados en Hurlingham.",
      foto: "fotos/noticias/2026-10-fecha-9-01.jpg",
      alt: "El plantel del Bosco en ronda con el cuerpo técnico, antes de salir a la cancha",
      cuerpo: [
        { t: "texto", v: "La fecha arrancó el sábado con dos triunfos: Primera y Tercera damas. La Primera se enfrentó contra All Boys y ganó 31 a 26, mientras que la Tercera ganó 28 a 22 frente a Defensores de Moreno." },
        { t: "texto", v: "El domingo nuestra tira de inferiores visitó a Hurlingham y los resultados fueron los siguientes: Infantiles ganó 34 a 14, Menores perdió 21 a 23, Cadetas perdió 17 a 22, las Juves perdieron 20 a 24 y la tira cerró con las Juniors, que ganaron 23 a 17." },
        { t: "texto", v: "Después de dos semanas de fecha libre, Cuarta caballeros volvió a jugar. Visitó a Defensores de Glew y el resultado fue derrota, 38 a 29." },
        { t: "destacado", v: "Si bien no siempre se gana, siempre se aprende." },
        { t: "texto", v: "Como cada fecha, nuestros equipos dejaron todo. ¡Vamos Bosco!" },
        { t: "texto", v: "En la tabla, las dos de arriba siguen bien: la Primera es segunda con 22 puntos y la Tercera se metió en zona de Súper 8, octava con 20. Las Infantiles son segundas de su zona con 22 y las Menores cuartas con 20." }
      ]
    },
    {
      slug: "tercera-querandi",
      fecha: "2026-09-28",
      etiqueta: "Tercera damas",
      titulo: "Triunfo importante de la Tercera contra Querandí",
      copete: "34 a 25 de local, por la octava fecha. Le ganó a un rival directo y quedó a un punto del Súper 8.",
      foto: "fotos/noticias/2026-09-tercera-01.jpg",
      alt: "Paula Glisciak, con la 22 del Bosco, salta a rematar",
      cuerpo: [
        { t: "texto", v: "El sábado el Ateneo Don Bosco recibió a Querandí por la octava fecha del torneo Clausura. En esta ocasión el triunfo fue para el local, 34 a 25, en un partido que fue de menos a más, con momentos de mucho ida y vuelta pero que supieron sobreponerse frente al equipo rival." },
        { t: "texto", v: "Las dirigidas por Majo lograron un triunfo importante pensando en clasificarse al Súper 8." },
        { t: "destacado", v: "Le ganamos a un rival directo por el Súper 8." },
        { t: "texto", v: "Le preguntamos a una de nuestras jugadoras, Ari Acosta, su mirada sobre el partido y declaró:" },
        { t: "cita", quien: "Ari Acosta", v: "Creo que fue un partido que arrancó peleado y tanto cuerpo técnico como jugadoras supieron resolver el partido sobre la marcha, sacando una buena diferencia y demostrando que fuimos superiores." },
        { t: "texto", v: "Once jugadoras entraron en el marcador. Los goles fueron de Ariana Acosta (7), Paula Glisciak (5), Brenda Velozo, Julieta Mercado y Mia Badaracco (4 cada una), Zoe Rodríguez (3), Jazmín Alarcón y Paula Ayala (2), y uno cada una Ariana Cuervo Díaz, Julieta Di Bona y Camila Hermosid. Acosta llegó a 37 goles y es la goleadora del plantel en el torneo." },
        { t: "texto", v: "Con la victoria el Bosco quedó noveno con 17 puntos, a uno de Secla y del propio Querandí, que están octavo y séptimo con un partido menos. Los ocho primeros se meten en el Súper 8, así que el que se ganó el sábado era de los que valen doble." },
        { t: "texto", v: "El resto del fin de semana: el viernes la Primera cayó 28 a 24 con Sagrado Corazón en la Casa del Handball, y el domingo toda la tira de inferiores recibió a Cedem Caseros. Ganaron Infantiles 32 a 6, Menores 27 a 22 y Juniors 30 a 27; perdieron Cadetas 21 a 28 y Juveniles 18 a 25. Las Infantiles quedaron punteras de su zona." }
      ]
    },
    {
      slug: "primera-sagrado-corazon-casa-del-handball",
      fecha: "2026-09-26",
      etiqueta: "Primera damas",
      titulo: "Derrota de la Primera en la Casa del Handball",
      copete: "24 a 28 con Sagrado Corazón de Varela, por la octava fecha del Clausura. El Bosco sigue segundo y con el ascenso a tiro.",
      firma: "Gabriel Franco",
      foto: "fotos/noticias/2026-09-sagrado-01.jpg",
      alt: "Una jugadora del Bosco salta a rematar marcada por una defensora de Sagrado Corazón, en la cancha de la Casa del Handball",
      cuerpo: [
        { t: "texto", v: "El viernes se enfrentaron el Ateneo Don Bosco y Sagrado Corazón de Varela por la octava fecha del torneo Clausura, y la victoria en esta ocasión fue para el equipo varelense: 28 a 24." },
        { t: "texto", v: "Un partido áspero, de muchos goles y parejo de principio a fin. El resultado no fue el esperado, pero sin dudas que seguimos más vivas que nunca en la búsqueda del ascenso." },
        { t: "destacado", v: "Seguimos más vivas que nunca en la búsqueda del ascenso." },
        { t: "foto", v: "fotos/noticias/2026-09-sagrado-02.jpg", alt: "Una jugadora del Bosco remata en suspensión entre tres rivales de verde", pie: "Sesenta minutos parejos en el piso del Parque Olímpico." },
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
      "JZ Audiovisuales": "https://instagram.com/jz_audiovisuales",
      "Mati": "https://instagram.com/tuteraw_",
      "Julieta Meana": "https://instagram.com/julimeanafotos"
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
        { f:"2026-09-25", rival:"Sagrado Corazón", c:"L", fotografo:"Mati", fotos:[
          { src:"fotos/primera-damas/2026-09-25-01.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 1)" },
          { src:"fotos/primera-damas/2026-09-25-02.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 2)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-03.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 3)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-04.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 4)" },
          { src:"fotos/primera-damas/2026-09-25-05.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 5)" },
          { src:"fotos/primera-damas/2026-09-25-06.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 6)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-07.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 7)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-08.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 8)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-09.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 9)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-10.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 10)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-11.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 11)" },
          { src:"fotos/primera-damas/2026-09-25-12.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 12)" },
          { src:"fotos/primera-damas/2026-09-25-13.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 13)" },
          { src:"fotos/primera-damas/2026-09-25-14.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 14)" },
          { src:"fotos/primera-damas/2026-09-25-15.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 15)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-16.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 16)", alto:true },
          { src:"fotos/primera-damas/2026-09-25-17.jpg", alt:"Primera damas contra Sagrado Corazón, 25/09 de local (foto 17)", alto:true }
        ]},
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
        { f:"2026-08-15", rival:"San Fernando", c:"L", fotografo:"Julieta Meana", fotos:[
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
        { f:"2026-10-12", rival:"Talleres", c:"L", fotografo:"Julieta Meana", fotos:[
          { src:"fotos/cuarta-caballeros/2026-10-12-01.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 1)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-02.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 2)" },
          { src:"fotos/cuarta-caballeros/2026-10-12-03.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 3)" },
          { src:"fotos/cuarta-caballeros/2026-10-12-04.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 4)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-05.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 5)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-06.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 6)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-07.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 7)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-08.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 8)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-09.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 9)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-10.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 10)" },
          { src:"fotos/cuarta-caballeros/2026-10-12-11.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 11)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-12.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 12)" },
          { src:"fotos/cuarta-caballeros/2026-10-12-13.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 13)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-14.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 14)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-15.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 15)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-16.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 16)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-17.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 17)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-18.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 18)", alto:true },
          { src:"fotos/cuarta-caballeros/2026-10-12-19.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 19)" },
          { src:"fotos/cuarta-caballeros/2026-10-12-20.jpg", alt:"Cuarta caballeros contra Talleres, 12/10 de local (foto 20)", alto:true }
        ]},
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
      { n:"Acimet",           logo:"fotos/sponsors/acimet.png",           url:"https://acimet.com.ar", fondoOscuro:false },
      { n:"Cosentino",        logo:"fotos/sponsors/cosentino.png",        url:"", fondoOscuro:false },
      { n:"Paher Plásticos",  logo:"fotos/sponsors/paher-plasticos.png",  url:"", fondoOscuro:false },
      { n:"Agua Tronador",    logo:"fotos/sponsors/tronador.png",         url:"https://instagram.com/aguatronador", fondoOscuro:false }
    ]},
    { titulo:"Primera damas", marcas:[
      { n:"Franco Liontix",         logo:"fotos/sponsors/franco-lionti.png",                url:"https://instagram.com/francoliontix", fondoOscuro:false },
      { n:"Cimino y Costantini",    logo:"fotos/sponsors/cimino-y-costantini.png",          url:"https://instagram.com/ciminoycostantini", fondoOscuro:false },
      { n:"Agua Tronador",          logo:"fotos/sponsors/tronador.png",                     url:"https://instagram.com/aguatronador", fondoOscuro:false },
      { n:"Delicias Doradas",       logo:"fotos/sponsors/delicias-doradas.png",             url:"https://instagram.com/delicias_doradas", fondoOscuro:false },
      { n:"De Cascia",              logo:"fotos/sponsors/de-cascia.png",                    url:"https://instagram.com/decascia", fondoOscuro:false },
      { n:"Carnevale",              logo:"fotos/sponsors/carnevale.png",                    url:"https://instagram.com/carnevale.ok", fondoOscuro:false },
      { n:"Lic. Kine Vale Trelles", logo:"fotos/sponsors/valeria-trelles-kinesiologia.png", url:"", fondoOscuro:false }
    ]},
    { titulo:"Tercera damas", marcas:[
      { n:"Textil Calchaquí",       logo:"fotos/sponsors/cortinas-calchaqui.png",     url:"https://instagram.com/textilcalchaqui.arg", fondoOscuro:false },
      { n:"Supermercado Magdalena", logo:"fotos/sponsors/magdalena-supermercado.png", url:"https://instagram.com/supermermercado_magdalena", fondoOscuro:false },
      { n:"Sorar RRHH",             logo:"fotos/sponsors/sora-rrhh.png",              url:"https://instagram.com/sorarrhh", fondoOscuro:false },
      { n:"JL Javier López",        logo:"fotos/sponsors/javier-lopez.png",           url:"https://instagram.com/jl_javierlopez", fondoOscuro:false },
      { n:"Bernuts",                logo:"fotos/sponsors/bernutss.png",               url:"https://instagram.com/bernutss", fondoOscuro:false },
      { n:"Agua Tronador",          logo:"fotos/sponsors/tronador.png",               url:"https://instagram.com/aguatronador", fondoOscuro:false }
    ]},
    { titulo:"Cuarta caballeros", marcas:[
      { n:"Ladran Sancho",        logo:"fotos/sponsors/ladran-sancho.png", url:"https://instagram.com/ladran.sancho25", fondoOscuro:false },
      { n:"Svencen Propiedades",  logo:"fotos/sponsors/svencen.png",       url:"https://instagram.com/svencenpropiedades", fondoOscuro:false }
    ]},
    { titulo:"Maxihandball", marcas:[
      { n:"Inti Bernal",      logo:"fotos/sponsors/inti-bernal.png", url:"https://instagram.com/inti_bernal", fondoOscuro:false },
      { n:"Lalomatic",        logo:"fotos/sponsors/lalomatic.png",   url:"https://instagram.com/lalomatic.ok", fondoOscuro:false },
      { n:"Redbee",           logo:"fotos/sponsors/redbee.png",      url:"https://instagram.com/redbeestudios", fondoOscuro:false },
      { n:"Graferme Gráfica", logo:"fotos/sponsors/graferne.png",    url:"https://instagram.com/grafernegrafica", fondoOscuro:false },
      { n:"Santa Paz",        logo:"fotos/sponsors/santa-paz.png",   url:"https://instagram.com/centro.santa.paz", fondoOscuro:false }
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
    { b:"2.744", l:"seguidores en Instagram, casi todos de Quilmes y Bernal" },
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
