#!/usr/bin/env python3
"""Generates the developer-report HTML documents for tsccs-dev (mftsccs-browser).
Run from the repo root: python3 docs/developer-report/07_run_artifacts/gen_report.py"""
import html, os, datetime

OUT = "docs/developer-report"
TODAY = "2026-09-30"
PROJECT = "tsccs-dev (npm: mftsccs-browser 2.2.48-beta)"
E = html.escape

CSS = """
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
:root{--paper:#f6f3ec;--card:#fffdf8;--ink:#1c1815;--muted:#6b625a;--line:#e4ddcf;--heart:#b9711a;--build:#2c7c77;--proto:#6266a8;--bad:#a8322d;--ok:#2f7a3b;--warn:#b9711a;--code:#1f1b18}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--paper:#191613;--card:#221e1a;--ink:#efe8dc;--muted:#a79d90;--line:#3a332c;--code:#0f0d0b}}
:root[data-theme="dark"]{--paper:#191613;--card:#221e1a;--ink:#efe8dc;--muted:#a79d90;--line:#3a332c;--code:#0f0d0b}
*{box-sizing:border-box}html,body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.6 Inter,system-ui,sans-serif}
.wrap{display:grid;grid-template-columns:230px minmax(0,1fr);gap:32px;max-width:1180px;margin:0 auto;padding:32px 16px}
@media(max-width:820px){.wrap{grid-template-columns:1fr}.toc{position:static!important}}
.toc{position:sticky;top:16px;align-self:start;font:12px/1.5 'IBM Plex Mono',monospace}
.toc a{display:block;color:var(--muted);text-decoration:none;padding:3px 0}.toc a:hover{color:var(--heart)}
h1,h2,h3{font-family:Fraunces,Georgia,serif;line-height:1.2}h1{font-size:34px;margin:.2em 0 .4em}h2{font-size:24px;margin-top:1.8em}
.kicker,.eye{font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--heart)}
.eye{color:var(--build);display:block;margin-top:28px}
.card{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--build);border-radius:8px;padding:14px 18px;margin:14px 0}
.card.h{border-left-color:var(--bad)}.card.m{border-left-color:var(--warn)}.card.l{border-left-color:var(--proto)}.card.i{border-left-color:var(--muted)}
.note{background:color-mix(in srgb,var(--heart) 10%,var(--card));border:1px solid var(--line);border-radius:8px;padding:10px 14px;margin:14px 0}
table{border-collapse:collapse;width:100%;font-size:13.5px;margin:12px 0;display:block;overflow-x:auto}
th,td{border-bottom:1px solid var(--line);padding:7px 9px;text-align:left;vertical-align:top}th{font:500 11px 'IBM Plex Mono',monospace;text-transform:uppercase;color:var(--muted)}
code{font:13px 'IBM Plex Mono',monospace;background:color-mix(in srgb,var(--ink) 7%,transparent);padding:1px 4px;border-radius:4px;word-break:break-word}
pre{background:var(--code);color:#eee6d8;border-radius:8px;padding:14px;overflow-x:auto;font:12.5px/1.5 'IBM Plex Mono',monospace}
pre .fix{color:#7fd08a}pre .old{color:#e58f86;text-decoration:line-through}
.pill{display:inline-block;font:500 11px 'IBM Plex Mono',monospace;padding:2px 8px;border-radius:99px;border:1px solid var(--line);margin:2px}
.s-fixed{background:color-mix(in srgb,var(--ok) 18%,transparent)}.s-flagged{background:color-mix(in srgb,var(--warn) 20%,transparent)}.s-decision{background:color-mix(in srgb,var(--proto) 20%,transparent)}
.sev-high,.sev-critical{color:var(--bad);font-weight:600}.sev-medium{color:var(--warn);font-weight:600}.sev-low{color:var(--proto)}.sev-info{color:var(--muted)}
footer{margin-top:40px;border-top:1px solid var(--line);padding-top:12px}
a{color:var(--build)}
svg text{font-family:Inter,sans-serif}
"""

