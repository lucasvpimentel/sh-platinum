import { createStore } from './state.js';
import { CONFIG_FIELDS } from './config.js';
import { esc } from './util.js';
import * as route from './views/route.js';

const store = createStore();

// Registro de abas. Fases seguintes adicionam views aqui.
const VIEWS = [
  { id: 'rota', label: 'Rota', view: route },
  { id: 'finais', label: 'Finais' },
  { id: 'puzzles', label: 'Puzzles' },
  { id: 'coletaveis', label: 'Coletáveis' },
  { id: 'atlas', label: 'Atlas' },
  { id: 'bestiario', label: 'Bestiário' },
  { id: 'segredos', label: 'Segredos' },
  { id: 'diferencas', label: 'Original vs Remake' },
  { id: 'fontes', label: 'Fontes' }
];

const $ = (sel) => document.querySelector(sel);
const currentId = () => (VIEWS.find((v) => v.id === location.hash.slice(1)) || VIEWS[0]).id;

function renderNav() {
  const id = currentId();
  $('#nav').innerHTML = VIEWS.map((v) => `<a href="#${v.id}" ${v.id === id ? 'aria-current="page"' : ''}>${esc(v.label)}</a>`).join('');
}

function renderConfig() {
  const cfg = store.get().cfg;
  $('#config').innerHTML = CONFIG_FIELDS.map((f) => `
    <fieldset class="seg">
      <legend>${esc(f.label)}</legend>
      ${f.opts.map(([val, label]) => `<label><input type="radio" name="${f.key}" value="${val}" ${cfg[f.key] === val ? 'checked' : ''}><span>${esc(label)}</span></label>`).join('')}
    </fieldset>`).join('');
  $('#config').querySelectorAll('input').forEach((i) => i.addEventListener('change', () => store.update((st) => { st.cfg[i.name] = i.value; })));
}

function renderView() {
  const main = $('#view');
  const item = VIEWS.find((v) => v.id === currentId());
  // Preserva o foco entre re-renderizações (acessibilidade por teclado).
  const a = document.activeElement;
  const focusSel = a && main.contains(a) ? (a.dataset.id ? `[data-id="${CSS.escape(a.dataset.id)}"]` : a.dataset.pt ? `[data-pt="${a.dataset.pt}"]` : null) : null;
  if (item.view) item.view.render(main, { store });
  else main.innerHTML = `<h2>${esc(item.label)}</h2><div class="card"><p class="muted">Esta seção será liberada em uma fase posterior.</p></div>`;
  if (focusSel) main.querySelector(focusSel)?.focus();
}

function applyUi() {
  document.body.classList.toggle('grain', store.get().ui.grain);
  $('#grain').checked = store.get().ui.grain;
}

function wireFooter() {
  $('#grain').addEventListener('change', (e) => store.update((st) => { st.ui.grain = e.target.checked; }));
  $('#export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([store.exportJSON()], { type: 'application/json' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'sh2r_platinum_v1.json' });
    a.click();
    URL.revokeObjectURL(url);
  });
  $('#import').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const ok = store.importJSON(await file.text());
    $('#status').textContent = ok ? 'Progresso importado.' : 'Arquivo inválido: nada foi alterado.';
    e.target.value = '';
  });
  $('#reset').addEventListener('click', () => {
    if (confirm('Apagar todo o progresso e filtros salvos neste navegador?')) { store.reset(); $('#status').textContent = 'Progresso apagado.'; }
  });
}

// Lanterna que segue o ponteiro (só em dispositivos com mouse, sem reduced-motion).
function wireFlashlight() {
  if (!matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches) return;
  addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
  }, { passive: true });
  document.body.classList.add('flashlight');
}

store.subscribe(() => { renderConfig(); renderView(); applyUi(); });
addEventListener('hashchange', () => { renderNav(); renderView(); scrollTo(0, 0); });

renderNav(); renderConfig(); renderView(); applyUi(); wireFooter(); wireFlashlight();
