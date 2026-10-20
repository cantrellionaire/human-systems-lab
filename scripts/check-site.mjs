import {readFileSync, existsSync} from 'node:fs';
import {Script} from 'node:vm';
import assert from 'node:assert/strict';
const root = new URL('../website/', import.meta.url);
const read = name => readFileSync(new URL(name, root), 'utf8');
const html = read('index.html');
const manifest = JSON.parse(read('manifest.webmanifest'));
for (const {src} of manifest.icons) assert(existsSync(new URL(src, root)), `Missing icon ${src}`);
for (const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (!/^(?:https?:|data:|mailto:)/.test(m[1])) assert(existsSync(new URL(m[1], root)), `Missing asset ${m[1]}`);
}
for (const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new Script(m[1]);
new Script(read('sw.js'));
assert(html.includes('id="hslFrame"'));
assert(html.replaceAll('&amp;', '&').includes('AKfycbx9LgOYRwNARk8RnTq2HpjJsvsCc1jVIx18eDUMV8aSddozHoDYcdX26ODqK1Ub0wkUAA/exec?course=LC&offering=LC-1100&fx=cinematic'));
assert(html.includes('border-radius:50%; overflow:hidden;'));
assert(html.includes('prefers-reduced-motion'));
console.log('Website check passed: local assets, manifest, script syntax, Hub destination, circular loader and reduced motion.');
