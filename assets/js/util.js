const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESC[c]);

import { SOURCES } from './data/sources.js';
export const srcA = (key) => {
  const s = SOURCES[key];
  return s ? `<a class="src" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a>` : '';
};
