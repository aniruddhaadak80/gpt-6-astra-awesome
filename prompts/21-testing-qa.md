# 🧪 Testing, QA & Verification — 90 copyable GPT-6 Astra prompts

> Calibrate Astra's thoroughness: targeted checks for small diffs, full suites for risky ones.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](20-devops-terminal.md) · [Next ▶](22-multi-agent.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `testing-qa-001` — write targeted tests for a one-line fix without over-testing

```text
Act as a senior QA engineer. Write targeted tests for a one-line fix without over-testing for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-002` — create a data-migration verification plan

```text
Act as an expert test automation lead. Create a data-migration verification plan for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-003` — build a test-data factory plan

```text
Act as a senior SDET. Build a test-data factory plan for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-004` — build a mobile-layout QA checklist

```text
Act as a staff release engineer. Build a mobile-layout QA checklist for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-005` — write a bug report that gets fixed fast

```text
Act as a senior accessibility auditor. Write a bug report that gets fixed fast for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-006` — write accessibility checks for a form

```text
Act as an expert performance tester. Write accessibility checks for a form for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-007` — design a release gate with quality bars

```text
Act as a senior QA engineer. Design a release gate with quality bars for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-008` — design a load-test plan with thresholds

```text
Act as an expert test automation lead. Design a load-test plan with thresholds for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-009` — create a flaky-test triage workflow

```text
Act as a senior SDET. Create a flaky-test triage workflow for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-010` — create API contract tests with edge cases

```text
Act as a staff release engineer. Create API contract tests with edge cases for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-011` — build a visual-regression checklist vs reference

```text
Act as a senior accessibility auditor. Build a visual-regression checklist vs reference for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-012` — build a browser test plan for a booking flow

```text
Act as an expert performance tester. Build a browser test plan for a booking flow for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-013` — write a security smoke-test list (defensive)

```text
Act as a senior QA engineer. Write a security smoke-test list (defensive) for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-014` — design a regression set for a refactor

```text
Act as an expert test automation lead. Design a regression set for a refactor for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-015` — design a chaos-drill with abort criteria

```text
Act as a senior SDET. Design a chaos-drill with abort criteria for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-016` — write targeted tests for a one-line fix without over-testing

```text
Act as a staff release engineer. Write targeted tests for a one-line fix without over-testing for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-017` — create a data-migration verification plan

```text
Act as a senior accessibility auditor. Create a data-migration verification plan for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-018` — build a test-data factory plan

```text
Act as an expert performance tester. Build a test-data factory plan for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-019` — build a mobile-layout QA checklist

```text
Act as a senior QA engineer. Build a mobile-layout QA checklist for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-020` — write a bug report that gets fixed fast

```text
Act as an expert test automation lead. Write a bug report that gets fixed fast for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-021` — write accessibility checks for a form

```text
Act as a senior SDET. Write accessibility checks for a form for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-022` — design a release gate with quality bars

```text
Act as a staff release engineer. Design a release gate with quality bars for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-023` — design a load-test plan with thresholds

```text
Act as a senior accessibility auditor. Design a load-test plan with thresholds for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-024` — create a flaky-test triage workflow

```text
Act as an expert performance tester. Create a flaky-test triage workflow for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-025` — create API contract tests with edge cases

```text
Act as a senior QA engineer. Create API contract tests with edge cases for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-026` — build a visual-regression checklist vs reference

```text
Act as an expert test automation lead. Build a visual-regression checklist vs reference for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `testing-qa-027` — build a browser test plan for a booking flow

```text
Act as a senior SDET. Build a browser test plan for a booking flow for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-028` — write a security smoke-test list (defensive)

```text
Act as a staff release engineer. Write a security smoke-test list (defensive) for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `testing-qa-029` — design a regression set for a refactor

```text
Act as a senior accessibility auditor. Design a regression set for a refactor for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-030` — design a chaos-drill with abort criteria

```text
Act as an expert performance tester. Design a chaos-drill with abort criteria for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `testing-qa-031` — write targeted tests for a one-line fix without over-testing

```text
Act as a senior QA engineer. Write targeted tests for a one-line fix without over-testing for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `testing-qa-032` — create a data-migration verification plan

