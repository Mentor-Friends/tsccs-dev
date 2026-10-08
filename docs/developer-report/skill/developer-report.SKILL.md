---
name: "developer-report"
description: "The user's fixed convention for a 'developer report' — ALWAYS produce it as ONE zip to share with the developers, never a bare .md/.docx/.html. Trigger on ANY of: 'developer report', 'developers report', \"developer's report\"; the bare words 'fix it', 'fix', 'fix report', 'find bugs', 'bugs', 'developer', 'developers', \"developer's\"; the user pasting developer comments (do this report on those comments); OR a program file (code, zip, repo) dropped with an empty/near-empty prompt. Six parts, every report document self-contained HTML (only fixed program source and the bundled skill file are not HTML): (1) response commentary PLUS a grill (adversarial self-interview), (2) fixes applied in the original files, (3) developer instructions, (4) error-and-gaps report, (5) FULL ontology report with suggested changes/fixes/updates plus process composition, (6) architects report on how the system blocks work — plus an HTML index, and EVERY file created during the run bundled into the zip."
updated: 2026-09-29e-failures
---

# Developer Report — the user's convention

This is a standing convention. Whenever it triggers, the deliverable is **one zip, to be shared with the developers**, containing the six parts below plus an HTML index. Never satisfy these requests with a bare markdown, docx, or loose html — assemble and deliver the **zip**.

## When to produce it (triggers)

Produce the developer-report zip on any of these — they all mean the same thing:

- The user says **"developer report"**, **"developers report"**, **"developer's report"**, or **"produce a developer report"**.
- The user says **"fix it"**, **"fix"**, **"fix report"**, **"find bugs"**, **"bugs"**, or just **"developer" / "developers" / "developer's"**.
- The user **pastes developer or developers' comments** (a code-review reply, a dev's notes). That means: run this report *on those comments* — verify/answer them and package the result.
- The user **drops or attaches a program file** (a source file, a zip, a repo) with an **empty or near-empty prompt**. Assume they want this report on it.

If genuinely ambiguous whether they want the full report or a quick answer, default to producing the report — that is the established expectation. Don't stop to ask on an unattended/file-drop trigger; make reasonable assumptions, state them in the report, and proceed.

## File-format rule: HTML everywhere except code and the skill file

**Every report document in the zip is a self-contained HTML file** in the house style (below). The only files that are *not* HTML are:

- the corrected program source under `02_fixed_source/` — those stay **real code files** in their original structure, build-ready (an HTML-wrapped source tree cannot compile, so wrapping it would defeat the purpose of the fix bundle);
- the bundled skill file `skill/developer-report.SKILL.md` — skill files keep their native `.md` format so they remain installable;
- run artifacts under `07_run_artifacts/` that are inherently non-HTML (scratch scripts, diffs, logs, data files) — include them as-is, but describe each one in HTML form in the index.

Do not produce `.md`, `.docx`, or `.txt` report documents. If a draft was written in markdown along the way, convert it to styled HTML for the zip (the markdown draft then belongs in `07_run_artifacts/`).

## The six required parts (fixed order and naming)

Build a folder `{project}_developer_report/`, zip it, deliver with `SendUserFile`. Inside:

1. **`01_response_commentary_and_grill.html`** — *the contents of the assistant's responses AND a grill.*
   - **Commentary:** a compiled narrative of what was said/found across the review/fix/verification turns, in the assistant's voice.
   - **Grill:** an adversarial self-interview that stress-tests the findings and fixes — walk each significant decision branch as a pointed **Q → A**, in the spirit of the `grill-me` skill (resolve each branch of the decision tree, one hard question at a time, with the answer). Grill your *own* conclusions: "Is this really a bug or a false positive? What input reproduces it? Does the fix break a caller? What did we assume? What's the weakest claim here?" If the user is present and interactive you may also grill *them* on open design decisions; otherwise grill the analysis and record it. This section is what separates a real developer report from a plain review.
