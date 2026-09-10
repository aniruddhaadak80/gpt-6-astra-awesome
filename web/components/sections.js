"use client";

import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./fx";

export function CategoryGrid({ categories, active, onSelect }) {
  return (
    <div className="cat-grid">
      {categories.map((c, i) => (
        <Reveal key={c.slug} delay={(i % 8) * 60}>
          <button
            className={"cat-card" + (active === c.slug ? " active" : "")}
            onClick={() => onSelect(active === c.slug ? "" : c.slug)}
            aria-pressed={active === c.slug}
          >
            <span className="emoji">{c.emoji}</span>
            <b>{c.title}</b>
            <small>{c.desc}</small>
            <span className="cat-count">{c.count} prompts</span>
          </button>
        </Reveal>
      ))}
    </div>
  );
}

const STAGES = [
  { t: "Reference ingest", d: "Photos, drawings, dimensions, style refs, unit system, GPU budget. Mark every input measured, inferred, or invented.", c: "Inputs beat adjectives" },
  { t: "Blockout", d: "Massing, proportions, camera, scale figures. Named collections only, no detail yet.", c: "00-Layout first" },
  { t: "Structure", d: "Modular pieces, pivot placement, real-world scale, topology plan with pole flow.", c: "Quads on hero faces" },
  { t: "Detail pass", d: "Lived-in props where the camera looks. Folds, tableware, vegetation depth, desk clutter with intent.", c: "Prop counts per zone" },
  { t: "Materials and UV", d: "PBR slots, texel density targets, procedural grain plus painted hero graphics.", c: "Name every material" },
  { t: "Light and camera", d: "Key, fill, rim, environment. Two framings minimum, movement book, in-frame checks.", c: "Lock exposure early" },
  { t: "Optimize", d: "Poly counts, texture sizes, LOD notes, laptop-GPU fallback tier.", c: "Budget per asset" },
  { t: "Export", d: "Blender to Unreal to Three.js with units, axes, scale factor, collision, lightmap channel.", c: "Re-import test" },
  { t: "QA gate", d: "Normals, naming, scale check, fly-through, three stills, defect list by visual impact.", c: "Done table per stage" }
];

