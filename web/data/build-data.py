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

def main():
    rows = []
    src = ROOT / "prompts" / "prompts.jsonl"
    for line in src.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line:
            continue
        rec = json.loads(line)
        m = EFFORT_RE.search(rec.get("prompt", ""))
        rows.append({
            "id": rec["id"],
            "category": rec["category"],
            "prompt": rec["prompt"],
            "effort": m.group(1) if m else None,
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
