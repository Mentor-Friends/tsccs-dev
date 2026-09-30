// Section-5 symmetry: every sendMessage('<type>', ...) the main thread emits must
// have a handler key in the service-worker action maps (or the SW's own switch).
// Usage: node docs/developer-report/07_run_artifacts/sw_symmetry.mjs  (from repo root)
import fs from "fs"; import path from "path";
const root = process.cwd();
function walk(d, out = []) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f);
  if (fs.statSync(p).isDirectory()) walk(p, out); else if (p.endsWith(".ts")) out.push(p); } return out; }
const files = walk(path.join(root, "src"));
const strip = s => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");
const sent = new Map();
for (const f of files) { const s = strip(fs.readFileSync(f, "utf8"));
  for (const m of s.matchAll(/sendMessage\(\s*['"`]([A-Za-z0-9_]+)['"`]/g)) {
    if (!sent.has(m[1])) sent.set(m[1], new Set()); sent.get(m[1]).add(path.relative(root, f)); } }
const handled = new Set();
for (const f of walk(path.join(root, "src/ServiceWorker"))) { const s = strip(fs.readFileSync(f, "utf8"));
  for (const m of s.matchAll(/^\s{2,4}([A-Za-z0-9_]+)\s*:\s*async/gm)) handled.add(m[1]);
  for (const m of s.matchAll(/type\s*={2,3}\s*['"`]([A-Za-z0-9_]+)['"`]/g)) handled.add(m[1]);
  for (const m of s.matchAll(/case\s+['"`]([A-Za-z0-9_]+)['"`]/g)) handled.add(m[1]); }
const missing = [...sent.keys()].filter(t => !handled.has(t)).sort();
const unused = [...handled].filter(t => !sent.has(t)).sort();
console.log(`emitted types: ${sent.size}, handler keys: ${handled.size}`);
console.log(`EMITTED WITH NO SW HANDLER (${missing.length}):`);
for (const t of missing) console.log(`  ${t}  <- ${[...sent.get(t)].join(", ")}`);
console.log(`SW HANDLERS NEVER EMITTED BY sendMessage literal (${unused.length}): ${unused.join(", ")}`);
process.exitCode = missing.length ? 1 : 0;
