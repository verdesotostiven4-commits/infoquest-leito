(() => {
  const baseHome = home;
  const baseRenderSubject = renderSubject;

  const challenges = [
    {type:'choice', icon:'🚂', title:'Siguiente vagón', prompt:'245 000, 246 000, 247 000, ...', options:['248 000','247 100','257 000','246 001'], answer:0, explain:'El patrón suma 1 000.'},
    {type:'choice', icon:'⚔️', title:'Batalla de números', prompt:'534 920 ___ 534 092', options:['>','<','='], answer:0, explain:'La primera diferencia está en las centenas: 9 es mayor que 0.'},
    {type:'choice', icon:'🏰', title:'Valor escondido', prompt:'En 15 790 431, ¿cuánto vale el 9?', options:['90 000','9 000','900 000','9'], answer:0, explain:'El 9 ocupa la decena de millar.'},
    {type:'choice', icon:'🧱', title:'Construye el número', prompt:'300 000 + 50 000 + 7 000 + 400 + 20 + 3', options:['357 423','350 743','357 243','3 574 230'], answer:0, explain:'Cada sumando coloca una cifra en su columna.'},
    {type:'choice', icon:'➕', title:'Rescate de lápices', prompt:'Karla tenía 36 lápices y recibió 25 más.', options:['61','51','11','71'], answer:0, explain:'Recibió más, por eso se suma 36 + 25.'},
    {type:'choice', icon:'➖', title:'Caja fuerte', prompt:'625 - 278', options:['347','357','447','343'], answer:0, explain:'Al reagrupar correctamente se obtiene 347.'},
    {type:'grid', icon:'🗺️', title:'Tesoro cartesiano', prompt:'Toca la coordenada (3,4).', target:[3,4], explain:'Primero x = 3 y después y = 4.'},
    {type:'grid', icon:'🐢', title:'Animal de Galápagos', prompt:'Toca la coordenada (5,1).', target:[5,1], explain:'Avanza cinco en x y sube uno en y.'},
    {type:'choice', icon:'🔤', title:'Traductor numérico', prompt:'¿Cómo se escribe 405 679?', options:['Cuatrocientos cinco mil seiscientos setenta y nueve','Cuarenta y cinco mil seiscientos setenta y nueve','Cuatrocientos cincuenta mil seiscientos nueve','Cuatro millones cinco mil'], answer:0, explain:'405 corresponde al grupo de los millares.'},
    {type:'choice', icon:'📊', title:'Lee la gráfica', prompt:'Natación tiene 25 estudiantes y fútbol 20. ¿Cuál es mayor?', options:['Natación','Fútbol','Son iguales','No se puede saber'], answer:0, explain:'La barra de 25 es más alta que la de 20.'},
    {type:'choice', icon:'📐', title:'Perímetro rápido', prompt:'Rectángulo de 9 cm por 12 cm.', options:['42 cm','21 cm','108 cm','24 cm'], answer:0, explain:'9 + 12 + 9 + 12 = 42 cm.'},
    {type:'choice', icon:'📏', title:'Conversión relámpago', prompt:'60 mm equivalen a...', options:['6 cm','60 cm','600 cm','0,6 mm'], answer:0, explain:'10 mm forman 1 cm.'},
    {type:'choice', icon:'🔢', title:'Número anterior', prompt:'¿Cuál es el anterior de 86 000 007?', options:['86 000 006','86 000 008','85 999 007','86 000 017'], answer:0, explain:'El anterior se obtiene restando una unidad.'},
    {type:'choice', icon:'🧮', title:'Descomposición secreta', prompt:'9CM + 7DM + 4C', options:['970 400','907 400','97 400','9 704 000'], answer:0, explain:'900 000 + 70 000 + 400 = 970 400.'},
    {type:'choice', icon:'💯', title:'Posición exacta', prompt:'En 21 783 562, ¿cuánto vale el 5?', options:['500','5 000','50','500 000'], answer:0, explain:'El 5 está en las centenas.'}
  ];

  let arcade = null;

  function mixed(ch) {
    if (ch.type !== 'choice') return {...ch};
    const choices = shuffle(ch.options.map((text,index)=>({text,correct:index===ch.answer})));
    return {...ch, options:choices.map(x=>x.text), answer:choices.findIndex(x=>x.correct)};
  }

  function mathShell(body) {
    setView(`
      <section class="screen math-game-screen">
        <div class="screen-head">
          <button class="back" data-subject="matematica">✕ Salir</button>
          <div class="screen-title compact"><span class="eyebrow">ARCADE MATEMÁTICO</span><h1>🎮 Liga de los números</h1><p>Retos cortos, explicación inmediata y puntos por racha.</p></div>
          <span class="game-score">${arcade.score}/${arcade.rounds.length} ⭐</span>
        </div>
        <section class="math-game-stage panel" style="--subject:${SUBJECTS.matematica.color}">
          ${body}
          <div id="mathFeedback" class="math-feedback" aria-live="polite"></div>
        </section>
      </section>
    `);
  }

  function renderArcade() {
    if (arcade.index >= arcade.rounds.length) return finishArcade();
    const ch = arcade.rounds[arcade.index];
    const progress = Math.round(arcade.index / arcade.rounds.length * 100);
    let play = '';
    if (ch.type === 'grid') {
      play = `<div class="math-coordinate-grid" role="grid">${Array.from({length:42},(_,i)=>{
        const x=i%7, y=5-Math.floor(i/7);
        return `<button data-math-grid="${x},${y}" aria-label="Coordenada ${x}, ${y}"><span>${y}</span><b>${x},${y}</b></button>`;
      }).join('')}</div><div class="axis-tip">Primero busca <b>x</b> y después <b>y</b>.</div>`;
    } else {
      play = `<div class="math-choice-grid">${ch.options.map((o,i)=>`<button data-math-choice="${i}"><b>${String.fromCharCode(65+i)}</b><span>${o}</span></button>`).join('')}</div>`;
    }
    mathShell(`
      <div class="math-progress"><span><i style="width:${progress}%"></i></span><b>Reto ${arcade.index+1}/${arcade.rounds.length}</b><em>Racha x${arcade.streak}</em></div>
      <div class="math-riddle"><span>${ch.icon}</span><div><small>${ch.title}</small><h2>${ch.prompt}</h2></div></div>
      ${play}
    `);
  }

  function answer(ok, chosenText='') {
    if (arcade.locked) return;
    const ch=arcade.rounds[arcade.index];
    arcade.locked=true;
    if (ok) {
      arcade.score++;
      arcade.streak++;
      store.xp += 5 + Math.min(arcade.streak,5);
      save();
    } else {
      arcade.streak=0;
    }
    beep(ok);
    speak(`${ok?'Correcto.':'Vamos a corregirlo.'} ${ch.explain}`);
    const box=document.querySelector('#mathFeedback');
    box.className=`math-feedback show ${ok?'good':'bad'}`;
    box.innerHTML=`<b>${ok?'✅ ¡Excelente!':'🧠 Vamos paso a paso'}</b><span>${ch.explain}</span>${chosenText?`<small>Elegiste: ${chosenText}</small>`:''}<button data-math-next>Continuar →</button>`;
  }

  function finishArcade() {
    const total=arcade.rounds.length;
    const score=arcade.score;
    if(score===total) confetti();
    store.xp += score * 2;
    save();
    setView(`
      <section class="screen"><section class="results panel math-results">
        <div class="result-orb"><strong>${score}</strong></div>
        <span class="eyebrow">ARCADE COMPLETADO</span>
        <h1>${score===total?'¡Racha perfecta!':score>=7?'¡Muy buen entrenamiento!':'Conviene repetir una ronda'}</h1>
        <p>Leito acertó <b>${score} de ${total}</b>. Cada explicación mostró el procedimiento, no solo la respuesta.</p>
        <div class="result-actions"><button class="primary" data-math-arcade>Jugar otra ronda</button><button class="secondary" data-subject="matematica">Volver a Matemática</button><button class="secondary math-download-link" data-math-pdf="exam">🖨️ Imprimir práctica</button></div>
      </section></section>
    `);
  }

  function startArcade() {
    arcade={rounds:shuffle(challenges).slice(0,10).map(mixed), index:0, score:0, streak:0, locked:false};
    renderArcade();
  }

  home = function() {
    baseHome();
    const primary=document.querySelector('.hero-actions .primary');
    if(primary){primary.dataset.subject='matematica';primary.innerHTML='⚡ Matemática: estudiar ahora';}
    const heading=document.querySelector('.section-heading h2');
    if(heading) heading.textContent='Cinco materias, un solo juego';
    const intro=document.querySelector('.hero-copy p');
    if(intro) intro.textContent='Mini clases, juegos, práctica guiada, simulacros y un examen imprimible. Matemática incluye números grandes, operaciones, coordenadas y gráficos.';
  };

  renderSubject = function(subjectId) {
    baseRenderSubject(subjectId);
    if(subjectId!=='matematica') return;
    const road=document.querySelector('.lesson-road');
    if(!road) return;
    const extras=document.createElement('section');
    extras.className='math-extras';
    extras.innerHTML=`
      <button class="math-extra-card arcade" data-math-arcade><span>🎮</span><div><small>JUEGO EXTRA</small><h3>Liga de los números</h3><p>Diez retos aleatorios de secuencias, valor posicional, operaciones, gráficas y coordenadas.</p></div><strong>Jugar →</strong></button>
      <button class="math-extra-card print" data-math-pdf="exam"><span>🖨️</span><div><small>PRÁCTICA ESCRITA</small><h3>Examen para imprimir</h3><p>Cuatro páginas para resolver a lápiz, incluyendo cuadrículas y problemas.</p></div><strong>Descargar PDF</strong></button>
      <button class="math-extra-card key" data-math-pdf="key"><span>🔐</span><div><small>PARA EL ADULTO</small><h3>Clave de respuestas</h3><p>Revisa el examen después de que Leo lo termine.</p></div><strong>Descargar clave</strong></button>`;
    road.parentNode.insertBefore(extras,road);
  };

  app.addEventListener('click',e=>{
    const arcadeBtn=e.target.closest('[data-math-arcade]');
    if(arcadeBtn){e.preventDefault();startArcade();return;}
    const choice=e.target.closest('[data-math-choice]');
    if(choice){const i=Number(choice.dataset.mathChoice);const ch=arcade.rounds[arcade.index];answer(i===ch.answer,ch.options[i]);return;}
    const cell=e.target.closest('[data-math-grid]');
    if(cell){const [x,y]=cell.dataset.mathGrid.split(',').map(Number);const ch=arcade.rounds[arcade.index];answer(x===ch.target[0]&&y===ch.target[1],`(${x},${y})`);return;}
    const next=e.target.closest('[data-math-next]');
    if(next){arcade.index++;arcade.locked=false;renderArcade();return;}
  });

  home();
})();
