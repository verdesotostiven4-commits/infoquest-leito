const app = document.querySelector('#app');
const toast = document.querySelector('#toast');
const soundButton = document.querySelector('#soundButton');

const store = {
  xp: Number(localStorage.getItem('iq2-xp') || 0),
  completed: JSON.parse(localStorage.getItem('iq2-completed') || '[]'),
  scores: JSON.parse(localStorage.getItem('iq2-scores') || '{}'),
  mistakes: JSON.parse(localStorage.getItem('iq2-mistakes') || '[]'),
  sound: localStorage.getItem('iq2-sound') !== 'off'
};

let session = null;
let activeSpeech = null;

function save() {
  store.completed = [...new Set(store.completed)];
  store.mistakes = [...new Set(store.mistakes)];
  localStorage.setItem('iq2-xp', store.xp);
  localStorage.setItem('iq2-completed', JSON.stringify(store.completed));
  localStorage.setItem('iq2-scores', JSON.stringify(store.scores));
  localStorage.setItem('iq2-mistakes', JSON.stringify(store.mistakes));
  localStorage.setItem('iq2-sound', store.sound ? 'on' : 'off');
  updateTop();
}

function updateTop() {
  document.querySelector('#xpValue').textContent = store.xp;
  const medals = Object.values(store.scores).filter(n => n >= 8).length;
  document.querySelector('#medalValue').textContent = medals;
  soundButton.textContent = store.sound ? '🔊' : '🔇';
}

function notify(text) {
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function beep(ok = true) {
  if (!store.sound) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = ok ? 700 : 190;
    gain.gain.setValueAtTime(.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .18);
    osc.start(); osc.stop(ctx.currentTime + .18);
  } catch (_) {}
}

function speak(text, onend) {
  if (!store.sound || !('speechSynthesis' in window)) {
    if (onend) onend();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-EC';
  utterance.rate = .93;
  utterance.pitch = 1.06;
  utterance.onend = () => { activeSpeech = null; if (onend) onend(); };
  activeSpeech = utterance;
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  activeSpeech = null;
}

function confetti() {
  const box = document.querySelector('#confetti');
  box.innerHTML = '';
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + '%';
    p.style.background = ['#54d6ff','#48e0a4','#ffd166','#ff7eb6','#9b8cff'][i % 5];
    p.style.animationDelay = Math.random() * .5 + 's';
    box.appendChild(p);
  }
  setTimeout(() => box.innerHTML = '', 2200);
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - .5);
}

function setView(html) {
  stopSpeech();
  app.innerHTML = html;
  window.scrollTo({top: 0, behavior: 'smooth'});
  updateTop();
}

function subjectLessons(subjectId) {
  return LESSONS.filter(l => l.subject === subjectId).sort((a,b) => a.order - b.order);
}

function subjectProgress(subjectId) {
  const lessons = subjectLessons(subjectId);
  return Math.round(lessons.filter(l => store.completed.includes(l.id)).length / lessons.length * 100);
}