2. **`02_fixed_source/`** — *the program fixes in the original files.* The corrected source in its **original file structure**, build-ready: apply every agreed fix into the real files (not snippets), including build config (`tsconfig`, `package.json`, etc.) so it compiles. **Typecheck/build before zipping.** Strip secrets (`.env`) and scratch files. For behavioural/risky fixes, apply them but flag "review before merge" in part 3. These are the one part of the zip that stays as real code, not HTML.
3. **`03_developer_instructions.html`** — *developer instruction.* What changed, what the developers must still do/decide, how to build and verify, behavioural cautions, and a verification checklist.
4. **`04_error_and_gaps_report.html`** — *error and gaps report with feedback on updates and fixes.* Every finding, its severity, and current status (fixed / fixed-in-bundle / decision), plus the assistant's feedback on updates already made.
5. **`05_ontology_report.html`** — *the FULL ontology report, with suggested changes, fixes, and updates, plus the process composition.* Two halves, both required:
   - **The ontology as it stands:** map the domain's full ontology as encountered in this run — not only the slice the fixes touched. For SCCS/CCS work that means the `the_concepts` / `the_connections` two-table engine, composite key `(id,user_id)`, referent rule NULL/0/int/pointer, branch/trunk/target overlay, derived-on-read `*_count`, the prototype render, composition = ordered required parts, the grammar gate — plus the concrete types, connections, and naming actually present in the reviewed system, with each fix located on that map.
   - **Suggested changes, fixes, and updates to the ontology itself:** where the ontology is inconsistent, mis-named (SNS violations), duplicated, missing a hypernym placement, or would benefit from a restructure, say so explicitly — each suggestion with *what* to change, *why*, and *what data/rows it touches* (migration-first: never suggest a bare rename of a token that has live rows without the re-point step). Distinguish "safe to apply now" from "needs the developers' decision". This half is required even when the ontology looks healthy — then it records what was checked and found sound.
   - **Process composition:** trace the ordered operation chain of the system and show where each fix lands in it.
6. **`06_architects_report.html`** — *the architects report: how the system blocks work.* A separate, self-contained HTML document written for an architect rather than a line developer. Where part 3 says *what to do* and part 5 says *what things are*, this one explains *how the machine runs*:
   - **Block map:** the system's building blocks (services, layers, engines, stores, widgets, external boundaries) drawn as a diagram — inline SVG or styled HTML/CSS boxes-and-arrows, self-contained, no external images.
   - **How each block works:** for every block, a short mechanism section — what it holds, what it computes, what invariants it maintains — not just its name.
   - **How the blocks work together:** the data and control flow between blocks — who calls whom, in what order, what crosses each boundary (payload, auth, format), where state lives, and what happens on failure.
   - **Where the fixes and risks sit:** mark on the block map which blocks this run's fixes touched, and any architectural risks or suggested structural changes (cross-reference the ontology suggestions in part 5 rather than repeating them).

Also include:
- **`developer_report.html`** — a **self-contained** visual index in the project house style, summarising all six parts with a color-coded fix-status matrix and a linked manifest of every file in the zip (including `07_run_artifacts/`).
- **`README.html`** — a one-screen index listing the six parts and where to start.
- **`07_run_artifacts/`** — see the completeness rule below.

## Completeness rule: every file created during the run goes in the zip

**Any file created while producing the report — on this run, in this session — must be inside the zip.** Nothing created is left behind in the workspace, delivered loose, or silently dropped. That includes: scratch/helper scripts, build or typecheck logs, diffs, intermediate markdown drafts (superseded by their HTML versions but still bundled), generated diagrams, test outputs, and any earlier revision of a report document that was materially different.

