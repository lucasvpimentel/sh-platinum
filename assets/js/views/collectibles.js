import { MEMOS, PHOTOS, GLIMPSES, CATEGORIES, CIPHER, colKey } from '../data/collectibles.js';
import { esc, srcA } from '../util.js';

// Filtro de UI só em memória (não vale persistir).
const ui = { cat: 'all', missing: false, q: '' };

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function render(el, { store }) {
  const s = store.get();
  const have = (cat, n) => Boolean(s.col[colKey(cat, n)]);
  const show = (cat) => ui.cat === 'all' || ui.cat === cat;
  const match = (cat, n, text) => (!ui.missing || !have(cat, n)) && (!ui.q || norm(text).includes(norm(ui.q)));
  const chk = (cat, n, label) => `<label class="check"><input type="checkbox" data-col="${colKey(cat, n)}" ${have(cat, n) ? 'checked' : ''}><span class="box" aria-hidden="true"></span><span>${label}</span></label>`;

  const count = (cat, total) => Array.from({ length: total }, (_, i) => have(cat, i + 1)).filter(Boolean).length;
  const summary = Object.entries(CATEGORIES).map(([k, c]) => {
    const d = count(k, c.total);
    return `<div class="card stat${d === c.total ? ' full' : ''}"><strong>${d} / ${c.total}</strong><span>${esc(c.label)}</span><small>Troféu ${esc(c.trophy)}</small></div>`;
  }).join('');

  const memos = MEMOS.map((m, i) => ({ ...m, n: i + 1 })).filter((m) => match('memos', m.n, `${m.name} ${m.loc}`))
    .map((m) => `<li class="card item">${chk('memos', m.n, `<b>#${m.n}</b> ${esc(m.name)}`)}<p class="muted">${m.loc ? esc(m.loc) : 'Local não especificado na fonte.'}</p></li>`).join('');

  const photos = PHOTOS.filter((p) => match('fotos', p.n, `${p.cap} ${p.loc}`))
    .map((p) => `<li class="polaroid${have('fotos', p.n) ? ' got' : ''}">
        <div class="pic" aria-hidden="true"><span>${p.n}</span></div>
        <div class="cap">${chk('fotos', p.n, esc(p.cap))}</div>
        <p class="loc">${esc(p.loc)}</p></li>`).join('');

  const glimpses = GLIMPSES.filter((g) => match('vislumbres', g.n, `${g.name} ${g.desc}`))
    .map((g) => `<li class="card item">${chk('vislumbres', g.n, `<b>#${g.n}</b> ${esc(g.name)}`)}<p class="muted">${esc(g.desc)}</p></li>`).join('');

  const section = (cat, html, extra = '') => show(cat) ? `
    <h3 class="sec">${esc(CATEGORIES[cat].label)} <small>${count(cat, CATEGORIES[cat].total)}/${CATEGORIES[cat].total}</small></h3>
    <p class="meta">${srcA(CATEGORIES[cat].src)} · Troféu ${esc(CATEGORIES[cat].trophy)}: tudo numa única jogada.</p>
    ${extra}${html ? `<ul class="${cat === 'fotos' ? 'polaroids' : 'list'}">${html}</ul>` : '<p class="muted">Nada para mostrar com esse filtro.</p>'}` : '';

  const cipher = `<details class="seal"><summary>Arquivo selado: mensagem escondida nas fotos</summary><div class="sealed">
    <p>Cada foto tem um número no verso. Em ordem numérica, cada uma dá uma letra, e as 26 formam: <b class="answer">${esc(CIPHER)}</b></p>
    <p class="muted">Decodificação creditada, na página de origem, a Dale Robinson (Reddit).</p></div></details>`;

  el.innerHTML = `
    <h2>Coletáveis</h2>
    <div class="stats">${summary}</div>
    <div class="toolbar">
      <div class="seg" role="group" aria-label="Categoria">
        ${[['all', 'Todos'], ...Object.entries(CATEGORIES).map(([k, c]) => [k, c.label])].map(([k, l]) => `<button type="button" data-cat="${k}" aria-pressed="${ui.cat === k}" ${ui.cat === k ? 'aria-selected="true"' : ''}>${esc(l)}</button>`).join('')}
      </div>
      <label class="inline"><input type="checkbox" id="missing" ${ui.missing ? 'checked' : ''}> Só os que faltam</label>
      <input type="search" id="q" placeholder="Buscar por nome ou local" value="${esc(ui.q)}" aria-label="Buscar">
    </div>
    ${section('memos', memos)}${section('fotos', photos, cipher)}${section('vislumbres', glimpses)}`;

  el.querySelectorAll('[data-cat]').forEach((b) => b.addEventListener('click', () => { ui.cat = b.dataset.cat; render(el, { store }); }));
  el.querySelector('#missing').addEventListener('change', (e) => { ui.missing = e.target.checked; render(el, { store }); });
  const q = el.querySelector('#q');
  q.addEventListener('input', () => { ui.q = q.value; render(el, { store }); const n = el.querySelector('#q'); n.focus(); n.setSelectionRange(n.value.length, n.value.length); });
  el.querySelectorAll('input[data-col]').forEach((i) => i.addEventListener('change', () => store.update((st) => {
    if (i.checked) st.col[i.dataset.col] = true; else delete st.col[i.dataset.col];
  })));
}
