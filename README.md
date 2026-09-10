<p align="center">
  <img src="https://img.shields.io/badge/prompts-2520-orange" alt="2520 prompts">
  <img src="https://img.shields.io/badge/categories-28-yellow" alt="28 categories">
  <img src="https://img.shields.io/badge/unique-100_percent-brightgreen" alt="100 percent unique">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT license">
  <img src="https://img.shields.io/badge/showcase-live-brightgreen" alt="showcase live">
  <img src="https://img.shields.io/badge/updated-2026--09--10-informational" alt="updated Sept 10 2026">
</p>

<h1 align="center">GPT-6 Astra Awesome Hub</h1>

<p align="center">
  <b>2,520 copy-paste GPT-6 Astra prompts, carousel navigator, real community builds index, API quickstarts, safety notes</b>
  <br>
  Launch-aware: GPT-6 Astra shipped <b>Sept 3 to 4, 2026</b>. The public ecosystem is days old. This repo stays factual about that.
</p>

<p align="center">
  <a href="https://gpt-6-astra-showcase.vercel.app"><img src="https://img.shields.io/badge/open_live_showcase-orange" alt="Open live showcase"></a>
  <a href="https://github.com/aniruddhaadak80/gpt-6-astra-awesome/tree/main/prompts"><img src="https://img.shields.io/badge/browse-2520_prompts-yellow" alt="Browse 2520 prompts"></a>
  <a href="https://github.com/aniruddhaadak80/gpt-6-astra-awesome/blob/main/docs/3d-advanced-guide.md"><img src="https://img.shields.io/badge/advanced-3D_guide-blue" alt="Advanced 3D guide"></a>
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/aniruddhaadak80/gpt-6-astra-awesome&amp;root-directory=web"><img src="https://vercel.com/button" alt="Deploy with Vercel"></a>
</p>

<p align="center">
  <a href="https://awesome.re">Awesome</a> - <a href="prompts/">Prompts</a> - <a href="#category-carousel">Categories</a> - <a href="#live-web-showcase">Live showcase</a> - <a href="LICENSE">License</a> - <a href="SOURCES.md">Sources</a>
</p>

**Status line:** Prompts 2520 | Categories 28 | Unique verified SHA-256 | License MIT | Updated 2026-09-10 | Web showcase Next.js 14, static export, live preview linked above

---

## Live web showcase

The full library now runs as a cinematic web app: all 2520 prompts hard-coded in the bundle, one-click copy, dropdown filters, advanced search, animated hero with particle canvas, scroll reveals, stat counters, marquee ticker, 3D pipeline timeline, builds gallery, framework, quickstart, safety, and sources.

