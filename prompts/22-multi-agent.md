# 🤖 Multi-Agent & Subagent Orchestration - 90 copyable GPT-6 Astra prompts

> Explicit delegation: when, how much, and how agents report back.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](21-testing-qa.md) · [Next](23-long-context.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>multi-agent-001</code> - split a research brief across three parallel subagents (click to expand)</summary>

```text
Act as a principal agent architect.
Split a research brief across three parallel subagents in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>multi-agent-002</code> - coordinate a release crew: notes, QA, comms (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Coordinate a release crew: notes, QA, comms for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-003</code> - design an agent stop/ask/continue policy (click to expand)</summary>

```text
Act as an expert workflow engineer.
Design an agent stop/ask/continue policy for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-004</code> - orchestrate a data pipeline: extract, validate, load agents (click to expand)</summary>

```text
Act as a senior Codex operator.
Orchestrate a data pipeline: extract, validate, load agents for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-005</code> - run a docs-sync crew across repos (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Run a docs-sync crew across repos for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-006</code> - build a critic loop: drafter, checker, fixer (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a critic loop: drafter, checker, fixer with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>multi-agent-007</code> - build a meeting-to-actions pipeline with owners (click to expand)</summary>

```text
Act as a principal agent architect.
Build a meeting-to-actions pipeline with owners in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>multi-agent-008</code> - run competing solution spikes then merge winners (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Run competing solution spikes then merge winners for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-009</code> - coordinate a test-generation swarm per module (click to expand)</summary>

```text
Act as an expert workflow engineer.
Coordinate a test-generation swarm per module for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-010</code> - coordinate a migration crew with ownership zones (click to expand)</summary>

```text
Act as a senior Codex operator.
Coordinate a migration crew with ownership zones for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-011</code> - orchestrate a translation-plus-glossary crew (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Orchestrate a translation-plus-glossary crew for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>multi-agent-012</code> - build a map-reduce doc review with merge rules (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a map-reduce doc review with merge rules with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>multi-agent-013</code> - run a red-vs-blue review (defensive) with judges (click to expand)</summary>

```text
Act as a principal agent architect.
Run a red-vs-blue review (defensive) with judges in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-014</code> - orchestrate design+code+QA agents with handoffs (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Orchestrate design+code+QA agents with handoffs for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-015</code> - build a support-triage swarm with escalation (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a support-triage swarm with escalation for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-016</code> - split a research brief across three parallel subagents (click to expand)</summary>

```text
Act as a senior Codex operator.
Split a research brief across three parallel subagents for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-017</code> - coordinate a release crew: notes, QA, comms (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Coordinate a release crew: notes, QA, comms for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>multi-agent-018</code> - design an agent stop/ask/continue policy (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Design an agent stop/ask/continue policy with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-019</code> - orchestrate a data pipeline: extract, validate, load agents (click to expand)</summary>

```text
Act as a principal agent architect.
Orchestrate a data pipeline: extract, validate, load agents in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>multi-agent-020</code> - run a docs-sync crew across repos (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Run a docs-sync crew across repos for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-021</code> - build a critic loop: drafter, checker, fixer (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a critic loop: drafter, checker, fixer for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-022</code> - build a meeting-to-actions pipeline with owners (click to expand)</summary>

```text
Act as a senior Codex operator.
Build a meeting-to-actions pipeline with owners for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-023</code> - run competing solution spikes then merge winners (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Run competing solution spikes then merge winners for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-024</code> - coordinate a test-generation swarm per module (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Coordinate a test-generation swarm per module with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>multi-agent-025</code> - coordinate a migration crew with ownership zones (click to expand)</summary>

```text
Act as a principal agent architect.
Coordinate a migration crew with ownership zones in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-026</code> - orchestrate a translation-plus-glossary crew (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Orchestrate a translation-plus-glossary crew for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-027</code> - build a map-reduce doc review with merge rules (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a map-reduce doc review with merge rules for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-028</code> - run a red-vs-blue review (defensive) with judges (click to expand)</summary>

```text
Act as a senior Codex operator.
Run a red-vs-blue review (defensive) with judges for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-029</code> - orchestrate design+code+QA agents with handoffs (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Orchestrate design+code+QA agents with handoffs for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>multi-agent-030</code> - build a support-triage swarm with escalation (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a support-triage swarm with escalation with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-031</code> - split a research brief across three parallel subagents (click to expand)</summary>

```text
Act as a principal agent architect.
Split a research brief across three parallel subagents in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-032</code> - coordinate a release crew: notes, QA, comms (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Coordinate a release crew: notes, QA, comms for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-033</code> - design an agent stop/ask/continue policy (click to expand)</summary>

```text
Act as an expert workflow engineer.
Design an agent stop/ask/continue policy for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-034</code> - orchestrate a data pipeline: extract, validate, load agents (click to expand)</summary>

```text
Act as a senior Codex operator.
Orchestrate a data pipeline: extract, validate, load agents for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-035</code> - run a docs-sync crew across repos (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Run a docs-sync crew across repos for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-036</code> - build a critic loop: drafter, checker, fixer (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a critic loop: drafter, checker, fixer with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-037</code> - build a meeting-to-actions pipeline with owners (click to expand)</summary>

```text
Act as a principal agent architect.
Build a meeting-to-actions pipeline with owners in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-038</code> - run competing solution spikes then merge winners (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Run competing solution spikes then merge winners for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-039</code> - coordinate a test-generation swarm per module (click to expand)</summary>

```text
Act as an expert workflow engineer.
Coordinate a test-generation swarm per module for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-040</code> - coordinate a migration crew with ownership zones (click to expand)</summary>

```text
Act as a senior Codex operator.
Coordinate a migration crew with ownership zones for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-041</code> - orchestrate a translation-plus-glossary crew (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Orchestrate a translation-plus-glossary crew for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-042</code> - build a map-reduce doc review with merge rules (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a map-reduce doc review with merge rules with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-043</code> - run a red-vs-blue review (defensive) with judges (click to expand)</summary>

```text
Act as a principal agent architect.
Run a red-vs-blue review (defensive) with judges in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-044</code> - orchestrate design+code+QA agents with handoffs (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Orchestrate design+code+QA agents with handoffs for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-045</code> - build a support-triage swarm with escalation (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a support-triage swarm with escalation for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-046</code> - split a research brief across three parallel subagents (click to expand)</summary>

```text
Act as a senior Codex operator.
Split a research brief across three parallel subagents for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-047</code> - coordinate a release crew: notes, QA, comms (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Coordinate a release crew: notes, QA, comms for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-048</code> - design an agent stop/ask/continue policy (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Design an agent stop/ask/continue policy with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-049</code> - orchestrate a data pipeline: extract, validate, load agents (click to expand)</summary>

```text
Act as a principal agent architect.
Orchestrate a data pipeline: extract, validate, load agents in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-050</code> - run a docs-sync crew across repos (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Run a docs-sync crew across repos for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-051</code> - build a critic loop: drafter, checker, fixer (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a critic loop: drafter, checker, fixer for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-052</code> - build a meeting-to-actions pipeline with owners (click to expand)</summary>

```text
Act as a senior Codex operator.
Build a meeting-to-actions pipeline with owners for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-053</code> - run competing solution spikes then merge winners (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Run competing solution spikes then merge winners for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-054</code> - coordinate a test-generation swarm per module (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Coordinate a test-generation swarm per module with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-055</code> - coordinate a migration crew with ownership zones (click to expand)</summary>

```text
Act as a principal agent architect.
Coordinate a migration crew with ownership zones in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-056</code> - orchestrate a translation-plus-glossary crew (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Orchestrate a translation-plus-glossary crew for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-057</code> - build a map-reduce doc review with merge rules (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a map-reduce doc review with merge rules for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-058</code> - run a red-vs-blue review (defensive) with judges (click to expand)</summary>

```text
Act as a senior Codex operator.
Run a red-vs-blue review (defensive) with judges for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-059</code> - orchestrate design+code+QA agents with handoffs (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Orchestrate design+code+QA agents with handoffs for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-060</code> - build a support-triage swarm with escalation (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a support-triage swarm with escalation with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-061</code> - split a research brief across three parallel subagents (click to expand)</summary>

```text
Act as a principal agent architect.
Split a research brief across three parallel subagents in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-062</code> - coordinate a release crew: notes, QA, comms (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Coordinate a release crew: notes, QA, comms for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-063</code> - design an agent stop/ask/continue policy (click to expand)</summary>

```text
Act as an expert workflow engineer.
Design an agent stop/ask/continue policy for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-064</code> - orchestrate a data pipeline: extract, validate, load agents (click to expand)</summary>

```text
Act as a senior Codex operator.
Orchestrate a data pipeline: extract, validate, load agents for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-065</code> - run a docs-sync crew across repos (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Run a docs-sync crew across repos for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-066</code> - build a critic loop: drafter, checker, fixer (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a critic loop: drafter, checker, fixer with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-067</code> - build a meeting-to-actions pipeline with owners (click to expand)</summary>

```text
Act as a principal agent architect.
Build a meeting-to-actions pipeline with owners in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-068</code> - run competing solution spikes then merge winners (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Run competing solution spikes then merge winners for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-069</code> - coordinate a test-generation swarm per module (click to expand)</summary>

```text
Act as an expert workflow engineer.
Coordinate a test-generation swarm per module for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-070</code> - coordinate a migration crew with ownership zones (click to expand)</summary>

```text
Act as a senior Codex operator.
Coordinate a migration crew with ownership zones for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-071</code> - orchestrate a translation-plus-glossary crew (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Orchestrate a translation-plus-glossary crew for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-072</code> - build a map-reduce doc review with merge rules (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a map-reduce doc review with merge rules with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-073</code> - run a red-vs-blue review (defensive) with judges (click to expand)</summary>

```text
Act as a principal agent architect.
Run a red-vs-blue review (defensive) with judges in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-074</code> - orchestrate design+code+QA agents with handoffs (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Orchestrate design+code+QA agents with handoffs for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-075</code> - build a support-triage swarm with escalation (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a support-triage swarm with escalation for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-076</code> - split a research brief across three parallel subagents (click to expand)</summary>

```text
Act as a senior Codex operator.
Split a research brief across three parallel subagents for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-077</code> - coordinate a release crew: notes, QA, comms (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Coordinate a release crew: notes, QA, comms for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-078</code> - design an agent stop/ask/continue policy (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Design an agent stop/ask/continue policy with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-079</code> - orchestrate a data pipeline: extract, validate, load agents (click to expand)</summary>

```text
Act as a principal agent architect.
Orchestrate a data pipeline: extract, validate, load agents in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-080</code> - run a docs-sync crew across repos (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Run a docs-sync crew across repos for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-081</code> - build a critic loop: drafter, checker, fixer (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a critic loop: drafter, checker, fixer for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-082</code> - build a meeting-to-actions pipeline with owners (click to expand)</summary>

```text
Act as a senior Codex operator.
Build a meeting-to-actions pipeline with owners for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-083</code> - run competing solution spikes then merge winners (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Run competing solution spikes then merge winners for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-084</code> - coordinate a test-generation swarm per module (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Coordinate a test-generation swarm per module with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-085</code> - coordinate a migration crew with ownership zones (click to expand)</summary>

```text
Act as a principal agent architect.
Coordinate a migration crew with ownership zones in Codex.
The intended result is an orchestration plan with swimlanes.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-086</code> - orchestrate a translation-plus-glossary crew (click to expand)</summary>

```text
Act as a senior orchestrator designer.
Orchestrate a translation-plus-glossary crew for a hackathon.
The intended result is a stop-and-ask policy.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-087</code> - build a map-reduce doc review with merge rules (click to expand)</summary>

```text
Act as an expert workflow engineer.
Build a map-reduce doc review with merge rules for a classroom demo.
The intended result is a cost/latency estimate.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-088</code> - run a red-vs-blue review (defensive) with judges (click to expand)</summary>

```text
Act as a senior Codex operator.
Run a red-vs-blue review (defensive) with judges for an enterprise pilot.
The intended result is a handoff template.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
<summary><code>multi-agent-089</code> - orchestrate design+code+QA agents with handoffs (click to expand)</summary>

```text
Act as a multi-agent systems lead.
Orchestrate design+code+QA agents with handoffs for a startup team.
The intended result is a merge rubric.
Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done
criteria.
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
<summary><code>multi-agent-090</code> - build a support-triage swarm with escalation (click to expand)</summary>

```text
Act as a senior autonomy engineer.
Build a support-triage swarm with escalation with the Responses API.
The intended result is subagent briefs with acceptance criteria.
Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents
disagree.
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
