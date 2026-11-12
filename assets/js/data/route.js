// Rota otimizada de platina (2 jogadas). Conteúdo resumido a partir de PowerPyx, IGN e Silent Hill Memories.
// Campos de cada etapa:
//   id, t (título), d (texto), src (chave em sources.js), tags[]
//   ngplus: só existe em NG+          skipFast: oculta no modo < 10 h
//   radio: aviso se "Sem rádio"       firearm: aviso se "Só corpo a corpo"
//   fast: dica extra no modo < 10 h   link: aba relacionada do app (hash)   map: id de área do atlas
export const ROUTE = {
  pt1: {
    name: 'Jogada 1: Exploração completa e coletáveis (NG)',
    goal: 'Coletar 68 memos, 26 fotos e 26 vislumbres na mesma jogada, fazer os finais clássicos e os troféus de combate/exploração.',
    steps: [
      { id: 'p1-setup', t: 'Configure a run', d: 'Dificuldade de combate livre (Leve ajuda). Enigmas: use Padrão ou Difícil só se quiser. Ao receber o rádio, desligue-o e nunca mais o use se quiser o troféu Radio Silence já nesta jogada.', src: 'ppTroph', tags: ['setup'], radio: 'Desligue o rádio assim que o receber e não o ligue de novo.' },
      { id: 'p1-exit', t: 'No Turning Back Now: tente sair pelo mirante', d: 'No início, no Observation Deck, tente sair de Silent Hill. Perdível: só dá para fazer antes de seguir a história.', src: 'ppTroph', tags: ['missable', 'trophy'], skipFast: true },
      { id: 'p1-collect', t: 'Coletáveis em ordem de área', d: 'Archivist (68 memos), Pieces Unarranged (26 fotos) e Echoes (26 vislumbres) precisam estar completos numa única jogada. Marque cada um no Tracker e confira antes de sair de cada área.', src: 'shmMemos', tags: ['missable', 'collect'], link: '#coletaveis', skipFast: true },
      { id: 'p1-balloons', map: 'wood-side', t: "Let's NOT Party!: 11 balões no Apt 207", d: 'No Wood Side Apartments, acerte todos os 11 balões no apartamento 207. Perdível.', src: 'ppTroph', tags: ['missable', 'trophy'], firearm: 'Exige a pistola. Faça numa jogada sem a restrição de corpo a corpo (a restrição vale só para matar inimigos, mas confira o seu alvo).', skipFast: true },
      { id: 'p1-room106', map: 'south-vale', t: 'All Seems in Order: parede danificada, Jack\'s Inn Quarto 106', d: 'Em uma visita posterior ao quarto 106 do Jack\'s Inn, inspecione a parede danificada. Perdível.', src: 'ppTroph', tags: ['missable', 'trophy'], skipFast: true },
      { id: 'p1-pizza', map: 'south-vale', t: 'Leftovers: caixa de pizza no Pete\'s Bowl-O-Rama', d: 'Inspecione a caixa de pizza no balcão (também conta como Vislumbre nº 10). Perdível: vá ao Bowl-O-Rama antes de cortar caminho pelo Jack\'s Inn.', src: 'shmGlimpses', tags: ['missable', 'trophy', 'collect'], skipFast: true },
      { id: 'p1-combat', t: 'Troféus de combate cumulativos', d: 'Blunt Force Trauma (75 mortes corpo a corpo), No Big Deal (75 mortes à distância), Merciless (50 pisões; reportado com falha) e James of All Trades (matar com tábua, cano, pistola, escopeta e rifle na mesma jogada). Contadores acumulam entre jogadas, exceto James of All Trades.', src: 'ppTroph', tags: ['trophy', 'missable'], firearm: 'Mortes à distância e James of All Trades exigem armas de fogo: faça nesta jogada, não na restrita.', skipFast: true },
      { id: 'p1-misc', t: 'Shattered e You Never Know…', d: 'Quebre 50 janelas e tente abrir portas trancadas 50 vezes. Os contadores acumulam entre jogadas e vão sendo preenchidos ao explorar.', src: 'ppTroph', tags: ['trophy'], skipFast: true },
      { id: 'p1-lake', map: 'lakeview', t: 'Scourge of Toluca Lake: 10 minutos no lago', d: 'Fique parado no barco por 10 minutos no lago. Perdível.', src: 'ppTroph', tags: ['missable', 'trophy'], skipFast: true },
      { id: 'p1-bread', map: 'lakeview', t: 'It\'s Bread: bandeja de pão no Lakeview Hotel', d: 'Na cozinha da Employee Section, interaja com a bandeja de pão. Perdível.', src: 'ppTroph', tags: ['missable', 'trophy'], skipFast: true },
      { id: 'p1-save', t: 'Crie saves antes da escolha dos finais', d: 'O final vem de pontuação mais as portas do ovo e a conversa no corredor. Mantenha um save antes de cada decisão decisiva (ver aba Finais) para recarregar e tirar os três finais clássicos.', src: 'shmEnd', tags: ['ending'], link: '#finais' },
      { id: 'p1-maria', t: 'Final Maria primeiro', d: 'O roteiro do PowerPyx recomenda mirar no final Maria e depois recarregar saves para Leave e In Water.', src: 'ppTroph', tags: ['ending', 'trophy'], link: '#finais' },
      { id: 'p1-leave', t: 'Final Leave (recarregue o save)', d: 'Veja o checklist de pontuação na aba Finais.', src: 'shmEnd', tags: ['ending', 'trophy'], link: '#finais' },
      { id: 'p1-water', t: 'Final In Water (recarregue o save)', d: 'Veja o checklist de pontuação na aba Finais. Há relatos de resultados inconsistentes: se não vier, repita.', src: 'shmEnd', tags: ['ending', 'trophy'], link: '#finais' },
      { id: 'p1-story', t: 'Troféus de história restantes', d: 'Os demais bronzes são de progressão (chegar a Wood Side, Brookhaven, Lakeview Hotel, chefes, Quarto 312, ambos os Pyramid Heads e o chefe final).', src: 'ppTroph', tags: ['trophy'] }
    ]
  },
  pt2: {
    name: 'Jogada 2: Novo Jogo+ (finais secretos, sem rádio, corpo a corpo, < 10 h)',
    goal: 'Pegar os itens de NG+ para Rebirth, Dog, UFO, Bliss e Stillness, mais Radio Silence, As Close as You Like e Faster Than Fog.',
    steps: [
      { id: 'p2-saw', t: 'Comece um NG+', d: 'Concluir o NG+ em qualquer final dá o troféu I Saw That Town. Os modos gráficos extras abrem ao terminar o jogo uma vez.', src: 'shmUnlock', tags: ['ngplus', 'trophy'], ngplus: true },
      { id: 'p2-chainsaw', map: 'south-vale', t: 'Lumberjack: motosserra no Silent Hill Ranch', d: 'Está presa numa pilha de toras, em frente à placa do rancho. Só em NG+ e perdível. Use-a para o troféu sem tiros.', src: 'shmWeapons', tags: ['ngplus', 'trophy', 'missable'], ngplus: true, link: '#bestiario' },
      { id: 'p2-radio', t: 'Radio Silence: termine sem usar o rádio', d: 'Nunca ligue o rádio durante todo o jogo. Perdível.', src: 'ppTroph', tags: ['trophy', 'missable'], ngplus: true, radio: 'Mantenha desligado. Mannequins não disparam rádio se você ficar parado no escuro.' },
      { id: 'p2-melee', t: 'As Close as You Like: sem matar com armas de fogo', d: 'Nenhuma morte com arma de fogo. Use tábua, cano e a motosserra.', src: 'ppTroph', tags: ['trophy', 'missable'], ngplus: true, firearm: 'Não dispare contra inimigos. Atirar em balões ou objetos não é morte de inimigo, mas evite riscos.' },
      { id: 'p2-fast', t: 'Faster Than Fog: terminar em menos de 10 h', d: 'Cutscenes contam, pausa não. Com a motosserra, NG+ fica bem abaixo disso. Pule a exploração secundária.', src: 'ppTroph', tags: ['trophy', 'missable'], ngplus: true, fast: 'Não faça coletáveis nesta jogada: eles já foram feitos na Jogada 1.' },
      { id: 'p2-ufo', map: 'south-vale', t: 'UFO: Blue Gem em 4 locais', d: 'Estilhace a vitrine esquerda da The Silent Jewellers (East South Vale) e examine a gema: teto do Saul Street Apartments, píer do Rosewater Park (antes de Maria), píer do Lakeview Hotel e Quarto 312.', src: 'shmEnd', tags: ['ending', 'ngplus', 'trophy'], ngplus: true, link: '#finais' },
      { id: 'p2-dog', map: 'south-vale', t: 'Dog: duas metades da Dog Key', d: 'Uma no depósito do Pet Center (East South Vale), outra na casinha de cachorro do quintal da Katz St. Junte e use na Observation Room do 3F do Lakeview Hotel.', src: 'shmUnlock', tags: ['ending', 'ngplus', 'trophy'], ngplus: true, link: '#finais' },
      { id: 'p2-rebirth', map: 'south-vale', t: 'Rebirth: 4 itens rituais', d: 'Crimson Ceremony (cemitério), White Chrism (Baldwin Mansion), Obsidian Goblet (Historical Society) e Lost Memories (Lost & Found do hotel).', src: 'shmUnlock', tags: ['ending', 'ngplus', 'trophy'], ngplus: true, link: '#finais' },
      { id: 'p2-bliss', map: 'brookhaven', t: 'Bliss: White Claudia e fita no Quarto 312', d: 'Abra o cofre do Pete\'s Bowl-O-Rama (código 1887), pegue a Small Chest no gazebo do jardim do Brookhaven, junte e use no Quarto 312, depois reproduza a fita.', src: 'shmEnd', tags: ['ending', 'ngplus'], ngplus: true, link: '#finais' },
      { id: 'p2-still', map: 'ruined-hotel', t: 'Stillness: exige In Water prévio', d: 'Pegue a Key of Sorrow no carro verde da Wiltse Rd., abra o cofre do Manager\'s Office no Otherworld Hotel (código 314) e pegue a Toluca Postcard. A carta anula os itens de Rebirth.', src: 'shmEnd', tags: ['ending', 'ngplus'], ngplus: true, link: '#finais' },
      { id: 'p2-order', t: 'Ordem sugerida dos saves', d: 'Faça save antes do Quarto 312 e antes do último item de Rebirth para tirar UFO e Dog primeiro, depois Rebirth. Ver aba Finais.', src: 'ppTroph', tags: ['ending'], ngplus: true, link: '#finais' },
      { id: 'p2-party', t: 'Party Like It\'s 2001: os cinco finais clássicos', d: 'Leave, Maria, In Water, Rebirth e Dog. O troféu às vezes trava em 4/5; se travar, tente de novo ou termine mais um final.', src: 'ppTroph', tags: ['trophy'], ngplus: true }
    ]
  }
};
