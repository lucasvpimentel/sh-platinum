// Fontes canônicas. Cada dado do app aponta para uma destas chaves.
export const SOURCES = {
  ignWalk: { name: 'IGN Walkthrough', url: 'https://www.ign.com/wikis/silent-hill-2-remake' },
  ignTroph: { name: 'IGN Troféus', url: 'https://www.ign.com/wikis/silent-hill-2-remake/Trophies_%26_Achievements' },
  ppTroph: { name: 'PowerPyx: Troféus e Roadmap', url: 'https://www.powerpyx.com/silent-hill-2-remake-trophy-guide-roadmap/' },
  ppPuzzle: { name: 'PowerPyx: Puzzles', url: 'https://www.powerpyx.com/silent-hill-2-remake-all-puzzle-solutions-guide/' },
  gbPuzzle: { name: 'GamingBolt: Puzzles por dificuldade', url: 'https://gamingbolt.com/silent-hill-2-remake-guide-all-puzzle-solutions-at-all-difficulty-levels' },
  ignEggs: { name: 'IGN Easter Eggs', url: 'https://www.ign.com/wikis/silent-hill-2-remake/Easter_Eggs' },
  ignDiff: { name: 'IGN Original vs Remake', url: 'https://www.ign.com/wikis/silent-hill-2-remake/Differences_Between_the_Original_and_the_Remake' },
  shmMaps: { name: 'Silent Hill Memories: Mapas', url: 'https://www.silenthillmemories.net/sh2_remake/maps_en.htm' },
  shmEnd: { name: 'Silent Hill Memories: Finais', url: 'https://www.silenthillmemories.net/sh2_remake/endings_en.htm' },
  shmMemos: { name: 'Silent Hill Memories: Memos', url: 'https://www.silenthillmemories.net/sh2_remake/memos_en.htm' },
  shmNotes: { name: 'Silent Hill Memories: Notes', url: 'https://www.silenthillmemories.net/sh2_remake/notes_en.htm' },
  shmPhotos: { name: 'Silent Hill Memories: Strange Photos', url: 'https://www.silenthillmemories.net/sh2_remake/strange_photos_en.htm' },
  shmGlimpses: { name: 'Silent Hill Memories: Glimpses', url: 'https://www.silenthillmemories.net/sh2_remake/glimpses_of_the_past_en.htm' },
  shmMonsters: { name: 'Silent Hill Memories: Monstros', url: 'https://www.silenthillmemories.net/sh2_remake/monsters_en.htm' },
  shmBosses: { name: 'Silent Hill Memories: Chefes', url: 'https://www.silenthillmemories.net/sh2_remake/bosses_en.htm' },
  shmChars: { name: 'Silent Hill Memories: Personagens', url: 'https://www.silenthillmemories.net/sh2_remake/characters_en.htm' },
  shmWeapons: { name: 'Silent Hill Memories: Armas', url: 'https://www.silenthillmemories.net/sh2_remake/weapons_en.htm' },
  shmUnlock: { name: 'Silent Hill Memories: Desbloqueáveis', url: 'https://www.silenthillmemories.net/sh2_remake/unlockables_en.htm' },
  shmPuzzles: { name: 'Silent Hill Memories: Puzzles', url: 'https://www.silenthillmemories.net/sh2_remake/puzzles_en.htm' },
  shmCoin: { name: 'Silent Hill Memories: Coin Cabinet', url: 'https://www.silenthillmemories.net/sh2_remake/puzzle_02_coin_cabinet_en.htm' },
  eurogamer: { name: 'Eurogamer: Dicas e Truques', url: 'https://www.eurogamer.net/silent-hill-2-walkthrough-tips-and-tricks-guide#section-2' }
};

export const srcLink = (key) => SOURCES[key];