def page(title, kicker, sections, lead=""):
    toc = "".join(f'<a href="#{sid}">{E(h)}</a>' for sid, h, _ in sections)
    body = "".join(f'<section id="{sid}"><span class="eye">{E(h)}</span><h2>{E(h)}</h2>{c}</section>' for sid, h, c in sections)
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{E(title)}</title><style>{CSS}</style></head><body><div class="wrap"><nav class="toc"><div class="kicker">{E(kicker)}</div>{toc}
<a href="developer_report.html">&larr; index</a></nav><main><div class="kicker">{E(PROJECT)} &middot; {TODAY}</div><h1>{E(title)}</h1>{lead}{body}
<footer><span class="pill">tsccs-dev</span><span class="pill">developer report</span><span class="pill">reusable-test</span><span class="pill">{TODAY}</span></footer></main></div></body></html>"""

# ---------------------------------------------------------------- findings
F = [
 # id, severity, status, title, location, detail, fix
 ("F1","high","fixed","LoginToBackend sent the user's password to the package log server",
  "src/Api/Login.ts:84, src/Middleware/logger.service.ts",
  "LoginToBackend called Logger.logfunction(\"LoginToBackend\", arguments). With init flags.logPackage=true the raw arguments object (email, password, application) is stored as functionParameters, queued in Logger.packageLogsData and POSTed to BaseUrl.PostLogger() (default https://logdev.freeschema.com/api/logger).",
  "Log call now passes [email, \"[REDACTED]\", application]. Outcome test drives LoginToBackend with a sentinel password and asserts it never reaches formatLogData; mutant M1 (restore raw arguments) turns the test red."),
 ("F2","medium","fixed","Explicit bearer-token arguments were logged by package logging",
  "FreeschemaQueryApi, SearchLinkMultipleApi, SearchLinkMultipleAll (all pass `arguments` with a `token` parameter)",
  "Any JWT passed explicitly as the token argument was copied into functionParameters and shipped to the log server.",
  "Logger.logfunction now runs redactLogArguments(): JWT-shaped strings (eyJ...x.y.z) become \"[REDACTED_TOKEN]\"; the arguments-object shape is preserved. Unit test plus mutant M2."),
 ("F3","high","decision","Access + refresh tokens persisted in localStorage under a constant-passphrase key",
  "src/DataStructures/Security/SecureStorage.ts, TokenStorage.ts",
  "saveProfile() encrypts {token, refreshToken, roles, ...} with AES-GCM using a key derived from the hard-coded passphrase \"mftsccs-browser-v1\" and stores it in localStorage \"ccs_profile\". Anyone with script access to the origin (XSS, a malicious widget) can decrypt it; the refresh token gives long-lived account access. Comments said sessionStorage; JSDoc said memory-only.",
  "Not changed (behavioural). Comments/JSDoc corrected to state the real behaviour. Options: keep tokens in memory + HttpOnly refresh cookie issued by the backend; or sessionStorage with a non-extractable per-session CryptoKey kept in IndexedDB; at minimum stop persisting the refresh token."),
 ("F4","medium","decision","Package/app logs are POSTed with the user's bearer token to a separate log host",
  "src/Middleware/logger.service.ts sendPackageLogsToServer / sendApplicationLogsToServer",
  "GetRequestHeader() (Authorization: Bearer ...) is attached to every POST to LOG_SERVER, which defaults to logdev.freeschema.com when parameters.logserver is not passed. Any app turning on logging hands user tokens to that host.",
  "Decide whether the log server needs user auth at all; if yes, make LOG_SERVER mandatory when logging is enabled (no dev-host default)."),
 ("F5","medium","decision","Widget documentation preview renders graph data into innerHTML without escaping (and shows stored API credentials)",
  "src/Widgets/RenderWidgetService.ts ~1385-1550 (openDocumentationPreviewModal)",
  "title, content, method, methodURL, username, password, bearerToken from the_documentation composition are interpolated into innerHTML. A documentation author can inject markup/script into every viewer of that widget's docs; basicAuth/bearer credentials are displayed in clear text.",
  "Not changed: widget docs are author-controlled rich text (CKEditor content) by design. Recommend sanitising content (DOMPurify) and textContent for all scalar fields; never store live credentials in documentation concepts."),
 ("F6","low","fixed","Documentation button handler read widget-id from event.target (latent: null id if the icon receives the click)",
  "src/Widgets/RenderWidgetService.ts:241 and :470",
  "The handler read event.target.getAttribute('widget-id'). The button is almost all <svg>/<path>. The SDK's own injected CSS (ckeditorCSS: '#widget-details button svg {pointer-events:none}', nested under the widget's random class) normally sends the click to the button, which hides the bug. If that CSS is missing (normalizeCSS returns '' on error, or the host overrides it), the click lands on the path and openDocumentationPreviewModal(null) runs. The jsdom harness (07_run_artifacts/doc_button_click.cjs, no CSS) shows old=null, fixed=4242. jsdom does no pointer-events hit-testing, so the with-CSS case was verified by reading only.",
  "Handler reads previewButton.getAttribute('widget-id') from the bound button, so it no longer depends on CSS."),
 ("F7","medium","flagged","Four main-thread message types have no service-worker handler",
  "WidgetBuild.ts (BuildWidgetFromIdForRecent), DeleteConnectionByType.ts (DeleteConnectionByTypeLocal), Local/GetRelationLocal.ts (GetRelationLocal), MakeTheTypeConcept.ts (MakeTheTypeConcept)",
  "sw_symmetry.mjs: 99 emitted types, 97 handler keys, 4 emitted with no handler. In SW mode each call costs a failed round trip + console.error, then falls back to the main thread, whose in-memory concept trees may be empty because the SW owns them (risk: duplicate type concepts from MakeTheTypeConcept, stale relation reads). MakeTheTypeConcept's SW handler is deliberately commented out in createActions.ts.",
  "Decision: add handlers (getActions/deleteActions/createActions) or remove the SW branch in those four callers."),
 ("F8","medium","fixed","package-lock.json out of sync: npm ci failed",
  "package-lock.json",
  "npm ci aborted: Missing estraverse@4.3.0, p-locate@4.1.0; lock still said version 2.2.42-beta.",
  "Lock regenerated with npm install; npm ci-compatible again."),
 ("F9","medium","fixed","README and GETTING_STARTED documented a non-existent init({url, clientUrl, ...}) signature",
  "README.md (5 places), docs/GETTING_STARTED.md (7 places + parameter table)",
  "init() is positional (url, aiurl, accessToken, nodeUrl, enableAi, applicationName, enableSW, flags, parameters, accessControlUrl). Following the docs sets BaseUrl.BASE_URL to an object, so every request goes to \"[object Object]/api/...\". Docs also used sendMessage('getConcept') while the handler key is 'GetConcept'.",
  "All examples rewritten to the positional form; parameter table replaced; message type case corrected."),
 ("F10","low","fixed","terser-webpack-plugin used by both webpack configs but not declared",
  "webpack.config.js, webpack.wico.config.js, package.json",
  "Resolved only via webpack's transitive dependency (hoisting).",
  "Added to devDependencies (^5.6.1)."),
 ("F11","low","fixed","typeof X === undefined comparisons are always false",
  "src/Middleware/logger.service.ts:399,414 ; src/app.ts:293",
  "typeof returns a string, so the service-worker guards never fired; in a worker, localStorage access would throw ReferenceError (the helpers are currently not called).",
  "Compare against the string \"undefined\"."),
 ("F12","low","fixed","Page/widget id concatenated into innerHTML in error messages",
  "src/Widgets/RenderWidgetService.ts renderPage / renderImportedWidget / materializeWidget",
  "Ids are typed number but JS callers can pass URL-derived strings.",
  "Id appended as a text node."),
 ("F13","low","flagged","Signin() and LoginToBackend() behave differently",
  "src/Api/Signin.ts",
  "Signin sets only the access token: it does not persist the profile or refresh token, so auto-refresh and restore-on-reload silently do not work for apps using Signin.",
  "Decide on one login path; make Signin call TokenStorage.saveUserProfile."),
 ("F14","low","flagged","Stale duplicate webpack.config.cjs",
  "webpack.config.cjs",
  "Differs from webpack.config.js (no terser, no dev mode); no script references it. Risk of someone building with the wrong config.",
  "Delete or document."),
 ("F15","low","flagged","Jest worker does not exit cleanly",
  "tests/Mail.test.ts",
  "\"A worker process has failed to exit gracefully\" on every run (open handle/timer).",
  "Run with --detectOpenHandles and clear the timer."),
 ("F16","info","flagged","Development defaults baked into BaseUrl",
  "src/DataStructures/BaseUrl.ts",
  "BASE_URL https://localhost:7053/, NODE_URL/ACCESS_CONTROL_BASE_URL http://localhost:5001, MQTT_URL 192.168.1.249. If init() is not called every request goes to localhost. MQTT is vestigial (publish only, subscriber commented out).",
  "Consider failing loudly when BASE_URL is still the default."),
 ("F17","info","flagged","Widgets execute stored code (new Function / <script>)",
  "src/Widgets/BuilderStatefulWidget.ts, RenderWidgetService.ts",
  "This is how the design works: the trust boundary is the widget registry. Anyone who can publish a widget can run code on every page that renders it, which is why F3 matters.",
  "Make sure registry write access is tightly controlled."),
 ("F18","info","flagged","Dev-only dependency advisories",
  "npm audit",
  "12 advisories (8 high) in devDependencies; npm audit --omit=dev: 0.",
  "npm audit fix in a separate PR."),
]

def sevrow(f):
    return f'<tr><td>{f[0]}</td><td class="sev-{f[1]}">{f[1]}</td><td><span class="pill s-{f[2]}">{f[2]}</span></td><td>{E(f[3])}</td><td><code>{E(f[4])}</code></td></tr>'

def matrix():
    return "<table><tr><th>ID</th><th>Severity</th><th>Status</th><th>Finding</th><th>Location</th></tr>" + "".join(sevrow(f) for f in F) + "</table>"

TESTS = [
 ("npm ci --ignore-scripts","FAIL before fix (lockfile out of sync), fixed by lock regeneration","07_run_artifacts (see F8)"),
 ("npx tsc --noEmit -p .","0 errors (before and after fixes)","07_run_artifacts/tsc.log"),
 ("npx jest (existing suite)","2 suites, 8 tests pass before fixes","-"),
 ("npx jest (with new LoggerRedaction.test.ts)","3 suites, 11 tests pass","07_run_artifacts/jest.log"),
 ("npm run build (webpack main + serviceWorker)","OK, 3 size warnings (548 KiB / 559 KiB bundles)","07_run_artifacts/build.log"),
 ("npm run build:wico (runs metadata generator + build)","OK","07_run_artifacts/build_wico.log"),
 ("Bundle import smoke (node dynamic import of dist/main.bundle.js)","217 exports; init, LoginToBackend, FreeschemaQuery, SchemaQuery, LocalTransaction, GetTheConcept, MakeTheInstanceConceptLocal present","07_run_artifacts/bundle_import_smoke.log"),
 ("npm pack --dry-run","274 files, 499.6 kB; dist bundles + types + postinstall shipped","07_run_artifacts/npm_pack_dryrun.log"),
 ("Mutation: M0 null / M1 login raw arguments / M2 skip redaction","green / red / red (as expected)","07_run_artifacts/mutation.log"),
 ("SW message symmetry sweep","99 emitted, 97 handled, 4 unhandled","07_run_artifacts/sw_symmetry.log"),
 ("jsdom click on documentation button icon","old handler widgetId=null, fixed handler widgetId=4242","07_run_artifacts/doc_button_click.log"),
 ("npm audit","12 dev-only advisories; 0 with --omit=dev","07_run_artifacts/npm_audit_summary.log"),
]
def tests_table():
    return "<table><tr><th>Check</th><th>Result</th><th>Evidence</th></tr>" + "".join(f"<tr><td>{E(a)}</td><td>{E(b)}</td><td><code>{E(c)}</code></td></tr>" for a,b,c in TESTS) + "</table>"

UNVERIFIED = """<div class="note"><b>UNVERIFIED</b> (not run in this container): live calls to a real backend (boomconsole / freeschema), the
service-worker path in a real browser, IndexedDB persistence, the access-control server, MQTT. Every result above comes from
static analysis, the TypeScript compiler, jest in Node, webpack builds, and jsdom.</div>"""

# ---------------------------------------------------------------- part 1
grill = [
 ("Is F1 real, or is logging off by default?", "Logging is off by default (logPackage=false), so the leak needs an opt-in. But the flag is documented as a normal diagnostic switch, and once it is on every login sends the password in clear JSON to a remote host. The outcome test proves the password reached formatLogData before the fix: mutant M1 turns it red."),
 ("Could the redaction break log consumers?", "The functionParameters shape is kept: an arguments object is still serialised as {\"0\":...,\"1\":...}. Only JWT-shaped strings change. Non-JWT secrets (API keys) are NOT caught, so the Login fix is explicit rather than relying on the pattern."),
 ("Why not fix F3 (token in localStorage) now?", "Changing where tokens live changes restore-on-reload for every consuming app and needs a matching backend change (HttpOnly refresh cookie). That is a product decision, so it is flagged, not patched. Only the misleading comments were corrected."),
 ("Is F6 a false positive? Maybe the SVG has pointer-events:none.", "Partly, yes. My first reading said no stylesheet sets it. Checking the surprising result found that ckeditorCSS does set '#widget-details button svg {pointer-events:none}' and is injected, scoped to the widget's class, on both render paths. With that CSS applied, clicks reach the button and the old code works. I downgraded F6 from medium to low (latent). The fix is kept because it removes the dependency on CSS and cannot change behaviour when the CSS is present."),
 ("Do the four unhandled SW message types actually break anything?", "Not visibly. Each caller catches the rejection and falls back to the main thread. The risk is state divergence: in SW mode the main thread's binary trees may be empty. This is marked flagged/decision, not fixed, because adding SW handlers changes where writes run."),
 ("Did the docs rewrite change meaning anywhere?", "The old examples passed options (clientUrl, secureCoreModePath, makeBaseSecure) that init() never read, so no behaviour was lost. One example had real positional flags/accessControlUrl after the object; those were kept in the rewritten call. The first automated pass over-deleted a GETTING_STARTED section (the regex crossed a block boundary); this was caught in the diff, reverted, and redone with a bracket-matching rewrite."),
 ("Did I press every control, or did I read it?", "The SDK draws only three controls of its own: the documentation button and two close buttons, in two render paths. I pressed the documentation button in jsdom. I did not press the close buttons in a harness: they are bound by class via querySelectorAll, which reading confirms but which stays UNVERIFIED by the press rule. Widget-authored controls belong to consuming apps and are out of scope."),
 ("What is the weakest claim here?", "F4 (the log host receives bearer tokens): true by code reading, but whether logdev.freeschema.com is operated by the same party as the backend was not verified. Also, runtime behaviour against a live backend is UNVERIFIED in general."),
 ("Is the lockfile change safe?", "It adds two missing transitive dev packages and terser-webpack-plugin 5.6.1 (dev), and removes two now-unneeded entries. tsc, jest, and both webpack builds were re-run green after it."),
]
p1 = [
 ("summary","What this program is", """<p><b>mftsccs-browser</b> is the browser SDK of the SCCS / FreeSchema stack. It is a TypeScript library, bundled with webpack as an ES module, and it is
