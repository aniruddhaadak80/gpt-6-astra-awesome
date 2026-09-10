# 🔀 Migration: GPT-5.x → Astra — 90 copyable GPT-6 Astra prompts

> Checklist migration: Responses API, removed params, cache, subagents, verification.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](25-reasoning-effort.md) · [Next ▶](27-prompt-debugging.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `migration-001` — migrate a Chat Completions tool app to the Responses API

```text
Act as a senior migration lead. Migrate a Chat Completions tool app to the Responses API for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-002` — migrate a RAG app's citation format to Astra style

```text
Act as an expert API integrator. Migrate a RAG app's citation format to Astra style for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-003` — run the $openai-docs migrate checklist with sign-off

```text
Act as a senior platform engineer. Run the $openai-docs migrate checklist with sign-off for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-004` — re-baseline evals after the model swap

```text
Act as a staff developer-experience engineer. Re-baseline evals after the model swap for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-005` — migrate a support bot's verbosity to concise paragraphs

```text
Act as a senior QA migration tester. Migrate a support bot's verbosity to concise paragraphs for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-006` — migrate a multi-agent harness to Astra delegation norms

```text
Act as an expert docs migrator. Migrate a multi-agent harness to Astra delegation norms for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-007` — build a rollback plan if Astra regresses a task

```text
Act as a senior migration lead. Build a rollback plan if Astra regresses a task for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-008` — update cache config for Astra's read/write pricing

```text
Act as an expert API integrator. Update cache config for Astra's read/write pricing for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-009` — migrate structured-output schemas with semantic prompts

```text
Act as a senior platform engineer. Migrate structured-output schemas with semantic prompts for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-010` — migrate a GPT-5.6 Sol agent to Astra's autonomy model

```text
Act as a staff developer-experience engineer. Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-011` — re-price a workload at $10/$50 with cache math

```text
Act as a senior QA migration tester. Re-price a workload at $10/$50 with cache math for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-012` — re-tune prompts that over-ask after moving to Astra

```text
Act as an expert docs migrator. Re-tune prompts that over-ask after moving to Astra for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-013` — migrate a browser-use workflow with new stop rules

```text
Act as a senior migration lead. Migrate a browser-use workflow with new stop rules for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-014` — remove temperature/top_p/logprobs with behavior checks

```text
Act as an expert API integrator. Remove temperature/top_p/logprobs with behavior checks for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-015` — update AGENTS.md/SKILL.md priority blocks for Astra

```text
Act as a senior platform engineer. Update AGENTS.md/SKILL.md priority blocks for Astra for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-016` — migrate a Chat Completions tool app to the Responses API

```text
Act as a staff developer-experience engineer. Migrate a Chat Completions tool app to the Responses API for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-017` — migrate a RAG app's citation format to Astra style

```text
Act as a senior QA migration tester. Migrate a RAG app's citation format to Astra style for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-018` — run the $openai-docs migrate checklist with sign-off

```text
Act as an expert docs migrator. Run the $openai-docs migrate checklist with sign-off for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-019` — re-baseline evals after the model swap

```text
Act as a senior migration lead. Re-baseline evals after the model swap for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-020` — migrate a support bot's verbosity to concise paragraphs

```text
Act as an expert API integrator. Migrate a support bot's verbosity to concise paragraphs for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-021` — migrate a multi-agent harness to Astra delegation norms

```text
Act as a senior platform engineer. Migrate a multi-agent harness to Astra delegation norms for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-022` — build a rollback plan if Astra regresses a task

```text
Act as a staff developer-experience engineer. Build a rollback plan if Astra regresses a task for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-023` — update cache config for Astra's read/write pricing

```text
Act as a senior QA migration tester. Update cache config for Astra's read/write pricing for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-024` — migrate structured-output schemas with semantic prompts

```text
Act as an expert docs migrator. Migrate structured-output schemas with semantic prompts for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-025` — migrate a GPT-5.6 Sol agent to Astra's autonomy model

```text
Act as a senior migration lead. Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-026` — re-price a workload at $10/$50 with cache math

```text
Act as an expert API integrator. Re-price a workload at $10/$50 with cache math for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `migration-027` — re-tune prompts that over-ask after moving to Astra

```text
Act as a senior platform engineer. Re-tune prompts that over-ask after moving to Astra for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-028` — migrate a browser-use workflow with new stop rules

```text
Act as a staff developer-experience engineer. Migrate a browser-use workflow with new stop rules for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `migration-029` — remove temperature/top_p/logprobs with behavior checks

```text
Act as a senior QA migration tester. Remove temperature/top_p/logprobs with behavior checks for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-030` — update AGENTS.md/SKILL.md priority blocks for Astra

```text
Act as an expert docs migrator. Update AGENTS.md/SKILL.md priority blocks for Astra for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `migration-031` — migrate a Chat Completions tool app to the Responses API

```text
Act as a senior migration lead. Migrate a Chat Completions tool app to the Responses API for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `migration-032` — migrate a RAG app's citation format to Astra style

```text
Act as an expert API integrator. Migrate a RAG app's citation format to Astra style for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `migration-033` — run the $openai-docs migrate checklist with sign-off

```text
Act as a senior platform engineer. Run the $openai-docs migrate checklist with sign-off for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `migration-034` — re-baseline evals after the model swap

```text
Act as a staff developer-experience engineer. Re-baseline evals after the model swap for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `migration-035` — migrate a support bot's verbosity to concise paragraphs

```text
Act as a senior QA migration tester. Migrate a support bot's verbosity to concise paragraphs for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `migration-036` — migrate a multi-agent harness to Astra delegation norms

```text
Act as an expert docs migrator. Migrate a multi-agent harness to Astra delegation norms for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `migration-037` — build a rollback plan if Astra regresses a task

```text
Act as a senior migration lead. Build a rollback plan if Astra regresses a task for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `migration-038` — update cache config for Astra's read/write pricing

```text
Act as an expert API integrator. Update cache config for Astra's read/write pricing for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `migration-039` — migrate structured-output schemas with semantic prompts

```text
Act as a senior platform engineer. Migrate structured-output schemas with semantic prompts for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `migration-040` — migrate a GPT-5.6 Sol agent to Astra's autonomy model

```text
Act as a staff developer-experience engineer. Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `migration-041` — re-price a workload at $10/$50 with cache math

```text
Act as a senior QA migration tester. Re-price a workload at $10/$50 with cache math for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `migration-042` — re-tune prompts that over-ask after moving to Astra

```text
Act as an expert docs migrator. Re-tune prompts that over-ask after moving to Astra for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `migration-043` — migrate a browser-use workflow with new stop rules

```text
Act as a senior migration lead. Migrate a browser-use workflow with new stop rules for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `migration-044` — remove temperature/top_p/logprobs with behavior checks

```text
Act as an expert API integrator. Remove temperature/top_p/logprobs with behavior checks for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `migration-045` — update AGENTS.md/SKILL.md priority blocks for Astra

```text
Act as a senior platform engineer. Update AGENTS.md/SKILL.md priority blocks for Astra for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `migration-046` — migrate a Chat Completions tool app to the Responses API

```text
Act as a staff developer-experience engineer. Migrate a Chat Completions tool app to the Responses API for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `migration-047` — migrate a RAG app's citation format to Astra style

```text
Act as a senior QA migration tester. Migrate a RAG app's citation format to Astra style for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `migration-048` — run the $openai-docs migrate checklist with sign-off

```text
Act as an expert docs migrator. Run the $openai-docs migrate checklist with sign-off for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `migration-049` — re-baseline evals after the model swap

```text
Act as a senior migration lead. Re-baseline evals after the model swap for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `migration-050` — migrate a support bot's verbosity to concise paragraphs

```text
Act as an expert API integrator. Migrate a support bot's verbosity to concise paragraphs for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `migration-051` — migrate a multi-agent harness to Astra delegation norms

```text
Act as a senior platform engineer. Migrate a multi-agent harness to Astra delegation norms for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `migration-052` — build a rollback plan if Astra regresses a task

```text
Act as a staff developer-experience engineer. Build a rollback plan if Astra regresses a task for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `migration-053` — update cache config for Astra's read/write pricing

```text
Act as a senior QA migration tester. Update cache config for Astra's read/write pricing for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `migration-054` — migrate structured-output schemas with semantic prompts

```text
Act as an expert docs migrator. Migrate structured-output schemas with semantic prompts for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `migration-055` — migrate a GPT-5.6 Sol agent to Astra's autonomy model

```text
Act as a senior migration lead. Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `migration-056` — re-price a workload at $10/$50 with cache math

```text
Act as an expert API integrator. Re-price a workload at $10/$50 with cache math for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `migration-057` — re-tune prompts that over-ask after moving to Astra

```text
Act as a senior platform engineer. Re-tune prompts that over-ask after moving to Astra for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `migration-058` — migrate a browser-use workflow with new stop rules

```text
Act as a staff developer-experience engineer. Migrate a browser-use workflow with new stop rules for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `migration-059` — remove temperature/top_p/logprobs with behavior checks

```text
Act as a senior QA migration tester. Remove temperature/top_p/logprobs with behavior checks for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `migration-060` — update AGENTS.md/SKILL.md priority blocks for Astra

```text
Act as an expert docs migrator. Update AGENTS.md/SKILL.md priority blocks for Astra for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `migration-061` — migrate a Chat Completions tool app to the Responses API

```text
Act as a senior migration lead. Migrate a Chat Completions tool app to the Responses API for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `migration-062` — migrate a RAG app's citation format to Astra style

```text
Act as an expert API integrator. Migrate a RAG app's citation format to Astra style for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `migration-063` — run the $openai-docs migrate checklist with sign-off

```text
Act as a senior platform engineer. Run the $openai-docs migrate checklist with sign-off for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `migration-064` — re-baseline evals after the model swap

```text
Act as a staff developer-experience engineer. Re-baseline evals after the model swap for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `migration-065` — migrate a support bot's verbosity to concise paragraphs

```text
Act as a senior QA migration tester. Migrate a support bot's verbosity to concise paragraphs for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `migration-066` — migrate a multi-agent harness to Astra delegation norms

```text
Act as an expert docs migrator. Migrate a multi-agent harness to Astra delegation norms for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `migration-067` — build a rollback plan if Astra regresses a task

```text
Act as a senior migration lead. Build a rollback plan if Astra regresses a task for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `migration-068` — update cache config for Astra's read/write pricing

```text
Act as an expert API integrator. Update cache config for Astra's read/write pricing for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `migration-069` — migrate structured-output schemas with semantic prompts

```text
Act as a senior platform engineer. Migrate structured-output schemas with semantic prompts for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `migration-070` — migrate a GPT-5.6 Sol agent to Astra's autonomy model

```text
Act as a staff developer-experience engineer. Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `migration-071` — re-price a workload at $10/$50 with cache math

```text
Act as a senior QA migration tester. Re-price a workload at $10/$50 with cache math for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `migration-072` — re-tune prompts that over-ask after moving to Astra

```text
Act as an expert docs migrator. Re-tune prompts that over-ask after moving to Astra for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `migration-073` — migrate a browser-use workflow with new stop rules

```text
Act as a senior migration lead. Migrate a browser-use workflow with new stop rules for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `migration-074` — remove temperature/top_p/logprobs with behavior checks

```text
Act as an expert API integrator. Remove temperature/top_p/logprobs with behavior checks for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `migration-075` — update AGENTS.md/SKILL.md priority blocks for Astra

```text
Act as a senior platform engineer. Update AGENTS.md/SKILL.md priority blocks for Astra for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `migration-076` — migrate a Chat Completions tool app to the Responses API

```text
Act as a staff developer-experience engineer. Migrate a Chat Completions tool app to the Responses API for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `migration-077` — migrate a RAG app's citation format to Astra style

```text
Act as a senior QA migration tester. Migrate a RAG app's citation format to Astra style for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `migration-078` — run the $openai-docs migrate checklist with sign-off

```text
Act as an expert docs migrator. Run the $openai-docs migrate checklist with sign-off for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `migration-079` — re-baseline evals after the model swap

```text
Act as a senior migration lead. Re-baseline evals after the model swap for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `migration-080` — migrate a support bot's verbosity to concise paragraphs

```text
Act as an expert API integrator. Migrate a support bot's verbosity to concise paragraphs for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `migration-081` — migrate a multi-agent harness to Astra delegation norms

```text
Act as a senior platform engineer. Migrate a multi-agent harness to Astra delegation norms for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `migration-082` — build a rollback plan if Astra regresses a task

```text
Act as a staff developer-experience engineer. Build a rollback plan if Astra regresses a task for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `migration-083` — update cache config for Astra's read/write pricing

```text
Act as a senior QA migration tester. Update cache config for Astra's read/write pricing for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `migration-084` — migrate structured-output schemas with semantic prompts

```text
Act as an expert docs migrator. Migrate structured-output schemas with semantic prompts for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `migration-085` — migrate a GPT-5.6 Sol agent to Astra's autonomy model

```text
Act as a senior migration lead. Migrate a GPT-5.6 Sol agent to Astra's autonomy model for a production API. The intended result is a migration checklist with sign-offs. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `migration-086` — re-price a workload at $10/$50 with cache math

```text
Act as an expert API integrator. Re-price a workload at $10/$50 with cache math for a classroom codebase. The intended result is a launch note. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `migration-087` — re-tune prompts that over-ask after moving to Astra

```text
Act as a senior platform engineer. Re-tune prompts that over-ask after moving to Astra for an enterprise. The intended result is an updated prompt pack. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `migration-088` — migrate a browser-use workflow with new stop rules

```text
Act as a staff developer-experience engineer. Migrate a browser-use workflow with new stop rules for a startup. The intended result is a rollback plan. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `migration-089` — remove temperature/top_p/logprobs with behavior checks

```text
Act as a senior QA migration tester. Remove temperature/top_p/logprobs with behavior checks for a Cursor-style relay. The intended result is a config diff. Requirements: check interfaces, effort, deprecated params, cache item by item; validate single-task cost on your workload. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `migration-090` — update AGENTS.md/SKILL.md priority blocks for Astra

```text
Act as an expert docs migrator. Update AGENTS.md/SKILL.md priority blocks for Astra for a Codex project. The intended result is a before/after eval table. Requirements: record before/after transcripts for review; keep a rollback branch until sign-off. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
