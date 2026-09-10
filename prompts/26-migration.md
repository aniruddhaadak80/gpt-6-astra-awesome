# 🔀 Migration: GPT-5.x → Astra - 120 copyable GPT-6 Astra prompts

> Checklist migration: Responses API, removed params, cache, subagents, verification.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](25-reasoning-effort.md) · [Next](27-prompt-debugging.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>migration-001</code> - migrate a Chat Completions tool app to the Responses API (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a Chat Completions tool app to the Responses API for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>migration-002</code> - migrate a RAG app's citation format to Astra style (click to expand)</summary>

```text
Act as an expert API integrator.
Migrate a RAG app's citation format to Astra style for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-003</code> - run the $openai-docs migrate checklist with sign-off (click to expand)</summary>

```text
Act as a senior platform engineer.
Run the $openai-docs migrate checklist with sign-off for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-004</code> - re-baseline evals after the model swap (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Re-baseline evals after the model swap for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-005</code> - migrate a support bot's verbosity to concise paragraphs (click to expand)</summary>

```text
Act as a senior QA migration tester.
Migrate a support bot's verbosity to concise paragraphs for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-006</code> - migrate a multi-agent harness to Astra delegation norms (click to expand)</summary>

```text
Act as an expert docs migrator.
Migrate a multi-agent harness to Astra delegation norms for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>migration-007</code> - build a rollback plan if Astra regresses a task (click to expand)</summary>

```text
Act as a senior migration lead.
Build a rollback plan if Astra regresses a task for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>migration-008</code> - update cache config for Astra's read/write pricing (click to expand)</summary>

```text
Act as an expert API integrator.
Update cache config for Astra's read/write pricing for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-009</code> - migrate structured-output schemas with semantic prompts (click to expand)</summary>

```text
Act as a senior platform engineer.
Migrate structured-output schemas with semantic prompts for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-010</code> - migrate a GPT-5.6 Sol agent to Astra's autonomy model (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-011</code> - re-price a workload at $10/$50 with cache math (click to expand)</summary>

```text
Act as a senior QA migration tester.
Re-price a workload at $10/$50 with cache math for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>migration-012</code> - re-tune prompts that over-ask after moving to Astra (click to expand)</summary>

```text
Act as an expert docs migrator.
Re-tune prompts that over-ask after moving to Astra for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>migration-013</code> - migrate a browser-use workflow with new stop rules (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a browser-use workflow with new stop rules for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-014</code> - remove temperature/top_p/logprobs with behavior checks (click to expand)</summary>

```text
Act as an expert API integrator.
Remove temperature/top_p/logprobs with behavior checks for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-015</code> - update AGENTS.md/SKILL.md priority blocks for Astra (click to expand)</summary>

```text
Act as a senior platform engineer.
Update AGENTS.md/SKILL.md priority blocks for Astra for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-016</code> - migrate a Chat Completions tool app to the Responses API (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a Chat Completions tool app to the Responses API for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-017</code> - migrate a RAG app's citation format to Astra style (click to expand)</summary>

```text
Act as a senior QA migration tester.
Migrate a RAG app's citation format to Astra style for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>migration-018</code> - run the $openai-docs migrate checklist with sign-off (click to expand)</summary>

```text
Act as an expert docs migrator.
Run the $openai-docs migrate checklist with sign-off for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-019</code> - re-baseline evals after the model swap (click to expand)</summary>

```text
Act as a senior migration lead.
Re-baseline evals after the model swap for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>migration-020</code> - migrate a support bot's verbosity to concise paragraphs (click to expand)</summary>

```text
Act as an expert API integrator.
Migrate a support bot's verbosity to concise paragraphs for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-021</code> - migrate a multi-agent harness to Astra delegation norms (click to expand)</summary>

```text
Act as a senior platform engineer.
Migrate a multi-agent harness to Astra delegation norms for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-022</code> - build a rollback plan if Astra regresses a task (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Build a rollback plan if Astra regresses a task for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-023</code> - update cache config for Astra's read/write pricing (click to expand)</summary>

```text
Act as a senior QA migration tester.
Update cache config for Astra's read/write pricing for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-024</code> - migrate structured-output schemas with semantic prompts (click to expand)</summary>

```text
Act as an expert docs migrator.
Migrate structured-output schemas with semantic prompts for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>migration-025</code> - migrate a GPT-5.6 Sol agent to Astra's autonomy model (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-026</code> - re-price a workload at $10/$50 with cache math (click to expand)</summary>

```text
Act as an expert API integrator.
Re-price a workload at $10/$50 with cache math for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-027</code> - re-tune prompts that over-ask after moving to Astra (click to expand)</summary>

```text
Act as a senior platform engineer.
Re-tune prompts that over-ask after moving to Astra for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-028</code> - migrate a browser-use workflow with new stop rules (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a browser-use workflow with new stop rules for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-029</code> - remove temperature/top_p/logprobs with behavior checks (click to expand)</summary>

```text
Act as a senior QA migration tester.
Remove temperature/top_p/logprobs with behavior checks for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>migration-030</code> - update AGENTS.md/SKILL.md priority blocks for Astra (click to expand)</summary>

```text
Act as an expert docs migrator.
Update AGENTS.md/SKILL.md priority blocks for Astra for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-031</code> - migrate a Chat Completions tool app to the Responses API (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a Chat Completions tool app to the Responses API for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-032</code> - migrate a RAG app's citation format to Astra style (click to expand)</summary>

```text
Act as an expert API integrator.
Migrate a RAG app's citation format to Astra style for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-033</code> - run the $openai-docs migrate checklist with sign-off (click to expand)</summary>

```text
Act as a senior platform engineer.
Run the $openai-docs migrate checklist with sign-off for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-034</code> - re-baseline evals after the model swap (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Re-baseline evals after the model swap for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-035</code> - migrate a support bot's verbosity to concise paragraphs (click to expand)</summary>

```text
Act as a senior QA migration tester.
Migrate a support bot's verbosity to concise paragraphs for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-036</code> - migrate a multi-agent harness to Astra delegation norms (click to expand)</summary>

```text
Act as an expert docs migrator.
Migrate a multi-agent harness to Astra delegation norms for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-037</code> - build a rollback plan if Astra regresses a task (click to expand)</summary>

```text
Act as a senior migration lead.
Build a rollback plan if Astra regresses a task for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-038</code> - update cache config for Astra's read/write pricing (click to expand)</summary>

```text
Act as an expert API integrator.
Update cache config for Astra's read/write pricing for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-039</code> - migrate structured-output schemas with semantic prompts (click to expand)</summary>

```text
Act as a senior platform engineer.
Migrate structured-output schemas with semantic prompts for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-040</code> - migrate a GPT-5.6 Sol agent to Astra's autonomy model (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-041</code> - re-price a workload at $10/$50 with cache math (click to expand)</summary>

```text
Act as a senior QA migration tester.
Re-price a workload at $10/$50 with cache math for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-042</code> - re-tune prompts that over-ask after moving to Astra (click to expand)</summary>

```text
Act as an expert docs migrator.
Re-tune prompts that over-ask after moving to Astra for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-043</code> - migrate a browser-use workflow with new stop rules (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a browser-use workflow with new stop rules for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-044</code> - remove temperature/top_p/logprobs with behavior checks (click to expand)</summary>

```text
Act as an expert API integrator.
Remove temperature/top_p/logprobs with behavior checks for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-045</code> - update AGENTS.md/SKILL.md priority blocks for Astra (click to expand)</summary>

```text
Act as a senior platform engineer.
Update AGENTS.md/SKILL.md priority blocks for Astra for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-046</code> - migrate a Chat Completions tool app to the Responses API (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a Chat Completions tool app to the Responses API for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-047</code> - migrate a RAG app's citation format to Astra style (click to expand)</summary>

```text
Act as a senior QA migration tester.
Migrate a RAG app's citation format to Astra style for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-048</code> - run the $openai-docs migrate checklist with sign-off (click to expand)</summary>

```text
Act as an expert docs migrator.
Run the $openai-docs migrate checklist with sign-off for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-049</code> - re-baseline evals after the model swap (click to expand)</summary>

```text
Act as a senior migration lead.
Re-baseline evals after the model swap for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-050</code> - migrate a support bot's verbosity to concise paragraphs (click to expand)</summary>

```text
Act as an expert API integrator.
Migrate a support bot's verbosity to concise paragraphs for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-051</code> - migrate a multi-agent harness to Astra delegation norms (click to expand)</summary>

```text
Act as a senior platform engineer.
Migrate a multi-agent harness to Astra delegation norms for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-052</code> - build a rollback plan if Astra regresses a task (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Build a rollback plan if Astra regresses a task for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-053</code> - update cache config for Astra's read/write pricing (click to expand)</summary>

```text
Act as a senior QA migration tester.
Update cache config for Astra's read/write pricing for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-054</code> - migrate structured-output schemas with semantic prompts (click to expand)</summary>

```text
Act as an expert docs migrator.
Migrate structured-output schemas with semantic prompts for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-055</code> - migrate a GPT-5.6 Sol agent to Astra's autonomy model (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-056</code> - re-price a workload at $10/$50 with cache math (click to expand)</summary>

```text
Act as an expert API integrator.
Re-price a workload at $10/$50 with cache math for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-057</code> - re-tune prompts that over-ask after moving to Astra (click to expand)</summary>

```text
Act as a senior platform engineer.
Re-tune prompts that over-ask after moving to Astra for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-058</code> - migrate a browser-use workflow with new stop rules (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a browser-use workflow with new stop rules for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-059</code> - remove temperature/top_p/logprobs with behavior checks (click to expand)</summary>

```text
Act as a senior QA migration tester.
Remove temperature/top_p/logprobs with behavior checks for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-060</code> - update AGENTS.md/SKILL.md priority blocks for Astra (click to expand)</summary>

```text
Act as an expert docs migrator.
Update AGENTS.md/SKILL.md priority blocks for Astra for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-061</code> - migrate a Chat Completions tool app to the Responses API (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a Chat Completions tool app to the Responses API for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-062</code> - migrate a RAG app's citation format to Astra style (click to expand)</summary>

```text
Act as an expert API integrator.
Migrate a RAG app's citation format to Astra style for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-063</code> - run the $openai-docs migrate checklist with sign-off (click to expand)</summary>

```text
Act as a senior platform engineer.
Run the $openai-docs migrate checklist with sign-off for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-064</code> - re-baseline evals after the model swap (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Re-baseline evals after the model swap for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-065</code> - migrate a support bot's verbosity to concise paragraphs (click to expand)</summary>

```text
Act as a senior QA migration tester.
Migrate a support bot's verbosity to concise paragraphs for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-066</code> - migrate a multi-agent harness to Astra delegation norms (click to expand)</summary>

```text
Act as an expert docs migrator.
Migrate a multi-agent harness to Astra delegation norms for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-067</code> - build a rollback plan if Astra regresses a task (click to expand)</summary>

```text
Act as a senior migration lead.
Build a rollback plan if Astra regresses a task for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-068</code> - update cache config for Astra's read/write pricing (click to expand)</summary>

```text
Act as an expert API integrator.
Update cache config for Astra's read/write pricing for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-069</code> - migrate structured-output schemas with semantic prompts (click to expand)</summary>

```text
Act as a senior platform engineer.
Migrate structured-output schemas with semantic prompts for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-070</code> - migrate a GPT-5.6 Sol agent to Astra's autonomy model (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-071</code> - re-price a workload at $10/$50 with cache math (click to expand)</summary>

```text
Act as a senior QA migration tester.
Re-price a workload at $10/$50 with cache math for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-072</code> - re-tune prompts that over-ask after moving to Astra (click to expand)</summary>

```text
Act as an expert docs migrator.
Re-tune prompts that over-ask after moving to Astra for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-073</code> - migrate a browser-use workflow with new stop rules (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a browser-use workflow with new stop rules for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-074</code> - remove temperature/top_p/logprobs with behavior checks (click to expand)</summary>

```text
Act as an expert API integrator.
Remove temperature/top_p/logprobs with behavior checks for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-075</code> - update AGENTS.md/SKILL.md priority blocks for Astra (click to expand)</summary>

```text
Act as a senior platform engineer.
Update AGENTS.md/SKILL.md priority blocks for Astra for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-076</code> - migrate a Chat Completions tool app to the Responses API (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a Chat Completions tool app to the Responses API for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-077</code> - migrate a RAG app's citation format to Astra style (click to expand)</summary>

```text
Act as a senior QA migration tester.
Migrate a RAG app's citation format to Astra style for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-078</code> - run the $openai-docs migrate checklist with sign-off (click to expand)</summary>

```text
Act as an expert docs migrator.
Run the $openai-docs migrate checklist with sign-off for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-079</code> - re-baseline evals after the model swap (click to expand)</summary>

```text
Act as a senior migration lead.
Re-baseline evals after the model swap for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-080</code> - migrate a support bot's verbosity to concise paragraphs (click to expand)</summary>

```text
Act as an expert API integrator.
Migrate a support bot's verbosity to concise paragraphs for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-081</code> - migrate a multi-agent harness to Astra delegation norms (click to expand)</summary>

```text
Act as a senior platform engineer.
Migrate a multi-agent harness to Astra delegation norms for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-082</code> - build a rollback plan if Astra regresses a task (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Build a rollback plan if Astra regresses a task for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-083</code> - update cache config for Astra's read/write pricing (click to expand)</summary>

```text
Act as a senior QA migration tester.
Update cache config for Astra's read/write pricing for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-084</code> - migrate structured-output schemas with semantic prompts (click to expand)</summary>

```text
Act as an expert docs migrator.
Migrate structured-output schemas with semantic prompts for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-085</code> - migrate a GPT-5.6 Sol agent to Astra's autonomy model (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-086</code> - re-price a workload at $10/$50 with cache math (click to expand)</summary>

```text
Act as an expert API integrator.
Re-price a workload at $10/$50 with cache math for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-087</code> - re-tune prompts that over-ask after moving to Astra (click to expand)</summary>

```text
Act as a senior platform engineer.
Re-tune prompts that over-ask after moving to Astra for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-088</code> - migrate a browser-use workflow with new stop rules (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a browser-use workflow with new stop rules for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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
<summary><code>migration-089</code> - remove temperature/top_p/logprobs with behavior checks (click to expand)</summary>

```text
Act as a senior QA migration tester.
Remove temperature/top_p/logprobs with behavior checks for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
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
<summary><code>migration-090</code> - update AGENTS.md/SKILL.md priority blocks for Astra (click to expand)</summary>

```text
Act as an expert docs migrator.
Update AGENTS.md/SKILL.md priority blocks for Astra for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
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

<details>
<summary><code>migration-091</code> - migrate a Chat Completions tool app to the Responses API (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a Chat Completions tool app to the Responses API for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 91.
```
</details>

<details>
<summary><code>migration-092</code> - migrate a RAG app's citation format to Astra style (click to expand)</summary>

```text
Act as an expert API integrator.
Migrate a RAG app's citation format to Astra style for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 92.
```
</details>

<details>
<summary><code>migration-093</code> - run the $openai-docs migrate checklist with sign-off (click to expand)</summary>

```text
Act as a senior platform engineer.
Run the $openai-docs migrate checklist with sign-off for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
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
<summary><code>migration-094</code> - re-baseline evals after the model swap (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Re-baseline evals after the model swap for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 94.
```
</details>

<details>
<summary><code>migration-095</code> - migrate a support bot's verbosity to concise paragraphs (click to expand)</summary>

```text
Act as a senior QA migration tester.
Migrate a support bot's verbosity to concise paragraphs for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 95.
```
</details>

<details>
<summary><code>migration-096</code> - migrate a multi-agent harness to Astra delegation norms (click to expand)</summary>

```text
Act as an expert docs migrator.
Migrate a multi-agent harness to Astra delegation norms for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 96.
```
</details>

<details>
<summary><code>migration-097</code> - build a rollback plan if Astra regresses a task (click to expand)</summary>

```text
Act as a senior migration lead.
Build a rollback plan if Astra regresses a task for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 97.
```
</details>

<details>
<summary><code>migration-098</code> - update cache config for Astra's read/write pricing (click to expand)</summary>

```text
Act as an expert API integrator.
Update cache config for Astra's read/write pricing for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 98.
```
</details>

<details>
<summary><code>migration-099</code> - migrate structured-output schemas with semantic prompts (click to expand)</summary>

```text
Act as a senior platform engineer.
Migrate structured-output schemas with semantic prompts for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 99.
```
</details>

<details>
<summary><code>migration-100</code> - migrate a GPT-5.6 Sol agent to Astra's autonomy model (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
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
<summary><code>migration-101</code> - re-price a workload at $10/$50 with cache math (click to expand)</summary>

```text
Act as a senior QA migration tester.
Re-price a workload at $10/$50 with cache math for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 101.
```
</details>

<details>
<summary><code>migration-102</code> - re-tune prompts that over-ask after moving to Astra (click to expand)</summary>

```text
Act as an expert docs migrator.
Re-tune prompts that over-ask after moving to Astra for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 102.
```
</details>

<details>
<summary><code>migration-103</code> - migrate a browser-use workflow with new stop rules (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a browser-use workflow with new stop rules for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 103.
```
</details>

<details>
<summary><code>migration-104</code> - remove temperature/top_p/logprobs with behavior checks (click to expand)</summary>

```text
Act as an expert API integrator.
Remove temperature/top_p/logprobs with behavior checks for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 104.
```
</details>

<details>
<summary><code>migration-105</code> - update AGENTS.md/SKILL.md priority blocks for Astra (click to expand)</summary>

```text
Act as a senior platform engineer.
Update AGENTS.md/SKILL.md priority blocks for Astra for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
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
<summary><code>migration-106</code> - migrate a Chat Completions tool app to the Responses API (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a Chat Completions tool app to the Responses API for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 106.
```
</details>

<details>
<summary><code>migration-107</code> - migrate a RAG app's citation format to Astra style (click to expand)</summary>

```text
Act as a senior QA migration tester.
Migrate a RAG app's citation format to Astra style for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 107.
```
</details>

<details>
<summary><code>migration-108</code> - run the $openai-docs migrate checklist with sign-off (click to expand)</summary>

```text
Act as an expert docs migrator.
Run the $openai-docs migrate checklist with sign-off for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 108.
```
</details>

<details>
<summary><code>migration-109</code> - re-baseline evals after the model swap (click to expand)</summary>

```text
Act as a senior migration lead.
Re-baseline evals after the model swap for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 109.
```
</details>

<details>
<summary><code>migration-110</code> - migrate a support bot's verbosity to concise paragraphs (click to expand)</summary>

```text
Act as an expert API integrator.
Migrate a support bot's verbosity to concise paragraphs for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 110.
```
</details>

<details>
<summary><code>migration-111</code> - migrate a multi-agent harness to Astra delegation norms (click to expand)</summary>

```text
Act as a senior platform engineer.
Migrate a multi-agent harness to Astra delegation norms for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 111.
```
</details>

<details>
<summary><code>migration-112</code> - build a rollback plan if Astra regresses a task (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Build a rollback plan if Astra regresses a task for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 112.
```
</details>

<details>
<summary><code>migration-113</code> - update cache config for Astra's read/write pricing (click to expand)</summary>

```text
Act as a senior QA migration tester.
Update cache config for Astra's read/write pricing for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 113.
```
</details>

<details>
<summary><code>migration-114</code> - migrate structured-output schemas with semantic prompts (click to expand)</summary>

```text
Act as an expert docs migrator.
Migrate structured-output schemas with semantic prompts for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 114.
```
</details>

<details>
<summary><code>migration-115</code> - migrate a GPT-5.6 Sol agent to Astra's autonomy model (click to expand)</summary>

```text
Act as a senior migration lead.
Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a production API.
The intended result is a migration checklist with sign-offs.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 115.
```
</details>

<details>
<summary><code>migration-116</code> - re-price a workload at $10/$50 with cache math (click to expand)</summary>

```text
Act as an expert API integrator.
Re-price a workload at $10/$50 with cache math for a classroom codebase.
The intended result is a launch note.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 116.
```
</details>

<details>
<summary><code>migration-117</code> - re-tune prompts that over-ask after moving to Astra (click to expand)</summary>

```text
Act as a senior platform engineer.
Re-tune prompts that over-ask after moving to Astra for an enterprise.
The intended result is an updated prompt pack.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Use tools where they help; state what evidence you checked before acting.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
Variant focus 117.
```
</details>

<details>
<summary><code>migration-118</code> - migrate a browser-use workflow with new stop rules (click to expand)</summary>

```text
Act as a staff developer-experience engineer.
Migrate a browser-use workflow with new stop rules for a startup.
The intended result is a rollback plan.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Suggested reasoning effort: `high` (set explicitly; gateway default is low).
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
<summary><code>migration-119</code> - remove temperature/top_p/logprobs with behavior checks (click to expand)</summary>

```text
Act as a senior QA migration tester.
Remove temperature/top_p/logprobs with behavior checks for a Cursor-style relay.
The intended result is a config diff.
Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task
cost on your workload.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 119.
```
</details>

<details>
<summary><code>migration-120</code> - update AGENTS.md/SKILL.md priority blocks for Astra (click to expand)</summary>

```text
Act as an expert docs migrator.
Update AGENTS.md/SKILL.md priority blocks for Astra for a Codex project.
The intended result is a before/after eval table.
Requirements: record before/after transcripts for review; keep a rollback branch until sign-off.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `max` (set explicitly; gateway default is low).
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 120.
```
</details>
