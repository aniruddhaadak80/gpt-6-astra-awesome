"use client";

import { useEffect, useRef, useState } from "react";
import prompts from "../data/prompts.json";
import categories from "../data/categories.json";
import { CountUp, Loader, Reveal, ScrollProgress, Starfield } from "../components/fx";
import { PromptExplorer } from "../components/explorer";
import {
  BuildsShowcase,
  CategoryGrid,
  Framework,
  Pipeline3D,
  Quickstart,
  ResourcesSection,
  SafetySection,
  SiteFooter
} from "../components/sections";

const TICKER = [
  "Agentic coding",
  "Computer use",
  "Browser research",
  "Defensive security",
  "Blender and Unreal",
  "Playable games",
  "Video and audio",
  "Multi-agent fleets",
  "1M context",
  "Structured outputs",
  "Effort routing",
  "Migration playbooks"
];

const SECTIONS = [
  { n: "1", id: "prompts", label: "Prompt vault" },
  { n: "2", id: "pipeline", label: "3D pipeline" },
  { n: "3", id: "builds", label: "Builds" },
  { n: "4", id: "framework", label: "Framework" },
  { n: "5", id: "quickstart", label: "Quickstart" },
  { n: "6", id: "safety", label: "Safety" },
  { n: "7", id: "resources", label: "Sources" }
];

const SHORTCUTS = [
  ["/", "Focus the navbar search from anywhere"],
  ["?", "Open or close this shortcut guide"],
  ["Esc", "Close this guide, or leave the search field"],
  ["j / k", "Move down or up across prompt cards, opening each one"],
  ["Enter", "Expand or collapse the highlighted card"],
  ["c", "Copy the open or highlighted prompt"],
  ["1 - 7", "Jump straight to a page section"]
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.08 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33.66-.15.04-.34-.02-.5-.02-.2 0-.46.05-.75.08-1.7.33-3.43 1.02-3.43 3.58 0 .79.56 1.84 1.31 2.62-.5.02-4.23-.9-5.86-4.06-.5 1.07-1.53 2.13-2.04 2.13-.5 0-.63-.97-.63-2.06 0-1.1.15-2.3.15-2.3s-.46-1.55-1.35-2.55c1.2-.13 2.47-.2 3.76-.2 1.29 0 2.56.07 3.77.2-1.35 1.56-2.03 2.63-2.03 2.63s.15 1.2.15 2.3c0 1.09-.13 2.06-.63 2.06-.51 0-1.54-1.06-2.04-2.13-1.63 3.16-5.36 4.08-5.86 4.06.75-.78 1.31-1.83 1.31-2.62 0-2.56-1.73-3.25-3.43-3.58-.29-.03-.55-.08-.75-.08-.16 0-.35.06-.5.02-.72-.11-1.87-.45-2.33-.66-.07-.52-.28-.87-.51-1.07 1.78-.2 3.64-.87 3.64-3.95 0-.87-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27z" />
    </svg>
  );
}