```text
Act as an expert test automation lead. Create a data-migration verification plan for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `testing-qa-033` — build a test-data factory plan

```text
Act as a senior SDET. Build a test-data factory plan for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `testing-qa-034` — build a mobile-layout QA checklist

```text
Act as a staff release engineer. Build a mobile-layout QA checklist for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `testing-qa-035` — write a bug report that gets fixed fast

```text
Act as a senior accessibility auditor. Write a bug report that gets fixed fast for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `testing-qa-036` — write accessibility checks for a form

```text
Act as an expert performance tester. Write accessibility checks for a form for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `testing-qa-037` — design a release gate with quality bars

```text
Act as a senior QA engineer. Design a release gate with quality bars for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `testing-qa-038` — design a load-test plan with thresholds

```text
Act as an expert test automation lead. Design a load-test plan with thresholds for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `testing-qa-039` — create a flaky-test triage workflow

```text
Act as a senior SDET. Create a flaky-test triage workflow for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `testing-qa-040` — create API contract tests with edge cases

```text
Act as a staff release engineer. Create API contract tests with edge cases for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `testing-qa-041` — build a visual-regression checklist vs reference

```text
Act as a senior accessibility auditor. Build a visual-regression checklist vs reference for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `testing-qa-042` — build a browser test plan for a booking flow

```text
Act as an expert performance tester. Build a browser test plan for a booking flow for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `testing-qa-043` — write a security smoke-test list (defensive)

```text
Act as a senior QA engineer. Write a security smoke-test list (defensive) for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `testing-qa-044` — design a regression set for a refactor

```text
Act as an expert test automation lead. Design a regression set for a refactor for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `testing-qa-045` — design a chaos-drill with abort criteria

```text
Act as a senior SDET. Design a chaos-drill with abort criteria for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `testing-qa-046` — write targeted tests for a one-line fix without over-testing

```text
Act as a staff release engineer. Write targeted tests for a one-line fix without over-testing for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `testing-qa-047` — create a data-migration verification plan

```text
Act as a senior accessibility auditor. Create a data-migration verification plan for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `testing-qa-048` — build a test-data factory plan

```text
Act as an expert performance tester. Build a test-data factory plan for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `testing-qa-049` — build a mobile-layout QA checklist

```text
Act as a senior QA engineer. Build a mobile-layout QA checklist for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `testing-qa-050` — write a bug report that gets fixed fast

```text
Act as an expert test automation lead. Write a bug report that gets fixed fast for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `testing-qa-051` — write accessibility checks for a form

```text
Act as a senior SDET. Write accessibility checks for a form for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `testing-qa-052` — design a release gate with quality bars

```text
Act as a staff release engineer. Design a release gate with quality bars for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `testing-qa-053` — design a load-test plan with thresholds

```text
Act as a senior accessibility auditor. Design a load-test plan with thresholds for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `testing-qa-054` — create a flaky-test triage workflow

```text
Act as an expert performance tester. Create a flaky-test triage workflow for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `testing-qa-055` — create API contract tests with edge cases

```text
Act as a senior QA engineer. Create API contract tests with edge cases for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `testing-qa-056` — build a visual-regression checklist vs reference

```text
Act as an expert test automation lead. Build a visual-regression checklist vs reference for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `testing-qa-057` — build a browser test plan for a booking flow

```text
Act as a senior SDET. Build a browser test plan for a booking flow for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `testing-qa-058` — write a security smoke-test list (defensive)

```text
Act as a staff release engineer. Write a security smoke-test list (defensive) for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `testing-qa-059` — design a regression set for a refactor

```text
Act as a senior accessibility auditor. Design a regression set for a refactor for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `testing-qa-060` — design a chaos-drill with abort criteria

```text
Act as an expert performance tester. Design a chaos-drill with abort criteria for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `testing-qa-061` — write targeted tests for a one-line fix without over-testing

```text
Act as a senior QA engineer. Write targeted tests for a one-line fix without over-testing for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `testing-qa-062` — create a data-migration verification plan

