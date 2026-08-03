LESSONS.push(
  {
    id:'mat-sequences', subject:'matematica', order:1, emoji:'🚂', title:'Secuencias y orden de números',
    story:'Conduce el tren numérico: descubre el patrón, completa series y ubica anterior, entre y posterior.',
    slides:[
      {title:'Una sucesión sigue una regla', text:'Una sucesión es una lista ordenada de números. Para encontrar el patrón, compara cuánto aumenta o disminuye de un término al siguiente.', remember:'Patrón = cambio que se repite', visual:'number-train'},
      {title:'El salto puede cambiar de posición', text:'No siempre se suma uno. Una serie puede avanzar 100, 1 000, 100 000 o disminuir 10 000 000.', remember:'Mira qué posición cambia', visual:'place-jumps'},
      {title:'Anterior, entre y posterior', text:'El anterior está antes, el posterior está después y el número entre dos cantidades ocupa el espacio intermedio según el salto indicado.', remember:'Antes · entre · después', visual:'before-after'},
      {title:'Orden de números grandes', text:'Para ordenar, compara desde la cifra de mayor valor. La primera cifra diferente decide cuál número es mayor.', remember:'Compara de izquierda a derecha', visual:'number-order'}
    ],
    game:{type:'sequence', prompt:'Ordena la serie que aumenta de 1 000 en 1 000.', items:['245 000','246 000','247 000','248 000','249 000']},
    questions:[
      Q('m1','¿Cuál es el patrón de 245 000, 246 000, 247 000...?',['Sumar 1 000','Sumar 100','Restar 1 000','Sumar 10 000'],0,'Cada número aumenta una unidad de millar.','🚂'),
      Q('m2','¿Qué número sigue después de 134 003 000 si el salto es 1 000?',['134 004 000','134 003 001','134 013 000','133 003 000'],0,'Se suma una unidad de millar: 1 000.','➡️'),
      Q('m3','¿Qué número está entre 534 199 y 534 201?',['534 200','534 198','534 210','535 200'],0,'534 200 está exactamente entre ambos.','🔢'),
      Q('m4','¿Cuál es el anterior de 86 000 007?',['86 000 006','86 000 008','85 999 007','86 000 017'],0,'Para obtener el anterior se resta una unidad.','⬅️'),
      Q('m5','Ordena de menor a mayor: 418 921 008, 418 534 009 y 418 634 009.',['418 534 009, 418 634 009, 418 921 008','418 921 008, 418 634 009, 418 534 009','418 634 009, 418 534 009, 418 921 008','418 534 009, 418 921 008, 418 634 009'],0,'Las centenas de millar son 5, 6 y 9.','📊'),
      Q('m6','30 000 000, 20 000 000, 10 000 000. ¿Cuál es el patrón?',['Restar 10 000 000','Sumar 10 000 000','Restar 1 000','Sumar 100'],0,'Cada paso disminuye una decena de millón.','📉')
    ]
  },
  {
    id:'mat-compare', subject:'matematica', order:2, emoji:'⚔️', title:'Batalla de mayor, menor o igual',
    story:'Compara números cifra por cifra y domina los signos >, < e =.',
    slides:[
      {title:'Los tres signos', text:'Mayor que se escribe >, menor que se escribe < e igual se escribe =.', remember:'La abertura mira al número mayor', visual:'compare-signs'},
      {title:'Compara desde la izquierda', text:'Empieza en la posición de mayor valor. Si las cifras son iguales, continúa hacia la derecha hasta encontrar una diferencia.', remember:'Primera diferencia = respuesta', visual:'compare-columns'},
      {title:'Los ceros también ocupan lugar', text:'Un cero puede no aportar cantidad en una posición, pero mantiene el lugar de las demás cifras.', remember:'No ignores las posiciones', visual:'zero-place'},
      {title:'Explica por qué', text:'No basta mirar el último dígito. Dos números grandes se comparan por centenas de millón, decenas de millón y así sucesivamente.', remember:'Compara por columnas', visual:'number-battle'}
    ],
    game:{type:'classify', prompt:'Clasifica cada comparación por el signo correcto.', categories:['>','<','='], items:[['534 920 ? 534 092',0],['250 106 ? 262 653',1],['700 000 ? 700 000',2],['46 453 000 ? 46 453 100',1],['952 106 ? 204 706',0]]},
    questions:[
      Q('m7','250 106 ___ 262 653',['<','>','=','No se puede comparar'],0,'Las centenas de millar son 2 en ambos; luego 5 es menor que 6.','<'),
      Q('m8','534 920 ___ 534 092',['>','<','=','Ninguno'],0,'En las centenas, 9 es mayor que 0.','>'),
      Q('m9','700 000 ___ 700 000',['=','>','<','Ninguno'],0,'Ambas cantidades son exactamente iguales.','='),
      Q('m10','62 600 000 ___ 62 700 000',['<','>','=','No tienen el mismo número de cifras'],0,'En las centenas de millar, 6 es menor que 7.','⚖️'),
      Q('m11','¿Qué se compara primero en dos números de nueve cifras?',['La cifra de mayor valor, a la izquierda','La unidad','La última cifra diferente','La cantidad de ceros solamente'],0,'Se empieza por las centenas de millón.','👀'),
      Q('m12','¿Qué significa el signo >?',['Mayor que','Menor que','Igual que','Aproximadamente'],0,'La abertura del signo queda del lado del número mayor.','🐊')
    ]
  },
  {
    id:'mat-reading', subject:'matematica', order:3, emoji:'🔤', title:'Leer y escribir números grandes',
    story:'Separa en grupos de tres cifras y transforma números entre palabras y cifras.',
    slides:[
      {title:'Agrupa de tres en tres', text:'Para leer números grandes, separa desde la derecha en grupos de tres: unidades, miles y millones.', remember:'Millones · miles · unidades', visual:'number-groups'},
      {title:'Hasta seis cifras', text:'533 807 se lee quinientos treinta y tres mil ochocientos siete.', remember:'Lee primero los millares', visual:'read-number'},
      {title:'Hasta nueve cifras', text:'301 420 006 se lee trescientos un millones cuatrocientos veinte mil seis.', remember:'No nombres posiciones con cero', visual:'millions'},
      {title:'Ortografía matemática', text:'Escribe quinientos, trescientos, seiscientos y setecientos correctamente. Revisa que las palabras coincidan con cada cifra.', remember:'Cifra y palabra deben coincidir', visual:'number-words'}
    ],
    game:{type:'classify', prompt:'Clasifica cada forma escrita.', categories:['Correcta','Con error'], items:[['533 807 = quinientos treinta y tres mil ochocientos siete',0],['405 679 = cuatrocientos cinco mil seiscientos setenta y nueve',0],['389 431 = trescientos ochenta y nueve mil cuatrocientos treinta y uno',0],['109 500 = ciento nueve mil quinientos',1],['785 302 = setecientos ochenta y cinco mil trescientos dos',0]]},
    questions:[
      Q('m13','¿Cómo se escribe 533 807?',['Quinientos treinta y tres mil ochocientos siete','Cinientos treinta y tres mil ochocientos siete','Quinientos treinta y tres millones ochocientos siete','Quinientos tres mil treinta y siete'],0,'533 mil más 807 unidades.','📝'),
      Q('m14','¿Qué número corresponde a trescientos ochenta y nueve mil cuatrocientos treinta y uno?',['389 431','398 431','389 341','38 943 1'],0,'Trescientos ochenta y nueve mil = 389 000; más 431.','🔢'),
      Q('m15','¿Cómo se lee 405 679?',['Cuatrocientos cinco mil seiscientos setenta y nueve','Cuarenta y cinco mil seiscientos setenta y nueve','Cuatrocientos cincuenta mil seiscientos nueve','Cuatro millones cinco mil'],0,'El grupo 405 corresponde a los millares.','📖'),
      Q('m16','¿Cuál escritura es correcta para 109 500?',['Ciento nueve mil quinientos','Ciento noventa mil quinientos','Ciento nueve millones quinientos','Diez mil novecientos cinco'],0,'109 500 son ciento nueve mil más quinientos.','✍️'),
      Q('m17','¿Cómo conviene separar 845 259 para leerlo?',['845 | 259','84 | 52 | 59','8 | 45259','8452 | 59'],0,'Se separa de derecha a izquierda en grupos de tres.','🧩'),
      Q('m18','¿Cuál palabra está bien escrita?',['Quinientos','Cinientos','Quiniendos','Quinentos'],0,'La forma correcta es quinientos.','✅')
    ]
  },
  {
    id:'mat-place', subject:'matematica', order:4, emoji:'🏰', title:'Castillo del valor posicional',
    story:'Ubica cada cifra en CMi, DMi, UMi, CM, DM, UM, C, D y U.',
    slides:[
      {title:'Nueve posiciones', text:'De izquierda a derecha: centenas de millón, decenas de millón, unidades de millón, centenas de millar, decenas de millar, unidades de millar, centenas, decenas y unidades.', remember:'CMi · DMi · UMi · CM · DM · UM · C · D · U', visual:'place-castle'},
      {title:'Posición y valor no son lo mismo', text:'En 15 790 431, el 9 ocupa la decena de millar y su valor relativo es 90 000.', remember:'Posición = nombre; valor = cantidad', visual:'digit-value'},
      {title:'Cada lugar multiplica por diez', text:'Al mover una cifra un lugar hacia la izquierda, su valor se multiplica por diez.', remember:'Cada columna vale 10 veces la anterior', visual:'times-ten'},
      {title:'Los ceros conservan el lugar', text:'En 301 420 006, los ceros permiten que el 3 conserve el valor de 300 000 000.', remember:'El cero es guardián de posición', visual:'zero-guard'}
    ],
    game:{type:'sequence', prompt:'Ordena las posiciones desde la de mayor valor hasta la unidad.', items:['CMi','DMi','UMi','CM','DM','UM','C','D','U']},
    questions:[
      Q('m19','En 863 902 381, ¿qué cifra ocupa la centena de millón?',['8','6','3','9'],0,'La primera cifra de un número de nueve dígitos es la CMi.','8️⃣'),
      Q('m20','En 21 783 562, ¿qué valor representa el 5?',['500','5 000','50','500 000'],0,'El 5 está en la posición de centenas.','💯'),
      Q('m21','En 15 790 431, ¿qué representa el 9?',['90 000','9 000','900 000','9'],0,'Está en la decena de millar.','9️⃣'),
      Q('m22','En 301 420 006, ¿qué valor relativo tiene el 3?',['300 000 000','3 000 000','30 000 000','300 000'],0,'El 3 ocupa la centena de millón.','🏰'),
      Q('m23','¿Qué significa UM?',['Unidad de millar','Unidad de millón','Centena de millar','Unidad'],0,'UM representa miles de uno en uno.','1K'),
      Q('m24','¿Cuál es la diferencia entre CM y CMi?',['CM es centena de millar y CMi es centena de millón','Son exactamente iguales','CM es centena y CMi es millar','CM es millón y CMi es unidad'],0,'La i final distingue millón de millar.','🔍')
    ]
  },
  {
    id:'mat-decompose', subject:'matematica', order:5, emoji:'🧱', title:'Laboratorio de descomposición',
    story:'Construye números con bloques de base 10 y vuelve a separarlos en sus valores.',
    slides:[
      {title:'Descomponer es separar', text:'734 258 se separa en 700 000 + 30 000 + 4 000 + 200 + 50 + 8.', remember:'Una suma por cada cifra distinta de cero', visual:'expanded-form'},
      {title:'Construir es sumar', text:'300 000 + 50 000 + 7 000 + 400 + 20 + 3 forma 357 423.', remember:'Suma los valores posicionales', visual:'build-number'},
      {title:'El orden de los sumandos no cambia el total', text:'Puedes encontrar valores mezclados. Ubícalos por posición antes de sumarlos.', remember:'Primero identifica, después suma', visual:'position-puzzle'},
      {title:'Base 10', text:'Cada posición equivale a unidades, decenas, centenas, miles y millones. Los bloques ayudan a visualizar cuánto vale cada cifra.', remember:'10 unidades forman 1 decena', visual:'base-ten'}
    ],
    game:{type:'sequence', prompt:'Ordena la descomposición de 734 258 de mayor a menor valor.', items:['700 000','30 000','4 000','200','50','8']},
    questions:[
      Q('m25','¿Qué número se forma con 300 000 + 50 000 + 7 000 + 400 + 20 + 3?',['357 423','350 743','3 574 230','357 243'],0,'Coloca cada cifra en su posición: 3-5-7-4-2-3.','🧱'),
      Q('m26','¿Qué número se forma con 2 000 000 + 400 000 + 30 000 + 5 000 + 600 + 8?',['2 435 608','2 430 568','24 356 008','2 405 638'],0,'Los valores forman 2 millones, 435 mil, 608.','🔧'),
      Q('m27','¿Cuál es la descomposición correcta de 734 258?',['700 000 + 30 000 + 4 000 + 200 + 50 + 8','700 000 + 3 000 + 40 + 258','73 000 + 4 000 + 258','700 000 + 34 000 + 258 000'],0,'Cada cifra multiplica el valor de su posición.','📦'),
      Q('m28','9CM + 7DM + 4C forma:',['970 400','907 400','97 400','9 704 000'],0,'900 000 + 70 000 + 400 = 970 400.','➕'),
      Q('m29','6CM + 2DM + 3C forma:',['620 300','602 300','623 000','62 030'],0,'600 000 + 20 000 + 300 = 620 300.','🧮'),
      Q('m30','¿Qué ocurre al sumar todos los valores posicionales de un número?',['Se obtiene el número original','Siempre se obtiene cero','Se invierten las cifras','Se obtiene el doble'],0,'La descomposición y la suma son procesos inversos.','🔄')
    ]
  },
  {
    id:'mat-operations', subject:'matematica', order:6, emoji:'➕', title:'Rescate con sumas y restas',
    story:'Alinea las cifras, reagrupa cuando haga falta y resuelve problemas cotidianos.',
    slides:[
      {title:'Alinea por posición', text:'Unidades debajo de unidades, decenas debajo de decenas y centenas debajo de centenas.', remember:'Columnas bien alineadas', visual:'column-operation'},
      {title:'Suma con reagrupación', text:'Si una columna suma 10 o más, escribe las unidades y lleva una decena a la siguiente columna.', remember:'10 unidades = 1 decena', visual:'carry-add'},
      {title:'Resta con reagrupación', text:'Si la cifra de arriba es menor, cambia una unidad de la columna izquierda por diez de la columna actual.', remember:'Pedir prestado = reagrupar', visual:'borrow-subtract'},
      {title:'Comprende el problema', text:'Palabras como recibió o llegaron suelen indicar suma; pagó, regaló o quedaron pueden indicar resta. Lee la situación completa.', remember:'Primero decide la operación', visual:'word-problem'}
    ],
    game:{type:'classify', prompt:'Clasifica la operación que corresponde.', categories:['Suma','Resta'], items:[['Tenía 28 cuadernos y llegaron 17 más',0],['Tenía 85 dólares y pagó 32',1],['Recibió 25 lápices adicionales',0],['Tenía 625 y regaló 278',1],['Juntó dos grupos de libros',0]]},
    questions:[
      Q('m31','28 + 17 =',['45','35','55','44'],0,'8 + 7 = 15: escribes 5 y llevas 1 decena.','➕'),
      Q('m32','36 + 25 =',['61','51','71','59'],0,'6 + 5 = 11 y 3 + 2 + 1 = 6.','✏️'),
      Q('m33','85 - 32 =',['53','43','57','63'],0,'5 - 2 = 3 y 8 - 3 = 5.','➖'),
      Q('m34','625 - 278 =',['347','357','447','343'],0,'Se reagrupa en unidades y decenas: el resultado es 347.','🧮'),
      Q('m35','Karla tenía 36 lápices y recibió 25. ¿Cuántos tiene ahora?',['61','11','51','71'],0,'Recibir más indica sumar 36 + 25.','🎒'),
      Q('m36','Ana tenía 85 dólares y pagó 32. ¿Cuánto le queda?',['53 dólares','117 dólares','43 dólares','57 dólares'],0,'Pagar reduce la cantidad: 85 - 32.','💵')
    ]
  },
  {
    id:'mat-coordinates', subject:'matematica', order:7, emoji:'🗺️', title:'Cazatesoros de coordenadas',
    story:'Avanza primero por x, luego por y y encuentra animales y tesoros en la cuadrícula.',
    slides:[
      {title:'Dos ejes', text:'El eje x es horizontal y el eje y es vertical. Se cruzan en el origen (0,0).', remember:'x horizontal · y vertical', visual:'coordinate-axes'},
      {title:'Orden del par', text:'Un par ordenado se escribe (x,y). Primero avanzas por x hacia la derecha y luego por y hacia arriba.', remember:'Primero x, después y', visual:'ordered-pair'},
      {title:'Leer un punto', text:'El punto (3,4) está tres unidades a la derecha y cuatro unidades arriba.', remember:'(3,4) no es igual a (4,3)', visual:'coordinate-point'},
      {title:'Tablas y gráficos', text:'Una tabla puede convertirse en puntos. Por ejemplo, partidos y goles forman pares ordenados.', remember:'Cada fila puede ser un punto', visual:'coordinate-table'}
    ],
    game:{type:'sequence', prompt:'Ordena los pasos para ubicar el punto (3,4).', items:['Busca el origen (0,0)','Avanza 3 en el eje x','Sube 4 en el eje y','Marca el punto (3,4)']},
    questions:[
      Q('m37','¿Cuál eje es horizontal?',['El eje x','El eje y','Ambos son verticales','Ninguno'],0,'La abscisa x se dibuja horizontalmente.','↔️'),
      Q('m38','¿Cuál eje es vertical?',['El eje y','El eje x','El eje z','La diagonal'],0,'La ordenada y va hacia arriba.','↕️'),
      Q('m39','En el par (6,3), ¿qué indica el 6?',['La posición en x','La posición en y','La suma','El nombre del punto'],0,'El primer número siempre corresponde a x.','6️⃣'),
      Q('m40','¿Dónde se ubica primero para marcar (2,5)?',['En x = 2','En y = 5','En x = 5','En y = 2'],0,'Primero avanzas dos unidades en el eje x.','🎯'),
      Q('m41','¿Son iguales (3,4) y (4,3)?',['No, representan puntos distintos','Sí, porque tienen los mismos números','Sí, siempre','Solo si x es cero'],0,'El orden de las coordenadas cambia la ubicación.','📍'),
      Q('m42','Un jugador disputó 7 partidos y marcó 4 goles. ¿Cuál es su par ordenado?',['(7,4)','(4,7)','(11,0)','(3,7)'],0,'x representa partidos y y representa goles.','⚽')
    ]
  },
  {
    id:'mat-data', subject:'matematica', order:8, emoji:'📊', title:'Datos, medidas y reto final',
    story:'Interpreta tablas y gráficos y practica conversiones y perímetros sencillos.',
    slides:[
      {title:'Gráfico de barras', text:'La altura de cada barra representa una cantidad. Lee primero la escala y después compara las barras.', remember:'Eje, escala, categoría y cantidad', visual:'bar-chart'},
      {title:'Tablas de datos', text:'Las filas y columnas organizan información. Un dato puede responder quién, cuánto o dónde.', remember:'Busca encabezados antes de responder', visual:'data-table'},
      {title:'Perímetro', text:'El perímetro es la suma de todos los lados de una figura. En un rectángulo puedes sumar largo + ancho + largo + ancho.', remember:'Perímetro = borde total', visual:'perimeter'},
      {title:'Conversiones', text:'En el sistema métrico, 10 milímetros forman 1 centímetro y 100 centímetros forman 1 metro.', remember:'10 mm = 1 cm; 100 cm = 1 m', visual:'measure-convert'}
    ],
    game:{type:'classify', prompt:'Clasifica cada afirmación.', categories:['Gráfico/tabla','Medida/perímetro'], items:[['Natación tiene la barra más alta',0],['Sumar los cuatro lados de un rectángulo',1],['Leer partidos y goles en una tabla',0],['60 mm equivalen a 6 cm',1],['La escala indica cuánto vale cada división',0]]},
    questions:[
      Q('m43','En un gráfico, natación tiene 25 estudiantes y fútbol 20. ¿Cuál es mayor?',['Natación','Fútbol','Son iguales','No se puede saber'],0,'25 es mayor que 20.','📊'),
      Q('m44','Si 5 estudiantes no practican deporte, ¿qué barra corresponde a “Ninguno”?',['La barra de altura 5','La barra de altura 25','La barra de altura 20','La barra de altura 50'],0,'La altura debe coincidir con la cantidad indicada.','📉'),
      Q('m45','¿Qué es el perímetro?',['La suma de todos los lados','El espacio interior','Solo el lado más largo','La mitad de la figura'],0,'El perímetro mide el contorno.','📐'),
      Q('m46','Un rectángulo mide 9 cm por 12 cm. ¿Cuál es su perímetro?',['42 cm','21 cm','108 cm','24 cm'],0,'9 + 12 + 9 + 12 = 42.','▭'),
      Q('m47','60 mm equivalen a:',['6 cm','60 cm','600 cm','0 cm'],0,'Cada 10 milímetros forman un centímetro.','📏'),
      Q('m48','¿Qué debes leer primero en una tabla?',['Los encabezados de filas y columnas','La última respuesta escrita','Solo los colores','La cifra más grande'],0,'Los encabezados explican qué representa cada dato.','🗂️')
    ]
  }
);
