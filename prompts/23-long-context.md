# 📚 Long Context (1M Tokens) - 120 copyable GPT-6 Astra prompts

> Authoritative vs reference sources, conflict rules, staleness handling.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](22-multi-agent.md) · [Next](24-structured-outputs.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>long-context-001</code> - digest a 500-page manual into a task-indexed guide (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Digest a 500-page manual into a task-indexed guide for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-002</code> - merge three handbooks into one canonical SOP (click to expand)</summary>

```text
Act as an expert archivist.
Merge three handbooks into one canonical SOP for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-003</code> - design a context-refresh plan for a long project (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Design a context-refresh plan for a long project for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-004</code> - find every mention of a deprecated flag (click to expand)</summary>

```text
Act as a principal analyst.
Find every mention of a deprecated flag for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-005</code> - build a compliance evidence pack (click to expand)</summary>

```text
Act as a senior docs miner.
Build a compliance evidence pack for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-006</code> - build a changelog across 50 release notes (click to expand)</summary>

```text
Act as an expert librarian.
Build a changelog across 50 release notes for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-007</code> - summarize a research corpus with gaps flagged (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Summarize a research corpus with gaps flagged for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-008</code> - summarize a monorepo's conventions from ten docs (click to expand)</summary>

```text
Act as an expert archivist.
Summarize a monorepo's conventions from ten docs for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-009</code> - create a personalized glossary from course material (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Create a personalized glossary from course material for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-010</code> - extract all action items from a year of meeting notes (click to expand)</summary>

```text
Act as a principal analyst.
Extract all action items from a year of meeting notes for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-011</code> - trace a decision across emails and docs (click to expand)</summary>

```text
Act as a senior docs miner.
Trace a decision across emails and docs for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-012</code> - build a citation map for a claim family (click to expand)</summary>

```text
Act as an expert librarian.
Build a citation map for a claim family for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-013</code> - build a FAQ from 200 support threads (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Build a FAQ from 200 support threads for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-014</code> - reconcile conflicting specs across versions (click to expand)</summary>

```text
Act as an expert archivist.
Reconcile conflicting specs across versions for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-015</code> - audit a contract set for renewal dates (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Audit a contract set for renewal dates for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-016</code> - digest a 500-page manual into a task-indexed guide (click to expand)</summary>

```text
Act as a principal analyst.
Digest a 500-page manual into a task-indexed guide for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-017</code> - merge three handbooks into one canonical SOP (click to expand)</summary>

```text
Act as a senior docs miner.
Merge three handbooks into one canonical SOP for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-018</code> - design a context-refresh plan for a long project (click to expand)</summary>

```text
Act as an expert librarian.
Design a context-refresh plan for a long project for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-019</code> - find every mention of a deprecated flag (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Find every mention of a deprecated flag for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-020</code> - build a compliance evidence pack (click to expand)</summary>

```text
Act as an expert archivist.
Build a compliance evidence pack for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-021</code> - build a changelog across 50 release notes (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Build a changelog across 50 release notes for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-022</code> - summarize a research corpus with gaps flagged (click to expand)</summary>

```text
Act as a principal analyst.
Summarize a research corpus with gaps flagged for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-023</code> - summarize a monorepo's conventions from ten docs (click to expand)</summary>

```text
Act as a senior docs miner.
Summarize a monorepo's conventions from ten docs for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-024</code> - create a personalized glossary from course material (click to expand)</summary>

```text
Act as an expert librarian.
Create a personalized glossary from course material for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-025</code> - extract all action items from a year of meeting notes (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Extract all action items from a year of meeting notes for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-026</code> - trace a decision across emails and docs (click to expand)</summary>

```text
Act as an expert archivist.
Trace a decision across emails and docs for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>long-context-027</code> - build a citation map for a claim family (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Build a citation map for a claim family for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-028</code> - build a FAQ from 200 support threads (click to expand)</summary>

```text
Act as a principal analyst.
Build a FAQ from 200 support threads for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>long-context-029</code> - reconcile conflicting specs across versions (click to expand)</summary>

```text
Act as a senior docs miner.
Reconcile conflicting specs across versions for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-030</code> - audit a contract set for renewal dates (click to expand)</summary>

```text
Act as an expert librarian.
Audit a contract set for renewal dates for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>long-context-031</code> - digest a 500-page manual into a task-indexed guide (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Digest a 500-page manual into a task-indexed guide for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 31.
```
</details>

<details>
<summary><code>long-context-032</code> - merge three handbooks into one canonical SOP (click to expand)</summary>

```text
Act as an expert archivist.
Merge three handbooks into one canonical SOP for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 32.
```
</details>

<details>
<summary><code>long-context-033</code> - design a context-refresh plan for a long project (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Design a context-refresh plan for a long project for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 33.
```
</details>

<details>
<summary><code>long-context-034</code> - find every mention of a deprecated flag (click to expand)</summary>

```text
Act as a principal analyst.
Find every mention of a deprecated flag for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 34.
```
</details>

<details>
<summary><code>long-context-035</code> - build a compliance evidence pack (click to expand)</summary>

```text
Act as a senior docs miner.
Build a compliance evidence pack for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 35.
```
</details>

<details>
<summary><code>long-context-036</code> - build a changelog across 50 release notes (click to expand)</summary>

```text
Act as an expert librarian.
Build a changelog across 50 release notes for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 36.
```
</details>

<details>
<summary><code>long-context-037</code> - summarize a research corpus with gaps flagged (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Summarize a research corpus with gaps flagged for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 37.
```
</details>

<details>
<summary><code>long-context-038</code> - summarize a monorepo's conventions from ten docs (click to expand)</summary>

```text
Act as an expert archivist.
Summarize a monorepo's conventions from ten docs for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 38.
```
</details>

<details>
<summary><code>long-context-039</code> - create a personalized glossary from course material (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Create a personalized glossary from course material for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 39.
```
</details>

<details>
<summary><code>long-context-040</code> - extract all action items from a year of meeting notes (click to expand)</summary>

```text
Act as a principal analyst.
Extract all action items from a year of meeting notes for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 40.
```
</details>

<details>
<summary><code>long-context-041</code> - trace a decision across emails and docs (click to expand)</summary>

```text
Act as a senior docs miner.
Trace a decision across emails and docs for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 41.
```
</details>

<details>
<summary><code>long-context-042</code> - build a citation map for a claim family (click to expand)</summary>

```text
Act as an expert librarian.
Build a citation map for a claim family for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 42.
```
</details>

<details>
<summary><code>long-context-043</code> - build a FAQ from 200 support threads (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Build a FAQ from 200 support threads for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 43.
```
</details>

<details>
<summary><code>long-context-044</code> - reconcile conflicting specs across versions (click to expand)</summary>

```text
Act as an expert archivist.
Reconcile conflicting specs across versions for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 44.
```
</details>

<details>
<summary><code>long-context-045</code> - audit a contract set for renewal dates (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Audit a contract set for renewal dates for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 45.
```
</details>

<details>
<summary><code>long-context-046</code> - digest a 500-page manual into a task-indexed guide (click to expand)</summary>

```text
Act as a principal analyst.
Digest a 500-page manual into a task-indexed guide for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 46.
```
</details>

<details>
<summary><code>long-context-047</code> - merge three handbooks into one canonical SOP (click to expand)</summary>

```text
Act as a senior docs miner.
Merge three handbooks into one canonical SOP for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 47.
```
</details>

<details>
<summary><code>long-context-048</code> - design a context-refresh plan for a long project (click to expand)</summary>

```text
Act as an expert librarian.
Design a context-refresh plan for a long project for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 48.
```
</details>

<details>
<summary><code>long-context-049</code> - find every mention of a deprecated flag (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Find every mention of a deprecated flag for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 49.
```
</details>

<details>
<summary><code>long-context-050</code> - build a compliance evidence pack (click to expand)</summary>

```text
Act as an expert archivist.
Build a compliance evidence pack for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 50.
```
</details>

<details>
<summary><code>long-context-051</code> - build a changelog across 50 release notes (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Build a changelog across 50 release notes for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 51.
```
</details>

<details>
<summary><code>long-context-052</code> - summarize a research corpus with gaps flagged (click to expand)</summary>

```text
Act as a principal analyst.
Summarize a research corpus with gaps flagged for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 52.
```
</details>

<details>
<summary><code>long-context-053</code> - summarize a monorepo's conventions from ten docs (click to expand)</summary>

```text
Act as a senior docs miner.
Summarize a monorepo's conventions from ten docs for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 53.
```
</details>

<details>
<summary><code>long-context-054</code> - create a personalized glossary from course material (click to expand)</summary>

```text
Act as an expert librarian.
Create a personalized glossary from course material for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 54.
```
</details>

<details>
<summary><code>long-context-055</code> - extract all action items from a year of meeting notes (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Extract all action items from a year of meeting notes for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 55.
```
</details>

<details>
<summary><code>long-context-056</code> - trace a decision across emails and docs (click to expand)</summary>

```text
Act as an expert archivist.
Trace a decision across emails and docs for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 56.
```
</details>

<details>
<summary><code>long-context-057</code> - build a citation map for a claim family (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Build a citation map for a claim family for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 57.
```
</details>

<details>
<summary><code>long-context-058</code> - build a FAQ from 200 support threads (click to expand)</summary>

```text
Act as a principal analyst.
Build a FAQ from 200 support threads for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 58.
```
</details>

<details>
<summary><code>long-context-059</code> - reconcile conflicting specs across versions (click to expand)</summary>

```text
Act as a senior docs miner.
Reconcile conflicting specs across versions for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 59.
```
</details>

<details>
<summary><code>long-context-060</code> - audit a contract set for renewal dates (click to expand)</summary>

```text
Act as an expert librarian.
Audit a contract set for renewal dates for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 60.
```
</details>

<details>
<summary><code>long-context-061</code> - digest a 500-page manual into a task-indexed guide (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Digest a 500-page manual into a task-indexed guide for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 61.
```
</details>

<details>
<summary><code>long-context-062</code> - merge three handbooks into one canonical SOP (click to expand)</summary>

```text
Act as an expert archivist.
Merge three handbooks into one canonical SOP for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 62.
```
</details>

<details>
<summary><code>long-context-063</code> - design a context-refresh plan for a long project (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Design a context-refresh plan for a long project for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 63.
```
</details>

<details>
<summary><code>long-context-064</code> - find every mention of a deprecated flag (click to expand)</summary>

```text
Act as a principal analyst.
Find every mention of a deprecated flag for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 64.
```
</details>

<details>
<summary><code>long-context-065</code> - build a compliance evidence pack (click to expand)</summary>

```text
Act as a senior docs miner.
Build a compliance evidence pack for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 65.
```
</details>

<details>
<summary><code>long-context-066</code> - build a changelog across 50 release notes (click to expand)</summary>

```text
Act as an expert librarian.
Build a changelog across 50 release notes for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 66.
```
</details>

<details>
<summary><code>long-context-067</code> - summarize a research corpus with gaps flagged (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Summarize a research corpus with gaps flagged for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 67.
```
</details>

<details>
<summary><code>long-context-068</code> - summarize a monorepo's conventions from ten docs (click to expand)</summary>

```text
Act as an expert archivist.
Summarize a monorepo's conventions from ten docs for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 68.
```
</details>

<details>
<summary><code>long-context-069</code> - create a personalized glossary from course material (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Create a personalized glossary from course material for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 69.
```
</details>

<details>
<summary><code>long-context-070</code> - extract all action items from a year of meeting notes (click to expand)</summary>

```text
Act as a principal analyst.
Extract all action items from a year of meeting notes for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 70.
```
</details>

<details>
<summary><code>long-context-071</code> - trace a decision across emails and docs (click to expand)</summary>

```text
Act as a senior docs miner.
Trace a decision across emails and docs for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 71.
```
</details>

<details>
<summary><code>long-context-072</code> - build a citation map for a claim family (click to expand)</summary>

```text
Act as an expert librarian.
Build a citation map for a claim family for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 72.
```
</details>

<details>
<summary><code>long-context-073</code> - build a FAQ from 200 support threads (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Build a FAQ from 200 support threads for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 73.
```
</details>

<details>
<summary><code>long-context-074</code> - reconcile conflicting specs across versions (click to expand)</summary>

```text
Act as an expert archivist.
Reconcile conflicting specs across versions for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 74.
```
</details>

<details>
<summary><code>long-context-075</code> - audit a contract set for renewal dates (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Audit a contract set for renewal dates for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 75.
```
</details>

<details>
<summary><code>long-context-076</code> - digest a 500-page manual into a task-indexed guide (click to expand)</summary>

```text
Act as a principal analyst.
Digest a 500-page manual into a task-indexed guide for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 76.
```
</details>

<details>
<summary><code>long-context-077</code> - merge three handbooks into one canonical SOP (click to expand)</summary>

```text
Act as a senior docs miner.
Merge three handbooks into one canonical SOP for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 77.
```
</details>

<details>
<summary><code>long-context-078</code> - design a context-refresh plan for a long project (click to expand)</summary>

```text
Act as an expert librarian.
Design a context-refresh plan for a long project for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 78.
```
</details>

<details>
<summary><code>long-context-079</code> - find every mention of a deprecated flag (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Find every mention of a deprecated flag for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 79.
```
</details>

<details>
<summary><code>long-context-080</code> - build a compliance evidence pack (click to expand)</summary>

```text
Act as an expert archivist.
Build a compliance evidence pack for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 80.
```
</details>

<details>
<summary><code>long-context-081</code> - build a changelog across 50 release notes (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Build a changelog across 50 release notes for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 81.
```
</details>

<details>
<summary><code>long-context-082</code> - summarize a research corpus with gaps flagged (click to expand)</summary>

```text
Act as a principal analyst.
Summarize a research corpus with gaps flagged for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 82.
```
</details>

<details>
<summary><code>long-context-083</code> - summarize a monorepo's conventions from ten docs (click to expand)</summary>

```text
Act as a senior docs miner.
Summarize a monorepo's conventions from ten docs for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 83.
```
</details>

<details>
<summary><code>long-context-084</code> - create a personalized glossary from course material (click to expand)</summary>

```text
Act as an expert librarian.
Create a personalized glossary from course material for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 84.
```
</details>

<details>
<summary><code>long-context-085</code> - extract all action items from a year of meeting notes (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Extract all action items from a year of meeting notes for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 85.
```
</details>

<details>
<summary><code>long-context-086</code> - trace a decision across emails and docs (click to expand)</summary>

```text
Act as an expert archivist.
Trace a decision across emails and docs for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 86.
```
</details>

<details>
<summary><code>long-context-087</code> - build a citation map for a claim family (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Build a citation map for a claim family for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 87.
```
</details>

<details>
<summary><code>long-context-088</code> - build a FAQ from 200 support threads (click to expand)</summary>

```text
Act as a principal analyst.
Build a FAQ from 200 support threads for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 88.
```
</details>

<details>
<summary><code>long-context-089</code> - reconcile conflicting specs across versions (click to expand)</summary>

```text
Act as a senior docs miner.
Reconcile conflicting specs across versions for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 89.
```
</details>

<details>
<summary><code>long-context-090</code> - audit a contract set for renewal dates (click to expand)</summary>

```text
Act as an expert librarian.
Audit a contract set for renewal dates for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 90.
```
</details>

<details>
<summary><code>long-context-091</code> - digest a 500-page manual into a task-indexed guide (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Digest a 500-page manual into a task-indexed guide for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 91.
```
</details>

<details>
<summary><code>long-context-092</code> - merge three handbooks into one canonical SOP (click to expand)</summary>

```text
Act as an expert archivist.
Merge three handbooks into one canonical SOP for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 92.
```
</details>

<details>
<summary><code>long-context-093</code> - design a context-refresh plan for a long project (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Design a context-refresh plan for a long project for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 93.
```
</details>

<details>
<summary><code>long-context-094</code> - find every mention of a deprecated flag (click to expand)</summary>

```text
Act as a principal analyst.
Find every mention of a deprecated flag for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 94.
```
</details>

<details>
<summary><code>long-context-095</code> - build a compliance evidence pack (click to expand)</summary>

```text
Act as a senior docs miner.
Build a compliance evidence pack for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 95.
```
</details>

<details>
<summary><code>long-context-096</code> - build a changelog across 50 release notes (click to expand)</summary>

```text
Act as an expert librarian.
Build a changelog across 50 release notes for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 96.
```
</details>

<details>
<summary><code>long-context-097</code> - summarize a research corpus with gaps flagged (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Summarize a research corpus with gaps flagged for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 97.
```
</details>

<details>
<summary><code>long-context-098</code> - summarize a monorepo's conventions from ten docs (click to expand)</summary>

```text
Act as an expert archivist.
Summarize a monorepo's conventions from ten docs for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 98.
```
</details>

<details>
<summary><code>long-context-099</code> - create a personalized glossary from course material (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Create a personalized glossary from course material for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 99.
```
</details>

<details>
<summary><code>long-context-100</code> - extract all action items from a year of meeting notes (click to expand)</summary>

```text
Act as a principal analyst.
Extract all action items from a year of meeting notes for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 100.
```
</details>

<details>
<summary><code>long-context-101</code> - trace a decision across emails and docs (click to expand)</summary>

```text
Act as a senior docs miner.
Trace a decision across emails and docs for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 101.
```
</details>

<details>
<summary><code>long-context-102</code> - build a citation map for a claim family (click to expand)</summary>

```text
Act as an expert librarian.
Build a citation map for a claim family for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 102.
```
</details>

<details>
<summary><code>long-context-103</code> - build a FAQ from 200 support threads (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Build a FAQ from 200 support threads for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 103.
```
</details>

<details>
<summary><code>long-context-104</code> - reconcile conflicting specs across versions (click to expand)</summary>

```text
Act as an expert archivist.
Reconcile conflicting specs across versions for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 104.
```
</details>

<details>
<summary><code>long-context-105</code> - audit a contract set for renewal dates (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Audit a contract set for renewal dates for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 105.
```
</details>

<details>
<summary><code>long-context-106</code> - digest a 500-page manual into a task-indexed guide (click to expand)</summary>

```text
Act as a principal analyst.
Digest a 500-page manual into a task-indexed guide for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 106.
```
</details>

<details>
<summary><code>long-context-107</code> - merge three handbooks into one canonical SOP (click to expand)</summary>

```text
Act as a senior docs miner.
Merge three handbooks into one canonical SOP for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 107.
```
</details>

<details>
<summary><code>long-context-108</code> - design a context-refresh plan for a long project (click to expand)</summary>

```text
Act as an expert librarian.
Design a context-refresh plan for a long project for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 108.
```
</details>

<details>
<summary><code>long-context-109</code> - find every mention of a deprecated flag (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Find every mention of a deprecated flag for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 109.
```
</details>

<details>
<summary><code>long-context-110</code> - build a compliance evidence pack (click to expand)</summary>

```text
Act as an expert archivist.
Build a compliance evidence pack for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 110.
```
</details>

<details>
<summary><code>long-context-111</code> - build a changelog across 50 release notes (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Build a changelog across 50 release notes for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 111.
```
</details>

<details>
<summary><code>long-context-112</code> - summarize a research corpus with gaps flagged (click to expand)</summary>

```text
Act as a principal analyst.
Summarize a research corpus with gaps flagged for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 112.
```
</details>

<details>
<summary><code>long-context-113</code> - summarize a monorepo's conventions from ten docs (click to expand)</summary>

```text
Act as a senior docs miner.
Summarize a monorepo's conventions from ten docs for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 113.
```
</details>

<details>
<summary><code>long-context-114</code> - create a personalized glossary from course material (click to expand)</summary>

```text
Act as an expert librarian.
Create a personalized glossary from course material for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 114.
```
</details>

<details>
<summary><code>long-context-115</code> - extract all action items from a year of meeting notes (click to expand)</summary>

```text
Act as a senior knowledge engineer.
Extract all action items from a year of meeting notes for legal.
The intended result is an indexed summary with locators.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 115.
```
</details>

<details>
<summary><code>long-context-116</code> - trace a decision across emails and docs (click to expand)</summary>

```text
Act as an expert archivist.
Trace a decision across emails and docs for execs.
The intended result is a gaps list.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 116.
```
</details>

<details>
<summary><code>long-context-117</code> - build a citation map for a claim family (click to expand)</summary>

```text
Act as a senior legal-discovery aide.
Build a citation map for a claim family for auditors.
The intended result is a canonical SOP draft.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Use tools where they help; state what evidence you checked before acting.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 117.
```
</details>

<details>
<summary><code>long-context-118</code> - build a FAQ from 200 support threads (click to expand)</summary>

```text
Act as a principal analyst.
Build a FAQ from 200 support threads for students.
The intended result is an evidence pack.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 118.
```
</details>

<details>
<summary><code>long-context-119</code> - reconcile conflicting specs across versions (click to expand)</summary>

```text
Act as a senior docs miner.
Reconcile conflicting specs across versions for support.
The intended result is a citation map.
Requirements: label authoritative vs reference sources explicitly; state what is stale and what
supersedes it.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 119.
```
</details>

<details>
<summary><code>long-context-120</code> - audit a contract set for renewal dates (click to expand)</summary>

```text
Act as an expert librarian.
Audit a contract set for renewal dates for engineering.
The intended result is a conflicts table with resolutions.
Requirements: note what was not found, not just what was; resolve conflicts by recency+authority,
then flag residue.
Compare against the provided reference and fix the largest gaps first.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 120.
```
</details>