function home() {
  session = null;
  const subjects = Object.values(SUBJECTS);
  setView(`
    <section class="hero panel">
      <div class="hero-copy">
        <span class="eyebrow">🎮 APRENDER → PRACTICAR → DOMINAR</span>
        <h1>Una academia que <span>sí enseña</span> antes de preguntar</h1>
        <p>Cada misión funciona como una mini clase animada: primero explica, después demuestra, luego practica con ayuda y al final comprueba que Leito pueda responder sin pistas.</p>
        <div class="hero-actions">
          <button class="primary big" data-subject="informatica">⚡ Informática: prioridad</button>
          <button class="secondary big" data-action="continue">▶ Continuar progreso</button>
        </div>
        <div class="method-row">
          <span><b>1</b> Aprende</span><i>→</i><span><b>2</b> Juega</span><i>→</i><span><b>3</b> Practica</span><i>→</i><span><b>4</b> Repara errores</span>
        </div>
      </div>
      <div class="mentor-stage">
        <div class="mentor-bubble">¡Hola, Leito! No te dejaré adivinar. Te explicaré cada respuesta hasta que la domines.</div>
        <div class="mentor">🤖</div>
        <div class="orbit o1">💻</div><div class="orbit o2">🌊</div><div class="orbit o3">🗺️</div>
      </div>
    </section>

    <section class="section-heading">
      <div><span class="eyebrow">ESCOGE TU AVENTURA</span><h2>Tres materias, un solo juego</h2></div>
      <button class="ghost" data-action="mistakes">🛠️ Taller de errores <b>${store.mistakes.length}</b></button>
    </section>
    <section class="subject-grid">
      ${subjects.map(s => {
        const p = subjectProgress(s.id);
        const score = store.scores[s.id];
        return `<button class="subject-card ${s.urgent?'urgent':''}" style="--subject:${s.color}" data-subject="${s.id}">
          <div class="subject-top"><span class="subject-emoji">${s.emoji}</span>${s.urgent?'<span class="urgent-badge">PRIORIDAD</span>':''}</div>
          <small>${s.subtitle}</small><h3>${s.name}</h3><p>${s.description}</p>
          <div class="subject-progress"><span><i style="width:${p}%"></i></span><b>${p}%</b></div>
          <div class="subject-foot"><span>${subjectLessons(s.id).length} mundos</span><strong>${score ? `Última nota: ${score}/10` : 'Comenzar →'}</strong></div>
        </button>`;
      }).join('')}
    </section>

    <section class="why panel">
      <div><span class="why-icon">🧠</span><h3>No permite cambiar de respuesta para “probar suerte”</h3><p>Al equivocarse, la respuesta queda bloqueada. El juego explica el concepto y vuelve a preguntarlo más adelante con opciones mezcladas. La misión solo termina cuando el error queda reparado.</p></div>
      <div><span class="why-icon">🔊</span><h3>Mini lecciones narradas</h3><p>El botón “Escuchar como mini-video” lee cada explicación y avanza por la lección. También se puede estudiar manualmente.</p></div>
    </section>
  `);
}

function renderSubject(subjectId) {
  const s = SUBJECTS[subjectId];
  const lessons = subjectLessons(subjectId);
  const progress = subjectProgress(subjectId);
  setView(`
    <section class="screen">
      <div class="screen-head">
        <button class="back" data-action="home">← Inicio</button>
        <div class="screen-title"><span class="eyebrow">${s.subtitle}</span><h1>${s.emoji} ${s.name}</h1><p>${s.description}</p></div>
        <button class="secondary" data-exam="${subjectId}">🏆 Simulacro</button>
      </div>
      <section class="route-summary panel" style="--subject:${s.color}">
        <div><b>${progress}%</b><span>dominado</span></div>
        <div class="route-line"><i style="width:${progress}%"></i></div>
        <p>${subjectId==='informatica'?'Ruta recomendada para hoy: completa los mundos en orden, repara errores y termina con el simulacro.':'Completa una misión por sesión. Cada una enseña antes de evaluar.'}</p>
      </section>
      <section class="lesson-road">
        ${lessons.map((l,index) => {
          const done = store.completed.includes(l.id);
          return `<button class="road-card ${done?'done':''}" data-lesson="${l.id}" style="--subject:${s.color}">
            <span class="road-number">${done?'✓':index+1}</span>
            <span class="road-emoji">${l.emoji}</span>
            <div><small>${done?'DOMINADO':'MUNDO '+(index+1)}</small><h3>${l.title}</h3><p>${l.story}</p></div>
            <strong>${done?'Repasar':'Entrar →'}</strong>
          </button>`;
        }).join('')}
      </section>
      <div class="bottom-actions"><button class="primary" data-exam="${subjectId}">🏆 Simulacro de ${s.name}</button><button class="secondary" data-action="mistakes">🛠️ Reparar mis errores</button></div>
    </section>
  `);
}

function lessonById(id) { return LESSONS.find(l => l.id === id); }

function startLesson(id) {
  const lesson = lessonById(id);
  session = {type:'lesson', lesson, slide:0, game:null, quiz:null};
  renderLessonIntro();
}

