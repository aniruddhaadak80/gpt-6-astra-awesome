"use client";

import { Component, useEffect, useRef, useState } from "react";

export function Loader({ ready }) {
  return (
    <div className={"loader" + (ready === true ? " done" : "")} aria-hidden={ready === true}>
      <div className="loader-box">
        <div className="loader-ring" />
        <div style={{ fontWeight: 900, fontSize: 20, marginBottom: 6 }}>
          GPT-6 Astra Showcase
        </div>
        <div className="loader-bar">
          <span />
        </div>
        <div style={{ marginTop: 12 }}>
          <small>Loading 3360 prompts</small>
        </div>
      </div>
    </div>
  );
}

export function Starfield() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (canvas === null) return;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;
    let raf = 0;
    let w = 0;
    let h = 0;
    const colors = ["245,165,36", "249,115,22", "45,212,191", "56,189,248"];
    const parts = [];
    const resize = () => {
      const parent = canvas.parentElement;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 110; i++) {
      parts.push({
        x: Math.random(),
        y: Math.random(),
        r: 0.6 + Math.random() * 1.9,
        s: 0.0004 + Math.random() * 0.0016,
        c: colors[i % colors.length],
        o: 0.25 + Math.random() * 0.6,
        ph: Math.random() * Math.PI * 2
      });
    }
    let t = 0;
    const tick = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y -= p.s;
        if (p.y < -0.02) {
          p.y = 1.02;
          p.x = Math.random();
        }
        const tw = 0.6 + 0.4 * Math.sin(t * 2 + p.ph);
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + p.c + "," + (p.o * tw).toFixed(3) + ")";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}

export function Reveal({ children, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el === null) return;
    const show = () => el.classList.add("in");
    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }
    let fallback = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting === true) {
            show();
            if (fallback) clearTimeout(fallback);
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 260px 0px" }
    );
    obs.observe(el);
    fallback = setTimeout(() => {
      show();
      obs.disconnect();
    }, 4000);
    return () => {
      if (fallback) clearTimeout(fallback);
      obs.disconnect();
    };
  }, []);
  return (
    <div ref={ref} className="reveal" style={delay ? { transitionDelay: delay + "ms" } : undefined}>
      {children}
    </div>
  );
}

export function CountUp({ to, duration }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el === null) return;
    let raf = 0;
    let started = false;
    const run = () => {
      if (started === true) return;
      started = true;
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / (duration || 1400));
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    if (typeof IntersectionObserver === "undefined") {
      run();
      return () => cancelAnimationFrame(raf);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting === true) {
            run();
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString("en-US")}</span>;
}

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.failed === true) {
      return (
        <div className="error-fallback" role="alert">
          <h3>This block failed to render</h3>
          <p>Reload the page for a fresh copy. If it persists, note the section name and open an issue on the repo.</p>
          <button className="mini-btn" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el === null) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max <= 0 ? 0 : Math.min(1, window.scrollY / max);
      el.style.transform = "scaleX(" + p.toFixed(4) + ")";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}