what front-end apps and widgets import as <code>mftsccs-browser</code>. It wraps the C# data-fabric REST API (concepts, connections, compositions,
FreeschemaQuery, search, auth, mail, upload, widgets). It keeps an offline-first local graph with negative/ghost ids in IndexedDB, and syncs through
<code>LocalTransaction</code> / <code>LocalSyncData</code>. It can move all of that work into a service worker using a postMessage RPC protocol with
about 97 action types. It also ships a widget runtime (StatefulWidget / BuilderStatefulWidget) and an access-control REST client, and exposes a
<code>./wico</code> autocomplete-metadata entry.</p>"""),
 ("commentary","Commentary", """<p>I set up branch <code>claude/zealous-davinci-suss9p</code> from <code>origin/main</code> (8bd4498). <code>npm ci</code> failed straight away
because the lockfile was out of sync (F8), so I regenerated it. After that the typecheck was clean, the existing 8 jest tests passed, and both
webpack builds succeeded. The built bundle imports in Node and exposes 217 symbols.</p>
<p>The security pass found the most important defect: the package logger records raw <code>arguments</code>, and <code>LoginToBackend</code> passed the
password that way (F1). Search APIs with explicit tokens had the same problem (F2). I fixed both, with an outcome test and two mutants.
Token storage is the larger architectural issue (F3): tokens are persisted "encrypted" with a constant key. That is reported for a decision.</p>
<p>The cross-cutting symmetry sweep over main-thread → service-worker messages found 4 message types with no handler (F7). The control sweep of
the SDK's own UI found that the documentation button handler depends on CSS (pointer-events:none on the icon) to receive the right target (F6, latent). I reproduced the no-CSS case in jsdom and made the handler robust.
The docs sweep found that the published <code>init()</code> examples use a signature that does not exist (F9). I fixed that.</p>"""),
 ("tests","Tests run", tests_table() + UNVERIFIED),
 ("grill","Grill: adversarial self-interview", "".join(f'<div class="card"><b>Q. {E(q)}</b><p>A. {E(a)}</p></div>' for q,a in grill)),
]

# ---------------------------------------------------------------- part 2 page
changed = [
 ("src/Api/Login.ts","F1: log call no longer passes the password."),
 ("src/Middleware/logger.service.ts","F2: redactLogArguments() applied in logfunction; F11: typeof comparisons fixed."),
 ("src/Widgets/RenderWidgetService.ts","F6: documentation button reads widget-id from the bound button (2 sites); F12: ids appended as text nodes (3 sites)."),
 ("src/app.ts","F11: typeof document comparison; F3: JSDoc for updateAccessToken now describes the real token persistence."),
 ("src/DataStructures/Security/TokenStorage.ts","F3: comments corrected (localStorage, constant-passphrase key)."),
 ("src/Metadata/AutocompleteMetadata.ts","Regenerated by scripts/generate-autocomplete-metadata.cjs after the JSDoc change."),
 ("tests/LoggerRedaction.test.ts","New: 3 tests (JWT redaction outcome, arguments-shape preservation, LoginToBackend password outcome)."),
 ("package.json","F10: terser-webpack-plugin added to devDependencies."),
 ("package-lock.json","F8: lock synced with package.json (npm ci works again)."),
 ("README.md","F9: init() examples to positional form; sendMessage('GetConcept')."),
 ("docs/GETTING_STARTED.md","F9: init() examples + parameter table to the real signature; message type case."),
]
p2 = [("files","Changed files", "<p>The fixes are applied in place in the repository; this PR <i>is</i> the fixed source. <a href=\"fixes.patch\">fixes.patch</a> is the full diff against <code>origin/main</code> (source, config, docs, new test).</p><table><tr><th>File</th><th>Why</th></tr>" + "".join(f"<tr><td><code>{E(a)}</code></td><td>{E(b)}</td></tr>" for a,b in changed) + "</table>"),
 ("key","Key hunks", """<pre><span class="old">const logData : any = Logger.logfunction("LoginToBackend", arguments);</span>
