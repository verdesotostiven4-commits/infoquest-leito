LESSONS.push(
  {
    id:'soc-human', subject:'estudios', order:1, emoji:'🧬', title:'Origen y evolución del Homo sapiens',
    story:'Viaja millones de años al pasado y reconoce cómo apareció nuestra especie.',
    slides:[
      {title:'La historia comienza en África', text:'Los primeros grupos de la historia humana se desarrollaron en África. A lo largo de millones de años existieron diferentes especies de homínidos.', remember:'Origen de la humanidad = África', visual:'human-origin-map'},
      {title:'Una larga evolución', text:'El libro presenta grupos como Ardipithecus, Australopithecus, Paranthropus y Homo. No vivieron todos al mismo tiempo: representan etapas de un proceso muy largo.', remember:'La evolución ocurrió durante millones de años', visual:'human-timeline'},
      {title:'Nuestra especie', text:'Homo sapiens es la especie humana actual. Apareció en África hace aproximadamente 200 000 años y es la única especie humana que existe hoy.', remember:'Homo sapiens = nosotros', visual:'human'},
      {title:'Capacidades importantes', text:'El lenguaje, el pensamiento, la cooperación, el arte y la fabricación de herramientas ayudaron a los humanos a adaptarse y sobrevivir.', remember:'Pensar · comunicar · cooperar', visual:'skills'},
      {title:'Expansión por el mundo', text:'Desde África, grupos de Homo sapiens se desplazaron hacia Asia y Europa y, mucho después, llegaron a América.', remember:'África → Asia y Europa → América', visual:'migration-world'}
    ],
    game:{type:'sequence', prompt:'Ordena la expansión general del Homo sapiens.', items:['África','Asia y Europa','América']},
    questions:[
      Q('e1','¿En qué continente comenzó la historia de la humanidad?',['África','América','Europa','Oceanía'],0,'Los primeros grupos humanos se desarrollaron en África.','🌍'),
      Q('e2','¿Qué es Homo sapiens?',['La especie humana actual','Una herramienta de piedra','Una región natural','Un dinosaurio'],0,'Todos los seres humanos actuales pertenecemos a Homo sapiens.','🧬'),
      Q('e3','¿Hace aproximadamente cuánto apareció Homo sapiens?',['Hace 200 000 años','Hace 200 años','Hace 2 000 años','Hace 20 millones de años'],0,'El material de Leo señala aproximadamente 200 000 años en África.','⏳'),
      Q('e4','¿Cuál de estos grupos aparece antes del género Homo en la secuencia estudiada?',['Australopithecus','Homo sapiens moderno','Primeros pobladores de América','Incas'],0,'Australopithecus forma parte de etapas anteriores de la evolución humana.','🦴'),
      Q('e5','¿Qué capacidad favoreció la supervivencia humana?',['Cooperar y comunicarse','Vivir siempre aislados','No fabricar herramientas','Evitar aprender'],0,'La cooperación y el lenguaje permitieron compartir conocimientos.','🤝'),
      Q('e6','¿Cuál es la única especie humana que vive actualmente?',['Homo sapiens','Homo neanderthalensis','Australopithecus afarensis','Paranthropus boisei'],0,'Las demás especies humanas desaparecieron.','👨‍👩‍👧‍👦')
    ]
  },
  {
    id:'soc-routes', subject:'estudios', order:2, emoji:'🗺️', title:'Rutas del poblamiento de América',
    story:'Lee el mapa, compara teorías y sigue la ruta principal hacia América.',
    slides:[
      {title:'La teoría de Bering', text:'Durante una glaciación, el nivel del mar bajó y dejó expuesta Beringia, una franja entre Asia y Alaska. Grupos humanos pudieron cruzarla y avanzar por América.', remember:'Asia → Beringia → Alaska → América', visual:'beringia-map'},
      {title:'Ruta costera', text:'Otra propuesta indica que algunos grupos avanzaron bordeando las costas del Pacífico y aprovechando recursos marinos.', remember:'Ruta costera = borde del Pacífico', visual:'coastal-route-map'},
      {title:'Otras teorías estudiadas', text:'El libro también menciona la teoría del Atlántico marítimo y la teoría del Pacífico. Se estudian como propuestas para explicar posibles llegadas.', remember:'Bering · costera · Atlántico · Pacífico', visual:'routes-map'},
      {title:'La más aceptada en clase', text:'En el enfoque escolar, la teoría de Bering es la principal y más aceptada para explicar el poblamiento inicial de América.', remember:'Principal = teoría de Bering', visual:'beringia'},
      {title:'Llegada a Sudamérica y Ecuador', text:'Con el paso de miles de años, los grupos se desplazaron hacia el sur del continente hasta llegar al territorio que hoy es Ecuador.', remember:'Norte de América → Centroamérica → Sudamérica', visual:'america-south-map'}
    ],
    game:{type:'sequence', prompt:'Ordena la ruta principal del poblamiento.', items:['Asia','Beringia','Alaska','Resto de América']},
    questions:[
      Q('e7','¿Qué era Beringia?',['Una franja de tierra entre Asia y Alaska','Una ciudad del Ecuador','Una especie humana','Un océano'],0,'Apareció cuando bajó el nivel del mar durante una glaciación.','🧊'),
      Q('e8','¿Cuál es la secuencia correcta de la teoría de Bering?',['Asia → Beringia → Alaska → América','América → África → Asia','Europa → Galápagos → Perú','África → Antártida → Ecuador'],0,'La ruta principal parte de Asia y entra por Alaska.','➡️'),
      Q('e9','¿Qué ruta sigue principalmente el borde del océano Pacífico?',['La ruta costera','La ruta de los Andes','La ruta amazónica','La ruta ecuatorial'],0,'La propuesta costera plantea desplazamientos por el litoral.','🌊'),
      Q('e10','¿Cuál es la teoría principal o más aceptada en el enfoque escolar?',['La teoría de Bering','La teoría de Galápagos','La teoría de Quito','La teoría del Amazonas'],0,'Es la explicación central trabajada en el libro y el cuaderno.','🗺️'),
      Q('e11','¿Qué otras teorías aparecen en el libro?',['Costera, Atlántico marítimo y Pacífico','Solar, lunar y volcánica','Sierra, Costa y Amazonía','Romana, griega y egipcia'],0,'El mapa del libro presenta cuatro propuestas de poblamiento.','🧭'),
      Q('e12','¿Cómo llegaron finalmente grupos humanos al territorio del actual Ecuador?',['Desplazándose hacia el sur de América','Viajando desde Ecuador hacia Asia','Saliendo de Galápagos hacia África','Desde Europa en automóviles'],0,'El poblamiento avanzó gradualmente por el continente.','👣')
    ]
  },
  {
    id:'soc-nomads', subject:'estudios', order:3, emoji:'🏕️', title:'Vida de los primeros pobladores',
    story:'Descubre cómo vivían, se organizaban y conseguían alimento los primeros grupos.',
    slides:[
      {title:'¿Qué significa nómada?', text:'Los primeros pobladores no tenían una residencia permanente. Se trasladaban buscando alimento, agua, refugio y mejores condiciones.', remember:'Nómada = se desplaza', visual:'nomad'},
      {title:'Actividades para sobrevivir', text:'Cazaban animales, pescaban y recolectaban frutos, semillas y raíces. Estas actividades dependían directamente de la naturaleza.', remember:'Caza · pesca · recolección', visual:'activities'},
      {title:'Refugios temporales', text:'Vivían en cuevas, cavernas o refugios hechos con ramas, pieles y otros materiales disponibles.', remember:'Refugio temporal, no vivienda fija', visual:'temporary-shelter'},
      {title:'Organización colectiva', text:'Se agrupaban en pequeñas comunidades o clanes. Compartían tareas y conocimientos para protegerse y conseguir recursos.', remember:'Trabajar juntos ayudó a sobrevivir', visual:'community'},
      {title:'Fuego, alimento y arte', text:'Aprendieron a conservar el fuego, cocinar alimentos y expresar ideas mediante dibujos, símbolos y objetos.', remember:'Fuego · cocina · arte', visual:'fire-art'}
    ],
    game:{type:'pick', prompt:'Selecciona actividades de los primeros pobladores.', items:['🏹 Cazar','🎣 Pescar','🫐 Recolectar','🏕️ Construir refugios temporales','🏭 Trabajar en fábricas','🚗 Conducir automóviles'], correct:[0,1,2,3]},
    questions:[
      Q('e13','¿Qué significa llevar una vida nómada?',['Moverse de un lugar a otro sin residencia fija','Vivir siempre en una gran ciudad','No buscar alimento','Tener una casa permanente'],0,'Los nómadas se desplazaban según sus necesidades.','🚶'),
      Q('e14','¿Cuáles eran actividades principales?',['Caza, pesca y recolección','Comercio por Internet','Trabajo industrial','Conducción de trenes'],0,'Así obtenían alimentos y materiales.','🏹'),
      Q('e15','¿Dónde podían vivir temporalmente?',['En cuevas y refugios de ramas y pieles','En edificios modernos','En estaciones espaciales','En fábricas'],0,'Sus refugios eran sencillos y temporales.','🏕️'),
      Q('e16','¿Por qué se organizaban en grupos?',['Para colaborar, protegerse y sobrevivir','Para evitar compartir conocimientos','Para vivir completamente aislados','Para dejar de buscar alimento'],0,'El trabajo colectivo aumentaba sus posibilidades de supervivencia.','👥'),
      Q('e17','¿Qué utilidad tenía el fuego?',['Calentar, iluminar, proteger y cocinar','Fabricar computadoras','Mover automóviles','Crear electricidad doméstica'],0,'El fuego transformó la vida cotidiana.','🔥'),
      Q('e18','¿Cuál es un ejemplo de recolección?',['Buscar frutos, semillas y raíces','Cazar un venado','Pescar con arpón','Fabricar una lanza'],0,'Recolectar significa obtener productos vegetales disponibles.','🫐')
    ]
  },
  {
    id:'soc-tools', subject:'estudios', order:4, emoji:'🪨', title:'Herramientas y materiales',
    story:'Entra al taller paleolítico y relaciona cada material con su uso.',
    slides:[
      {title:'Piedra: obsidiana y basalto', text:'Con piedras resistentes fabricaban puntas, cuchillos, raspadores, hachas y otros objetos para cortar, perforar o cazar.', remember:'Piedra = cortar y golpear', visual:'stone-tools'},
      {title:'Hueso y madera', text:'El hueso servía para agujas, arpones y puntas. La madera se usaba en lanzas, mangos y estructuras de refugios.', remember:'Hueso = agujas · madera = lanzas', visual:'bone-wood'},
      {title:'Piel y cuero', text:'De los animales aprovechaban pieles y cuero para ropa, calzado, bolsas, cuerdas y techos.', remember:'Piel y cuero = vestir y proteger', visual:'hide-tools'},
      {title:'Fibras vegetales', text:'Cabuya, paja, algodón y otras fibras podían convertirse en cuerdas, tejidos, canastos y partes de refugios.', remember:'Fibras = unir, tejer y construir', visual:'fiber-tools'},
      {title:'Nada se desperdiciaba', text:'Carne, huesos, pieles, madera, piedra y fibras se aprovechaban según sus propiedades.', remember:'Material → herramienta → utilidad', visual:'tools'}
    ],
    game:{type:'classify', prompt:'Clasifica cada material.', categories:['Animal','Piedra','Vegetal'], items:[['Hueso',0],['Cuero',0],['Piel',0],['Obsidiana',1],['Basalto',1],['Cabuya',2],['Paja',2],['Algodón',2],['Madera',2]]},
    questions:[
      Q('e19','¿Qué materiales pétreos aparecen en el cuadernillo?',['Obsidiana y basalto','Plástico y vidrio','Hierro y aluminio','Papel y cartón'],0,'Ambos son tipos de piedra usados para herramientas.','🪨'),
      Q('e20','¿Para qué podía servir el hueso?',['Para agujas, arpones y puntas','Para crear gasolina','Para fabricar pantallas','Para producir plástico'],0,'El hueso podía tallarse y afilarse.','🦴'),
      Q('e21','¿Qué podían fabricar con pieles y cuero?',['Ropa, bolsas, cuerdas y techos','Computadoras y teléfonos','Carreteras y puentes de acero','Libros impresos'],0,'Estos materiales protegían del clima y servían para transportar objetos.','🧥'),
      Q('e22','¿Cuál es una fibra vegetal?',['Cabuya','Hueso','Cuero','Obsidiana'],0,'La cabuya proviene de una planta.','🌿'),
      Q('e23','¿Qué herramienta se relaciona con la caza?',['Lanza o flecha','Termómetro','Teclado','Regla escolar'],0,'Las puntas de piedra o hueso se colocaban en lanzas y flechas.','🏹'),
      Q('e24','¿Por qué usaban materiales de la naturaleza?',['Porque eran los recursos disponibles en su entorno','Porque existían fábricas modernas','Porque compraban plástico industrial','Porque no necesitaban herramientas'],0,'Aprovechaban las propiedades de cada material.','🛠️')
    ]
  },
  {
    id:'soc-regions', subject:'estudios', order:5, emoji:'🇪🇨', title:'Regiones naturales del Ecuador',
    story:'Recorre el mapa de Leo y reconoce nombres, ubicación y características.',
    slides:[
      {title:'Cuatro regiones', text:'Ecuador tiene cuatro regiones naturales: Costa, Sierra, Amazonía e Insular. También se usan los nombres Litoral, Interandina, Oriente y Galápagos.', remember:'Costa · Sierra · Amazonía · Insular', visual:'ecuador-regions-map'},
      {title:'Costa o Litoral', text:'Está al oeste. Tiene llanuras, playas, manglares y clima generalmente cálido. El océano Pacífico influye en su paisaje y actividades.', remember:'Costa = oeste, playas y llanuras', visual:'coast-region-map'},
      {title:'Sierra o Interandina', text:'Ocupa la zona central atravesada por la cordillera de los Andes. Tiene montañas, volcanes, valles y temperaturas que cambian con la altura.', remember:'Sierra = Andes, volcanes y valles', visual:'sierra-region-map'},
      {title:'Amazonía u Oriente', text:'Está al este. Predominan la selva tropical, los grandes ríos, la humedad y una enorme biodiversidad.', remember:'Amazonía = este, selva y ríos', visual:'amazon-region-map'},
      {title:'Insular o Galápagos', text:'Está formada por las islas Galápagos en el océano Pacífico. Son islas de origen volcánico con especies únicas.', remember:'Insular = islas Galápagos', visual:'insular-region-map'}
    ],
    game:{type:'classify', prompt:'Relaciona cada característica con su región.', categories:['Costa','Sierra','Amazonía','Insular'], items:[['Playas y manglares',0],['Llanuras cálidas',0],['Montañas y volcanes',1],['Cordillera de los Andes',1],['Selva y grandes ríos',2],['Oriente del país',2],['Islas Galápagos',3],['Origen volcánico insular',3]]},
    questions:[
      Q('e25','¿Cuáles son las cuatro regiones naturales del Ecuador?',['Costa, Sierra, Amazonía e Insular','Norte, sur, este y oeste','Quito, Cuenca, Loja y Manta','Playa, bosque, río y ciudad'],0,'Son las cuatro regiones trabajadas en el libro y el cuaderno.','🇪🇨'),
      Q('e26','¿Cuál es otro nombre de la Costa?',['Litoral','Interandina','Oriente','Galápagos'],0,'Costa y Litoral nombran la misma región.','🌊'),
      Q('e27','¿Cuál es otro nombre de la Sierra?',['Interandina','Litoral','Oriente','Insular'],0,'La Sierra está entre las cordilleras andinas.','⛰️'),
      Q('e28','¿Cuál es otro nombre de la Amazonía?',['Oriente','Litoral','Interandina','Galápagos'],0,'La Amazonía se encuentra al este del país.','🌳'),
      Q('e29','¿Qué región tiene montañas, volcanes y valles?',['Sierra','Costa','Amazonía','Insular'],0,'La cordillera de los Andes atraviesa la Sierra.','🌋'),
      Q('e30','¿Qué región está formada por las islas Galápagos?',['Insular','Costa','Sierra','Amazonía'],0,'Galápagos constituye la Región Insular.','🐢')
    ]
  },
  {
    id:'soc-borders', subject:'estudios', order:6, emoji:'🧭', title:'Mapa y límites del Ecuador',
    story:'Activa la brújula y aprende qué rodea al territorio ecuatoriano.',
    slides:[
      {title:'Ubicación del Ecuador', text:'Ecuador se encuentra en la parte noroccidental de América del Sur y está atravesado por la línea ecuatorial.', remember:'Ecuador = noroccidente de Sudamérica', visual:'ecuador-location-map'},
      {title:'Límite norte', text:'Al norte, Ecuador limita con Colombia.', remember:'Norte = Colombia', visual:'ecuador-borders-map'},
      {title:'Límites sur y este', text:'Al sur y al este, Ecuador limita con Perú.', remember:'Sur y este = Perú', visual:'ecuador-borders-map'},
      {title:'Límite oeste', text:'Al oeste se encuentra el océano Pacífico. Allí también se ubican, separadas del continente, las islas Galápagos.', remember:'Oeste = océano Pacífico', visual:'ecuador-borders-map'},
      {title:'Código de brújula', text:'Usa los puntos cardinales: norte arriba, sur abajo, este a la derecha y oeste a la izquierda.', remember:'N arriba · S abajo · E derecha · O izquierda', visual:'compass-map'}
    ],
    game:{type:'match', prompt:'Une cada dirección con el límite correcto.', pairs:[['Norte','Colombia'],['Sur','Perú'],['Este','Perú'],['Oeste','Océano Pacífico']]},
    questions:[
      Q('e31','¿Con qué país limita Ecuador al norte?',['Colombia','Perú','Brasil','Chile'],0,'Colombia está al norte del Ecuador.','⬆️'),
      Q('e32','¿Con qué país limita Ecuador al sur?',['Perú','Colombia','Bolivia','Venezuela'],0,'Perú está al sur.','⬇️'),
      Q('e33','¿Con qué país limita Ecuador al este?',['Perú','Colombia','Argentina','Panamá'],0,'El límite oriental también corresponde a Perú.','➡️'),
      Q('e34','¿Qué se encuentra al oeste del Ecuador?',['Océano Pacífico','Océano Atlántico','Mar Caribe','Brasil'],0,'La costa ecuatoriana se abre al Pacífico.','⬅️'),
      Q('e35','¿En qué parte de América del Sur está Ecuador?',['En la parte noroccidental','En el extremo sur','En el centro de Brasil','En el océano Atlántico'],0,'Ecuador se ubica al noroeste de Sudamérica.','🌎'),
      Q('e36','¿Qué punto cardinal queda normalmente a la derecha en un mapa?',['Este','Oeste','Norte','Sur'],0,'En la orientación convencional, el este está a la derecha.','🧭')
    ]
  }
);
