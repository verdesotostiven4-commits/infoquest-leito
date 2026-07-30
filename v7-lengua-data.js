LESSONS.push(
{
 id:'len-dialogo',subject:'lengua',order:1,emoji:'💬',title:'El diálogo literario',story:'Entra al teatro de las palabras y aprende a reconocer quién habla, qué dice y cómo se escribe una conversación.',
 slides:[
  {title:'¿Qué es un diálogo literario?',text:'Es una conversación escrita entre dos o más personajes dentro de una historia. Permite conocer lo que piensan, sienten o hacen.',remember:'Diálogo = conversación entre personajes',visual:'dialogue'},
  {title:'La raya y las intervenciones',text:'La raya larga — se coloca al inicio para indicar que un personaje comienza a hablar. Cada intervención debe mantener el sentido de la conversación.',remember:'— indica quién comienza a hablar',visual:'punctuation'},
  {title:'Personajes y acotaciones',text:'Los personajes pronuncian las palabras. Las acotaciones explican acciones, gestos, emociones o lugares y no forman parte de lo que el personaje dice.',remember:'Personaje habla · acotación describe',visual:'characters'},
  {title:'Formal e informal',text:'El diálogo formal se usa con autoridades, docentes o desconocidos y emplea expresiones respetuosas. El informal se usa con amigos y familiares.',remember:'Formal = respeto · informal = confianza',visual:'formal'}
 ],
 game:{type:'classify',prompt:'Clasifica cada expresión.',categories:['Formal','Informal'],items:[['Buenos días, señor. ¿Podría ayudarme?',0],['Hola, ¿qué tal?',1],['Con su permiso, profesora.',0],['Vamos a jugar al parque.',1],['Disculpe, ¿puedo pasar?',0],['¡Nos vemos mañana!',1]]},
 questions:[
  Q('l1','¿Qué es un diálogo literario?',['Una conversación entre personajes de una historia','Una lista de palabras','Una receta','Una noticia sin personajes'],0,'El diálogo reproduce una conversación dentro de una obra.','💬'),
  Q('l2','¿Qué signo suele iniciar la intervención de un personaje?',['La raya larga —','La coma ,','El paréntesis ()','El punto y coma ;'],0,'La raya señala que comienza a hablar un personaje.','—'),
  Q('l3','¿Qué hace una acotación?',['Describe acciones, gestos o lugares','Habla siempre en primera persona','Indica una suma','Reemplaza a todos los personajes'],0,'La acotación aporta información que los personajes no dicen.','🎭'),
  Q('l4','¿Cuál expresión es formal?',['Buenos días, señora. ¿Me permite pasar?','Hola, pana, vamos a jugar','¡Qué chévere verte!','Nos vemos luego'],0,'Usa tratamiento respetuoso y una petición cortés.','🤝'),
  Q('l5','¿Cuál respuesta continúa con sentido “¿Qué libro estás leyendo?”?',['Estoy leyendo Las aventuras de Leo','A las cinco de la tarde','No, gracias','Mi favorito es el león'],0,'La respuesta debe contestar directamente qué libro lee.','📖')
 ]
},
{
 id:'len-comunicacion',subject:'lengua',order:2,emoji:'📡',title:'El circuito de la comunicación',story:'Reconstruye un mensaje perdido identificando cada pieza del circuito de la comunicación.',
 slides:[
  {title:'Emisor y receptor',text:'El emisor crea y envía el mensaje. El receptor lo recibe, interpreta y comprende.',remember:'Emisor envía · receptor recibe',visual:'communication'},
  {title:'Mensaje y canal',text:'El mensaje es la información que se comunica. El canal es el medio por donde viaja: voz, papel, teléfono, internet o radio.',remember:'Mensaje = información · canal = medio',visual:'message'},
  {title:'Código',text:'El código es el conjunto de signos usados para entendernos: un idioma, gestos, imágenes o símbolos.',remember:'Código = signos compartidos',visual:'code'},
  {title:'Contexto',text:'El contexto es el lugar, momento o situación en la que ocurre la comunicación y ayuda a interpretar correctamente el mensaje.',remember:'Contexto = situación comunicativa',visual:'context'}
 ],
 game:{type:'match',prompt:'Une cada elemento con su definición.',pairs:[['Emisor','Envía el mensaje'],['Receptor','Recibe el mensaje'],['Mensaje','Información comunicada'],['Canal','Medio por donde viaja'],['Código','Signos que se usan'],['Contexto','Lugar o situación']]},
 questions:[
  Q('l6','Bruno envía un audio a su papá. ¿Quién es el emisor?',['Bruno','El papá','El teléfono','El idioma'],0,'Bruno es quien crea y envía el mensaje.','📤'),
  Q('l7','¿Qué es el receptor?',['La persona que recibe y comprende el mensaje','El medio por donde viaja','La información enviada','El lugar'],0,'El receptor recibe e interpreta.','📥'),
  Q('l8','En un mensaje de voz por WhatsApp, ¿cuál es el canal?',['El teléfono o la aplicación','El idioma español','Bruno','La noticia'],0,'El canal es el medio utilizado para transmitirlo.','📱'),
  Q('l9','¿Cuál puede ser un código?',['El idioma español','Una persona','La cocina','El teléfono apagado'],0,'Un idioma es un sistema de signos compartidos.','Aa'),
  Q('l10','¿Qué es el contexto?',['La situación o lugar donde ocurre la comunicación','La persona que habla','Solo las palabras','El aparato electrónico'],0,'El contexto rodea y da sentido a la comunicación.','🌍')
 ]
},
{
 id:'len-diario',subject:'lengua',order:3,emoji:'📔',title:'El diario personal',story:'Abre el cofre de los recuerdos y aprende cómo se escribe una entrada de diario.',
 slides:[
  {title:'¿Qué es un diario?',text:'Es un texto personal donde alguien narra experiencias, pensamientos y sentimientos que vivió.',remember:'Diario = experiencias y sentimientos',visual:'diary'},
  {title:'Sus características',text:'Suele llevar fecha, narrar acontecimientos, estar escrito en primera persona y ser privado.',remember:'Fecha · hechos · yo · privado',visual:'calendar'},
  {title:'Primera persona',text:'El autor usa palabras y verbos como yo, fui, sentí, jugué, pensé o aprendí porque cuenta su propia experiencia.',remember:'Yo cuento lo que viví',visual:'firstperson'},
  {title:'Orden de una entrada',text:'Primero se escribe la fecha. Después se cuentan los hechos en orden y se pueden expresar emociones o una reflexión final.',remember:'Fecha → hechos → sentimientos',visual:'sequence'}
 ],
 game:{type:'sequence',prompt:'Ordena una entrada de diario.',items:['Escribir la fecha','Contar qué ocurrió','Explicar cómo me sentí','Cerrar con una reflexión']},
 questions:[
  Q('l11','¿Qué característica pertenece a un diario personal?',['Lleva fecha y puede escribirse en primera persona','Siempre contiene instrucciones','Solo presenta datos científicos','No narra acontecimientos'],0,'La fecha y la primera persona son rasgos centrales.','📔'),
  Q('l12','¿Cuál oración está en primera persona?',['Hoy jugué con mis amigos','Ellos jugaron en el parque','La niña juega cada día','Ustedes fueron temprano'],0,'“Jugué” indica que quien escribe cuenta su propia acción.','🙋'),
  Q('l13','¿Qué debe aparecer primero en una entrada de diario?',['La fecha','La moraleja','Una lista de materiales','El nombre del receptor'],0,'La fecha ubica el acontecimiento en el tiempo.','📅'),
  Q('l14','¿Cuál texto parece una entrada de diario?',['15 de mayo. Hoy fui al parque y me sentí muy feliz.','Mezcle harina, huevos y leche.','La Tierra gira alrededor del Sol.','Se venden cuadernos nuevos.'],0,'Tiene fecha, experiencia y sentimiento personal.','✍️'),
  Q('l15','¿Para qué puede servir escribir un diario?',['Para recordar experiencias y expresar sentimientos','Para enviar señales de tránsito','Para reemplazar un diccionario','Para resolver operaciones'],0,'Ayuda a conservar recuerdos y reflexionar.','💭')
 ]
},
{
 id:'len-tema',subject:'lengua',order:4,emoji:'🔎',title:'Tema e ideas principales',story:'Encuentra la idea escondida dentro de cada texto y elige el mejor título.',
 slides:[
  {title:'El tema',text:'El tema es la idea más general de la que trata un texto. Se expresa con pocas palabras, por ejemplo: los delfines o la alimentación saludable.',remember:'Tema = de qué trata',visual:'topic'},
  {title:'Idea principal',text:'La idea principal dice lo más importante que el texto afirma sobre el tema y puede escribirse como una oración completa.',remember:'Idea principal = mensaje más importante',visual:'mainidea'},
  {title:'Ideas secundarias',text:'Las ideas secundarias explican, describen, dan ejemplos o amplían la idea principal.',remember:'Secundarias = detalles y ejemplos',visual:'details'},
  {title:'Título adecuado',text:'Un buen título resume el contenido general sin ser demasiado amplio ni mencionar un detalle pequeño.',remember:'Título = resumen breve y preciso',visual:'title'}
 ],
 game:{type:'classify',prompt:'¿Es tema general o detalle?',categories:['Tema','Detalle'],items:[['Los delfines',0],['Saltan fuera del agua',1],['La alimentación saludable',0],['Las frutas aportan vitaminas',1],['Los árboles',0],['Dan sombra y producen oxígeno',1]]},
 questions:[
  Q('l16','¿Qué es el tema de un texto?',['La idea general de la que trata','La última palabra','Un dibujo decorativo','Solo el nombre del autor'],0,'El tema responde “¿de qué trata?”.','🔎'),
  Q('l17','Texto: “Los delfines viven en el mar, son inteligentes y se comunican con sonidos”. ¿Cuál es el tema?',['Los delfines','Los sonidos fuertes','El agua salada','Los animales terrestres'],0,'Todas las ideas se refieren a los delfines.','🐬'),
  Q('l18','¿Qué función cumplen las ideas secundarias?',['Amplían o explican la idea principal','Cambian de tema siempre','Eliminan el título','Solo indican la fecha'],0,'Aportan detalles, ejemplos o explicaciones.','🧩'),
  Q('l19','Texto: “La bicicleta es saludable, no contamina y ayuda a mejorar la condición física”. ¿Cuál es el mejor título?',['Beneficios de la bicicleta','Una rueda rota','Los automóviles rápidos','El color de mi bicicleta'],0,'Resume todas las ventajas mencionadas.','🚲'),
  Q('l20','¿Cuál es una idea principal?',['Los árboles son esenciales para la vida porque producen oxígeno y protegen el suelo','Las hojas pueden ser verdes','Ayer vi un árbol pequeño','Una rama cayó al piso'],0,'Resume la importancia general de los árboles.','🌳')
 ]
},
{
 id:'len-fabula',subject:'lengua',order:5,emoji:'🦁',title:'La fábula y la moraleja',story:'Los animales del bosque necesitan ordenar sus historias y descubrir qué enseñanza dejan.',
 slides:[
  {title:'¿Qué es una fábula?',text:'Es una narración breve, muchas veces protagonizada por animales que hablan o actúan como personas.',remember:'Fábula = relato breve con enseñanza',visual:'fable'},
  {title:'Personajes y acciones',text:'Los personajes enfrentan un problema y sus decisiones producen consecuencias.',remember:'Personaje + problema + consecuencia',visual:'animals'},
  {title:'La moraleja',text:'Es la enseñanza que deja la historia. Puede aparecer escrita al final o deducirse a partir de las acciones.',remember:'Moraleja = enseñanza',visual:'lesson'},
  {title:'Orden de la historia',text:'Una narración tiene inicio, desarrollo y final. Para comprenderla hay que ordenar correctamente los acontecimientos.',remember:'Inicio → problema → solución → moraleja',visual:'sequence'}
 ],
 game:{type:'match',prompt:'Relaciona la situación con su enseñanza.',pairs:[['La liebre se confía y pierde','La constancia vence a la arrogancia'],['El león ayuda al ratón','Todos podemos ser útiles'],['La hormiga trabaja y guarda alimento','Conviene ser responsable'],['Dos amigos se apoyan','La amistad se demuestra con acciones']]},
 questions:[
  Q('l21','¿Qué es una moraleja?',['La enseñanza que deja una historia','La fecha de publicación','La lista de personajes','El lugar donde se imprime'],0,'Resume el aprendizaje de la fábula.','⭐'),
  Q('l22','¿Quiénes suelen protagonizar muchas fábulas?',['Animales con características humanas','Solo científicos','Únicamente objetos sin acciones','Personas históricas reales'],0,'Los animales hablan, piensan o actúan como personas.','🦊'),
  Q('l23','En “La liebre y la tortuga”, la liebre se confía y la tortuga persevera. ¿Cuál es la moraleja?',['La constancia puede vencer a la arrogancia','Siempre hay que dormir en una carrera','Ser rápido nunca sirve','No se debe caminar'],0,'La tortuga gana gracias a su esfuerzo constante.','🐢'),
  Q('l24','¿Cuál es el orden básico de una narración?',['Inicio, desarrollo y final','Final, título y coma','Moraleja, receta y diálogo','Pregunta, suma y dibujo'],0,'La historia presenta, desarrolla y cierra los acontecimientos.','📚'),
  Q('l25','¿Qué permite identificar la moraleja?',['Las consecuencias de las acciones de los personajes','El tamaño de la letra','El número de páginas','El color de la portada'],0,'La enseñanza se deduce de lo que ocurre y sus resultados.','💡')
 ]
},
{
 id:'len-palabras',subject:'lengua',order:6,emoji:'🧩',title:'Sustantivos, adjetivos y verbos',story:'Clasifica las palabras para activar la máquina de las oraciones.',
 slides:[
  {title:'Sustantivos',text:'Nombran personas, animales, objetos, lugares o ideas: niño, perro, escuela, amistad.',remember:'Sustantivo = nombre',visual:'nouns'},
  {title:'Adjetivos',text:'Describen o califican al sustantivo: casa grande, perro rápido, flores bonitas.',remember:'Adjetivo = cualidad',visual:'adjectives'},
  {title:'Verbos',text:'Expresan acciones, estados o sentimientos: correr, estudiar, estar, sentir.',remember:'Verbo = acción o estado',visual:'verbs'},
  {title:'Concordancia',text:'El adjetivo debe concordar con el sustantivo en género y número: niño alto, niña alta, flores bonitas.',remember:'Concuerdan género y número',visual:'agreement'}
 ],
 game:{type:'classify',prompt:'Clasifica cada palabra.',categories:['Sustantivo','Adjetivo','Verbo'],items:[['perro',0],['rápido',1],['corre',2],['escuela',0],['bonitas',1],['estudiamos',2],['amistad',0],['feliz',1],['jugar',2]]},
 questions:[
  Q('l26','¿Cuál palabra es un sustantivo?',['escuela','rápido','cantar','bonita'],0,'“Escuela” nombra un lugar.','🏫'),
  Q('l27','¿Cuál palabra es un adjetivo?',['pequeño','árbol','jugar','ellos'],0,'“Pequeño” expresa una cualidad.','🎨'),
  Q('l28','¿Cuál palabra es un verbo?',['correr','pelota','feliz','grande'],0,'“Correr” expresa una acción.','🏃'),
  Q('l29','¿Cuál adjetivo concuerda con “niñas”?',['alegres','alegre','alegros','alegra'],0,'Debe estar en femenino plural.','👧'),
  Q('l30','En “Las flores son bonitas”, ¿cuál es el adjetivo?',['bonitas','flores','son','las'],0,'“Bonitas” describe a las flores.','🌸')
 ]
},
{
 id:'len-verbos',subject:'lengua',order:7,emoji:'⏰',title:'El verbo: tiempo, persona y modo',story:'Viaja por el pasado, el presente y el futuro para dominar las formas verbales.',
 slides:[
  {title:'Tiempos verbales',text:'El presente indica lo que ocurre ahora; el pasado, lo que ya ocurrió; y el futuro, lo que ocurrirá.',remember:'Ahora · antes · después',visual:'time'},
  {title:'Persona y número',text:'Primera persona: yo/nosotros. Segunda: tú/ustedes. Tercera: él, ella/ellos. Puede ser singular o plural.',remember:'1.ª habla · 2.ª escucha · 3.ª se menciona',visual:'persons'},
  {title:'Modos verbales',text:'Indicativo expresa hechos; subjuntivo deseos o posibilidades; imperativo órdenes o pedidos.',remember:'Hecho · deseo · orden',visual:'modes'},
  {title:'Formas simples y compuestas',text:'Una forma simple tiene una palabra: canté. Una compuesta usa haber más participio: he cantado.',remember:'Simple: canté · compuesta: he cantado',visual:'compound'}
 ],
 game:{type:'classify',prompt:'Clasifica por tiempo verbal.',categories:['Presente','Pasado','Futuro'],items:[['Hoy estudio Lengua',0],['Ayer jugué fútbol',1],['Mañana viajaré',2],['Ahora leo un cuento',0],['Anoche cenamos temprano',1],['Luego haré la tarea',2]]},
 questions:[
  Q('l31','¿En qué tiempo está “Ayer jugué con mis amigos”?',['Pasado','Presente','Futuro','Imperativo'],0,'La acción ya ocurrió.','⏪'),
  Q('l32','¿En qué tiempo está “Mañana estudiaré para la prueba”?',['Futuro','Pasado','Presente','Infinitivo'],0,'La acción ocurrirá después.','⏩'),
  Q('l33','¿Qué persona es “Nosotros estudiamos”?',['Primera persona plural','Segunda persona singular','Tercera persona plural','Primera persona singular'],0,'“Nosotros” incluye a quien habla y es plural.','👥'),
  Q('l34','¿Qué modo expresa una orden?',['Imperativo','Indicativo','Subjuntivo','Infinitivo'],0,'El imperativo se usa para ordenar o pedir.','📣'),
  Q('l35','¿Cuál forma verbal es compuesta?',['He terminado','Terminé','Termino','Terminaré'],0,'Usa el auxiliar haber más el participio terminado.','🔗')
 ]
},
{
 id:'len-ortografia',subject:'lengua',order:8,emoji:'🔤',title:'Ortografía: b, g y j',story:'Cruza el laberinto ortográfico escogiendo letras y palabras correctamente escritas.',
 slides:[
  {title:'B después de M',text:'Después de la letra m se escribe b: tambor, cambio, ambulancia, sombrero.',remember:'M + B: cambio, tambor',visual:'letters'},
  {title:'Verbos en -bir y -buir',text:'Los verbos terminados en -bir y -buir se escriben con b: escribir, recibir, subir, contribuir. Excepciones: hervir, servir y vivir.',remember:'-bir/-buir con b · salvo hervir, servir, vivir',visual:'rule'},
  {title:'Uso de la J',text:'Se escriben con j palabras como jirafa, jabalí, jarra, jabón, joya, juez, junio, jalea y ejercicio.',remember:'Jirafa · jabón · juez · ejercicio',visual:'letterj'},
  {title:'Distinguir G y J',text:'Hay palabras con sonido parecido que se escriben diferente. Conviene reconocer su forma correcta: gelatina lleva g; jefe y jirafa llevan j.',remember:'Gelatina con g · jefe con j',visual:'spelling'}
 ],
 game:{type:'pick',prompt:'Selecciona solo las palabras correctamente escritas.',items:['cambio','canvio','ambulancia','anbulancia','escribir','escrivir','jirafa','girafa','gelatina','jelatina'],correct:[0,2,4,6,8]},
 questions:[
  Q('l36','¿Cuál palabra está correctamente escrita?',['tambor','tanbor','tamvor','tanvor'],0,'Después de m se escribe b.','🥁'),
  Q('l37','¿Cuál verbo se escribe con b por terminar en -bir?',['recibir','recivir','resivir','rezivir'],0,'Los verbos terminados en -bir suelen llevar b.','📦'),
  Q('l38','¿Cuál es una excepción a la regla de -bir?',['vivir','escribir','recibir','subir'],0,'Hervir, servir y vivir se escriben con v.','⚠️'),
  Q('l39','¿Cuál palabra está correctamente escrita?',['jirafa','girafa','jirrafa','girrafa'],0,'Jirafa se escribe con j.','🦒'),
  Q('l40','¿Cuál palabra se escribe con g?',['gelatina','jelatina','jefe','jabalí'],0,'Gelatina se escribe con g; jefe y jabalí llevan j.','🍮'),
  Q('l41','Completa: “Todos podemos ___ a cuidar el planeta”.',['contribuir','contrivuir','contribuirr','contrivuirr'],0,'Contribuir termina en -buir y se escribe con b.','🌍'),
  Q('l42','¿Cuál grupo está completamente bien escrito?',['juez, junio, jalea y ojo','gues, gunio, galea y ogo','jues, junio, galea y ojo','juez, gunio, jalea y ogo'],0,'Las cuatro formas correctas usan j en juez, junio y jalea.','✅')
 ]
}
);