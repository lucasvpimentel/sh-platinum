// Lógica pura (sem DOM): aplica a configuração da run à rota.
// Retorna uma entrada por etapa: { step, hidden, locked, warnings[] }.
export function filterRoute(steps, cfg) {
  return steps.map((step) => {
    const warnings = [];
    if (step.radio && cfg.radio === 'silent') warnings.push({ kind: 'radio', text: step.radio });
    if (step.firearm && cfg.weapons === 'melee') warnings.push({ kind: 'firearm', text: step.firearm });
    if (step.fast && cfg.speed === 'fast') warnings.push({ kind: 'fast', text: step.fast });
    return {
      step,
      hidden: Boolean(step.skipFast && cfg.speed === 'fast'),
      locked: Boolean(step.ngplus && cfg.cycle === 'ng'),
      warnings
    };
  });
}

// Alertas globais conforme a run escolhida.
export function globalAlerts(cfg) {
  const a = [];
  if (cfg.radio === 'silent') a.push('Rádio desligado: nunca ligue nem use o rádio. Troféu Radio Silence é perdível.');
  if (cfg.weapons === 'melee') a.push('Só corpo a corpo: NUNCA dispare armas de fogo contra inimigos. Troféu As Close as You Like é perdível.');
  if (cfg.speed === 'fast') a.push('Modo < 10 h: tarefas secundárias ocultas. Cutscenes contam no tempo; pausar não.');
  if (cfg.cycle === 'ngplus') a.push('NG+: itens de finais secretos e a motosserra estão disponíveis.');
  return a;
}

// Progresso: só conta etapas visíveis e destravadas.
export function progress(entries, done) {
  const counted = entries.filter((e) => !e.hidden && !e.locked);
  const n = counted.filter((e) => done[e.step.id]).length;
  return { done: n, total: counted.length, pct: counted.length ? Math.round((n / counted.length) * 100) : 0 };
}
