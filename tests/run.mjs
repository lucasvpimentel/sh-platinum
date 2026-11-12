// Testes sem dependências: node tests/run.mjs
import assert from 'node:assert/strict';
import { filterRoute, globalAlerts, progress } from '../assets/js/filter.js';
import { ROUTE } from '../assets/js/data/route.js';
import { SOURCES } from '../assets/js/data/sources.js';
import { sanitize, defaultState } from '../assets/js/state.js';
import { defaultCfg } from '../assets/js/config.js';

let n = 0;
const t = (name, fn) => { fn(); n++; console.log('ok  ' + name); };
const cfg = (o = {}) => ({ ...defaultCfg(), ...o });
const all = [...ROUTE.pt1.steps, ...ROUTE.pt2.steps];

t('ids de etapas são únicos', () => assert.equal(new Set(all.map((s) => s.id)).size, all.length));
t('toda etapa cita fonte válida', () => all.forEach((s) => assert.ok(SOURCES[s.src], s.id)));
t('Sem rádio gera aviso nas etapas com radio', () => {
  const w = filterRoute(all, cfg({ radio: 'silent' })).filter((e) => e.warnings.some((x) => x.kind === 'radio'));
  assert.equal(w.length, all.filter((s) => s.radio).length);
  assert.ok(w.length > 0);
  assert.equal(filterRoute(all, cfg()).flatMap((e) => e.warnings).length, 0);
});
t('Só corpo a corpo marca etapas com arma de fogo', () => {
  const w = filterRoute(all, cfg({ weapons: 'melee' })).filter((e) => e.warnings.some((x) => x.kind === 'firearm'));
  assert.equal(w.length, all.filter((s) => s.firearm).length);
  assert.ok(w.length > 0);
});
t('Modo < 10 h oculta etapas secundárias', () => {
  const hidden = filterRoute(all, cfg({ speed: 'fast' })).filter((e) => e.hidden);
  assert.equal(hidden.length, all.filter((s) => s.skipFast).length);
  assert.ok(hidden.length > 0);
});
t('NG bloqueia etapas de NG+; NG+ libera', () => {
  assert.ok(filterRoute(ROUTE.pt2.steps, cfg()).every((e) => e.locked));
  assert.ok(filterRoute(ROUTE.pt2.steps, cfg({ cycle: 'ngplus' })).every((e) => !e.locked));
});
t('progresso ignora ocultas e bloqueadas, mas não perde marcações', () => {
  const done = { 'p1-setup': true, 'p1-lake': true };
  const e = filterRoute(ROUTE.pt1.steps, cfg({ speed: 'fast' }));
  const p = progress(e, done);
  assert.equal(p.done, 1);               // p1-lake está oculta no modo rápido
  assert.equal(done['p1-lake'], true);   // marcação preservada
  assert.equal(progress([], {}).pct, 0);
});
t('alertas globais refletem a run', () => {
  assert.equal(globalAlerts(cfg()).length, 0);
  assert.equal(globalAlerts(cfg({ radio: 'silent', weapons: 'melee', speed: 'fast', cycle: 'ngplus' })).length, 4);
});
t('sanitize: lixo vira padrão e valores válidos persistem', () => {
  assert.deepEqual(sanitize(null), defaultState());
  assert.deepEqual(sanitize('x'), defaultState());
  const s = sanitize({ cfg: { combat: 'hard', radio: 'bogus' }, done: { a: true, b: 'no' }, ui: { pt: 'pt9' } });
  assert.equal(s.cfg.combat, 'hard');
  assert.equal(s.cfg.radio, 'normal');
  assert.deepEqual(s.done, { a: true });
  assert.equal(s.ui.pt, null);
});

import { ENDINGS } from '../assets/js/data/endings.js';
t('8 finais, 3 clássicos + 5 NG+, fontes válidas', () => {
  assert.equal(ENDINGS.length, 8);
  assert.equal(ENDINGS.filter((e) => e.type === 'classic').length, 3);
  assert.equal(new Set(ENDINGS.map((e) => e.id)).size, 8);
  ENDINGS.forEach((e) => { assert.ok(SOURCES[e.src]); assert.ok(e.do.length > 0); });
});

import { PUZZLES, solutionFor } from '../assets/js/data/puzzles.js';
t('puzzles: ids únicos, fontes válidas, dificuldade muda a resposta', () => {
  assert.equal(new Set(PUZZLES.map((p) => p.id)).size, PUZZLES.length);
  PUZZLES.forEach((p) => p.srcs.forEach((k) => assert.ok(SOURCES[k], p.id)));
  const grand = PUZZLES.find((p) => p.id === 'grand');
  assert.equal(solutionFor(grand, 'light').text, '4442');
  assert.equal(solutionFor(grand, 'hard').text, '4446');
  const music = PUZZLES.find((p) => p.id === 'musicbox');
  assert.equal(solutionFor(music, 'hard').kind, 'missing');   // sem dado: não inventa
  assert.equal(solutionFor(PUZZLES.find((p) => p.id === 'chained'), 'hard').kind, 'any');
  assert.equal(solutionFor(PUZZLES.find((p) => p.id === 'scales'), 'light').kind, 'steps');
});

import { MEMOS, PHOTOS, GLIMPSES, CATEGORIES, colKey } from '../assets/js/data/collectibles.js';
t('coletáveis: 68 memos, 26 fotos, 26 vislumbres, chaves únicas', () => {
  assert.equal(MEMOS.length, 68);
  assert.equal(PHOTOS.length, 26);
  assert.equal(GLIMPSES.length, 26);
  const keys = Object.entries({ memos: 68, fotos: 26, vislumbres: 26 }).flatMap(([c, tot]) => Array.from({ length: tot }, (_, i) => colKey(c, i + 1)));
  assert.equal(new Set(keys).size, 120);
  Object.values(CATEGORIES).forEach((c) => assert.ok(SOURCES[c.src]));
});

console.log(`\n${n} testes passaram`);
