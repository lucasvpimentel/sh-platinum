// Parâmetros da run: valores válidos, padrões e rótulos (pt-BR).
export const CONFIG_FIELDS = [
  { key: 'combat', label: 'Dificuldade de combate', opts: [['light', 'Leve'], ['standard', 'Padrão'], ['hard', 'Difícil']], def: 'standard' },
  { key: 'puzzle', label: 'Dificuldade de enigmas', opts: [['light', 'Leve'], ['standard', 'Padrão'], ['hard', 'Difícil']], def: 'standard' },
  { key: 'radio', label: 'Rádio', opts: [['normal', 'Rádio normal'], ['silent', 'Sem rádio (Radio Silence)']], def: 'normal' },
  { key: 'weapons', label: 'Armas', opts: [['all', 'Todas as armas'], ['melee', 'Só corpo a corpo (As Close as You Like)']], def: 'all' },
  { key: 'speed', label: 'Tempo', opts: [['normal', 'Tempo normal'], ['fast', 'Abaixo de 10 h (Faster Than Fog)']], def: 'normal' },
  { key: 'cycle', label: 'Ciclo', opts: [['ng', 'Primeira jogada (NG)'], ['ngplus', 'Novo Jogo+ (NG+)']], def: 'ng' }
];

export const defaultCfg = () => Object.fromEntries(CONFIG_FIELDS.map((f) => [f.key, f.def]));
export const validValues = (key) => CONFIG_FIELDS.find((f) => f.key === key).opts.map((o) => o[0]);
