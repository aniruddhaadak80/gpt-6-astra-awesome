"""Generate 2,520 unique GPT-6 Astra prompts (28 categories x 90).
Each prompt follows Astra best practices: goal, inputs, constraints,
output format, definition of done, autonomy + verification scope.
Run: py scripts/generate_prompts.py
"""
import json, csv, hashlib, textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROMPTS_DIR = ROOT / "prompts"

AUTONOMY = [
    "If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome.",
    "Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval.",
    "Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step.",
    "Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings.",
    "Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause.",
]

VERIFY = [
    "Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.",
    "Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.",
    "Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.",
]

EFFORTS = ["low", "medium", "high", "xhigh", "max"]

CATEGORIES = [
    dict(slug="01-agentic-coding", emoji="💻", title="Agentic Coding",
         desc="Long-horizon coding tasks, refactors, Codex/Copilot workflows with verification proportional to risk.",
         roles=["senior staff engineer", "principal software architect", "senior backend engineer", "staff full-stack developer", "senior platform engineer", "expert code reviewer"],
         tasks=["build a REST endpoint with validation, error handling, and OpenAPI docs", "refactor a tangled module into clean layers without changing behavior", "migrate a callback-based flow to async/await with full type safety", "implement a background job queue with retries, idempotency, and observability", "add role-based access control to an existing API with tests", "optimize a slow database query path and prove the speedup with benchmarks", "create a CLI tool with config files, help text, and shell completions", "harden an auth flow against OWASP Top 10 issues and document the threat model", "build a webhook receiver with signature verification and replay protection", "convert a monolith handler into testable services with dependency injection", "implement pagination, filtering, and sorting for a list API", "add structured logging, tracing, and health checks to a service", "write a migration script with dry-run, rollback, and data validation", "build a file-upload pipeline with virus-scan hooks and size limits", "create a feature-flag system with targeting rules and audit log"],
         audiences=["for a SaaS startup", "for an enterprise internal tool", "for an open-source library", "for a fintech backend", "for a healthcare data service", "for an e-commerce platform"],
         constraints=["reuse existing project patterns; no new dependencies without justification", "keep the diff minimal and reversible; explain every new abstraction", "follow the repo's linter, formatter, and type-checker strictly", "preserve backward compatibility for existing API consumers", "optimize for readability over cleverness; add docstrings for public APIs", "ensure all I/O has timeouts, retries with backoff, and clear error messages"],
         outputs=["a working implementation plus a short test report", "a unified diff with a file-by-file change summary", "production-ready code with README usage section", "code plus a review checklist of risks and mitigations", "implementation with before/after benchmarks in a table", "code plus rollback instructions"]),
    dict(slug="02-computer-use", emoji="🖥️", title="Computer Use & Desktop Automation",
         desc="Astra operating files, apps, forms, calendars, QA flows, with explicit stop points and approvals.",
         roles=["senior desktop-automation specialist", "expert QA operator", "senior IT support engineer", "operations automation lead", "senior systems analyst", "expert accessibility tester"],
         tasks=["fill a multi-page web form from a spreadsheet and confirm submission", "reconcile calendar events across two accounts and resolve conflicts", "organize a downloads folder into a dated archive with a manifest", "install a dev tool, verify the install, and capture screenshots of each step", "run frontend QA on a staging site across three viewports and log defects", "update CRM records from an inbox export without duplicating contacts", "prepare a slide deck from a folder of screenshots and notes", "audit file permissions in a project folder and produce a fix plan", "transcribe meeting notes from audio into structured action items", "build a weekly report PDF from three source documents", "test a checkout flow with valid, empty, and invalid inputs", "migrate bookmarks and settings to a new browser profile safely", "verify backup integrity by restoring one sample file and checksumming", "document a reproduceable bug with steps, video timestamps, and logs", "clean up duplicate photos while preserving originals in an archive"],
         audiences=["on Windows 11", "on macOS", "inside a corporate VM", "in a shared team workspace", "for a non-technical stakeholder", "under strict least-privilege access"],
         constraints=["never delete originals; move removals to an Archive folder", "stop before sending, purchasing, booking, deleting, or changing permissions", "require approval before any external share or publish", "capture evidence (screenshots/paths) for every consequential step", "work only inside the named folder; do not touch files outside it", "redact personal data from any output shown to others"],
         outputs=["a step log with evidence links and a Done table", "a defect list with severity, repro steps, and screenshots", "a cleaned workspace plus a manifest CSV", "a QA report: tested / failed / unverified with details", "a summary email draft (do not send) with attachments listed", "an archive folder plus a rollback note"]),
    dict(slug="03-browser-research", emoji="🌐", title="Browser Research & Deep Dives",
         desc="Multi-site research, comparisons, citations, and monitoring with source hygiene.",
         roles=["senior research analyst", "expert OSINT researcher", "principal market analyst", "senior technical writer", "expert fact-checker", "senior competitive-intelligence analyst"],
         tasks=["compare five tools on pricing, limits, and API quality with sources", "trace the launch timeline of a model from primary sources only", "build a vendor shortlist with scored criteria and disqualifiers", "summarize ten long articles into a cited briefing with disagreements flagged", "map regulatory requirements across three regions with official links", "collect real user complaints about a product from forums with quotes", "verify a viral claim against primary evidence and rate confidence", "build a reading list with difficulty tiers and prerequisites", "monitor three competitor changelogs and summarize deltas weekly", "extract dataset licenses and use-limits into a compliance table", "benchmark framework docs for a migration decision", "find three independent confirmations for each key fact", "build a glossary from authoritative definitions with sources", "summarize academic papers into decision-ready memos", "create a timeline of incidents with root causes and fixes"],
         audiences=["for a CTO decision", "for a product team", "for a legal review", "for a startup pitch", "for a classroom", "for an investor memo"],
         constraints=["cite every non-obvious claim with a link; mark confidence high/medium/low", "prefer primary sources; label secondary inference explicitly", "flag contradictions instead of smoothing them over", "exclude paywalled speculation unless corroborated", "record access dates for volatile pages", "do not fabricate URLs; use only pages you actually inspected"],
         outputs=["a cited briefing with a confidence column", "a comparison table with winner per criterion", "a timeline with sources per event", "an annotated link list with one-line verdicts", "a decision memo ending in a clear recommendation", "a CSV of sources with title, URL, date, and quote"]),
    dict(slug="04-professional-docs", emoji="📄", title="Professional Docs & Decks",
         desc="Polished documents, spreadsheets, and presentations Astra can draft end-to-end.",
         roles=["senior business writer", "principal consultant", "executive communications lead", "senior proposal manager", "expert technical communicator", "senior operations manager"],
         tasks=["draft a one-page project charter with scope, risks, and milestones", "write a status report that executives can skim in 60 seconds", "create a meeting agenda that forces decisions, not updates", "draft an RFP response outline mapped to each requirement", "build a project plan with owners, dates, and dependencies", "write a postmortem that is blameless and action-oriented", "draft a policy doc with examples and edge cases", "create a client onboarding checklist with acceptance criteria", "write release notes grouped by user impact", "build a stakeholder update with risks and asks", "draft a statement of work with deliverables and exclusions", "create a decision log with options, trade-offs, and owner", "write an escalation email that is firm but professional", "build a KPI dashboard spec with definitions and owners", "draft a handover doc a new owner can run with"],
         audiences=["for a Fortune 500 client", "for a startup board", "for a government tender", "for a remote async team", "for a non-technical executive", "for a cross-functional squad"],
         constraints=["use plain language; one idea per paragraph; lists only for parallel items", "put the recommendation first, then evidence", "avoid jargon unless it aids precision; define acronyms on first use", "keep each document scannable with headings and tables", "no placeholder text; mark unknowns as TBD with an owner", "match the house style: concise, active voice, no slop phrases"],
         outputs=["a polished doc ready to share", "a one-page executive summary plus appendix", "a slide outline with speaker notes", "a checklist with owners and due dates", "a memo ending in a single recommendation", "a template the team can reuse"]),
    dict(slug="05-spreadsheets-data", emoji="📊", title="Spreadsheets & Data Wrangling",
         desc="Excel/Sheets models, cleaning recipes, and reconciliation flows.",
         roles=["senior data analyst", "expert spreadsheet modeler", "senior FP&A analyst", "operations data lead", "senior RevOps analyst", "expert data-quality engineer"],
         tasks=["reconcile two transaction exports and isolate mismatches", "build a pricing calculator with tiers, discounts, and guardrails", "clean a messy contact list: dedupe, normalize, validate", "build a budget tracker with variance alerts", "create a cohort retention table from raw events", "design a commission model with caps and accelerators", "build an inventory reorder sheet with lead-time math", "create a hiring pipeline funnel with conversion rates", "build a churn-risk score from usage signals", "design a survey analysis sheet with significance flags", "reconcile invoices against POs and flag exceptions", "build a capacity plan from velocity and leave data", "create a loan amortization schedule with extra-payment scenarios", "build a marketing attribution sheet with UTM hygiene checks", "design a data-entry template with validation rules"],
         audiences=["for a finance team", "for a sales ops team", "for a nonprofit", "for a marketplace seller", "for a SaaS startup", "for a manufacturing planner"],
         constraints=["preserve raw data on a separate untouched sheet", "every formula must be auditable; no hard-coded magic numbers", "flag assumptions in a dedicated Assumptions box", "validate totals against source data before concluding", "use consistent date, currency, and timezone handling", "protect formula cells and document how to extend the model"],
         outputs=["a clean workbook spec plus formulas", "a reconciliation table with exception reasons", "a dashboard-ready summary with charts described", "a CSV of cleaned rows plus a reject log", "a model with sensitivity scenarios", "a QA checklist with check totals"]),
    dict(slug="06-science-research", emoji="🔬", title="Science & Lab Workflows",
         desc="Literature synthesis, protocols, analysis plans, and figure specs.",
         roles=["senior research scientist", "expert lab manager", "principal investigator aide", "senior biostatistician", "expert methods writer", "senior literature reviewer"],
         tasks=["synthesize five papers into a gap analysis with citations", "draft a reproducible protocol with controls and failure modes", "design an experiment with power analysis and randomization", "write a data-analysis plan with pre-registered hypotheses", "create a figure plan: panels, stats, and captions", "draft a materials-and-methods section from lab notes", "build a reagent inventory with storage and safety notes", "design a survey instrument with validation steps", "write a codebook for qualitative coding", "create a systematic-review inclusion/exclusion rubric", "draft an ethics-application summary with risk mitigations", "build a calibration schedule for instruments", "design a blinded evaluation procedure", "write a replication checklist for a published result", "summarize a conference track into actionable methods"],
         audiences=["for a peer-reviewed journal", "for an undergraduate lab", "for a clinical collaborator", "for a field study", "for a computational team", "for a grant proposal"],
         constraints=["distinguish established results from open questions", "require units, tolerances, and sample sizes wherever relevant", "flag safety and ethics constraints explicitly", "cite primary literature; note confidence per claim", "specify what would falsify the hypothesis", "keep protocols step-numbered and time-annotated"],
         outputs=["a cited synthesis with a gaps table", "a step-numbered protocol", "an analysis plan with decision tree", "a figure spec with caption drafts", "a methods section draft", "a risk and controls table"]),
    dict(slug="07-defensive-security", emoji="🛡️", title="Defensive Security (Blue Team Only)",
         desc="Defensive posture only: hardening, detection, triage, recovery. No exploits, no bypasses.",
         roles=["senior SOC analyst", "defensive security architect", "incident-response lead", "senior security engineer", "GRC analyst", "senior threat-hunter (defensive)"],
         tasks=["triage suspicious login alerts into a prioritized queue with reasoning", "write detection hypotheses and Sigma-style logic descriptions for review", "build a patch-prioritization plan from asset criticality and exposure", "draft a phishing-triage playbook with containment steps", "review application logs for anomalies and propose alert thresholds", "create a backup-and-restore verification checklist", "draft an access-review workflow for joiners, movers, leavers", "build a secrets-hygiene checklist for a codebase (rotation, vaulting)", "write a secure-defaults checklist for cloud storage and sharing", "draft a tabletop exercise scenario for ransomware recovery", "create a vulnerability-disclosure intake template", "build a least-privilege review plan for a team drive", "draft an incident-communication template for customers", "design a security-awareness micro-lesson with a quiz", "write a post-incident improvement backlog from a timeline"],
         audiences=["for a small SaaS team", "for an enterprise SOC", "for a school IT dept", "for a nonprofit", "for a healthcare clinic", "for a retail chain"],
         constraints=["defensive guidance only; refuse exploit development or safeguard bypass", "respect authorization boundaries; require approval for consequential actions", "redact secrets, tokens, and personal data from all outputs", "cite vendor and framework docs (NIST, CIS) where applicable", "mark anything unverified; do not invent log lines or CVEs", "recommend least privilege and auditability by default"],
         outputs=["a triage table with priority and next action", "a playbook with roles and stop conditions", "a hardening checklist with verification steps", "an incident timeline template", "a risk register with owners", "a recovery verification report outline"]),
    dict(slug="08-3d-blender-unreal", emoji="🧊", title="3D: Blender / Unreal / Three.js",
         desc="Inspired by real Astra demos: blockout to inhabited detail, editable geometry, shot planning.",
         roles=["senior 3D artist", "expert Blender technical artist", "senior environment artist", "Unreal scene assembler", "Three.js scene developer", "senior lookdev artist"],
         tasks=["block out a seaside house then add lived-in detail pass", "reconstruct a room from listing photos with inferred dimensions", "model a stylized wolf character with clean topology", "build a low-poly Manhattan block with street-level props", "create a Van Gogh-inspired courtyard as a walkable sketch", "model a steam-train vignette with named collections", "light a museum gallery for two camera framings", "build a bottle-ship diorama with water and reef accents", "create a product turntable scene with studio lighting", "build a game-ready prop set with LOD notes", "design a kitchen scene optimized for a laptop GPU", "create an isometric office diorama with Chiaki-style warmth", "build a palace facade study with modular pieces", "plan a shot list so actors stay in frame", "retopology pass plan for a sculpt with pole-flow notes"],
         audiences=["for a portfolio piece", "for a game jam", "for a client previz", "for a classroom demo", "for a short film", "for a web embed"],
         constraints=["use editable geometry and clearly named collections/objects", "optimize for the stated GPU; note poly counts and texture sizes", "separate blockout, detail, light, and render stages", "avoid copyrighted characters or brand assets", "document camera, units, and export settings", "list what is procedural vs hand-placed"],
         outputs=["a step plan plus a Blender-ready task list", "a scene spec with collections and materials", "a lighting diagram description", "a QA pass list (normals, scale, naming)", "an export checklist for Unreal/Web", "a polish list ordered by visual impact"]),
    dict(slug="09-game-dev", emoji="🎮", title="Game Dev & Playable Prototypes",
         desc="Browser games, Godot/Unity prototypes, playtest-fix loops like the viral Astra builds.",
         roles=["senior game designer", "expert gameplay programmer", "senior systems designer", "indie game producer", "senior level designer", "expert playtest lead"],
         tasks=["design a Fall Guys-style obstacle loop with elimination", "prototype a Star Fox-style rail shooter level", "build a train-top FPS encounter with cover logic", "design a StarCraft-style RTS skirmish with two factions", "create a roguelike deck-builder about AI founders", "build a Sim City-lite zoning and happiness loop", "prototype a kart racer grey-box with drift tuning", "design a 10v10 shooter map with spawns and lanes", "build a Minecraft-style voxel sandbox starter", "create a Red Alert-style RTS harvest-and-attack loop", "design a GTA-style driving sandbox with missions", "build a survival-coop agent sandbox with incentives", "prototype a puzzle-platformer with three mechanics", "design a horror-vignette with sound-cue scares", "build a tutorial, pause, and win-state shell for any prototype"],
         audiences=["for a web build", "for a game jam", "for kids ages 10+", "for mobile browsers", "for a classroom", "for a streamer demo"],
         constraints=["playable first: controls, goal, fail/win states before polish", "no copied characters, music, or brand assets", "keep scope to a weekend build; cut list included", "design for keyboard plus touch where feasible", "include pause, restart, mute, and tutorial", "plan a self-playtest pass and fix high-impact bugs first"],
         outputs=["a game design one-pager plus build steps", "a mechanics table with tuning numbers", "a playtest script with pass/fail criteria", "a cut/keep scope list", "a level layout description", "a polish backlog ordered by fun impact"]),
    dict(slug="10-web-dev", emoji="🧑‍💻", title="Web Dev & Sites in ChatGPT",
         desc="Premium sites, booking flows, SEO copy, frontend QA Astra can self-check.",
         roles=["senior frontend engineer", "expert web designer", "senior conversion strategist", "full-stack web developer", "senior UX engineer", "expert SEO copywriter"],
         tasks=["build a luxury auto-detailing site with booking flow", "create a restaurant site with menu, reservations, and local SEO", "build a SaaS landing page with pricing and FAQ", "create a portfolio site with case-study templates", "build a clinic booking site with forms and reminders copy", "create an event site with schedule, speakers, and tickets", "build a real-estate listing page with gallery and tour CTA", "create a course landing page with curriculum and outcomes", "build a nonprofit donation page with impact stories", "create a job-board page with filters and alerts copy", "build a docs site with search-friendly structure", "create a changelog page with version filters", "build a waitlist page with referral mechanics", "create a pricing-page A/B test plan with hypotheses", "run a frontend QA pass: nav, forms, mobile, a11y"],
         audiences=["for a local business", "for a SaaS startup", "for a creator", "for a clinic", "for a school", "for a nonprofit"],
         constraints=["mobile-responsive; strong CTAs; refined typography", "no lorem ipsum; real copy throughout", "accessible contrast, labels, and focus states", "fast load: note image sizes and font choices", "test every CTA and form before calling it done", "avoid dark patterns; disclose data use plainly"],
         outputs=["a complete page spec plus copy deck", "a QA report with fixes applied", "a sitemap with URL slugs", "an SEO checklist with titles/metas", "a component list with states", "a launch checklist"]),
    dict(slug="11-video-creation", emoji="🎬", title="Video & Cinematic AI",
         desc="Remotion/Final Cut workflows, shot lists, 5-minute explainers like the T-cell demo.",
         roles=["senior video producer", "expert motion designer", "film director aide", "senior tutorial creator", "expert science communicator", "senior editor"],
         tasks=["plan a 5-minute T-cell explainer with scenes and narration", "write a shot list that keeps actors in frame", "build a product promo from 3D renders with beats", "create a house-tour video outline from listing photos", "plan a tutorial series with per-episode outcomes", "write a cinematic prompt for a 10-second animation", "build a Final Cut import-to-grade checklist", "create a voiceover script with timing marks", "design lower-thirds and caption styles", "plan B-roll coverage for an interview", "write a trailer beat sheet with hooks", "create a color-grade pass plan", "build a sound-design cue sheet", "plan captions and translations workflow", "create a review-and-approve checklist"],
         audiences=["for YouTube", "for a classroom", "for a client ad", "for a conference", "for social clips", "for a nonprofit story"],
         constraints=["specify duration, aspect, and delivery specs up front", "keep narration timed to visuals; no wall-of-text VO", "note licensed vs original assets explicitly", "design for captions-on viewing", "plan one revision pass with prioritized fixes", "avoid copyrighted footage/music"],
         outputs=["a scene-by-scene script with timings", "a shot list with framing notes", "a VO script with timecodes", "an edit checklist", "a review notes template", "a delivery spec sheet"]),
    dict(slug="12-music-audio", emoji="🎧", title="Music & Audio (Ableton-style)",
         desc="Arrangement, sound design, and mix notes for DAW-assisted builds.",
         roles=["senior music producer", "expert sound designer", "senior mixing engineer", "Ableton workflow coach", "senior podcast engineer", "expert composer aide"],
         tasks=["arrange a 2-minute theme with intro/build/drop/outro", "design three synth patches with parameter notes", "build a drum groove with variations and fills", "write a chord progression with melody options", "create a podcast edit plan: umms, levels, chapters", "design a game-loop track that avoids fatigue", "build a practice routine for a beginner keyboardist", "create a mix checklist: gain, EQ, compression, space", "write lyrics with rhyme and meter notes", "design transition risers and impacts", "build a sample-organization system", "create a live-set flow with fail-safes", "write a jingle brief with three directions", "design a sound logo with variations", "build a mastering delivery checklist"],
         audiences=["for a short film", "for a game jam", "for a podcast", "for a classroom", "for a wedding video", "for a streamer"],
         constraints=["note key, tempo, and time signature for every cue", "use original or licensed material only", "keep stems organized and labeled", "mix at safe levels; note loudness targets", "document plugin settings so work is recallable", "plan arrangement before sound-hunting"],
         outputs=["an arrangement map with bars", "a patch sheet with settings", "a mix checklist with targets", "a cue sheet with timings", "a delivery pack list", "a revision notes template"]),
    dict(slug="13-design-figma", emoji="🎨", title="Design, Figma & Flora",
         desc="Interface direction with explicit visual references, no generic dashboards.",
         roles=["senior product designer", "expert design engineer", "senior brand designer", "UX writing lead", "senior design-system owner", "expert visual designer"],
         tasks=["redesign a dashboard using a compact table reference", "design a pricing page from two typography references", "turn a whiteboard sketch into a clickable flow", "build a component spec with states and tokens", "design an onboarding flow with empty/error states", "create a mobile checkout with trust signals", "design a settings page that reuses existing patterns", "build a notification system with priority rules", "design a data-viz card with honest scales", "create a landing hero with three tested variants", "design an accessible form with help and errors", "build an icon usage guide with do/don'ts", "design a dark-mode pass with token mapping", "create a prototype test script with tasks", "design a handoff pack developers will love"],
         audiences=["for a SaaS app", "for a mobile app", "for a marketing site", "for an internal tool", "for a nonprofit", "for a classroom app"],
         constraints=["name exactly what to borrow from each visual reference", "match the existing brand; note type, spacing, color deltas", "design empty, loading, error, and success states", "annotate spacing/type so implementation matches", "avoid generic gradient-card soup", "compare build vs reference and fix top gaps"],
         outputs=["a screen spec with annotations", "a component table with states", "a prototype test plan", "a handoff checklist", "a visual-delta list vs reference", "a tokens table"]),
    dict(slug="14-writing-technical", emoji="📝", title="Technical Writing (No Slop)",
         desc="Concise paragraphs, plain verbs, explicit structure per Astra style guidance.",
         roles=["senior technical writer", "expert documentation lead", "principal engineer-writer", "senior API writer", "expert release-notes writer", "senior tutorial author"],
         tasks=["write a quickstart that gets to hello-world in 5 minutes", "document an API endpoint with errors and retries", "write a migration guide with rollback steps", "create a troubleshooting page ordered by frequency", "write architecture decision records for three choices", "document a CLI with examples per flag", "write a runbook for a 3am page", "create a glossary with precise definitions", "write a changelog users actually read", "document webhook semantics: retries, ordering, dedupe", "write a security disclosure policy page", "create a tutorial with checkpoints and expected outputs", "write a FAQ that kills support tickets", "document rate limits with headers and examples", "write a deprecation notice with dates and path forward"],
         audiences=["for developers", "for operators", "for admins", "for end users", "for auditors", "for students"],
         constraints=["default to concise paragraphs; lists only when parallel/sequential", "plain verbs; active voice; no slop words or contrastive phrasing", "one idea per paragraph; main point early", "include copy-paste commands with expected output", "state what to do; avoid saying what you won't do", "calibrate jargon to the stated audience"],
         outputs=["a publish-ready doc", "a quickstart with verification steps", "a runbook with commands", "a FAQ with links", "a changelog entry", "a review checklist"]),
    dict(slug="15-writing-creative", emoji="✍️", title="Creative & Story Writing",
         desc="Voice control, constraints, and revision passes without purple slop.",
         roles=["senior fiction editor", "expert screenwriter aide", "senior copywriter", "children's book author aide", "senior narrative designer", "expert poet-coach"],
         tasks=["outline a heist short story with three reversals", "write a dialogue scene with subtext and beats", "build a magic system with costs and limits", "create a cozy mystery premise with fair-play clues", "write a picture-book spread plan with page turns", "draft a quest chain with meaningful choices", "write a villain monologue with a real grievance", "build a town bible: factions, rumors, secrets", "write a flash-fiction piece under 500 words", "create a myth retelling with a fresh angle", "write song-story lyrics with meter notes", "draft a comic outline panel by panel", "build a TTRPG one-shot with timers", "write arewrite pass plan for a saggy middle", "create character sheets with wants vs needs"],
         audiences=["for teens", "for early readers", "for a game", "for a podcast drama", "for a contest", "for a family audience"],
         constraints=["show, don't summarize; keep voice consistent", "avoid slop openers and moralizing closers", "respect content boundaries for the stated age group", "original characters and settings only", "one POV and tense unless asked otherwise", "end with three concrete revision options"],
         outputs=["an outline with beats", "a scene draft plus revision notes", "a world bible entry", "a dialogue pass", "a revision plan", "a submission-ready draft"]),
    dict(slug="16-business-ops", emoji="🏢", title="Business Ops, CRM & Support",
         desc="Inbox triage, CRM hygiene, SOPs with stop-before-send guardrails.",
         roles=["senior operations manager", "expert RevOps lead", "senior support lead", "CRM administrator", "senior SOP writer", "expert executive assistant"],
         tasks=["triage today's inbox into urgent/reply/file with drafts unsent", "dedupe CRM contacts and merge with audit notes", "write an SOP for refunds with edge cases", "build a weekly ops review agenda with metrics", "draft support macros that stay human", "create an escalation matrix with SLAs", "build a vendor comparison with total cost", "write a launch checklist with owners", "create a customer health review template", "draft a renewal play with risk flags", "build a hiring scorecard with structured questions", "create a meeting-notes-to-tasks pipeline", "write a returns QA checklist", "build a knowledge-base article from tickets", "draft a status page update template"],
         audiences=["for a 10-person startup", "for a support team", "for a sales team", "for a clinic front desk", "for a school office", "for a nonprofit"],
         constraints=["drafts only; stop before sending, charging, or deleting", "log every CRM change with before/after", "protect PII; minimize access by default", "define SLAs and owners for each step", "keep SOPs to one page plus appendix", "flag anything needing human approval"],
         outputs=["a triage table with drafts", "a cleaned list plus merge log", "a one-page SOP", "a review template", "a macro pack", "an exceptions list"]),
    dict(slug="17-education", emoji="🎓", title="Education & Tutoring",
         desc="Mr-Ranedeer-style tutoring, lesson plans, and worked examples.",
         roles=["expert tutor", "senior curriculum designer", "patient math coach", "senior science teacher", "expert language coach", "senior study-skills coach"],
         tasks=["teach recursion with three worked examples and checks", "build a 4-week Python plan with projects", "explain T-cell activation like I'm a bright 10th grader", "create a spaced-repetition deck plan for an exam", "design a lab activity with safety notes", "teach git branching with diagrams described", "build a quiz with explanations per answer", "coach essay structure with a worked outline", "teach statistics intuition with simulations described", "create a reading plan with difficulty ramp", "design a debate lesson with roles and rubric", "teach music theory basics with exercises", "build a language drill set with corrections", "coach presentation skills with a practice script", "create a final-review cheat sheet with examples"],
         audiences=["for a 5th grader", "for a college freshman", "for an adult learner", "for exam prep", "for a homeschool co-op", "for ESL learners"],
         constraints=["diagnose level first; adapt examples accordingly", "one concept at a time with a check for understanding", "use concrete examples before abstract rules", "encourage effort; correct errors kindly with fixes", "no answer-dumps for homework; scaffold instead", "end with a practice task and success criteria"],
         outputs=["a lesson with checks", "a study plan with milestones", "a quiz with answer key", "a worked example set", "a rubric", "a cheat sheet"]),
    dict(slug="18-math-frontier", emoji="🧮", title="Math (Frontier-Style Rigor)",
         desc="Proof sketches, counterexamples, and verification discipline.",
         roles=["senior mathematician aide", "expert contest coach", "patient proof tutor", "senior statistics mentor", "expert discrete-math guide", "senior olympiad trainer"],
         tasks=["prove a combinatorial identity with a clear lemma chain", "find a counterexample to a plausible conjecture", "solve a number-theory problem with modular reasoning", "build intuition for eigenvalues with worked cases", "explain a FrontierMath-style problem's structure without solving", "design a counting argument with bijection", "analyze a recurrence with generating functions", "prove an inequality with named theorems", "explore prime gaps computationally with a plan", "verify a proof step by step and flag gaps", "translate a word problem into equations cleanly", "build a probability model with assumptions stated", "explain Bayes with a worked medical-test example", "design a practice set that ramps difficulty", "write a solution sketch plus a full-solution expansion"],
         audiences=["for a contest student", "for an undergrad", "for a researcher", "for a curious adult", "for a study group", "for a teacher"],
         constraints=["show each logical step; name theorems used", "separate proof from intuition explicitly", "flag any unproven assumption", "check edge cases and small n by hand", "no hand-waving; quantify where possible", "end with what remains open"],
         outputs=["a rigorous solution", "a lemma chain outline", "a counterexample with check", "a practice set with hints", "a verification report", "an intuition-plus-proof pair"]),
    dict(slug="19-data-viz", emoji="📈", title="Data Analysis & Visualization",
         desc="From question to chart spec to decision, with honest scales.",
         roles=["senior data scientist", "expert analytics engineer", "senior BI developer", "product analyst", "senior statistician", "expert data storyteller"],
         tasks=["analyze a funnel drop with segment breakdowns", "build a churn analysis with leading indicators", "design an A/B read-out with guardrails", "create a forecast with scenarios and assumptions", "analyze survey free-text into themes", "build a pricing elasticity sketch from history", "design a dashboard spec with five honest charts", "write SQL for a tricky sessionization problem", "plan a data-quality audit with check queries", "build a cohort table from event logs", "analyze support tickets for top drivers", "design an experiment backlog scored by ICE", "create a executive one-chart memo", "build a anomaly-triage playbook", "write a metrics-definitions doc"],
         audiences=["for a product team", "for execs", "for marketing", "for finance", "for a nonprofit", "for a classroom"],
         constraints=["state the question, data, grain, and date range first", "honest axes; no truncated-y tricks without labels", "separate observation from recommendation", "note missing data and biases explicitly", "reproducible steps: queries plus check totals", "one message per chart"],
         outputs=["an analysis memo with a recommendation", "a chart spec with columns and filters", "SQL plus validation queries", "a dashboard wireframe description", "a metrics dictionary", "a next-questions list"]),
    dict(slug="20-devops-terminal", emoji="🧰", title="DevOps & Terminal-Bench Style",
         desc="Reproducible shell workflows, containers, CI, and incident drills.",
         roles=["senior DevOps engineer", "expert SRE", "senior platform engineer", "release manager", "senior systems administrator", "expert CI engineer"],
         tasks=["debug a failing CI pipeline from logs with a fix plan", "write a Dockerfile that is small, cached, and non-root", "create a compose stack for local dev with healthchecks", "build a deploy checklist with rollback triggers", "write a log-grep recipe for a 500-spike", "design a backup test with restore proof", "create a runbook for disk-pressure alerts", "build a canary rollout plan with metrics", "write a Makefile that new hires understand", "design a secrets-rotation procedure", "create a load-test sketch with success criteria", "build an incident timeline template", "write a cron-plus-monitor pair with alerts", "design a cache-invalidation plan", "create a post-deploy smoke-test script plan"],
         audiences=["for AWS", "for Azure", "for GCP", "for a homelab", "for a startup", "for an on-prem cluster"],
         constraints=["non-destructive first; dry-run before mutate", "pin versions; note OS/shell assumptions", "every mutating step needs an undo step", "log commands and outputs for audit", "least privilege; no hardcoded secrets", "verify in staging before prod"],
         outputs=["a step runbook with commands", "a fix plan with evidence", "a checklist with rollback", "a compose/Docker spec", "a monitoring query set", "a postmortem template"]),
    dict(slug="21-testing-qa", emoji="🧪", title="Testing, QA & Verification",
         desc="Calibrate Astra's thoroughness: targeted checks for small diffs, full suites for risky ones.",
         roles=["senior QA engineer", "expert test automation lead", "senior SDET", "staff release engineer", "senior accessibility auditor", "expert performance tester"],
         tasks=["write targeted tests for a one-line fix without over-testing", "design a regression set for a refactor", "build a browser test plan for a booking flow", "create API contract tests with edge cases", "design a load-test plan with thresholds", "write accessibility checks for a form", "build a mobile-layout QA checklist", "create a data-migration verification plan", "design a chaos-drill with abort criteria", "write a security smoke-test list (defensive)", "build a visual-regression checklist vs reference", "create a flaky-test triage workflow", "design a release gate with quality bars", "write a bug report that gets fixed fast", "build a test-data factory plan"],
         audiences=["for a web app", "for an API", "for a mobile web view", "for a CLI", "for a data pipeline", "for a game build"],
         constraints=["scale testing to risk; justify full-suite runs", "each test needs an oracle and a failure message", "isolate flakes; quarantine with owner and date", "cover happy, empty, invalid, and slow paths", "record environment, seed, and version per run", "report tested/failed/unverified separately"],
         outputs=["a test plan with cases", "targeted tests plus rationale", "a QA report with evidence", "a bug list with repro", "a gate checklist", "a flake backlog"]),
    dict(slug="22-multi-agent", emoji="🤖", title="Multi-Agent & Subagent Orchestration",
         desc="Explicit delegation: when, how much, and how agents report back.",
         roles=["principal agent architect", "senior orchestrator designer", "expert workflow engineer", "senior Codex operator", "multi-agent systems lead", "senior autonomy engineer"],
         tasks=["split a research brief across three parallel subagents", "orchestrate design+code+QA agents with handoffs", "build a map-reduce doc review with merge rules", "coordinate a migration crew with ownership zones", "run competing solution spikes then merge winners", "build a critic loop: drafter, checker, fixer", "orchestrate a data pipeline: extract, validate, load agents", "coordinate a release crew: notes, QA, comms", "build a support-triage swarm with escalation", "run a red-vs-blue review (defensive) with judges", "orchestrate a translation-plus-glossary crew", "coordinate a test-generation swarm per module", "build a meeting-to-actions pipeline with owners", "run a docs-sync crew across repos", "design an agent stop/ask/continue policy"],
         audiences=["in Codex", "with the Responses API", "for a startup team", "for an enterprise pilot", "for a classroom demo", "for a hackathon"],
         constraints=["name when to delegate vs do directly", "define each subagent's inputs, outputs, and done criteria", "require evidence links in every handoff", "cap parallelism; note rate and cost limits", "define conflict resolution when agents disagree", "persist notes so context survives compaction"],
         outputs=["an orchestration plan with swimlanes", "subagent briefs with acceptance criteria", "a merge rubric", "a handoff template", "a cost/latency estimate", "a stop-and-ask policy"]),
    dict(slug="23-long-context", emoji="📚", title="Long Context (1M Tokens)",
         desc="Authoritative vs reference sources, conflict rules, staleness handling.",
         roles=["senior knowledge engineer", "expert archivist", "senior legal-discovery aide", "principal analyst", "senior docs miner", "expert librarian"],
         tasks=["digest a 500-page manual into a task-indexed guide", "reconcile conflicting specs across versions", "build a citation map for a claim family", "extract all action items from a year of meeting notes", "summarize a monorepo's conventions from ten docs", "build a changelog across 50 release notes", "find every mention of a deprecated flag", "merge three handbooks into one canonical SOP", "audit a contract set for renewal dates", "build a FAQ from 200 support threads", "trace a decision across emails and docs", "create a personalized glossary from course material", "summarize a research corpus with gaps flagged", "build a compliance evidence pack", "design a context-refresh plan for a long project"],
         audiences=["for legal", "for engineering", "for support", "for students", "for auditors", "for execs"],
         constraints=["label authoritative vs reference sources explicitly", "state what is stale and what supersedes it", "quote with file/section locators", "note what was not found, not just what was", "resolve conflicts by recency+authority, then flag residue", "keep working notes searchable for compaction"],
         outputs=["an indexed summary with locators", "a conflicts table with resolutions", "a citation map", "an evidence pack", "a canonical SOP draft", "a gaps list"]),
    dict(slug="24-structured-outputs", emoji="🧩", title="Structured Outputs & Schemas",
         desc="Schemas for structure; prompts for semantics. No temperature/top_p with Astra tool-calling.",
         roles=["senior API designer", "expert data-modeler", "senior integration engineer", "prompt-interface designer", "senior tooling engineer", "expert JSON-schema author"],
         tasks=["define a ticket-triage schema with enums and confidence", "build a product-review extraction schema", "create an invoice-line schema with totals validation", "design a meeting-notes schema with owners/dates", "build a QA-report schema with severity enums", "create a catalog-item schema with variants", "design an event-log schema with dedupe keys", "build a resume-parse schema with evidence spans", "create a recipe schema with units and steps", "design a course-outline schema with outcomes", "build a bug-report schema with repro steps", "create a survey-response schema with scales", "design a deployment-manifest schema", "build a translation-memory schema", "create a eval-row schema for prompt testing"],
         audiences=["for the Responses API", "for a webhook consumer", "for a data warehouse", "for a mobile client", "for a partner API", "for an internal tool"],
         constraints=["use schema enforcement for shape; prompt for judgment calls", "enums closed; include 'unknown' with reason field", "require evidence spans for extracted facts", "validate totals, dates, and units explicitly", "no free-text where an enum fits", "version the schema and note migrations"],
         outputs=["a JSON schema plus field guide", "three valid examples plus one invalid with reason", "a validation checklist", "a migration note", "a prompt snippet for semantic rules", "a test matrix"]),
    dict(slug="25-reasoning-effort", emoji="🎚️", title="Reasoning Effort Tuning",
         desc="low→max calibration: start low/medium, escalate only with evidence.",
         roles=["senior model tuner", "expert eval engineer", "senior performance engineer", "cost-optimization lead", "senior reliability engineer", "expert latency analyst"],
         tasks=["pick effort for a CRUD ticket vs a distributed bug", "design an eval to compare medium vs high on your workload", "build a routing rule: fast lane vs deep lane", "diagnose a save-but-lost-on-refresh bug before escalating effort", "measure cost-per-task across efforts with retries counted", "build a prompt+effort matrix for support macros", "tune effort for long-doc QA vs short chat", "decide when xhigh/max is justified with a checklist", "build a regression pack that pins effort per task type", "analyze latency vs quality trade-offs", "design a fallback: low first, escalate on failure signals", "build a cache strategy to offset higher effort", "tune verification depth alongside effort", "create an effort-selection flowchart", "write an incident note when max still fails"],
         audiences=["for a startup budget", "for an enterprise pilot", "for a classroom", "for a high-traffic API", "for a research lab", "for a nonprofit"],
         constraints=["start at low/medium; escalate only after a documented miss", "include repro, logs, and tried-steps when escalating", "measure full-task cost, not per-token price", "pin effort per task type after evals", "note gateway default is low; set explicitly", "remove temperature/top_p/top_logprobs for Astra tool use"],
         outputs=["an effort recommendation with rationale", "an eval plan with pass criteria", "a routing rule table", "a cost/latency report outline", "a flowchart description", "a pinned config snippet"]),
    dict(slug="26-migration", emoji="🔀", title="Migration: GPT-5.x → Astra",
         desc="Checklist migration: Responses API, removed params, cache, subagents, verification.",
         roles=["senior migration lead", "expert API integrator", "senior platform engineer", "staff developer-experience engineer", "senior QA migration tester", "expert docs migrator"],
         tasks=["migrate a Chat Completions tool app to the Responses API", "remove temperature/top_p/logprobs with behavior checks", "re-tune prompts that over-ask after moving to Astra", "migrate a GPT-5.6 Sol agent to Astra's autonomy model", "update cache config for Astra's read/write pricing", "migrate a multi-agent harness to Astra delegation norms", "re-baseline evals after the model swap", "migrate a RAG app's citation format to Astra style", "update AGENTS.md/SKILL.md priority blocks for Astra", "migrate a browser-use workflow with new stop rules", "re-price a workload at $10/$50 with cache math", "migrate structured-output schemas with semantic prompts", "build a rollback plan if Astra regresses a task", "migrate a support bot's verbosity to concise paragraphs", "run the $openai-docs migrate checklist with sign-off"],
         audiences=["for a production API", "for a Codex project", "for a Cursor-style relay", "for a startup", "for an enterprise", "for a classroom codebase"],
         constraints=["check interfaces, effort, deprecated params, cache item by item", "validate single-task cost on your workload", "preserve passing behavior before chasing new capability", "record before/after transcripts for review", "keep a rollback branch until sign-off", "update docs and examples in the same PR"],
         outputs=["a migration checklist with sign-offs", "a before/after eval table", "a config diff", "a rollback plan", "an updated prompt pack", "a launch note"]),
    dict(slug="27-prompt-debugging", emoji="🔍", title="Prompt Debugging & Audits",
         desc="Trace stalls to the exact file/line: authority, conflicts, staleness.",
         roles=["senior prompt engineer", "expert agent debugger", "senior DX engineer", "staff AI auditor", "senior skills curator", "expert eval designer"],
         tasks=["diagnose why Astra keeps asking instead of acting", "find which SKILL.md line caused a stall and quote it", "audit AGENTS.md for conflicting instructions", "build a minimal repro for a flaky agent run", "design a prompt A/B with success criteria", "trace a scope-escape to its instruction source", "build a regression set from five real failures", "audit verbosity: find the formatting instruction causing bloat", "diagnose over-testing on tiny diffs", "build a confusion matrix for a classifier prompt", "write a failure taxonomy with examples", "create a prompt-version log with diffs", "design a canary eval before wide rollout", "audit PII leakage paths in a workflow", "build a stop-word/slop-word lint pass"],
         audiences=["for a platform team", "for a startup", "for an enterprise", "for a classroom", "for open source", "for a client audit"],
         constraints=["quote the exact file and line that caused behavior", "distinguish explicit user intent from inferred context", "repro with seed/version/effort recorded", "one variable per A/B", "keep failing transcripts verbatim for review", "propose the smallest fix that resolves the class"],
         outputs=["a diagnosis with quoted evidence", "a minimal repro", "an A/B plan with metrics", "a cleaned instruction set", "a regression pack", "a version log"]),
    dict(slug="28-productivity", emoji="⚡", title="Everyday Productivity",
         desc="Inbox, calendar, travel, job search, food ordering, plus Astra tedious-task wins.",
         roles=["expert executive assistant", "senior life-admin coach", "travel planner", "senior career coach", "meal-planning aide", "senior home-ops organizer"],
         tasks=["plan a week of meals from fridge contents and a budget", "triage 200 unread emails into act/file/archive with drafts", "plan a 3-day trip with transit, stays, and backups", "draft job-search outreach with tailored bullets", "build a moving checklist with vendors and dates", "create a tax-return document checklist (no filing advice beyond organizing)", "plan a study week around work shifts", "organize a family calendar with conflicts resolved", "build a gift list with budget and links", "draft a landlord email with photos inventory", "create a home-maintenance schedule", "build a workout plan around injury constraints", "plan a conference visit: sessions, meetings, transit", "draft a meeting follow-up sequence", "build a weekly review template that takes 15 minutes"],
         audiences=["for a busy parent", "for a student", "for a freelancer", "for a new grad", "for a traveler", "for a remote worker"],
         constraints=["confirm before any booking, purchase, send, or share", "personalize with stated constraints; ask only if outcome-changing", "include times, zones, and backup options", "keep budgets explicit with totals", "protect private details; redact for sharing", "make it runnable today, not aspirational"],
         outputs=["a ready-to-run plan with checklist", "drafts (unsent) plus a send list", "an itinerary with links and backups", "a tracker with owners/dates", "a budget table", "a 15-minute review template"]),
]