const logData : any = Logger.logfunction("LoginToBackend", [email, "[REDACTED]", application]); <span class="fix">// ✔ FIX F1</span>

<span class="old">let myarguments: any = args;</span>
let myarguments: any = redactLogArguments(args); <span class="fix">// ✔ FIX F2 (JWT-shaped strings -&gt; [REDACTED_TOKEN])</span>

<span class="old">const widgetId = eventTarget?.getAttribute("widget-id");</span>
const widgetId = previewButton.getAttribute("widget-id"); <span class="fix">// ✔ FIX F6 (click on inner svg had no id)</span></pre>""")]

# ---------------------------------------------------------------- part 3
p3 = [
 ("changed","What changed", "<ul>" + "".join(f"<li><code>{E(a)}</code>: {E(b)}</li>" for a,b in changed) + "</ul>"),
 ("build","How to build and verify", """<pre>npm ci --ignore-scripts        # works again (F8)
npx tsc --noEmit -p .           # 0 errors
npx jest                        # 3 suites, 11 tests
npm run build &amp;&amp; npm run build:wico
bash docs/developer-report/07_run_artifacts/mutate.sh      # M0 green, M1 red, M2 red
node docs/developer-report/07_run_artifacts/sw_symmetry.mjs  # lists unhandled SW message types (exit 1 while F7 is open)</pre>"""),
 ("decide","Decisions for the developers", "".join(f'<div class="card m"><b>{f[0]} · {E(f[3])}</b><p>{E(f[6])}</p></div>' for f in F if f[2] in ("decision","flagged") and f[1] in ("high","medium"))),
 ("caution","Behavioural cautions (review before merge)", """<ul>
<li>Package logs now carry <code>[REDACTED]</code> / <code>[REDACTED_TOKEN]</code> where they previously carried the password or JWT. Anything downstream that parsed those values will see the placeholder.</li>
<li>The documentation-button change has no effect when the SDK CSS is applied. It only matters when the icon receives the click (CSS missing or overridden).</li>
<li>The lockfile moves terser-webpack-plugin from 5.3.14 to 5.6.1 (dev only). The minified output was rebuilt successfully.</li></ul>"""),
 ("checklist","Verification checklist", """<ol><li>CI runs <code>npm ci</code> successfully.</li><li>Enable <code>flags.logPackage</code> in a staging app, log in, and inspect the POST to <code>/api/logger</code>: no password, no JWT.</li>
<li>Render a widget with <code>showDocumentation=true</code>, click the icon, and confirm the correct documentation opens.</li><li>Follow the README quick-start verbatim against staging: requests go to the configured URL.</li>
<li>Decide F3, F4, F5, F7, and F13.</li></ol>"""),
]

