// Segredos, diferenças e notas de verificação.
// status: 'ok' = encontrado em fonte consultada; 'rep' = reportado pela imprensa; 'unv' = veio do rascunho e não foi confirmado.
export const EGGS = [
  { t: 'Placa em Comic Sans (alusão à HD Collection)', status: 'rep',
    d: 'Existe uma placa em Comic Sans, referência à Silent Hill HD Collection. Segundo a imprensa, só é vista fora dos limites do mapa (com câmera livre).',
    links: [['OpenCritic', 'https://opencritic.com/news/6989/silent-hill-2-remake-is-hiding-the-best-reference-to-the-doomed-silent-hill-hd-collection']] },
  { t: 'Código 0451 no Jack\'s Inn', status: 'ok',
    d: 'O cofre do Jack\'s Inn usa 0451 nas dificuldades Leve e Padrão. Reportagens ligam o número ao código de porta dos Looking Glass Studios (System Shock).',
    src: 'ppPuzzle' },
  { t: 'Vestido clássico de Maria', status: 'rep',
    d: 'Maria aparece com o figurino clássico em uma interação que conta pontos para o final Maria. O quarto exato do Jack\'s Inn não foi confirmado.',
    src: 'shmEnd' },
  { t: 'Caixa de pizza e a fala do Pete\'s Bowl-O-Rama', status: 'ok',
    d: 'A caixa de pizza no balcão tem uma fala reescrita de um diálogo do original. Também vale o Vislumbre nº 10 e o troféu Leftovers.',
    src: 'shmGlimpses' },
  { t: 'A cifra das 26 fotos', status: 'ok',
    d: 'Com o número no verso de cada foto, as 26 letras formam "YOU\'VE BEEN HERE FOR TWO DECADES". Decodificação creditada a Dale Robinson (Reddit).',
    src: 'shmPhotos' },
  { t: 'Corpo de Mary no carro', status: 'rep',
    d: 'Fora dos limites do mapa, o corpo real de Mary está no banco de trás do carro de James.',
    links: [['The National', 'https://thenationalnews.com/arts-culture/2024/11/05/silent-hill-2-video-game-easter-eggs']] },
  { t: 'Listas completas de easter eggs', status: 'ok',
    d: 'A IGN mantém a lista mais completa. Não consegui abri-la a partir daqui; consulte direto.', src: 'ignEggs' }
];

// Itens do rascunho original que NÃO foram confirmados em nenhuma fonte consultada.
export const UNVERIFIED = [
  'Placa em Comic Sans especificamente no Silent Hill Ranch.',
  'Vestido de Maria no armário do Quarto 108 do Jack\'s Inn.',
  'Fantasia de enfermeira nas cabines do Heaven\'s Night.',
  'Diálogo exclusivo de Maria no Quarto 106 do Jack\'s Inn (o troféu All Seems in Order é sobre a parede danificada do 106).',
  'Recortes sobre os gêmeos Locane e Walter Sullivan (Silent Hill 4) nos apartamentos.',
  'Mapa original de 2001 pregado na parede da piscina do Wood Side.'
];

export const DIFFS = [
  { t: 'Câmera', old: 'Ângulos fixos e cinematográficos do PS2.', neu: 'Câmera moderna sobre o ombro, mais clausura e controle direto.', ok: false },
  { t: 'Combate', old: 'Combate simples, sem esquiva dedicada.', neu: 'Esquiva ativa. Inimigos caídos podem se levantar e há troféu para pisões (Merciless). Atordoar à distância e finalizar de perto é o estilo premiado.', ok: true, src: 'ppTroph' },
  { t: 'Duração e escala', old: 'Campanha curta, na casa de 6 a 8 horas.', neu: 'Bem mais longa: o troféu Faster Than Fog exige terminar em menos de 10 horas, o que indica que a média é maior.', ok: true, src: 'ppTroph' },
  { t: 'Puzzles', old: 'Uma versão de cada puzzle, com dificuldade de leitura.', neu: 'Três níveis de enigmas (Leve, Padrão, Difícil) que mudam códigos e soluções, não só o texto.', ok: true, src: 'gbPuzzle' },
  { t: 'Criaturas', old: 'Comportamento mais previsível.', neu: 'Mannequins com variante que anda por paredes e tetos e cai sobre você; Nurses atacam com cano e faca.', ok: true, src: 'shmMonsters' },
  { t: 'Chefes', old: 'Arenas mais simples.', neu: 'Chefes com várias fases: Flesh Lip em 2, Eddie em 3, Abstract Daddy em 2 e Mary em 3.', ok: true, src: 'shmBosses' },
  { t: 'Finais', old: 'Seis finais no original (três principais e três secretos).', neu: 'Oito no Remake, com Bliss e Stillness inéditos.', ok: true, src: 'shmEnd' },
  { t: 'Vislumbres do passado', old: 'Sem equivalente.', neu: '26 pontos que remetem a detalhes do jogo de 2001, com o troféu Echoes.', ok: true, src: 'shmGlimpses' },
  { t: 'Armas', old: 'Arsenal base parecido (corpo a corpo e armas de fogo).', neu: 'Tábua e cano de aço, pistola, escopeta, rifle; motosserra só em NG+.', ok: true, src: 'shmWeapons' },
  { t: 'Itens de cura', old: 'Vários tipos.', neu: 'Menos tipos e animações que prendem James por alguns segundos. Detalhes não confirmados.', ok: false },
  { t: 'Mudanças de lugar', old: 'Heaven\'s Night e primeira cena de Eddie e Laura em outros pontos.', neu: 'O rascunho afirma deslocamentos (clube, cinema). Não confirmado.', ok: false }
];

// Divergências entre o rascunho inicial e as fontes consultadas.
export const CORRECTIONS = [
  ['Stillness', 'Exige já ter feito In Water. Usa a Key of Sorrow (carro verde da Wiltse Rd.) e o cofre do Manager\'s Office com código 314, não uma chave do hospital.'],
  ['Bliss', 'Usa a White Claudia (Small Chest + Rusted Key do cofre do Pete\'s Bowl-O-Rama, código 1887) no Quarto 312 e depois a fita de vídeo. Não há "White Climax" nas fontes.'],
  ['Leave / Maria / In Water', 'Funcionam por pontuação e também pelas escolhas (moeda, poema na forca, maçã, porta do ovo). A ordem recomendada pelo PowerPyx é Maria primeiro e recarregar saves.'],
  ['Troféu de velocidade', 'O nome é "Faster Than Fog".'],
  ['Textos integrais de memos', 'Não reproduzidos (direitos autorais). O app lista nome e local e linka a fonte.'],
  ['Imagens das fotos estranhas', 'Não incluídas. A moldura polaroid mostra número, legenda e local.'],
  ['Cloud Sync', 'Não implementado: exigiria servidor. Use Exportar/Importar JSON.'],
  ['Valores Hard dos puzzles', 'Algumas dificuldades não têm dado nas fontes; o app avisa em vez de inventar.']
];