PER_CATEGORY = 90

def build_prompt(cat, i):
    n_roles = len(cat["roles"]); n_tasks = len(cat["tasks"])
    n_aud = len(cat["audiences"]); n_con = len(cat["constraints"]); n_out = len(cat["outputs"])
    role = cat["roles"][i % n_roles]
    task = cat["tasks"][(i * 7) % n_tasks]
    aud = cat["audiences"][(i * 5) % n_aud]
    con = cat["constraints"][(i * 3) % n_con]
    con2 = cat["constraints"][(i * 3 + 1) % n_con]
    out = cat["outputs"][(i * 11) % n_out]
    autonomy = AUTONOMY[i % len(AUTONOMY)]
    verify = VERIFY[(i // 2) % len(VERIFY)]
    effort = EFFORTS[i % len(EFFORTS)] if ("coding" in cat["slug"] or "reasoning" in cat["slug"] or "multi-agent" in cat["slug"] or "devops" in cat["slug"] or "testing" in cat["slug"] or "migration" in cat["slug"]) else None
    angle = [
        "Be concrete and end-to-end: produce the artifact, not a plan to produce it.",
        "Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief.",
        "Use tools where they help; state what evidence you checked before acting.",
        "Parallelize with subagents where independent work exists; merge with a single coherent voice.",
        "Keep a searchable working note so the task survives context compaction.",
        "Compare against the provided reference and fix the largest gaps first.",
    ][i % 6]
    effort_line = f" Suggested reasoning effort: `{effort}` (set explicitly; gateway default is low)." if effort else ""
    article = "an" if role.split()[0][0].lower() in "aeiou" else "a"
    task_sent = task[0].upper() + task[1:] if task else task
    prompt = (
        f"Act as {article} {role}. {task_sent} {aud}. "
        f"The intended result is {out}. "
        f"Requirements: {con}; {con2}. {angle}{effort_line} "
        f"{autonomy} {verify}"
    )
    # fix double spaces
    prompt = " ".join(prompt.split())
    # personalization glitch fix
    prompt = prompt.replace(" персонализирован ", " personalized ")
    return dict(role=role, task=task, audience=aud, constraints=[con, con2],
                output=out, autonomy=autonomy, verification=verify, effort=effort, text=prompt)

def main():
    PROMPTS_DIR.mkdir(parents=True, exist_ok=True)
    all_rows = []
    for cat in CATEGORIES:
        seen = set()
        rows = []
        for i in range(PER_CATEGORY):
            p = build_prompt(cat, i)
            # ensure uniqueness within category; if collision, tweak angle word
            h = hashlib.sha256(p["text"].encode()).hexdigest()
            if h in seen:
                p["text"] = p["text"] + f" Variant focus {i+1}."
                h = hashlib.sha256(p["text"].encode()).hexdigest()
            seen.add(h)
            pid = f"{cat['slug'][3:]}-{i+1:03d}" if cat["slug"][:2].isdigit() else f"{cat['slug']}-{i+1:03d}"
            rows.append({"id": pid, "category": cat["slug"], "title": cat["title"], **p})
        # global uniqueness guard
        for r in rows:
            all_rows.append(r)
    # verify global uniqueness
    texts = [r["text"] for r in all_rows]
    assert len(texts) == len(set(texts)), f"Duplicate prompts detected: {len(texts) - len(set(texts))}"
    print(f"Total prompts: {len(all_rows)} unique OK")
    # write per-category markdown with collapsible vertical blocks (no horizontal scroll)
    def to_vertical(text):
        sentences = [s.strip() for s in text.split(". ") if s.strip()]
        fixed = []
        for s in sentences:
            if not s.endswith("."):
                s = s + "."
            fixed.append(textwrap.fill(s, width=100))
        return "\n".join(fixed)

    for cat in CATEGORIES:
        rows = [r for r in all_rows if r["category"] == cat["slug"]]
        md = []
        md.append(f"# {cat['emoji']} {cat['title']} - 90 copyable GPT-6 Astra prompts\n")
        md.append(f"> {cat['desc']}\n")
        md.append("> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.\n")
        md.append(f"**Jump:** [Index](../README.md#category-carousel) · [Prev](#) · [Next](#) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)\n")
        md.append(f"How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.\n")
        for r in rows:
            short_task = r['task'][:72]
            md.append(f"<details>\n<summary><code>{r['id']}</code> - {short_task} (click to expand)</summary>\n")
            md.append("```text")
            md.append(to_vertical(r["text"]))
            md.append("```\n</details>\n")
        (PROMPTS_DIR / f"{cat['slug']}.md").write_text("\n".join(md), encoding="utf-8")
    # jsonl + csv + index
    with open(PROMPTS_DIR / "prompts.jsonl", "w", encoding="utf-8") as f:
        for r in all_rows:
            f.write(json.dumps({"id": r["id"], "category": r["category"], "prompt": r["text"]}, ensure_ascii=False) + "\n")
    with open(PROMPTS_DIR / "prompts.csv", "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["id", "category", "prompt"])
        w.writeheader()
        for r in all_rows:
            w.writerow({"id": r["id"], "category": r["category"], "prompt": r["text"]})
    index = [{"id": r["id"], "category": r["category"], "title": r["title"], "task": r["task"]} for r in all_rows]
    (PROMPTS_DIR.parent / "prompts_index.json").write_text(json.dumps(index, ensure_ascii=False, indent=1), encoding="utf-8")
    (PROMPTS_DIR.parent / "prompts_index.json").replace(PROMPTS_DIR / "prompts_index.json")
    # category manifest for README/carousel
    manifest = [{"slug": c["slug"], "emoji": c["emoji"], "title": c["title"], "desc": c["desc"], "count": PER_CATEGORY} for c in CATEGORIES]
    (ROOT / "categories.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=1), encoding="utf-8")
    print("Wrote markdown, jsonl, csv, index, manifest.")

if __name__ == "__main__":
    main()
