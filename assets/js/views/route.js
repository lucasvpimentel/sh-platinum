import { ROUTE } from '../data/route.js';
import { filterRoute, globalAlerts, progress } from '../filter.js';
import { esc, srcA } from '../util.js';

const TAG_LABEL = { missable: 'Perdível', trophy: 'Troféu', collect: 'Coletável', ending: 'Final', ngplus: 'NG+', setup: 'Preparação' };

export function render(el, { store }) {
  const s = store.get();
  const key = s.ui.pt || (s.cfg.cycle === 'ngplus' ? 'pt2' : 'pt1');
  const pt = ROUTE[key];
  const entries = filterRoute(pt.steps, s.cfg);
  const prog = progress(entries, s.done);
  const hiddenN = entries.filter((e) => e.hidden).length;
  const alerts = globalAlerts(s.cfg);

  el.innerHTML = `
    <h2>Rota de platina</h2>
    <div class="seg" role="tablist" aria-label="Jogada">
      ${Object.entries(ROUTE).map(([k, v]) => `<button role="tab" aria-selected="${k === key}" data-pt="${k}">${k === 'pt1' ? 'Jogada 1' : 'Jogada 2 (NG+)'}</button>`).join('')}
    </div>
    <p class="lead">${esc(pt.name)}</p>
    <p class="muted">${esc(pt.goal)}</p>
    ${alerts.map((a) => `<div class="alert" role="alert">${esc(a)}</div>`).join('')}
    ${key === 'pt2' && s.cfg.cycle === 'ng' ? '<div class="note">Etapas de NG+ estão bloqueadas: troque o Ciclo para NG+ no painel para contá-las no progresso.</div>' : ''}
    <div class="progress" aria-label="Progresso"><div class="bar" style="width:${prog.pct}%"></div><span>${prog.done} / ${prog.total} (${prog.pct}%)</span></div>
    ${hiddenN ? `<p class="muted">${hiddenN} etapa(s) oculta(s) pelo modo &lt; 10 h.</p>` : ''}
    <ol class="steps">
      ${entries.filter((e) => !e.hidden).map(({ step, locked, warnings }) => `
        <li class="card step${locked ? ' locked' : ''}${s.done[step.id] ? ' done' : ''}">
          <label class="check"><input type="checkbox" data-id="${esc(step.id)}" ${s.done[step.id] ? 'checked' : ''} ${locked ? 'disabled' : ''}><span class="box" aria-hidden="true"></span>
            <span class="title">${esc(step.t)}</span></label>
          <div class="tags">${step.tags.filter((t) => TAG_LABEL[t]).map((t) => `<span class="tag ${t}">${TAG_LABEL[t]}</span>`).join('')}${locked ? '<span class="tag ngplus">Bloqueado: NG</span>' : ''}</div>
          <p>${esc(step.d)}</p>
          ${warnings.map((w) => `<div class="alert static ${w.kind}">${esc(w.text)}</div>`).join('')}
          <p class="meta">${srcA(step.src)}${step.link ? ` · <a href="${esc(step.link)}">Abrir aba relacionada</a>` : ''}${step.map ? ` · <a href="#atlas/${esc(step.map)}">Abrir mapa</a>` : ''}</p>
        </li>`).join('')}
    </ol>`;

  el.querySelectorAll('[data-pt]').forEach((b) => b.addEventListener('click', () => store.update((st) => { st.ui.pt = b.dataset.pt; })));
  el.querySelectorAll('input[data-id]').forEach((i) => i.addEventListener('change', () => store.update((st) => {
    if (i.checked) st.done[i.dataset.id] = true; else delete st.done[i.dataset.id];
  })));
}