function renderLessonIntro() {
  const l = session.lesson;
  const s = SUBJECTS[l.subject];
  setView(`
    <section class="screen">
      <button class="back" data-subject="${l.subject}">← Volver a ${s.name}</button>
      <section class="mission-intro panel" style="--subject:${s.color}">
        <div class="mission-world"><span>${l.emoji}</span><i></i></div>
        <div class="mission-copy"><span class="eyebrow">MUNDO ${l.order} · ${s.name.toUpperCase()}</span><h1>${l.title}</h1><p>${l.story}</p>
          <div class="lesson-path"><span class="active">📖 Mini clase</span><span>🎮 Juego</span><span>🧠 Práctica</span><span>🔧 Reparación</span></div>
          <div class="hero-actions"><button class="primary big" data-action="start-slides">Empezar la mini clase →</button><button class="secondary" data-action="play-lesson">🔊 Escuchar como mini-video</button></div>
        </div>
      </section>
    </section>
  `);
}

const visualIcons = {
  computer:['💻','📥','⚙️','💾','🖥️'], parts:['🖥️','🧠','⌨️','🖱️'], functions:['👀','🧠','✍️','👆'], printer:['🖨️','📄'],
  mouse:['🖱️','➤'], mouseparts:['👈','↕️','👉'], scroll:['📄','↕️'], keyboard:['ABC','F1','Ctrl','←','123'],
  hardware:['🔩','⌨️','🖥️'], software:['✨','🪟','🎨'], hardwareexamples:['🖱️','⌨️','🖨️'], softwareexamples:['Word','Paint','Excel'],
  window:['—','□','✕'], folder:['🖱️','Nuevo','📁','Enter'], power:['🔌','⏻','🖥️'], safe:['🛡️','💻'], copy:['Ctrl+C','📋','Ctrl+V'], undo:['Ctrl+X','✂️','Ctrl+Z'], winapps:['Win+E','📁','Win+R'], windesktop:['Win+L','🔒','Win+D'],
  ocean:['🌊','🐢','🪨','☀️'], animals:['🐢','🦈','🦭','🐧'], biodiversity:['🐟','🦞','🦎','🐬'], reef:['🪸','🐠','🐢'], veda:['🚫','🎣','🐟'], eggs:['🦞','🥚'], fishing:['📏','📅','🎣'], cleansea:['♻️','🌊','🐢'],
  biotic:['🐢','🌿','🦠'], abiotic:['💧','☀️','🪨'], foodchain:['🌿','🐟','🦈','🍄'], chain:['☀️','🌿','🐟','🦈'], thermometer:['🌡️','°C'], heatflow:['🔥','→','🧊'], equilibrium:['☕','⇄','🥛'], molecules:['●●●','↔','●  ●  ●'], conduction:['🔥','🥄'], convection:['⬆️','🍲','⬇️'], radiation:['☀️','〰️','🌍'], sun:['☀️','🌱','💧','💨'],
  human:['🧬','🧑'], skills:['🧠','🗣️','🤝','🛠️'], adapt:['🔥','🏕️','🧥'], migration:['🚶','➡️','🌍'], beringia:['Asia','➡️','Beringia','➡️','Alaska'], nomad:['🏕️','🚶'], activities:['🏹','🎣','🫐'], tools:['🪨','🦴','🪵'], coast:['🌊','🏖️','🌴'], andes:['⛰️','🌋'], amazon:['🌳','🏞️'], islands:['🐢','🏝️'], north:['⬆️','🇨🇴'], southeast:['↘️','🇵🇪'], west:['⬅️','🌊'], equator:['🌎','➖']
};

function visualHTML(type) {
  const icons = visualIcons[type] || ['✨','🧠','⭐'];
  return `<div class="animated-visual">${icons.map((x,i) => `<span style="--i:${i}">${x}</span>`).join('')}<div class="scan-line"></div></div>`;
}

