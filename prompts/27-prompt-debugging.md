# 🔍 Prompt Debugging & Audits — 90 copyable GPT-6 Astra prompts

> Trace stalls to the exact file/line: authority, conflicts, staleness.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](26-migration.md) · [Next ▶](28-productivity.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `prompt-debugging-001` — diagnose why Astra keeps asking instead of acting

```text
Act as a senior prompt engineer. Diagnose why Astra keeps asking instead of acting for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-002` — audit verbosity: find the formatting instruction causing bloat

```text
Act as an expert agent debugger. Audit verbosity: find the formatting instruction causing bloat for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-003` — build a stop-word/slop-word lint pass

```text
Act as a senior DX engineer. Build a stop-word/slop-word lint pass for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-004` — build a regression set from five real failures

```text
Act as a staff AI auditor. Build a regression set from five real failures for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-005` — audit PII leakage paths in a workflow

```text
Act as a senior skills curator. Audit PII leakage paths in a workflow for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-006` — trace a scope-escape to its instruction source

```text
Act as an expert eval designer. Trace a scope-escape to its instruction source for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-007` — design a canary eval before wide rollout

```text
Act as a senior prompt engineer. Design a canary eval before wide rollout for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-008` — design a prompt A/B with success criteria

```text
Act as an expert agent debugger. Design a prompt A/B with success criteria for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-009` — create a prompt-version log with diffs

```text
Act as a senior DX engineer. Create a prompt-version log with diffs for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-010` — build a minimal repro for a flaky agent run

```text
Act as a staff AI auditor. Build a minimal repro for a flaky agent run for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-011` — write a failure taxonomy with examples

```text
Act as a senior skills curator. Write a failure taxonomy with examples for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-012` — audit AGENTS.md for conflicting instructions

```text
Act as an expert eval designer. Audit AGENTS.md for conflicting instructions for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-013` — build a confusion matrix for a classifier prompt

```text
Act as a senior prompt engineer. Build a confusion matrix for a classifier prompt for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-014` — find which SKILL.md line caused a stall and quote it

```text
Act as an expert agent debugger. Find which SKILL.md line caused a stall and quote it for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-015` — diagnose over-testing on tiny diffs

```text
Act as a senior DX engineer. Diagnose over-testing on tiny diffs for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-016` — diagnose why Astra keeps asking instead of acting

```text
Act as a staff AI auditor. Diagnose why Astra keeps asking instead of acting for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-017` — audit verbosity: find the formatting instruction causing bloat

```text
Act as a senior skills curator. Audit verbosity: find the formatting instruction causing bloat for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-018` — build a stop-word/slop-word lint pass

```text
Act as an expert eval designer. Build a stop-word/slop-word lint pass for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-019` — build a regression set from five real failures

```text
Act as a senior prompt engineer. Build a regression set from five real failures for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-020` — audit PII leakage paths in a workflow

```text
Act as an expert agent debugger. Audit PII leakage paths in a workflow for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-021` — trace a scope-escape to its instruction source

```text
Act as a senior DX engineer. Trace a scope-escape to its instruction source for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-022` — design a canary eval before wide rollout

```text
Act as a staff AI auditor. Design a canary eval before wide rollout for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-023` — design a prompt A/B with success criteria

```text
Act as a senior skills curator. Design a prompt A/B with success criteria for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-024` — create a prompt-version log with diffs

```text
Act as an expert eval designer. Create a prompt-version log with diffs for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-025` — build a minimal repro for a flaky agent run

```text
Act as a senior prompt engineer. Build a minimal repro for a flaky agent run for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-026` — write a failure taxonomy with examples

```text
Act as an expert agent debugger. Write a failure taxonomy with examples for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `prompt-debugging-027` — audit AGENTS.md for conflicting instructions

```text
Act as a senior DX engineer. Audit AGENTS.md for conflicting instructions for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-028` — build a confusion matrix for a classifier prompt

```text
Act as a staff AI auditor. Build a confusion matrix for a classifier prompt for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `prompt-debugging-029` — find which SKILL.md line caused a stall and quote it

```text
Act as a senior skills curator. Find which SKILL.md line caused a stall and quote it for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-030` — diagnose over-testing on tiny diffs

```text
Act as an expert eval designer. Diagnose over-testing on tiny diffs for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `prompt-debugging-031` — diagnose why Astra keeps asking instead of acting

```text
Act as a senior prompt engineer. Diagnose why Astra keeps asking instead of acting for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `prompt-debugging-032` — audit verbosity: find the formatting instruction causing bloat

```text
Act as an expert agent debugger. Audit verbosity: find the formatting instruction causing bloat for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `prompt-debugging-033` — build a stop-word/slop-word lint pass

```text
Act as a senior DX engineer. Build a stop-word/slop-word lint pass for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `prompt-debugging-034` — build a regression set from five real failures

```text
Act as a staff AI auditor. Build a regression set from five real failures for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `prompt-debugging-035` — audit PII leakage paths in a workflow

```text
Act as a senior skills curator. Audit PII leakage paths in a workflow for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `prompt-debugging-036` — trace a scope-escape to its instruction source

```text
Act as an expert eval designer. Trace a scope-escape to its instruction source for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `prompt-debugging-037` — design a canary eval before wide rollout

```text
Act as a senior prompt engineer. Design a canary eval before wide rollout for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `prompt-debugging-038` — design a prompt A/B with success criteria

```text
Act as an expert agent debugger. Design a prompt A/B with success criteria for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `prompt-debugging-039` — create a prompt-version log with diffs

```text
Act as a senior DX engineer. Create a prompt-version log with diffs for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `prompt-debugging-040` — build a minimal repro for a flaky agent run

```text
Act as a staff AI auditor. Build a minimal repro for a flaky agent run for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `prompt-debugging-041` — write a failure taxonomy with examples

```text
Act as a senior skills curator. Write a failure taxonomy with examples for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `prompt-debugging-042` — audit AGENTS.md for conflicting instructions

```text
Act as an expert eval designer. Audit AGENTS.md for conflicting instructions for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `prompt-debugging-043` — build a confusion matrix for a classifier prompt

```text
Act as a senior prompt engineer. Build a confusion matrix for a classifier prompt for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `prompt-debugging-044` — find which SKILL.md line caused a stall and quote it

```text
Act as an expert agent debugger. Find which SKILL.md line caused a stall and quote it for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `prompt-debugging-045` — diagnose over-testing on tiny diffs

```text
Act as a senior DX engineer. Diagnose over-testing on tiny diffs for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `prompt-debugging-046` — diagnose why Astra keeps asking instead of acting

```text
Act as a staff AI auditor. Diagnose why Astra keeps asking instead of acting for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `prompt-debugging-047` — audit verbosity: find the formatting instruction causing bloat

```text
Act as a senior skills curator. Audit verbosity: find the formatting instruction causing bloat for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `prompt-debugging-048` — build a stop-word/slop-word lint pass

```text
Act as an expert eval designer. Build a stop-word/slop-word lint pass for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `prompt-debugging-049` — build a regression set from five real failures

```text
Act as a senior prompt engineer. Build a regression set from five real failures for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `prompt-debugging-050` — audit PII leakage paths in a workflow

```text
Act as an expert agent debugger. Audit PII leakage paths in a workflow for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `prompt-debugging-051` — trace a scope-escape to its instruction source

```text
Act as a senior DX engineer. Trace a scope-escape to its instruction source for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `prompt-debugging-052` — design a canary eval before wide rollout

```text
Act as a staff AI auditor. Design a canary eval before wide rollout for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `prompt-debugging-053` — design a prompt A/B with success criteria

```text
Act as a senior skills curator. Design a prompt A/B with success criteria for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `prompt-debugging-054` — create a prompt-version log with diffs

```text
Act as an expert eval designer. Create a prompt-version log with diffs for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `prompt-debugging-055` — build a minimal repro for a flaky agent run

```text
Act as a senior prompt engineer. Build a minimal repro for a flaky agent run for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `prompt-debugging-056` — write a failure taxonomy with examples

```text
Act as an expert agent debugger. Write a failure taxonomy with examples for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `prompt-debugging-057` — audit AGENTS.md for conflicting instructions

```text
Act as a senior DX engineer. Audit AGENTS.md for conflicting instructions for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `prompt-debugging-058` — build a confusion matrix for a classifier prompt

```text
Act as a staff AI auditor. Build a confusion matrix for a classifier prompt for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `prompt-debugging-059` — find which SKILL.md line caused a stall and quote it

```text
Act as a senior skills curator. Find which SKILL.md line caused a stall and quote it for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `prompt-debugging-060` — diagnose over-testing on tiny diffs

```text
Act as an expert eval designer. Diagnose over-testing on tiny diffs for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `prompt-debugging-061` — diagnose why Astra keeps asking instead of acting

```text
Act as a senior prompt engineer. Diagnose why Astra keeps asking instead of acting for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `prompt-debugging-062` — audit verbosity: find the formatting instruction causing bloat

```text
Act as an expert agent debugger. Audit verbosity: find the formatting instruction causing bloat for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `prompt-debugging-063` — build a stop-word/slop-word lint pass

```text
Act as a senior DX engineer. Build a stop-word/slop-word lint pass for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `prompt-debugging-064` — build a regression set from five real failures

```text
Act as a staff AI auditor. Build a regression set from five real failures for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `prompt-debugging-065` — audit PII leakage paths in a workflow

```text
Act as a senior skills curator. Audit PII leakage paths in a workflow for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `prompt-debugging-066` — trace a scope-escape to its instruction source

```text
Act as an expert eval designer. Trace a scope-escape to its instruction source for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `prompt-debugging-067` — design a canary eval before wide rollout

```text
Act as a senior prompt engineer. Design a canary eval before wide rollout for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `prompt-debugging-068` — design a prompt A/B with success criteria

```text
Act as an expert agent debugger. Design a prompt A/B with success criteria for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `prompt-debugging-069` — create a prompt-version log with diffs

```text
Act as a senior DX engineer. Create a prompt-version log with diffs for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `prompt-debugging-070` — build a minimal repro for a flaky agent run

```text
Act as a staff AI auditor. Build a minimal repro for a flaky agent run for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `prompt-debugging-071` — write a failure taxonomy with examples

```text
Act as a senior skills curator. Write a failure taxonomy with examples for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `prompt-debugging-072` — audit AGENTS.md for conflicting instructions

```text
Act as an expert eval designer. Audit AGENTS.md for conflicting instructions for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `prompt-debugging-073` — build a confusion matrix for a classifier prompt

```text
Act as a senior prompt engineer. Build a confusion matrix for a classifier prompt for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `prompt-debugging-074` — find which SKILL.md line caused a stall and quote it

```text
Act as an expert agent debugger. Find which SKILL.md line caused a stall and quote it for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `prompt-debugging-075` — diagnose over-testing on tiny diffs

```text
Act as a senior DX engineer. Diagnose over-testing on tiny diffs for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `prompt-debugging-076` — diagnose why Astra keeps asking instead of acting

```text
Act as a staff AI auditor. Diagnose why Astra keeps asking instead of acting for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `prompt-debugging-077` — audit verbosity: find the formatting instruction causing bloat

```text
Act as a senior skills curator. Audit verbosity: find the formatting instruction causing bloat for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `prompt-debugging-078` — build a stop-word/slop-word lint pass

```text
Act as an expert eval designer. Build a stop-word/slop-word lint pass for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `prompt-debugging-079` — build a regression set from five real failures

```text
Act as a senior prompt engineer. Build a regression set from five real failures for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `prompt-debugging-080` — audit PII leakage paths in a workflow

```text
Act as an expert agent debugger. Audit PII leakage paths in a workflow for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `prompt-debugging-081` — trace a scope-escape to its instruction source

```text
Act as a senior DX engineer. Trace a scope-escape to its instruction source for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `prompt-debugging-082` — design a canary eval before wide rollout

```text
Act as a staff AI auditor. Design a canary eval before wide rollout for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `prompt-debugging-083` — design a prompt A/B with success criteria

```text
Act as a senior skills curator. Design a prompt A/B with success criteria for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `prompt-debugging-084` — create a prompt-version log with diffs

```text
Act as an expert eval designer. Create a prompt-version log with diffs for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `prompt-debugging-085` — build a minimal repro for a flaky agent run

```text
Act as a senior prompt engineer. Build a minimal repro for a flaky agent run for a platform team. The intended result is a diagnosis with quoted evidence. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `prompt-debugging-086` — write a failure taxonomy with examples

```text
Act as an expert agent debugger. Write a failure taxonomy with examples for a client audit. The intended result is a version log. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `prompt-debugging-087` — audit AGENTS.md for conflicting instructions

```text
Act as a senior DX engineer. Audit AGENTS.md for conflicting instructions for open source. The intended result is a regression pack. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `prompt-debugging-088` — build a confusion matrix for a classifier prompt

```text
Act as a staff AI auditor. Build a confusion matrix for a classifier prompt for a classroom. The intended result is a cleaned instruction set. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `prompt-debugging-089` — find which SKILL.md line caused a stall and quote it

```text
Act as a senior skills curator. Find which SKILL.md line caused a stall and quote it for an enterprise. The intended result is an A/B plan with metrics. Requirements: quote the exact file and line that caused behavior; distinguish explicit user intent from inferred context. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `prompt-debugging-090` — diagnose over-testing on tiny diffs

```text
Act as an expert eval designer. Diagnose over-testing on tiny diffs for a startup. The intended result is a minimal repro. Requirements: one variable per A/B; keep failing transcripts verbatim for review. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
