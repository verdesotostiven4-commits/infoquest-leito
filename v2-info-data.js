LESSONS.push(
  {
    id:'info-computer', subject:'informatica', order:1, emoji:'🖥️', title:'La computadora y sus partes',
    story:'La computadora central perdió cuatro piezas. Aprende qué hace cada una para volver a encenderla.',
    slides:[
      {title:'¿Qué es una computadora?', text:'Es una máquina electrónica que recibe datos, los procesa, los guarda y muestra información útil.', remember:'RECIBE → PROCESA → GUARDA → MUESTRA', visual:'computer'},
      {title:'Las cuatro partes principales', text:'En el temario de Leito se estudian: pantalla o monitor, CPU o torre, teclado y mouse.', remember:'Pantalla + CPU + teclado + mouse', visual:'parts'},
      {title:'¿Qué hace cada parte?', text:'La pantalla muestra; la CPU procesa; el teclado escribe; el mouse mueve el puntero y selecciona.', remember:'Mostrar · Procesar · Escribir · Seleccionar', visual:'functions'},
      {title:'La impresora', text:'La impresora es hardware y sirve para imprimir, pero en la pregunta del pizarrón no pertenece a las cuatro partes principales.', remember:'La que NO es principal: impresora', visual:'printer'}
    ],
    game:{type:'pick', prompt:'Selecciona solamente las 4 partes principales.', items:['🖥️ Pantalla','🧠 CPU','⌨️ Teclado','🖱️ Mouse','🖨️ Impresora'], correct:[0,1,2,3]},
    questions:[
      Q('i1','¿Qué es una computadora?',['Una máquina electrónica que procesa información','Una mesa con cables','Solo una pantalla','Una impresora grande'],0,'Recibe, procesa, guarda y muestra información.','💻'),
      Q('i2','¿Cuáles son las cuatro partes principales estudiadas?',['Pantalla, CPU, teclado y mouse','Impresora, parlante, cámara y papel','Windows, Word, Paint y Chrome','Mesa, silla, cable y foco'],0,'Son pantalla, CPU o torre, teclado y mouse.','🧩'),
      Q('i3','¿Cuál NO es una parte principal según el pizarrón?',['Impresora','Mouse','Teclado','Pantalla'],0,'La impresora es un periférico, pero no una de las cuatro principales.','🖨️'),
      Q('i4','¿Qué hace la CPU?',['Procesa información y controla operaciones','Imprime hojas','Mueve el puntero','Solo reproduce música'],0,'La CPU es la unidad que procesa instrucciones.','🧠')
    ]
  },
  {
    id:'info-input', subject:'informatica', order:2, emoji:'🖱️', title:'Mouse y teclado',
    story:'Para abrir la puerta digital debes dominar el puntero, la rueda y las zonas del teclado.',
    slides:[
      {title:'¿Qué es el mouse?', text:'Es un dispositivo apuntador que permite mover el puntero, hacer clic, seleccionar y arrastrar elementos.', remember:'Mouse = mover y seleccionar', visual:'mouse'},
      {title:'Partes del mouse', text:'Botón izquierdo, botón derecho y rueda o scroll. Algunos tienen cable y otros son inalámbricos.', remember:'Izquierdo · rueda · derecho', visual:'mouseparts'},
      {title:'La rueda', text:'Sirve principalmente para desplazarse hacia arriba y hacia abajo por páginas o documentos.', remember:'Rueda = subir y bajar', visual:'scroll'},
      {title:'Partes del teclado', text:'Teclas alfanuméricas, de función, control, navegación o dirección y teclado numérico.', remember:'Letras · función · control · flechas · números', visual:'keyboard'}
    ],
    game:{type:'classify', prompt:'Clasifica cada elemento.', categories:['Mouse','Teclado'], items:[['Rueda o scroll',0],['Botón derecho',0],['Teclas de función',1],['Barra espaciadora',1],['Botón izquierdo',0],['Teclas de dirección',1]]},
    questions:[
      Q('i5','¿Cómo se llama la flecha de la pantalla?',['Puntero o cursor','Carpeta','Ventana','Tecla'],0,'Se llama puntero; también se acepta cursor.','➤'),
      Q('i6','¿Para qué sirve la rueda del mouse?',['Para subir y bajar por una página','Para apagar la CPU','Para escribir letras','Para imprimir'],0,'La rueda o scroll desplaza el contenido.','↕️'),
      Q('i7','¿Cuáles son las partes básicas del mouse?',['Botón izquierdo, botón derecho y rueda','Monitor, CPU y cable','Letras, números y Enter','Copiar, pegar y cortar'],0,'Son los dos botones principales y la rueda central.','🖱️'),
      Q('i8','¿Cuál grupo corresponde a partes del teclado?',['Alfanuméricas, función, control, navegación y numérico','Pantalla, CPU, mouse e impresora','Izquierdo, rueda y derecho','Carpeta, archivo y papelera'],0,'El teclado se divide en varias zonas de teclas.','⌨️')
    ]
  },
  {
    id:'info-hardware', subject:'informatica', order:3, emoji:'⚙️', title:'Hardware y software',
    story:'El laboratorio mezcló objetos con programas. Sepáralos para reparar el sistema.',
    slides:[
      {title:'Hardware', text:'Son las partes físicas de la computadora: se pueden ver y tocar.', remember:'Hardware = se toca', visual:'hardware'},
      {title:'Software', text:'Son los programas e instrucciones que hacen funcionar la computadora.', remember:'Software = programas', visual:'software'},
      {title:'Ejemplos de hardware', text:'Pantalla, CPU, teclado, mouse e impresora.', remember:'Objetos físicos', visual:'hardwareexamples'},
      {title:'Ejemplos de software', text:'Windows, Word, Excel, Paint y PowerPoint.', remember:'Programas', visual:'softwareexamples'}
    ],
    game:{type:'classify', prompt:'¿Hardware o software?', categories:['Hardware','Software'], items:[['Mouse',0],['Windows',1],['Teclado',0],['Paint',1],['Pantalla',0],['Word',1],['Impresora',0],['PowerPoint',1]]},
    questions:[
      Q('i9','¿Qué es hardware?',['Las partes físicas que se pueden tocar','Los programas','Una página web','Un archivo borrado'],0,'Hardware es todo componente físico.','🔩'),
      Q('i10','¿Qué es software?',['Los programas e instrucciones','Las partes de metal y plástico','La mesa de la computadora','Solo el cable'],0,'Software son sistemas y aplicaciones.','💿'),
      Q('i11','¿Cuál grupo contiene solo hardware?',['Mouse, teclado, pantalla, CPU e impresora','Windows, Word, Paint, Excel y PowerPoint','Word, monitor, Paint y teclado','Internet, CPU, Windows y mouse'],0,'Todos esos elementos son físicos.','🧰'),
      Q('i12','¿Cuál grupo contiene solo software?',['Windows, Word, Excel, Paint y PowerPoint','Mouse, CPU, teclado, pantalla e impresora','Teclado, Word, monitor y Windows','Cable, Paint, mouse y carpeta'],0,'Todos son programas.','✨')
    ]
  },
  {
    id:'info-windows', subject:'informatica', order:4, emoji:'🪟', title:'Ventanas, carpetas y encendido',
    story:'Debes preparar el escritorio antes de que llegue el jefe final.',
    slides:[
      {title:'Botones de una ventana', text:'— minimiza; □ maximiza o restaura; ✕ cierra.', remember:'— minimizar · □ maximizar · ✕ cerrar', visual:'window'},
      {title:'Crear una carpeta', text:'Clic derecho en el escritorio → Nuevo → Carpeta → escribir nombre → Enter.', remember:'Derecho → Nuevo → Carpeta → nombre → Enter', visual:'folder'},
      {title:'Encender la computadora', text:'Verificar conexión, encender regulador si existe, presionar botón de la CPU, encender pantalla y esperar.', remember:'Conectar → CPU → pantalla → esperar', visual:'power'},
      {title:'Orden y seguridad', text:'No desconectes ni apagues bruscamente el equipo mientras está funcionando.', remember:'Usar con cuidado', visual:'safe'}
    ],
    game:{type:'sequence', prompt:'Ordena los pasos para crear una carpeta.', items:['Hacer clic derecho en el escritorio','Elegir Nuevo','Seleccionar Carpeta','Escribir el nombre','Presionar Enter']},
    questions:[
      Q('i13','¿Qué hace el botón —?',['Minimiza la ventana','Cierra la ventana','La borra','La maximiza'],0,'Minimizar la envía temporalmente a la barra de tareas.','—'),
      Q('i14','¿Qué hace el botón □?',['Maximiza o restaura la ventana','Apaga el equipo','Imprime','Abre una carpeta'],0,'Cambia el tamaño de la ventana.','□'),
      Q('i15','Elige el orden correcto para crear una carpeta.',['Clic derecho → Nuevo → Carpeta → nombre → Enter','Enter → apagar → Nuevo → imprimir','Clic izquierdo → Paint → cerrar','Windows + L → monitor'],0,'Ese es el procedimiento normal en el escritorio.','📁'),
      Q('i16','¿Qué se hace primero para encender una computadora?',['Verificar que esté conectada','Abrir Paint','Crear una carpeta','Presionar Ctrl + Z'],0,'Primero se comprueba la alimentación eléctrica.','🔌')
    ]
  },
  {
    id:'info-shortcuts', subject:'informatica', order:5, emoji:'⌨️', title:'Poderes del teclado',
    story:'Cada combinación abre una puerta. Aprende el significado antes de usarla.',
    slides:[
      {title:'Ctrl + C y Ctrl + V', text:'Ctrl + C copia. Ctrl + V pega lo copiado o cortado.', remember:'C = copiar · V = pegar', visual:'copy'},
      {title:'Ctrl + X y Ctrl + Z', text:'Ctrl + X corta. Ctrl + Z deshace la última acción.', remember:'X = cortar · Z = deshacer', visual:'undo'},
      {title:'Windows + E y Windows + R', text:'Win + E abre el Explorador de archivos. Win + R abre Ejecutar.', remember:'E = Explorador · R = Ejecutar', visual:'winapps'},
      {title:'Windows + L y Windows + D', text:'Win + L bloquea el equipo. Win + D muestra u oculta el escritorio.', remember:'L = bloquear · D = escritorio', visual:'windesktop'}
    ],
    game:{type:'match', prompt:'Une cada combinación con su poder.', pairs:[['Ctrl + C','Copiar'],['Ctrl + V','Pegar'],['Ctrl + X','Cortar'],['Ctrl + Z','Deshacer'],['Win + E','Explorador'],['Win + R','Ejecutar'],['Win + L','Bloquear'],['Win + D','Escritorio']]},
    questions:[
      Q('i17','¿Qué hace Ctrl + C?',['Copiar','Pegar','Cortar','Deshacer'],0,'C se asocia con copiar.','Ctrl + C'),
      Q('i18','¿Qué hace Ctrl + V?',['Pegar','Copiar','Cerrar','Bloquear'],0,'Ctrl + V pega lo copiado o cortado.','Ctrl + V'),
      Q('i19','¿Qué hace Windows + E?',['Abre el Explorador de archivos','Abre Ejecutar','Bloquea el equipo','Muestra el escritorio'],0,'E se asocia con Explorer.','Win + E'),
      Q('i20','¿Qué hace Windows + L?',['Bloquea el equipo','Pega un texto','Abre Paint','Cierra todos los archivos'],0,'Win + L bloquea la sesión.','Win + L'),
      Q('i21','¿Qué hace Windows + D?',['Muestra u oculta el escritorio','Borra el disco','Abre Word','Deshace'],0,'Win + D lleva al escritorio.','Win + D')
    ]
  }
);
