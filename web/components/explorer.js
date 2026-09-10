"use client";

import { useMemo, useRef, useState } from "react";

const PAGE = 60;

function matchesQuery(p, tokens) {
  const hay = (p.prompt + " " + p.id + " " + p.category + " " + p.task + " " + p.level).toLowerCase();
  for (const t of tokens) {
    if (hay.includes(t) === false) return false;
  }
  return true;
}

function previewOf(text) {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= 150) return flat;
  const cut = flat.slice(0, 150);
  const space = cut.lastIndexOf(" ");
  return (space > 60 ? cut.slice(0, space) : cut) + " …";
}

function levelClass(level) {
  if (level === "low-level") return "lvl-low";
  if (level === "high-level") return "lvl-high";
  return "lvl-med";
}

export function PromptCard({ item, open, onToggle, copied, onCopy, domId }) {
  return (
    <div className={"prompt-card" + (open === true ? " open" : "")} id={domId}>
      <button className="prompt-head" onClick={onToggle} aria-expanded={open === true}>
        <span className="prompt-num">#{item.n}</span>
        <span className="prompt-id">{item.id}</span>
        <span className="prompt-title">{item.task}</span>
        <span className={"level-tag " + levelClass(item.level)}>{item.level}</span>
        {item.effort === null ? null : <span className="effort-tag">{item.effort}</span>}
        <span className="chev">▾</span>
      </button>
      <div className="prompt-preview">{previewOf(item.prompt)}</div>
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
            <span className="cat-link">{item.catTitle} · {item.prompt.length} chars · {item.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PromptExplorer({ prompts, categories, activeCat, onCatChange, query, onQueryChange }) {
  const [effort, setEffort] = useState("");
  const [level, setLevel] = useState("");
  const [sort, setSort] = useState("relevance");
  const [limit, setLimit] = useState(PAGE);
  const [openId, setOpenId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [shuffled, setShuffled] = useState(null);
  const [hl, setHl] = useState(0);
  const timer = useRef(0);

  const filtered = useMemo(() => {
    const tokens = query.toLowerCase().split(/\s+/).filter((t) => t.length > 0);
    const base = shuffled === null ? prompts : shuffled;
    let out = [];
    for (const p of base) {
      const catOk = activeCat === "" || p.category === activeCat;
      if (catOk === false) continue;
      const effOk = effort === "" || p.effort === effort;
      if (effOk === false) continue;
      const lvlOk = level === "" || p.level === level;
      if (lvlOk === false) continue;
      if (tokens.length === 0 ? false : matchesQuery(p, tokens) === false) continue;
      out.push(p);
    }
    if (sort === "az") out = [...out].sort((a, b) => (a.id < b.id ? -1 : 1));
    if (sort === "category") out = [...out].sort((a, b) => (a.category + a.id < b.category + b.id ? -1 : 1));
    if (sort === "level") {
      const rank = { "low-level": 0, "medium-level": 1, "high-level": 2 };
      out = [...out].sort((a, b) => rank[a.level] - rank[b.level]);
    }
    return out;
  }, [prompts, shuffled, query, activeCat, effort, level, sort]);

  const visible = filtered.slice(0, limit);

  function doCopy(text, id) {
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

  function openAt(i) {
    const clamped = Math.max(0, Math.min(i, visible.length - 1));
    setHl(clamped);
    const p = visible[clamped];
    if (p) {
      setOpenId(p.id);
      const el = document.getElementById("pcard-" + p.n);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function surprise() {
    const pool = filtered.length === 0 ? prompts : filtered;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const rest = [...pool].sort(() => Math.random() - 0.5);
    setShuffled(rest);
    setOpenId(pick.id);
    setLimit(PAGE);
    setHl(0);
    const el = document.getElementById("results");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearAll() {
    onQueryChange("");
    setEffort("");
    setLevel("");
    setSort("relevance");
    setShuffled(null);
    setLimit(PAGE);
    setHl(0);
    onCatChange("");
  }

  if (typeof window === "undefined") {
    // server render, keyboard bridge attaches on the client only
  } else {
    window.__astraExplorer = {
      next: () => openAt(hl + 1),
      prev: () => openAt(hl - 1),
      toggle: () => {
        const p = visible[hl];
        if (p) setOpenId(openId === p.id ? null : p.id);
      },
      copyOpen: () => {
        const p = openId === null ? visible[hl] : visible.find((x) => x.id === openId);
        if (p) doCopy(p.prompt, p.id);
      }
    };
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
              onChange={(e) => { setLimit(PAGE); setHl(0); onQueryChange(e.target.value); }}
              placeholder="Try blender QA, booking flow, triage table, shader budget"
            />
          </div>
          <div className="field">
            <label htmlFor="cat">Category dropdown</label>
            <select
              id="cat"
              className="select"
              value={activeCat}
              onChange={(e) => { setLimit(PAGE); setHl(0); setShuffled(null); onCatChange(e.target.value); }}
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
            <label htmlFor="lvl">Difficulty level</label>
            <select
              id="lvl"
              className="select"
              value={level}
              onChange={(e) => { setLimit(PAGE); setHl(0); setLevel(e.target.value); }}
            >
              <option value="">Any level</option>
              <option value="low-level">Low-level starters</option>
              <option value="medium-level">Medium-level builds</option>
              <option value="high-level">High-level deep work</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="eff">Reasoning effort</label>
            <select
              id="eff"
              className="select"
              value={effort}
              onChange={(e) => { setLimit(PAGE); setHl(0); setEffort(e.target.value); }}
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
              <option value="level">Easy to advanced</option>
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
              onClick={() => { setLimit(PAGE); setHl(0); setShuffled(null); onCatChange(activeCat === c.slug ? "" : c.slug); }}
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
        <span>from 3360 hard-coded prompts</span>
        <span style={{ marginLeft: "auto" }} className="cat-link">
          Numbered 1 to {prompts.length} · keys j and k move · Enter opens · c copies
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
            domId={"pcard-" + p.n}
            item={p}
            open={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
            copied={copiedId === p.id}
            onCopy={() => doCopy(p.prompt, p.id)}
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