export default function Home() {
  const [ready, setReady] = useState(false);
  const [cat, setCat] = useState("");
  const [query, setQuery] = useState("");
  const [showKeys, setShowKeys] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const navSearch = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const api = () => window.__astraExplorer;
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || "";
      const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
      if (e.key === "Escape") {
        setShowKeys(false);
        if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
        return;
      }
      if (typing === true) return;
      if (e.metaKey === true || e.ctrlKey === true || e.altKey === true) return;
      const ex = api();
      if (e.key === "/") {
        e.preventDefault();
        if (navSearch.current) navSearch.current.focus();
      } else if (e.key === "?") {
        setShowKeys((v) => v === false);
      } else if (e.key === "j") {
        if (ex) ex.next();
      } else if (e.key === "k") {
        if (ex) ex.prev();
      } else if (e.key === "Enter") {
        if (ex) ex.toggle();
      } else if (e.key === "c") {
        if (ex) ex.copyOpen();
      } else if (e.key >= "1" && e.key <= "7") {
        const s = SECTIONS[Number(e.key) - 1];
        const el = document.getElementById(s.id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function pickCategory(slug) {
    setCat(slug);
    const el = document.getElementById("explorer");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function jumpSection(id) {
    if (id === "") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const ticker = [...TICKER, ...TICKER];

  return (
    <div>
      <Loader ready={ready} />
      <ScrollProgress />

      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" />
            <span>Astra Showcase</span>
          </a>
          <input
            ref={navSearch}
            className="nav-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const el = document.getElementById("explorer");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            placeholder="Search 3360 prompts, press / anytime"
            aria-label="Search prompts across the page"
          />
          <select
            className="nav-select"
            defaultValue=""
            onChange={(e) => { jumpSection(e.target.value); e.target.value = ""; }}
            aria-label="Jump to a page section"
          >
            <option value="">Jump to section…</option>
            {SECTIONS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.n}. {s.label}
              </option>
            ))}
          </select>
          <div className="nav-links">
            <a href="#prompts">Prompts</a>
            <a href="#pipeline">3D Pipeline</a>
            <a href="#builds">Builds</a>
            <a href="#framework">Framework</a>
            <a href="#quickstart">Quickstart</a>
            <a href="#resources">Sources</a>
          </div>
          <span className="keys-hint">
            Press <b>?</b> for shortcuts
          </span>
          <a
            className="gh-link"
            href="https://github.com/aniruddhaadak80/gpt-6-astra-awesome"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the GitHub repository"
            title="GitHub repository"
          >
            <GithubIcon />
          </a>
          <a className="nav-cta" href="#explorer">Copy a prompt</a>
        </div>
      </nav>

      {showKeys === true ? (
        <div className="keys-overlay" onClick={() => setShowKeys(false)}>
          <div className="keys-card" onClick={(e) => e.stopPropagation()}>
            <h2>Keyboard shortcuts</h2>
            <p>Work the whole page without touching the mouse. Shortcuts pause while typing in any field.</p>
            {SHORTCUTS.map(([k, d]) => (
              <div className="key-row" key={k}>
                <kbd>{k}</kbd>
                <span>{d}</span>
              </div>
            ))}
            <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
              <button className="mini-btn" onClick={() => setShowKeys(false)}>
                Close (Esc)
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <header className="hero" id="top">
        <Starfield />
        <span className="hero-orb orb-a" />
        <span className="hero-orb orb-b" />
        <span className="hero-orb orb-c" />
        <div className="hero-inner">
          <span className="eyebrow">
            <span className="pulse-dot" />
            Live prompt arsenal · Sept 2026 launch
          </span>
          <h1>
            Every Astra build
            <br />
            starts from a <span className="gold">great prompt</span>.
            <br />
            Here are <span className="sea">3,360</span> of them.
          </h1>
          <p className="lead">
            A cinematic, searchable showcase for the GPT-6 Astra Awesome Hub. Filter 28
            hard-coded categories, expand any card downward, and copy the full prompt in
            one click. No sideways scrolling, no guesswork.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#explorer">Browse the vault</a>
            <a className="btn btn-ghost" href="#pipeline">See the 3D pipeline</a>
          </div>
          <div className="stats">
            <div className="stat">
              <b><CountUp to={3360} /></b>
              <span>Copy-ready prompts</span>
            </div>
            <div className="stat">
              <b><CountUp to={28} /></b>
              <span>Curated categories</span>
            </div>
            <div className="stat">
              <b><CountUp to={25} /></b>
              <span>Verified community builds</span>
            </div>
            <div className="stat">
              <b><CountUp to={100} /></b>
              <span>Percent unique, SHA-256 checked</span>
            </div>
          </div>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {ticker.map((t, i) => (
            <span key={i}>
              <i>◆</i>
              {t}
            </span>
          ))}
        </div>
      </div>

      <main>
        <section className="section" id="prompts">
          <Reveal>
            <div className="kicker">The vault</div>
            <h2>
              Pick a lane. <em>Copy a weapon.</em>
            </h2>
            <p className="sub">
              Tap any category to filter the explorer below, or dive straight into search.
              Every prompt follows the Astra shell: goal, inputs, constraints, output, done,
              autonomy, verification. Cards show a number, a one-line summary, a preview,
              and a difficulty tag before anything gets opened.
            </p>
          </Reveal>
          <CategoryGrid categories={categories} active={cat} onSelect={pickCategory} />
          <Reveal>
            <PromptExplorer
              prompts={prompts}
              categories={categories}
              activeCat={cat}
              onCatChange={setCat}
              query={query}
              onQueryChange={setQuery}
            />
          </Reveal>
        </section>

        <section className="section" id="pipeline">
          <Reveal>
            <div className="kicker">Advanced 3D operations</div>
            <h2>
              From reference photo <em>to rendered world.</em>
            </h2>
            <p className="sub">
              The nine-gate pipeline behind the strongest early Astra demos: listing photos to
              3D homes, drawings to thousands of editable objects, venues to shot lists that
              keep every performer in frame.
            </p>
          </Reveal>
          <Pipeline3D />
        </section>

        <section className="section" id="builds">
          <Reveal>
            <div className="kicker">Proof, not promises</div>
            <h2>
              What early access <em>actually built.</em>
            </h2>
            <p className="sub">
              A curated slice of the verified builds index. Full attribution and links live in
              the repo. Inclusion reflects public evidence, not reproduction.
            </p>
          </Reveal>
          <BuildsShowcase />
        </section>

        <section className="section" id="framework">
          <Reveal>
            <div className="kicker">Prompt control surface</div>
            <h2>
              Five behaviors <em>rule every result.</em>
            </h2>
            <p className="sub">
              Set these explicitly and Astra stops guessing. Leave them blank and the model
              fills the gaps with defaults that rarely match the task.
            </p>
          </Reveal>
          <Framework />
        </section>

        <section className="section" id="quickstart">
          <Reveal>
            <div className="kicker">Ship it today</div>
            <h2>
              From zero <em>to first run.</em>
            </h2>
            <p className="sub">
              Tool calling needs the Responses API. Start effort low or medium, escalate on
              evidence, and pin the winner per task type.
            </p>
          </Reveal>
          <Quickstart />
        </section>

        <section className="section" id="safety">
          <Reveal>
            <div className="kicker">Guardrails</div>
            <h2>
              Power with <em>boundaries.</em>
            </h2>
          </Reveal>
          <SafetySection />
        </section>

        <section className="section" id="resources" style={{ paddingBottom: 20 }}>
          <Reveal>
            <div className="kicker">Sources</div>
            <h2>
              Read the <em>primaries.</em>
            </h2>
            <p className="sub">
              Vendor pages for facts, community guides for craft. The complete link ledger
              with access dates lives in SOURCES.md.
            </p>
          </Reveal>
          <ResourcesSection />
        </section>
      </main>

      <SiteFooter />

      <button
        className={"to-top" + (showTop === true ? " show" : "")}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}
