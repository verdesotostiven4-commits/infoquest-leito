(() => {
  const base = {
    setView, home, renderSubject, startLesson, startExam, renderSlide,
    renderMiniGame, renderQuestion, answerQuestion, gameFeedback,
    finishGame, practiceResults, examResults, beep, speak, stopSpeech
  };

  const praise = ['¡Excelente!', '¡Eso es!', '¡Qué nivel!', '¡Respuesta poderosa!', '¡Súper bien!', '¡Misión cumplida!'];
  const retry = ['Tranquilo, ahora sí quedará grabado.', 'Casi. Mira la explicación y lo repararás.', 'Buen intento. Este reto volverá más adelante.', 'No pasa nada: aprender también es corregir.'];
  const subjectFx = {
    home: ['✨','⭐','🚀','🎮'],
    informatica: ['⚡','💾','⌨️','0','1','🖱️'],
    ciencias: ['🫧','🌿','🐠','☀️','💧'],
    estudios: ['🧭','🗺️','👣','⛰️','🏕️']
  };

  let combo = 0;
  let audioCtx = null;
  let musicTimer = null;
  let musicStep = 0;
  let musicGain = null;
  let captionTimer = null;
  let spanishVoices = [];
  let voiceRate = Number(localStorage.getItem('iq3-rate') || 1.22);
  let musicEnabled = localStorage.getItem('iq3-music') !== 'off';

  function currentSubject() {
    return session?.lesson?.subject || session?.quiz?.subjectId || document.body.dataset.subject || 'home';
  }

  function random(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function ensureAudio() {
    if (audioCtx) {
      if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
      return audioCtx;
    }
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtx();
      musicGain = audioCtx.createGain();
      musicGain.gain.value = .012;
      musicGain.connect(audioCtx.destination);
      return audioCtx;
    } catch (_) { return null; }
  }

  function tone(freq, duration=.12, type='sine', volume=.035, delay=0, destination=null) {
    const ctx = ensureAudio(); if (!ctx) return;
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
    gain.gain.setValueAtTime(volume, ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + delay + duration);
    osc.connect(gain); gain.connect(destination || ctx.destination);
    osc.start(ctx.currentTime + delay); osc.stop(ctx.currentTime + delay + duration + .02);
  }

  function sfx(type) {
    if (!store.sound) return;
    if (type === 'tap') tone(360,.045,'sine',.018);
    if (type === 'whoosh') { tone(220,.16,'triangle',.025); tone(460,.18,'sine',.018,.08); }
    if (type === 'correct') { tone(523,.12,'triangle',.045); tone(659,.13,'triangle',.04,.09); tone(784,.2,'triangle',.04,.18); }
    if (type === 'wrong') { tone(180,.18,'sawtooth',.032); tone(135,.22,'sawtooth',.025,.12); }
    if (type === 'level') { [392,523,659,784,1046].forEach((n,i)=>tone(n,.22,'triangle',.045,i*.09)); }
    if (type === 'combo') { [659,784,988].forEach((n,i)=>tone(n,.12,'square',.025,i*.055)); }
  }

  beep = function(ok=true) { sfx(ok ? 'correct' : 'wrong'); };

  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    spanishVoices = voices.filter(v => /^es[-_]/i.test(v.lang) || /español|spanish/i.test(v.name));
    const priorities = [/Sabina/i,/Paulina/i,/Elvira/i,/Helena/i,/Google.*español/i,/Microsoft.*Spanish/i,/español/i];
    spanishVoices.sort((a,b) => {
      const rank = v => { const i=priorities.findIndex(r=>r.test(v.name)); return i<0?99:i; };
      return rank(a)-rank(b);
    });
  }
  loadVoices();
  if ('speechSynthesis' in window) window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices);

  function ensureCaption() {
    let caption = document.querySelector('#voiceCaption');
    if (!caption) {
      caption = document.createElement('div'); caption.id = 'voiceCaption';
      caption.setAttribute('aria-live','polite'); document.body.appendChild(caption);
    }
    return caption;
  }

  function startCaption(text) {
    clearInterval(captionTimer);
    const caption = ensureCaption();
    const words = text.replace(/\s+/g,' ').trim().split(' ');
    caption.innerHTML = words.map((w,i)=>`<span data-word="${i}">${w}</span>`).join(' ');
    caption.classList.add('show');
    let index=0;
    const step=Math.max(125,310/voiceRate);
    captionTimer=setInterval(()=>{
      caption.querySelectorAll('span').forEach((s,i)=>s.classList.toggle('spoken',i===index));
      index++; if(index>=words.length)clearInterval(captionTimer);
    },step);
  }

  function stopCaption() {
    clearInterval(captionTimer);
    const caption=document.querySelector('#voiceCaption');
    if(caption){caption.querySelectorAll('span').forEach(s=>s.classList.remove('spoken'));setTimeout(()=>caption.classList.remove('show'),280);}
  }

  function bestVoice() {
    loadVoices();
    return spanishVoices.find(v=>/EC|MX|US/i.test(v.lang)) || spanishVoices[0] || null;
  }

  speak = function(text, onend) {
    if (!store.sound || !('speechSynthesis' in window)) { if(onend)onend(); return; }
    window.speechSynthesis.cancel();
    const cleaned = text.replace(/\.\s+/g,'.  ').replace(/Recuerda:/gi,'¡Recuerda!');
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang='es-EC'; utterance.rate=voiceRate; utterance.pitch=1.13; utterance.volume=1;
    const voice=bestVoice(); if(voice)utterance.voice=voice;
    activeSpeech=utterance; document.body.classList.add('is-speaking');
    setSidekick(cleaned.length>125?'¡Escucha este secreto!':'¡Atención, Leito!',3500);
    startCaption(cleaned);
    if(musicGain&&audioCtx)musicGain.gain.setTargetAtTime(.004,audioCtx.currentTime,.08);
    utterance.onend=()=>{activeSpeech=null;document.body.classList.remove('is-speaking');stopCaption();if(musicGain&&audioCtx)musicGain.gain.setTargetAtTime(.012,audioCtx.currentTime,.16);if(onend)onend();};
    utterance.onerror=()=>{document.body.classList.remove('is-speaking');stopCaption();if(onend)onend();};
    window.speechSynthesis.speak(utterance);
  };

  stopSpeech = function() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    activeSpeech=null; document.body.classList.remove('is-speaking'); stopCaption();
  };

  function startMusic() {
    if(!musicEnabled || !store.sound || musicTimer)return;
    const ctx=ensureAudio();if(!ctx)return;
    const melodies={
      informatica:[261.6,329.6,392,523.2,392,329.6],
      ciencias:[220,293.7,329.6,440,329.6,293.7],
      estudios:[196,246.9,293.7,392,293.7,246.9],
      home:[261.6,392,329.6,523.2,392,329.6]
    };
    musicTimer=setInterval(()=>{
      if(!musicEnabled||!store.sound||document.hidden)return;
      const seq=melodies[currentSubject()]||melodies.home;
      tone(seq[musicStep%seq.length],.65,'sine',.018,0,musicGain);
      if(musicStep%2===0)tone(seq[(musicStep+2)%seq.length]/2,.8,'triangle',.009,.08,musicGain);
      musicStep++;
    },900);
  }
  function stopMusic(){clearInterval(musicTimer);musicTimer=null;}
  function syncMusic(){if(musicEnabled&&store.sound)startMusic();else stopMusic();updateExtraControls();}

  function ensureExtraControls() {
    const stats=document.querySelector('.top-stats');if(!stats)return;
    if(!document.querySelector('#voiceRateButton')){
      const rate=document.createElement('button');rate.id='voiceRateButton';rate.className='voice-control';rate.title='Cambiar velocidad de la voz';
      rate.addEventListener('click',()=>{const rates=[1.08,1.22,1.35];const i=rates.findIndex(r=>Math.abs(r-voiceRate)<.02);voiceRate=rates[(i+1)%rates.length];localStorage.setItem('iq3-rate',voiceRate);updateExtraControls();notify(`Voz a ${voiceRate}x`);sfx('combo');});
      const music=document.createElement('button');music.id='musicButton';music.className='voice-control';music.title='Activar o desactivar música de aventura';
      music.addEventListener('click',()=>{musicEnabled=!musicEnabled;localStorage.setItem('iq3-music',musicEnabled?'on':'off');syncMusic();notify(musicEnabled?'Música de aventura activada':'Música desactivada');});
      stats.insertBefore(rate,soundButton);stats.insertBefore(music,soundButton);
    }
    updateExtraControls();
  }
  function updateExtraControls(){const r=document.querySelector('#voiceRateButton'),m=document.querySelector('#musicButton');if(r)r.textContent=`🗣️ ${voiceRate}x`;if(m)m.textContent=musicEnabled?'🎵':'🎵̸';}

  function ensureAtmosphere() {
    let layer=document.querySelector('#fxAtmosphere');
    if(!layer){layer=document.createElement('div');layer.id='fxAtmosphere';document.body.appendChild(layer);}
    const subject=currentSubject(),icons=subjectFx[subject]||subjectFx.home;
    if(layer.dataset.subject===subject)return;
    layer.dataset.subject=subject;layer.innerHTML='';
    for(let i=0;i<18;i++){
      const p=document.createElement('span');p.textContent=icons[i%icons.length];
      p.style.left=`${Math.random()*96}%`;p.style.setProperty('--dur',`${11+Math.random()*13}s`);p.style.setProperty('--delay',`${-Math.random()*18}s`);p.style.setProperty('--drift',`${-55+Math.random()*110}px`);layer.appendChild(p);
    }
  }

  function ensureSidekick() {
    let side=document.querySelector('#iqSidekick');
    if(!side){side=document.createElement('div');side.id='iqSidekick';side.innerHTML='<div class="sidekick-bubble">¡Vamos, Leito!</div><div class="sidekick-bot">🤖</div>';document.body.appendChild(side);}
    side.classList.toggle('hidden',currentSubject()==='home'&&!!document.querySelector('.mentor-stage'));
    return side;
  }
  function setSidekick(text,duration=2300){const side=ensureSidekick(),bubble=side.querySelector('.sidekick-bubble');bubble.textContent=text;side.classList.add('talking');clearTimeout(setSidekick.timer);setSidekick.timer=setTimeout(()=>side.classList.remove('talking'),duration);}

  function ripple(e){const button=e.target.closest('button');if(!button)return;const rect=button.getBoundingClientRect(),size=Math.max(rect.width,rect.height);const r=document.createElement('span');r.className='iq-ripple';r.style.width=r.style.height=`${size}px`;r.style.left=`${e.clientX-rect.left-size/2}px`;r.style.top=`${e.clientY-rect.top-size/2}px`;button.appendChild(r);setTimeout(()=>r.remove(),600);}

  function starBurst(target=document.querySelector('.question-card')||document.body) {
    const rect=target.getBoundingClientRect?.()||{left:innerWidth/2,top:innerHeight/2,width:0,height:0};
    const x=rect.left+rect.width/2,y=rect.top+Math.min(rect.height/2,220);
    for(let i=0;i<14;i++){const s=document.createElement('i');s.className='star-burst';s.textContent=i%3===0?'⭐':'✨';s.style.left=`${x}px`;s.style.top=`${y}px`;const a=(Math.PI*2/14)*i,d=70+Math.random()*100;s.style.setProperty('--x',`${Math.cos(a)*d}px`);s.style.setProperty('--y',`${Math.sin(a)*d}px`);document.body.appendChild(s);setTimeout(()=>s.remove(),850);}
  }

  function feedbackMotion(ok){document.body.classList.remove('feedback-correct','feedback-wrong');void document.body.offsetWidth;document.body.classList.add(ok?'feedback-correct':'feedback-wrong');setTimeout(()=>document.body.classList.remove('feedback-correct','feedback-wrong'),650);if(ok)starBurst();}

  function showCombo() {
    if(combo<2)return;
    let badge=document.querySelector('#comboBadge');if(!badge){badge=document.createElement('div');badge.id='comboBadge';document.body.appendChild(badge);}
    badge.textContent=`🔥 COMBO x${combo}`;badge.classList.remove('show');void badge.offsetWidth;badge.classList.add('show');sfx('combo');
  }

  function addTilt() {
    document.querySelectorAll('.subject-card,.road-card').forEach(card=>{
      card.addEventListener('pointermove',e=>{if(innerWidth<800)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${-y*5}deg) rotateY(${x*7}deg) translateY(-4px)`;});
      card.addEventListener('pointerleave',()=>card.style.transform='');
    });
  }

  function decorateView() {
    ensureExtraControls();ensureAtmosphere();ensureSidekick();addTilt();
    app.classList.remove('scene-enter');void app.offsetWidth;app.classList.add('scene-enter');
  }

  setView = function(html){base.setView(html);decorateView();};
  home = function(){document.body.dataset.subject='home';base.home();};
  renderSubject = function(id){document.body.dataset.subject=id;base.renderSubject(id);setSidekick(id==='informatica'?'¡Vamos por el examen de mañana!':id==='ciencias'?'¡A explorar Galápagos!':'¡Viajemos por la historia!',2600);};
  startLesson = function(id){const l=lessonById(id);document.body.dataset.subject=l?.subject||'home';base.startLesson(id);sfx('whoosh');};
  startExam = function(id){document.body.dataset.subject=id;combo=0;base.startExam(id);setSidekick('Modo examen: una sola respuesta. ¡Tú puedes!',3000);};

  renderSlide = function(index,autoplay=false){base.renderSlide(index,autoplay);document.querySelector('.teaching-stage')?.classList.add('cinematic');if(!autoplay)setSidekick(index===0?'Primero observa. Después repítelo con tus palabras.':'¡Nuevo secreto desbloqueado!',2100);};
  renderMiniGame = function(){base.renderMiniGame();sfx('whoosh');setSidekick('Ahora toca usar lo aprendido. ¡Nada de adivinar!',2900);};
  renderQuestion = function(){base.renderQuestion();setSidekick(session?.quiz?.mode==='exam'?'Lee con calma antes de responder.':'Solo tienes un intento; piensa y responde.',1700);};

  answerQuestion = function(index){
    const qz=session?.quiz,q=qz?.queue?.[qz.index];if(!qz||qz.answered||!q)return;
    const ok=index===q.answer,practice=qz.mode==='practice';
    base.answerQuestion(index);feedbackMotion(ok);
    if(practice){
      if(ok){combo++;showCombo();if(combo>0&&combo%3===0){store.xp+=5;save();notify('🔥 Bono de combo: +5 XP');}setSidekick(`${random(praise)} ${q.explain}`,3100);speak(`${random(praise)} ${q.explain}`);}
      else{combo=0;setSidekick(random(retry),3000);speak(`Casi. ${q.explain}`);}
    } else {combo=ok?combo+1:0;if(ok)showCombo();}
  };

  gameFeedback = function(ok,text,nextFn){base.gameFeedback(ok,text,nextFn);feedbackMotion(ok);if(ok){combo++;showCombo();setSidekick(random(praise),1900);speak(`${random(praise)} ${text}`);}else{combo=0;setSidekick(random(retry),2500);speak(`Mira bien. ${text}`);}};
  finishGame = function(){base.finishGame();sfx('level');setSidekick('¡Juego superado! Ahora vamos a comprobar la memoria.',3200);};
  practiceResults = function(){base.practiceResults();sfx('level');setSidekick('¡Mundo dominado y errores reparados!',3600);speak('¡Mundo dominado! Las respuestas equivocadas fueron enseñadas y repetidas hasta quedar aprendidas.');};
  examResults = function(){const qz=session?.quiz,total=qz?.queue?.length||1,grade=qz?Number((qz.correct/total*10).toFixed(1)):0;base.examResults();if(grade>=8){sfx('level');starBurst(document.querySelector('.results')||document.body);speak(`¡Gran trabajo! Tu nota es ${grade} sobre diez.`);}else setSidekick('Todavía podemos reparar los errores. ¡No te rindas!',3500);};

  document.addEventListener('pointerdown',e=>{ripple(e);if(e.target.closest('button'))sfx('tap');ensureAudio();syncMusic();},{passive:true});
  soundButton.addEventListener('click',()=>setTimeout(syncMusic,0));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopMusic();else syncMusic();});

  ensureExtraControls();ensureAtmosphere();ensureSidekick();
  document.body.dataset.subject='home';
  home();
})();
