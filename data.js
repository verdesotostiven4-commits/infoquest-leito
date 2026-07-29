const missions = [
  {
    id:'computer', number:1, emoji:'🖥️', title:'Construye la computadora', accent:'#22d3ee',
    description:'Computadora, monitor, CPU, teclado, mouse e impresora.',
    facts:[
      ['Computadora','Máquina electrónica que recibe, procesa y guarda información para realizar tareas.'],
      ['Partes principales','Monitor o pantalla, CPU o torre, teclado y mouse.'],
      ['Impresora','Es un periférico útil, pero no es una de las cuatro partes principales del equipo.']
    ], visual:'pc'
  },
  {
    id:'hardware', number:2, emoji:'⚙️', title:'Hardware vs. software', accent:'#37e89b',
    description:'Clasifica lo que puedes tocar y los programas que utilizas.',
    facts:[
      ['Hardware','Partes físicas de la computadora que podemos ver y tocar.'],
      ['Software','Programas e instrucciones que hacen funcionar la computadora.'],
      ['Ejemplos','Hardware: mouse, teclado, pantalla, CPU, impresora. Software: Windows, Word, Paint, PowerPoint y Chrome.']
    ], visual:'cards'
  },
  {
    id:'mouse', number:3, emoji:'🖱️', title:'Academia del mouse', accent:'#ff6fb5',
    description:'Botones, rueda, puntero y partes del teclado.',
    facts:[
      ['Mouse','Dispositivo que permite mover el puntero y seleccionar elementos.'],
      ['Partes','Botón izquierdo, botón derecho y rueda o scroll.'],
      ['Rueda','Sirve para desplazarse hacia arriba y hacia abajo por una página.']
    ], visual:'mouse'
  },
  {
    id:'windows', number:4, emoji:'🪟', title:'Rescate de ventanas', accent:'#ffd54a',
    description:'Minimizar, maximizar, cerrar, crear carpetas y encender el equipo.',
    facts:[
      ['Botones de ventana','— minimizar, □ maximizar o restaurar y ✕ cerrar.'],
      ['Crear carpeta','Clic derecho → Nuevo → Carpeta → escribir nombre → Enter.'],
      ['Encender','Conectar, presionar el botón de CPU/torre, encender monitor y esperar el inicio.']
    ], visual:'window'
  },
  {
    id:'shortcuts', number:5, emoji:'⌨️', title:'Cámara de atajos', accent:'#a78bfa',
    description:'CTRL y Windows: los poderes secretos del teclado.',
    facts:[
      ['Ctrl + C / V','Copiar / Pegar.'],['Ctrl + X / Z','Cortar / Deshacer.'],
      ['Windows','Win + E: Explorador; Win + R: Ejecutar; Win + L: bloquear; Win + D: escritorio.']
    ], visual:'keyboard'
  }
];

