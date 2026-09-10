"use client";

import { useMemo, useRef, useState } from "react";

const PAGE = 60;

function matchesQuery(p, tokens) {
  const hay = (p.prompt + " " + p.id + " " + p.category).toLowerCase();
  for (const t of tokens) {
    if (hay.includes(t) === false) return false;
  }
  return true;
}

export function PromptCard({ item, open, onToggle, copied, onCopy }) {
  const prettyCat = item.category.replace(/^\d+-/, "").replace(/-/g, " ");
  return (
    <div className={"prompt-card" + (open === true ? " open" : "")}>
      <button className="prompt-head" onClick={onToggle} aria-expanded={open === true}>
        <span className="prompt-id">{item.id}</span>
        <span className="prompt-title">{prettyCat}</span>
        {item.effort === null ? null : <span className="effort-tag">{item.effort}</span>}
        <span className="chev">▾</span>
      </button>
      <div className="prompt-body">
        <div className="prompt-body-inner">
          <pre className="prompt-text">{item.prompt}</pre>
          <div className="prompt-foot">
            <button
              className={"copy-btn" + (copied === true ? " ok" : "")}
              onClick={onCopy}
            >
              {copied === true ? "Copied to clipboard" : "Copy prompt"}
            </button>
            <span className="cat-link">{item.category} · {item.prompt.length} chars</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PromptExplorer({ prompts, categories, activeCat, onCatChange }) {
  const [query, setQuery] = useState("");
  const [effort, setEffort] = useState("");
  const [sort, setSort] = useState("relevance");
  const [limit, setLimit] = useState(PAGE);
  const [openId, setOpenId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [shuffled, setShuffled] = useState(null);
  const timer = useRef(null);

  const filtered = useMemo(() => {
    const tokens = query.toLowerCase().split(/\s+/).filter((t) => t.length > 0);
    const base = shuffled === null ? prompts : shuffled;
    let out = [];
    for (const p of base) {
      const catOk = activeCat === "" || p.category === activeCat;
      if (catOk === false) continue;
      const effOk = effort === "" || p.effort === effort;
      if (effOk === false) continue;
      if (tokens.length === 0 ? false : matchesQuery(p, tokens) === false) continue;
      out.push(p);
    }
    if (sort === "az") out = [...out].sort((a, b) => (a.id < b.id ? -1 : 1));
    if (sort === "category") out = [...out].sort((a, b) => (a.category + a.id < b.category + b.id ? -1 : 1));
    return out;
  }, [prompts, shuffled, query, activeCat, effort, sort]);

  const visible = filtered.slice(0, limit);

  function copyText(text, id) {
    const done = () => {
      setCopiedId(id);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopiedId(null), 1600);
    };
    if (typeof navigator === "undefined") {
      fallbackCopy(text, done);
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    } catch (e) {
      done();
    }
  }

  function surprise() {
    const pool = filtered.length === 0 ? prompts : filtered;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const rest = [...pool].sort(() => Math.random() - 0.5);
    setShuffled(rest);
    setOpenId(pick.id);
    setLimit(PAGE);
    const el = document.getElementById("results");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearAll() {
    setQuery("");
    setEffort("");
    setSort("relevance");
    setShuffled(null);
    setLimit(PAGE);
    onCatChange("");
  }

  return (
    <div className="explorer" id="explorer">
      <div className="explorer-bar">
        <div className="search-row">
          <div className="field">
            <label htmlFor="q">Advanced search</label>
            <input
              id="q"
              className="input"
              value={query}
              onChange={(e) => { setLimit(PAGE); setQuery(e.target.value); }}
              placeholder="Try blender QA, booking flow, triage table, shader budget"
            />
          </div>
          <div className="field">
            <label htmlFor="cat">Category dropdown</label>
            <select
              id="cat"
              className="select"
              value={activeCat}
              onChange={(e) => { setLimit(PAGE); setShuffled(null); onCatChange(e.target.value); }}
            >
              <option value="">All 28 categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title} ({c.count})
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="eff">Reasoning effort</label>
            <select
              id="eff"
              className="select"
              value={effort}
              onChange={(e) => { setLimit(PAGE); setEffort(e.target.value); }}
            >
              <option value="">Any effort level</option>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
              <option value="xhigh">xhigh</option>
              <option value="max">max</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="sort">Sort</label>
            <select id="sort" className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="relevance">Curated order</option>
              <option value="az">Prompt ID, A to Z</option>
              <option value="category">Grouped by category</option>
            </select>
          </div>
        </div>
        <div className="chips" role="group" aria-label="Quick category filters">
          <button className={"chip" + (activeCat === "" ? " on" : "")} onClick={() => { setLimit(PAGE); onCatChange(""); }}>
            All
          </button>
          {categories.slice(0, 10).map((c) => (
            <button
              key={c.slug}
              className={"chip" + (activeCat === c.slug ? " on" : "")}
              onClick={() => { setLimit(PAGE); setShuffled(null); onCatChange(activeCat === c.slug ? "" : c.slug); }}
            >
              {c.emoji} {c.title}
            </button>
          ))}
          <button className="chip" onClick={surprise}>Surprise me</button>
          <button className="chip" onClick={clearAll}>Reset filters</button>
        </div>
      </div>
      <div className="result-meta" id="results">
        <span>
          Showing <b>{visible.length}</b> of <b>{filtered.length}</b> matches
        </span>
        <span>from 2520 hard-coded prompts</span>
        <span style={{ marginLeft: "auto" }} className="cat-link">
          Each card expands downward, text wraps vertically, one click copies all of it
        </span>
      </div>
      <div className="prompt-list">
        {visible.length === 0 ? (
          <div className="info-card">
            <h3>No matches in this view</h3>
            <p>Loosen the query, pick another category, or reset the filters to browse the full set again.</p>
          </div>
        ) : null}
        {visible.map((p) => (
          <PromptCard
            key={p.id}
            item={p}
            open={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
            copied={copiedId === p.id}
            onCopy={() => copyText(p.prompt, p.id)}
          />
        ))}
      </div>
      {limit < filtered.length ? (
        <div className="load-wrap">
          <button className="mini-btn" onClick={() => setLimit(limit + PAGE)}>
            Load 60 more ({filtered.length - limit} remaining)
          </button>
        </div>
      ) : null}
    </div>
  );
}
