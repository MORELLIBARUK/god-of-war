const PLACEHOLDER = "https://via.placeholder.com/800x500?text=Imagem+do+Personagem";

const CHARACTERS = [
  // ===== PRINCIPAIS NÓRDICOS =====
  { key:'kratos', name:'Kratos', era:'Nórdica', affiliation:'Esparta', role:'Protagonista',
    category:'principal', weapon:'Lâminas do Caos, Machado Leviatã', firstAppearance:'God of War (2005)',
    img:'imgs/kratos.jpg', blurb:`Guerreiro espartano que ascendeu a deus e depois viveu no Norte.` },
  { key:'atreus', name:'Atreus (Loki)', era:'Nórdica', affiliation:'Jotunheim', role:'Co-protagonista',
    category:'principal', weapon:'Arco, Magia rúnica', firstAppearance:'God of War (2018)',
    img:'imgs/atreus.jpg', blurb:`Filho de Kratos e Faye.` },
  { key:'mimir', name:'Mimir', era:'Nórdica', affiliation:'Conselheiro', role:'Ajudante',
    category:'principal', weapon:'Sabedoria', firstAppearance:'God of War (2018)',
    img:'imgs/mimir.jpg', blurb:`"O homem mais inteligente que existe".` },
  { key:'freya', name:'Freya', era:'Nórdica', affiliation:'Vanir', role:'Aliada/Antagonista',
    category:'principal', weapon:'Magia Vanir', firstAppearance:'God of War (2018)',
    img:'imgs/freya.jpg', blurb:`Rainha dos Vanir.` },
  { key:'baldur', name:'Baldur', era:'Nórdica', affiliation:'Aesir', role:'Antagonista',
    category:'principal', weapon:'Invulnerabilidade amaldiçoada', firstAppearance:'God of War (2018)',
    img:'imgs/baldur.jpg', blurb:`Filho de Odin e Freya.` },
  { key:'thor', name:'Thor', era:'Nórdica', affiliation:'Aesir', role:'Antagonista',
    category:'principal', weapon:'Mjölnir', firstAppearance:'God of War Ragnarök (2022)',
    img:'imgs/thor.jpg', blurb:`Deus do trovão.` },
  { key:'odin', name:'Odin', era:'Nórdica', affiliation:'Aesir', role:'Antagonista',
    category:'principal', weapon:'Magia, manipulação', firstAppearance:'God of War Ragnarök (2022)',
    img:'imgs/odin.jpg', blurb:`Pai de Todos.` },
  { key:'tyr', name:'Týr', era:'Nórdica', affiliation:'Aesir (dissidente)', role:'Deus da Guerra Nórdico',
    category:'principal', weapon:'Diplomacia', firstAppearance:'God of War (2018)',
    img:'imgs/tyr.jpg', blurb:`Deus pacifista.` },
  { key:'heimdall', name:'Heimdall', era:'Nórdica', affiliation:'Aesir', role:'Antagonista',
    category:'principal', weapon:'Hofud, clarividência', firstAppearance:'God of War Ragnarök (2022)',
    img:'imgs/heimdall.jpg', blurb:`Sentinela de Asgard.` },

  // ===== PRINCIPAIS GREGOS =====
  { key:'zeus', name:'Zeus', era:'Grega', affiliation:'Olimpo', role:'Antagonista',
    category:'principal', weapon:'Relâmpagos', firstAppearance:'God of War II (2007)',
    img:'imgs/zeus.jpg', blurb:`Rei dos deuses e pai de Kratos.` },
  { key:'athena', name:'Atena', era:'Grega', affiliation:'Olimpo', role:'Mentora/Ambígua',
    category:'principal', weapon:'Sabedoria', firstAppearance:'God of War (2005)',
    img:'imgs/athena.jpg', blurb:`Guiou Kratos.` },
  { key:'ares', name:'Ares', era:'Grega', affiliation:'Olimpo', role:'Antagonista',
    category:'principal', weapon:'Guerra e caos', firstAppearance:'God of War (2005)',
    img:'imgs/ares.jpg', blurb:`O Deus da Guerra original.` },
  { key:'poseidon', name:'Poseidon', era:'Grega', affiliation:'Olimpo', role:'Antagonista',
    category:'principal', weapon:'Tridente', firstAppearance:'God of War III (2010)',
    img:'imgs/poseidon.jpg', blurb:`Senhor dos mares.` },
  { key:'hades', name:'Hades', era:'Grega', affiliation:'Olimpo', role:'Antagonista',
    category:'principal', weapon:'Garras do Hades', firstAppearance:'God of War III (2010)',
    img:'imgs/hades.jpg', blurb:`Regente do submundo.` },
  { key:'calliope', name:'Calliope', era:'Grega', affiliation:'Família de Kratos', role:'Filha',
    category:'principal', weapon:'—', firstAppearance:'Chains of Olympus (2008)',
    img:'imgs/calliope.jpg', blurb:`Filha de Kratos.` },

  // ===== SECUNDÁRIOS NÓRDICOS =====
  { key:'faye', name:'Faye (Laufey)', era:'Nórdica', affiliation:'Jotunheim', role:'Esposa',
    category:'secundario', weapon:'Gigante', firstAppearance:'God of War (2018)',
    img:'imgs/faye.jpg', blurb:`Gigante de Jotunheim.` },
  { key:'magni', name:'Magni', era:'Nórdica', affiliation:'Aesir', role:'Antagonista',
    category:'secundario', weapon:'Espada', firstAppearance:'God of War (2018)',
    img:'imgs/magni.jpg', blurb:`Filho de Thor.` },
  { key:'modi', name:'Modi', era:'Nórdica', affiliation:'Aesir', role:'Antagonista',
    category:'secundario', weapon:'Maza elétrica', firstAppearance:'God of War (2018)',
    img:'imgs/modi.jpg', blurb:`Irmão de Magni.` },
  { key:'angrboda', name:'Angrboda', era:'Nórdica', affiliation:'Jotunheim', role:'Aliada',
    category:'secundario', weapon:'Magia', firstAppearance:'Ragnarök (2022)',
    img:'imgs/angrboda.jpg', blurb:`Gigante jovem.` },
  { key:'brok', name:'Brok', era:'Nórdica', affiliation:'Ferreiro', role:'Aliado',
    category:'secundario', weapon:'Forja', firstAppearance:'God of War (2018)',
    img:'imgs/brok.jpg', blurb:`Ferreiro rude.` },
  { key:'sindri', name:'Sindri', era:'Nórdica', affiliation:'Ferreiro', role:'Aliado',
    category:'secundario', weapon:'Forja', firstAppearance:'God of War (2018)',
    img:'imgs/sindri.jpg', blurb:`Ferreiro perfeccionista.` },

  // ===== SECUNDÁRIOS GREGOS =====
  { key:'hercules', name:'Hércules', era:'Grega', affiliation:'Olimpo', role:'Antagonista',
    category:'secundario', weapon:'Punhos de Nemeia', firstAppearance:'God of War III (2010)',
    img:'imgs/hercules.jpg', blurb:`Meio-irmão de Kratos.` },
  { key:'pandora', name:'Pandora', era:'Grega', affiliation:'Olimpo', role:'Aliada',
    category:'secundario', weapon:'Esperança', firstAppearance:'God of War III (2010)',
    img:'imgs/pandora.jpg', blurb:`Jovem criada por Hefesto.` },
  { key:'perseus', name:'Perseu', era:'Grega', affiliation:'Olimpo', role:'Antagonista',
    category:'secundario', weapon:'Espada, escudo', firstAppearance:'God of War II (2007)',
    img:'imgs/perseus.jpg', blurb:`Herói grego.` },
  { key:'gaia', name:'Gaia', era:'Grega', affiliation:'Titãs', role:'Aliada/Traidora',
    category:'secundario', weapon:'Força titânica', firstAppearance:'God of War II (2007)',
    img:'imgs/gaia.jpg', blurb:`Titã mãe da Terra.` },
  { key:'cronos', name:'Cronos', era:'Grega', affiliation:'Titãs', role:'Antagonista',
    category:'secundario', weapon:'Força colossal', firstAppearance:'God of War III (2010)',
    img:'imgs/cronos.jpg', blurb:`Titã aprisionado.` },
  { key:'orkos', name:'Orkos', era:'Grega', affiliation:'Fúrias', role:'Aliado',
    category:'secundario', weapon:'Sacrifício', firstAppearance:'Ascension (2013)',
    img:'imgs/orkos.jpg', blurb:`Filho de Ares e das Fúrias.` }
];

