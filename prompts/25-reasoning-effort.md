# 🎚️ Reasoning Effort Tuning - 90 copyable GPT-6 Astra prompts

> low→max calibration: start low/medium, escalate only with evidence.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](24-structured-outputs.md) · [Next](26-migration.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>reasoning-effort-001</code> - pick effort for a CRUD ticket vs a distributed bug (click to expand)</summary>

```text
Act as a senior model tuner.
Pick effort for a CRUD ticket vs a distributed bug for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-002</code> - decide when xhigh/max is justified with a checklist (click to expand)</summary>

```text
Act as an expert eval engineer.
Decide when xhigh/max is justified with a checklist for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-003</code> - write an incident note when max still fails (click to expand)</summary>

```text
Act as a senior performance engineer.
Write an incident note when max still fails for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-004</code> - tune effort for long-doc QA vs short chat (click to expand)</summary>

```text
Act as a cost-optimization lead.
Tune effort for long-doc QA vs short chat for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-005</code> - create an effort-selection flowchart (click to expand)</summary>

```text
Act as a senior reliability engineer.
Create an effort-selection flowchart for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-006</code> - build a prompt+effort matrix for support macros (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a prompt+effort matrix for support macros for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-007</code> - tune verification depth alongside effort (click to expand)</summary>

```text
Act as a senior model tuner.
Tune verification depth alongside effort for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-008</code> - measure cost-per-task across efforts with retries counted (click to expand)</summary>

```text
Act as an expert eval engineer.
Measure cost-per-task across efforts with retries counted for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-009</code> - build a cache strategy to offset higher effort (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a cache strategy to offset higher effort for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-010</code> - diagnose a save-but-lost-on-refresh bug before escalating effort (click to expand)</summary>

```text
Act as a cost-optimization lead.
Diagnose a save-but-lost-on-refresh bug before escalating effort for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-011</code> - design a fallback: low first, escalate on failure signals (click to expand)</summary>

```text
Act as a senior reliability engineer.
Design a fallback: low first, escalate on failure signals for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-012</code> - build a routing rule: fast lane vs deep lane (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a routing rule: fast lane vs deep lane for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-013</code> - analyze latency vs quality trade-offs (click to expand)</summary>

```text
Act as a senior model tuner.
Analyze latency vs quality trade-offs for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-014</code> - design an eval to compare medium vs high on your workload (click to expand)</summary>

```text
Act as an expert eval engineer.
Design an eval to compare medium vs high on your workload for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-015</code> - build a regression pack that pins effort per task type (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a regression pack that pins effort per task type for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-016</code> - pick effort for a CRUD ticket vs a distributed bug (click to expand)</summary>

```text
Act as a cost-optimization lead.
Pick effort for a CRUD ticket vs a distributed bug for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-017</code> - decide when xhigh/max is justified with a checklist (click to expand)</summary>

```text
Act as a senior reliability engineer.
Decide when xhigh/max is justified with a checklist for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-018</code> - write an incident note when max still fails (click to expand)</summary>

```text
Act as an expert latency analyst.
Write an incident note when max still fails for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-019</code> - tune effort for long-doc QA vs short chat (click to expand)</summary>

```text
Act as a senior model tuner.
Tune effort for long-doc QA vs short chat for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-020</code> - create an effort-selection flowchart (click to expand)</summary>

```text
Act as an expert eval engineer.
Create an effort-selection flowchart for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-021</code> - build a prompt+effort matrix for support macros (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a prompt+effort matrix for support macros for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-022</code> - tune verification depth alongside effort (click to expand)</summary>

```text
Act as a cost-optimization lead.
Tune verification depth alongside effort for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-023</code> - measure cost-per-task across efforts with retries counted (click to expand)</summary>

```text
Act as a senior reliability engineer.
Measure cost-per-task across efforts with retries counted for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-024</code> - build a cache strategy to offset higher effort (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a cache strategy to offset higher effort for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-025</code> - diagnose a save-but-lost-on-refresh bug before escalating effort (click to expand)</summary>

```text
Act as a senior model tuner.
Diagnose a save-but-lost-on-refresh bug before escalating effort for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-026</code> - design a fallback: low first, escalate on failure signals (click to expand)</summary>

```text
Act as an expert eval engineer.
Design a fallback: low first, escalate on failure signals for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>reasoning-effort-027</code> - build a routing rule: fast lane vs deep lane (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a routing rule: fast lane vs deep lane for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-028</code> - analyze latency vs quality trade-offs (click to expand)</summary>

```text
Act as a cost-optimization lead.
Analyze latency vs quality trade-offs for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>reasoning-effort-029</code> - design an eval to compare medium vs high on your workload (click to expand)</summary>

```text
Act as a senior reliability engineer.
Design an eval to compare medium vs high on your workload for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-030</code> - build a regression pack that pins effort per task type (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a regression pack that pins effort per task type for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>reasoning-effort-031</code> - pick effort for a CRUD ticket vs a distributed bug (click to expand)</summary>

```text
Act as a senior model tuner.
Pick effort for a CRUD ticket vs a distributed bug for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 31.
```
</details>

<details>
<summary><code>reasoning-effort-032</code> - decide when xhigh/max is justified with a checklist (click to expand)</summary>

```text
Act as an expert eval engineer.
Decide when xhigh/max is justified with a checklist for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 32.
```
</details>

<details>
<summary><code>reasoning-effort-033</code> - write an incident note when max still fails (click to expand)</summary>

```text
Act as a senior performance engineer.
Write an incident note when max still fails for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
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
<summary><code>reasoning-effort-034</code> - tune effort for long-doc QA vs short chat (click to expand)</summary>

```text
Act as a cost-optimization lead.
Tune effort for long-doc QA vs short chat for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 34.
```
</details>

<details>
<summary><code>reasoning-effort-035</code> - create an effort-selection flowchart (click to expand)</summary>

```text
Act as a senior reliability engineer.
Create an effort-selection flowchart for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 35.
```
</details>

<details>
<summary><code>reasoning-effort-036</code> - build a prompt+effort matrix for support macros (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a prompt+effort matrix for support macros for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 36.
```
</details>

<details>
<summary><code>reasoning-effort-037</code> - tune verification depth alongside effort (click to expand)</summary>

```text
Act as a senior model tuner.
Tune verification depth alongside effort for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 37.
```
</details>

<details>
<summary><code>reasoning-effort-038</code> - measure cost-per-task across efforts with retries counted (click to expand)</summary>

```text
Act as an expert eval engineer.
Measure cost-per-task across efforts with retries counted for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 38.
```
</details>

<details>
<summary><code>reasoning-effort-039</code> - build a cache strategy to offset higher effort (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a cache strategy to offset higher effort for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 39.
```
</details>

<details>
<summary><code>reasoning-effort-040</code> - diagnose a save-but-lost-on-refresh bug before escalating effort (click to expand)</summary>

```text
Act as a cost-optimization lead.
Diagnose a save-but-lost-on-refresh bug before escalating effort for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
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
<summary><code>reasoning-effort-041</code> - design a fallback: low first, escalate on failure signals (click to expand)</summary>

```text
Act as a senior reliability engineer.
Design a fallback: low first, escalate on failure signals for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 41.
```
</details>

<details>
<summary><code>reasoning-effort-042</code> - build a routing rule: fast lane vs deep lane (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a routing rule: fast lane vs deep lane for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 42.
```
</details>

<details>
<summary><code>reasoning-effort-043</code> - analyze latency vs quality trade-offs (click to expand)</summary>

```text
Act as a senior model tuner.
Analyze latency vs quality trade-offs for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 43.
```
</details>

<details>
<summary><code>reasoning-effort-044</code> - design an eval to compare medium vs high on your workload (click to expand)</summary>

```text
Act as an expert eval engineer.
Design an eval to compare medium vs high on your workload for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 44.
```
</details>

<details>
<summary><code>reasoning-effort-045</code> - build a regression pack that pins effort per task type (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a regression pack that pins effort per task type for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
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
<summary><code>reasoning-effort-046</code> - pick effort for a CRUD ticket vs a distributed bug (click to expand)</summary>

```text
Act as a cost-optimization lead.
Pick effort for a CRUD ticket vs a distributed bug for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 46.
```
</details>

<details>
<summary><code>reasoning-effort-047</code> - decide when xhigh/max is justified with a checklist (click to expand)</summary>

```text
Act as a senior reliability engineer.
Decide when xhigh/max is justified with a checklist for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 47.
```
</details>

<details>
<summary><code>reasoning-effort-048</code> - write an incident note when max still fails (click to expand)</summary>

```text
Act as an expert latency analyst.
Write an incident note when max still fails for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 48.
```
</details>

<details>
<summary><code>reasoning-effort-049</code> - tune effort for long-doc QA vs short chat (click to expand)</summary>

```text
Act as a senior model tuner.
Tune effort for long-doc QA vs short chat for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 49.
```
</details>

<details>
<summary><code>reasoning-effort-050</code> - create an effort-selection flowchart (click to expand)</summary>

```text
Act as an expert eval engineer.
Create an effort-selection flowchart for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 50.
```
</details>

<details>
<summary><code>reasoning-effort-051</code> - build a prompt+effort matrix for support macros (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a prompt+effort matrix for support macros for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 51.
```
</details>

<details>
<summary><code>reasoning-effort-052</code> - tune verification depth alongside effort (click to expand)</summary>

```text
Act as a cost-optimization lead.
Tune verification depth alongside effort for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 52.
```
</details>

<details>
<summary><code>reasoning-effort-053</code> - measure cost-per-task across efforts with retries counted (click to expand)</summary>

```text
Act as a senior reliability engineer.
Measure cost-per-task across efforts with retries counted for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 53.
```
</details>

<details>
<summary><code>reasoning-effort-054</code> - build a cache strategy to offset higher effort (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a cache strategy to offset higher effort for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 54.
```
</details>

<details>
<summary><code>reasoning-effort-055</code> - diagnose a save-but-lost-on-refresh bug before escalating effort (click to expand)</summary>

```text
Act as a senior model tuner.
Diagnose a save-but-lost-on-refresh bug before escalating effort for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 55.
```
</details>

<details>
<summary><code>reasoning-effort-056</code> - design a fallback: low first, escalate on failure signals (click to expand)</summary>

```text
Act as an expert eval engineer.
Design a fallback: low first, escalate on failure signals for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 56.
```
</details>

<details>
<summary><code>reasoning-effort-057</code> - build a routing rule: fast lane vs deep lane (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a routing rule: fast lane vs deep lane for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 57.
```
</details>

<details>
<summary><code>reasoning-effort-058</code> - analyze latency vs quality trade-offs (click to expand)</summary>

```text
Act as a cost-optimization lead.
Analyze latency vs quality trade-offs for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
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
<summary><code>reasoning-effort-059</code> - design an eval to compare medium vs high on your workload (click to expand)</summary>

```text
Act as a senior reliability engineer.
Design an eval to compare medium vs high on your workload for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 59.
```
</details>

<details>
<summary><code>reasoning-effort-060</code> - build a regression pack that pins effort per task type (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a regression pack that pins effort per task type for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 60.
```
</details>

<details>
<summary><code>reasoning-effort-061</code> - pick effort for a CRUD ticket vs a distributed bug (click to expand)</summary>

```text
Act as a senior model tuner.
Pick effort for a CRUD ticket vs a distributed bug for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 61.
```
</details>

<details>
<summary><code>reasoning-effort-062</code> - decide when xhigh/max is justified with a checklist (click to expand)</summary>

```text
Act as an expert eval engineer.
Decide when xhigh/max is justified with a checklist for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 62.
```
</details>

<details>
<summary><code>reasoning-effort-063</code> - write an incident note when max still fails (click to expand)</summary>

```text
Act as a senior performance engineer.
Write an incident note when max still fails for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
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
<summary><code>reasoning-effort-064</code> - tune effort for long-doc QA vs short chat (click to expand)</summary>

```text
Act as a cost-optimization lead.
Tune effort for long-doc QA vs short chat for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 64.
```
</details>

<details>
<summary><code>reasoning-effort-065</code> - create an effort-selection flowchart (click to expand)</summary>

```text
Act as a senior reliability engineer.
Create an effort-selection flowchart for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 65.
```
</details>

<details>
<summary><code>reasoning-effort-066</code> - build a prompt+effort matrix for support macros (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a prompt+effort matrix for support macros for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 66.
```
</details>

<details>
<summary><code>reasoning-effort-067</code> - tune verification depth alongside effort (click to expand)</summary>

```text
Act as a senior model tuner.
Tune verification depth alongside effort for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 67.
```
</details>

<details>
<summary><code>reasoning-effort-068</code> - measure cost-per-task across efforts with retries counted (click to expand)</summary>

```text
Act as an expert eval engineer.
Measure cost-per-task across efforts with retries counted for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 68.
```
</details>

<details>
<summary><code>reasoning-effort-069</code> - build a cache strategy to offset higher effort (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a cache strategy to offset higher effort for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 69.
```
</details>

<details>
<summary><code>reasoning-effort-070</code> - diagnose a save-but-lost-on-refresh bug before escalating effort (click to expand)</summary>

```text
Act as a cost-optimization lead.
Diagnose a save-but-lost-on-refresh bug before escalating effort for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
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
<summary><code>reasoning-effort-071</code> - design a fallback: low first, escalate on failure signals (click to expand)</summary>

```text
Act as a senior reliability engineer.
Design a fallback: low first, escalate on failure signals for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 71.
```
</details>

<details>
<summary><code>reasoning-effort-072</code> - build a routing rule: fast lane vs deep lane (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a routing rule: fast lane vs deep lane for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 72.
```
</details>

<details>
<summary><code>reasoning-effort-073</code> - analyze latency vs quality trade-offs (click to expand)</summary>

```text
Act as a senior model tuner.
Analyze latency vs quality trade-offs for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 73.
```
</details>

<details>
<summary><code>reasoning-effort-074</code> - design an eval to compare medium vs high on your workload (click to expand)</summary>

```text
Act as an expert eval engineer.
Design an eval to compare medium vs high on your workload for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 74.
```
</details>

<details>
<summary><code>reasoning-effort-075</code> - build a regression pack that pins effort per task type (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a regression pack that pins effort per task type for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
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
<summary><code>reasoning-effort-076</code> - pick effort for a CRUD ticket vs a distributed bug (click to expand)</summary>

```text
Act as a cost-optimization lead.
Pick effort for a CRUD ticket vs a distributed bug for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 76.
```
</details>

<details>
<summary><code>reasoning-effort-077</code> - decide when xhigh/max is justified with a checklist (click to expand)</summary>

```text
Act as a senior reliability engineer.
Decide when xhigh/max is justified with a checklist for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 77.
```
</details>

<details>
<summary><code>reasoning-effort-078</code> - write an incident note when max still fails (click to expand)</summary>

```text
Act as an expert latency analyst.
Write an incident note when max still fails for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 78.
```
</details>

<details>
<summary><code>reasoning-effort-079</code> - tune effort for long-doc QA vs short chat (click to expand)</summary>

```text
Act as a senior model tuner.
Tune effort for long-doc QA vs short chat for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 79.
```
</details>

<details>
<summary><code>reasoning-effort-080</code> - create an effort-selection flowchart (click to expand)</summary>

```text
Act as an expert eval engineer.
Create an effort-selection flowchart for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 80.
```
</details>

<details>
<summary><code>reasoning-effort-081</code> - build a prompt+effort matrix for support macros (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a prompt+effort matrix for support macros for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 81.
```
</details>

<details>
<summary><code>reasoning-effort-082</code> - tune verification depth alongside effort (click to expand)</summary>

```text
Act as a cost-optimization lead.
Tune verification depth alongside effort for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 82.
```
</details>

<details>
<summary><code>reasoning-effort-083</code> - measure cost-per-task across efforts with retries counted (click to expand)</summary>

```text
Act as a senior reliability engineer.
Measure cost-per-task across efforts with retries counted for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 83.
```
</details>

<details>
<summary><code>reasoning-effort-084</code> - build a cache strategy to offset higher effort (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a cache strategy to offset higher effort for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 84.
```
</details>

<details>
<summary><code>reasoning-effort-085</code> - diagnose a save-but-lost-on-refresh bug before escalating effort (click to expand)</summary>

```text
Act as a senior model tuner.
Diagnose a save-but-lost-on-refresh bug before escalating effort for a startup budget.
The intended result is an effort recommendation with rationale.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 85.
```
</details>

<details>
<summary><code>reasoning-effort-086</code> - design a fallback: low first, escalate on failure signals (click to expand)</summary>

```text
Act as an expert eval engineer.
Design a fallback: low first, escalate on failure signals for a nonprofit.
The intended result is a pinned config snippet.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 86.
```
</details>

<details>
<summary><code>reasoning-effort-087</code> - build a routing rule: fast lane vs deep lane (click to expand)</summary>

```text
Act as a senior performance engineer.
Build a routing rule: fast lane vs deep lane for a research lab.
The intended result is a flowchart description.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 87.
```
</details>

<details>
<summary><code>reasoning-effort-088</code> - analyze latency vs quality trade-offs (click to expand)</summary>

```text
Act as a cost-optimization lead.
Analyze latency vs quality trade-offs for a high-traffic API.
The intended result is a cost/latency report outline.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
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
<summary><code>reasoning-effort-089</code> - design an eval to compare medium vs high on your workload (click to expand)</summary>

```text
Act as a senior reliability engineer.
Design an eval to compare medium vs high on your workload for a classroom.
The intended result is a routing rule table.
Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and
tried-steps when escalating.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 89.
```
</details>

<details>
<summary><code>reasoning-effort-090</code> - build a regression pack that pins effort per task type (click to expand)</summary>

```text
Act as an expert latency analyst.
Build a regression pack that pins effort per task type for an enterprise pilot.
The intended result is an eval plan with pass criteria.
Requirements: pin effort per task type after evals; note gateway default is low; set explicitly.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 90.
```
</details>
