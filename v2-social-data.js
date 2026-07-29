LESSONS.push(
  {
    id:'soc-human', subject:'estudios', order:1, emoji:'🧬', title:'Evolución del Homo sapiens',
    story:'Viaja al pasado para descubrir cómo nuestros antepasados desarrollaron habilidades para sobrevivir.',
    slides:[
      {title:'Homo sapiens', text:'Es la especie humana actual. Surgió en África y con el tiempo se dispersó por otros continentes.', remember:'Homo sapiens = ser humano actual', visual:'human'},
      {title:'Cambios importantes', text:'Desarrolló lenguaje, pensamiento, cooperación, herramientas más complejas y formas de arte.', remember:'Pensar · comunicar · cooperar', visual:'skills'},
      {title:'Adaptación', text:'Las personas aprendieron a usar fuego, ropa, refugios y herramientas para vivir en distintos ambientes.', remember:'Adaptarse para sobrevivir', visual:'adapt'},
      {title:'Migraciones', text:'Grupos humanos se desplazaron durante miles de años en busca de alimento, agua y mejores condiciones.', remember:'Moverse y poblar nuevos territorios', visual:'migration'}
    ],
    game:{type:'pick', prompt:'Selecciona habilidades del Homo sapiens.', items:['🗣️ Lenguaje','🧠 Pensamiento','🤝 Cooperación','🛠️ Herramientas','🧊 Vivir sin adaptarse'], correct:[0,1,2,3]},
    questions:[
      Q('e1','¿Qué es Homo sapiens?',['La especie humana actual','Un dinosaurio','Una herramienta','Una región del Ecuador'],0,'Es nuestra especie.','🧬'),
      Q('e2','¿Dónde surgió Homo sapiens?',['En África','En la Antártida','En Galápagos','En Oceanía únicamente'],0,'La evidencia científica sitúa su origen en África.','🌍'),
      Q('e3','¿Cuál fue una habilidad importante?',['Lenguaje y cooperación','No usar herramientas','Vivir siempre solos','No desplazarse'],0,'La cooperación favoreció la supervivencia.','🤝'),
      Q('e4','¿Por qué migraban los grupos humanos?',['Buscaban alimento, agua y mejores condiciones','Querían perderse','No conocían el fuego','Solo viajaban por deporte'],0,'Las migraciones respondían a necesidades de supervivencia.','🚶')
    ]
  },
  {
    id:'soc-settlers', subject:'estudios', order:2, emoji:'🏹', title:'Primeros pobladores de América',
    story:'Sigue las huellas de los primeros grupos que llegaron al continente americano.',
    slides:[
      {title:'Ruta principal estudiada', text:'Durante la última glaciación, grupos humanos pasaron desde Asia hacia América por Beringia, una zona de tierra y hielo entre Siberia y Alaska.', remember:'Asia → Beringia → Alaska → América', visual:'beringia'},
      {title:'Nómadas', text:'No vivían permanentemente en un solo lugar. Se desplazaban buscando alimento, agua y refugio.', remember:'Nómada = se desplaza', visual:'nomad'},
      {title:'Actividades', text:'Cazaban, pescaban, recolectaban frutos, semillas y raíces, y fabricaban refugios.', remember:'Caza · pesca · recolección', visual:'activities'},
      {title:'Herramientas', text:'Usaban piedra, madera, hueso y fibras para crear puntas de lanza, cuchillos, raspadores, agujas y arpones.', remember:'Piedra · madera · hueso', visual:'tools'}
    ],
    game:{type:'sequence', prompt:'Ordena la ruta principal estudiada.', items:['Asia','Beringia','Alaska','Resto de América']},
    questions:[
      Q('e5','¿Por dónde llegaron muchos de los primeros pobladores de América?',['Por Beringia desde Asia hacia Alaska','Desde América hacia Asia','Solo por el océano Atlántico','Desde Galápagos'],0,'La ruta principal enseñada pasa por Beringia.','🧊'),
      Q('e6','¿Qué significa nómada?',['Persona o grupo que se desplaza de un lugar a otro','Persona que nunca camina','Habitante de una ciudad moderna','Agricultor con casa fija'],0,'Los nómadas no tenían residencia permanente.','🚶'),
      Q('e7','¿Qué actividades realizaban?',['Caza, pesca y recolección','Uso de computadoras','Conducción de automóviles','Trabajo en fábricas'],0,'Dependían directamente de los recursos naturales.','🏹'),
      Q('e8','¿Con qué fabricaban herramientas?',['Piedra, madera y hueso','Plástico y aluminio industrial','Vidrio electrónico','Papel solamente'],0,'Usaban materiales disponibles en la naturaleza.','🪨')
    ]
  },
  {
    id:'soc-regions', subject:'estudios', order:3, emoji:'🇪🇨', title:'Regiones del Ecuador',
    story:'Recorre las cuatro regiones naturales y reconoce sus características.',
    slides:[
      {title:'Costa o Litoral', text:'Está al oeste. Predominan llanuras, playas, manglares y clima cálido.', remember:'Costa = oeste y mar', visual:'coast'},
      {title:'Sierra o Interandina', text:'Atraviesa el centro del país. Tiene montañas, volcanes y valles de la cordillera de los Andes.', remember:'Sierra = Andes', visual:'andes'},
      {title:'Amazonía u Oriente', text:'Está al este. Posee selva tropical, grandes ríos y alta biodiversidad.', remember:'Amazonía = este y selva', visual:'amazon'},
      {title:'Insular o Galápagos', text:'Está formada por las islas Galápagos en el océano Pacífico y tiene especies únicas.', remember:'Insular = islas Galápagos', visual:'islands'}
    ],
    game:{type:'classify', prompt:'Relaciona cada característica con su región.', categories:['Costa','Sierra','Amazonía','Insular'], items:[['Playas y manglares',0],['Volcanes y valles andinos',1],['Selva y grandes ríos',2],['Islas Galápagos',3],['Océano Pacífico',3],['Cordillera de los Andes',1]]},
    questions:[
      Q('e9','¿Cuáles son las cuatro regiones naturales del Ecuador?',['Costa, Sierra, Amazonía e Insular','Norte, sur, este y oeste','Quito, Guayaquil, Cuenca y Loja','Playa, bosque, ciudad y río'],0,'También se llaman Litoral, Interandina, Oriente y Galápagos.','🇪🇨'),
      Q('e10','¿Qué región tiene montañas y volcanes andinos?',['Sierra','Costa','Amazonía','Insular'],0,'La Sierra está atravesada por los Andes.','⛰️'),
      Q('e11','¿Qué región corresponde a Galápagos?',['Insular','Costa','Sierra','Amazonía'],0,'La región Insular está formada por las islas Galápagos.','🐢'),
      Q('e12','¿Qué caracteriza a la Amazonía?',['Selva tropical, ríos y biodiversidad','Playas secas únicamente','Volcanes nevados solamente','Islas oceánicas'],0,'Está al oriente del país.','🌳')
    ]
  },
  {
    id:'soc-borders', subject:'estudios', order:4, emoji:'🧭', title:'Límites del Ecuador',
    story:'Activa la brújula nacional y aprende qué rodea al Ecuador.',
    slides:[
      {title:'Norte', text:'Ecuador limita al norte con Colombia.', remember:'Norte = Colombia', visual:'north'},
      {title:'Sur y este', text:'Ecuador limita al sur y al este con Perú.', remember:'Sur y este = Perú', visual:'southeast'},
      {title:'Oeste', text:'Al oeste se encuentra el océano Pacífico.', remember:'Oeste = océano Pacífico', visual:'west'},
      {title:'Ubicación', text:'Ecuador está en la parte noroccidental de América del Sur y es atravesado por la línea ecuatorial.', remember:'América del Sur · línea ecuatorial', visual:'equator'}
    ],
    game:{type:'match', prompt:'Une la dirección con el límite.', pairs:[['Norte','Colombia'],['Sur','Perú'],['Este','Perú'],['Oeste','Océano Pacífico']]},
    questions:[
      Q('e13','¿Con qué país limita Ecuador al norte?',['Colombia','Perú','Brasil','Chile'],0,'Al norte está Colombia.','⬆️'),
      Q('e14','¿Con qué país limita al sur y al este?',['Perú','Colombia','Argentina','Bolivia'],0,'Perú limita con Ecuador al sur y al este.','↘️'),
      Q('e15','¿Qué se encuentra al oeste del Ecuador?',['Océano Pacífico','Océano Atlántico','Mar Caribe','Cordillera del Himalaya'],0,'La costa ecuatoriana mira al Pacífico.','🌊'),
      Q('e16','¿En qué continente está Ecuador?',['América del Sur','Europa','Asia','África'],0,'Ecuador está en la zona noroccidental de Sudamérica.','🌎')
    ]
  }
);