- Files whose natural home is one of the six parts go there (a diagram belongs in part 6; a diff review belongs with part 4).
- Everything else goes under **`07_run_artifacts/`**, organised in a shallow, named structure (`scripts/`, `logs/`, `drafts/`, `diffs/` as needed).
- The `developer_report.html` index carries a **manifest table of every file in the zip** — path, one-line purpose, and which part it supports — so the developers can audit that nothing is missing.
- Exclusions are the same as always: secrets (`.env`), and node_modules/build caches that are mechanically regenerable and were not authored this run.

Before zipping, sweep the working directory: `ls -R` the workspace, and confirm every file you created this run is either in the zip or deliberately excluded with the reason noted in the manifest.

## House style for the HTML

The house style is **fully specified below — build from this paragraph alone.** There is no exemplar file to open: earlier revisions pointed at `SCCS_SKILLS_REPORT.html` / `sccs-master-update-center.html`, which are not part of this skill and are not on disk; do not go looking for them. The spec: self-contained single file; Google Fonts **Fraunces** (serif headings), **Inter** (body), **IBM Plex Mono** (labels/code); warm paper palette (`--paper:#f6f3ec; --card:#fffdf8; --ink:#1c1815; --heart:#b9711a; --build:#2c7c77; --proto:#6266a8`); kicker + section-eye labels; sticky TOC; cards with a colored left border; a status matrix table; `.note` callouts; footer pills. Code blocks: dark card, mono font, corrections marked inline with a green `// ✔ FIX …` span and the old line noted. Escape `<`, `>`, `&` inside `<pre>`. All report documents (parts 1, 3, 4, 5, 6, the index, and the README) use this same style so the zip reads as one publication. For the architects report's block diagram, prefer inline SVG in the same palette (blocks in `--card` with colored borders, arrows in `--ink`), so it renders with no network access.

## Process

1. Extract/read the input (dropped file, zip, repo, or pasted comments). If it's a fix pass or dev comments, diff against the prior version and verify each claim.
2. Do the review/fix/verification work. Then **grill it** — write the adversarial Q&A that stress-tests every material finding and fix (part 1).
3. **Apply the fixes into `02_fixed_source/`** and typecheck/build to confirm it's ready. Flag risky/behavioural fixes as "review before merge" in part 3.
4. Write the six report documents as self-contained HTML (parts 1, 3, 4, 5, 6 — part 2 is the source tree) + the HTML index + `README.html`.
5. **Ship this skill with the report.** Copy this `SKILL.md` into the zip at `skill/developer-report.SKILL.md` so the installable source always travels with the report. **This copy is the required step and is always achievable.** *Optional, only where the harness actually exposes a writable skills manifest:* refresh the `developer-report` entry in `~/.claude/skills/manifest.json` (name, description, `source: custom`) so the skill is registered rather than a loose file. Most harnesses do not expose that path — if it is absent or read-only, **do not treat it as a failure and do not fabricate one**; the fallback is the zip copy plus a line in `README.html` telling the developers where to drop the skill to install it (`~/.claude/skills/developer-report/SKILL.md`).
6. **Run the completeness sweep:** list everything created this run, place each file in its part or in `07_run_artifacts/`, and finish the manifest table in `developer_report.html`.
7. Zip the folder; deliver with `SendUserFile`. If a desktop is connected, also persist the HTML index via `mcp__remote-devices__create_artifact`. Save the durable `.html` docs (and this `SKILL.md`) to the project with `project_write` (the Projects API may reject binary `.docx`/`.zip` — deliver the zip via `SendUserFile`, save the text docs to the project).

## Notes

- "fix it" / "fix" / "bugs" / "developer" are NOT just "edit the code" — they mean produce the whole developer-report zip.
- A program file dropped with no prompt = produce this report on it.
- Pasted developer comments = produce this report answering/verifying those comments.
- Always produce all six parts, including the grill in part 1 and the architects report in part 6. Scale depth to the work, but never drop a part.
- Report documents are HTML, always; only `02_fixed_source/` code, the bundled skill file, and inherently non-HTML run artifacts are exempt.
- Keep the zip internally consistent: if a fix is applied in `02_fixed_source/`, the status in part 4, the block map in part 6, and the HTML index must all say so.
- The zip is the complete record of the run: if a file was created and isn't in it, that's a gap — fix it before delivering.

