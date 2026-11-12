import { PUZZLES, DIFF_LABEL, solutionFor } from '../data/puzzles.js';
import { esc, srcA } from '../util.js';

export function render(el, { store }) {
  const diff = store.get().cfg.puzzle;
  const areas = [...new Set(PUZZLES.map((p) => p.area))];

  const body = (p) => {
    const sol = solutionFor(p, diff);
    const badge = { exact: `Valor para ${DIFF_LABEL[diff]}`, any: 'Vale para todas as dificuldades', steps: 'Passo a passo', missing: 'Sem dado' }[sol.kind];
    const text = sol.kind === 'steps'
      ? `<ol>${sol.steps.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>`
      : `<p class="answer${sol.kind === 'missing' ? ' missing' : ''}">${esc(sol.text)}</p>`;
    return `<span class="tag ${sol.kind === 'missing' ? 'missable' : 'ending'}">${esc(badge)}</span>${text}${p.note ? `<p class="muted">${esc(p.note)}</p>` : ''}`;
  };

  el.innerHTML = `
    <h2>Puzzles</h2>
    <div class="note">Dificuldade de enigmas ativa: <strong>${DIFF_LABEL[diff]}</strong>. Troque no painel Parâmetros da run. As soluções ficam seladas para evitar spoiler.</div>
    ${areas.map((a) => `
      <h3 class="sec">${esc(a)}</h3>
      ${PUZZLES.filter((p) => p.area === a).map((p) => `
        <article class="card">
          <h4 class="ptitle">${esc(p.name)}</h4>
          <p class="muted">${esc(p.hint)}</p>
          <details class="seal">
            <summary>Arquivo selado: clique para revelar a solução</summary>
            <div class="sealed">${body(p)}</div>
          </details>
          <p class="meta">${p.srcs.map(srcA).join(' · ')}</p>
        </article>`).join('')}`).join('')}`;
}
