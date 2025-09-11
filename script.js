const CHARACTERS = [
  {
    name: "Kratos",
    category: "principal",
    era: "Nórdica",
    role: "Protagonista",
    firstAppearance: "God of War (2005)",
    story: "Um guerreiro espartano marcado pela tragédia, que matou sua própria família sob influência de Ares. Kratos desafiou os deuses do Olimpo e posteriormente se aventurou nas terras nórdicas, onde busca redenção e cria seu filho, Atreus."
  },
  {
    name: "Atreus (Loki)",
    category: "principal",
    era: "Nórdica",
    role: "Co-protagonista",
    firstAppearance: "God of War (2018)",
    story: "Filho de Kratos e Faye, Atreus é inteligente, curioso e dotado de poderes ligados à sua herança como Loki. Seu crescimento e descoberta de identidade são parte essencial da narrativa."
  },
  {
    name: "Mimir",
    category: "principal",
    era: "Nórdica",
    role: "Ajudante",
    firstAppearance: "God of War (2018)",
    story: "Conhecido como 'o homem mais inteligente vivo', Mimir serve como conselheiro de Kratos e Atreus após ser libertado de sua prisão por Odin."
  },
  {
    name: "Freya",
    category: "principal",
    era: "Nórdica",
    role: "Aliada/Antagonista",
    firstAppearance: "God of War (2018)",
    story: "Deusa Vanir e ex-rainha das Valquírias, Freya auxilia Kratos mas depois se volta contra ele devido à morte de seu filho, Baldur."
  },
  {
    name: "Baldur",
    category: "principal",
    era: "Nórdica",
    role: "Antagonista",
    firstAppearance: "God of War (2018)",
    story: "Filho de Odin e Freya, amaldiçoado com invulnerabilidade que o impedia de sentir qualquer coisa. Sua busca pela libertação o leva ao confronto com Kratos."
  },
  {
    name: "Zeus",
    category: "principal",
    era: "Grega",
    role: "Antagonista",
    firstAppearance: "God of War II (2007)",
    story: "Rei dos deuses do Olimpo, Zeus teme Kratos e busca destruí-lo, desencadeando uma guerra entre deuses e titãs."
  },
  {
    name: "Atena",
    category: "principal",
    era: "Grega",
    role: "Mentora/Ambígua",
    firstAppearance: "God of War (2005)",
    story: "Deusa da sabedoria, ajuda Kratos em sua jornada inicial mas revela intenções próprias nos jogos posteriores."
  },
  {
    name: "Thor",
    category: "principal",
    era: "Nórdica",
    role: "Antagonista",
    firstAppearance: "God of War Ragnarök (2022)",
    story: "O deus do trovão, conhecido por sua força brutal e lealdade a Odin. É um dos maiores inimigos de Kratos na saga nórdica."
  },
  {
    name: "Odin",
    category: "principal",
    era: "Nórdica",
    role: "Antagonista",
    firstAppearance: "God of War Ragnarök (2022)",
    story: "Pai de todos e governante dos deuses nórdicos. Manipulador e obcecado por conhecimento, Odin controla e engana para manter seu poder."
  },
  {
    name: "Faye (Laufey)",
    category: "secundario",
    era: "Nórdica",
    role: "Esposa de Kratos",
    firstAppearance: "God of War (2018)",
    story: "Giganta de Jotunheim e mãe de Atreus. Mesmo falecida antes dos eventos do jogo, sua presença guia as escolhas da família."
  },
  {
    name: "Brok",
    category: "secundario",
    era: "Nórdica",
    role: "Aliado Ferreiro",
    firstAppearance: "God of War (2018)",
    story: "Ferreiro habilidoso, junto de seu irmão Sindri, ajuda Kratos e Atreus fornecendo armas e equipamentos."
  },
  {
    name: "Sindri",
    category: "secundario",
    era: "Nórdica",
    role: "Aliado Ferreiro",
    firstAppearance: "God of War (2018)",
    story: "Irmão de Brok, especialista em magia e criação de itens. Sua relação com Kratos e Atreus evolui ao longo da saga."
  }
  // você pode continuar expandindo com os outros personagens...
];

const tbody = document.getElementById("table-body");
const search = document.getElementById("search");
const filterEra = document.getElementById("filter-era");
const filterCat = document.getElementById("filter-cat");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

function render(list) {
  tbody.innerHTML = "";
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#aaa">Nenhum personagem encontrado</td></tr>`;
    return;
  }
  list.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${c.name}</td>
      <td>${c.category === "principal" ? "Principal" : "Secundário"}</td>
      <td>${c.era}</td>
      <td>${c.role}</td>
      <td>${c.firstAppearance}</td>
      <td><button class="info-btn" data-name="${c.name}">Ver</button></td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll(".info-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const char = CHARACTERS.find(c => c.name === btn.dataset.name);
      modalTitle.textContent = char.name;
      modalText.textContent = char.story;
      modal.classList.remove("hidden");
    });
  });
}

function applyFilters() {
  let list = [...CHARACTERS];
  const q = search.value.toLowerCase().trim();
  if (q) {
    list = list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q) ||
      c.era.toLowerCase().includes(q)
    );
  }
  if (filterEra.value !== "all") {
    list = list.filter(c => c.era === filterEra.value);
  }
  if (filterCat.value !== "all") {
    list = list.filter(c => c.category === filterCat.value);
  }
  render(list);
}

modalClose.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

search.addEventListener("input", applyFilters);
filterEra.addEventListener("change", applyFilters);
filterCat.addEventListener("change", applyFilters);

applyFilters();