- **Production URL:** https://gpt-6-astra-showcase.vercel.app
- **Project:** `gpt-6-astra-showcase` under the account workspace, root directory `web`, auto-deploys every push to `main` once the Git integration is connected. Fresh deploys from an authenticated shell use `npx vercel deploy --prod` inside `web/`.
- **Run locally:** `cd web`, `npm install`, `npm run dev`, open the printed localhost address.
- **Regenerate data:** `cd web`, `py data/build-data.py`, then rebuild. The bundle reads `web/data/prompts.json` plus `web/data/categories.json`, both generated from `prompts/prompts.jsonl`.
- **Palette:** obsidian black, amber, signal orange, teal, sky. No purple, no pink anywhere in the interface.
- **Full manual:** [`#web-app-manual`](#web-app-manual)

---

## Scope note, read first

Public search across GitHub, X, LinkedIn, Reddit mirrors, DEV, Substack, and vendor docs on 2026-09-10 shows Astra is real and very new, with thin public signal: mostly launch shares, access questions, score screenshots, and about 15 to 20 substantive demos. No 2,000-plus community prompt corpus exists yet in the wild. This repo therefore contains two distinct parts:

1. `prompts/` - **2,520 original, unique, Astra-tuned prompts** (28 times 90), built from official Astra guidance patterns. Labeled as curation, not scraped content.
2. **Real builds index** - significant public builds with creator attribution and links. Inclusion does not mean reproduction. Confidence labels reflect evidence quality.

For strictly found material, use the builds table plus `SOURCES.md`. For a working library, use `prompts/` plus `examples/` plus `docs/`, or the live showcase above.

---

## Carousel, jump anything to anything

<p align="center">
<a href="#what-is-gpt-6-astra">Model</a> -
<a href="#quickstart">Quickstart</a> -
<a href="#astra-prompt-framework">Framework</a> -
<a href="#category-carousel">Categories</a> -
<a href="#how-to-copy">Copy</a> -
<a href="#advanced-3d-with-astra">3D guide</a> -
<a href="#advanced-operations">Ops</a> -
<a href="#architecture-and-data-flow">Architecture</a> -
<a href="#what-people-are-building">Builds</a> -
<a href="#official-resources">Official</a> -
<a href="#community-guides">Guides</a> -
<a href="#faq">FAQ</a> -
<a href="#safety">Safety</a> -
<a href="#repo-map">Map</a> -
<a href="docs/carousel.html">Interactive carousel</a>
</p>

<p align="center">
<a href="prompts/01-agentic-coding.md">Coding</a> -
<a href="prompts/02-computer-use.md">Computer</a> -
<a href="prompts/03-browser-research.md">Research</a> -
<a href="prompts/04-professional-docs.md">Docs</a> -
<a href="prompts/05-spreadsheets-data.md">Sheets</a> -
<a href="prompts/06-science-research.md">Science</a> -
<a href="prompts/07-defensive-security.md">Security</a>
</p>
<p align="center">
<a href="prompts/08-3d-blender-unreal.md">3D</a> -
<a href="prompts/09-game-dev.md">Games</a> -
<a href="prompts/10-web-dev.md">Web</a> -
<a href="prompts/11-video-creation.md">Video</a> -
<a href="prompts/12-music-audio.md">Audio</a> -
<a href="prompts/13-design-figma.md">Design</a> -
<a href="prompts/14-writing-technical.md">TechWrite</a>
</p>
<p align="center">
<a href="prompts/15-writing-creative.md">Creative</a> -
<a href="prompts/16-business-ops.md">Ops</a> -
<a href="prompts/17-education.md">Teach</a> -
<a href="prompts/18-math-frontier.md">Math</a> -
<a href="prompts/19-data-viz.md">Data</a> -
<a href="prompts/20-devops-terminal.md">DevOps</a> -
<a href="prompts/21-testing-qa.md">QA</a>
</p>
<p align="center">
<a href="prompts/22-multi-agent.md">Agents</a> -
<a href="prompts/23-long-context.md">1M context</a> -
<a href="prompts/24-structured-outputs.md">Schema</a> -
<a href="prompts/25-reasoning-effort.md">Effort</a> -
<a href="prompts/26-migration.md">Migrate</a> -
<a href="prompts/27-prompt-debugging.md">Debug</a> -
<a href="prompts/28-productivity.md">Life</a>
</p>

---

## Contents

- [Live web showcase](#live-web-showcase)
- [Scope note, read first](#scope-note-read-first)
- [Carousel, jump anything to anything](#carousel-jump-anything-to-anything)
- [Highlights](#highlights)
- [What is GPT-6 Astra](#what-is-gpt-6-astra)
- [Benchmarks at a glance](#benchmarks-at-a-glance)
- [Quickstart](#quickstart)
- [Astra prompt framework](#astra-prompt-framework)
- [Prompt anatomy, worked example](#prompt-anatomy-worked-example)
- [Category carousel](#category-carousel)
- [How to copy](#how-to-copy)
- [Advanced 3D with Astra](#advanced-3d-with-astra)
- [Advanced operations](#advanced-operations)
- [Architecture and data flow](#architecture-and-data-flow)
- [What people are building](#what-people-are-building)
- [Official resources](#official-resources)
- [Community guides](#community-guides)
- [Safety](#safety)
- [Repo map](#repo-map)
- [Web app manual](#web-app-manual)
- [FAQ](#faq)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License and citations](#license-and-citations)

---

## Highlights

| Highlight | Detail |
|---|---|
| 2520 prompts, zero duplicates | SHA-256 verified on every push by `scripts/verify_prompts.py` plus CI |
| Collapsible vertical blocks | Click any title to expand top to bottom, copy icon on the inner fence, no sideways scrolling |
| Circular category chain | Every file links Index, Prev, Next, Search, Carousel, so navigation never dead-ends |
| Machine-readable twins | `prompts.jsonl`, `prompts.csv`, `prompts_index.json` ship beside the markdown |
| Interactive carousel | `docs/carousel.html` with search, prev, next, random, keyboard control |
| Cinematic web showcase | Next.js 14 static export with loader, particle hero, counters, marquee, reveals, filters |
| Advanced 3D pipeline | Nine-gate playbook plus budgets, export matrix, QA gate in `docs/3d-advanced-guide.md` |
| Honest sourcing | Vendor claims labeled as claims, builds carry attribution plus confidence |

---

## What is GPT-6 Astra

| Field | Value, verified Sept 10, 2026 |
|---|---|
| Developer | OpenAI |
| Announced | Sept 3, 2026, limited preview |
| API general availability | Sept 4, 2026 as `gpt-6-astra` |
| Copilot general availability | Sept 4, 2026, Pro Plus, Max, Business, Enterprise |
| Surfaces | ChatGPT Work, Codex, API, Azure, Bedrock, Microsoft 365, Copilot across VS Code, Visual Studio, CLI, JetBrains, Xcode, Eclipse, Mobile, github.com |
| Context | **1,050,000** tokens in, **128,000** max out |
| Knowledge cutoff | April 30, 2026 |
| Control | `reasoning.effort` with `low`, `medium`, `high`, `xhigh`, `max`. Gateway default is `low`. Set it explicitly per task |
| Pricing, Standard | **10 USD** per 1M input, **50 USD** per 1M output, cached input 1 USD, cache writes 12.50 USD. Above 272K input: 2x input and cache rates, 1.5x output for the full request. Fast mode 2x. Batch and Flex 50 percent of Standard |
| Modalities | Text plus image in, text out |
| Tool calling | **Responses API required**. Chat Completions is supported without tools. Remove `temperature`, `top_p`, `top_logprobs`, and `logprobs` |
| Positioned for | Computer use, browsing, long-horizon agentic coding, professional work, science, defensive security work |
| Safety label | First model at Critical cybersecurity capability under the Preparedness Framework. Tightened misuse controls plus misalignment monitoring. Enterprise access off by default |

---

## Benchmarks at a glance

> Vendor-reported numbers, not independently verified here. Useful for orientation, never as proof. Full context links in `SOURCES.md`.

| Eval | Reported Astra figure | Note |
|---|---|---|
| FrontierMath Tier 4 | 98 percent | Vendor claim, math reasoning |
| ARC-AGI-3 | 99.9 percent | Vendor claim, near ceiling |
| ExploitBench | 100 percent | Vendor claim, cyber capability signal behind the Critical rating |
| Terminal-Bench 4.0 | About 57.7 to 57.9 percent | Agentic terminal work, self-reported |
| DeepSWE | 74.1 | Software engineering, self-reported |
| Terminal-Bench Science | 64.6 | Science workflows, self-reported |
| GPQA Diamond | 96.0 | Graduate science QA, self-reported |
| BrowseComp | 91.5 | Browsing tasks, self-reported |
| OSWorld 2.0 | 72.6 offline partial | Computer-use eval, partial protocol |

Rule of thumb: benchmark deltas matter less than cost per completed task on local workload. Pin `reasoning.effort` per task type after local evals, then re-price with cache math.

---

## Quickstart

Start at `low` or `medium` with planning enabled. Move to `high`, `xhigh`, or `max` only after a documented miss with repro steps plus logs. Full routing tables live in [`prompts/25-reasoning-effort.md`](prompts/25-reasoning-effort.md).

```python
# Responses API with tool calling, recommended path
from openai import OpenAI
client = OpenAI()
resp = client.responses.create(
    model="gpt-6-astra",
    reasoning={"effort": "medium"},
    input="Run a booking-page QA pass. Test navigation, forms, and mobile layout. Report tested, failed, and unverified.",
)
print(resp.output_text)
```

```javascript
// Node, Responses API
import OpenAI from "openai";
const client = new OpenAI();
const r = await client.responses.create({
  model: "gpt-6-astra",
  reasoning: { effort: "medium" },
  input: "Reconcile these two CSV extracts. Preserve raw data. Output exceptions with reasons.",
});
console.log(r.output_text);
```

```bash
# Copilot CLI and Codex path
# Select gpt-6-astra in the model picker, then run the migration helper
# openai-docs migrate this project to GPT-6 Astra
```

```bash
# Showcase site, local run
cd web
npm install
npm run dev
```

Migration checklist: move to Responses API, drop legacy sampling params, set effort explicitly, update cache config, audit `AGENTS.md` and `SKILL.md` priority blocks, re-baseline evals, pin per-task effort, keep a rollback branch. Full pack in [`prompts/26-migration.md`](prompts/26-migration.md).

---

## Astra prompt framework

Official guidance converges on five tunable behaviors plus a five-part task shell. Every prompt in `prompts/` uses this shell.

**Five behaviors to set explicitly:**

| Number | Behavior | Symptom when unset | Setting that fixes it |
|---|---|---|---|
| 1 | Initiative and follow-through | Asks when action was wanted | Bias toward action, deliver a reviewable result before asking approval |
| 2 | Instruction priority | Skill and project files conflict, work stalls | These instructions outrank skill files, quote the blocker when pausing |
| 3 | Writing style | Verbose list and table heavy output | Concise paragraphs, one idea each, lists only for parallel items, plain verbs |
| 4 | Subagent delegation | Independent work stays serial | Delegate independent chunks through collaboration tools, merge in one voice |
| 5 | Testing and verification | Tiny diff triggers a full suite | Scale checks to risk, targeted for reversible edits, full for risky edits |

**Five-part task shell, ready to copy:**

```text
Goal: state the deliverable plus who it serves
Inputs: list files, links, and data, plus what is authoritative and what is reference only
Constraints: scope, style, performance, privacy, and stop-before-send, purchase, book,
delete, or permission-change rules
Output: format, length, and acceptance criteria
Done: definition of done plus a verification report with tested, failed, and unverified
items, assumptions, and evidence links
Autonomy: assume-against-ask policy plus approval gates plus instruction priority
```

**Verification ladder, from light to heavy:**

```text
Level 0: read-only review, no execution, list risks
Level 1: targeted checks for small reversible edits, one or two probes
Level 2: module suite for a contained feature, plus edge inputs
Level 3: full relevant suite plus browser or device pass for risky or user-facing edits
Always close with a Done table: complete, partial, blocked, with evidence and gaps
```

Worked production modules live in [`examples/`](examples/): initiative, priority, concise style with slop-word blocklist, delegation, testing calibration, API config.

---

## Prompt anatomy, worked example

Every library prompt decomposes the same way. Learn the shape once, then remix freely.

```text
Act as a senior staff engineer.                                    <- role, sets skill level
Build a REST endpoint with validation, error handling,            <- task, concrete verb first
and OpenAPI docs for a SaaS startup.                              <- audience, tunes scope
The intended result is a working implementation plus              <- output, the artifact
a short test report.                                              <- acceptance shape
Requirements: reuse existing project patterns;                   <- constraint 1, kills overbuild
keep the diff minimal and reversible.                             <- constraint 2, keeps risk low
Be concrete and end-to-end: produce the artifact,                 <- angle, artifact over plan
not a plan to produce it.
Suggested reasoning effort: low.                                  <- effort, explicit not default
If a minor detail is unspecified, make the best                   <- autonomy, assume-vs-ask rule
professional decision and continue.
Verification: test every important interaction, list what         <- verification, scaled to risk
passed, failed, and unverified, then re-test.
```

Swap one slot at a time: new role, new task, new audience, tighter constraints, higher effort. One-variable edits keep evals honest and make regressions traceable.

---

## Category carousel

> **2,520 prompts, 28 categories, 90 each, all unique with SHA-256 verification.**
> Each file uses collapsible sections. Click a title to expand it top to bottom, then use the copy icon on the inner code block. Text wraps vertically. There is no left to right scrolling.
> Interactive version with search plus prev, next, random, and keyboard support: [`docs/carousel.html`](docs/carousel.html).
> Cinematic version with filters and animations: [live showcase](https://gpt-6-astra-showcase.vercel.app).
> Machine-readable: [`prompts/prompts.jsonl`](prompts/prompts.jsonl), [`prompts/prompts.csv`](prompts/prompts.csv), [`prompts/prompts_index.json`](prompts/prompts_index.json).

| Number | Card | Coverage | Open |
|---|---|---|---|
| 01 | Agentic Coding | Long-horizon builds, refactors, Codex flows, risk-scaled tests | [open](prompts/01-agentic-coding.md) |
| 02 | Computer Use | Forms, calendars, CRM, installs, frontend QA with stop gates | [open](prompts/02-computer-use.md) |
| 03 | Browser Research | Comparisons, timelines, citations, confidence labels | [open](prompts/03-browser-research.md) |
| 04 | Professional Docs | Charters, RFPs, postmortems, statements of work, exec summaries | [open](prompts/04-professional-docs.md) |
| 05 | Spreadsheets | Reconciliation, pricing, cohorts, budgets, validation | [open](prompts/05-spreadsheets-data.md) |
| 06 | Science | Literature synthesis, protocols, power analysis, figure specs | [open](prompts/06-science-research.md) |
| 07 | Defensive Security | Triage, hardening, playbooks, recovery, blue-team only | [open](prompts/07-defensive-security.md) |
| 08 | 3D, Blender, Unreal | Blockout to detail, listing to 3D, lighting, shot planning | [open](prompts/08-3d-blender-unreal.md) |
| 09 | Game Dev | Rail shooters, RTS, deck builders, playtest and fix loops | [open](prompts/09-game-dev.md) |
| 10 | Web Dev | Premium sites, booking flows, SEO, self QA | [open](prompts/10-web-dev.md) |
| 11 | Video | Explainers, shot lists, Final Cut checklists, voiceover timing | [open](prompts/11-video-creation.md) |
| 12 | Audio | Arrangement, synth patches, mix and master delivery | [open](prompts/12-music-audio.md) |
| 13 | Design, Figma | Reference-anchored UI, states, tokens, handoff | [open](prompts/13-design-figma.md) |
| 14 | Technical Writing | Quickstarts, runbooks, decision records, plain language | [open](prompts/14-writing-technical.md) |
| 15 | Creative Writing | Outlines, dialogue, world bibles, revision passes | [open](prompts/15-writing-creative.md) |
| 16 | Business Ops | Inbox triage, CRM dedupe, SOPs, drafts never sent | [open](prompts/16-business-ops.md) |
| 17 | Education | Tutoring, curricula, quizzes with explanations | [open](prompts/17-education.md) |
| 18 | Math | Proofs, counterexamples, verification discipline | [open](prompts/18-math-frontier.md) |
| 19 | Data and Viz | Funnels, A/B readouts, honest charts, metrics dictionaries | [open](prompts/19-data-viz.md) |
| 20 | DevOps | CI triage, Docker, compose, canary, runbooks | [open](prompts/20-devops-terminal.md) |
| 21 | Testing and QA | Risk-scaled tests, browser plans, gates, flake triage | [open](prompts/21-testing-qa.md) |
| 22 | Multi-Agent | Map reduce, critic loops, handoffs, stop policies | [open](prompts/22-multi-agent.md) |
| 23 | Long Context | 1M-token digests, conflict tables, evidence packs | [open](prompts/23-long-context.md) |
| 24 | Structured Outputs | Schemas plus semantic prompts, enums, evidence spans | [open](prompts/24-structured-outputs.md) |
| 25 | Effort Tuning | Low to max routing, evals, cost and latency trade-offs | [open](prompts/25-reasoning-effort.md) |
| 26 | Migration | GPT-5 series to Astra checklist, Responses API, rollback | [open](prompts/26-migration.md) |
| 27 | Prompt Debugging | Stall traces, A/B tests, regression packs, version logs | [open](prompts/27-prompt-debugging.md) |
| 28 | Productivity | Inbox, travel, job search, weekly review | [open](prompts/28-productivity.md) |

Each category file header links Index, Prev, Next, Search, and Carousel, so navigation never dead-ends. The chain is circular from 01 through 28 and back.

---

## How to copy

**Markdown path:**

1. Open any file under `prompts/`, for example [`prompts/08-3d-blender-unreal.md`](prompts/08-3d-blender-unreal.md).
2. Click a prompt title such as `3d-blender-unreal-004`. The section expands downward.
3. Read the full prompt top to bottom. Lines wrap vertically.
4. Click the copy icon at the top right of the inner code block. Paste into ChatGPT Work, Codex, or the API.

**Showcase path:**

1. Open the [live showcase](https://gpt-6-astra-showcase.vercel.app).
2. Type in advanced search, pick the category dropdown, optionally filter by effort, sort, or hit Surprise me.
3. Expand any card downward and press Copy prompt. Clipboard feedback confirms the copy.

**Programmatic path:**

1. Read [`prompts/prompts.jsonl`](prompts/prompts.jsonl) with fields `id`, `category`, `prompt`.
2. Or load [`prompts/prompts.csv`](prompts/prompts.csv) into sheets and filter by category prefix.
3. Or query [`prompts/prompts_index.json`](prompts/prompts_index.json) for id, category, title, task rows.

**Regenerate or verify locally** with `py scripts/generate_prompts.py` followed by `py scripts/verify_prompts.py`. CI runs the same check on every push. Web data rebuilds with `py web/data/build-data.py`.

---

## Advanced 3D with Astra

This hub treats 3D as a first-class pipeline, not a novelty, because the strongest early Astra demos cluster here: Blender blockout to inhabited detail, listing photos to 3D to promo video, palace and streetscape reconstruction, wolf character to Unreal, museum shot planning, bottle-ship Three.js scenes.

**Full advanced playbook:** [`docs/3d-advanced-guide.md`](docs/3d-advanced-guide.md)
**Prompt pack:** [`prompts/08-3d-blender-unreal.md`](prompts/08-3d-blender-unreal.md)
**Visual run-through:** [live showcase 3D pipeline](https://gpt-6-astra-showcase.vercel.app#pipeline)

**Stage-gate pipeline used across the 3D prompts:**

```text
Stage 0 Reference ingest: photos, drawings, dimensions, style refs, unit system, target
platform, GPU budget. Mark what is measured, what is inferred, what is invented.
Stage 1 Blockout: massing, proportions, camera, scale figures. Named collections only.
Stage 2 Structure: topology plan, modular pieces, pivot placement, real-world scale.
Stage 3 Detail pass: lived-in props, edge wear zones, fabric folds, tableware, vegetation.
Prioritize by camera distance.
Stage 4 Materials and UV: PBR slots, texel density targets, procedural against painted
decisions, material naming convention.
Stage 5 Light and camera: key, fill, rim, environment, exposure, white balance, two or
more framings. Keep actors and hero props in frame.
Stage 6 Optimize: poly counts, texture sizes, LOD notes, laptop-GPU fallback.
Stage 7 Export: Blender to Unreal to Three.js settings, units, forward axis, scale factor,
collision, lightmap UV channel.
Stage 8 QA: normals, manifold edges, naming, scale check, camera fly-through, stills from
three angles, defect list ordered by visual impact.
```

**Performance budgets to state in every 3D prompt:**

```text
Hero prop: target quads, max 4K maps, one trim sheet where possible
Full room: target total tris plus texture memory ceiling for the stated GPU
Web embed: Draco or equivalent compression, plus fallback quality tier
Unreal: nanite and lumen posture stated, plus collision complexity
Always list what was decimated, what was kept sharp, and why
```

**Shot-planning mini pattern, used in museum and promo prompts:**

```text
Layout first, then cast, then shot list, then movement book, then coverage check.
For each shot: lens, framing, action beat, in-frame requirement, fallback framing.
Close with a coverage table: shot, covers which story beat, verified or blocked.
```

**Common failure modes and the prompt fix:**

| Failure | Fix embedded in this repo |
|---|---|
| Pretty blockout, empty scene | Require a detail pass with prop counts per zone |
| Unnamed Cube.001 chaos | Require named collections and objects from step one |
| Scale drift between tools | State units, scale factor, forward axis, and a scale-figure check |
| GPU meltdown | State poly and texture budgets plus a fallback tier |
| Actors out of frame | Require a movement book plus per-shot in-frame check |
| One giant unverifiable ask | Split into blockout, detail, light, export, QA with separate Done tables |

---

## Advanced operations

**Effort routing, condensed:**

| Task shape | Start | Escalate when |
|---|---|---|
| CRUD ticket, copy edit, triage | low | Miss with repro, then medium |
| Feature build, refactor, doc digest | medium with planning | Targeted miss with logs, then high |
| Distributed bug, long-horizon agent run | high | Structured miss after two probes, then xhigh |
| Frontier math, hardened security review, week-long build | xhigh | Only with eval harness and cost sign-off, then max |

Measure full-task cost with retries, not list price. Pin effort per task type after evals. Details in [`prompts/25-reasoning-effort.md`](prompts/25-reasoning-effort.md).

**Multi-agent posture:** name when to delegate and when to do directly, define subagent inputs, outputs, and done criteria, require evidence links in handoffs, cap parallelism with rate and cost notes, define conflict resolution, persist notes across compaction. Pack in [`prompts/22-multi-agent.md`](prompts/22-multi-agent.md).

**Long-context posture:** label authoritative against reference sources, state what is stale and what supersedes it, quote with file and section locators, record what was not found, resolve conflicts by recency plus authority, keep working notes searchable. Pack in [`prompts/23-long-context.md`](prompts/23-long-context.md).

**Structured-output posture:** enforce shape with schemas, guide judgment with prompts, close enums with an `unknown` plus reason field, require evidence spans for extracted facts, validate totals, dates, and units. Pack in [`prompts/24-structured-outputs.md`](prompts/24-structured-outputs.md).

**Migration posture:** check interfaces, effort, deprecated params, and cache item by item. Validate single-task cost on local workload. Preserve passing behavior before chasing new capability. Keep a rollback branch until sign-off. Pack in [`prompts/26-migration.md`](prompts/26-migration.md).

**Debugging posture:** quote the exact file and line behind a stall, separate explicit user intent from inferred context, keep failing transcripts verbatim, change one variable per A/B test, add the failure to a regression pack. Pack in [`prompts/27-prompt-debugging.md`](prompts/27-prompt-debugging.md).

---

## Architecture and data flow

How the 2520 prompts flow from generator to every surface:

```text
scripts/generate_prompts.py  (28 categories x 90, deterministic, SHA-256 checked)
  -> prompts/NN-name.md      (collapsible details blocks, circular Prev and Next)
  -> prompts/prompts.jsonl   (id, category, prompt, one row per line)
  -> prompts/prompts.csv     (same rows, spreadsheet friendly)
  -> prompts/prompts_index.json plus prompts_index.json (search indexes)
  -> categories.json         (28-entry manifest with counts)
  -> web/data/build-data.py  (adds effort tags parsed from prompt text)
    -> web/data/prompts.json plus web/data/categories.json (bundled with the app)
      -> Next.js static export (web/out) -> Vercel preview and production
  -> docs/carousel.html      (dependency-free interactive carousel)
scripts/verify_prompts.py plus .github/workflows/verify.yml guard every change
```

Single source of truth is the generator plus `prompts.jsonl`. Everything else derives from it, so counts can never drift between the repo, the carousel, and the showcase.

---

## What people are building

> Verified Sept 3 to 10, 2026. Attribution-first. Inclusion does not mean reproduction. Confidence reflects evidence quality: High means repo or demo plus steps, Medium means social demo without a runnable artifact. Full URLs in `SOURCES.md`.

| Number | Build | Type | Creator and source | Evidence |
|---|---|---|---|---|
| 1 | Survival world in Unreal where Astra agents talk to each other | Unreal plus agents | Matt Shumer, X post | Viral clip, day-long run |
| 2 | Manhattan, street by street, over about a week in Unreal | 3D city | Community demo via minchoi roundup | Clips |
| 3 | Palace of Fine Arts recreated in Blender | Blender | Community demo | Clip |
| 4 | One-shot 3D browser game | Three.js, browser | Community demo | Playable |
| 5 | Zillow listing to 3D house plus promo video, one shot | Listing to 3D to video | Yunfan Ye | Demo video |
| 6 | Steam-train drawing to 3,295 editable Blender objects | Drawing to 3D | Tom Krcha | Demo |
| 7 | Grey-box kart to 3 themed games, pirate, candy, cyberpunk, fewer manual fixes | Unity plus Playco harness | Playco | Report plus clips |
| 8 | Five-minute T-cell lesson from one prompt with Remotion | Education video | Derya Unutmaz | Full video |
| 9 | Minecraft one-shot | Game | Community demo | Clip |
| 10 | 3D iPod-style Mac interface for Codex threads, about 15 minutes | Mac app | Pietro Schirano | Animation plus post |
| 11 | Blender wolf to Unreal in a three-phase job | Blender to Unreal | Matt Wolfe | Video |
| 12 | Six Van Gogh paintings to a walkable Three.js town | 3D web | Peter Gostev | Live scene |
| 13 | ChatPRD product-intelligence pipeline across Intercom, Granola, Linear, GitHub to wiki | Agentic coding | Claire Vo, ChatPRD | Walkthrough |
| 14 | Full-stack frontend tickets closed in a short recording | Computer use plus code | Mehul Mohan | Recording |
| 15 | Fall Guys-style plus Sim City clone prompts | Browser games | Matthew Berman | Prototypes |
| 16 | Halo-style 10v10 shooter through Tesana Game Maker | Game plus multiplayer | Tesana demo | Demo |
| 17 | GTA-style driving sandbox, Astra about 90 minutes in the comparison | Game | Comparison demo | Clips |
| 18 | Bottle-ship Three.js scene with ship, gulls, harbor, reef, plus music | Three.js | Community developer | Demo plus video |
| 19 | Ableton build with synths, parts, full arrangement inside the DAW | Music production | Pietro Schirano | Demo |
| 20 | Final Cut Pro pass with import, sync, grade, timeline | Video edit | Ben Davis | Recording |
| 21 | Call of Duty-style FPS, reshaped between matches, wide reach | FPS prototype | Riley Brown, X post | Four-minute demo |
| 22 | Four games plus Blender and Godot tutorial, space shooter, train FPS, RTS, deck-builder | Games tutorial | Peter Yang, LinkedIn | Long tutorial |
| 23 | Note-taking Mac plus iPhone app polish plus landing page, personal benchmark | Apps | Chris Best | Essay plus apps |
| 24 | Pokemon FireRed in 18 hours 12 minutes, screenshots-first | Game agent | Early-access report | Report |
| 25 | Enterprise ticket, CRM, calendar, and form fills, Sites plus frontend QA | Work plus computer use | OpenAI plus early testers | Docs plus clips |

Social texture from the SignalMelo tracker, about 70 posts on Sept 3 to 4: about 89 percent general shares, 6 percent help questions, 4 percent comparisons, 1 percent complaints, tone about 97 percent neutral. Demos travel farthest. Settled reviews have not landed yet, which is expected on day six.

Related indexes to cross-check: `Anil-matcha/awesome-gpt-6-astra`, `MiaAI-Lab/GPT-6-Astra-100-HTML-Files`, `martindelophy/awesome-gpt-6-astra` plus gallery, MagicCreator Astra gallery, Valyu DEV-25, Vuink demos.

---

## Official resources

- Announcement: `openai.com/index/gpt-6-astra/` - capabilities, rollout, pricing frame
- Work playbook: `openai.com/index/gpt-6-astra-next-generation-work` - ChatGPT Work plus Codex patterns
- Path to Astra: `openai.com/index/path-to-astra/` - Critical threshold plus safeguards
- Safety overview plus System Card: `openai.com/index/safety-overview-gpt-6-astra/` and `deploymentsafety.openai.com/gpt-6-astra`
- API model page: `developers.openai.com/api/docs/models/gpt-6-astra` - effort levels, Responses API, snapshots
- Spec and pricing mirrors: `models.dev/models/openai/gpt-6-astra/` and `llm-stats.com/blog/research/gpt-6-astra-launch`
- Copilot: `github.blog/changelog/2026-09-04-gpt-6-astra-is-generally-available-in-github-copilot/` plus GitHub LinkedIn post
- Encyclopedia entry: `GPT-6_Astra` on Wikipedia - timeline, Stargate 100K-GPU note, looped-transformer note

All URLs plus access dates live in [`SOURCES.md`](SOURCES.md).

---

## Community guides

- Prompting Guide with five behaviors plus production prompt: Promptessor, Sept 4 - initiative, priority, style, delegation, verification
- Build Guide for sites, games, 3D, cinematic, plus iteration loop: AI Leverage, Beehiiv, Sept 4
- Category-5 migration prompts plus async APIs plus cost per task: Meng Li, AI Quill, Sept 6
- Reusable modules plus Responses migration: Tabbit guide mirror
- Slop-word blocklist plus ask-against-act prompts: The Decoder, Sept 5
- Projects, computer use, permissions, AGENTS.md rules, review table: TechTiff, Sept 6
- Six coding tips on effort, anti-overbuild, skills hygiene, visual refs, browser QA: MindStudio, Sept 6
- Twelve paste-ready prompts with goal, inputs, constraints, output, done: LMSpedia, Sept 5
- Early-cases roundup on Blender, Unreal, Ableton, browser patterns: Atoms.dev, Sept 4
- Reviews with ten real-user examples: FavTutor, Sept 4, plus conversation tracker: SignalMelo, Sept 4
- X roundup with ten wild examples: minchoi thread plus mirror, plus FPS report: POPTOPIC on Riley Brown
- Hands-on reports: Claire Vo, Lenny Newsletter, plus Chris Best essay, plus Peter Yang LinkedIn tutorial
- Galleries and lists: MagicCreator Astra gallery, Vuink demos, Valyu DEV-25, martindelophy DEV gallery parser

---

## Safety

- Astra is the first Critical-cybersecurity-capability model under the OpenAI framework. This repo is defensive-only: no exploit development, no safeguard bypasses, no jailbreaks. Category 07 covers triage, hardening, detection, and recovery.
- Computer-use prompts always include stop gates: no send, purchase, book, delete, permission-change, or share without approval. Least-privilege folders, apps, and sites. Evidence logs. PII redaction.
- Enterprise posture: access off by default, restrict sites and apps, manage uploads, downloads, and history, use confirmations plus auto-review of tool calls.
- When a monitor pauses a task, review before continuing. Calibrate controls to reduce friction without widening scope.
- Reporting and safe-use rules live in [`SECURITY.md`](SECURITY.md).

---

## Repo map

```text
gpt-6-astra-awesome/
- README.md, hub plus carousel plus showcase links
- REPO_META.md, description, topics, homepage notes (kept out of this README by request)
- topics.txt, one topic per line
- SOURCES.md, every URL plus accessed date
- LICENSE, CONTRIBUTING.md, SECURITY.md
- categories.json, 28-category manifest
- prompts_index.json, id, category, and task search index
- prompts/
  - 01-agentic-coding.md through 28-productivity.md, 90 prompts each, collapsible
  - prompts.jsonl, prompts.csv, prompts_index.json
  - README.md, prompt-library usage
- docs/
  - carousel.html, interactive carousel with search, copy, prev, next, keyboard
  - 3d-advanced-guide.md, advanced 3D pipeline, budgets, checklists, handoffs
- examples/, six production-grade official-pattern prompts
- web/, Next.js 14 showcase app (static export, deploys from web/ as root)
  - app/, layout, page, global styles
  - components/, loader, canvas, reveals, explorer, showcase sections
  - data/, build-data.py plus generated prompts.json and categories.json
  - out/, static export output after npm run build
- scripts/
  - generate_prompts.py, deterministic 28 times 90 generator
  - verify_prompts.py, SHA-256 uniqueness plus count check
  - patch_nav.py, circular carousel linker
```

---

## Web app manual

**Local development:**

```bash
cd web
npm install
npm run dev
```

**Production check:**

```bash
cd web
npm run build
```

**Data regeneration after prompt edits:**

```bash
cd web
py data/build-data.py
npm run build
```

**Deploy paths:**

1. One-click: use the Deploy button at the top with root directory `web`.
2. Dashboard: import `aniruddhaadak80/gpt-6-astra-awesome` in Vercel, set root directory to `web`, deploy.
3. CLI from an authenticated shell: `cd web`, then `vercel deploy --prod`.
4. Git integration: connect the repo in the Vercel dashboard so every push to `main` ships automatically.

**Design tokens:** obsidian `#070b0e`, card `#111b20`, amber `#f5a524`, signal orange `#f97316`, teal `#2dd4bf`, sky `#38bdf8`, green `#4ade80` for success, red `#f87171` for stop gates. Motion: boot loader with progress, particle canvas, drifting gradient orbs, staggered hero entrance, marquee ticker, scroll reveals, animated counters, accordion cards, hover lifts, back-to-top control. Reduced-motion preferences are respected.

---

## FAQ

**Is GPT-6 Astra publicly available.**
Yes, with rollout gates. API as `gpt-6-astra` since Sept 4, 2026, plus ChatGPT Work, Codex, Copilot, Azure, and Bedrock surfaces. Enterprise access is off by default and paid plans propagate over days.

**Are the 2520 prompts scraped from the community.**
No. They are original curation written to official Astra patterns. Community builds are indexed separately with attribution. The distinction is stated wherever both appear.

**How is uniqueness enforced.**
`scripts/verify_prompts.py` hashes every prompt with SHA-256 and fails below 2520 rows or on any duplicate. CI runs the same gate on push and pull requests.

**Which effort level belongs on a new task.**
Start low for triage and edits, medium with planning for features, high for deep bugs, xhigh for frontier work, max only behind an eval harness with cost sign-off. Details in category 25.

**Why do prompts ask me to stop before sending or deleting.**
Astra can operate tools and files, so every operational prompt carries approval gates for consequential actions. That is deliberate and matches enterprise guidance.

**Can the showcase run offline after build.**
Yes. `npm run build` produces `web/out` with all prompts bundled. Serve that folder statically and search, filters, and copy keep working without network calls.

**How do additions work.**
Add real builds with creator, link, date, and evidence. Add prompts to the matching category file plus `prompts.jsonl`, rebuild web data, run verification, open a pull request.

**What stays out of this repo.**
Scraped dumps without provenance, offensive-security content, jailbreaks, bypasses, live secrets, and copyrighted pastes. Defensive security content with authorization boundaries is welcome.

---

## Changelog

- **v1.2.0, 2026-09-10:** Next.js 14 cinematic showcase with all prompts bundled, advanced search and filters, dropdowns, one-click copy, loader plus particles plus reveals plus counters, static export, live Vercel preview, advanced README pass with badges, benchmarks, anatomy, architecture, FAQ.
- **v1.1.0, 2026-09-10:** Collapsible vertical prompt blocks with circular navigation, advanced 3D guide, expanded operations, machine-readable twins, interactive carousel page, CI verification.
- **v1.0.0, 2026-09-10:** Initial hub with 2520 unique prompts across 28 categories, real builds index, official and community sources, API quickstarts, safety notes.

---

## Contributing

New real build: open a PR adding a row to the builds table plus a line in `SOURCES.md` with creator, link, date, what Astra did, and what the harness did. New prompt: add to the right `prompts/` file plus `prompts.jsonl`, rebuild web data with `py web/data/build-data.py`, then run `py scripts/verify_prompts.py`. No scraped dumps without provenance. No offensive-security prompts. Details in [`CONTRIBUTING.md`](CONTRIBUTING.md).

---

## License and citations

MIT, see [`LICENSE`](LICENSE). Builds and demos belong to their creators, linked in the tables. Model facts and scores are vendor claims, linked in `SOURCES.md`. The prompt library in `prompts/` is original curation for this repo, dated Sept 2026, not a scrape. Cite as: `GPT-6 Astra Awesome Hub - 2,520 Astra-tuned prompts plus verified builds index, accessed 2026-09-10`.

---

<p align="center">
<a href="#carousel-jump-anything-to-anything">Back to carousel</a> -
<a href="https://gpt-6-astra-showcase.vercel.app">Live showcase</a> -
<a href="docs/carousel.html">Interactive carousel</a> -
<a href="prompts/01-agentic-coding.md">Start copying</a> -
<a href="docs/3d-advanced-guide.md">Advanced 3D guide</a>
</p>
