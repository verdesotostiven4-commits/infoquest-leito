function prepareQuestion(q) {
  const baseOptions = q.rawOptions || q.options;
  const baseAnswer = q.rawAnswer ?? q.answer;
  const options=shuffle(baseOptions.map((text,i)=>({text,correct:i===baseAnswer})));
  return {...q, rawOptions:baseOptions, rawAnswer:baseAnswer, options:options.map(x=>x.text), answer:options.findIndex(x=>x.correct)};
}

function startPractice(lesson) {
  session.quiz={mode:'practice',lesson,queue:shuffle(lesson.questions).map(prepareQuestion),repair:[],index:0,correct:0,firstTry:0,answered:false,round:'normal'};
  renderQuestion();
}

function startExam(subjectId) {
  const pool=ALL_QUESTIONS.filter(q=>q.subject===subjectId);
  const count=Math.min(subjectId==='informatica'?21:20,pool.length);
  session={type:'exam',quiz:{mode:'exam',subjectId,queue:shuffle(pool).slice(0,count).map(prepareQuestion),index:0,correct:0,answered:false,wrong:[]}};
  renderQuestion();
}

function renderQuestion() {
  const qz=session.quiz;
  if(qz.index>=qz.queue.length){
    if(qz.mode==='practice' && qz.round==='normal' && qz.repair.length){
      qz.queue=shuffle(qz.repair).map(prepareQuestion);qz.repair=[];qz.index=0;qz.round='repair';qz.answered=false;return renderQuestion();
    }
    if(qz.mode==='practice' && qz.round==='repair' && qz.repair.length){
      qz.queue=shuffle(qz.repair).map(prepareQuestion);qz.repair=[];qz.index=0;qz.answered=false;return renderQuestion();
    }
    return qz.mode==='exam'?examResults():practiceResults();
  }
  const q=qz.queue[qz.index];
  const label=qz.mode==='exam'?'SIMULACRO SIN PISTAS':qz.round==='repair'?'RONDA DE REPARACIÓN':'PRÁCTICA GUIADA';
  const total=qz.queue.length;
  setView(`
    <section class="screen">
      <div class="screen-head"><button class="back" data-action="home">✕ Salir</button><div class="screen-title compact"><span class="eyebrow">${label}</span><h1>${qz.mode==='exam'?'🏆 Jefe final':'🧠 Demuestra lo aprendido'}</h1></div><span class="game-score">${qz.correct} correctas</span></div>
      <section class="quiz-shell panel">
        <div class="quiz-top"><span>Pregunta ${qz.index+1} de ${total}</span><div class="progress"><i style="width:${Math.round(qz.index/total*100)}%"></i></div></div>
        <article class="question-card"><div class="question-visual">${q.visual}</div><h2>${q.q}</h2><div class="answers">${q.options.map((a,i)=>`<button class="answer" data-answer="${i}"><b>${String.fromCharCode(65+i)}.</b> ${a}</button>`).join('')}</div><div id="feedback" class="feedback"></div><button id="nextQuestion" class="primary quiz-next" data-action="next-question">Siguiente →</button></article>
      </section>
    </section>
  `);
}

function answerQuestion(index) {
  const qz=session.quiz;if(qz.answered)return;qz.answered=true;
  const q=qz.queue[qz.index],ok=index===q.answer;
  document.querySelectorAll('.answer').forEach((b,i)=>{b.disabled=true;if(i===index)b.classList.add(ok?'correct':'wrong');if(qz.mode==='practice'&&i===q.answer)b.classList.add('correct');});
  const fb=document.querySelector('#feedback');
  if(qz.mode==='exam'){
    fb.className=`feedback show ${ok?'good':'bad'}`;fb.innerHTML=ok?'<b>✅ Respuesta guardada.</b>':'<b>🔒 Respuesta guardada. No se puede cambiar.</b>';
    if(ok)qz.correct++;else{qz.wrong.push(q);store.mistakes.push(q.id);} 
  } else {
    fb.className=`feedback show ${ok?'good':'bad'}`;
    if(ok){qz.correct++;if(qz.round==='normal')qz.firstTry++;store.xp+=10;store.mistakes=store.mistakes.filter(id=>id!==q.id);fb.innerHTML=`<b>✅ ¡Correcto de verdad!</b><br>${q.explain}`;}
    else{qz.repair.push({...q,options:q.rawOptions,answer:q.rawAnswer});store.mistakes.push(q.id);fb.innerHTML=`<b>🧠 Esta respuesta queda bloqueada.</b><br>La correcta es <strong>${q.options[q.answer]}</strong>.<br>${q.explain}<br><small>Volverá más adelante para comprobar que la recordaste.</small>`;}
  }
  beep(ok);save();document.querySelector('#nextQuestion').classList.add('show');
}

function nextQuestion(){session.quiz.index++;session.quiz.answered=false;renderQuestion();}

