"""Build hard-coded web data from the prompt library.

Reads ../prompts/prompts.jsonl plus ../categories.json, writes
data/prompts.json and data/categories.json for the Next.js bundle.
Run from web/: py data/build-data.py
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent

EFFORT_RE = re.compile(r"Suggested reasoning effort:\s*`?(low|medium|high|xhigh|max)`?")

EFFORT_LEVEL = {
    "low": "low-level",
    "medium": "medium-level",
    "high": "high-level",
    "xhigh": "high-level",
    "max": "high-level",
}

DEFAULT_LEVEL = {
    "01-agentic-coding": "medium-level",
    "02-computer-use": "medium-level",
    "03-browser-research": "medium-level",
    "04-professional-docs": "medium-level",
    "05-spreadsheets-data": "low-level",
    "06-science-research": "high-level",
    "07-defensive-security": "high-level",
    "08-3d-blender-unreal": "medium-level",
    "09-game-dev": "medium-level",
    "10-web-dev": "medium-level",
    "11-video-creation": "medium-level",
    "12-music-audio": "low-level",
    "13-design-figma": "medium-level",
    "14-writing-technical": "medium-level",
    "15-writing-creative": "low-level",
    "16-business-ops": "low-level",
    "17-education": "low-level",
    "18-math-frontier": "high-level",
    "19-data-viz": "medium-level",
    "20-devops-terminal": "high-level",
    "21-testing-qa": "medium-level",
    "22-multi-agent": "high-level",
    "23-long-context": "medium-level",
    "24-structured-outputs": "medium-level",
    "25-reasoning-effort": "high-level",
    "26-migration": "high-level",
    "27-prompt-debugging": "high-level",
    "28-productivity": "low-level",
}

def main():
    index = {}
    idx_src = ROOT / "prompts" / "prompts_index.json"
    for rec in json.loads(idx_src.read_text(encoding="utf-8")):
        index[rec["id"]] = rec
    rows = []
    src = ROOT / "prompts" / "prompts.jsonl"
    for line in src.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line:
            continue
        rec = json.loads(line)
        m = EFFORT_RE.search(rec.get("prompt", ""))
        effort = m.group(1) if m else None
        meta = index.get(rec["id"], {})
        level = EFFORT_LEVEL.get(effort, DEFAULT_LEVEL.get(rec["category"], "medium-level"))
        rows.append({
            "n": len(rows) + 1,
            "id": rec["id"],
            "category": rec["category"],
            "catTitle": meta.get("title", rec["category"]),
            "task": meta.get("task", ""),
            "prompt": rec["prompt"],
            "effort": effort,
            "level": level,
        })
    cats = json.loads((ROOT / "categories.json").read_text(encoding="utf-8"))
    counts = {}
    for r in rows:
        counts[r["category"]] = counts.get(r["category"], 0) + 1
    for c in cats:
        c["count"] = counts.get(c["slug"], 0)
    (HERE / "prompts.json").write_text(json.dumps(rows, ensure_ascii=False), encoding="utf-8")
    (HERE / "categories.json").write_text(json.dumps(cats, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"wrote {len(rows)} prompts across {len(cats)} categories")

if __name__ == "__main__":
    main()