```text
Act as an expert test automation lead. Create a data-migration verification plan for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `testing-qa-063` — build a test-data factory plan

```text
Act as a senior SDET. Build a test-data factory plan for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `testing-qa-064` — build a mobile-layout QA checklist

```text
Act as a staff release engineer. Build a mobile-layout QA checklist for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `testing-qa-065` — write a bug report that gets fixed fast

```text
Act as a senior accessibility auditor. Write a bug report that gets fixed fast for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `testing-qa-066` — write accessibility checks for a form

```text
Act as an expert performance tester. Write accessibility checks for a form for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `testing-qa-067` — design a release gate with quality bars

```text
Act as a senior QA engineer. Design a release gate with quality bars for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `testing-qa-068` — design a load-test plan with thresholds

```text
Act as an expert test automation lead. Design a load-test plan with thresholds for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `testing-qa-069` — create a flaky-test triage workflow

```text
Act as a senior SDET. Create a flaky-test triage workflow for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `testing-qa-070` — create API contract tests with edge cases

```text
Act as a staff release engineer. Create API contract tests with edge cases for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `testing-qa-071` — build a visual-regression checklist vs reference

```text
Act as a senior accessibility auditor. Build a visual-regression checklist vs reference for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `testing-qa-072` — build a browser test plan for a booking flow

```text
Act as an expert performance tester. Build a browser test plan for a booking flow for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `testing-qa-073` — write a security smoke-test list (defensive)

```text
Act as a senior QA engineer. Write a security smoke-test list (defensive) for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `testing-qa-074` — design a regression set for a refactor

```text
Act as an expert test automation lead. Design a regression set for a refactor for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `testing-qa-075` — design a chaos-drill with abort criteria

```text
Act as a senior SDET. Design a chaos-drill with abort criteria for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `testing-qa-076` — write targeted tests for a one-line fix without over-testing

```text
Act as a staff release engineer. Write targeted tests for a one-line fix without over-testing for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `testing-qa-077` — create a data-migration verification plan

```text
Act as a senior accessibility auditor. Create a data-migration verification plan for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `testing-qa-078` — build a test-data factory plan

```text
Act as an expert performance tester. Build a test-data factory plan for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `testing-qa-079` — build a mobile-layout QA checklist

```text
Act as a senior QA engineer. Build a mobile-layout QA checklist for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `testing-qa-080` — write a bug report that gets fixed fast

```text
Act as an expert test automation lead. Write a bug report that gets fixed fast for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `testing-qa-081` — write accessibility checks for a form

```text
Act as a senior SDET. Write accessibility checks for a form for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `testing-qa-082` — design a release gate with quality bars

```text
Act as a staff release engineer. Design a release gate with quality bars for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `testing-qa-083` — design a load-test plan with thresholds

```text
Act as a senior accessibility auditor. Design a load-test plan with thresholds for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `testing-qa-084` — create a flaky-test triage workflow

```text
Act as an expert performance tester. Create a flaky-test triage workflow for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `testing-qa-085` — create API contract tests with edge cases

```text
Act as a senior QA engineer. Create API contract tests with edge cases for a web app. The intended result is a test plan with cases. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `testing-qa-086` — build a visual-regression checklist vs reference

```text
Act as an expert test automation lead. Build a visual-regression checklist vs reference for a game build. The intended result is a flake backlog. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `testing-qa-087` — build a browser test plan for a booking flow

```text
Act as a senior SDET. Build a browser test plan for a booking flow for a data pipeline. The intended result is a gate checklist. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `testing-qa-088` — write a security smoke-test list (defensive)

```text
Act as a staff release engineer. Write a security smoke-test list (defensive) for a CLI. The intended result is a bug list with repro. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `testing-qa-089` — design a regression set for a refactor

```text
Act as a senior accessibility auditor. Design a regression set for a refactor for a mobile web view. The intended result is a QA report with evidence. Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a failure message. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `testing-qa-090` — design a chaos-drill with abort criteria

```text
Act as an expert performance tester. Design a chaos-drill with abort criteria for an API. The intended result is targeted tests plus rationale. Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per run. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