function practiceResults() {
  const qz=session.quiz,l=qz.lesson;
  if(!store.completed.includes(l.id))store.completed.push(l.id);
  store.xp+=50;save();confetti();
  setView(`<section class="screen"><section class="results panel"><div class="result-orb"><strong>✓</strong></div><span class="eyebrow">DOMINIO COMPROBADO</span><h1>¡Mundo superado!</h1><p>Leito respondió todas las preguntas, y las que falló fueron enseñadas y repetidas hasta quedar reparadas.</p><div class="result-metrics"><div><b>${qz.firstTry}/${l.questions.length}</b><span>correctas al primer intento</span></div><div><b>100%</b><span>errores reparados</span></div><div><b>+${50+l.questions.length*10}</b><span>XP aproximados</span></div></div><div class="result-actions"><button class="primary" data-subject="${l.subject}">Siguiente mundo →</button><button class="secondary" data-lesson="${l.id}">Repetir mundo</button><button class="secondary" data-exam="${l.subject}">Ir al simulacro</button></div></section></section>`);
}

function examResults() {
  const qz=session.quiz,total=qz.queue.length,grade=Number((qz.correct/total*10).toFixed(1));
  store.scores[qz.subjectId]=grade;save();if(grade>=8)confetti();
  const s=SUBJECTS[qz.subjectId];
  setView(`<section class="screen"><section class="results panel"><div class="grade-orb" style="--grade:${grade*36}deg"><strong>${grade}/10</strong></div><span class="eyebrow">RESULTADO DEL SIMULACRO</span><h1>${grade>=9?'¡Listo para sacar una gran nota!':grade>=8?'Muy bien preparado':grade>=6?'Falta una reparación rápida':'Primero completa las mini clases'}</h1><p>Acertó <b>${qz.correct} de ${total}</b>. ${grade>=8?'Conviene repasar solamente los errores y descansar.':'Los errores quedaron guardados en el Taller de reparación.'}</p>${qz.wrong.length?`<div class="wrong-review"><h3>Temas a reparar</h3>${qz.wrong.slice(0,8).map(q=>`<div><span>${q.visual}</span><p><b>${q.q}</b><small>${q.explain}</small></p></div>`).join('')}</div>`:'<div class="perfect-banner">✨ No hubo errores</div>'}<div class="result-actions"><button class="primary" data-action="mistakes">🛠️ Practicar errores</button><button class="secondary" data-exam="${qz.subjectId}">Repetir simulacro</button><button class="secondary" data-subject="${qz.subjectId}">Volver a ${s.name}</button></div></section></section>`);
}

function mistakesWorkshop() {
  const pool=ALL_QUESTIONS.filter(q=>store.mistakes.includes(q.id));
  if(!pool.length){setView(`<section class="screen"><section class="checkpoint panel"><div class="checkpoint-icon">✨</div><h1>No hay errores pendientes</h1><p>Completa una misión o un simulacro. Los errores aparecerán aquí y se repetirán hasta quedar dominados.</p><button class="primary" data-action="home">Volver al inicio</button></section></section>`);return;}
  const fakeLesson={id:'repair-all',subject:pool[0].subject,title:'Taller de reparación',questions:pool};
  session={type:'repair',lesson:fakeLesson,quiz:{mode:'practice',lesson:fakeLesson,queue:shuffle(pool).map(prepareQuestion),repair:[],index:0,correct:0,firstTry:0,answered:false,round:'repair'}};
  renderQuestion();
}

function continueProgress(){
  const next=LESSONS.find(l=>!store.completed.includes(l.id));
  if(next)startLesson(next.id);else renderSubject('informatica');
}

app.addEventListener('click', e => {
  const btn=e.target.closest('button');if(!btn)return;
  if(btn.dataset.subject)return renderSubject(btn.dataset.subject);
  if(btn.dataset.lesson)return startLesson(btn.dataset.lesson);
  if(btn.dataset.exam)return startExam(btn.dataset.exam);
  if(btn.dataset.answer!==undefined)return answerQuestion(Number(btn.dataset.answer));
  if(btn.dataset.pick!==undefined){const i=Number(btn.dataset.pick);session.game.selected.has(i)?session.game.selected.delete(i):session.game.selected.add(i);return drawGame();}
  if(btn.dataset.category!==undefined)return chooseCategory(Number(btn.dataset.category));
  if(btn.dataset.sequence!==undefined)return chooseSequence(Number(btn.dataset.sequence));
  if(btn.dataset.match!==undefined)return chooseMatch(Number(btn.dataset.match));
  const action=btn.dataset.action;
  if(action==='home')home();
  if(action==='continue')continueProgress();
  if(action==='mistakes')mistakesWorkshop();
  if(action==='start-slides')renderSlide(0);
  if(action==='play-lesson')renderSlide(0,true);
  if(action==='prev-slide')renderSlide(Math.max(0,session.slide-1));
  if(action==='next-slide'){if(session.slide<session.lesson.slides.length-1)renderSlide(session.slide+1);else renderMiniGame();}
  if(action==='speak-slide'){const slide=session.lesson.slides[session.slide];speak(`${slide.title}. ${slide.text}. Recuerda: ${slide.remember}.`);}
  if(action==='check-pick')checkPick();
  if(action==='start-practice')startPractice(session.lesson);
  if(action==='next-question')nextQuestion();
});

soundButton.addEventListener('click',()=>{store.sound=!store.sound;if(!store.sound)stopSpeech();save();notify(store.sound?'Sonido y narración activados':'Sonido y narración desactivados');});

updateTop();
home();