function renderSlide(index, autoplay=false) {
  const l = session.lesson;
  session.slide = index;
  const slide = l.slides[index];
  const s = SUBJECTS[l.subject];
  setView(`
    <section class="screen">
      <div class="screen-head">
        <button class="back" data-lesson="${l.id}">← Reiniciar mundo</button>
        <div class="screen-title compact"><span class="eyebrow">MINI CLASE · ${index+1} DE ${l.slides.length}</span><h1>${l.emoji} ${l.title}</h1></div>
        <button class="icon-button" data-action="speak-slide">🔊</button>
      </div>
      <section class="teaching-stage panel" style="--subject:${s.color}">
        <div class="lesson-dots">${l.slides.map((_,i)=>`<i class="${i<=index?'active':''}"></i>`).join('')}</div>
        <div class="teaching-grid">
          <div class="teaching-visual">${visualHTML(slide.visual)}</div>
          <article class="teaching-copy">
            <span class="teacher-label">🤖 PROFESOR INFO</span>
            <h2>${slide.title}</h2>
            <p>${slide.text}</p>
            <div class="memory-code"><small>CÓDIGO PARA RECORDAR</small><strong>${slide.remember}</strong></div>
            <div class="teacher-question"><b>Dilo con tus palabras:</b> ¿Cómo se lo explicarías a otra persona?</div>
          </article>
        </div>
        <div class="slide-actions">
          ${index>0?'<button class="secondary" data-action="prev-slide">← Anterior</button>':'<span></span>'}
          <button class="secondary" data-action="speak-slide">🔊 Escuchar explicación</button>
          <button class="primary" data-action="next-slide">${index===l.slides.length-1?'Ir al juego 🎮':'Entendí, siguiente →'}</button>
        </div>
      </section>
    </section>
  `);
  if (autoplay) {
    speak(`${slide.title}. ${slide.text}. Recuerda: ${slide.remember}.`, () => {
      setTimeout(() => {
        if (!session || session.type !== 'lesson' || session.slide !== index) return;
        if (index < l.slides.length - 1) renderSlide(index+1, true);
        else renderMiniGame();
      }, 700);
    });
  }
}

function renderMiniGame() {
  const l = session.lesson;
  const game = l.game;
  session.game = {index:0, score:0, selected:new Set(), order:[], locked:false};
  const s = SUBJECTS[l.subject];
  setView(`
    <section class="screen">
      <div class="screen-head"><button class="back" data-subject="${l.subject}">✕ Salir</button><div class="screen-title compact"><span class="eyebrow">DEMOSTRACIÓN INTERACTIVA</span><h1>🎮 ${l.title}</h1><p>${game.prompt}</p></div><span class="game-score" id="gameScore">0 ⭐</span></div>
      <section class="game-stage panel" style="--subject:${s.color}"><div id="gameArea"></div><div id="gameFeedback" class="game-feedback" aria-live="polite"></div></section>
    </section>
  `);
  drawGame();
}

function drawGame() {
  const g = session.lesson.game;
  const st = session.game;
  const area = document.querySelector('#gameArea');
  document.querySelector('#gameFeedback').innerHTML = '';
  if (g.type === 'pick') {
    area.innerHTML = `<div class="pick-grid">${g.items.map((item,i)=>`<button class="pick-item ${st.selected.has(i)?'selected':''}" data-pick="${i}">${item}</button>`).join('')}</div><button class="primary game-check" data-action="check-pick">Comprobar selección</button>`;
  }
  if (g.type === 'classify') {
    if (st.index >= g.items.length) return finishGame();
    const [item] = g.items[st.index];
    area.innerHTML = `<div class="game-counter">Elemento ${st.index+1} de ${g.items.length}</div><div class="classify-item">${item}</div><div class="category-buttons">${g.categories.map((c,i)=>`<button class="category-button" data-category="${i}">${c}</button>`).join('')}</div>`;
  }
  if (g.type === 'sequence') {
    if (!st.pool) st.pool = shuffle(g.items.map((text,i)=>({text,i})));
    if (st.index >= g.items.length) return finishGame();
    area.innerHTML = `<div class="game-counter">Paso ${st.index+1} de ${g.items.length}</div><h2>¿Qué va ahora?</h2><div class="sequence-built">${st.order.map(x=>`<span>✓ ${x}</span>`).join('')}</div><div class="sequence-options">${st.pool.map((x,i)=>`<button class="sequence-button" data-sequence="${i}">${x.text}</button>`).join('')}</div>`;
  }
  if (g.type === 'match') {
    if (!st.pool) st.pool = g.pairs.map(([left,right],i)=>({left,right,i,choices:shuffle(g.pairs.map(p=>p[1]))}));
    if (st.index >= st.pool.length) return finishGame();
    const p = st.pool[st.index];
    area.innerHTML = `<div class="game-counter">Pareja ${st.index+1} de ${st.pool.length}</div><div class="match-left">${p.left}</div><p>¿Qué significa?</p><div class="category-buttons">${p.choices.map((c,i)=>`<button class="category-button" data-match="${i}">${c}</button>`).join('')}</div>`;
  }
}

