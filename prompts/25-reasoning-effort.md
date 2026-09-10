# 🎚️ Reasoning Effort Tuning — 90 copyable GPT-6 Astra prompts

> low→max calibration: start low/medium, escalate only with evidence.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](24-structured-outputs.md) · [Next ▶](26-migration.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `reasoning-effort-001` — pick effort for a CRUD ticket vs a distributed bug

```text
Act as a senior model tuner. Pick effort for a CRUD ticket vs a distributed bug for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-002` — decide when xhigh/max is justified with a checklist

```text
Act as an expert eval engineer. Decide when xhigh/max is justified with a checklist for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-003` — write an incident note when max still fails

```text
Act as a senior performance engineer. Write an incident note when max still fails for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-004` — tune effort for long-doc QA vs short chat

```text
Act as a cost-optimization lead. Tune effort for long-doc QA vs short chat for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-005` — create an effort-selection flowchart

```text
Act as a senior reliability engineer. Create an effort-selection flowchart for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-006` — build a prompt+effort matrix for support macros

```text
Act as an expert latency analyst. Build a prompt+effort matrix for support macros for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-007` — tune verification depth alongside effort

```text
Act as a senior model tuner. Tune verification depth alongside effort for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-008` — measure cost-per-task across efforts with retries counted

```text
Act as an expert eval engineer. Measure cost-per-task across efforts with retries counted for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-009` — build a cache strategy to offset higher effort

```text
Act as a senior performance engineer. Build a cache strategy to offset higher effort for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-010` — diagnose a save-but-lost-on-refresh bug before escalating effort

```text
Act as a cost-optimization lead. Diagnose a save-but-lost-on-refresh bug before escalating effort for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-011` — design a fallback: low first, escalate on failure signals

```text
Act as a senior reliability engineer. Design a fallback: low first, escalate on failure signals for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-012` — build a routing rule: fast lane vs deep lane

```text
Act as an expert latency analyst. Build a routing rule: fast lane vs deep lane for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-013` — analyze latency vs quality trade-offs

```text
Act as a senior model tuner. Analyze latency vs quality trade-offs for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-014` — design an eval to compare medium vs high on your workload

```text
Act as an expert eval engineer. Design an eval to compare medium vs high on your workload for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-015` — build a regression pack that pins effort per task type

```text
Act as a senior performance engineer. Build a regression pack that pins effort per task type for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-016` — pick effort for a CRUD ticket vs a distributed bug

```text
Act as a cost-optimization lead. Pick effort for a CRUD ticket vs a distributed bug for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-017` — decide when xhigh/max is justified with a checklist

```text
Act as a senior reliability engineer. Decide when xhigh/max is justified with a checklist for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-018` — write an incident note when max still fails

```text
Act as an expert latency analyst. Write an incident note when max still fails for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-019` — tune effort for long-doc QA vs short chat

```text
Act as a senior model tuner. Tune effort for long-doc QA vs short chat for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-020` — create an effort-selection flowchart

```text
Act as an expert eval engineer. Create an effort-selection flowchart for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-021` — build a prompt+effort matrix for support macros

```text
Act as a senior performance engineer. Build a prompt+effort matrix for support macros for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-022` — tune verification depth alongside effort

```text
Act as a cost-optimization lead. Tune verification depth alongside effort for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-023` — measure cost-per-task across efforts with retries counted

```text
Act as a senior reliability engineer. Measure cost-per-task across efforts with retries counted for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-024` — build a cache strategy to offset higher effort

```text
Act as an expert latency analyst. Build a cache strategy to offset higher effort for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-025` — diagnose a save-but-lost-on-refresh bug before escalating effort

```text
Act as a senior model tuner. Diagnose a save-but-lost-on-refresh bug before escalating effort for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-026` — design a fallback: low first, escalate on failure signals

```text
Act as an expert eval engineer. Design a fallback: low first, escalate on failure signals for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `reasoning-effort-027` — build a routing rule: fast lane vs deep lane

```text
Act as a senior performance engineer. Build a routing rule: fast lane vs deep lane for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-028` — analyze latency vs quality trade-offs

```text
Act as a cost-optimization lead. Analyze latency vs quality trade-offs for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `reasoning-effort-029` — design an eval to compare medium vs high on your workload

```text
Act as a senior reliability engineer. Design an eval to compare medium vs high on your workload for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-030` — build a regression pack that pins effort per task type

```text
Act as an expert latency analyst. Build a regression pack that pins effort per task type for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `reasoning-effort-031` — pick effort for a CRUD ticket vs a distributed bug

```text
Act as a senior model tuner. Pick effort for a CRUD ticket vs a distributed bug for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `reasoning-effort-032` — decide when xhigh/max is justified with a checklist

```text
Act as an expert eval engineer. Decide when xhigh/max is justified with a checklist for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `reasoning-effort-033` — write an incident note when max still fails

```text
Act as a senior performance engineer. Write an incident note when max still fails for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `reasoning-effort-034` — tune effort for long-doc QA vs short chat

```text
Act as a cost-optimization lead. Tune effort for long-doc QA vs short chat for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `reasoning-effort-035` — create an effort-selection flowchart

```text
Act as a senior reliability engineer. Create an effort-selection flowchart for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `reasoning-effort-036` — build a prompt+effort matrix for support macros

```text
Act as an expert latency analyst. Build a prompt+effort matrix for support macros for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `reasoning-effort-037` — tune verification depth alongside effort

```text
Act as a senior model tuner. Tune verification depth alongside effort for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `reasoning-effort-038` — measure cost-per-task across efforts with retries counted

```text
Act as an expert eval engineer. Measure cost-per-task across efforts with retries counted for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `reasoning-effort-039` — build a cache strategy to offset higher effort

```text
Act as a senior performance engineer. Build a cache strategy to offset higher effort for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `reasoning-effort-040` — diagnose a save-but-lost-on-refresh bug before escalating effort

```text
Act as a cost-optimization lead. Diagnose a save-but-lost-on-refresh bug before escalating effort for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `reasoning-effort-041` — design a fallback: low first, escalate on failure signals

```text
Act as a senior reliability engineer. Design a fallback: low first, escalate on failure signals for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `reasoning-effort-042` — build a routing rule: fast lane vs deep lane

```text
Act as an expert latency analyst. Build a routing rule: fast lane vs deep lane for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `reasoning-effort-043` — analyze latency vs quality trade-offs

```text
Act as a senior model tuner. Analyze latency vs quality trade-offs for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `reasoning-effort-044` — design an eval to compare medium vs high on your workload

```text
Act as an expert eval engineer. Design an eval to compare medium vs high on your workload for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `reasoning-effort-045` — build a regression pack that pins effort per task type

```text
Act as a senior performance engineer. Build a regression pack that pins effort per task type for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `reasoning-effort-046` — pick effort for a CRUD ticket vs a distributed bug

```text
Act as a cost-optimization lead. Pick effort for a CRUD ticket vs a distributed bug for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `reasoning-effort-047` — decide when xhigh/max is justified with a checklist

```text
Act as a senior reliability engineer. Decide when xhigh/max is justified with a checklist for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `reasoning-effort-048` — write an incident note when max still fails

```text
Act as an expert latency analyst. Write an incident note when max still fails for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `reasoning-effort-049` — tune effort for long-doc QA vs short chat

```text
Act as a senior model tuner. Tune effort for long-doc QA vs short chat for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `reasoning-effort-050` — create an effort-selection flowchart

```text
Act as an expert eval engineer. Create an effort-selection flowchart for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `reasoning-effort-051` — build a prompt+effort matrix for support macros

```text
Act as a senior performance engineer. Build a prompt+effort matrix for support macros for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `reasoning-effort-052` — tune verification depth alongside effort

```text
Act as a cost-optimization lead. Tune verification depth alongside effort for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `reasoning-effort-053` — measure cost-per-task across efforts with retries counted

```text
Act as a senior reliability engineer. Measure cost-per-task across efforts with retries counted for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `reasoning-effort-054` — build a cache strategy to offset higher effort

```text
Act as an expert latency analyst. Build a cache strategy to offset higher effort for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `reasoning-effort-055` — diagnose a save-but-lost-on-refresh bug before escalating effort

```text
Act as a senior model tuner. Diagnose a save-but-lost-on-refresh bug before escalating effort for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `reasoning-effort-056` — design a fallback: low first, escalate on failure signals

```text
Act as an expert eval engineer. Design a fallback: low first, escalate on failure signals for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `reasoning-effort-057` — build a routing rule: fast lane vs deep lane

```text
Act as a senior performance engineer. Build a routing rule: fast lane vs deep lane for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `reasoning-effort-058` — analyze latency vs quality trade-offs

```text
Act as a cost-optimization lead. Analyze latency vs quality trade-offs for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `reasoning-effort-059` — design an eval to compare medium vs high on your workload

```text
Act as a senior reliability engineer. Design an eval to compare medium vs high on your workload for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `reasoning-effort-060` — build a regression pack that pins effort per task type

```text
Act as an expert latency analyst. Build a regression pack that pins effort per task type for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `reasoning-effort-061` — pick effort for a CRUD ticket vs a distributed bug

```text
Act as a senior model tuner. Pick effort for a CRUD ticket vs a distributed bug for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `reasoning-effort-062` — decide when xhigh/max is justified with a checklist

```text
Act as an expert eval engineer. Decide when xhigh/max is justified with a checklist for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `reasoning-effort-063` — write an incident note when max still fails

```text
Act as a senior performance engineer. Write an incident note when max still fails for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `reasoning-effort-064` — tune effort for long-doc QA vs short chat

```text
Act as a cost-optimization lead. Tune effort for long-doc QA vs short chat for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `reasoning-effort-065` — create an effort-selection flowchart

```text
Act as a senior reliability engineer. Create an effort-selection flowchart for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `reasoning-effort-066` — build a prompt+effort matrix for support macros

```text
Act as an expert latency analyst. Build a prompt+effort matrix for support macros for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `reasoning-effort-067` — tune verification depth alongside effort

```text
Act as a senior model tuner. Tune verification depth alongside effort for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `reasoning-effort-068` — measure cost-per-task across efforts with retries counted

```text
Act as an expert eval engineer. Measure cost-per-task across efforts with retries counted for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `reasoning-effort-069` — build a cache strategy to offset higher effort

```text
Act as a senior performance engineer. Build a cache strategy to offset higher effort for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `reasoning-effort-070` — diagnose a save-but-lost-on-refresh bug before escalating effort

```text
Act as a cost-optimization lead. Diagnose a save-but-lost-on-refresh bug before escalating effort for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `reasoning-effort-071` — design a fallback: low first, escalate on failure signals

```text
Act as a senior reliability engineer. Design a fallback: low first, escalate on failure signals for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `reasoning-effort-072` — build a routing rule: fast lane vs deep lane

```text
Act as an expert latency analyst. Build a routing rule: fast lane vs deep lane for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `reasoning-effort-073` — analyze latency vs quality trade-offs

```text
Act as a senior model tuner. Analyze latency vs quality trade-offs for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `reasoning-effort-074` — design an eval to compare medium vs high on your workload

```text
Act as an expert eval engineer. Design an eval to compare medium vs high on your workload for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `reasoning-effort-075` — build a regression pack that pins effort per task type

```text
Act as a senior performance engineer. Build a regression pack that pins effort per task type for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `reasoning-effort-076` — pick effort for a CRUD ticket vs a distributed bug

```text
Act as a cost-optimization lead. Pick effort for a CRUD ticket vs a distributed bug for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `reasoning-effort-077` — decide when xhigh/max is justified with a checklist

```text
Act as a senior reliability engineer. Decide when xhigh/max is justified with a checklist for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `reasoning-effort-078` — write an incident note when max still fails

```text
Act as an expert latency analyst. Write an incident note when max still fails for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `reasoning-effort-079` — tune effort for long-doc QA vs short chat

```text
Act as a senior model tuner. Tune effort for long-doc QA vs short chat for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `reasoning-effort-080` — create an effort-selection flowchart

```text
Act as an expert eval engineer. Create an effort-selection flowchart for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `reasoning-effort-081` — build a prompt+effort matrix for support macros

```text
Act as a senior performance engineer. Build a prompt+effort matrix for support macros for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `reasoning-effort-082` — tune verification depth alongside effort

```text
Act as a cost-optimization lead. Tune verification depth alongside effort for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `reasoning-effort-083` — measure cost-per-task across efforts with retries counted

```text
Act as a senior reliability engineer. Measure cost-per-task across efforts with retries counted for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `reasoning-effort-084` — build a cache strategy to offset higher effort

```text
Act as an expert latency analyst. Build a cache strategy to offset higher effort for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `reasoning-effort-085` — diagnose a save-but-lost-on-refresh bug before escalating effort

```text
Act as a senior model tuner. Diagnose a save-but-lost-on-refresh bug before escalating effort for a startup budget. The intended result is an effort recommendation with rationale. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `reasoning-effort-086` — design a fallback: low first, escalate on failure signals

```text
Act as an expert eval engineer. Design a fallback: low first, escalate on failure signals for a nonprofit. The intended result is a pinned config snippet. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `reasoning-effort-087` — build a routing rule: fast lane vs deep lane

```text
Act as a senior performance engineer. Build a routing rule: fast lane vs deep lane for a research lab. The intended result is a flowchart description. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `reasoning-effort-088` — analyze latency vs quality trade-offs

```text
Act as a cost-optimization lead. Analyze latency vs quality trade-offs for a high-traffic API. The intended result is a cost/latency report outline. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `reasoning-effort-089` — design an eval to compare medium vs high on your workload

```text
Act as a senior reliability engineer. Design an eval to compare medium vs high on your workload for a classroom. The intended result is a routing rule table. Requirements: start at low/medium; escalate only after a documented miss; include repro, logs, and tried-steps when escalating. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `reasoning-effort-090` — build a regression pack that pins effort per task type

```text
Act as an expert latency analyst. Build a regression pack that pins effort per task type for an enterprise pilot. The intended result is an eval plan with pass criteria. Requirements: pin effort per task type after evals; note gateway default is low; set explicitly. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
