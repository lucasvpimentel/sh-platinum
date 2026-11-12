// Finais do Remake. Os três clássicos dependem de pontuação; os de NG+ dependem de itens.
// `do` = ações que empurram para o final (checklist). `avoid` = ações que o afastam.
export const ENDINGS = [
  {
    id: 'leave', type: 'classic', name: 'Leave (Partir)', trophy: 'Making Peace', src: 'shmEnd',
    summary: 'James aceita a morte de Mary e segue em frente.',
    do: [
      'Examinar a carta ou a foto de Mary 3 vezes ou mais',
      'Curar-se em excesso (use itens de cura cedo)',
      'Matar menos de 150 inimigos',
      'Quebra-cabeça das moedas (Wood Side): colocar a Serpente no slot do topo',
      'Primeiro Pyramid Head: não atacá-lo',
      'Forca (Toluca): escolher o poema de Eddie ou de Angela',
      'Espelho do Quarto 202 (Lakeview): colocar a maçã podre',
      'Porta final: ovo cor de ferrugem (Rust-Colored Egg)',
      'Ouvir o monólogo completo de Mary no corredor'
    ],
    avoid: [
      'Interagir com Maria além do obrigatório',
      'Examinar a faca de Angela',
      'Visitar Maria no hospital',
      'Ler a mensagem do jukebox',
      'Matar os monstros enfraquecidos no Ruined Hotel'
    ]
  },
  {
    id: 'maria', type: 'classic', name: 'Maria', trophy: 'Vicious Circle', src: 'shmEnd',
    summary: 'James rejeita a realidade de Mary e fica com Maria.',
    do: [
      'Moedas: colocar a Mulher no slot do topo',
      'Proteger Maria: evitar que ela leve dano',
      'Interagir com Maria 4 vezes em West South Vale',
      'Inspecionar todos os objetos do Heaven\'s Night',
      'Visitar Maria no hospital 4 vezes',
      'Forca: escolher o poema de James',
      'Voltar ao quarto de Maria no Labirinto',
      'Espelho do Quarto 202: colocar a maçã madura',
      'Porta final: ovo escarlate (Scarlet Egg)',
      'Pular o monólogo completo de Mary no corredor'
    ],
    avoid: [
      'Examinar a carta ou a foto de Mary',
      'Matar entre 150 e 350 inimigos'
    ]
  },
  {
    id: 'inwater', type: 'classic', name: 'In Water (Na Água)', trophy: 'Only Way Out', src: 'shmEnd',
    summary: 'James sucumbe à culpa e escolhe o suicídio.',
    do: [
      'Examinar a carta ou a foto de Mary 3 vezes ou mais',
      'Manter a vida baixa por 100 s ou mais',
      'Matar 350 inimigos ou mais',
      'Pisotear 30 inimigos caídos ou mais',
      'Moedas: colocar o Homem no slot do topo',
      'Examinar a faca de Angela mais 2 vezes',
      'Danificar o Pyramid Head na primeira luta',
      'Ler a mensagem do jukebox',
      'Forca: escolher o poema de Eddie ou de Angela',
      'Espelho do Quarto 202: colocar a maçã podre',
      'Matar os três monstros enfraquecidos no Ruined Hotel',
      'Porta final: ovo cor de ferrugem',
      'Ouvir o monólogo completo de Mary no corredor'
    ],
    avoid: [],
    note: 'Há relatos de resultado inconsistente: se não vier, recarregue o save e repita.'
  },
  {
    id: 'rebirth', type: 'ngplus', name: 'Rebirth (Renascimento)', trophy: 'Defy Even Death', src: 'shmUnlock',
    summary: 'Ritual de renascimento. Só em NG+.',
    do: [
      'Crimson Ceremony: cemitério, canto nordeste, diante de uma lápide',
      'White Chrism: West South Vale, mesa perto da entrada da Baldwin Mansion',
      'Obsidian Goblet: Historical Society, nicho na parede do salão principal',
      'Lost Memories: Lakeview Hotel, prateleira do Lost & Found (substitui a nota normal)',
      'Vencer o chefe final'
    ],
    avoid: [],
    note: 'A Toluca Postcard (Stillness) anula os itens de Rebirth.'
  },
  {
    id: 'dog', type: 'ngplus', name: 'Dog (O Cachorro)', trophy: 'The Goodest Boi', src: 'shmUnlock',
    summary: 'Final cômico com um cachorro na sala de controle.',
    do: [
      'Broken Key Part 1: Pet Center, depósito dos fundos (East South Vale, ao lado do Big Jay\'s)',
      'Broken Key Part 2: casinha de cachorro no quintal da Katz St. (portão, West South Vale)',
      'Combinar as duas partes na Dog Key',
      'Usar a Dog Key na porta da Observation Room, 3F do Lakeview Hotel'
    ],
    avoid: []
  },
  {
    id: 'ufo', type: 'ngplus', name: 'UFO', trophy: 'Tinfoil Hat', src: 'shmUnlock',
    summary: 'Final com óvnis. Só em NG+.',
    do: [
      'Blue Gem: estilhaçar a vitrine esquerda da The Silent Jewellers (East South Vale)',
      'Examinar a gema no respiradouro do teto do Saul Street Apartments',
      'Examinar a gema no píer do Rosewater Park, antes de encontrar Maria',
      'Examinar a gema no píer do Lakeview Hotel, depois de cruzar o lago',
      'Examinar a gema no Quarto 312'
    ],
    avoid: []
  },
  {
    id: 'bliss', type: 'ngplus', name: 'Bliss (Êxtase)', trophy: '(sem troféu próprio listado)', src: 'shmEnd',
    summary: 'Final inédito do Remake. Só em NG+.',
    do: [
      'Cofre do Pete\'s Bowl-O-Rama: código 1887 (memo no corpo da Nathan Ave. oeste); pegar Rusted Key e carta',
      'Small Chest: gazebo do jardim do Brookhaven Hospital',
      'Combinar Small Chest + Rusted Key em White Claudia',
      'Usar a White Claudia no Quarto 312 do Lakeview Hotel',
      'Reproduzir a Video Tape'
    ],
    avoid: []
  },
  {
    id: 'stillness', type: 'ngplus', name: 'Stillness (Imobilidade)', trophy: '(sem troféu próprio listado)', src: 'shmEnd',
    summary: 'Final inédito do Remake. Exige já ter feito In Water.',
    do: [
      'Ter concluído o final In Water antes',
      'Key of Sorrow: carro verde da Wiltse Rd., quebrar o vidro traseiro',
      'Cofre do Manager\'s Office (Otherworld Hotel): código 314, pegar a Toluca Postcard',
      'Vencer o chefe final'
    ],
    avoid: [],
    note: 'Três memos de NG+ (Wood Side, Otherworld Brookhaven, Lakeview Hotel) dão partes da combinação do cofre.'
  }
];

// Sugestões de pontos de save (conselho de organização, não regra do jogo).
export const SAVE_TIPS = [
  'Antes do espelho do Quarto 202 (Lakeview): decide maçã madura ou podre.',
  'Antes da conversa no corredor final e da porta do ovo: decide ferrugem ou escarlate e o monólogo de Mary.',
  'NG+: save antes do Quarto 312 e antes do último item de Rebirth para tirar UFO e Dog primeiro.',
  'Mantenha slots separados: um para Maria, um para Leave, um para In Water.'
];