## Patch — 2026-09-29b · the CONTROL SWEEP is required in every report and every "find bugs" review

**Why.** A read-through review of the Humanizing Data program did not report its stubs:
- 19 forms with an empty "+ new" handler;
- 15 navigation calls guarded behind a global nothing defined;
- a Clock in / out button with no handler.

They read like wiring. Reading can prove a bug exists; it cannot prove that none do. The user later found 46 dead controls.

**Required in part 4 (error and gaps), and in any quick chat review that says "find bugs" / "fix it" / "bugs":**
1. **Inventory.** Every control on every screen (button, link, tile, row action, menu item), with its handler — or "none".
2. **Static stub scan.** For WICO/AppBuilder packages: `node widget-validate/scripts/data_map_lint.mjs <pkg> --rules=DM13,DM14,DM16,DM17`. For other code, search for:
   - empty handlers `function(){}` / `() => {}` bound to events;
   - `if (window.X)` / `X && X()` / `?.()` guards on things nothing defines;
   - `TODO` / `FIXME` / `stub` / `placeholder` comments;
   - log-only or `preventDefault`-only handlers;
   - "coming soon" text;
   - controls whose id or class no script names — **including buttons built inside script strings** (they only appear when data exists);
   - `isSecure=false` / type-wide reads (cross-tenant data).
3. **Press.** Press every control in a harness or the running app (`reusable-test` `wiring.mjs` for widget apps) and record what happened. A control you did not press is **UNVERIFIED** in the matrix, never "OK".
4. **Spec parity.** If a spec model exists, run `full-spec-mockup/scripts/spec_contract_check.mjs` and `spec_press_parity.mjs`, and list controls in the spec but not the build, and in the build but not the spec.

**Never write** "no stubs found", "all buttons are wired" or "no dead code" unless steps 2 and 3 ran and passed; say which steps ran. **Grill (part 1) gains:** "Did I press every control, or did I read it? Which controls are unverified?"

**v1_33 addendum.** Press with **seeded data**: a control that renders only when a record exists is unpressed in an empty world, so the sweep must seed first. A "fix it" report ships the fixed build **and** one mutant per fix, and states the result of each.

## Patch — 2026-09-29d · a report about the platform is reproduced in the harness before anything is fixed

**Provenance (internal — Humanizing Data v1_34).** "HR cannot assign ROLE_EMPLOYEE" was reproduced by giving the harness the live refusal (reusable-test F-ACCESS, `AC_POLICY=strict`). The previous release then failed 30 checks under it — the view the developers had — and passed every check under the permissive model it had been tested with.

1. **Reproduce first.** Add the platform condition as a harness knob with a fidelity check, and show the previous release failing the way the developer described. Put that table in the report ("before, under the live condition").
2. **Answer the question asked.** When a developer asks "should HR get the right, or should this move to a backend?", give a recommendation with the trade-off, the immediate mitigation that ships now, and the durable design — not only a code change.
3. **Name the live check.** If the defect could have left bad state on live (an exit that never revoked access), the report opens with the check the developers must run today.
4. **Show the gates that now catch the class** (spec SC12, lint DM20/DM21, fidelity F-ACCESS, the access-model matrix), each with its proof count, so the fix is not a one-off.

## Patch — 2026-09-29e · answer "are there other forms of this error?" with a test, not a list

When a defect class is found, build the check that makes the platform produce it (a fault or policy knob). Run it on the current release and report the counts per form, before and after the fix. Name the forms that the static rules and the runtime suite each catch. v1_34_1's answer came from `faults.mjs`: 100 silent reads, 9 data-loss saves, 5 hidden save failures, 3 double creates, 2 unnoticed expiries.