# ---------------------------------------------------------------- part 4
p4 = [
 ("matrix","Status matrix", matrix()),
 ("detail","Findings in detail", "".join(f'<div class="card {f[1][0]}"><b>{f[0]} · <span class="sev-{f[1]}">{f[1]}</span> · <span class="pill s-{f[2]}">{f[2]}</span> {E(f[3])}</b><p><code>{E(f[4])}</code></p><p>{E(f[5])}</p><p><b>Action:</b> {E(f[6])}</p></div>' for f in F)),
 ("controls","Control sweep (SDK-owned UI)", """<table><tr><th>Control</th><th>Where</th><th>Handler</th><th>Pressed?</th><th>Result</th></tr>
<tr><td>Documentation button (.widget-documentation-btn)</td><td>RenderWidgetService renderLatestWidget + materializeWidget</td><td>addEventListener click</td><td>Yes (jsdom, click on inner &lt;path&gt;, no CSS)</td><td>Before: widgetId=null without the SDK CSS; with the CSS the icon is pointer-events:none (read, not pressed). After: correct id either way.</td></tr>
<tr><td>Close (X) button</td><td>documentation dialog</td><td>class-bound click, calls closeModal</td><td>No</td><td>UNVERIFIED (handler present when read)</td></tr>
<tr><td>Close footer button</td><td>documentation dialog</td><td>same</td><td>No</td><td>UNVERIFIED</td></tr>
<tr><td>widgetSelected / drag attributes</td><td>stripped from rendered widgets</td><td>removed on purpose (builder-only)</td><td>-</td><td>by design</td></tr></table>
<p><b>Static stub scan.</b> I searched for empty handlers, <code>TODO</code>/<code>FIXME</code>, "not implemented", and log-only handlers. The only
empty callbacks are <code>.catch(() =&gt; {})</code> on fire-and-forget cache writes (WidgetCacheManager, QueryCacheManager,
WidgetBuild), and those are intentional. No TODO/FIXME markers were found in src. The stub-scan steps ran; the close buttons are unpressed,
so the claim "all controls work" is <b>not</b> made.</p>"""),
 ("feedback","Feedback on recent updates", """<p>The latest main commit ("fixed the wico build and access control") builds cleanly, and its <code>./wico</code> export resolves
(dist/types/wico.d.ts + wico-metadata.bundle.js). The token-refresh logic in GetRequestHeader.ts is solid: single-flight refresh, a
refresh-only status set, and fetchWithAuthRetry. The new Mail reCAPTCHA work is covered by tests. The areas that still lack tests are the
service-worker RPC, LocalTransaction, and FreeschemaQuery formatting. Only 2 of about 285 source files have any test coverage.</p>"""),
]

