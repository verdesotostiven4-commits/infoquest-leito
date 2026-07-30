(() => {
  const baseVisualHTML = visualHTML;

  const cards = {
    'human-origin-map': ['🌍 África','🦴 Homínidos','⏳ Millones de años'],
    'human-timeline': ['Ardipithecus','Australopithecus','Paranthropus','Homo','Homo sapiens'],
    'migration-world': ['África','→','Asia y Europa','→','América'],
    'temporary-shelter': ['🪨 Cueva','🌿 Ramas','🧥 Pieles'],
    'community': ['👥 Grupo','🤝 Cooperación','🔥 Fuego'],
    'fire-art': ['🔥','🍖 Cocinar','🎨 Arte'],
    'stone-tools': ['Obsidiana','Basalto','🏹 Puntas','🔪 Cuchillos'],
    'bone-wood': ['🦴 Agujas','🪵 Lanzas','🛖 Refugios'],
    'hide-tools': ['🧥 Ropa','👞 Calzado','👜 Bolsas'],
    'fiber-tools': ['🌿 Cabuya','🌾 Paja','🧶 Algodón','🪵 Madera']
  };

  function routeMap(active='all') {
    const route = (id,label,klass) => `<path class="social-route ${active==='all'||active===id?'active':''} ${klass}" d="${id==='bering'?'M105 92 C175 50 245 45 310 78':id==='coast'?'M305 86 C320 130 325 175 306 225':id==='atlantic'?'M515 135 C455 120 410 125 350 150':'M86 215 C165 240 235 245 305 220'}"/><text x="${id==='bering'?160:id==='coast'?325:id==='atlantic'?405:145}" y="${id==='bering'?42:id==='coast'?180:id==='atlantic'?112:265}">${label}</text>`;
    return `<div class="social-map route-map"><svg viewBox="0 0 620 300" role="img" aria-label="Mapa simplificado de las teorías del poblamiento de América">
      <rect width="620" height="300" rx="24" class="ocean"/>
      <path class="land" d="M35 55 L155 32 220 65 250 115 218 170 145 195 82 170 38 120Z"/>
      <path class="land" d="M270 55 L360 42 400 75 380 110 335 118 320 155 350 220 320 278 275 242 290 185 260 138Z"/>
      <path class="land" d="M455 60 L585 52 600 120 555 180 500 165 470 115Z"/>
      <text x="82" y="110">Asia</text><text x="286" y="105">América</text><text x="500" y="105">Europa</text>
      ${route('bering','Bering','bering')}${route('coast','Ruta costera','coast')}${route('atlantic','Atlántico','atlantic')}${route('pacific','Pacífico','pacific')}
    </svg><div class="map-legend"><span>🧊 Bering</span><span>🌊 Costera</span><span>⛵ Atlántico</span><span>🛶 Pacífico</span></div></div>`;
  }

  function ecuadorMap(mode='regions') {
    return `<div class="social-map ecuador-map ${mode}"><svg viewBox="0 0 520 360" role="img" aria-label="Mapa educativo del Ecuador">
      <rect width="520" height="360" rx="24" class="ocean"/>
      <g class="galapagos"><circle cx="70" cy="175" r="17"/><circle cx="105" cy="150" r="11"/><circle cx="115" cy="195" r="8"/><text x="34" y="225">Galápagos</text></g>
      <path class="ecuador-shape" d="M205 52 L320 42 395 85 430 150 410 220 350 300 275 318 215 270 185 205 195 140Z"/>
      <path class="region coast" d="M205 52 L252 55 265 105 250 165 270 230 250 286 215 270 185 205 195 140Z"/>
      <path class="region sierra" d="M252 55 L305 50 320 105 305 165 325 235 300 307 250 286 270 230 250 165 265 105Z"/>
      <path class="region amazon" d="M305 50 L320 42 395 85 430 150 410 220 350 300 300 307 325 235 305 165 320 105Z"/>
      <text x="210" y="180" class="label coast-label">Costa</text><text x="272" y="180" class="label sierra-label">Sierra</text><text x="340" y="180" class="label amazon-label">Amazonía</text>
      <text x="275" y="24" class="border north">COLOMBIA</text><text x="410" y="285" class="border east">PERÚ</text><text x="215" y="345" class="border south">PERÚ</text><text x="18" y="75" class="border west">OCÉANO PACÍFICO</text>
      <path class="border-arrow north" d="M305 42 L305 12"/><path class="border-arrow east" d="M410 220 L475 250"/><path class="border-arrow south" d="M275 318 L275 345"/><path class="border-arrow west" d="M185 175 L125 175"/>
    </svg><div class="map-legend"><span>🟠 Costa/Litoral</span><span>🟣 Sierra/Interandina</span><span>🟢 Amazonía/Oriente</span><span>🔵 Insular/Galápagos</span></div></div>`;
  }

  visualHTML = function(type) {
    if (cards[type]) return `<div class="social-card-visual">${cards[type].map((x,i)=>`<span style="--i:${i}">${x}</span>`).join('')}</div>`;
    if (type==='beringia-map') return routeMap('bering');
    if (type==='coastal-route-map') return routeMap('coast');
    if (type==='routes-map') return routeMap('all');
    if (type==='america-south-map') return routeMap('coast');
    if (type==='ecuador-regions-map'||type==='coast-region-map'||type==='sierra-region-map'||type==='amazon-region-map'||type==='insular-region-map') return ecuadorMap('regions');
    if (type==='ecuador-borders-map'||type==='ecuador-location-map'||type==='compass-map') return ecuadorMap('borders');
    return baseVisualHTML(type);
  };
})();
