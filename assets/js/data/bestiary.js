// Bestiário, chefes, armas e personagens. Resumos próprios a partir do Silent Hill Memories.
// Onde a fonte não informa fraqueza ou comportamento de rádio, o app diz isso em vez de inventar.
export const MONSTERS = [
  { name: 'Lying Figure', d: 'Humanoide de pele carnuda em casulo. Rasteja ou cambaleia e esguicha ácido pelas aberturas do peito. As versões do Outro Mundo têm espinhos e soltam líquido venenoso ao morrer: evite o corpo a corpo.', tip: 'Prefira atordoar à distância; cuidado com o veneno depois da morte.' },
  { name: 'Creeper', d: 'Pequeno, rápido, parece um inseto de carapaça segmentada, corre pelo chão.', tip: 'Fraquezas não informadas na fonte.' },
  { name: 'Mannequin', d: 'Forma sem cabeça de pernas fundidas e enfaixadas, que avança aos trancos. Reage a ataques da lanterna com as pernas superiores. Uma variante mais rápida anda por paredes e tetos e cai sobre você.', tip: 'Ficar parado no escuro não aciona o rádio (relevante para Radio Silence). Olhe para cima em corredores estreitos.' },
  { name: 'Bubble Head Nurse', d: 'Figura de uniforme sujo de sangue e cabeça inchada sem rosto. Ataca com cano enferrujado ou faca.', tip: 'Fraquezas não informadas na fonte.' },
  { name: 'Mandarin', d: 'Criatura magra, de aparência de inseto, que se esconde sob grades no chão ou teto e agarra quem passa acima. Só aparece no Outro Mundo.', tip: 'Não ande sobre grades; contorne.' }
];

export const BOSSES = [
  { name: 'Pyramid Head (Blue Creek)', where: 'Blue Creek Apartments', tactics: ['Não pode ser morto; a luta dura 3 minutos. Dá para atacar para encerrar antes ou apenas esquivar.', 'De longe, use a pistola em poucos tiros por vez.', 'Após 1 minuto ele acelera e quebra as barricadas.'] },
  { name: 'Flesh Lip', where: 'Brookhaven Hospital', tactics: ['Fase 1: ele se esconde no teto. Esquive, atire nas pernas ou nos lados abertos enquanto pendura e acerte a gaiola com o cano quando cair. Não gaste bala no corpo preso.', 'Fase 2: mantenha distância, esquive dos ataques rápidos e use a escopeta, evitando o dorso blindado (cerca de 10 a 12 tiros no Padrão).', 'Pegue suprimentos antes: não dá para voltar.'] },
  { name: 'Abstract Daddy', where: 'Labirinto', tactics: ['Fase 1: mantenha distância no labirinto e use o rifle. Cuidado com a investida e o atordoamento sonoro. Quebre três TVs para chamá-lo de novo.', 'Fase 2: comece com o rifle e troque para escopeta de perto. Ele é lento: contorne e atire entre os ataques.'] },
  { name: 'Eddie Dombrowski', where: 'Labirinto', tactics: ['Fase 1: ouça os passos e atire de longe. O martelo do revólver avisa quando esquivar; use uma carcaça como cobertura.', 'Fase 2: névoa enche a sala. Fique parado, escute e use a escopeta quando ele investir.', 'Fase 3: uma esteira o desacelera. Atire de longe, persiga com a escopeta ou use corpo a corpo.'] },
  { name: 'Pyramid Heads (dupla)', where: 'Lakeview Hotel', tactics: ['Dividem uma barra de vida. Mantenha distância e use rifle, escopeta ou pistola, circulando e recarregando (cerca de 22 a 24 tiros de rifle no Padrão).', 'Corpo a corpo com o cano: esquive da estocada e bata por trás (cerca de 22 golpes, mais arriscado).'] },
  { name: 'Mary (chefe final)', where: 'Lakeview Hotel', tactics: ['Fase 1: acerte de longe com o rifle; afaste mariposas e evite o agarrão de tentáculo. Após cerca de 10 tiros, ela o derruba.', 'Fase 2: siga as faíscas para achá-la, esquive das quedas e termine com escopeta ou pistola quando pendurada no teto (6 a 8 tiros).', 'Fase 3: rifle de longe ou escopeta de perto; esquive de pernadas e investidas. Após o terceiro rugido ela está quase morta: termine corpo a corpo.'] }
];

export const WEAPONS = [
  { name: 'Tábua com pregos (Wooden Plank)', melee: true, where: 'Entregue numa cutscene ao encontrar o primeiro monstro.' },
  { name: 'Cano de aço (Steel Pipe)', melee: true, where: 'Entregue numa cutscene ao fugir dos monstros na Katz St., West South Vale. Substitui a tábua.' },
  { name: 'Pistola (Handgun)', melee: false, where: 'Wood Side Apartments, no carrinho de compras vermelho do Apt 217. 10 balas por pente; fraca, fácil de usar.' },
  { name: 'Escopeta (Shotgun)', melee: false, where: 'Brookhaven Hospital, armário aberto no vestiário feminino do 2F. 6 cartuchos; potente e pesada.' },
  { name: 'Rifle de caça (Hunting Rifle)', melee: false, where: 'Toluca Prison, armário trancado no Armory (exige a Armory Key). 4 balas por pente; recarga lenta, dano alto.' },
  { name: 'Motosserra (Chainsaw)', melee: true, where: 'Só em NG+. Silent Hill Ranch, presa numa pilha de toras em frente à placa do rancho. Ataque altíssimo. Conta como corpo a corpo.' }
];

export const CHARACTERS = [
  { name: 'James Sunderland', d: 'Viaja a Silent Hill depois de receber uma carta de sua esposa falecida.' },
  { name: 'Mary Shepherd-Sunderland', d: 'Esposa de James, morta por doença três anos antes.' },
  { name: 'Maria', d: 'Mulher quase idêntica a Mary, mas de personalidade bem diferente.' },
  { name: 'Angela Orosco', d: 'Jovem que procura a mãe na cidade e vive assustada.' },
  { name: 'Laura', d: 'Menina amiga de Mary que não gosta de James.' },
  { name: 'Eddie Dombrowski', d: 'Homem aparentemente inofensivo que esconde um medo profundo de ser ferido.' }
];
