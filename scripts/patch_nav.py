"""Patch per-category jump nav into a true circular carousel."""
from pathlib import Path
import json
ROOT = Path(__file__).resolve().parent.parent
cats = [c["slug"] for c in json.loads((ROOT/"categories.json").read_text(encoding="utf-8"))]
n = len(cats)
for k, slug in enumerate(cats):
 prev_ct = cats[(k-1) % n]; next_ct = cats[(k+1) % n]
 fp = ROOT/"prompts"/f"{slug}.md"
 t = fp.read_text(encoding="utf-8")
 t = t.replace("../prompts_index.json", "prompts_index.json")
 t = t.replace("[Prev](#)", f"[Prev]({prev_ct}.md)")
 t = t.replace("[Next](#)", f"[Next]({next_ct}.md)")
 fp.write_text(t, encoding="utf-8")
print(f"patched {n} files into circular carousel")