# ---------------------------------------------------------------- part 5
p5 = [
 ("engine","The ontology engine this SDK speaks", """<p>The SDK is a client of the two-table engine:
<b>the_concepts</b> (id, userId, typeId, categoryId, referentId, characterValue, accessId, typeCharacter, ghostId) and
<b>the_connections</b> (id, ofTheConceptId, toTheConceptId, typeId, orderId, userId, accessId, ghostId). Identity is <code>(id, userId)</code>.
The referent rule shows up as <code>referentId</code> (0/NULL = self, a positive number = a pointer to another concept).</p>
<table><tr><th>Construct</th><th>SDK surface</th></tr>
<tr><td>Type concept (<code>the_X</code>)</td><td>MakeTheTypeConcept[Local], GetConceptByCharacterAndCategory, BinaryTypeTree</td></tr>
<tr><td>Instance concept</td><td>MakeTheInstanceConcept[Local]: userId is forced to 999 when composition=false (service default stamp)</td></tr>
<tr><td>Connection (typed link)</td><td>CreateTheConnection[Local], CreateConnection (auto-creates the type), connection type names like <code>the_person_s_email</code></td></tr>
<tr><td>Composition (ordered parts)</td><td>CreateTheComposition[Local], GetComposition*, UpdateComposition, PatchComposition</td></tr>
<tr><td>Virtual ids</td><td>negative id = local/offline, positive = synced, ghostId keeps the local reference; resolved by LocalSyncData / GetTheConcept</td></tr>
<tr><td>Query</td><td>FreeschemaQuery {type, conceptIds, typeConnection, selectors, freeschemaQueries[], filters[], filterLogic, reverse, outputFormat (NORMAL=1, DATAID=2, JUSTDATA=3, DATAIDDATE=4, RAW=5, ALLID=6, LISTNORMAL=7, DATAV2=8), usePipelineQuery, isSecure} → POST /api/freeschema-query</td></tr>
<tr><td>Access</td><td>accessId on each row; AccessControl client (/access/assign, /check, /revoke, /inheritance, /super-admin, concept-based variants)</td></tr>
<tr><td>Widgets as data</td><td>the_widget, the_page (the_page_body, the_page_title, the_page_slug, ...), the_documentation (the_documentation_password, ...)</td></tr></table>"""),
 ("fixes","Where the fixes sit on the map", """<p>None of the fixes changes graph shape, types, or connection names. F1/F2 sit in the logging side channel. F6/F12 are in the widget
renderer, which reads <code>the_page</code> / <code>the_documentation</code> compositions. F9 is documentation of the init boundary.</p>"""),
 ("suggest","Suggested ontology changes", """<div class="card m"><b>the_documentation_password / the_documentation username / bearerToken (needs decision)</b>
<p>The <code>the_documentation</code> composition stores API credentials as ordinary concept text (characterValue), readable by anyone who has
read access to the widget. Suggestion: stop modelling secrets as concepts. Replace them with a reference to a secret held server-side
(for example <code>the_documentation_credential_reference</code>). Migration first: enumerate existing <code>the_documentation_password</code> rows, rotate those
credentials, re-point the documentation to the reference, then delete the text rows.</p></div>
<div class="card l"><b>Log records (safe now)</b><p>Logs are not graph data; nothing to change. Recorded here as checked.</p></div>
<div class="card i"><b>Naming checked</b><p>The type strings in the code (<code>the_page_*</code>, <code>the_widget</code>, <code>the_documentation_*</code>) follow the <code>the_</code> prefix convention.
I did not measure live rows, so I make no rename suggestions.</p></div>"""),
 ("process","Process composition", """<ol>
<li><code>init()</code>: sets BaseUrl, hydrates TokenStorage from localStorage, sets flags, then either registers the service worker or runs <code>initConceptConnection()</code> on the main thread (IndexedDB → binary trees).</li>
<li><code>LoginToBackend</code>: POST /api/auth/login, then saveUserProfile (localStorage, F3) and updateAccessToken (synced to the SW). <b>F1 fix here.</b></li>
<li>Write: MakeTheInstanceConceptLocal / CreateTheConnectionLocal inside LocalTransaction, which produces negative ids in memory and IndexedDB.</li>
<li>Sync: LocalSyncData.SyncDataOnline, which calls create_the_concept / create_the_connection; ghost ids are mapped to real ids.</li>
<li>Read: FreeschemaQuery → SchemaQuery / SchemaQueryListener → POST /api/freeschema-query → formatter by outputFormat → QueryCacheManager. <b>F2 fix (token redaction in log).</b></li>
<li>Render: renderPage → SchemaQuery(the_page) → renderLatestWidget → BuilderStatefulWidget (new Function) → documentation modal. <b>F6/F12 fixes.</b></li>
<li>In SW mode, every step above is carried by <code>sendMessage(type)</code> → handler map. <b>F7 gap: 4 types missing.</b></li></ol>"""),
]