export function Pipeline3D() {
  return (
    <div className="timeline">
      {STAGES.map((s, i) => (
        <Reveal key={s.t} delay={40}>
          <div className="step">
            <div className="step-dot">0{i + 1}</div>
            <div className="step-body">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <p style={{ marginTop: 8 }}>
                <code>{s.c}</code>
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function CubeArt() {
  return (
    <svg viewBox="0 0 120 120" role="img" aria-label="3D cube illustration">
      <g fill="none" strokeWidth="3" strokeLinejoin="round">
        <polygon points="60,8 108,34 108,86 60,112 12,86 12,34" stroke="#f5a524" opacity="0.9" />
        <polygon points="60,8 108,34 60,60 12,34" stroke="#2dd4bf" opacity="0.85" />
        <polygon points="60,60 108,34 108,86 60,112" stroke="#f97316" opacity="0.8" />
        <polygon points="60,60 12,34 12,86 60,112" stroke="#38bdf8" opacity="0.7" />
        <line x1="60" y1="60" x2="60" y2="112" stroke="#eef4f1" opacity="0.5" />
      </g>
    </svg>
  );
}

function BrowserArt() {
  return (
    <svg viewBox="0 0 120 90" role="img" aria-label="Browser automation illustration">
      <rect x="6" y="6" width="108" height="78" rx="10" fill="none" stroke="#2dd4bf" strokeWidth="3" />
      <line x1="6" y1="26" x2="114" y2="26" stroke="#2dd4bf" strokeWidth="3" />
      <circle cx="18" cy="16" r="4" fill="#f5a524" />
      <circle cx="30" cy="16" r="4" fill="#f97316" />
      <circle cx="42" cy="16" r="4" fill="#2dd4bf" />
      <rect x="18" y="38" width="60" height="8" rx="4" fill="#38bdf8" opacity="0.8" />
      <rect x="18" y="52" width="84" height="6" rx="3" fill="#9db0b6" opacity="0.5" />
      <rect x="18" y="63" width="46" height="10" rx="5" fill="#f5a524" opacity="0.9" />
    </svg>
  );
}

function WaveArt() {
  return (
    <svg viewBox="0 0 120 90" role="img" aria-label="Audio waveform illustration">
      {Array.from({ length: 18 }).map((_, i) => {
        const h = 14 + Math.round(26 * Math.abs(Math.sin(i * 0.9)));
        return (
          <rect
            key={i}
            x={10 + i * 5.6}
            y={45 - h / 2}
            width="3.4"
            height={h}
            rx="1.7"
            fill={i % 3 === 0 ? "#f5a524" : i % 3 === 1 ? "#2dd4bf" : "#38bdf8"}
            opacity="0.9"
          />
        );
      })}
    </svg>
  );
}

const BUILDS = [
  { t: "Unreal survival world with talking agents", k: "Agents", d: "Astra fills a survival world with cooperating agents that start exchanging messages on their own.", art: "cube" },
  { t: "Manhattan, street by street, over a week", k: "3D city", d: "A long-horizon Unreal build that walks street by street, filling buildings, park, and outline.", art: "cube" },
  { t: "Zillow listing to 3D house plus promo video", k: "Listing to 3D", d: "Listing photos become an inferred 3D home plus a cinematic promotional cut in one pass.", art: "browser" },
  { t: "Steam-train drawing to 3,295 editable objects", k: "Drawing to 3D", d: "A single 2D drawing becomes thousands of named, editable Blender objects with clean geometry.", art: "cube" },
  { t: "Grey-box kart to three themed games", k: "Games", d: "One prototype becomes pirate, candy, and cyberpunk builds through a Unity harness that self-tests.", art: "browser" },
  { t: "Five-minute T-cell lesson from one prompt", k: "Education video", d: "A working immunologist gets scenes, animation, text, and narration from a single brief via Remotion.", art: "wave" },
  { t: "ChatPRD product-intelligence pipeline", k: "Agentic coding", d: "Four messy sources become deduped insights, priorities, and an auto-generated product wiki.", art: "browser" },
  { t: "Frontend tickets closed end to end", k: "Computer use", d: "Astra pulls tickets, codes the fix, tests the result, and marks work done inside real tools.", art: "browser" },
  { t: "FPS prototype reshaped between matches", k: "Playable shooter", d: "A personal shooter with weapons, maps, and scoring that the player redirects after every match.", art: "cube" },
  { t: "Ableton arrangement inside the DAW", k: "Music", d: "Synth design, separate parts, and a full arrangement, decided inside the production session.", art: "wave" },
  { t: "Final Cut import to grade to timeline", k: "Video edit", d: "Clip import, audio sync, color grade, and timeline organization as one continuous job.", art: "wave" },
  { t: "Note-taking apps polished plus landing page", k: "Apps", d: "A personal benchmark app gets faster, smoother, and shippable, with store and page setup included.", art: "browser" }
];

function artFor(kind) {
  if (kind === "cube") return <CubeArt />;
  if (kind === "wave") return <WaveArt />;
  return <BrowserArt />;
}

export function BuildsShowcase() {
  return (
    <div className="grid-3">
      {BUILDS.map((b, i) => (
        <Reveal key={b.t} delay={(i % 3) * 70}>
          <div className="info-card build-card">
            <div className="thumb">{artFor(b.art)}</div>
            <h3>{b.t}</h3>
            <p>{b.d}</p>
            <div className="tag-row">
              <span className="tag">{b.k}</span>
              <span className="tag">Early access, Sept 2026</span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

const BEHAVIORS = [
  { n: "01", t: "Initiative and follow-through", d: "Bias toward action. Deliver a reviewable result before asking approval. Ask only when the answer changes the outcome." },
  { n: "02", t: "Instruction priority", d: "Rank the current brief above skill and project files. Quote the exact blocker when a pause is unavoidable." },
  { n: "03", t: "Writing style", d: "Concise paragraphs, one idea each. Lists only for parallel items. Plain verbs, active voice, no stock phrasing." },
  { n: "04", t: "Subagent delegation", d: "Split independent chunks across agents with inputs, outputs, and done criteria. Merge in one voice with evidence." },
  { n: "05", t: "Testing calibration", d: "Scale checks to risk. Targeted probes for reversible edits, full suites for risky ones. Close with tested, failed, unverified." }
];

export function Framework() {
  return (
    <div>
      <div className="grid-3">
        {BEHAVIORS.map((b, i) => (
          <Reveal key={b.n} delay={(i % 3) * 70}>
            <div className="info-card">
              <h3>
                <span className="n">{b.n}</span>
                {b.t}
              </h3>
              <p>{b.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="codewin">
          <div className="codewin-bar">
            <span className="dot" style={{ background: "#f5a524" }} />
            <span className="dot" style={{ background: "#2dd4bf" }} />
            <span className="dot" style={{ background: "#38bdf8" }} />
            <span style={{ marginLeft: 8, color: "var(--faint)", fontSize: 12.5 }}>task-shell.txt</span>
          </div>
          <pre>{`Goal: deliverable plus who it serves
Inputs: files and links, authoritative vs reference-only
Constraints: scope, style, privacy, stop-before-send and delete rules
Output: format, length, acceptance criteria
Done: definition of done plus tested, failed, unverified report
Autonomy: assume-vs-ask policy plus approval gates`}</pre>
        </div>
      </Reveal>
    </div>
  );
}

export function Quickstart() {
  return (
    <div className="grid-2">
      <Reveal>
        <div className="info-card">
          <h3>Responses API, recommended</h3>
          <p>Tool calling needs the Responses API. Start effort at low or medium, escalate on evidence only.</p>
          <div className="codewin">
            <div className="codewin-bar">
              <span className="dot" style={{ background: "#f5a524" }} />
              <span className="dot" style={{ background: "#2dd4bf" }} />
              <span className="dot" style={{ background: "#38bdf8" }} />
              <span style={{ marginLeft: 8, color: "var(--faint)", fontSize: 12.5 }}>astra.py</span>
            </div>
            <pre>{`from openai import OpenAI
client = OpenAI()
resp = client.responses.create(
    model="gpt-6-astra",
    reasoning={"effort": "medium"},
    input="QA this booking page and report tested, failed, unverified.",
)
print(resp.output_text)`}</pre>
          </div>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <div className="info-card">
          <h3>Effort routing, condensed</h3>
          <p>Measure full-task cost with retries, not list price. Pin effort per task type after evals.</p>
          <div className="tag-row">
            <span className="tag">low: triage, edits</span>
            <span className="tag">medium: features</span>
            <span className="tag">high: deep bugs</span>
            <span className="tag">xhigh: frontier</span>
            <span className="tag">max: eval-gated</span>
          </div>
          <ul>
            <li>Gateway default is low, so set effort explicitly every time.</li>
            <li>Drop temperature, top_p, and logprobs for Astra tool use.</li>
            <li>Cache reads and writes change real cost more than list price.</li>
            <li>Keep a rollback branch until the migration signs off.</li>
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

export function SafetySection() {
  return (
    <Reveal>
      <div className="safety">
        <h3>Defensive posture only</h3>
        <p style={{ color: "var(--muted)" }}>
          Astra is the first model rated at Critical cybersecurity capability, so this hub ships
          blue-team guidance only: triage, hardening, detection, recovery. No exploit development,
          no safeguard bypasses, no jailbreaks.
        </p>
        <div className="tag-row">
          <span className="tag">Stop before send, purchase, delete</span>
          <span className="tag">Least-privilege scope</span>
          <span className="tag">Evidence logs</span>
          <span className="tag">PII redaction</span>
          <span className="tag">Human review gates</span>
        </div>
      </div>
    </Reveal>
  );
}

const OFFICIAL = [
  { t: "Astra announcement", u: "https://openai.com/index/gpt-6-astra/" },
  { t: "Astra for work", u: "https://openai.com/index/gpt-6-astra-next-generation-work" },
  { t: "Path to Astra safeguards", u: "https://openai.com/index/path-to-astra/" },
  { t: "Safety overview", u: "https://openai.com/index/safety-overview-gpt-6-astra/" },
  { t: "API model page", u: "https://developers.openai.com/api/docs/models/gpt-6-astra" },
  { t: "Copilot changelog", u: "https://github.blog/changelog/2026-09-04-gpt-6-astra-is-generally-available-in-github-copilot/" }
];

const GUIDES = [
  { t: "Prompting guide, five behaviors", u: "https://promptessor.com/blog/gpt-6-astra-prompting-guide" },
  { t: "Build guide, sites and games and 3D", u: "https://theaileverage.beehiiv.com/p/the-gpt-6-astra-build-guide" },
  { t: "Migration prompts and task cost", u: "https://aiquill.substack.com/p/gpt-6-astra-category-5-prompts" },
  { t: "Slop-word blocklist and style", u: "https://the-decoder.com/openai-shares-prompting-tips-for-gpt-6-astra-including-a-blocklist-of-slop-words/" },
  { t: "Projects, permissions, review loop", u: "https://techtiff.substack.com/p/gpt-6-astra" },
  { t: "Six coding tips", u: "https://www.mindstudio.ai/blog/gpt-6-astra-prompting-tips" }
];

export function ResourcesSection() {
  return (
    <div className="grid-2">
      <Reveal>
        <div className="info-card">
          <h3>Official sources</h3>
          <ul>
            {OFFICIAL.map((r) => (
              <li key={r.u}>
                <a href={r.u} target="_blank" rel="noreferrer">{r.t}</a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <div className="info-card">
          <h3>Community guides</h3>
          <ul>
            {GUIDES.map((r) => (
              <li key={r.u}>
                <a href={r.u} target="_blank" rel="noreferrer">{r.t}</a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="foot-inner">
        <div>
          <b style={{ color: "var(--ink)" }}>GPT-6 Astra Awesome Hub</b>
          <p>
            3360 original Astra-tuned prompts across 28 categories, bundled with the showcase.
            Builds belong to their creators. Model facts and scores are vendor claims with links.
          </p>
        </div>
        <div>
          <b style={{ color: "var(--ink)" }}>Repo</b>
          <p>
            <a href="https://github.com/aniruddhaadak80/gpt-6-astra-awesome" target="_blank" rel="noreferrer">GitHub repo</a>
            <br />
            <a href="https://github.com/aniruddhaadak80/gpt-6-astra-awesome/tree/main/prompts" target="_blank" rel="noreferrer">Prompt library</a>
            <br />
            <a href="https://github.com/aniruddhaadak80/gpt-6-astra-awesome/blob/main/docs/3d-advanced-guide.md" target="_blank" rel="noreferrer">Advanced 3D guide</a>
          </p>
        </div>
        <div>
          <b style={{ color: "var(--ink)" }}>Model</b>
          <p>gpt-6-astra · 1.05M context · 128K output · effort low to max · Responses API for tools</p>
        </div>
      </div>
    </footer>
  );
}

const PACKS = [
  { slug: "28-productivity", level: "low-level", title: "First-night newcomer", desc: "Three life-admin wins tonight, zero learning curve, then branch outward." },
  { slug: "08-3d-blender-unreal", level: "", title: "3D artist", desc: "Blockout to detail to export matrix, with budgets and QA gates attached." },
  { slug: "09-game-dev", level: "medium-level", title: "Indie game builder", desc: "One playable loop plus tutorial shell plus the playtest-fix circuit." },
  { slug: "16-business-ops", level: "low-level", title: "Startup operator", desc: "Inbox triage first, then SOPs that read like checklists, not essays." },
  { slug: "03-browser-research", level: "high-level", title: "Researcher", desc: "Cited briefings with confidence labels and evidence spans throughout." },
  { slug: "17-education", level: "low-level", title: "Student", desc: "Scaffolded tutoring with checks for understanding, never answer dumps." }
];

export function StarterPacks({ categories, onApply }) {
  const bySlug = {};
  for (const c of categories) bySlug[c.slug] = c;
  return (
    <div className="grid-3">
      {PACKS.map((p, i) => {
        const c = bySlug[p.slug];
        return (
          <Reveal key={p.title} delay={(i % 3) * 70}>
            <button className="info-card pack-card" onClick={() => onApply(p)}>
              <span className="pack-emoji">{c ? c.emoji : "◆"}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tag-row">
                <span className="tag">{c ? c.title : p.slug}</span>
                <span className="tag">{p.level === "" ? "any level" : p.level}</span>
                <span className="tag tag-go">Apply pack</span>
              </div>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}

const LEVELS = [
  { key: "low-level", label: "Low-level starters", cls: "fill-low" },
  { key: "medium-level", label: "Medium-level builds", cls: "fill-med" },
  { key: "high-level", label: "High-level deep work", cls: "fill-high" }
];

export function LevelBars({ prompts }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), 250);
    return () => clearTimeout(t);
  }, []);
  const counts = useMemo(() => {
    const m = { "low-level": 0, "medium-level": 0, "high-level": 0 };
    for (const p of prompts) m[p.level] = (m[p.level] || 0) + 1;
    return m;
  }, [prompts]);
  const total = prompts.length === 0 ? 1 : prompts.length;
  return (
    <div className="bars">
      {LEVELS.map((l) => {
        const n = counts[l.key] || 0;
        const pct = Math.round((n / total) * 1000) / 10;
        return (
          <div className="bar-row" key={l.key}>
            <div className="bar-label">
              <b>{l.label}</b>
              <span>{n.toLocaleString("en-US")} · {pct}%</span>
            </div>
            <div className="bar-track">
              <div
                className={"bar-fill " + l.cls}
                style={{ width: on === true ? pct + "%" : "0%" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const SCRIPT = [
  { who: "you", text: "QA this booking page across three viewports and report tested, failed, unverified." },
  { who: "astra", text: "Spinning up the staging pass at medium effort, starting with navigation and forms." },
  { who: "astra", text: "Checked 14 flows: 12 passed, 2 failed, 0 unverified. Evidence links attached per flow." },
  { who: "astra", text: "Fixed the mobile date picker, re-ran the two failures, both green on the second pass." },
  { who: "astra", text: "Done table written: complete 13, partial 1, blocked 0, with assumptions listed." }
];

export function SessionReplay() {
  const [chars, setChars] = useState(0);
  const full = useMemo(() => SCRIPT.map((l) => l.who + "  " + l.text).join("\n"), []);
  useEffect(() => {
    let timer = 0;
    const step = () => {
      setChars((c) => {
        if (c >= full.length + 90) return 0;
        return c + 2;
      });
      timer = setTimeout(step, 26);
    };
    timer = setTimeout(step, 26);
    return () => clearTimeout(timer);
  }, [full]);
  const shown = full.slice(0, Math.min(chars, full.length));
  const lines = shown.split("\n");
  return (
    <Reveal>
      <div className="codewin">
        <div className="codewin-bar">
          <span className="dot" style={{ background: "#f5a524" }} />
          <span className="dot" style={{ background: "#2dd4bf" }} />
          <span className="dot" style={{ background: "#38bdf8" }} />
          <span style={{ marginLeft: 8, color: "var(--faint)", fontSize: 12.5 }}>live-session-replay</span>
          <span className="replay-live">replaying</span>
        </div>
        <pre className="replay">{lines.map((l, i) => {
          const you = l.startsWith("you");
          const last = i === lines.length - 1 && chars < full.length;
          return (
            <span key={i} className={you ? "rp-you" : "rp-astra"}>
              {l}{last ? <span className="caret">▍</span> : null}{"\n"}
            </span>
          );
        })}</pre>
      </div>
    </Reveal>
  );
}
