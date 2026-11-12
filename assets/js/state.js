// Estado único + persistência versionada em localStorage.
import { CONFIG_FIELDS, defaultCfg, validValues } from './config.js';

export const STORAGE_KEY = 'sh2r_platinum_v1';
export const SCHEMA_VERSION = 1;

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);
// Mantém só chaves string com valor true (mapas de checkbox).
const boolMap = (v) => (isObj(v) ? Object.fromEntries(Object.entries(v).filter(([, x]) => x === true)) : {});
// Mapas de dicas abertas / valores curtos de texto.
const strMap = (v) => (isObj(v) ? Object.fromEntries(Object.entries(v).filter(([, x]) => typeof x === 'string').map(([k, x]) => [k, x.slice(0, 40)])) : {});

export const defaultState = () => ({
  v: SCHEMA_VERSION,
  cfg: defaultCfg(),
  done: {},   // etapas da rota
  end: {},    // checklist dos finais
  col: {},    // coletáveis (memos, fotos, vislumbres)
  ui: { grain: true, pt: null, sel: {} }
});

// Valida qualquer objeto vindo do storage ou de importação; nunca lança.
export function sanitize(raw) {
  const s = defaultState();
  if (!isObj(raw)) return s;
  if (isObj(raw.cfg)) {
    for (const f of CONFIG_FIELDS) {
      if (validValues(f.key).includes(raw.cfg[f.key])) s.cfg[f.key] = raw.cfg[f.key];
    }
  }
  s.done = boolMap(raw.done);
  s.end = boolMap(raw.end);
  s.col = boolMap(raw.col);
  if (isObj(raw.ui)) {
    s.ui.grain = raw.ui.grain !== false;
    s.ui.pt = raw.ui.pt === 'pt1' || raw.ui.pt === 'pt2' ? raw.ui.pt : null;
    s.ui.sel = strMap(raw.ui.sel);
  }
  return s;
}

function readStorage() {
  try {
    const txt = localStorage.getItem(STORAGE_KEY);
    return txt ? JSON.parse(txt) : null;
  } catch { return null; }
}

function writeStorage(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); return true; } catch { return false; }
}

export function createStore() {
  let state = sanitize(readStorage());
  const subs = new Set();
  return {
    get: () => state,
    // update recebe uma função que muta uma cópia; salva e notifica.
    update(fn) {
      const next = structuredClone(state);
      fn(next);
      state = sanitize(next);
      writeStorage(state);
      subs.forEach((cb) => cb(state));
    },
    subscribe(cb) { subs.add(cb); return () => subs.delete(cb); },
    exportJSON: () => JSON.stringify(state, null, 2),
    importJSON(txt) {
      let parsed;
      try { parsed = JSON.parse(txt); } catch { return false; }
      if (!isObj(parsed) || parsed.v !== SCHEMA_VERSION) return false;
      state = sanitize(parsed);
      writeStorage(state);
      subs.forEach((cb) => cb(state));
      return true;
    },
    reset() {
      state = defaultState();
      writeStorage(state);
      subs.forEach((cb) => cb(state));
    }
  };
}
