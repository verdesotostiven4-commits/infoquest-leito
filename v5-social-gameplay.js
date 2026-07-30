(() => {
  const baseRenderMiniGame = renderMiniGame;
  const baseRenderSubject = renderSubject;

  const routeChallenges = [
    {id:'bering', icon:'🧊', title:'Teoría de Bering', clue:'Una franja de tierra unió Asia con Alaska durante una glaciación.', explain:'Beringia permitió el paso desde Asia hacia Alaska.'},
    {id:'coast', icon:'🌊', title:'Ruta costera', clue:'Los grupos avanzaron bordeando el océano Pacífico y usando recursos marinos.', explain:'La ruta costera seguía el litoral del Pacífico.'},
    {id:'atlantic', icon:'⛵', title:'Atlántico marítimo', clue:'Esta propuesta plantea un recorrido marítimo desde Europa por el Atlántico norte.', explain:'La teoría atlántica propone una llegada por el océano Atlántico.'},
    {id:'pacific', icon:'🛶', title:'Teoría del Pacífico', clue:'Esta propuesta relaciona Oceanía con América a través del gran océano.', explain:'La teoría del Pacífico plantea viajes desde Oceanía.'}
  ];

  const campChallenges = [
    {title:'Conseguir alimento', icon:'🍖', prompt:'El grupo tiene hambre. ¿Qué actividades corresponden a los primeros pobladores?', options:['Cazar, pescar y recolectar','Comprar en un supermercado','Trabajar en una fábrica'], answer:0, unlock:'🏹 Alimento conseguido'},
    {title:'Crear un refugio', icon:'🏕️', prompt:'Se acerca la noche. ¿Dónde podían protegerse?', options:['En cuevas o refugios de ramas y pieles','En edificios de veinte pisos','Dentro de un automóvil'], answer:0, unlock:'🛖 Refugio preparado'},
    {title:'Organizar el grupo', icon:'🤝', prompt:'Hay muchas tareas. ¿Cuál era la mejor forma de sobrevivir?', options:['Colaborar y repartir tareas','Trabajar siempre separados','No compartir conocimientos'], answer:0, unlock:'👥 Equipo organizado'},
    {title:'Dominar el fuego', icon:'🔥', prompt:'¿Para qué servía el fuego?', options:['Calentar, iluminar, proteger y cocinar','Encender televisores','Mover vehículos'], answer:0, unlock:'🔥 Fuego dominado'}
  ];

  const memoryPairs = [
    ['🪨 Obsidiana','Puntas y cuchillos'],
    ['🦴 Hueso','Agujas y arpones'],
    ['🧥 Cuero','Ropa y bolsas'],
    ['🌿 Cabuya','Cuerdas y tejidos'],
    ['🪵 Madera','Lanzas y refugios'],
    ['🌾 Paja','Techos y canastos']
  ];

  const regionInfo = {
    costa:{label:'Costa o Litoral', color:'naranja', icon:'🏖️', hint:'Está al oeste; tiene playas, llanuras y manglares.'},
    sierra:{label:'Sierra o Interandina', color:'morado', icon:'🌋', hint:'Está en el centro; tiene Andes, volcanes y valles.'},
    amazon:{label:'Amazonía u Oriente', color:'verde', icon:'🌳', hint:'Está al este; tiene selva tropical y grandes ríos.'},
    insular:{label:'Insular o Galápagos', color:'azul', icon:'🐢', hint:'Está en el Pacífico y está formada por islas volcánicas.'}
  };

  const borderChallenges = [
    {target:'north', label:'Colombia', prompt:'Coloca a Colombia en el mapa.', icon:'🇨🇴'},
    {target:'west', label:'Océano Pacífico', prompt:'Coloca el océano Pacífico.', icon:'🌊'},
    {target:'south', label:'Perú', prompt:'Coloca el límite sur con Perú.', icon:'🇵🇪'},
    {target:'east', label:'Perú', prompt:'Coloca el límite este con Perú.', icon:'🇵🇪'}
  ];

  const arcadeBank = [
    {icon:'🧬', clue:'Soy la especie humana actual y aparecí en África hace aproximadamente 200 000 años.', options:['Homo sapiens','Paranthropus','Iguana marina','Homo digital'], answer:0, explain:'Homo sapiens es nuestra especie.'},
    {icon:'🧊', clue:'Fui una franja de tierra entre Asia y Alaska durante una glaciación.', options:['Beringia','Galápagos','Amazonía','Atlántida'], answer:0, explain:'Beringia forma parte de la teoría principal del poblamiento.'},
    {icon:'🚶', clue:'No tengo residencia fija y me desplazo buscando alimento, agua y refugio.', options:['Nómada','Sedentario','Alcalde','Navegante'], answer:0, explain:'Nómada significa que se desplaza de un lugar a otro.'},
    {icon:'🪨', clue:'Soy una piedra volcánica que podía afilarse para fabricar puntas y cuchillos.', options:['Obsidiana','Algodón','Cuero','Paja'], answer:0, explain:'La obsidiana puede producir bordes muy filosos.'},
    {icon:'🌋', clue:'Tengo montañas, volcanes y valles; también me llaman Interandina.', options:['Sierra','Costa','Amazonía','Insular'], answer:0, explain:'La Sierra está atravesada por la cordillera de los Andes.'},
    {icon:'🌳', clue:'Estoy al este, tengo selva tropical, humedad y grandes ríos.', options:['Amazonía','Costa','Sierra','Insular'], answer:0, explain:'La Amazonía también recibe el nombre de Oriente.'},
    {icon:'🐢', clue:'Estoy formada por las islas Galápagos en el océano Pacífico.', options:['Región Insular','Sierra','Costa','Amazonía'], answer:0, explain:'Galápagos forma la Región Insular.'},
    {icon:'🇨🇴', clue:'Soy el país que limita con Ecuador por el norte.', options:['Colombia','Perú','Chile','Brasil'], answer:0, explain:'Al norte del Ecuador se encuentra Colombia.'},
    {icon:'🌊', clue:'Me encuentro al oeste del Ecuador.', options:['Océano Pacífico','Océano Atlántico','Mar Caribe','Perú'], answer:0, explain:'La costa del Ecuador está junto al océano Pacífico.'},
    {icon:'🔥', clue:'Ayudé a cocinar, iluminar, proteger y calentar a los primeros pobladores.', options:['El fuego','El teléfono','La electricidad','El automóvil'], answer:0, explain:'El dominio del fuego transformó la vida humana.'},
    {icon:'🌿', clue:'Soy una fibra vegetal usada para fabricar cuerdas y tejidos.', options:['Cabuya','Hueso','Obsidiana','Cuero'], answer:0, explain:'La cabuya proviene de una planta.'},
    {icon:'🗺️', clue:'Soy la teoría escolar principal: Asia, una franja terrestre, Alaska y América.', options:['Teoría de Bering','Teoría de Quito','Teoría solar','Teoría amazónica'], answer:0, explain:'La teoría de Bering es la principal en el enfoque escolar.'}
  ];

  let arcade = null;

  function shuffledOptions(items, answer) {
    const mixed = shuffle(items.map((text,index)=>({text,correct:index===answer})));
    return {options:mixed.map(x=>x.text), answer:mixed.findIndex(x=>x.correct)};
  }

  function socialShell(title, subtitle, body, score='') {
    setView(`
      <section class="screen social-game-screen">
        <div class="screen-head">
          <button class="back" data-subject="estudios">✕ Salir</button>
          <div class="screen-title compact"><span class="eyebrow">VIDEOJUEGO DE ESTUDIOS SOCIALES</span><h1>${title}</h1><p>${subtitle}</p></div>
          <span class="game-score">${score}</span>
        </div>
        <section class="social-game-stage panel" style="--subject:${SUBJECTS.estudios.color}">${body}<div id="socialFeedback" class="social-feedback" aria-live="polite"></div></section>
      </section>
    `);
  }

  function feedback(ok, text, next) {
    const box = document.querySelector('#socialFeedback');
    if (!box) return;
    box.className = `social-feedback show ${ok?'good':'bad'}`;
    box.innerHTML = `<b>${ok?'✅ ¡Excelente!':'🧠 Mira la pista:'}</b><span>${text}</span>${next?'<button class="secondary" data-social-continue>Continuar →</button>':''}`;
    beep(ok);
    speak(`${ok?'Excelente.':'Mira la pista.'} ${text}`);
    if (next) box._next = next;
  }

  function reward(points=5) {
    store.xp += points;
    save();
  }

  function completeSocialGame() {
    reward(15);
    confetti();
    finishGame();
  }

  function renderHumanTimeline() {
    const st = session.game;
    socialShell('🧬 Portal de la evolución','Coloca cada etapa en el orden estudiado.',`
      <div class="social-mission-banner"><span>ETAPA ${st.step+1} DE ${st.sequence.length}</span><strong>¿Qué grupo va ahora?</strong></div>
      <div class="timeline-track">${st.order.map((x,i)=>`<div class="timeline-node done"><small>${i+1}</small><b>${x}</b></div>`).join('')}<div class="timeline-node current"><small>${st.step+1}</small><b>?</b></div></div>
      <div class="social-choice-grid">${st.pool.map((x,i)=>`<button class="social-choice" data-social-timeline="${i}"><span>${x.icon}</span><b>${x.text}</b></button>`).join('')}</div>
      <div class="social-hint">💡 Pista: la secuencia del libro termina con <b>Homo sapiens</b>.</div>
    `,`${st.step}/${st.sequence.length} ⭐`);
    document.querySelector(`[data-social-timeline]`)?.focus();
  }

  function chooseTimeline(index) {
    const st=session.game;
    const chosen=st.pool[index];
    const expected=st.sequence[st.step];
    if (!chosen || st.locked) return;
    if (chosen.text!==expected) {
      document.querySelector(`[data-social-timeline="${index}"]`)?.classList.add('wrong-pulse');
      feedback(false,`La siguiente etapa estudiada es ${expected}.`);
      return;
    }
    st.locked=true;
    st.order.push(chosen.text);
    st.pool.splice(index,1);
    st.step++;
    reward();
    feedback(true,`${chosen.text} quedó en el lugar correcto.`,()=>{
      st.locked=false;
      if(st.step>=st.sequence.length) completeSocialGame(); else renderHumanTimeline();
    });
  }

  function routeSvg(selected='') {
    const path=(id,d,label,x,y)=>`<g class="route-hit ${selected===id?'selected':''}" data-social-route="${id}" role="button" tabindex="0"><path d="${d}"/><text x="${x}" y="${y}">${label}</text></g>`;
    return `<svg class="route-game-map" viewBox="0 0 720 360" aria-label="Mapa interactivo de rutas del poblamiento">
      <rect width="720" height="360" rx="26" class="map-water"/>
      <path class="map-land" d="M42 58 L190 34 270 72 294 135 256 205 170 230 88 204 38 135Z"/>
      <path class="map-land" d="M315 48 L420 38 472 76 450 126 400 142 385 205 420 294 382 342 322 300 338 230 304 162Z"/>
      <path class="map-land" d="M530 62 L678 54 700 135 650 220 580 196 548 125Z"/>
      <text class="continent-label" x="95" y="130">ASIA / OCEANÍA</text><text class="continent-label" x="337" y="130">AMÉRICA</text><text class="continent-label" x="580" y="125">EUROPA</text>
      ${path('bering','M185 62 C235 25 288 35 330 72','BERING',225,30)}
      ${path('coast','M340 82 C375 140 370 220 350 300','COSTERA',390,215)}
      ${path('atlantic','M580 132 C520 110 472 120 414 156','ATLÁNTICO',480,102)}
      ${path('pacific','M112 258 C200 300 280 310 350 284','PACÍFICO',190,335)}
    </svg>`;
  }

  function renderRouteChallenge() {
    const st=session.game, challenge=st.rounds[st.index];
    socialShell('🗺️ Navegador de rutas','Lee la pista y toca la ruta correcta en el mapa.',`
      <div class="riddle-card"><span>${challenge.icon}</span><div><small>PISTA ${st.index+1} DE ${st.rounds.length}</small><h2>${challenge.clue}</h2></div></div>
      <div class="route-map-wrap">${routeSvg(st.selected)}</div>
      <div class="route-button-row">${st.rounds.map(r=>`<button data-social-route="${r.id}" class="route-name ${st.selected===r.id?'selected':''}">${r.icon} ${r.title}</button>`).join('')}</div>
    `,`${st.index}/${st.rounds.length} rutas`);
  }

  function chooseRoute(id) {
    const st=session.game, challenge=st.rounds[st.index];
    if(st.locked)return;
    st.selected=id;
    if(id!==challenge.id){
      document.querySelectorAll(`[data-social-route="${id}"]`).forEach(x=>x.classList.add('wrong-pulse'));
      feedback(false,challenge.explain);
      return;
    }
    st.locked=true;reward();renderRouteChallenge();
    feedback(true,challenge.explain,()=>{
      st.index++;st.selected='';st.locked=false;
      if(st.index>=st.rounds.length) completeSocialGame(); else renderRouteChallenge();
    });
  }

  function renderCamp() {
    const st=session.game, challenge=st.rounds[st.index];
    const mixed=st.current || (st.current=shuffledOptions(challenge.options,challenge.answer));
    socialShell('🏕️ Supervivencia nómada','Construye un campamento resolviendo cada necesidad.',`
      <div class="camp-progress">${st.rounds.map((r,i)=>`<div class="camp-slot ${i<st.index?'built':i===st.index?'active':''}"><span>${i<st.index?r.icon:'?'}</span><small>${i<st.index?r.unlock:r.title}</small></div>`).join('')}</div>
      <div class="survival-scene">${st.index===0?'🌲 🦌 🌿':st.index===1?'🌙 🌧️ 🪨':st.index===2?'👨‍👩‍👧‍👦 🪵 🍖':'🌙 🐺 ❄️'}<span>${challenge.icon}</span></div>
      <div class="social-mission-banner"><span>MISIÓN ${st.index+1}</span><strong>${challenge.prompt}</strong></div>
      <div class="social-choice-grid compact">${mixed.options.map((x,i)=>`<button class="social-choice text-only" data-social-camp="${i}"><b>${x}</b></button>`).join('')}</div>
    `,`${st.index}/${st.rounds.length} recursos`);
  }

  function chooseCamp(index) {
    const st=session.game, challenge=st.rounds[st.index], mixed=st.current;
    if(st.locked)return;
    if(index!==mixed.answer){feedback(false,`Recuerda: ${challenge.options[challenge.answer].toLowerCase()}.`);return;}
    st.locked=true;reward();
    feedback(true,challenge.unlock,()=>{
      st.index++;st.current=null;st.locked=false;
      if(st.index>=st.rounds.length)completeSocialGame();else renderCamp();
    });
  }

  function makeMemoryDeck() {
    return shuffle(memoryPairs.flatMap((pair,pairId)=>pair.map((text,side)=>({text,pairId,side,matched:false,open:false}))));
  }

  function renderMemory() {
    const st=session.game;
    socialShell('🪨 Taller de memoria','Encuentra cada material y su utilidad.',`
      <div class="memory-status"><span>🧠 Parejas encontradas: <b>${st.matches}/${memoryPairs.length}</b></span><span>Intentos: <b>${st.tries}</b></span></div>
      <div class="memory-grid">${st.deck.map((card,i)=>`<button class="memory-card ${card.open||card.matched?'open':''} ${card.matched?'matched':''}" data-social-memory="${i}" ${card.matched?'disabled':''}><span class="memory-back">❓</span><span class="memory-front">${card.text}</span></button>`).join('')}</div>
      <div class="social-hint">Relaciona el recurso natural con aquello que podía fabricarse.</div>
    `,`${st.matches}/${memoryPairs.length} parejas`);
  }

  function chooseMemory(index) {
    const st=session.game,card=st.deck[index];
    if(st.locked||!card||card.open||card.matched)return;
    card.open=true;st.open.push(index);renderMemory();
    if(st.open.length<2)return;
    st.tries++;st.locked=true;
    const [a,b]=st.open.map(i=>st.deck[i]);
    if(a.pairId===b.pairId&&a.side!==b.side){
      a.matched=b.matched=true;st.matches++;reward();
      feedback(true,`${a.text} se relaciona con ${b.text}.`,()=>{
        st.open=[];st.locked=false;
        if(st.matches>=memoryPairs.length)completeSocialGame();else renderMemory();
      });
    } else {
      feedback(false,'Esas tarjetas no forman pareja. Observa el material y piensa para qué servía.');
      setTimeout(()=>{a.open=b.open=false;st.open=[];st.locked=false;renderMemory();},1050);
    }
  }

  function regionMapSvg(painted={}) {
    const cls=id=>`paint-region ${id} ${painted[id]?'painted':''}`;
    return `<svg class="paint-map" viewBox="0 0 600 430" aria-label="Mapa para pintar las regiones del Ecuador">
      <rect width="600" height="430" rx="26" class="map-water"/>
      <g class="${cls('insular')}" data-social-region="insular" role="button" tabindex="0"><circle cx="92" cy="210" r="24"/><circle cx="135" cy="178" r="16"/><circle cx="145" cy="236" r="12"/><text x="48" y="282">INSULAR</text></g>
      <path class="${cls('costa')}" data-social-region="costa" role="button" tabindex="0" d="M250 60 L303 64 318 125 300 196 326 274 304 350 260 330 224 254 210 175 224 105Z"/>
      <path class="${cls('sierra')}" data-social-region="sierra" role="button" tabindex="0" d="M303 64 L365 58 382 124 365 196 389 282 354 374 304 350 326 274 300 196 318 125Z"/>
      <path class="${cls('amazon')}" data-social-region="amazon" role="button" tabindex="0" d="M365 58 L390 48 478 96 520 176 496 270 430 365 354 374 389 282 365 196 382 124Z"/>
      <text class="map-region-label" x="252" y="210">COSTA</text><text class="map-region-label vertical" x="340" y="215">SIERRA</text><text class="map-region-label" x="407" y="210">AMAZONÍA</text>
    </svg>`;
  }

  function renderPaintMap() {
    const st=session.game,target=st.targets[st.index],info=regionInfo[target];
    socialShell('🎨 Pinta el mapa','Toca la región indicada para llenarla con su color.',`
      <div class="paint-prompt"><span class="paint-swatch ${target}"></span><div><small>COLOR ${st.index+1} DE ${st.targets.length}</small><h2>${info.icon} Pinta la <b>${info.label}</b> de color ${info.color}</h2><p>${info.hint}</p></div></div>
      <div class="paint-map-wrap">${regionMapSvg(st.painted)}</div>
      <div class="region-key">${Object.entries(regionInfo).map(([id,x])=>`<button data-social-region="${id}" class="region-key-button ${st.painted[id]?'done':''}"><span class="paint-swatch ${id}"></span>${x.label}</button>`).join('')}</div>
    `,`${st.index}/${st.targets.length} pintadas`);
  }

  function chooseRegion(id) {
    const st=session.game,target=st.targets[st.index];
    if(st.locked||st.painted[id])return;
    if(id!==target){
      document.querySelectorAll(`[data-social-region="${id}"]`).forEach(x=>x.classList.add('wrong-pulse'));
      feedback(false,regionInfo[target].hint);
      return;
    }
    st.painted[id]=true;st.locked=true;reward();renderPaintMap();
    feedback(true,`${regionInfo[id].label} quedó pintada correctamente.`,()=>{
      st.index++;st.locked=false;
      if(st.index>=st.targets.length)completeSocialGame();else renderPaintMap();
    });
  }

  function borderMapSvg(placed={}) {
    const slot=(id,label,x,y)=>`<g class="border-slot ${placed[id]?'placed':''}" data-social-border="${id}" role="button" tabindex="0"><rect x="${x-72}" y="${y-28}" width="144" height="56" rx="16"/><text x="${x}" y="${y+6}">${placed[id]?label:'TOCA AQUÍ'}</text></g>`;
    return `<svg class="border-game-map" viewBox="0 0 650 500" aria-label="Mapa interactivo de los límites del Ecuador">
      <rect width="650" height="500" rx="26" class="map-water"/>
      <path class="ecuador-main" d="M250 105 L365 85 455 135 500 230 470 335 390 420 292 400 230 320 206 225 220 150Z"/>
      <path class="ecuador-line" d="M290 100 L305 170 285 245 330 330 315 405"/>
      <path class="ecuador-line" d="M360 90 L380 165 360 240 410 340"/>
      <text class="ecuador-title" x="312" y="255">ECUADOR</text>
      ${slot('north','COLOMBIA',350,45)}${slot('south','PERÚ',350,464)}${slot('west','OCÉANO PACÍFICO',92,250)}${slot('east','PERÚ',558,250)}
      <g class="compass"><circle cx="555" cy="70" r="40"/><text x="550" y="43">N</text><text x="550" y="105">S</text><text x="520" y="76">O</text><text x="584" y="76">E</text></g>
    </svg>`;
  }

  function renderBorderMap() {
    const st=session.game,challenge=st.rounds[st.index];
    socialShell('🧭 Brújula del Ecuador','Coloca cada límite en el punto cardinal correcto.',`
      <div class="border-prompt"><span>${challenge.icon}</span><div><small>LÍMITE ${st.index+1} DE ${st.rounds.length}</small><h2>${challenge.prompt}</h2><p>Norte arriba · Sur abajo · Este derecha · Oeste izquierda</p></div></div>
      <div class="border-map-wrap">${borderMapSvg(st.placed)}</div>
    `,`${st.index}/${st.rounds.length} límites`);
  }

  function chooseBorder(id) {
    const st=session.game,challenge=st.rounds[st.index];
    if(st.locked||st.placed[id])return;
    if(id!==challenge.target){
      document.querySelector(`[data-social-border="${id}"]`)?.classList.add('wrong-pulse');
      feedback(false,`Usa la brújula: ${challenge.label} va hacia ${challenge.target==='north'?'el norte':challenge.target==='south'?'el sur':challenge.target==='east'?'el este':'el oeste'}.`);
      return;
    }
    st.placed[id]=challenge.label;st.locked=true;reward();renderBorderMap();
    feedback(true,`${challenge.label} quedó en el ${id==='north'?'norte':id==='south'?'sur':id==='east'?'este':'oeste'}.`,()=>{
      st.index++;st.locked=false;
      if(st.index>=st.rounds.length)completeSocialGame();else renderBorderMap();
    });
  }

  function startSocialMiniGame() {
    const id=session.lesson.id;
    if(id==='soc-human'){
      const sequence=['Ardipithecus','Australopithecus','Paranthropus','Homo','Homo sapiens'];
      const icons=['🦴','🦍','🪨','🧠','🧬'];
      session.game={kind:'timeline',sequence,step:0,order:[],pool:shuffle(sequence.map((text,i)=>({text,icon:icons[i]}))),locked:false};
      renderHumanTimeline();
    } else if(id==='soc-routes'){
      session.game={kind:'routes',rounds:shuffle(routeChallenges),index:0,selected:'',locked:false};renderRouteChallenge();
    } else if(id==='soc-nomads'){
      session.game={kind:'camp',rounds:campChallenges,index:0,current:null,locked:false};renderCamp();
    } else if(id==='soc-tools'){
      session.game={kind:'memory',deck:makeMemoryDeck(),open:[],matches:0,tries:0,locked:false};renderMemory();
    } else if(id==='soc-regions'){
      session.game={kind:'paint',targets:shuffle(Object.keys(regionInfo)),index:0,painted:{},locked:false};renderPaintMap();
    } else if(id==='soc-borders'){
      session.game={kind:'borders',rounds:borderChallenges,index:0,placed:{},locked:false};renderBorderMap();
    } else baseRenderMiniGame();
  }

  function addArcadeCard() {
    if(document.querySelector('#socialArcadeCard'))return;
    const road=document.querySelector('.lesson-road');
    if(!road)return;
    const card=document.createElement('section');
    card.id='socialArcadeCard';card.className='social-arcade-card panel';
    card.innerHTML=`<div class="arcade-orb">🎮</div><div><span class="eyebrow">MODO EXTRA</span><h2>Arcade de adivinanzas</h2><p>Resuelve pistas rápidas sobre mapas, rutas, regiones, herramientas y primeros pobladores. Cada partida mezcla las preguntas.</p><div class="arcade-tags"><span>🧩 Adivinanzas</span><span>🔥 Combos</span><span>⭐ XP extra</span></div></div><button class="primary big" data-social-arcade>Jugar ahora →</button>`;
    road.parentNode.insertBefore(card,road);
  }

  function startArcade() {
    arcade={queue:shuffle(arcadeBank).slice(0,8),index:0,correct:0,combo:0,answered:false};
    renderArcade();
  }

  function renderArcade() {
    if(arcade.index>=arcade.queue.length)return arcadeResults();
    const q=arcade.queue[arcade.index];
    if(!q.mixed){const mix=shuffledOptions(q.options,q.answer);q.mixed=mix.options;q.mixedAnswer=mix.answer;}
    socialShell('🎮 Arcade de adivinanzas','Descubre el concepto escondido antes de que termine la misión.',`
      <div class="arcade-hud"><span>Reto <b>${arcade.index+1}/${arcade.queue.length}</b></span><span>✅ ${arcade.correct}</span><span>🔥 Combo x${arcade.combo}</span></div>
      <div class="arcade-riddle"><span>${q.icon}</span><small>ADIVINA, ADIVINADOR</small><h2>${q.clue}</h2></div>
      <div class="arcade-options">${q.mixed.map((x,i)=>`<button data-social-arcade-answer="${i}"><b>${String.fromCharCode(65+i)}</b><span>${x}</span></button>`).join('')}</div>
    `,`${arcade.correct} ⭐`);
  }

  function answerArcade(index) {
    if(!arcade||arcade.answered)return;
    arcade.answered=true;
    const q=arcade.queue[arcade.index],ok=index===q.mixedAnswer;
    document.querySelectorAll('[data-social-arcade-answer]').forEach((b,i)=>{b.disabled=true;if(i===index)b.classList.add(ok?'correct':'wrong');if(i===q.mixedAnswer)b.classList.add('correct');});
    if(ok){arcade.correct++;arcade.combo++;reward(5+(arcade.combo>=3?2:0));}else arcade.combo=0;
    feedback(ok,q.explain,()=>{arcade.index++;arcade.answered=false;renderArcade();});
  }

  function arcadeResults() {
    const total=arcade.queue.length,score=arcade.correct;
    if(score>=6)confetti();
    setView(`<section class="screen"><section class="arcade-results panel"><div class="arcade-trophy">${score===total?'🏆':score>=6?'🥇':score>=4?'🥈':'🧭'}</div><span class="eyebrow">ARCADE COMPLETADO</span><h1>${score===total?'¡Partida perfecta!':score>=6?'¡Gran explorador!':score>=4?'¡Buen entrenamiento!':'Volvamos a practicar'}</h1><p>Leo resolvió <b>${score} de ${total}</b> adivinanzas.</p><div class="result-actions"><button class="primary" data-social-arcade>Jugar otra vez</button><button class="secondary" data-subject="estudios">Volver a Estudios Sociales</button><button class="secondary" data-exam="estudios">Ir al simulacro</button></div></section></section>`);
  }

  renderMiniGame=function(){
    if(session?.lesson?.subject==='estudios')startSocialMiniGame();else baseRenderMiniGame();
  };

  renderSubject=function(id){
    baseRenderSubject(id);
    if(id==='estudios')addArcadeCard();
  };

  app.addEventListener('click',e=>{
    const button=e.target.closest('button,[role="button"]');if(!button)return;
    if(button.dataset.socialContinue!==undefined){const box=document.querySelector('#socialFeedback'),next=box?._next;if(next)next();return;}
    if(button.dataset.socialTimeline!==undefined)return chooseTimeline(Number(button.dataset.socialTimeline));
    if(button.dataset.socialRoute!==undefined)return chooseRoute(button.dataset.socialRoute);
    if(button.dataset.socialCamp!==undefined)return chooseCamp(Number(button.dataset.socialCamp));
    if(button.dataset.socialMemory!==undefined)return chooseMemory(Number(button.dataset.socialMemory));
    if(button.dataset.socialRegion!==undefined)return chooseRegion(button.dataset.socialRegion);
    if(button.dataset.socialBorder!==undefined)return chooseBorder(button.dataset.socialBorder);
    if(button.dataset.socialArcadeAnswer!==undefined)return answerArcade(Number(button.dataset.socialArcadeAnswer));
    if(button.dataset.socialArcade!==undefined)return startArcade();
  });

  app.addEventListener('keydown',e=>{
    if((e.key==='Enter'||e.key===' ')&&e.target.matches('[role="button"][data-social-route],[role="button"][data-social-region],[role="button"][data-social-border]')){
      e.preventDefault();e.target.click();
    }
  });
})();