const questions = [
  {id:'q1',cat:'computer',q:'¿Qué es una computadora?',v:'💻',a:['Una máquina electrónica que procesa información','Una mesa para escribir','Un juguete sin programas','Solamente una pantalla'],c:0,e:'Una computadora recibe, procesa, guarda y muestra información.'},
  {id:'q2',cat:'computer',q:'¿Cuáles son las cuatro partes principales que se estudian en clase?',v:'🧩',a:['Pantalla, CPU, teclado y mouse','Impresora, cámara, audífonos y papel','Internet, Word, Paint y Windows','Mesa, silla, cable y cuaderno'],c:0,e:'Las cuatro partes principales son pantalla, CPU o torre, teclado y mouse.'},
  {id:'q3',cat:'computer',q:'¿Cuál NO es una parte principal de la computadora?',v:'🖨️',a:['Impresora','Mouse','Teclado','Pantalla'],c:0,e:'La impresora es un periférico; no forma parte del grupo principal pedido en el pizarrón.'},
  {id:'q4',cat:'computer',q:'¿Qué es la pantalla o monitor?',v:'🖥️',a:['La parte que muestra imágenes e información','La parte que imprime hojas','La parte que escribe sola','Un programa de dibujo'],c:0,e:'El monitor muestra visualmente la información de la computadora.'},
  {id:'q5',cat:'computer',q:'¿Qué función cumple la CPU?',v:'🧠',a:['Procesa instrucciones y controla las operaciones','Mueve el puntero','Imprime documentos','Solo reproduce música'],c:0,e:'La CPU procesa la información y coordina el funcionamiento del equipo.'},
  {id:'q6',cat:'computer',q:'¿Qué es un teclado?',v:'⌨️',a:['Dispositivo con teclas para escribir y dar órdenes','Programa para pintar','Parte que muestra videos','Rueda del mouse'],c:0,e:'El teclado permite introducir letras, números y comandos.'},
  {id:'q7',cat:'mouse',q:'¿Qué es un mouse?',v:'🖱️',a:['Dispositivo que mueve el puntero y permite seleccionar','Un programa para escribir','Una pantalla pequeña','Un tipo de impresora'],c:0,e:'El mouse controla el puntero y permite hacer clic o seleccionar.'},
  {id:'q8',cat:'mouse',q:'¿Cómo se llama la flecha que aparece en la pantalla?',v:'➤',a:['Puntero o cursor','Carpeta','Ventana','Tecla'],c:0,e:'La flecha se llama puntero; también se acepta cursor.'},
  {id:'q9',cat:'mouse',q:'¿Para qué sirve la rueda del mouse?',v:'↕️',a:['Para subir y bajar por una página','Para apagar el monitor','Para copiar archivos','Para escribir números'],c:0,e:'La rueda o scroll desplaza el contenido verticalmente.'},
  {id:'q10',cat:'mouse',q:'¿Cuáles son las partes básicas del mouse?',v:'🖱️',a:['Botón izquierdo, botón derecho y rueda','Pantalla, CPU y cable','Letras, números y espacio','Copiar, pegar y cortar'],c:0,e:'Un mouse común tiene botón izquierdo, botón derecho y rueda central.'},
  {id:'q11',cat:'mouse',q:'¿Cuál grupo corresponde a partes del teclado?',v:'⌨️',a:['Alfanuméricas, función, control, navegación y numérico','Monitor, torre, mouse y parlante','Archivo, carpeta, ventana y papel','Izquierdo, derecho y rueda'],c:0,e:'El teclado se organiza en zonas: alfanumérica, funciones, control, navegación y numérica.'},
  {id:'q12',cat:'hardware',q:'¿Qué es hardware?',v:'🔩',a:['Las partes físicas que se pueden tocar','Los programas de la computadora','Una página de internet','Un dibujo guardado'],c:0,e:'Hardware significa el conjunto de componentes físicos.'},
  {id:'q13',cat:'hardware',q:'¿Qué es software?',v:'💿',a:['Los programas e instrucciones','Las partes de plástico y metal','La mesa donde está la computadora','Solamente el cable de corriente'],c:0,e:'Software son los programas y sistemas que no se pueden tocar.'},
  {id:'q14',cat:'hardware',q:'¿Cuál grupo contiene solo hardware?',v:'🧰',a:['Mouse, teclado, monitor, CPU e impresora','Windows, Word, Paint, Chrome y PowerPoint','Word, monitor, Paint y teclado','Internet, CPU, Windows y mouse'],c:0,e:'Todos esos objetos son físicos y se pueden tocar.'},
  {id:'q15',cat:'hardware',q:'¿Cuál grupo contiene solo software?',v:'✨',a:['Windows, Word, Paint, PowerPoint y Chrome','Mouse, CPU, pantalla, teclado e impresora','Teclado, Word, monitor y Windows','Cable, Paint, mouse y carpeta'],c:0,e:'Windows, Word, Paint, PowerPoint y Chrome son programas.'},
  {id:'q16',cat:'hardware',q:'Paint es…',v:'🎨',a:['Software, porque es un programa','Hardware, porque se puede tocar','Una parte del mouse','Una tecla del teclado'],c:0,e:'Paint es una aplicación, por eso pertenece al software.'},
  {id:'q17',cat:'hardware',q:'El teclado es…',v:'⌨️',a:['Hardware, porque se puede tocar','Software, porque es un programa','Una carpeta','Un acceso directo'],c:0,e:'El teclado es una pieza física del equipo.'},
  {id:'q18',cat:'windows',q:'¿Qué hace el botón — de una ventana?',v:'—',a:['Minimiza la ventana','Cierra la ventana','La borra para siempre','Maximiza la ventana'],c:0,e:'Minimizar oculta temporalmente la ventana en la barra de tareas.'},
  {id:'q19',cat:'windows',q:'¿Qué hace el botón □ de una ventana?',v:'□',a:['Maximiza o restaura la ventana','Apaga la computadora','Imprime la pantalla','Abre una carpeta nueva'],c:0,e:'El cuadrado cambia el tamaño: maximiza o restaura.'},
  {id:'q20',cat:'windows',q:'¿Qué hace el botón ✕?',v:'✕',a:['Cierra la ventana','La minimiza','La copia','Mueve el cursor'],c:0,e:'La X cierra la ventana o aplicación.'},
  {id:'q21',cat:'windows',q:'Elige el orden correcto para crear una carpeta en el escritorio.',v:'📁',a:['Clic derecho → Nuevo → Carpeta → nombre → Enter','Enter → apagar → Nuevo → imprimir','Clic izquierdo → Paint → cerrar → copiar','Windows + L → teclado → monitor'],c:0,e:'Esos son los pasos normales para crear una carpeta en Windows.'},
  {id:'q22',cat:'windows',q:'¿Qué debes hacer primero para encender una computadora de escritorio?',v:'🔌',a:['Verificar que esté conectada a la corriente','Abrir Paint','Crear una carpeta','Presionar Ctrl + Z'],c:0,e:'Primero comprobamos la alimentación; después encendemos torre/CPU y monitor.'},
  {id:'q23',cat:'windows',q:'Después de verificar la conexión, ¿qué sigue?',v:'⏻',a:['Presionar el botón de encendido de la CPU o torre','Mover la rueda del mouse','Abrir una impresora','Presionar Ctrl + C'],c:0,e:'Se presiona el botón de encendido y se espera que inicie el sistema.'},
  {id:'q24',cat:'shortcuts',q:'¿Qué hace Ctrl + C?',v:'Ctrl + C',a:['Copiar','Pegar','Cortar','Deshacer'],c:0,e:'C de “copiar”. Guarda una copia temporal del elemento seleccionado.'},
  {id:'q25',cat:'shortcuts',q:'¿Qué hace Ctrl + V?',v:'Ctrl + V',a:['Pegar','Copiar','Cerrar','Bloquear'],c:0,e:'Ctrl + V pega lo que fue copiado o cortado.'},
  {id:'q26',cat:'shortcuts',q:'¿Qué hace Ctrl + X?',v:'Ctrl + X',a:['Cortar','Pegar','Deshacer','Explorador'],c:0,e:'Ctrl + X corta el elemento para moverlo a otro lugar.'},
  {id:'q27',cat:'shortcuts',q:'¿Qué hace Ctrl + Z?',v:'Ctrl + Z',a:['Deshacer la última acción','Cerrar la ventana','Bloquear el equipo','Mostrar el escritorio'],c:0,e:'Ctrl + Z revierte o deshace la acción más reciente.'},
  {id:'q28',cat:'shortcuts',q:'¿Qué abre Windows + E?',v:'Win + E',a:['Explorador de archivos','Ejecutar','Paint','La papelera'],c:0,e:'E se asocia con Explorer: abre el Explorador de archivos.'},
  {id:'q29',cat:'shortcuts',q:'¿Qué abre Windows + R?',v:'Win + R',a:['La ventana Ejecutar','El Explorador','La calculadora siempre','El teclado virtual'],c:0,e:'Win + R abre el cuadro Ejecutar.'},
  {id:'q30',cat:'shortcuts',q:'¿Qué hace Windows + L?',v:'Win + L',a:['Bloquea el equipo','Cierra todos los archivos','Abre una carpeta','Pega un texto'],c:0,e:'Win + L bloquea la sesión. En el juego se practica sin pulsarlo realmente.'},
  {id:'q31',cat:'shortcuts',q:'¿Qué hace Windows + D?',v:'Win + D',a:['Muestra u oculta el escritorio','Borra el disco','Abre Word','Deshace una acción'],c:0,e:'Win + D muestra el escritorio y puede restaurar las ventanas.'},
  {id:'q32',cat:'shortcuts',q:'Quieres mover un texto: primero lo cortas y luego lo pegas. ¿Qué usas?',v:'✂️ ➜ 📋',a:['Ctrl + X y después Ctrl + V','Ctrl + C y Ctrl + Z','Win + L y Win + R','Ctrl + V y Ctrl + C'],c:0,e:'Cortar es Ctrl + X; pegar es Ctrl + V.'},
  {id:'q33',cat:'shortcuts',q:'Cometiste un error al escribir. ¿Qué atajo ayuda?',v:'↩️',a:['Ctrl + Z','Ctrl + C','Windows + E','Ctrl + X'],c:0,e:'Ctrl + Z deshace el último cambio.'},
  {id:'q34',cat:'windows',q:'Identifica los tres iconos de una ventana en orden: —  □  ✕',v:'—  □  ✕',a:['Minimizar, maximizar/restaurar y cerrar','Copiar, pegar y cortar','Abrir, guardar e imprimir','Izquierda, rueda y derecha'],c:0,e:'Ese es el orden de los controles de ventana.'},
  {id:'q35',cat:'computer',q:'La CPU, el mouse y el teclado trabajan juntos porque…',v:'🤝',a:['Cada parte cumple una función para usar la computadora','Todos son programas','Todos sirven únicamente para imprimir','Ninguno necesita electricidad'],c:0,e:'Las partes del hardware se complementan para recibir, procesar y mostrar información.'}
];

const flashCards = [
  ['Computadora','Máquina electrónica que recibe, procesa, guarda y muestra información.'],
  ['Partes principales','Pantalla, CPU o torre, teclado y mouse.'],
  ['Hardware','Lo físico: se ve y se toca.'],['Software','Programas: Windows, Word, Paint, PowerPoint y Chrome.'],
  ['Mouse','Izquierdo, derecho y rueda. La rueda sube y baja.'],['Puntero','La flecha de la pantalla; también se llama cursor.'],
  ['Ventana','— minimizar · □ maximizar/restaurar · ✕ cerrar.'],['Carpeta','Clic derecho → Nuevo → Carpeta → nombre → Enter.'],
  ['Ctrl','C copiar · V pegar · X cortar · Z deshacer.'],['Windows','E Explorador · R Ejecutar · L bloquear · D escritorio.']
];
