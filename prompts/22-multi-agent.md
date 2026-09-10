# 🤖 Multi-Agent & Subagent Orchestration — 90 copyable GPT-6 Astra prompts

> Explicit delegation: when, how much, and how agents report back.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](21-testing-qa.md) · [Next ▶](23-long-context.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `multi-agent-001` — split a research brief across three parallel subagents

```text
Act as a principal agent architect. Split a research brief across three parallel subagents in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-002` — coordinate a release crew: notes, QA, comms

```text
Act as a senior orchestrator designer. Coordinate a release crew: notes, QA, comms for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-003` — design an agent stop/ask/continue policy

```text
Act as an expert workflow engineer. Design an agent stop/ask/continue policy for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-004` — orchestrate a data pipeline: extract, validate, load agents

```text
Act as a senior Codex operator. Orchestrate a data pipeline: extract, validate, load agents for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-005` — run a docs-sync crew across repos

```text
Act as a multi-agent systems lead. Run a docs-sync crew across repos for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-006` — build a critic loop: drafter, checker, fixer

```text
Act as a senior autonomy engineer. Build a critic loop: drafter, checker, fixer with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-007` — build a meeting-to-actions pipeline with owners

```text
Act as a principal agent architect. Build a meeting-to-actions pipeline with owners in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-008` — run competing solution spikes then merge winners

```text
Act as a senior orchestrator designer. Run competing solution spikes then merge winners for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-009` — coordinate a test-generation swarm per module

```text
Act as an expert workflow engineer. Coordinate a test-generation swarm per module for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-010` — coordinate a migration crew with ownership zones

```text
Act as a senior Codex operator. Coordinate a migration crew with ownership zones for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-011` — orchestrate a translation-plus-glossary crew

```text
Act as a multi-agent systems lead. Orchestrate a translation-plus-glossary crew for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-012` — build a map-reduce doc review with merge rules

```text
Act as a senior autonomy engineer. Build a map-reduce doc review with merge rules with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-013` — run a red-vs-blue review (defensive) with judges

```text
Act as a principal agent architect. Run a red-vs-blue review (defensive) with judges in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-014` — orchestrate design+code+QA agents with handoffs

```text
Act as a senior orchestrator designer. Orchestrate design+code+QA agents with handoffs for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-015` — build a support-triage swarm with escalation

```text
Act as an expert workflow engineer. Build a support-triage swarm with escalation for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-016` — split a research brief across three parallel subagents

```text
Act as a senior Codex operator. Split a research brief across three parallel subagents for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-017` — coordinate a release crew: notes, QA, comms

```text
Act as a multi-agent systems lead. Coordinate a release crew: notes, QA, comms for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-018` — design an agent stop/ask/continue policy

```text
Act as a senior autonomy engineer. Design an agent stop/ask/continue policy with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-019` — orchestrate a data pipeline: extract, validate, load agents

```text
Act as a principal agent architect. Orchestrate a data pipeline: extract, validate, load agents in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-020` — run a docs-sync crew across repos

```text
Act as a senior orchestrator designer. Run a docs-sync crew across repos for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-021` — build a critic loop: drafter, checker, fixer

```text
Act as an expert workflow engineer. Build a critic loop: drafter, checker, fixer for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-022` — build a meeting-to-actions pipeline with owners

```text
Act as a senior Codex operator. Build a meeting-to-actions pipeline with owners for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-023` — run competing solution spikes then merge winners

```text
Act as a multi-agent systems lead. Run competing solution spikes then merge winners for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-024` — coordinate a test-generation swarm per module

```text
Act as a senior autonomy engineer. Coordinate a test-generation swarm per module with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-025` — coordinate a migration crew with ownership zones

```text
Act as a principal agent architect. Coordinate a migration crew with ownership zones in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-026` — orchestrate a translation-plus-glossary crew

```text
Act as a senior orchestrator designer. Orchestrate a translation-plus-glossary crew for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `multi-agent-027` — build a map-reduce doc review with merge rules

```text
Act as an expert workflow engineer. Build a map-reduce doc review with merge rules for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-028` — run a red-vs-blue review (defensive) with judges

```text
Act as a senior Codex operator. Run a red-vs-blue review (defensive) with judges for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `multi-agent-029` — orchestrate design+code+QA agents with handoffs

```text
Act as a multi-agent systems lead. Orchestrate design+code+QA agents with handoffs for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-030` — build a support-triage swarm with escalation

```text
Act as a senior autonomy engineer. Build a support-triage swarm with escalation with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `multi-agent-031` — split a research brief across three parallel subagents

```text
Act as a principal agent architect. Split a research brief across three parallel subagents in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `multi-agent-032` — coordinate a release crew: notes, QA, comms

```text
Act as a senior orchestrator designer. Coordinate a release crew: notes, QA, comms for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `multi-agent-033` — design an agent stop/ask/continue policy

```text
Act as an expert workflow engineer. Design an agent stop/ask/continue policy for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `multi-agent-034` — orchestrate a data pipeline: extract, validate, load agents

```text
Act as a senior Codex operator. Orchestrate a data pipeline: extract, validate, load agents for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `multi-agent-035` — run a docs-sync crew across repos

```text
Act as a multi-agent systems lead. Run a docs-sync crew across repos for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `multi-agent-036` — build a critic loop: drafter, checker, fixer

```text
Act as a senior autonomy engineer. Build a critic loop: drafter, checker, fixer with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `multi-agent-037` — build a meeting-to-actions pipeline with owners

```text
Act as a principal agent architect. Build a meeting-to-actions pipeline with owners in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `multi-agent-038` — run competing solution spikes then merge winners

```text
Act as a senior orchestrator designer. Run competing solution spikes then merge winners for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `multi-agent-039` — coordinate a test-generation swarm per module

```text
Act as an expert workflow engineer. Coordinate a test-generation swarm per module for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `multi-agent-040` — coordinate a migration crew with ownership zones

```text
Act as a senior Codex operator. Coordinate a migration crew with ownership zones for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `multi-agent-041` — orchestrate a translation-plus-glossary crew

```text
Act as a multi-agent systems lead. Orchestrate a translation-plus-glossary crew for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `multi-agent-042` — build a map-reduce doc review with merge rules

```text
Act as a senior autonomy engineer. Build a map-reduce doc review with merge rules with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `multi-agent-043` — run a red-vs-blue review (defensive) with judges

```text
Act as a principal agent architect. Run a red-vs-blue review (defensive) with judges in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `multi-agent-044` — orchestrate design+code+QA agents with handoffs

```text
Act as a senior orchestrator designer. Orchestrate design+code+QA agents with handoffs for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `multi-agent-045` — build a support-triage swarm with escalation

```text
Act as an expert workflow engineer. Build a support-triage swarm with escalation for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `multi-agent-046` — split a research brief across three parallel subagents

```text
Act as a senior Codex operator. Split a research brief across three parallel subagents for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `multi-agent-047` — coordinate a release crew: notes, QA, comms

```text
Act as a multi-agent systems lead. Coordinate a release crew: notes, QA, comms for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `multi-agent-048` — design an agent stop/ask/continue policy

```text
Act as a senior autonomy engineer. Design an agent stop/ask/continue policy with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `multi-agent-049` — orchestrate a data pipeline: extract, validate, load agents

```text
Act as a principal agent architect. Orchestrate a data pipeline: extract, validate, load agents in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `multi-agent-050` — run a docs-sync crew across repos

```text
Act as a senior orchestrator designer. Run a docs-sync crew across repos for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `multi-agent-051` — build a critic loop: drafter, checker, fixer

```text
Act as an expert workflow engineer. Build a critic loop: drafter, checker, fixer for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `multi-agent-052` — build a meeting-to-actions pipeline with owners

```text
Act as a senior Codex operator. Build a meeting-to-actions pipeline with owners for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `multi-agent-053` — run competing solution spikes then merge winners

```text
Act as a multi-agent systems lead. Run competing solution spikes then merge winners for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `multi-agent-054` — coordinate a test-generation swarm per module

```text
Act as a senior autonomy engineer. Coordinate a test-generation swarm per module with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `multi-agent-055` — coordinate a migration crew with ownership zones

```text
Act as a principal agent architect. Coordinate a migration crew with ownership zones in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `multi-agent-056` — orchestrate a translation-plus-glossary crew

```text
Act as a senior orchestrator designer. Orchestrate a translation-plus-glossary crew for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `multi-agent-057` — build a map-reduce doc review with merge rules

```text
Act as an expert workflow engineer. Build a map-reduce doc review with merge rules for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `multi-agent-058` — run a red-vs-blue review (defensive) with judges

```text
Act as a senior Codex operator. Run a red-vs-blue review (defensive) with judges for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `multi-agent-059` — orchestrate design+code+QA agents with handoffs

```text
Act as a multi-agent systems lead. Orchestrate design+code+QA agents with handoffs for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `multi-agent-060` — build a support-triage swarm with escalation

```text
Act as a senior autonomy engineer. Build a support-triage swarm with escalation with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `multi-agent-061` — split a research brief across three parallel subagents

```text
Act as a principal agent architect. Split a research brief across three parallel subagents in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `multi-agent-062` — coordinate a release crew: notes, QA, comms

```text
Act as a senior orchestrator designer. Coordinate a release crew: notes, QA, comms for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `multi-agent-063` — design an agent stop/ask/continue policy

```text
Act as an expert workflow engineer. Design an agent stop/ask/continue policy for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `multi-agent-064` — orchestrate a data pipeline: extract, validate, load agents

```text
Act as a senior Codex operator. Orchestrate a data pipeline: extract, validate, load agents for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `multi-agent-065` — run a docs-sync crew across repos

```text
Act as a multi-agent systems lead. Run a docs-sync crew across repos for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `multi-agent-066` — build a critic loop: drafter, checker, fixer

```text
Act as a senior autonomy engineer. Build a critic loop: drafter, checker, fixer with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `multi-agent-067` — build a meeting-to-actions pipeline with owners

```text
Act as a principal agent architect. Build a meeting-to-actions pipeline with owners in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `multi-agent-068` — run competing solution spikes then merge winners

```text
Act as a senior orchestrator designer. Run competing solution spikes then merge winners for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `multi-agent-069` — coordinate a test-generation swarm per module

```text
Act as an expert workflow engineer. Coordinate a test-generation swarm per module for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `multi-agent-070` — coordinate a migration crew with ownership zones

```text
Act as a senior Codex operator. Coordinate a migration crew with ownership zones for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `multi-agent-071` — orchestrate a translation-plus-glossary crew

```text
Act as a multi-agent systems lead. Orchestrate a translation-plus-glossary crew for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `multi-agent-072` — build a map-reduce doc review with merge rules

```text
Act as a senior autonomy engineer. Build a map-reduce doc review with merge rules with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `multi-agent-073` — run a red-vs-blue review (defensive) with judges

```text
Act as a principal agent architect. Run a red-vs-blue review (defensive) with judges in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `multi-agent-074` — orchestrate design+code+QA agents with handoffs

```text
Act as a senior orchestrator designer. Orchestrate design+code+QA agents with handoffs for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `multi-agent-075` — build a support-triage swarm with escalation

```text
Act as an expert workflow engineer. Build a support-triage swarm with escalation for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `multi-agent-076` — split a research brief across three parallel subagents

```text
Act as a senior Codex operator. Split a research brief across three parallel subagents for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `multi-agent-077` — coordinate a release crew: notes, QA, comms

```text
Act as a multi-agent systems lead. Coordinate a release crew: notes, QA, comms for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `multi-agent-078` — design an agent stop/ask/continue policy

```text
Act as a senior autonomy engineer. Design an agent stop/ask/continue policy with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `multi-agent-079` — orchestrate a data pipeline: extract, validate, load agents

```text
Act as a principal agent architect. Orchestrate a data pipeline: extract, validate, load agents in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `multi-agent-080` — run a docs-sync crew across repos

```text
Act as a senior orchestrator designer. Run a docs-sync crew across repos for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `multi-agent-081` — build a critic loop: drafter, checker, fixer

```text
Act as an expert workflow engineer. Build a critic loop: drafter, checker, fixer for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `multi-agent-082` — build a meeting-to-actions pipeline with owners

```text
Act as a senior Codex operator. Build a meeting-to-actions pipeline with owners for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `multi-agent-083` — run competing solution spikes then merge winners

```text
Act as a multi-agent systems lead. Run competing solution spikes then merge winners for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `multi-agent-084` — coordinate a test-generation swarm per module

```text
Act as a senior autonomy engineer. Coordinate a test-generation swarm per module with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `multi-agent-085` — coordinate a migration crew with ownership zones

```text
Act as a principal agent architect. Coordinate a migration crew with ownership zones in Codex. The intended result is an orchestration plan with swimlanes. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `multi-agent-086` — orchestrate a translation-plus-glossary crew

```text
Act as a senior orchestrator designer. Orchestrate a translation-plus-glossary crew for a hackathon. The intended result is a stop-and-ask policy. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `multi-agent-087` — build a map-reduce doc review with merge rules

```text
Act as an expert workflow engineer. Build a map-reduce doc review with merge rules for a classroom demo. The intended result is a cost/latency estimate. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `multi-agent-088` — run a red-vs-blue review (defensive) with judges

```text
Act as a senior Codex operator. Run a red-vs-blue review (defensive) with judges for an enterprise pilot. The intended result is a handoff template. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `multi-agent-089` — orchestrate design+code+QA agents with handoffs

```text
Act as a multi-agent systems lead. Orchestrate design+code+QA agents with handoffs for a startup team. The intended result is a merge rubric. Requirements: name when to delegate vs do directly; define each subagent's inputs, outputs, and done criteria. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `multi-agent-090` — build a support-triage swarm with escalation

```text
Act as a senior autonomy engineer. Build a support-triage swarm with escalation with the Responses API. The intended result is subagent briefs with acceptance criteria. Requirements: cap parallelism; note rate and cost limits; define conflict resolution when agents disagree. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
