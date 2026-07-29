LESSONS.push(
  {
    id:'sci-marine', subject:'ciencias', order:1, emoji:'🐢', title:'Ecosistema marino de Galápagos',
    story:'Explora la Reserva Marina y descubre cómo sus seres vivos dependen del agua, la luz y las rocas.',
    slides:[
      {title:'¿Qué es un ecosistema marino?', text:'Es el conjunto de seres vivos del mar y los elementos sin vida con los que se relacionan.', remember:'Seres vivos + ambiente marino', visual:'ocean'},
      {title:'Animales de Galápagos', text:'Tortugas marinas, lobos marinos, tiburones, rayas, peces, pingüinos, iguanas marinas y langostas.', remember:'Gran variedad de especies', visual:'animals'},
      {title:'Biodiversidad', text:'Es la variedad de seres vivos que habitan un lugar. Galápagos posee una biodiversidad marina extraordinaria.', remember:'Biodiversidad = variedad de vida', visual:'biodiversity'},
      {title:'Arrecifes', text:'Brindan refugio y alimento a peces, moluscos y tortugas, y ayudan a proteger las costas.', remember:'Refugio · alimento · protección', visual:'reef'}
    ],
    game:{type:'pick', prompt:'Selecciona los seres vivos del ecosistema marino.', items:['🐢 Tortuga','☀️ Luz solar','🐟 Pez','🪨 Roca','🦭 Lobo marino','💧 Agua'], correct:[0,2,4]},
    questions:[
      Q('c1','¿Qué es un ecosistema marino?',['Seres vivos del mar y su ambiente','Solo el agua del mar','Solo animales grandes','Una playa sin vida'],0,'Incluye organismos y factores no vivos.','🌊'),
      Q('c2','¿Qué significa biodiversidad?',['Variedad de seres vivos','Cantidad de arena','Temperatura del agua','Número de barcos'],0,'Biodiversidad es variedad de vida.','🦎'),
      Q('c3','¿Cuál es un animal marino de Galápagos?',['Iguana marina','Llama','Oso polar','Camello'],0,'La iguana marina es una especie emblemática de Galápagos.','🦎'),
      Q('c4','¿Para qué sirven los arrecifes?',['Dan refugio y alimento y protegen costas','Solo decoran el mar','Secan el agua','Espantan a todos los peces'],0,'Son hábitats muy importantes.','🪸')
    ]
  },
  {
    id:'sci-veda', subject:'ciencias', order:2, emoji:'🛡️', title:'Veda y cuidado del mar',
    story:'Ayuda a proteger a las especies para que puedan crecer y reproducirse.',
    slides:[
      {title:'¿Qué es la veda?', text:'Es un período en el que se prohíbe capturar o pescar una especie para permitir su reproducción y recuperación.', remember:'Veda = tiempo sin captura', visual:'veda'},
      {title:'Animales pequeños o con huevos', text:'No deben capturarse porque aún no se han reproducido o están protegiendo una nueva generación.', remember:'Dejar crecer y reproducirse', visual:'eggs'},
      {title:'Pesca responsable', text:'Respeta tamaños, temporadas, zonas permitidas y especies protegidas.', remember:'Pescar sin destruir', visual:'fishing'},
      {title:'Cuidar la Reserva Marina', text:'No botar basura, evitar la contaminación y proteger los animales y sus hábitats.', remember:'Mar limpio = vida protegida', visual:'cleansea'}
    ],
    game:{type:'classify', prompt:'¿Protege o perjudica el mar?', categories:['Protege','Perjudica'], items:[['Respetar la veda',0],['Capturar langostas con huevos',1],['No botar basura',0],['Pescar animales muy pequeños',1],['Usar pesca responsable',0],['Contaminar el agua',1]]},
    questions:[
      Q('c5','¿Qué es la veda de pesca?',['Período en que se prohíbe capturar una especie','Día para pescar más','Una red de pesca','Un tipo de animal'],0,'Permite que las poblaciones se reproduzcan y recuperen.','🚫🎣'),
      Q('c6','¿Por qué no se captura una langosta con huevos?',['Porque debe reproducirse y proteger la nueva generación','Porque pesa demasiado','Porque no vive en el mar','Porque cambia de color'],0,'Capturarla reduce la reproducción de la especie.','🦞'),
      Q('c7','¿Cuál acción cuida la Reserva Marina?',['No botar basura al mar','Tirar plástico','Capturar crías','Dañar arrecifes'],0,'Evitar la contaminación protege los ecosistemas.','♻️'),
      Q('c8','La pesca responsable sirve para…',['Aprovechar recursos sin destruir las poblaciones','Capturar todo lo posible','Eliminar especies','Contaminar menos solo en tierra'],0,'Busca equilibrio entre uso y conservación.','🎣')
    ]
  },
  {
    id:'sci-ecosystem', subject:'ciencias', order:3, emoji:'🌿', title:'Biótico, abiótico y alimentación',
    story:'Clasifica cada pieza del ecosistema y reconstruye la red de la vida.',
    slides:[
      {title:'Factores bióticos', text:'Son los seres vivos: animales, plantas, algas, hongos y microorganismos.', remember:'Biótico = tiene vida', visual:'biotic'},
      {title:'Factores abióticos', text:'Son elementos sin vida: agua, luz solar, temperatura, aire, suelo y rocas.', remember:'Abiótico = sin vida', visual:'abiotic'},
      {title:'Niveles alimenticios', text:'Productores elaboran alimento; consumidores se alimentan de otros; descomponedores reciclan materia.', remember:'Producir · consumir · descomponer', visual:'foodchain'},
      {title:'Cadena alimenticia', text:'Ejemplo: alga → pez pequeño → pez grande → tiburón. La energía comienza con el Sol.', remember:'La energía pasa de un ser a otro', visual:'chain'}
    ],
    game:{type:'classify', prompt:'Clasifica cada componente.', categories:['Biótico','Abiótico'], items:[['Tortuga',0],['Agua',1],['Alga',0],['Luz solar',1],['Pez',0],['Roca',1],['Bacteria',0],['Temperatura',1]]},
    questions:[
      Q('c9','¿Cuál es un factor biótico?',['Tortuga marina','Agua','Luz solar','Roca'],0,'La tortuga es un ser vivo.','🐢'),
      Q('c10','¿Cuál es un factor abiótico?',['Temperatura','Pez','Alga','Bacteria'],0,'La temperatura no tiene vida.','🌡️'),
      Q('c11','¿Qué hacen los productores?',['Elaboran su propio alimento','Cazan siempre','Destruyen nutrientes','Solo comen carne'],0,'Las plantas y algas producen alimento mediante fotosíntesis.','🌱'),
      Q('c12','¿Qué hacen los descomponedores?',['Reciclan materia orgánica y nutrientes','Producen luz','Congelan el agua','Son siempre peces'],0,'Hongos y bacterias devuelven nutrientes al ambiente.','🍄')
    ]
  },
  {
    id:'sci-heat', subject:'ciencias', order:4, emoji:'🌡️', title:'Calor, temperatura y moléculas',
    story:'Entra al laboratorio térmico y descubre por qué lo caliente y lo frío no significan lo mismo que calor.',
    slides:[
      {title:'Temperatura', text:'Indica qué tan caliente o frío está un cuerpo. Se mide con termómetro, normalmente en grados Celsius.', remember:'Temperatura = medida', visual:'thermometer'},
      {title:'Calor', text:'Es energía que se transfiere del cuerpo con mayor temperatura al de menor temperatura.', remember:'Calor = energía en movimiento', visual:'heatflow'},
      {title:'Equilibrio térmico', text:'Ocurre cuando dos cuerpos en contacto alcanzan la misma temperatura.', remember:'Misma temperatura', visual:'equilibrium'},
      {title:'Dilatación y contracción', text:'Al recibir calor las moléculas se mueven más y suelen separarse: dilatación. Al enfriarse se acercan: contracción.', remember:'Caliente separa · frío acerca', visual:'molecules'}
    ],
    game:{type:'classify', prompt:'¿Calor o temperatura?', categories:['Calor','Temperatura'], items:[['Se mide con termómetro',1],['Pasa del más caliente al más frío',0],['Se expresa en °C',1],['Es energía transferida',0],['Indica qué tan frío está algo',1]]},
    questions:[
      Q('c13','¿Qué es la temperatura?',['Medida de qué tan caliente o frío está un cuerpo','Una sustancia','Solo el calor del Sol','Un tipo de energía eléctrica'],0,'Se mide con termómetro.','🌡️'),
      Q('c14','¿Qué es el calor?',['Energía que se transfiere del más caliente al más frío','La medida en grados','Un objeto caliente','El frío guardado'],0,'El calor fluye por diferencia de temperatura.','🔥'),
      Q('c15','¿Qué es el equilibrio térmico?',['Cuando dos cuerpos alcanzan la misma temperatura','Cuando uno hierve','Cuando se rompe un termómetro','Cuando el Sol se oculta'],0,'Ya no hay transferencia neta de calor.','⚖️'),
      Q('c16','¿Qué ocurre con las moléculas al recibir calor?',['Se mueven más y suelen separarse','Desaparecen','Se detienen por completo','Se convierten en luz'],0,'Ese movimiento puede producir dilatación.','🔴')
    ]
  },
  {
    id:'sci-sun', subject:'ciencias', order:5, emoji:'☀️', title:'Cómo viaja el calor y la energía del Sol',
    story:'Activa tres portales térmicos y descubre por qué el Sol hace posible la vida.',
    slides:[
      {title:'Conducción', text:'El calor pasa por contacto directo, especialmente en sólidos. Ejemplo: una cuchara metálica en sopa caliente.', remember:'Conducción = contacto', visual:'conduction'},
      {title:'Convección', text:'El calor se transporta por el movimiento de líquidos o gases. El fluido caliente sube y el frío baja.', remember:'Convección = movimiento de fluidos', visual:'convection'},
      {title:'Radiación', text:'La energía viaja en ondas y no necesita contacto ni un medio material. Así llega la energía del Sol.', remember:'Radiación = ondas', visual:'radiation'},
      {title:'El Sol, fuente de energía', text:'Da luz y calor, permite la fotosíntesis, mueve el ciclo del agua, influye en el viento y regula la temperatura.', remember:'Sin Sol no habría vida como la conocemos', visual:'sun'}
    ],
    game:{type:'classify', prompt:'Identifica el mecanismo.', categories:['Conducción','Convección','Radiación'], items:[['Cuchara de metal que se calienta',0],['Agua caliente que sube en una olla',1],['Sentir el calor del Sol',2],['Mango metálico caliente por contacto',0],['Aire caliente que asciende',1],['Calor de una fogata a distancia',2]]},
    questions:[
      Q('c17','Una cuchara metálica se calienta en la sopa por…',['Conducción','Convección','Radiación','Contracción'],0,'Hay contacto directo a través del metal.','🥄'),
      Q('c18','El agua caliente que sube y la fría que baja es…',['Convección','Conducción','Radiación','Dilatación'],0,'El calor se mueve con el líquido.','🍲'),
      Q('c19','La energía del Sol llega a la Tierra principalmente por…',['Radiación','Conducción','Convección','Contacto'],0,'Viaja por ondas a través del espacio.','☀️'),
      Q('c20','¿Cuál es una función del Sol?',['Permitir la fotosíntesis y aportar luz y calor','Eliminar toda el agua','Detener el viento','Apagar los ecosistemas'],0,'La energía solar sostiene numerosos procesos de la vida.','🌞')
    ]
  }
);