# ---------------------------------------------------------------- part 6
SVG = """<svg viewBox="0 0 900 470" width="100%" role="img" aria-label="Block map of mftsccs-browser">
<defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<g style="color:var(--ink)" fill="none" stroke="currentColor" stroke-width="1.4">
<rect x="20" y="20" width="200" height="60" rx="8" fill="var(--card)" stroke="var(--proto)"/>
<rect x="260" y="20" width="200" height="60" rx="8" fill="var(--card)" stroke="var(--build)"/>
<rect x="500" y="20" width="180" height="60" rx="8" fill="var(--card)" stroke="var(--bad)" stroke-width="2.5"/>
<rect x="20" y="140" width="200" height="70" rx="8" fill="var(--card)" stroke="var(--bad)" stroke-width="2.5"/>
<rect x="260" y="140" width="200" height="70" rx="8" fill="var(--card)" stroke="var(--build)"/>
<rect x="500" y="140" width="180" height="70" rx="8" fill="var(--card)" stroke="var(--warn)" stroke-width="2.5"/>
<rect x="720" y="140" width="160" height="70" rx="8" fill="var(--card)" stroke="var(--build)"/>
<rect x="20" y="270" width="200" height="60" rx="8" fill="var(--card)" stroke="var(--bad)" stroke-width="2.5"/>
<rect x="260" y="270" width="200" height="60" rx="8" fill="var(--card)" stroke="var(--build)"/>
<rect x="500" y="270" width="180" height="60" rx="8" fill="var(--card)" stroke="var(--build)"/>
<rect x="20" y="390" width="860" height="60" rx="8" fill="var(--card)" stroke="var(--heart)"/>
<path d="M120 80V140" marker-end="url(#a)"/><path d="M360 80V140" marker-end="url(#a)"/><path d="M220 175H260" marker-end="url(#a)"/>
<path d="M460 175H500" marker-end="url(#a)"/><path d="M680 175H720" marker-end="url(#a)"/><path d="M360 210V270" marker-end="url(#a)"/>
<path d="M120 330V390" marker-end="url(#a)"/><path d="M360 330V390" marker-end="url(#a)"/><path d="M590 330V390" marker-end="url(#a)"/><path d="M590 80V140" marker-end="url(#a)"/>
<path d="M800 210V390" marker-end="url(#a)"/><path d="M220 300H260" marker-end="url(#a)"/>
</g>
<g fill="var(--ink)" font-size="13">
<text x="30" y="45" font-weight="600">Consuming app / widgets</text><text x="30" y="65" font-size="11">init(), LoginToBackend, queries</text>
<text x="270" y="45" font-weight="600">Public API (app.ts)</text><text x="270" y="65" font-size="11">217 exports, BaseUrl, flags</text>
<text x="510" y="45" font-weight="600">Widget runtime</text><text x="510" y="65" font-size="11">F6 F12 fixed · F5 open</text>
<text x="30" y="165" font-weight="600">Auth + TokenStorage</text><text x="30" y="185" font-size="11">F1 fixed · F3 decision</text><text x="30" y="200" font-size="11">localStorage ccs_profile</text>
<text x="270" y="165" font-weight="600">Services / Local graph</text><text x="270" y="185" font-size="11">binary trees, LocalTransaction,</text><text x="270" y="200" font-size="11">ghost/negative ids</text>
<text x="510" y="165" font-weight="600">Service-worker RPC</text><text x="510" y="185" font-size="11">sendMessage ↔ 97 actions</text><text x="510" y="200" font-size="11">F7: 4 types unhandled</text>
<text x="730" y="165" font-weight="600">IndexedDB</text><text x="730" y="185" font-size="11">concepts, connections,</text><text x="730" y="200" font-size="11">widget/query cache</text>
<text x="30" y="295" font-weight="600">Logger</text><text x="30" y="315" font-size="11">F1 F2 F11 fixed · F4 open</text>
<text x="270" y="295" font-weight="600">Api/* (REST client)</text><text x="270" y="315" font-size="11">GetRequestHeader, refresh</text>
<text x="510" y="295" font-weight="600">AccessControl client</text><text x="510" y="315" font-size="11">/access/* REST</text>
<text x="30" y="415" font-weight="600">External: C# data fabric (BASE_URL /api/*) · Node server (NODE_URL /api/v1/*) · access-control (ACCESS_CONTROL_BASE_URL /access/*) · log server (LOG_SERVER /api/logger)</text>
<text x="30" y="435" font-size="11">Red border = touched by a fix · amber = open risk</text>
</g></svg>"""
p6 = [
 ("map","Block map", SVG),
 ("blocks","How each block works", """
<div class="card"><b>Public API (src/app.ts)</b><p>A barrel of about 217 exports, plus <code>init()</code>, <code>updateAccessToken()</code>, and <code>sendMessage()</code>. <code>init</code> writes the static
<code>BaseUrl</code> configuration and <code>BaseUrl.FLAGS</code>, hydrates the token store, and then picks the execution venue: service worker or main thread.</p></div>
<div class="card"><b>Auth + TokenStorage</b><p>Holds the bearer token, refresh token, and sessionId (default 998) as statics, and a profileCache used by getUserDetails().
It persists to localStorage through SecureStorage (AES-GCM, PBKDF2 over a constant passphrase). GetRequestHeader refreshes the token 60 s before the JWT expires
using one shared (single-flight) promise; fetchWithAuthRetry retries once after a 401.</p></div>
<div class="card"><b>Services / local graph</b><p>Keeps in-memory binary trees keyed by id, type, and character, for concepts and connections. Local writes get negative ids
and are recorded as <code>InnerActions {concepts, connections}</code> per transaction. LocalSyncData pushes them to the backend and maps ghost ids to real ids.</p></div>
<div class="card"><b>Service-worker RPC</b><p><code>sendMessage(type,payload)</code> posts to the controller with a messageId and TABID. It polls <code>checkProcess</code> every 2 s and retries once.
The SW (<code>src/ServiceWorker/index.ts</code>) waits up to 90 s for its own init, dispatches to the merged action maps, and accumulates the actions of each tab until
<code>LocalSyncData__SyncDataOnline</code>. An unknown type returns success:false, and the caller falls back to the main thread (F7).</p></div>
<div class="card"><b>Widget runtime</b><p>Widgets and pages are compositions read with FreeschemaQuery. Their HTML, CSS, and JS are cached in memory and in IndexedDB
(WidgetCacheManager: stale-while-revalidate). The JS runs through <code>new Function("tsccs", ...)</code>. The documentation modal renders <code>the_documentation</code> data.</p></div>
<div class="card"><b>Logger</b><p>When the flags are on, it queues package and app log entries and flushes them to LOG_SERVER every 60 s, and immediately on ERROR, in chunks of 300,
with the user's bearer header attached (F4).</p></div>
<div class="card"><b>AccessControl client</b><p>A typed REST client against ACCESS_CONTROL_BASE_URL. It throws on non-2xx and on a null body, so a refusal surfaces as an Error rather than an empty result.</p></div>"""),
 ("flow","How the blocks work together", """<p><b>Control flow:</b> app → init → (SW register | main-thread init) → LoginToBackend → token in TokenStorage → token pushed to the SW with
<code>updateAccessToken</code>. After that, each API call builds a header through GetRequestHeader (refresh if needed) and fetches BASE_URL.
<b>What crosses each boundary:</b> JSON bodies, <code>Authorization: Bearer</code>, and <code>X-Session-Id</code> for REST; structured-clone JSON with messageId, TABID, and actions for the SW;
BroadcastChannel for cross-tab sync. <b>Where state lives:</b> statics (main thread or SW, not shared), IndexedDB (shared per origin + app name), and localStorage (profile).
<b>On failure:</b> a SW failure falls back to the main thread; a 401 triggers one refresh and retry; a failed refresh (400/401/406) clears the session through the auth handlers.</p>"""),
 ("risks","Where the fixes and risks sit", """<ul><li><b>Fixed:</b> Logger (F1, F2, F11), Auth call site (F1), Widget runtime (F6, F12), build/docs (F8, F9, F10).</li>
<li><b>Architectural risks:</b> the token-at-rest design (F3) combined with the code-executing widget runtime (F17) means one malicious widget can take over an account.
The duplicated state between main thread and SW makes every missing handler (F7) a potential divergence. The log side channel crosses a trust boundary (F4).
The ontology suggestion about credentials stored as concepts is in part 5.</li>
<li><b>Suggested structure:</b> generate the SW handler map and the main-thread callers from one table, so symmetry holds by construction; add sw_symmetry.mjs to CI.</li></ul>"""),
]

