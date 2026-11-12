import { AREAS, MAP_PAGE, findArea, mapUrl } from '../data/atlas.js';
import { esc } from '../util.js';

// Seleção só em memória; o hash #atlas/<area> escolhe a área (usado pelos links da rota).
const sel = { area: AREAS[0].id, map: 0, spoilers: false };
let onResize = null;

export function render(el, { store, param }) {
  if (param && findArea(param)) { sel.area = param; sel.map = 0; }
  const area = findArea(sel.area);
  const maps = area.maps.filter((m) => sel.spoilers || !m.spoiler);
  if (sel.map >= maps.length) sel.map = 0;
  const hasSpoiler = area.maps.some((m) => m.spoiler);
  const cur = maps[sel.map];

  el.innerHTML = `
    <h2>Atlas de mapas</h2>
    <p class="muted">Mapas do <a href="${MAP_PAGE}" target="_blank" rel="noopener noreferrer">Silent Hill Memories</a>, exibidos com crédito. Arraste para mover, role ou use +/− para zoom.</p>
    <div class="seg" role="group" aria-label="Área">
      ${AREAS.map((a) => `<button type="button" data-area="${a.id}" aria-selected="${a.id === sel.area}">${esc(a.name)}</button>`).join('')}
    </div>
    ${hasSpoiler ? `<label class="inline"><input type="checkbox" id="spoil" ${sel.spoilers ? 'checked' : ''}> Mostrar mapas completos (spoilers e respostas de puzzles)</label>` : ''}
    <div class="seg" role="group" aria-label="Mapa">
      ${maps.map((m, i) => `<button type="button" data-map="${i}" aria-selected="${i === sel.map}">${esc(m.label)}</button>`).join('') || '<span class="muted">Sem mapas sem spoiler para esta área: ative os mapas completos.</span>'}
    </div>
    ${cur ? `
    <div class="viewer" id="viewer" tabindex="0" aria-label="Mapa ${esc(cur.label)} de ${esc(area.name)}">
      <div class="vtools">
        <button type="button" data-z="in" aria-label="Aumentar zoom">+</button>
        <button type="button" data-z="out" aria-label="Diminuir zoom">−</button>
        <button type="button" data-z="reset" aria-label="Ajustar à tela">Ajustar</button>
        <button type="button" data-z="full" aria-label="Tela cheia">Tela cheia</button>
      </div>
      <img id="mapimg" src="${esc(mapUrl(cur.file))}" alt="Mapa ${esc(cur.label)}, ${esc(area.name)}" draggable="false" referrerpolicy="no-referrer">
      <p class="vfail" hidden>Não foi possível carregar a imagem. <a href="${MAP_PAGE}" target="_blank" rel="noopener noreferrer">Abrir no Silent Hill Memories</a>.</p>
    </div>` : ''}`;

  el.querySelectorAll('[data-area]').forEach((b) => b.addEventListener('click', () => { sel.area = b.dataset.area; sel.map = 0; render(el, { store }); }));
  el.querySelectorAll('[data-map]').forEach((b) => b.addEventListener('click', () => { sel.map = Number(b.dataset.map); render(el, { store }); }));
  el.querySelector('#spoil')?.addEventListener('change', (e) => { sel.spoilers = e.target.checked; sel.map = 0; render(el, { store }); });
  if (cur) wireViewer(el);
}

// Pan e zoom com mouse, toque (pinça) e teclado.
function wireViewer(el) {
  const box = el.querySelector('#viewer');
  const img = el.querySelector('#mapimg');
  const pts = new Map();
  let k = 1, x = 0, y = 0, pinch = 0;

  const apply = () => { img.style.transform = `translate(${x}px, ${y}px) scale(${k})`; };
  const fit = () => {
    const r = box.getBoundingClientRect();
    k = Math.min(r.width / img.naturalWidth, r.height / img.naturalHeight, 1) || 1;
    x = (r.width - img.naturalWidth * k) / 2; y = (r.height - img.naturalHeight * k) / 2; apply();
  };
  const zoomAt = (f, cx, cy) => {
    const nk = Math.min(Math.max(k * f, 0.1), 6);
    x = cx - ((cx - x) / k) * nk; y = cy - ((cy - y) / k) * nk; k = nk; apply();
  };
  const center = () => { const r = box.getBoundingClientRect(); return [r.width / 2, r.height / 2]; };

  img.addEventListener('load', fit);
  if (img.complete && img.naturalWidth) fit();
  img.addEventListener('error', () => { img.hidden = true; box.querySelector('.vfail').hidden = false; });
  if (onResize) removeEventListener('resize', onResize);
  onResize = fit;
  addEventListener('resize', onResize, { passive: true });

  box.addEventListener('wheel', (e) => { e.preventDefault(); const r = box.getBoundingClientRect(); zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top); }, { passive: false });
  box.addEventListener('pointerdown', (e) => { if (e.target.closest('.vtools')) return; box.setPointerCapture(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]); box.classList.add('drag'); });
  box.addEventListener('pointermove', (e) => {
    if (!pts.has(e.pointerId)) return;
    const prev = pts.get(e.pointerId);
    pts.set(e.pointerId, [e.clientX, e.clientY]);
    if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      if (pinch) { const r = box.getBoundingClientRect(); zoomAt(d / pinch, (a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top); }
      pinch = d;
    } else { x += e.clientX - prev[0]; y += e.clientY - prev[1]; apply(); }
  });
  const up = (e) => { pts.delete(e.pointerId); pinch = 0; if (!pts.size) box.classList.remove('drag'); };
  box.addEventListener('pointerup', up); box.addEventListener('pointercancel', up);

  box.addEventListener('keydown', (e) => {
    const step = 40, [cx, cy] = center();
    const map = { ArrowLeft: () => { x += step; apply(); }, ArrowRight: () => { x -= step; apply(); }, ArrowUp: () => { y += step; apply(); }, ArrowDown: () => { y -= step; apply(); }, '+': () => zoomAt(1.2, cx, cy), '=': () => zoomAt(1.2, cx, cy), '-': () => zoomAt(1 / 1.2, cx, cy), 0: fit };
    if (map[e.key]) { e.preventDefault(); map[e.key](); }
  });
  box.querySelector('.vtools').addEventListener('click', (e) => {
    const z = e.target.dataset.z; const [cx, cy] = center();
    if (z === 'in') zoomAt(1.25, cx, cy); else if (z === 'out') zoomAt(1 / 1.25, cx, cy); else if (z === 'reset') fit();
    else if (z === 'full') { if (document.fullscreenElement) document.exitFullscreen(); else box.requestFullscreen?.(); }
  });
  document.addEventListener('fullscreenchange', () => setTimeout(fit, 50), { once: true });
}
