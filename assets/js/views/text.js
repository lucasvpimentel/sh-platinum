import { EGGS, UNVERIFIED, DIFFS, CORRECTIONS } from '../data/extras.js';
import { SOURCES } from '../data/sources.js';
import { esc, srcA } from '../util.js';

const BADGE = { ok: ['Confirmado', 'ending'], rep: ['Reportado pela imprensa', 'trophy'], unv: ['Não confirmado', 'missable'] };

export const eggs = {
  render(el) {
    el.innerHTML = `
      <h2>Segredos e curiosidades</h2>
      <p class="muted">Cada item mostra o grau de confirmação. Os spoilers estão selados.</p>
      ${EGGS.map((e) => {
        const [label, cls] = BADGE[e.status];
        const links = [e.src ? srcA(e.src) : '', ...(e.links || []).map(([n, u]) => `<a class="src" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(n)}</a>`)].filter(Boolean).join(' · ');
        return `<article class="card"><h4 class="ptitle">${esc(e.t)} <span class="tag ${cls}">${label}</span></h4>
          <details class="seal"><summary>Arquivo selado: revelar</summary><div class="sealed"><p>${esc(e.d)}</p></div></details>
          <p class="meta">${links}</p></article>`;
      }).join('')}
      <h3 class="sec">Alegações não confirmadas</h3>
      <p class="muted">Estavam no roteiro inicial do projeto, mas não encontrei em nenhuma fonte consultada. Trate como rumor até conferir.</p>
      <ul class="avoid">${UNVERIFIED.map((u) => `<li>${esc(u)}</li>`).join('')}</ul>`;
  }
};

export const diffs = {
  render(el) {
    el.innerHTML = `
      <h2>Original (2001) vs Remake (2024)</h2>
      <p class="muted">Itens marcados como "Não confirmado" vêm do roteiro inicial e não foram validados (a IGN não abriu a partir daqui). Confira em ${srcA('ignDiff')}.</p>
      <div class="diffs">${DIFFS.map((d) => `<article class="card diff">
        <h4 class="ptitle">${esc(d.t)} <span class="tag ${d.ok ? 'ending' : 'missable'}">${d.ok ? 'Confirmado' : 'Não confirmado'}</span></h4>
        <div class="cols"><div><h5>2001</h5><p>${esc(d.old)}</p></div><div><h5>2024</h5><p>${esc(d.neu)}</p></div></div>
        ${d.src ? `<p class="meta">${srcA(d.src)}</p>` : ''}</article>`).join('')}</div>`;
  }
};

export const fontes = {
  render(el) {
    el.innerHTML = `
      <h2>Fontes e notas de verificação</h2>
      <h3 class="sec">Fontes canônicas</h3>
      <ul class="srclist">${Object.values(SOURCES).map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a></li>`).join('')}</ul>
      <h3 class="sec">Onde este app diverge do roteiro inicial</h3>
      <div class="table-wrap"><table><thead><tr><th>Assunto</th><th>O que as fontes dizem</th></tr></thead>
        <tbody>${CORRECTIONS.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</tbody></table></div>
      <p class="muted">Projeto de fã, sem vínculo com Konami ou Bloober Team. Dados resumidos com links para as fontes originais.</p>`;
  }
};