# ---------------------------------------------------------------- index + readme
def manifest():
    rows=[]
    for root,_,files in os.walk(OUT):
        for fn in sorted(files):
            p=os.path.relpath(os.path.join(root,fn),OUT)
            purpose={
             "developer_report.html":"Visual index (this file)","README.html":"One-screen start page",
             "01_response_commentary_and_grill.html":"Part 1: commentary + grill","03_developer_instructions.html":"Part 3: developer instructions",
             "04_error_and_gaps_report.html":"Part 4: errors, gaps, control sweep","05_ontology_report.html":"Part 5: ontology + process composition",
             "06_architects_report.html":"Part 6: architects report with block map","02_fixed_source/fixes.patch":"Part 2: diff of all fixes vs origin/main",
             "02_fixed_source/02_fixed_source.html":"Part 2: changed files and why","skill/developer-report.SKILL.md":"The developer-report skill (install to ~/.claude/skills/developer-report/SKILL.md)",
             "07_run_artifacts/gen_report.py":"Generator for these HTML documents","07_run_artifacts/mutate.sh":"Mutation script (M0 null, M1, M2)",
             "07_run_artifacts/mutation.log":"Mutation results","07_run_artifacts/sw_symmetry.mjs":"SW message symmetry sweep","07_run_artifacts/sw_symmetry.log":"Sweep output",
             "07_run_artifacts/doc_button_click.cjs":"jsdom real-click harness for F6","07_run_artifacts/doc_button_click.log":"Harness output",
             "07_run_artifacts/tsc.log":"Typecheck output","07_run_artifacts/jest.log":"Jest output","07_run_artifacts/build.log":"webpack main build log",
             "07_run_artifacts/build_wico.log":"wico build log","07_run_artifacts/npm_pack_dryrun.log":"Ship-shape: npm pack summary (types list trimmed)",
             "07_run_artifacts/bundle_import_smoke.log":"Built bundle import smoke","07_run_artifacts/npm_audit_summary.log":"npm audit summary",
            }.get(p.replace(os.sep,"/"),"run artifact")
            rows.append(f'<tr><td><a href="{E(p)}"><code>{E(p)}</code></a></td><td>{E(purpose)}</td></tr>')
    return "<table><tr><th>Path</th><th>Purpose</th></tr>"+"".join(rows)+"</table><p>Excluded: node_modules, dist (regenerable build output, not committed).</p>"

def write(name, content):
    with open(os.path.join(OUT,name),"w") as f: f.write(content)

write("01_response_commentary_and_grill.html", page("Commentary and grill","Part 1",p1))
write("02_fixed_source/02_fixed_source.html", page("Fixed source","Part 2",p2).replace('href="developer_report.html"','href="../developer_report.html"').replace('href="fixes.patch"','href="fixes.patch"'))
write("03_developer_instructions.html", page("Developer instructions","Part 3",p3))
write("04_error_and_gaps_report.html", page("Errors and gaps","Part 4",p4))
write("05_ontology_report.html", page("Ontology report","Part 5",p5))
write("06_architects_report.html", page("Architects report","Part 6",p6))
counts={}
for f in F: counts[(f[1],f[2])]=counts.get((f[1],f[2]),0)+1
parts=[("01_response_commentary_and_grill.html","1 · Commentary + grill"),("02_fixed_source/02_fixed_source.html","2 · Fixed source (in place) + patch"),
 ("03_developer_instructions.html","3 · Developer instructions"),("04_error_and_gaps_report.html","4 · Errors and gaps"),
 ("05_ontology_report.html","5 · Ontology + process"),("06_architects_report.html","6 · Architects report")]
links="".join(f'<div class="card"><a href="{a}"><b>{E(b)}</b></a></div>' for a,b in parts)
fixed=sum(1 for f in F if f[2]=="fixed"); open_=len(F)-fixed
idx=[("parts","The six parts",links),
     ("status","Fix-status matrix",f"<p>{len(F)} findings: {fixed} fixed, {open_} flagged or awaiting a decision. High: {sum(1 for f in F if f[1]=='high')}, medium: {sum(1 for f in F if f[1]=='medium')}.</p>"+matrix()),
     ("tests","Checks run",tests_table()+UNVERIFIED),
     ("manifest","Manifest",None)]
write("developer_report.html","")  # placeholder so it appears in manifest
write("README.html","")
idx[3]=("manifest","Manifest",manifest())
write("developer_report.html", page("tsccs-dev developer report","Index",idx,"<p>Developer report for the <b>mftsccs-browser</b> SDK. Start with part 4 for the findings and part 3 for what to do next.</p>").replace('<a href="developer_report.html">&larr; index</a>',''))
write("README.html", page("Read me first","README",[("start","Where to start","<ol><li><a href=\"developer_report.html\">developer_report.html</a>: index, status matrix, and manifest</li><li><a href=\"04_error_and_gaps_report.html\">Part 4</a>: every finding</li><li><a href=\"03_developer_instructions.html\">Part 3</a>: build, verify, decide</li></ol><p>Install the bundled skill by copying <code>skill/developer-report.SKILL.md</code> to <code>~/.claude/skills/developer-report/SKILL.md</code>.</p>")]))
print("written")