/* ===== Seletores ===== */
const gridPrincipais = document.getElementById('grid-principais');
const gridSecundarios = document.getElementById('grid-secundarios');
const search = document.getElementById('search');
const filterEra = document.getElementById('filter-era');
const sortSelect = document.getElementById('sort');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.getElementById('modal-close');

/* ===== Renderização ===== */
function makeCard(c) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='${PLACEHOLDER}'" />
    <div class="content">
      <div class="name">${c.name}</div>
      <div class="meta">${c.role} • ${c.era}</div>
      <div class="badges">
        ${c.weapon ? `<span class="badge">${c.weapon}</span>` : ''}
        ${c.firstAppearance ? `<span class="badge">${c.firstAppearance}</span>` : ''}
      </div>
      <p class="muted">${c.blurb || ''}</p>
      <div class="actions"><button data-key="${c.key}">Detalhes</button></div>
    </div>
  `;
  card.querySelector('button').addEventListener('click', () => openModal(c));
  return card;
}

function render(list) {
  gridPrincipais.innerHTML = '';
  gridSecundarios.innerHTML = '';

  const principais = list.filter(c => c.category === 'principal');
  const secundarios = list.filter(c => c.category === 'secundario');

  if (!principais.length)
    gridPrincipais.innerHTML = '<p class="muted">Nenhum personagem principal encontrado.</p>';
  else
    principais.forEach(c => gridPrincipais.appendChild(makeCard(c)));

  if (!secundarios.length)
    gridSecundarios.innerHTML = '<p class="muted">Nenhum personagem secundário encontrado.</p>';
  else
    secundarios.forEach(c => gridSecundarios.appendChild(makeCard(c)));
}

/* ===== Filtros / Busca / Ordenação ===== */
function applyFilters() {
  let list = [...CHARACTERS];

  const q = (search.value || '').toLowerCase().trim();
  if (q) {
    list = list.filter(c =>
      [c.name, c.era, c.affiliation, c.role, c.weapon, c.firstAppearance, c.blurb]
        .filter(Boolean)
        .some(v => String(v).toLowerCase().includes(q))
    );
  }

  const era = filterEra.value;
  if (era !== 'all') {
    list = list.filter(c => c.era === era);
  }

  const sort = sortSelect.value;
  if (sort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name, 'pt'));
  } else if (sort === 'era') {
    list.sort((a, b) => a.era.localeCompare(b.era, 'pt') || a.name.localeCompare(b.name, 'pt'));
  }

  render(list);
}

/* ===== Modal ===== */
function openModal(item) {
  modalTitle.textContent = item.name;
  modalImg.src = item.img || PLACEHOLDER;
  modalImg.onerror = () => (modalImg.src = PLACEHOLDER);
  modalDesc.textContent = `${item.role} • ${item.affiliation ? item.affiliation + ' • ' : ''}${item.era}\n\n${item.blurb || ''}`;
  modal.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
}
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

/* ===== Eventos ===== */
search.addEventListener('input', applyFilters);
filterEra.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);