function gameFeedback(ok, text, nextFn) {
  const box = document.querySelector('#gameFeedback');
  box.className = `game-feedback show ${ok?'good':'bad'}`;
  box.innerHTML = `<b>${ok?'✅ ¡Bien!':'🧠 Aprende esto:'}</b> ${text}<button class="secondary" id="gameContinue">Continuar →</button>`;
  document.querySelectorAll('#gameArea button').forEach(b=>b.disabled=true);
  document.querySelector('#gameContinue').addEventListener('click', nextFn, {once:true});
  beep(ok);
}

function chooseCategory(index) {
  if (session.game.locked) return;
  session.game.locked = true;
  const g = session.lesson.game;
  const [,correct] = g.items[session.game.index];
  const ok = index === correct;
  if (ok) { session.game.score++; store.xp += 5; }
  gameFeedback(ok, ok ? `Correcto: pertenece a ${g.categories[correct]}.` : `La categoría correcta es ${g.categories[correct]}. No puedes cambiar la respuesta; volverá después en la práctica.`, () => {
    session.game.index++; session.game.locked=false; save(); drawGame();
  });
}

function chooseSequence(poolIndex) {
  if (session.game.locked) return;
  session.game.locked=true;
  const g=session.lesson.game, chosen=session.game.pool[poolIndex], correctIndex=session.game.index;
  const ok=chosen.i===correctIndex;
  if(ok){session.game.score++;store.xp+=5;session.game.order.push(chosen.text);session.game.pool.splice(poolIndex,1);}
  gameFeedback(ok, ok?'Ese es el siguiente paso.':`El siguiente paso correcto es: ${g.items[correctIndex]}.`,()=>{
    if(!ok){const correctPoolIndex=session.game.pool.findIndex(x=>x.i===correctIndex);const correct=session.game.pool.splice(correctPoolIndex,1)[0];session.game.order.push(correct.text);}
    session.game.index++;session.game.locked=false;save();drawGame();
  });
}

function chooseMatch(choiceIndex) {
  if(session.game.locked)return;session.game.locked=true;
  const p=session.game.pool[session.game.index], chosen=p.choices[choiceIndex], ok=chosen===p.right;
  if(ok){session.game.score++;store.xp+=5;}
  gameFeedback(ok,ok?'Pareja correcta.':`${p.left} significa: ${p.right}.`,()=>{session.game.index++;session.game.locked=false;save();drawGame();});
}

function checkPick() {
  const g=session.lesson.game, selected=[...session.game.selected].sort((a,b)=>a-b), correct=[...g.correct].sort((a,b)=>a-b);
  const ok=selected.length===correct.length && selected.every((x,i)=>x===correct[i]);
  if(ok){session.game.score=g.correct.length;store.xp+=20;save();gameFeedback(true,'Seleccionaste exactamente los elementos correctos.',finishGame);}
  else gameFeedback(false,`La selección correcta es: ${correct.map(i=>g.items[i]).join(', ')}.`,finishGame);
}

function finishGame() {
  store.xp += 20; save(); confetti();
  const l=session.lesson;
  setView(`<section class="screen"><section class="checkpoint panel"><div class="checkpoint-icon">🎮✅</div><span class="eyebrow">DEMOSTRACIÓN SUPERADA</span><h1>Ahora sí: práctica con memoria</h1><p>En la práctica solo podrás responder una vez. Si fallas, el juego te enseñará la respuesta y volverá a preguntarla más adelante hasta que la contestes correctamente.</p><button class="primary big" data-action="start-practice">Comenzar práctica →</button><button class="secondary" data-lesson="${l.id}">Repasar la clase</button></section></section>`);
}
