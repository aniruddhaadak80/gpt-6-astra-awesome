# Contributing

## What belongs here

- **Real builds** with creator + link + date + what Astra did vs harness did. No “my cousin’s prompt worked” without evidence.
- **Prompt fixes** in the right `prompts/*.md` + `prompts.jsonl`. Keep the Astra shell (goal/inputs/constraints/output/done/autonomy/verification).
- **Guide links** in `SOURCES.md` with accessed date.

## What does not belong

- Scraped dumps without provenance. No fake “found 3,000 prompts” claims.
- Offensive-security prompts: no exploits, jailbreaks, safeguard bypasses, malware. Defensive-only.
- Copyrighted text pastes. Link + summarize instead.

## How

1. Edit the category file + `prompts/prompts.jsonl` (keep ids stable: `<slug-without-NN>-NNN`).
2. Run `py scripts/generate_prompts.py` only if you change the generator; otherwise run `py scripts/verify_prompts.py`.
3. Open a PR with: what changed, why, evidence link, verify output.

CI fails on duplicates or count < 2520.
