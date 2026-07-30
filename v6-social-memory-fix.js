(() => {
  const gameApp = document.querySelector('#app');
  if (!gameApp) return;

  const activeMemoryState = () => {
    const state = typeof session !== 'undefined' ? session?.game : null;
    return state?.kind === 'memory' ? state : null;
  };

  const say = text => {
    try { if (typeof speak === 'function') speak(text); } catch (_) {}
  };

  const sound = ok => {
    try { if (typeof beep === 'function') beep(ok); } catch (_) {}
  };

  const grantXp = points => {
    try {
      if (typeof store !== 'undefined') store.xp += points;
      if (typeof save === 'function') save();
    } catch (_) {}
  };

  function setHint(text, mode = '') {
    const hint = document.querySelector('.social-hint');
    if (!hint) return;
    hint.className = `social-hint memory-live-hint ${mode}`.trim();
    hint.innerHTML = text;
  }

  function showMemoryFeedback(ok, text) {
    const box = document.querySelector('#socialFeedback');
    if (!box) return;
    box.className = `social-feedback show ${ok ? 'good' : 'bad'}`;
    box.innerHTML = `<b>${ok ? '✅ ¡Pareja encontrada!' : '🧠 Aún no es la pareja'}</b><span>${text}</span>`;
    sound(ok);
    say(`${ok ? 'Excelente.' : 'Mira bien.'} ${text}`);
  }

  function clearMemoryFeedback() {
    const box = document.querySelector('#socialFeedback');
    if (!box) return;
    box.className = 'social-feedback';
    box.innerHTML = '';
  }

  function updateMemoryHud(state) {
    const values = document.querySelectorAll('.memory-status b');
    if (values[0]) values[0].textContent = `${state.matches}/${state.deck.length / 2}`;
    if (values[1]) values[1].textContent = String(state.tries);
    const score = document.querySelector('.game-score');
    if (score) score.textContent = `${state.matches}/${state.deck.length / 2} parejas`;
  }

  function decorateCards(state) {
    document.querySelectorAll('[data-social-memory]').forEach(button => {
      const index = Number(button.dataset.socialMemory);
      const card = state.deck[index];
      if (!card) return;
      button.dataset.memorySide = String(card.side);
      button.setAttribute('aria-label', card.open || card.matched ? card.text : 'Tarjeta oculta');
      button.setAttribute('aria-pressed', card.open || card.matched ? 'true' : 'false');
    });
  }

  function previewDeck(grid, state) {
    if (state.previewed) {
      decorateCards(state);
      return;
    }

    state.previewed = true;
    state.locked = true;
    decorateCards(state);

    const banner = document.createElement('div');
    banner.className = 'memory-preview-banner';
    banner.innerHTML = '<b>👀 Memoriza las tarjetas</b><span>Se ocultarán en 3…</span>';
    grid.parentNode.insertBefore(banner, grid);

    const buttons = [...grid.querySelectorAll('[data-social-memory]')];
    buttons.forEach(button => button.classList.add('open', 'memory-previewing'));
    setHint('Observa dónde está cada <b>material</b> y dónde aparece su <b>utilidad</b>.', 'preview');
    say('Mira todas las tarjetas y trata de recordar dónde está cada pareja.');

    let count = 3;
    const timer = setInterval(() => {
      count -= 1;
      const span = banner.querySelector('span');
      if (span && count > 0) span.textContent = `Se ocultarán en ${count}…`;
    }, 800);

    setTimeout(() => {
      clearInterval(timer);
      if (activeMemoryState() !== state || !document.body.contains(grid)) return;
      buttons.forEach(button => button.classList.remove('open', 'memory-previewing'));
      banner.remove();
      state.locked = false;
      setHint('Primero elige una tarjeta. Después busca la tarjeta que completa su pareja.', 'ready');
      say('Ahora elige una tarjeta y luego busca su pareja.');
    }, 2550);
  }

  function prepareMemoryScreen() {
    const grid = document.querySelector('.memory-grid');
    const state = activeMemoryState();
    if (!grid || !state || grid.dataset.memoryFixed === 'true') return;
    grid.dataset.memoryFixed = 'true';
    previewDeck(grid, state);
  }

  function finishFixedMemoryGame(state) {
    state.locked = true;
    grantXp(15);
    try { if (typeof confetti === 'function') confetti(); } catch (_) {}
    setTimeout(() => {
      if (activeMemoryState() !== state) return;
      try { if (typeof finishGame === 'function') finishGame(); } catch (_) {}
    }, 900);
  }

  function handleMemoryChoice(index, button) {
    const state = activeMemoryState();
    const card = state?.deck?.[index];
    if (!state || state.locked || !card || card.open || card.matched) return;

    clearMemoryFeedback();
    card.open = true;
    state.open.push(index);
    button.classList.add('open', 'memory-selected');
    button.setAttribute('aria-label', card.text);
    button.setAttribute('aria-pressed', 'true');

    if (state.open.length === 1) {
      setHint(`Elegiste <b>${card.text}</b>. Ahora encuentra ${card.side === 0 ? 'la utilidad correspondiente' : 'el material correspondiente'}.`, 'searching');
      say(`Elegiste ${card.text}. Ahora busca su pareja.`);
      return;
    }

    state.tries += 1;
    state.locked = true;
    updateMemoryHud(state);

    const [firstIndex, secondIndex] = state.open;
    const first = state.deck[firstIndex];
    const second = state.deck[secondIndex];
    const firstButton = document.querySelector(`[data-social-memory="${firstIndex}"]`);
    const secondButton = document.querySelector(`[data-social-memory="${secondIndex}"]`);
    const isPair = first.pairId === second.pairId && first.side !== second.side;

    if (isPair) {
      first.matched = true;
      second.matched = true;
      state.matches += 1;
      grantXp(5);
      firstButton?.classList.add('matched');
      secondButton?.classList.add('matched');
      firstButton?.classList.remove('memory-selected');
      secondButton?.classList.remove('memory-selected');
      firstButton && (firstButton.disabled = true);
      secondButton && (secondButton.disabled = true);
      updateMemoryHud(state);
      showMemoryFeedback(true, `${first.text} se relaciona con ${second.text}.`);
      setHint('¡Muy bien! Esa pareja queda descubierta. Sigue buscando las demás.', 'success');

      state.open = [];
      if (state.matches >= state.deck.length / 2) {
        setHint('🏆 ¡Encontraste todas las parejas!', 'success');
        finishFixedMemoryGame(state);
      } else {
        setTimeout(() => {
          if (activeMemoryState() !== state) return;
          state.locked = false;
          clearMemoryFeedback();
          setHint('Elige otra tarjeta para continuar.', 'ready');
        }, 1250);
      }
      return;
    }

    firstButton?.classList.add('memory-mismatch');
    secondButton?.classList.add('memory-mismatch');
    showMemoryFeedback(false, `${first.text} y ${second.text} no forman pareja. Obsérvalas antes de que se oculten.`);
    setHint('Las dos tarjetas permanecerán visibles unos segundos para que puedas memorizarlas.', 'warning');

    setTimeout(() => {
      if (activeMemoryState() !== state) return;
      [first, second].forEach(item => { item.open = false; });
      [firstButton, secondButton].forEach(item => {
        item?.classList.remove('open', 'memory-selected', 'memory-mismatch');
        item?.setAttribute('aria-label', 'Tarjeta oculta');
        item?.setAttribute('aria-pressed', 'false');
      });
      state.open = [];
      state.locked = false;
      clearMemoryFeedback();
      setHint('Prueba nuevamente: relaciona un <b>material</b> con aquello que podía fabricarse.', 'ready');
    }, 2600);
  }

  gameApp.addEventListener('click', event => {
    const button = event.target.closest('[data-social-memory]');
    if (!button || !activeMemoryState()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    handleMemoryChoice(Number(button.dataset.socialMemory), button);
  }, true);

  const observer = new MutationObserver(prepareMemoryScreen);
  observer.observe(gameApp, {childList: true, subtree: true});
  prepareMemoryScreen();
})();
