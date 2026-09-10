"use client";

import { useEffect, useState } from "react";
import prompts from "../data/prompts.json";
import categories from "../data/categories.json";
import { CountUp, Loader, Reveal, Starfield } from "../components/fx";
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

export default function Home() {
  const [ready, setReady] = useState(false);
  const [cat, setCat] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function pickCategory(slug) {
    setCat(slug);
    const el = document.getElementById("explorer");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const ticker = [...TICKER, ...TICKER];

  return (
    <div>
      <Loader ready={ready} />

      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" />
            <span>Astra Showcase</span>
          </a>
          <div className="nav-links">
            <a href="#prompts">Prompts</a>
            <a href="#pipeline">3D Pipeline</a>
            <a href="#builds">Builds</a>
            <a href="#framework">Framework</a>
            <a href="#quickstart">Quickstart</a>
            <a href="#resources">Sources</a>
          </div>
          <a className="nav-cta" href="#explorer">Copy a prompt</a>
        </div>
      </nav>

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
            Here are <span className="sea">2,520</span> of them.
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
              <b><CountUp to={2520} /></b>
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
              autonomy, verification.
            </p>
          </Reveal>
          <CategoryGrid categories={categories} active={cat} onSelect={pickCategory} />
          <Reveal>
            <PromptExplorer prompts={prompts} categories={categories} activeCat={cat} onCatChange={setCat} />
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
