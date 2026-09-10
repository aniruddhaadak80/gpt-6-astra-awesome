# 📚 Long Context (1M Tokens) — 90 copyable GPT-6 Astra prompts

> Authoritative vs reference sources, conflict rules, staleness handling.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](22-multi-agent.md) · [Next ▶](24-structured-outputs.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `long-context-001` — digest a 500-page manual into a task-indexed guide

```text
Act as a senior knowledge engineer. Digest a 500-page manual into a task-indexed guide for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-002` — merge three handbooks into one canonical SOP

```text
Act as an expert archivist. Merge three handbooks into one canonical SOP for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-003` — design a context-refresh plan for a long project

```text
Act as a senior legal-discovery aide. Design a context-refresh plan for a long project for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-004` — find every mention of a deprecated flag

```text
Act as a principal analyst. Find every mention of a deprecated flag for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-005` — build a compliance evidence pack

```text
Act as a senior docs miner. Build a compliance evidence pack for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-006` — build a changelog across 50 release notes

```text
Act as an expert librarian. Build a changelog across 50 release notes for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-007` — summarize a research corpus with gaps flagged

```text
Act as a senior knowledge engineer. Summarize a research corpus with gaps flagged for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-008` — summarize a monorepo's conventions from ten docs

```text
Act as an expert archivist. Summarize a monorepo's conventions from ten docs for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-009` — create a personalized glossary from course material

```text
Act as a senior legal-discovery aide. Create a personalized glossary from course material for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-010` — extract all action items from a year of meeting notes

```text
Act as a principal analyst. Extract all action items from a year of meeting notes for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-011` — trace a decision across emails and docs

```text
Act as a senior docs miner. Trace a decision across emails and docs for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-012` — build a citation map for a claim family

```text
Act as an expert librarian. Build a citation map for a claim family for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-013` — build a FAQ from 200 support threads

```text
Act as a senior knowledge engineer. Build a FAQ from 200 support threads for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-014` — reconcile conflicting specs across versions

```text
Act as an expert archivist. Reconcile conflicting specs across versions for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-015` — audit a contract set for renewal dates

```text
Act as a senior legal-discovery aide. Audit a contract set for renewal dates for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-016` — digest a 500-page manual into a task-indexed guide

```text
Act as a principal analyst. Digest a 500-page manual into a task-indexed guide for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-017` — merge three handbooks into one canonical SOP

```text
Act as a senior docs miner. Merge three handbooks into one canonical SOP for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-018` — design a context-refresh plan for a long project

```text
Act as an expert librarian. Design a context-refresh plan for a long project for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-019` — find every mention of a deprecated flag

```text
Act as a senior knowledge engineer. Find every mention of a deprecated flag for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-020` — build a compliance evidence pack

```text
Act as an expert archivist. Build a compliance evidence pack for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-021` — build a changelog across 50 release notes

```text
Act as a senior legal-discovery aide. Build a changelog across 50 release notes for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-022` — summarize a research corpus with gaps flagged

```text
Act as a principal analyst. Summarize a research corpus with gaps flagged for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-023` — summarize a monorepo's conventions from ten docs

```text
Act as a senior docs miner. Summarize a monorepo's conventions from ten docs for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-024` — create a personalized glossary from course material

```text
Act as an expert librarian. Create a personalized glossary from course material for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-025` — extract all action items from a year of meeting notes

```text
Act as a senior knowledge engineer. Extract all action items from a year of meeting notes for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-026` — trace a decision across emails and docs

```text
Act as an expert archivist. Trace a decision across emails and docs for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `long-context-027` — build a citation map for a claim family

```text
Act as a senior legal-discovery aide. Build a citation map for a claim family for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-028` — build a FAQ from 200 support threads

```text
Act as a principal analyst. Build a FAQ from 200 support threads for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `long-context-029` — reconcile conflicting specs across versions

```text
Act as a senior docs miner. Reconcile conflicting specs across versions for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-030` — audit a contract set for renewal dates

```text
Act as an expert librarian. Audit a contract set for renewal dates for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `long-context-031` — digest a 500-page manual into a task-indexed guide

```text
Act as a senior knowledge engineer. Digest a 500-page manual into a task-indexed guide for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `long-context-032` — merge three handbooks into one canonical SOP

```text
Act as an expert archivist. Merge three handbooks into one canonical SOP for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `long-context-033` — design a context-refresh plan for a long project

```text
Act as a senior legal-discovery aide. Design a context-refresh plan for a long project for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `long-context-034` — find every mention of a deprecated flag

```text
Act as a principal analyst. Find every mention of a deprecated flag for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `long-context-035` — build a compliance evidence pack

```text
Act as a senior docs miner. Build a compliance evidence pack for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `long-context-036` — build a changelog across 50 release notes

```text
Act as an expert librarian. Build a changelog across 50 release notes for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `long-context-037` — summarize a research corpus with gaps flagged

```text
Act as a senior knowledge engineer. Summarize a research corpus with gaps flagged for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `long-context-038` — summarize a monorepo's conventions from ten docs

```text
Act as an expert archivist. Summarize a monorepo's conventions from ten docs for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `long-context-039` — create a personalized glossary from course material

```text
Act as a senior legal-discovery aide. Create a personalized glossary from course material for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `long-context-040` — extract all action items from a year of meeting notes

```text
Act as a principal analyst. Extract all action items from a year of meeting notes for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `long-context-041` — trace a decision across emails and docs

```text
Act as a senior docs miner. Trace a decision across emails and docs for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `long-context-042` — build a citation map for a claim family

```text
Act as an expert librarian. Build a citation map for a claim family for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `long-context-043` — build a FAQ from 200 support threads

```text
Act as a senior knowledge engineer. Build a FAQ from 200 support threads for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `long-context-044` — reconcile conflicting specs across versions

```text
Act as an expert archivist. Reconcile conflicting specs across versions for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `long-context-045` — audit a contract set for renewal dates

```text
Act as a senior legal-discovery aide. Audit a contract set for renewal dates for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `long-context-046` — digest a 500-page manual into a task-indexed guide

```text
Act as a principal analyst. Digest a 500-page manual into a task-indexed guide for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `long-context-047` — merge three handbooks into one canonical SOP

```text
Act as a senior docs miner. Merge three handbooks into one canonical SOP for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `long-context-048` — design a context-refresh plan for a long project

```text
Act as an expert librarian. Design a context-refresh plan for a long project for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `long-context-049` — find every mention of a deprecated flag

```text
Act as a senior knowledge engineer. Find every mention of a deprecated flag for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `long-context-050` — build a compliance evidence pack

```text
Act as an expert archivist. Build a compliance evidence pack for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `long-context-051` — build a changelog across 50 release notes

```text
Act as a senior legal-discovery aide. Build a changelog across 50 release notes for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `long-context-052` — summarize a research corpus with gaps flagged

```text
Act as a principal analyst. Summarize a research corpus with gaps flagged for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `long-context-053` — summarize a monorepo's conventions from ten docs

```text
Act as a senior docs miner. Summarize a monorepo's conventions from ten docs for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `long-context-054` — create a personalized glossary from course material

```text
Act as an expert librarian. Create a personalized glossary from course material for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `long-context-055` — extract all action items from a year of meeting notes

```text
Act as a senior knowledge engineer. Extract all action items from a year of meeting notes for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `long-context-056` — trace a decision across emails and docs

```text
Act as an expert archivist. Trace a decision across emails and docs for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `long-context-057` — build a citation map for a claim family

```text
Act as a senior legal-discovery aide. Build a citation map for a claim family for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `long-context-058` — build a FAQ from 200 support threads

```text
Act as a principal analyst. Build a FAQ from 200 support threads for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `long-context-059` — reconcile conflicting specs across versions

```text
Act as a senior docs miner. Reconcile conflicting specs across versions for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `long-context-060` — audit a contract set for renewal dates

```text
Act as an expert librarian. Audit a contract set for renewal dates for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `long-context-061` — digest a 500-page manual into a task-indexed guide

```text
Act as a senior knowledge engineer. Digest a 500-page manual into a task-indexed guide for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `long-context-062` — merge three handbooks into one canonical SOP

```text
Act as an expert archivist. Merge three handbooks into one canonical SOP for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `long-context-063` — design a context-refresh plan for a long project

```text
Act as a senior legal-discovery aide. Design a context-refresh plan for a long project for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `long-context-064` — find every mention of a deprecated flag

```text
Act as a principal analyst. Find every mention of a deprecated flag for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `long-context-065` — build a compliance evidence pack

```text
Act as a senior docs miner. Build a compliance evidence pack for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `long-context-066` — build a changelog across 50 release notes

```text
Act as an expert librarian. Build a changelog across 50 release notes for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `long-context-067` — summarize a research corpus with gaps flagged

```text
Act as a senior knowledge engineer. Summarize a research corpus with gaps flagged for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `long-context-068` — summarize a monorepo's conventions from ten docs

```text
Act as an expert archivist. Summarize a monorepo's conventions from ten docs for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `long-context-069` — create a personalized glossary from course material

```text
Act as a senior legal-discovery aide. Create a personalized glossary from course material for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `long-context-070` — extract all action items from a year of meeting notes

```text
Act as a principal analyst. Extract all action items from a year of meeting notes for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `long-context-071` — trace a decision across emails and docs

```text
Act as a senior docs miner. Trace a decision across emails and docs for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `long-context-072` — build a citation map for a claim family

```text
Act as an expert librarian. Build a citation map for a claim family for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `long-context-073` — build a FAQ from 200 support threads

```text
Act as a senior knowledge engineer. Build a FAQ from 200 support threads for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `long-context-074` — reconcile conflicting specs across versions

```text
Act as an expert archivist. Reconcile conflicting specs across versions for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `long-context-075` — audit a contract set for renewal dates

```text
Act as a senior legal-discovery aide. Audit a contract set for renewal dates for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `long-context-076` — digest a 500-page manual into a task-indexed guide

```text
Act as a principal analyst. Digest a 500-page manual into a task-indexed guide for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `long-context-077` — merge three handbooks into one canonical SOP

```text
Act as a senior docs miner. Merge three handbooks into one canonical SOP for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `long-context-078` — design a context-refresh plan for a long project

```text
Act as an expert librarian. Design a context-refresh plan for a long project for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `long-context-079` — find every mention of a deprecated flag

```text
Act as a senior knowledge engineer. Find every mention of a deprecated flag for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `long-context-080` — build a compliance evidence pack

```text
Act as an expert archivist. Build a compliance evidence pack for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `long-context-081` — build a changelog across 50 release notes

```text
Act as a senior legal-discovery aide. Build a changelog across 50 release notes for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `long-context-082` — summarize a research corpus with gaps flagged

```text
Act as a principal analyst. Summarize a research corpus with gaps flagged for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `long-context-083` — summarize a monorepo's conventions from ten docs

```text
Act as a senior docs miner. Summarize a monorepo's conventions from ten docs for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `long-context-084` — create a personalized glossary from course material

```text
Act as an expert librarian. Create a personalized glossary from course material for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `long-context-085` — extract all action items from a year of meeting notes

```text
Act as a senior knowledge engineer. Extract all action items from a year of meeting notes for legal. The intended result is an indexed summary with locators. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `long-context-086` — trace a decision across emails and docs

```text
Act as an expert archivist. Trace a decision across emails and docs for execs. The intended result is a gaps list. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `long-context-087` — build a citation map for a claim family

```text
Act as a senior legal-discovery aide. Build a citation map for a claim family for auditors. The intended result is a canonical SOP draft. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `long-context-088` — build a FAQ from 200 support threads

```text
Act as a principal analyst. Build a FAQ from 200 support threads for students. The intended result is an evidence pack. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `long-context-089` — reconcile conflicting specs across versions

```text
Act as a senior docs miner. Reconcile conflicting specs across versions for support. The intended result is a citation map. Requirements: label authoritative vs reference sources explicitly; state what is stale and what supersedes it. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `long-context-090` — audit a contract set for renewal dates

```text
Act as an expert librarian. Audit a contract set for renewal dates for engineering. The intended result is a conflicts table with resolutions. Requirements: note what was not found, not just what was; resolve conflicts by recency+authority, then flag residue. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
