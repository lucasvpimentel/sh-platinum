import { MONSTERS, BOSSES, WEAPONS, CHARACTERS } from '../data/bestiary.js';
import { esc, srcA } from '../util.js';

export function render(el, { store }) {
  const cfg = store.get().cfg;
  el.innerHTML = `
    <h2>Bestiário, chefes e armas</h2>
    ${cfg.weapons === 'melee' ? '<div class="alert" role="alert">Só corpo a corpo: use tábua, cano e a motosserra (NG+). Táticas com arma de fogo abaixo valem só para outras runs.</div>' : ''}
    <h3 class="sec">Monstros</h3>
    ${MONSTERS.map((m) => `<article class="card"><h4 class="ptitle">${esc(m.name)}</h4><p>${esc(m.d)}</p><p class="muted">${esc(m.tip)}</p></article>`).join('')}
    <p class="meta">${srcA('shmMonsters')}</p>
    <h3 class="sec">Chefes</h3>
    ${BOSSES.map((b) => `<article class="card"><h4 class="ptitle">${esc(b.name)} <small class="muted">${esc(b.where)}</small></h4>
      <details class="seal"><summary>Arquivo selado: táticas</summary><div class="sealed"><ul>${b.tactics.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div></details></article>`).join('')}
    <p class="meta">${srcA('shmBosses')}</p>
    <h3 class="sec">Armas</h3>
    ${WEAPONS.map((w) => `<article class="card${cfg.weapons === 'melee' && !w.melee ? ' locked' : ''}"><h4 class="ptitle">${esc(w.name)} <span class="tag ${w.melee ? 'ending' : 'missable'}">${w.melee ? 'Corpo a corpo' : 'Arma de fogo'}</span></h4><p>${esc(w.where)}</p></article>`).join('')}
    <p class="meta">${srcA('shmWeapons')}</p>
    <h3 class="sec">Personagens</h3>
    <ul class="list">${CHARACTERS.map((c) => `<li class="card item"><b>${esc(c.name)}</b><p class="muted" style="margin-left:0">${esc(c.d)}</p></li>`).join('')}</ul>
    <p class="meta">${srcA('shmChars')}</p>`;
}
