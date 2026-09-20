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

  // Fixture sincronizado con FeMeBal (femebal.com/tournament-tracker) el 20/09/2026.
  // nombre: como lo llama el club · division: como lo llama FeMeBal (se muestra en la tabla).
  // jugadoras: el plantel que se vota como figura de la fecha (de LISTAS PRESENTISMO 2026).
  // Minis e Infantiles son formativas: van con jugadoras:[] y no entran en nada que sea por nombre.
  // nombresCortos: true muestra "Nombre A." en vez del nombre completo (para menores de edad).
  planteles: [
    { id:"mayores-a", nombre:"Primera damas", division:"Mayores · 1º División", dia:"Sábados", hora:"18:00", sponsor:"Franco Liontix", jugadoras:[
      "Luz Agüero", "Noelia Alcala", "Millaray Cocha", "Daniela Cristaldo", "Katia Cuomo", "Guadalupe Fernandez",
      "Julieta Gimenez", "Mora Lionti", "Carla Martinez", "Thayssa Montaly", "Barbara Ramirez",
      "Micaela Ramirez", "Valeria Trelles", "Justine Vargas", "Emilia Zarantonello"
    ], partidos:[
      {f:"2026-08-08",c:"V",r:"Talleres",h:"19:45",g:"18-30"},{f:"2026-08-15",c:"L",r:"San Fernando",g:"30-25"},
      {f:"2026-08-22",c:"V",r:"Dorrego",h:"16:15",g:"21-21"},{f:"2026-08-29",c:"L",r:"Dep. Laferrere",h:"19:45",g:"36-26"},
      {f:"2026-09-05",c:"V",r:"AFALP",g:"34-21"},{f:"2026-09-12",c:"L",r:"Ferro Carril Oeste",h:"19:45",g:"28-24"},
      {f:"2026-09-19",c:"V",r:"Polvorines",g:"33-26"},{f:"2026-09-25",c:"L",r:"Sagrado Corazón",h:"20:00"},{f:"2026-10-03",c:"V",r:"All Boys"},
      {f:"2026-10-17",c:"L",r:"Vicente López"},{f:"2026-10-24",c:"V",r:"Temperley"},{f:"2026-10-31",c:"V",r:"Villa Ballester"},
      {f:"2026-11-07",c:"L",r:"Argentinos Juniors"},{f:"2026-11-14",c:"V",r:"Secla"},{f:"2026-11-21",c:"L",r:"Muñiz"}
    ], tabla:[
      [1,"Polvorines",22,8,7,0,1,239,219],
      [2,"Ateneo Don Bosco",18,7,5,1,1,200,173],
      [3,"Talleres",17,7,5,0,2,194,152],
      [4,"Vicente López",17,7,5,0,2,197,178],
      [5,"Secla",17,7,4,2,1,172,159],
      [6,"Argentinos Juniors",16,8,4,0,4,204,216],
      [7,"Dorrego",15,7,3,2,2,178,147],
      [8,"Ferro Carril Oeste",15,7,4,0,3,198,180],
      [9,"All Boys",15,7,4,0,3,192,197],
      [10,"Villa Ballester",15,7,4,0,3,152,157],
      [11,"Sagrado Corazón",13,7,3,0,4,212,201],
      [12,"Muñiz",13,7,3,0,4,156,166],
      [13,"AFALP",9,7,1,0,6,182,202],
      [14,"San Fernando",9,7,1,0,6,151,177],
      [15,"Temperley",9,7,1,0,6,163,215],
      [16,"Dep. Laferrere",8,7,0,1,6,193,244]
    ]},
    { id:"mayores-b", nombre:"Tercera damas", division:"Mayores · 3º División", dia:"Sábados", hora:"18:00", sponsor:"Supermercado Magdalena", jugadoras:[
      "Ariana Acosta", "Jazmin Alarcon", "Paula Ayala", "Mia Badaracco", "Marina Chazarreta", "Ariana Cuervo Diaz",
      "Sofia Dekker", "Julieta Di Bona", "Cecilia Esquivel", "Paula Glisciak", "Camila Gomez", "Camila Hermosid",
      "Patricia Marsicovetere", "Sofia Marsicovetere", "Julieta Mercado", "Zoe Rodriguez", "Ariana Veiga",
      "Brenda Velozo"
    ], partidos:[
      {f:"2026-08-08",c:"V",r:"Campana Boat Club",g:"24-25"},{f:"2026-08-17",c:"L",r:"Almirante Brown",g:"19-25"},
      {f:"2026-08-22",c:"V",r:"Boca Juniors",h:"19:45",g:"18-21"},{f:"2026-08-29",c:"L",r:"AFALP",g:"25-32"},
      {f:"2026-09-05",c:"V",r:"Argentinos Juniors",h:"19:45",g:"15-14"},{f:"2026-09-12",c:"L",r:"Huracán de San Justo",g:"24-22"},
      {f:"2026-09-19",c:"V",r:"Independiente",g:"36-20"},{f:"2026-09-26",c:"L",r:"Querandí"},{f:"2026-10-03",c:"V",r:"Defensores de Moreno"},
      {f:"2026-10-17",c:"L",r:"Mariano Acosta"},{f:"2026-09-24",c:"V",r:"San Telmo",h:"21:15"},{f:"2026-10-31",c:"V",r:"Nueva Chicago"},
      {f:"2026-11-07",c:"L",r:"Secla"},{f:"2026-11-14",c:"V",r:"Colegio del Parque"},{f:"2026-11-21",c:"L",r:"Cedem Caseros"}
    ], tabla:[
      [1,"Campana Boat Club",20,7,6,1,0,196,177],
      [2,"Mariano Acosta",19,7,6,0,1,185,145],
      [3,"Nueva Chicago",18,7,5,1,1,188,160],
      [4,"Colegio del Parque",17,7,5,0,2,206,174],
      [5,"Almirante Brown",17,7,5,0,2,218,193],
      [6,"Querandí",17,7,5,0,2,203,182],
      [7,"San Telmo",17,7,5,0,2,190,174],
      [8,"Secla",15,7,4,0,3,154,145],
      [9,"Ateneo Don Bosco",13,7,3,0,4,161,159],
      [10,"Boca Juniors",11,7,2,0,5,150,165],
      [11,"Argentinos Juniors",11,7,2,0,5,128,149],
      [12,"AFALP",10,6,2,0,4,151,179],
      [13,"Defensores de Moreno",9,7,1,0,6,153,184],
      [14,"Huracán de San Justo",9,7,1,0,6,132,166],
      [15,"Independiente",9,7,1,0,6,154,197],
      [16,"Cedem Caseros",8,6,1,0,5,143,163]
    ]},
    // Inferiores damas es una tira: Minis, Infantiles, Menores, Cadetas, Juveniles y Juniors
    // juegan el mismo día en el mismo lugar, todas de local o todas de visitante, cada una
    // a su hora. Fixture, horarios y resultados vienen de FeMeBal (división C); Minis no
    // compite en FeMeBal y copia las fechas. Sin "sponsor", el marcador no muestra presentador.
    // Campos de cada partido: f fecha · c L/V/libre · r rival · h hora (si difiere de la del
    // plantel) · g resultado "nuestros-de ellos" cuando ya se jugó.
    // tabla: posiciones del torneo, una fila por equipo:
    // [puesto, equipo, puntos, jugados, ganados, empatados, perdidos, goles a favor, en contra].
    { id:"minis", nombre:"Minis", dia:"Domingos", hora:"10:30",   // ⚠️ confirmar horario de Minis (no está en FeMeBal)
      nombresCortos:true, jugadoras:[], partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto"},{f:"2026-08-16",c:"L",r:"Independiente"},{f:"2026-08-23",c:"V",r:"Colegio Ward"},
      {f:"2026-08-30",c:"L",r:"Boca Juniors"},{f:"2026-09-06",c:"V",r:"Banfield"},{f:"2026-09-13",c:"L",r:"Villa Modelo"},
      {f:"2026-09-20",c:"V",r:"Vélez Sarsfield"},{f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},
      {f:"2026-10-11",c:"L",r:"La Patriada"},{f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},
      {f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},{f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ]},
    { id:"infantiles", nombre:"Infantiles", division:"Infantiles · División C", dia:"Domingos", hora:"10:30",
      nombresCortos:true, jugadoras:[], partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"35-15"},{f:"2026-08-16",c:"L",r:"Independiente",g:"27-7"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"15-21"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"21-12"},{f:"2026-09-06",c:"V",r:"Banfield",g:"27-20"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"32-13"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"23-8"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},
      {f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"C.I.D. Moreno",21,7,7,0,0,155,110],
      [2,"Ateneo Don Bosco",19,7,6,0,1,180,96],
      [3,"La Patriada",19,7,6,0,1,192,120],
      [4,"Polvorines",19,7,6,0,1,121,95],
      [5,"Sagrado Corazón",18,6,6,0,0,158,63],
      [6,"Muñiz",16,6,5,0,1,167,120],
      [7,"Colegio Ward",15,6,4,1,1,127,101],
      [8,"Estrella de Boedo",13,7,2,2,3,157,158],
      [9,"Hurlingham",12,6,3,0,3,120,109],
      [10,"Banfield",11,7,2,0,5,140,180],
      [11,"Vélez Sarsfield",9,7,1,0,6,101,157],
      [12,"Independiente",8,6,1,0,5,91,117],
      [13,"Villa Modelo",8,6,1,0,5,103,160],
      [14,"Boca Juniors",7,6,0,1,5,81,135],
      [15,"Cedem Caseros",7,7,0,0,7,96,173],
      [16,"Círculo de Villa Devoto",6,6,0,0,6,110,205]
    ] },
    { id:"menores", nombre:"Menores", division:"Menores · División C", dia:"Domingos", hora:"11:30",
      nombresCortos:true, jugadoras:[
      "Martina Antero", "Sofia Ballares", "Matilda Barrera", "Victoria Bassi", "Celeste Bello",
      "Pilar Bustamante", "Mia Calo", "Macarena De León", "Guillemina Fortunato", "Emilia Greco",
      "Celina Kronemberg", "Victoria Kyanco", "Valentina Manchi", "Luana Martinez", "Helena Paz",
      "Martina Rosales", "Lupe Sosa", "Nina Stambullian", "Isabella Stoll", "Agustina Villa", "Julieta Villa",
      "Serena Zabatta"
    ], partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"25-19"},{f:"2026-08-16",c:"L",r:"Independiente",g:"23-29"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"22-37"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"26-23"},{f:"2026-09-06",c:"V",r:"Banfield",g:"31-19"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"43-23"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield",g:"25-24"},
      {f:"2026-09-27",c:"L",r:"Cedem Caseros"},{f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},
      {f:"2026-10-25",c:"V",r:"Muñiz"},{f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},
      {f:"2026-11-15",c:"V",r:"Sagrado Corazón"},{f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Colegio Ward",18,6,6,0,0,198,100],
      [2,"La Patriada",18,6,6,0,0,217,123],
      [3,"Independiente",18,6,6,0,0,188,106],
      [4,"C.I.D. Moreno",15,6,4,1,1,145,123],
      [5,"Sagrado Corazón",14,6,4,0,2,155,110],
      [6,"Ateneo Don Bosco",14,6,4,0,2,170,150],
      [7,"Vélez Sarsfield",14,6,4,0,2,140,127],
      [8,"Cedem Caseros",14,7,3,1,3,136,138],
      [9,"Hurlingham",12,6,2,2,2,147,154],
      [10,"Polvorines",12,7,2,1,4,107,123],
      [11,"Boca Juniors",10,6,1,2,3,120,139],
      [12,"Estrella de Boedo",9,6,1,1,4,132,168],
      [13,"Banfield",8,6,1,0,5,114,177],
      [14,"Villa Modelo",8,6,1,0,5,119,192],
      [15,"Muñiz",6,6,0,0,6,112,166],
      [16,"Círculo de Villa Devoto",6,6,0,0,6,92,196]
    ] },
    { id:"cadetas", nombre:"Cadetas", division:"Cadetes · División C", dia:"Domingos", hora:"13:00",
      nombresCortos:true, jugadoras:[
      "Luciana Chiesa", "Abril Coria", "Isabella Greco", "Elilia Juarez Leikam", "Ema Rosello", "Maria Eugenia Rotta"
    ], partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"21-19"},{f:"2026-08-16",c:"L",r:"Independiente",g:"17-30"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"17-25"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"20-24"},{f:"2026-09-06",c:"V",r:"Banfield",g:"16-19"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"26-31"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield"},{f:"2026-09-27",c:"L",r:"Cedem Caseros"},
      {f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},{f:"2026-10-25",c:"V",r:"Muñiz"},
      {f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},{f:"2026-11-15",c:"V",r:"Sagrado Corazón"},
      {f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Banfield",18,6,6,0,0,131,103],
      [2,"Vélez Sarsfield",17,6,5,1,0,116,102],
      [3,"Independiente",16,6,5,0,1,149,126],
      [4,"Villa Modelo",14,6,4,0,2,137,128],
      [5,"Colegio Ward",14,6,3,2,1,135,130],
      [6,"Cedem Caseros",13,6,3,1,2,137,123],
      [7,"Sagrado Corazón",13,6,3,1,2,143,141],
      [8,"Polvorines",12,6,2,2,2,124,118],
      [9,"C.I.D. Moreno",12,6,3,0,3,124,123],
      [10,"Muñiz",10,6,2,0,4,103,106],
      [11,"Estrella de Boedo",10,6,2,0,4,133,137],
      [12,"La Patriada",10,6,2,0,4,109,123],
      [13,"Hurlingham",9,6,1,1,4,106,112],
      [14,"Boca Juniors",8,6,1,0,5,91,111],
      [15,"Círculo de Villa Devoto",8,6,1,0,5,135,159],
      [16,"Ateneo Don Bosco",8,6,1,0,5,117,148]
    ] },
    { id:"juveniles", nombre:"Juveniles", division:"Juveniles · División C", dia:"Domingos", hora:"14:30",
      nombresCortos:true, jugadoras:[
      "Julieta Antero", "Valentina Antero", "Camila Dib", "Antonella Durzo", "Uma Estanga", "Angela Farias",
      "Renata Giachello", "Martina Gomez", "Isabella Scarfo", "Luciana Toledo"
    ], partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"17-34"},{f:"2026-08-16",c:"L",r:"Independiente",g:"20-29"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"24-28"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"21-17"},{f:"2026-09-06",c:"V",r:"Banfield",g:"19-28"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"21-25"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield"},{f:"2026-09-27",c:"L",r:"Cedem Caseros"},
      {f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},{f:"2026-10-25",c:"V",r:"Muñiz"},
      {f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},{f:"2026-11-15",c:"V",r:"Sagrado Corazón"},
      {f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Círculo de Villa Devoto",18,6,6,0,0,204,118],
      [2,"Polvorines",18,6,6,0,0,198,156],
      [3,"Sagrado Corazón",16,6,5,0,1,206,164],
      [4,"Cedem Caseros",16,6,5,0,1,178,144],
      [5,"Banfield",14,6,4,0,2,146,137],
      [6,"Villa Modelo",14,6,4,0,2,142,143],
      [7,"Hurlingham",12,6,3,0,3,140,128],
      [8,"Colegio Ward",12,6,3,0,3,174,171],
      [9,"Boca Juniors",12,6,3,0,3,147,150],
      [10,"Independiente",12,6,3,0,3,157,170],
      [11,"La Patriada",10,6,2,0,4,138,137],
      [12,"Vélez Sarsfield",10,6,2,0,4,143,161],
      [13,"Ateneo Don Bosco",8,6,1,0,5,122,161],
      [14,"C.I.D. Moreno",8,6,1,0,5,123,164],
      [15,"Muñiz",6,6,0,0,6,101,155],
      [16,"Estrella de Boedo",6,6,0,0,6,156,216]
    ] },
    { id:"juniors", nombre:"Juniors", division:"Junior · División C", dia:"Domingos", hora:"16:00",
      jugadoras:[
      "Jazmin Alarcon", "Mia Badaracco", "Katia Cuomo", "Julia Damario", "Camila Gomez", "Patricia Marsico",
      "Sofia Marsico", "Thayssa Montali", "Milagros Mosqueda", "Catalina Ravazzano", "Emilia Zarantonello"
    ], partidos:[
      {f:"2026-08-09",c:"V",r:"Círculo de Villa Devoto",g:"23-34"},{f:"2026-08-16",c:"L",r:"Independiente",g:"36-31"},
      {f:"2026-08-23",c:"V",r:"Colegio Ward",g:"35-32"},{f:"2026-08-30",c:"L",r:"Boca Juniors",g:"30-31"},{f:"2026-09-06",c:"V",r:"Banfield",g:"29-16"},
      {f:"2026-09-13",c:"L",r:"Villa Modelo",g:"26-36"},{f:"2026-09-20",c:"V",r:"Vélez Sarsfield"},{f:"2026-09-27",c:"L",r:"Cedem Caseros"},
      {f:"2026-10-04",c:"V",r:"Hurlingham"},{f:"2026-10-11",c:"L",r:"La Patriada"},{f:"2026-10-25",c:"V",r:"Muñiz"},
      {f:"2026-11-01",c:"L",r:"Polvorines"},{f:"2026-11-08",c:"V",r:"C.I.D. Moreno"},{f:"2026-11-15",c:"V",r:"Sagrado Corazón"},
      {f:"2026-11-22",c:"L",r:"Estrella de Boedo"}
    ], tabla:[
      [1,"Villa Modelo",18,6,6,0,0,203,148],
      [2,"Círculo de Villa Devoto",18,6,6,0,0,177,134],
      [3,"Vélez Sarsfield",16,6,5,0,1,160,115],
      [4,"Boca Juniors",14,6,4,0,2,183,144],
      [5,"Estrella de Boedo",14,6,4,0,2,198,160],
      [6,"Cedem Caseros",14,6,4,0,2,160,135],
      [7,"Sagrado Corazón",14,6,4,0,2,177,158],
      [8,"C.I.D. Moreno",12,6,3,0,3,160,137],
      [9,"Ateneo Don Bosco",12,6,3,0,3,179,180],
      [10,"Muñiz",12,6,3,0,3,133,150],
      [11,"Polvorines",11,6,2,1,3,138,160],
      [12,"La Patriada",10,6,2,0,4,141,185],
      [13,"Banfield",8,6,1,0,5,112,169],
      [14,"Colegio Ward",7,6,0,1,5,151,176],
      [15,"Hurlingham",6,6,0,0,6,126,163],
      [16,"Independiente",6,6,0,0,6,126,210]
    ] },
    { id:"masculino", nombre:"Cuarta caballeros", division:"Mayores · 4º División", dia:"Domingos", hora:"18:00", sponsor:"Ladran Sancho", jugadoras:[
      "Lionel Benitez", "Patricio Britez", "Maximiliano Burakoski", "Valentin Carriego", "Martin Casco",
      "Guillermo Corbelli", "Agustin Fernandez", "Fabian Franco", "Gabriel Franco", "Enzo Golnner",
      "Maximiliano Gomez", "Lucas Guillermon", "Agustin Iacuzzi", "Leonel Legal", "Leandro Maggi",
      "Julian Ponce", "Leandro Salvetti", "Marcelo Sanchez", "Matias Solis", "Matias Vallejos",
      "Martin Vega", "Mariano Magnani"
    ], partidos:[
      {f:"2026-08-09",c:"V",r:"Almirante Brown",g:"13-28"},{f:"2026-08-16",c:"L",r:"Dep. Laferrere",g:"18-19"},
      {f:"2026-08-23",c:"V",r:"Federal Juniors",g:"21-23"},{f:"2026-08-30",c:"L",r:"General Las Heras",g:"19-25"},
      {f:"2026-09-06",c:"V",r:"Dorrego",h:"20:15",g:"28-27"},{f:"2026-09-13",c:"L",r:"Ferrocarril Mitre",g:"27-37"},
      {f:"2026-09-20",c:"libre"},{f:"2026-09-27",c:"libre"},{f:"2026-10-04",c:"V",r:"Defensores de Glew"},{f:"2026-10-11",c:"L",r:"Talleres"},
      {f:"2026-10-25",c:"V",r:"Ducilo"},{f:"2026-11-01",c:"L",r:"San Telmo"},{f:"2026-11-08",c:"V",r:"El Portugués"},
      {f:"2026-11-15",c:"V",r:"Círculo General Belgrano"},{f:"2026-11-22",c:"L",r:"Escobar"}
    ], tabla:[
      [1,"Almirante Brown",17,6,5,1,0,207,139],
      [2,"Defensores de Glew",16,6,5,0,1,126,100],
      [3,"Ferrocarril Mitre",16,6,5,0,1,187,164],
      [4,"El Portugués",16,7,4,1,2,161,161],
      [5,"Escobar",15,6,4,1,1,148,138],
      [6,"General Las Heras",14,6,4,0,2,185,167],
      [7,"Talleres",14,6,4,0,2,97,94],
      [8,"Ducilo",14,6,4,0,2,109,111],
      [9,"Federal Juniors",12,6,3,0,3,159,164],
      [10,"San Telmo",12,6,3,0,3,100,108],
      [11,"Ateneo Don Bosco",11,7,2,0,5,128,159],
      [12,"Dep. Laferrere",10,6,2,0,4,130,151],
      [13,"Dorrego",9,6,1,1,4,135,144],
      [14,"Círculo General Belgrano",5,6,1,0,4,84,132]
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
    fotografa: { nombre:"JZ Audiovisuales", ig:"https://instagram.com/" },   // ⚠️ pegar el Instagram real de JZ Audiovisuales
    albumes: [
      { titulo:"Minis", fotos:[] },
      { titulo:"Infantiles", fotos:[] },
      { titulo:"Menores", fotos:[] },
      { titulo:"Cadetas", fotos:[] },
      { titulo:"Juveniles", fotos:[] },
      { titulo:"Juniors", fotos:[] },
      { titulo:"Primera damas", fotos:[] },
      { titulo:"Tercera damas", fotos:[] },
      { titulo:"Cuarta caballeros", fotos:[
        { src:"fotos/cuarta-caballeros/dep-laferrere-01.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 1)" },
        { src:"fotos/cuarta-caballeros/dep-laferrere-02.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 2)" },
        { src:"fotos/cuarta-caballeros/dep-laferrere-03.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 3)" },
        { src:"fotos/cuarta-caballeros/dep-laferrere-04.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 4)" },
        { src:"fotos/cuarta-caballeros/dep-laferrere-05.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 5)" },
        { src:"fotos/cuarta-caballeros/dep-laferrere-06.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 6)" },
        { src:"fotos/cuarta-caballeros/dep-laferrere-07.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 7)" },
        { src:"fotos/cuarta-caballeros/dep-laferrere-08.jpg", alt:"Cuarta caballeros contra Dep. Laferrere, 16/08 de local (foto 8)" }
      ] },
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
    { titulo:"Primera damas", marcas:[
      { n:"Franco Liontix",         logo:"fotos/sponsors/franco-lionti.png",                url:"", fondoOscuro:false },
      { n:"Agua Tronador",          logo:"fotos/sponsors/tronador.png",                     url:"", fondoOscuro:false },
      { n:"Delicias Doradas",       logo:"fotos/sponsors/delicias-doradas.png",             url:"", fondoOscuro:false },
      { n:"De Cascia",              logo:"fotos/sponsors/de-cascia.png",                    url:"", fondoOscuro:false },
      { n:"Carnevale",              logo:"fotos/sponsors/carnevale.png",                    url:"", fondoOscuro:false },
      { n:"Lic. Kine Vale Trelles", logo:"fotos/sponsors/valeria-trelles-kinesiologia.png", url:"", fondoOscuro:false }
    ]},
    { titulo:"Tercera damas", marcas:[
      { n:"Textil Calchaquí",       logo:"fotos/sponsors/cortinas-calchaqui.png",     url:"", fondoOscuro:false },
      { n:"Supermercado Magdalena", logo:"fotos/sponsors/magdalena-supermercado.png", url:"", fondoOscuro:false },
      { n:"Sorar RRHH",             logo:"fotos/sponsors/sora-rrhh.png",              url:"", fondoOscuro:false },
      { n:"JL Javier López",        logo:"fotos/sponsors/javier-lopez.png",           url:"", fondoOscuro:false },
      { n:"Bernuts",                logo:"fotos/sponsors/bernutss.png",               url:"", fondoOscuro:false },
      { n:"Agua Tronador",          logo:"fotos/sponsors/tronador.png",               url:"", fondoOscuro:false }
    ]},
    { titulo:"Cuarta caballeros", marcas:[
      { n:"Ladran Sancho",        logo:"fotos/sponsors/ladran-sancho.png", url:"", fondoOscuro:false },
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
