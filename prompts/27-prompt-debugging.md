# 🔍 Prompt Debugging & Audits - 120 copyable GPT-6 Astra prompts

> Trace stalls to the exact file/line: authority, conflicts, staleness.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](26-migration.md) · [Next](28-productivity.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>prompt-debugging-001</code> - diagnose why Astra keeps asking instead of acting (click to expand)</summary>

```text
Act as a senior prompt engineer.
Diagnose why Astra keeps asking instead of acting for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>prompt-debugging-002</code> - audit verbosity: find the formatting instruction causing bloat (click to expand)</summary>

```text
Act as an expert agent debugger.
Audit verbosity: find the formatting instruction causing bloat for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>prompt-debugging-003</code> - build a stop-word/slop-word lint pass (click to expand)</summary>

```text
Act as a senior DX engineer.
Build a stop-word/slop-word lint pass for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-004</code> - build a regression set from five real failures (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a regression set from five real failures for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>prompt-debugging-005</code> - audit PII leakage paths in a workflow (click to expand)</summary>

```text
Act as a senior skills curator.
Audit PII leakage paths in a workflow for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-006</code> - trace a scope-escape to its instruction source (click to expand)</summary>

```text
Act as an expert eval designer.
Trace a scope-escape to its instruction source for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-007</code> - design a canary eval before wide rollout (click to expand)</summary>

```text
Act as a senior prompt engineer.
Design a canary eval before wide rollout for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>prompt-debugging-008</code> - design a prompt A/B with success criteria (click to expand)</summary>

```text
Act as an expert agent debugger.
Design a prompt A/B with success criteria for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-009</code> - create a prompt-version log with diffs (click to expand)</summary>

```text
Act as a senior DX engineer.
Create a prompt-version log with diffs for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Use tools where they help; state what evidence you checked before acting.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>prompt-debugging-010</code> - build a minimal repro for a flaky agent run (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a minimal repro for a flaky agent run for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-011</code> - write a failure taxonomy with examples (click to expand)</summary>

```text
Act as a senior skills curator.
Write a failure taxonomy with examples for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-012</code> - audit AGENTS.md for conflicting instructions (click to expand)</summary>

```text
Act as an expert eval designer.
Audit AGENTS.md for conflicting instructions for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-013</code> - build a confusion matrix for a classifier prompt (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a confusion matrix for a classifier prompt for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>prompt-debugging-014</code> - find which SKILL.md line caused a stall and quote it (click to expand)</summary>

```text
Act as an expert agent debugger.
Find which SKILL.md line caused a stall and quote it for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>prompt-debugging-015</code> - diagnose over-testing on tiny diffs (click to expand)</summary>

```text
Act as a senior DX engineer.
Diagnose over-testing on tiny diffs for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-016</code> - diagnose why Astra keeps asking instead of acting (click to expand)</summary>

```text
Act as a staff AI auditor.
Diagnose why Astra keeps asking instead of acting for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>prompt-debugging-017</code> - audit verbosity: find the formatting instruction causing bloat (click to expand)</summary>

```text
Act as a senior skills curator.
Audit verbosity: find the formatting instruction causing bloat for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-018</code> - build a stop-word/slop-word lint pass (click to expand)</summary>

```text
Act as an expert eval designer.
Build a stop-word/slop-word lint pass for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-019</code> - build a regression set from five real failures (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a regression set from five real failures for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>prompt-debugging-020</code> - audit PII leakage paths in a workflow (click to expand)</summary>

```text
Act as an expert agent debugger.
Audit PII leakage paths in a workflow for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-021</code> - trace a scope-escape to its instruction source (click to expand)</summary>

```text
Act as a senior DX engineer.
Trace a scope-escape to its instruction source for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Use tools where they help; state what evidence you checked before acting.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>prompt-debugging-022</code> - design a canary eval before wide rollout (click to expand)</summary>

```text
Act as a staff AI auditor.
Design a canary eval before wide rollout for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>prompt-debugging-023</code> - design a prompt A/B with success criteria (click to expand)</summary>

```text
Act as a senior skills curator.
Design a prompt A/B with success criteria for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-024</code> - create a prompt-version log with diffs (click to expand)</summary>

```text
Act as an expert eval designer.
Create a prompt-version log with diffs for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-025</code> - build a minimal repro for a flaky agent run (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a minimal repro for a flaky agent run for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>prompt-debugging-026</code> - write a failure taxonomy with examples (click to expand)</summary>

```text
Act as an expert agent debugger.
Write a failure taxonomy with examples for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>prompt-debugging-027</code> - audit AGENTS.md for conflicting instructions (click to expand)</summary>

```text
Act as a senior DX engineer.
Audit AGENTS.md for conflicting instructions for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Use tools where they help; state what evidence you checked before acting.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>prompt-debugging-028</code> - build a confusion matrix for a classifier prompt (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a confusion matrix for a classifier prompt for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-029</code> - find which SKILL.md line caused a stall and quote it (click to expand)</summary>

```text
Act as a senior skills curator.
Find which SKILL.md line caused a stall and quote it for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-030</code> - diagnose over-testing on tiny diffs (click to expand)</summary>

```text
Act as an expert eval designer.
Diagnose over-testing on tiny diffs for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>prompt-debugging-031</code> - diagnose why Astra keeps asking instead of acting (click to expand)</summary>

```text
Act as a senior prompt engineer.
Diagnose why Astra keeps asking instead of acting for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 31.
```
</details>

<details>
<summary><code>prompt-debugging-032</code> - audit verbosity: find the formatting instruction causing bloat (click to expand)</summary>

```text
Act as an expert agent debugger.
Audit verbosity: find the formatting instruction causing bloat for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-033</code> - build a stop-word/slop-word lint pass (click to expand)</summary>

```text
Act as a senior DX engineer.
Build a stop-word/slop-word lint pass for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-034</code> - build a regression set from five real failures (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a regression set from five real failures for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-035</code> - audit PII leakage paths in a workflow (click to expand)</summary>

```text
Act as a senior skills curator.
Audit PII leakage paths in a workflow for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-036</code> - trace a scope-escape to its instruction source (click to expand)</summary>

```text
Act as an expert eval designer.
Trace a scope-escape to its instruction source for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 36.
```
</details>

<details>
<summary><code>prompt-debugging-037</code> - design a canary eval before wide rollout (click to expand)</summary>

```text
Act as a senior prompt engineer.
Design a canary eval before wide rollout for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 37.
```
</details>

<details>
<summary><code>prompt-debugging-038</code> - design a prompt A/B with success criteria (click to expand)</summary>

```text
Act as an expert agent debugger.
Design a prompt A/B with success criteria for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-039</code> - create a prompt-version log with diffs (click to expand)</summary>

```text
Act as a senior DX engineer.
Create a prompt-version log with diffs for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-040</code> - build a minimal repro for a flaky agent run (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a minimal repro for a flaky agent run for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-041</code> - write a failure taxonomy with examples (click to expand)</summary>

```text
Act as a senior skills curator.
Write a failure taxonomy with examples for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 41.
```
</details>

<details>
<summary><code>prompt-debugging-042</code> - audit AGENTS.md for conflicting instructions (click to expand)</summary>

```text
Act as an expert eval designer.
Audit AGENTS.md for conflicting instructions for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 42.
```
</details>

<details>
<summary><code>prompt-debugging-043</code> - build a confusion matrix for a classifier prompt (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a confusion matrix for a classifier prompt for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-044</code> - find which SKILL.md line caused a stall and quote it (click to expand)</summary>

```text
Act as an expert agent debugger.
Find which SKILL.md line caused a stall and quote it for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-045</code> - diagnose over-testing on tiny diffs (click to expand)</summary>

```text
Act as a senior DX engineer.
Diagnose over-testing on tiny diffs for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-046</code> - diagnose why Astra keeps asking instead of acting (click to expand)</summary>

```text
Act as a staff AI auditor.
Diagnose why Astra keeps asking instead of acting for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-047</code> - audit verbosity: find the formatting instruction causing bloat (click to expand)</summary>

```text
Act as a senior skills curator.
Audit verbosity: find the formatting instruction causing bloat for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 47.
```
</details>

<details>
<summary><code>prompt-debugging-048</code> - build a stop-word/slop-word lint pass (click to expand)</summary>

```text
Act as an expert eval designer.
Build a stop-word/slop-word lint pass for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-049</code> - build a regression set from five real failures (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a regression set from five real failures for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 49.
```
</details>

<details>
<summary><code>prompt-debugging-050</code> - audit PII leakage paths in a workflow (click to expand)</summary>

```text
Act as an expert agent debugger.
Audit PII leakage paths in a workflow for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-051</code> - trace a scope-escape to its instruction source (click to expand)</summary>

```text
Act as a senior DX engineer.
Trace a scope-escape to its instruction source for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-052</code> - design a canary eval before wide rollout (click to expand)</summary>

```text
Act as a staff AI auditor.
Design a canary eval before wide rollout for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-053</code> - design a prompt A/B with success criteria (click to expand)</summary>

```text
Act as a senior skills curator.
Design a prompt A/B with success criteria for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-054</code> - create a prompt-version log with diffs (click to expand)</summary>

```text
Act as an expert eval designer.
Create a prompt-version log with diffs for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 54.
```
</details>

<details>
<summary><code>prompt-debugging-055</code> - build a minimal repro for a flaky agent run (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a minimal repro for a flaky agent run for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-056</code> - write a failure taxonomy with examples (click to expand)</summary>

```text
Act as an expert agent debugger.
Write a failure taxonomy with examples for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-057</code> - audit AGENTS.md for conflicting instructions (click to expand)</summary>

```text
Act as a senior DX engineer.
Audit AGENTS.md for conflicting instructions for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-058</code> - build a confusion matrix for a classifier prompt (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a confusion matrix for a classifier prompt for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-059</code> - find which SKILL.md line caused a stall and quote it (click to expand)</summary>

```text
Act as a senior skills curator.
Find which SKILL.md line caused a stall and quote it for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 59.
```
</details>

<details>
<summary><code>prompt-debugging-060</code> - diagnose over-testing on tiny diffs (click to expand)</summary>

```text
Act as an expert eval designer.
Diagnose over-testing on tiny diffs for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-061</code> - diagnose why Astra keeps asking instead of acting (click to expand)</summary>

```text
Act as a senior prompt engineer.
Diagnose why Astra keeps asking instead of acting for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 61.
```
</details>

<details>
<summary><code>prompt-debugging-062</code> - audit verbosity: find the formatting instruction causing bloat (click to expand)</summary>

```text
Act as an expert agent debugger.
Audit verbosity: find the formatting instruction causing bloat for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-063</code> - build a stop-word/slop-word lint pass (click to expand)</summary>

```text
Act as a senior DX engineer.
Build a stop-word/slop-word lint pass for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-064</code> - build a regression set from five real failures (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a regression set from five real failures for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-065</code> - audit PII leakage paths in a workflow (click to expand)</summary>

```text
Act as a senior skills curator.
Audit PII leakage paths in a workflow for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-066</code> - trace a scope-escape to its instruction source (click to expand)</summary>

```text
Act as an expert eval designer.
Trace a scope-escape to its instruction source for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 66.
```
</details>

<details>
<summary><code>prompt-debugging-067</code> - design a canary eval before wide rollout (click to expand)</summary>

```text
Act as a senior prompt engineer.
Design a canary eval before wide rollout for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 67.
```
</details>

<details>
<summary><code>prompt-debugging-068</code> - design a prompt A/B with success criteria (click to expand)</summary>

```text
Act as an expert agent debugger.
Design a prompt A/B with success criteria for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-069</code> - create a prompt-version log with diffs (click to expand)</summary>

```text
Act as a senior DX engineer.
Create a prompt-version log with diffs for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-070</code> - build a minimal repro for a flaky agent run (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a minimal repro for a flaky agent run for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-071</code> - write a failure taxonomy with examples (click to expand)</summary>

```text
Act as a senior skills curator.
Write a failure taxonomy with examples for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 71.
```
</details>

<details>
<summary><code>prompt-debugging-072</code> - audit AGENTS.md for conflicting instructions (click to expand)</summary>

```text
Act as an expert eval designer.
Audit AGENTS.md for conflicting instructions for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 72.
```
</details>

<details>
<summary><code>prompt-debugging-073</code> - build a confusion matrix for a classifier prompt (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a confusion matrix for a classifier prompt for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-074</code> - find which SKILL.md line caused a stall and quote it (click to expand)</summary>

```text
Act as an expert agent debugger.
Find which SKILL.md line caused a stall and quote it for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-075</code> - diagnose over-testing on tiny diffs (click to expand)</summary>

```text
Act as a senior DX engineer.
Diagnose over-testing on tiny diffs for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-076</code> - diagnose why Astra keeps asking instead of acting (click to expand)</summary>

```text
Act as a staff AI auditor.
Diagnose why Astra keeps asking instead of acting for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-077</code> - audit verbosity: find the formatting instruction causing bloat (click to expand)</summary>

```text
Act as a senior skills curator.
Audit verbosity: find the formatting instruction causing bloat for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 77.
```
</details>

<details>
<summary><code>prompt-debugging-078</code> - build a stop-word/slop-word lint pass (click to expand)</summary>

```text
Act as an expert eval designer.
Build a stop-word/slop-word lint pass for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-079</code> - build a regression set from five real failures (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a regression set from five real failures for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 79.
```
</details>

<details>
<summary><code>prompt-debugging-080</code> - audit PII leakage paths in a workflow (click to expand)</summary>

```text
Act as an expert agent debugger.
Audit PII leakage paths in a workflow for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-081</code> - trace a scope-escape to its instruction source (click to expand)</summary>

```text
Act as a senior DX engineer.
Trace a scope-escape to its instruction source for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-082</code> - design a canary eval before wide rollout (click to expand)</summary>

```text
Act as a staff AI auditor.
Design a canary eval before wide rollout for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-083</code> - design a prompt A/B with success criteria (click to expand)</summary>

```text
Act as a senior skills curator.
Design a prompt A/B with success criteria for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-084</code> - create a prompt-version log with diffs (click to expand)</summary>

```text
Act as an expert eval designer.
Create a prompt-version log with diffs for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 84.
```
</details>

<details>
<summary><code>prompt-debugging-085</code> - build a minimal repro for a flaky agent run (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a minimal repro for a flaky agent run for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-086</code> - write a failure taxonomy with examples (click to expand)</summary>

```text
Act as an expert agent debugger.
Write a failure taxonomy with examples for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-087</code> - audit AGENTS.md for conflicting instructions (click to expand)</summary>

```text
Act as a senior DX engineer.
Audit AGENTS.md for conflicting instructions for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-088</code> - build a confusion matrix for a classifier prompt (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a confusion matrix for a classifier prompt for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-089</code> - find which SKILL.md line caused a stall and quote it (click to expand)</summary>

```text
Act as a senior skills curator.
Find which SKILL.md line caused a stall and quote it for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 89.
```
</details>

<details>
<summary><code>prompt-debugging-090</code> - diagnose over-testing on tiny diffs (click to expand)</summary>

```text
Act as an expert eval designer.
Diagnose over-testing on tiny diffs for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-091</code> - diagnose why Astra keeps asking instead of acting (click to expand)</summary>

```text
Act as a senior prompt engineer.
Diagnose why Astra keeps asking instead of acting for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 91.
```
</details>

<details>
<summary><code>prompt-debugging-092</code> - audit verbosity: find the formatting instruction causing bloat (click to expand)</summary>

```text
Act as an expert agent debugger.
Audit verbosity: find the formatting instruction causing bloat for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-093</code> - build a stop-word/slop-word lint pass (click to expand)</summary>

```text
Act as a senior DX engineer.
Build a stop-word/slop-word lint pass for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-094</code> - build a regression set from five real failures (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a regression set from five real failures for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-095</code> - audit PII leakage paths in a workflow (click to expand)</summary>

```text
Act as a senior skills curator.
Audit PII leakage paths in a workflow for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-096</code> - trace a scope-escape to its instruction source (click to expand)</summary>

```text
Act as an expert eval designer.
Trace a scope-escape to its instruction source for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 96.
```
</details>

<details>
<summary><code>prompt-debugging-097</code> - design a canary eval before wide rollout (click to expand)</summary>

```text
Act as a senior prompt engineer.
Design a canary eval before wide rollout for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 97.
```
</details>

<details>
<summary><code>prompt-debugging-098</code> - design a prompt A/B with success criteria (click to expand)</summary>

```text
Act as an expert agent debugger.
Design a prompt A/B with success criteria for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-099</code> - create a prompt-version log with diffs (click to expand)</summary>

```text
Act as a senior DX engineer.
Create a prompt-version log with diffs for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-100</code> - build a minimal repro for a flaky agent run (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a minimal repro for a flaky agent run for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-101</code> - write a failure taxonomy with examples (click to expand)</summary>

```text
Act as a senior skills curator.
Write a failure taxonomy with examples for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 101.
```
</details>

<details>
<summary><code>prompt-debugging-102</code> - audit AGENTS.md for conflicting instructions (click to expand)</summary>

```text
Act as an expert eval designer.
Audit AGENTS.md for conflicting instructions for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 102.
```
</details>

<details>
<summary><code>prompt-debugging-103</code> - build a confusion matrix for a classifier prompt (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a confusion matrix for a classifier prompt for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-104</code> - find which SKILL.md line caused a stall and quote it (click to expand)</summary>

```text
Act as an expert agent debugger.
Find which SKILL.md line caused a stall and quote it for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-105</code> - diagnose over-testing on tiny diffs (click to expand)</summary>

```text
Act as a senior DX engineer.
Diagnose over-testing on tiny diffs for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-106</code> - diagnose why Astra keeps asking instead of acting (click to expand)</summary>

```text
Act as a staff AI auditor.
Diagnose why Astra keeps asking instead of acting for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-107</code> - audit verbosity: find the formatting instruction causing bloat (click to expand)</summary>

```text
Act as a senior skills curator.
Audit verbosity: find the formatting instruction causing bloat for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 107.
```
</details>

<details>
<summary><code>prompt-debugging-108</code> - build a stop-word/slop-word lint pass (click to expand)</summary>

```text
Act as an expert eval designer.
Build a stop-word/slop-word lint pass for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-109</code> - build a regression set from five real failures (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a regression set from five real failures for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 109.
```
</details>

<details>
<summary><code>prompt-debugging-110</code> - audit PII leakage paths in a workflow (click to expand)</summary>

```text
Act as an expert agent debugger.
Audit PII leakage paths in a workflow for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-111</code> - trace a scope-escape to its instruction source (click to expand)</summary>

```text
Act as a senior DX engineer.
Trace a scope-escape to its instruction source for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-112</code> - design a canary eval before wide rollout (click to expand)</summary>

```text
Act as a staff AI auditor.
Design a canary eval before wide rollout for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-113</code> - design a prompt A/B with success criteria (click to expand)</summary>

```text
Act as a senior skills curator.
Design a prompt A/B with success criteria for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-114</code> - create a prompt-version log with diffs (click to expand)</summary>

```text
Act as an expert eval designer.
Create a prompt-version log with diffs for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 114.
```
</details>

<details>
<summary><code>prompt-debugging-115</code> - build a minimal repro for a flaky agent run (click to expand)</summary>

```text
Act as a senior prompt engineer.
Build a minimal repro for a flaky agent run for a platform team.
The intended result is a diagnosis with quoted evidence.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-116</code> - write a failure taxonomy with examples (click to expand)</summary>

```text
Act as an expert agent debugger.
Write a failure taxonomy with examples for a client audit.
The intended result is a version log.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-117</code> - audit AGENTS.md for conflicting instructions (click to expand)</summary>

```text
Act as a senior DX engineer.
Audit AGENTS.md for conflicting instructions for open source.
The intended result is a regression pack.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
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
<summary><code>prompt-debugging-118</code> - build a confusion matrix for a classifier prompt (click to expand)</summary>

```text
Act as a staff AI auditor.
Build a confusion matrix for a classifier prompt for a classroom.
The intended result is a cleaned instruction set.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
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
<summary><code>prompt-debugging-119</code> - find which SKILL.md line caused a stall and quote it (click to expand)</summary>

```text
Act as a senior skills curator.
Find which SKILL.md line caused a stall and quote it for an enterprise.
The intended result is an A/B plan with metrics.
Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent
from inferred context.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 119.
```
</details>

<details>
<summary><code>prompt-debugging-120</code> - diagnose over-testing on tiny diffs (click to expand)</summary>

```text
Act as an expert eval designer.
Diagnose over-testing on tiny diffs for a startup.
The intended result is a minimal repro.
Requirements: one variable per A/B; keep failing transcripts verbatim for review.
Compare against the provided reference and fix the largest gaps first.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 120.
```
</details>
