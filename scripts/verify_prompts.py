"""Verify prompts: count + SHA-256 uniqueness. Fails CI on duplicates or shortfall."""
import json, hashlib, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
p = ROOT / "prompts" / "prompts.jsonl"
rows = [json.loads(l) for l in p.read_text(encoding="utf-8").splitlines() if l.strip()]
texts = [r["prompt"] for r in rows]
hashes = [hashlib.sha256(t.encode()).hexdigest() for t in texts]
print(f"count={len(rows)} unique={len(set(hashes))}")
if len(rows) < 3360:
    print(f"FAIL: expected >=3360, got {len(rows)}"); sys.exit(1)
if len(set(hashes)) == len(rows):
    pass
else:
    print(f"FAIL: {len(rows)-len(set(hashes))} duplicates"); sys.exit(1)
print("OK: 3360+ unique prompts")
