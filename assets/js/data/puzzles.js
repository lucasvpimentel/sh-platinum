// Puzzles. `cases` traz o valor por dificuldade (light/standard/hard); `any` vale para todas.
// Onde nenhuma fonte consultada traz a dificuldade pedida, o app avisa em vez de inventar.
// Notação de cofres: D = sentido horário, E = anti-horário.
export const PUZZLES = [
  { id: 'grand', area: 'East South Vale', name: 'Teclado do Grand Market', srcs: ['ppPuzzle', 'gbPuzzle'],
    hint: 'Código da porta dos fundos; a dica está numa nota perto do caminhão.',
    cases: { light: '4442', standard: '4444', hard: '4446' } },
  { id: 'jukebox', area: 'East South Vale', name: 'Jukebox do Neely\'s Bar', srcs: ['ppPuzzle', 'shmPuzzles'],
    hint: 'Sem variação por dificuldade nas fontes.',
    steps: [
      'Reúna: Broken Vinyl Record e Vinyl Glue (Groovy Music Shop), Jukebox Button (Saul Street Apartments) e Neely\'s Bar Coin (caixa do Texan Cafe).',
      'Una as duas metades do disco com a cola.',
      'Repare o lado direito do jukebox e insira o vinil.',
      'Botão no lado esquerdo, moeda no direito e selecione a faixa C2.'
    ] },
  { id: 'safe206', area: 'Wood Side Apartments', name: 'Cofre do Apt 206', srcs: ['ppPuzzle', 'gbPuzzle'],
    hint: 'A porta tranca até abrir o cofre. Poema e desenhos escondidos indicam a combinação.',
    cases: { light: '15 D, 11 E, 13 D', standard: '13 D, 7 E, 11 D', hard: '13 D, 7 E, 11 D' },
    note: 'O troféu de moeda "Man" fica neste cofre.' },
  { id: 'coin', area: 'Wood Side Apartments', name: 'Armário das moedas', srcs: ['shmCoin', 'ppPuzzle', 'gbPuzzle'],
    hint: 'Moedas: Man (cofre do 206), Woman (calha de lixo e pátio), Snake (carrinho perto do Apt 116).',
    cases: {
      light: 'Início: Man sob Lua, Woman sob Árvore, Flor à direita (Sol). O Man vira Espada e a Flor vira Serpente, sem mudar de lugar. Troque Serpente e Espada, depois vire a Espada de volta em Man. Serpente fica sob a Lua, Woman vira Lápide sob a Árvore e Man vai sob o Sol.',
      standard: 'Início: igual ao Leve. O Man vai para a direita e vira Espada; a Woman vai para a direita, ao lado da Flor. A Flor vira Serpente e a Woman vira Lápide. A Espada fica ao lado da Lápide e a Serpente ocupa o lugar da Flor.',
      hard: 'Coloque o Man o mais longe possível do Sol e da Serpente, com a Lápide também longe dele: Man sob a Lua, Serpente sob o Sol e Lápide no slot distante restante. A Flor sobe das raízes, o Man vira Espada ao lado dela e a Lápide ocupa o lugar do Man. Vire a Lápide de volta em Woman e a Espada em Man: Man ao lado da Woman sob a Árvore e Serpente sob o Sol.'
    },
    note: 'Passo final: a moeda colocada no slot do topo define o final. Serpente aproxima de Leave, Woman de Maria, Man de In Water. Outros guias descrevem a mesma solução com outra notação de slots; confira nos links.' },
  { id: 'clock', area: 'Blue Creek Apartments', name: 'Relógio do Quarto 212', srcs: ['ppPuzzle'],
    hint: 'Três ponteiros (hora, minuto, segundo) abrem as portas H, M e S.',
    cases: { any: 'Porta H: 9:00. Porta M: 9:10. Porta S: 9:10:15 (o ponteiro dos segundos vem do puzzle das mariposas).' },
    note: 'O guia de origem não diz a que dificuldade esses horários correspondem. Se não abrir, confira o Silent Hill Memories.' },
  { id: 'seesaw', area: 'Blue Creek Apartments', name: 'Gangorra do Quarto 210', srcs: ['shmPuzzles'],
    hint: 'Equilibrar as duas figuras na gangorra.', cases: {} },
  { id: 'moth', area: 'Blue Creek Apartments', name: 'Cadeado das mariposas (Quarto 202)', srcs: ['gbPuzzle', 'ppPuzzle'],
    hint: 'Conte os símbolos nas asas das mariposas.',
    cases: { light: '582', standard: '373', hard: '522' } },
  { id: 'jacks', area: 'West South Vale', name: 'Cofre do Jack\'s Inn', srcs: ['ppPuzzle'],
    hint: 'A dica está num memo do Quarto 107.',
    cases: { light: '0451', standard: '0451' }, note: 'Referência a código clássico de jogos imersivos (ver aba Segredos).' },
  { id: 'recep', area: 'Brookhaven Hospital', name: 'Cadeado do Reception Office', srcs: ['gbPuzzle', 'ppPuzzle'],
    hint: 'Dica no memo da enfermeira.', cases: { light: '287', standard: '724', hard: '152' } },
  { id: 'nurses', area: 'Brookhaven Hospital', name: 'Teclado do Nurses\' Station', srcs: ['gbPuzzle', 'ppPuzzle'],
    hint: 'Código no quadro de avisos.', cases: { light: '3578', standard: '3578', hard: '7456' } },
  { id: 'xray', area: 'Brookhaven Hospital', name: 'Visor de raio-X / porta D1', srcs: ['gbPuzzle', 'ppPuzzle'],
    hint: 'Alinhe as radiografias para ver os números.', cases: { any: '4 D, 37 E, 12 D' } },
  { id: 'hand', area: 'Brookhaven Hospital', name: 'Mão do Director\'s Office (pulseiras)', srcs: ['gbPuzzle', 'ppPuzzle'],
    hint: 'Coloque três pulseiras em ordem.', cases: { any: 'Topo 92, meio 45, base 71' } },
  { id: 'dsafe', area: 'Brookhaven Hospital', name: 'Cofre do Director\'s Office', srcs: ['gbPuzzle', 'ppPuzzle'],
    hint: 'Cifra astrológica baseada em livro; a resposta são seis símbolos.',
    cases: { any: 'Dígitos 924571. Símbolos, em ordem: triângulo em círculo, "h", círculo com seta, círculo com ponto, bonequinho com chifres, círculo com linhas.' } },
  { id: 'chained', area: 'Otherworld Hospital', name: 'Caixa acorrentada', srcs: ['ppPuzzle', 'gbPuzzle'],
    hint: 'Uma chave abre a caixa e depois há dois códigos.',
    cases: { any: 'Cadeado: 1622. Teclado: 9659.' } },
  { id: 'pharm', area: 'Otherworld Hospital', name: 'Caixa decorativa da farmácia (opcional)', srcs: ['ppPuzzle', 'gbPuzzle'],
    hint: 'Quiz do elevador.', cases: { any: 'Respostas: pergunta 1 = 2, pergunta 2 = 3, pergunta 3 = 1 (caixa: 231, de cima para baixo).' } },
  { id: 'bug', area: 'Historical Society', name: 'Teclado da Bug Room', srcs: ['ppPuzzle', 'shmPuzzles'],
    hint: 'Botões acesos: 2, 3 e 9.', cases: { any: 'Qualquer ordem dos três dígitos 2, 3 e 9 (são seis combinações possíveis).' } },
  { id: 'scales', area: 'Toluca Prison', name: 'Balanças e pesos', srcs: ['ppPuzzle', 'shmPuzzles'],
    hint: 'Sem variação por dificuldade nas fontes.',
    steps: [
      'Porta da Serpente: peso mais pesado à direita e o mais leve à esquerda.',
      'Porta do Boi: mais pesado e mais leve à esquerda, o médio à direita.',
      'Porta do Javali: mais leve à esquerda, os outros à direita.',
      'Porta da Pomba: médio à direita, os outros à esquerda.',
      'Alavanca de execução: pesos iguais nos dois lados.'
    ] },
  { id: 'generator', area: 'Toluca Prison', name: 'Gerador da Witness Room', srcs: ['shmPuzzles', 'ppPuzzle'],
    hint: 'Ligue os interruptores de modo que todos fiquem ligados ao mesmo tempo e puxe o disjuntor.', cases: {},
    note: 'As fontes não dão a sequência exata: é por tentativa.' },
  { id: 'gallows', area: 'Toluca Prison', name: 'Forca (Gallows)', srcs: ['ppPuzzle', 'shmPuzzles'],
    hint: 'Sem variação por dificuldade nas fontes.',
    steps: [
      'Junte a primeira e a segunda metade de cada poema.',
      'Escolha o crime cometido por necessidade, não por maldade (PowerPyx cita o furto de remédio para aliviar a dor como exemplo).',
      'Puxe a corda do inocente.'
    ],
    note: 'O poema escolhido também pesa nos finais: o de James empurra para Maria; os de Eddie e Angela, para Leave e In Water.' },
  { id: 'cubes', area: 'Labyrinth', name: 'Cubos rotativos', srcs: ['ppPuzzle', 'shmPuzzles'],
    hint: 'Gire o cubo até os símbolos baterem com a parede.',
    steps: ['Cubo 1: alinhe a face dos dois triângulos.', 'Cubo 2: face dos dois infinitos, depois a escada à direita.', 'Cubos 3 e 4: face do símbolo riscado, depois a face dos dois triângulos para baixo.'] },
  { id: 'books', area: 'Lakeview Hotel', name: 'Estante da Reading Room', srcs: ['gbPuzzle', 'ppPuzzle'],
    hint: 'A capa de cada livro tem um símbolo; imite a pintura.',
    cases: { light: 'Sentido horário a partir do topo esquerdo: Ícaro, Touro, Águia, Leão.', standard: 'Ícaro, Águia, Leão, Touro.', hard: 'Ícaro, Águia, Leão, Touro.' },
    note: 'O PowerPyx lista os títulos (Revelations: A New Understanding, The One Who Soared, Stalwart to the End, Pride Before the Fall), de cima à esquerda para baixo à direita, para Leve e Padrão.' },
  { id: 'mirror', area: 'Lakeview Hotel', name: 'Espelho do Quarto 202', srcs: ['ppPuzzle', 'shmEnd'],
    hint: 'Refaça o espelho e escolha a maçã.',
    cases: { any: 'Maçã madura: caminho de Maria. Maçã podre: Leave ou In Water.' } },
  { id: 'vanity', area: 'Lakeview Hotel', name: 'Penteadeira do Quarto 205 / lâmpada', srcs: ['ppPuzzle', 'shmPuzzles'],
    hint: 'Revela uma mensagem escondida que é o código da maleta.',
    cases: { light: 'DARK WISH', standard: 'DEED DONE' } },
  { id: 'gembox', area: 'Lakeview Hotel', name: 'Caixa de gemas (Manager\'s Office)', srcs: ['ppPuzzle', 'gbPuzzle'],
    hint: 'Combine as gemas com a pintura.', cases: { any: 'Verde em cima à esquerda, Vermelha em cima à direita, Azul embaixo à esquerda.' } },
  { id: 'breaksafe', area: 'Lakeview Hotel', name: 'Cofre da sala de descanso', srcs: ['ppPuzzle'],
    hint: 'Código do cofre.', cases: { any: '7414' } },
  { id: 'musicbox', area: 'Lakeview Hotel', name: 'Caixa de música', srcs: ['ppPuzzle', 'shmPuzzles'],
    hint: 'Figuras: Pequena Sereia (topo), Cinderela (direita), Branca de Neve (esquerda). Gire os discos para as portas e aperte o botão inferior direito.',
    cases: { light: 'Voltas nas chaves: 1ª = 7, 2ª = 2, 3ª = 1.', standard: 'Voltas nas chaves: 1ª = 7, 2ª = 5, 3ª = 1.' } },
  { id: 'petesafe', area: 'West South Vale (NG+)', name: 'Cofre do Pete\'s Bowl-O-Rama', srcs: ['shmEnd', 'shmUnlock'],
    hint: 'Só em NG+. O código está em um memo no corpo da Nathan Ave. oeste.', cases: { any: '1887' } }
];

export const DIFF_LABEL = { light: 'Leve', standard: 'Padrão', hard: 'Difícil' };

// Resolve a solução para a dificuldade escolhida.
// kind: 'exact' (valor da dificuldade), 'any' (vale para todas), 'steps', 'missing' (sem dado nas fontes).
export function solutionFor(p, diff) {
  if (p.cases && p.cases[diff]) return { kind: 'exact', text: p.cases[diff] };
  if (p.cases && p.cases.any) return { kind: 'any', text: p.cases.any };
  if (p.steps) return { kind: 'steps', steps: p.steps };
  return { kind: 'missing', text: `Nenhuma fonte consultada traz o valor para a dificuldade ${DIFF_LABEL[diff]}. Veja os links abaixo.` };
}
