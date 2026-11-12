import { ENDINGS, SAVE_TIPS } from '../data/endings.js';
import { esc, srcA } from '../util.js';

const cid = (e, i) => `end-${e.id}-${i}`;

export function render(el, { store }) {
  const s = store.get();
  const card = (e) => {
    const done = e.do.filter((_, i) => s.end[cid(e, i)]).length;
    const locked = e.type === 'ngplus' && s.cfg.cycle === 'ng';
    return `
    <article class="card ending${locked ? ' locked' : ''}">
      <header class="end-head">
        <h3>${esc(e.name)}</h3>
        <span class="tag ${e.type === 'ngplus' ? 'ngplus' : 'ending'}">${e.type === 'ngplus' ? 'NG+' : 'Clássico'}</span>
        <span class="tag trophy">${esc(e.trophy)}</span>
      </header>
      <p>${esc(e.summary)}</p>
      ${locked ? '<div class="note">Disponível só em NG+. Você pode marcar os itens para planejar.</div>' : ''}
      <p class="muted">${done} / ${e.do.length} feitos</p>
      <ul class="checks">
        ${e.do.map((t, i) => `<li><label class="check"><input type="checkbox" data-end="${cid(e, i)}" ${s.end[cid(e, i)] ? 'checked' : ''}><span class="box" aria-hidden="true"></span><span>${esc(t)}</span></label></li>`).join('')}
      </ul>
      ${e.avoid.length ? `<h4>Evite</h4><ul class="avoid">${e.avoid.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
      ${e.note ? `<div class="alert static">${esc(e.note)}</div>` : ''}
      <p class="meta">${srcA(e.src)}</p>
    </article>`;
  };

  el.innerHTML = `
    <h2>Os 8 finais</h2>
    <p class="muted">Três finais clássicos por pontuação, cinco de NG+ por itens. Marque o que já fez; o progresso é salvo no navegador.</p>
    <div class="note"><strong>Pontos de save sugeridos</strong><ul>${SAVE_TIPS.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>
    <h3 class="sec">Finais clássicos</h3>
    ${ENDINGS.filter((e) => e.type === 'classic').map(card).join('')}
    <h3 class="sec">Finais de Novo Jogo+</h3>
    ${ENDINGS.filter((e) => e.type === 'ngplus').map(card).join('')}`;

  el.querySelectorAll('input[data-end]').forEach((i) => i.addEventListener('change', () => store.update((st) => {
    if (i.checked) st.end[i.dataset.end] = true; else delete st.end[i.dataset.end];
  })));
}
