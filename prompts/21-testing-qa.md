# 🧪 Testing, QA & Verification - 120 copyable GPT-6 Astra prompts

> Calibrate Astra's thoroughness: targeted checks for small diffs, full suites for risky ones.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](20-devops-terminal.md) · [Next](22-multi-agent.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>testing-qa-001</code> - write targeted tests for a one-line fix without over-testing (click to expand)</summary>

```text
Act as a senior QA engineer.
Write targeted tests for a one-line fix without over-testing for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>testing-qa-002</code> - create a data-migration verification plan (click to expand)</summary>

```text
Act as an expert test automation lead.
Create a data-migration verification plan for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-003</code> - build a test-data factory plan (click to expand)</summary>

```text
Act as a senior SDET.
Build a test-data factory plan for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-004</code> - build a mobile-layout QA checklist (click to expand)</summary>

```text
Act as a staff release engineer.
Build a mobile-layout QA checklist for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-005</code> - write a bug report that gets fixed fast (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Write a bug report that gets fixed fast for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-006</code> - write accessibility checks for a form (click to expand)</summary>

```text
Act as an expert performance tester.
Write accessibility checks for a form for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>testing-qa-007</code> - design a release gate with quality bars (click to expand)</summary>

```text
Act as a senior QA engineer.
Design a release gate with quality bars for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>testing-qa-008</code> - design a load-test plan with thresholds (click to expand)</summary>

```text
Act as an expert test automation lead.
Design a load-test plan with thresholds for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-009</code> - create a flaky-test triage workflow (click to expand)</summary>

```text
Act as a senior SDET.
Create a flaky-test triage workflow for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-010</code> - create API contract tests with edge cases (click to expand)</summary>

```text
Act as a staff release engineer.
Create API contract tests with edge cases for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-011</code> - build a visual-regression checklist vs reference (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Build a visual-regression checklist vs reference for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>testing-qa-012</code> - build a browser test plan for a booking flow (click to expand)</summary>

```text
Act as an expert performance tester.
Build a browser test plan for a booking flow for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>testing-qa-013</code> - write a security smoke-test list (defensive) (click to expand)</summary>

```text
Act as a senior QA engineer.
Write a security smoke-test list (defensive) for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-014</code> - design a regression set for a refactor (click to expand)</summary>

```text
Act as an expert test automation lead.
Design a regression set for a refactor for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-015</code> - design a chaos-drill with abort criteria (click to expand)</summary>

```text
Act as a senior SDET.
Design a chaos-drill with abort criteria for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-016</code> - write targeted tests for a one-line fix without over-testing (click to expand)</summary>

```text
Act as a staff release engineer.
Write targeted tests for a one-line fix without over-testing for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-017</code> - create a data-migration verification plan (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Create a data-migration verification plan for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>testing-qa-018</code> - build a test-data factory plan (click to expand)</summary>

```text
Act as an expert performance tester.
Build a test-data factory plan for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-019</code> - build a mobile-layout QA checklist (click to expand)</summary>

```text
Act as a senior QA engineer.
Build a mobile-layout QA checklist for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>testing-qa-020</code> - write a bug report that gets fixed fast (click to expand)</summary>

```text
Act as an expert test automation lead.
Write a bug report that gets fixed fast for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-021</code> - write accessibility checks for a form (click to expand)</summary>

```text
Act as a senior SDET.
Write accessibility checks for a form for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-022</code> - design a release gate with quality bars (click to expand)</summary>

```text
Act as a staff release engineer.
Design a release gate with quality bars for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-023</code> - design a load-test plan with thresholds (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Design a load-test plan with thresholds for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-024</code> - create a flaky-test triage workflow (click to expand)</summary>

```text
Act as an expert performance tester.
Create a flaky-test triage workflow for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>testing-qa-025</code> - create API contract tests with edge cases (click to expand)</summary>

```text
Act as a senior QA engineer.
Create API contract tests with edge cases for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-026</code> - build a visual-regression checklist vs reference (click to expand)</summary>

```text
Act as an expert test automation lead.
Build a visual-regression checklist vs reference for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-027</code> - build a browser test plan for a booking flow (click to expand)</summary>

```text
Act as a senior SDET.
Build a browser test plan for a booking flow for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-028</code> - write a security smoke-test list (defensive) (click to expand)</summary>

```text
Act as a staff release engineer.
Write a security smoke-test list (defensive) for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-029</code> - design a regression set for a refactor (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Design a regression set for a refactor for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>testing-qa-030</code> - design a chaos-drill with abort criteria (click to expand)</summary>

```text
Act as an expert performance tester.
Design a chaos-drill with abort criteria for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-031</code> - write targeted tests for a one-line fix without over-testing (click to expand)</summary>

```text
Act as a senior QA engineer.
Write targeted tests for a one-line fix without over-testing for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-032</code> - create a data-migration verification plan (click to expand)</summary>

```text
Act as an expert test automation lead.
Create a data-migration verification plan for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-033</code> - build a test-data factory plan (click to expand)</summary>

```text
Act as a senior SDET.
Build a test-data factory plan for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-034</code> - build a mobile-layout QA checklist (click to expand)</summary>

```text
Act as a staff release engineer.
Build a mobile-layout QA checklist for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-035</code> - write a bug report that gets fixed fast (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Write a bug report that gets fixed fast for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-036</code> - write accessibility checks for a form (click to expand)</summary>

```text
Act as an expert performance tester.
Write accessibility checks for a form for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-037</code> - design a release gate with quality bars (click to expand)</summary>

```text
Act as a senior QA engineer.
Design a release gate with quality bars for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-038</code> - design a load-test plan with thresholds (click to expand)</summary>

```text
Act as an expert test automation lead.
Design a load-test plan with thresholds for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-039</code> - create a flaky-test triage workflow (click to expand)</summary>

```text
Act as a senior SDET.
Create a flaky-test triage workflow for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-040</code> - create API contract tests with edge cases (click to expand)</summary>

```text
Act as a staff release engineer.
Create API contract tests with edge cases for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-041</code> - build a visual-regression checklist vs reference (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Build a visual-regression checklist vs reference for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-042</code> - build a browser test plan for a booking flow (click to expand)</summary>

```text
Act as an expert performance tester.
Build a browser test plan for a booking flow for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-043</code> - write a security smoke-test list (defensive) (click to expand)</summary>

```text
Act as a senior QA engineer.
Write a security smoke-test list (defensive) for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-044</code> - design a regression set for a refactor (click to expand)</summary>

```text
Act as an expert test automation lead.
Design a regression set for a refactor for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-045</code> - design a chaos-drill with abort criteria (click to expand)</summary>

```text
Act as a senior SDET.
Design a chaos-drill with abort criteria for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-046</code> - write targeted tests for a one-line fix without over-testing (click to expand)</summary>

```text
Act as a staff release engineer.
Write targeted tests for a one-line fix without over-testing for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-047</code> - create a data-migration verification plan (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Create a data-migration verification plan for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-048</code> - build a test-data factory plan (click to expand)</summary>

```text
Act as an expert performance tester.
Build a test-data factory plan for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-049</code> - build a mobile-layout QA checklist (click to expand)</summary>

```text
Act as a senior QA engineer.
Build a mobile-layout QA checklist for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-050</code> - write a bug report that gets fixed fast (click to expand)</summary>

```text
Act as an expert test automation lead.
Write a bug report that gets fixed fast for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-051</code> - write accessibility checks for a form (click to expand)</summary>

```text
Act as a senior SDET.
Write accessibility checks for a form for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-052</code> - design a release gate with quality bars (click to expand)</summary>

```text
Act as a staff release engineer.
Design a release gate with quality bars for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-053</code> - design a load-test plan with thresholds (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Design a load-test plan with thresholds for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-054</code> - create a flaky-test triage workflow (click to expand)</summary>

```text
Act as an expert performance tester.
Create a flaky-test triage workflow for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-055</code> - create API contract tests with edge cases (click to expand)</summary>

```text
Act as a senior QA engineer.
Create API contract tests with edge cases for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-056</code> - build a visual-regression checklist vs reference (click to expand)</summary>

```text
Act as an expert test automation lead.
Build a visual-regression checklist vs reference for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-057</code> - build a browser test plan for a booking flow (click to expand)</summary>

```text
Act as a senior SDET.
Build a browser test plan for a booking flow for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-058</code> - write a security smoke-test list (defensive) (click to expand)</summary>

```text
Act as a staff release engineer.
Write a security smoke-test list (defensive) for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-059</code> - design a regression set for a refactor (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Design a regression set for a refactor for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-060</code> - design a chaos-drill with abort criteria (click to expand)</summary>

```text
Act as an expert performance tester.
Design a chaos-drill with abort criteria for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-061</code> - write targeted tests for a one-line fix without over-testing (click to expand)</summary>

```text
Act as a senior QA engineer.
Write targeted tests for a one-line fix without over-testing for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-062</code> - create a data-migration verification plan (click to expand)</summary>

```text
Act as an expert test automation lead.
Create a data-migration verification plan for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-063</code> - build a test-data factory plan (click to expand)</summary>

```text
Act as a senior SDET.
Build a test-data factory plan for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-064</code> - build a mobile-layout QA checklist (click to expand)</summary>

```text
Act as a staff release engineer.
Build a mobile-layout QA checklist for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-065</code> - write a bug report that gets fixed fast (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Write a bug report that gets fixed fast for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-066</code> - write accessibility checks for a form (click to expand)</summary>

```text
Act as an expert performance tester.
Write accessibility checks for a form for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-067</code> - design a release gate with quality bars (click to expand)</summary>

```text
Act as a senior QA engineer.
Design a release gate with quality bars for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-068</code> - design a load-test plan with thresholds (click to expand)</summary>

```text
Act as an expert test automation lead.
Design a load-test plan with thresholds for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-069</code> - create a flaky-test triage workflow (click to expand)</summary>

```text
Act as a senior SDET.
Create a flaky-test triage workflow for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-070</code> - create API contract tests with edge cases (click to expand)</summary>

```text
Act as a staff release engineer.
Create API contract tests with edge cases for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-071</code> - build a visual-regression checklist vs reference (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Build a visual-regression checklist vs reference for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-072</code> - build a browser test plan for a booking flow (click to expand)</summary>

```text
Act as an expert performance tester.
Build a browser test plan for a booking flow for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-073</code> - write a security smoke-test list (defensive) (click to expand)</summary>

```text
Act as a senior QA engineer.
Write a security smoke-test list (defensive) for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-074</code> - design a regression set for a refactor (click to expand)</summary>

```text
Act as an expert test automation lead.
Design a regression set for a refactor for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-075</code> - design a chaos-drill with abort criteria (click to expand)</summary>

```text
Act as a senior SDET.
Design a chaos-drill with abort criteria for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-076</code> - write targeted tests for a one-line fix without over-testing (click to expand)</summary>

```text
Act as a staff release engineer.
Write targeted tests for a one-line fix without over-testing for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-077</code> - create a data-migration verification plan (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Create a data-migration verification plan for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-078</code> - build a test-data factory plan (click to expand)</summary>

```text
Act as an expert performance tester.
Build a test-data factory plan for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-079</code> - build a mobile-layout QA checklist (click to expand)</summary>

```text
Act as a senior QA engineer.
Build a mobile-layout QA checklist for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-080</code> - write a bug report that gets fixed fast (click to expand)</summary>

```text
Act as an expert test automation lead.
Write a bug report that gets fixed fast for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-081</code> - write accessibility checks for a form (click to expand)</summary>

```text
Act as a senior SDET.
Write accessibility checks for a form for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-082</code> - design a release gate with quality bars (click to expand)</summary>

```text
Act as a staff release engineer.
Design a release gate with quality bars for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-083</code> - design a load-test plan with thresholds (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Design a load-test plan with thresholds for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-084</code> - create a flaky-test triage workflow (click to expand)</summary>

```text
Act as an expert performance tester.
Create a flaky-test triage workflow for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-085</code> - create API contract tests with edge cases (click to expand)</summary>

```text
Act as a senior QA engineer.
Create API contract tests with edge cases for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-086</code> - build a visual-regression checklist vs reference (click to expand)</summary>

```text
Act as an expert test automation lead.
Build a visual-regression checklist vs reference for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-087</code> - build a browser test plan for a booking flow (click to expand)</summary>

```text
Act as a senior SDET.
Build a browser test plan for a booking flow for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-088</code> - write a security smoke-test list (defensive) (click to expand)</summary>

```text
Act as a staff release engineer.
Write a security smoke-test list (defensive) for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-089</code> - design a regression set for a refactor (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Design a regression set for a refactor for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-090</code> - design a chaos-drill with abort criteria (click to expand)</summary>

```text
Act as an expert performance tester.
Design a chaos-drill with abort criteria for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-091</code> - write targeted tests for a one-line fix without over-testing (click to expand)</summary>

```text
Act as a senior QA engineer.
Write targeted tests for a one-line fix without over-testing for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-092</code> - create a data-migration verification plan (click to expand)</summary>

```text
Act as an expert test automation lead.
Create a data-migration verification plan for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-093</code> - build a test-data factory plan (click to expand)</summary>

```text
Act as a senior SDET.
Build a test-data factory plan for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-094</code> - build a mobile-layout QA checklist (click to expand)</summary>

```text
Act as a staff release engineer.
Build a mobile-layout QA checklist for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-095</code> - write a bug report that gets fixed fast (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Write a bug report that gets fixed fast for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-096</code> - write accessibility checks for a form (click to expand)</summary>

```text
Act as an expert performance tester.
Write accessibility checks for a form for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-097</code> - design a release gate with quality bars (click to expand)</summary>

```text
Act as a senior QA engineer.
Design a release gate with quality bars for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-098</code> - design a load-test plan with thresholds (click to expand)</summary>

```text
Act as an expert test automation lead.
Design a load-test plan with thresholds for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-099</code> - create a flaky-test triage workflow (click to expand)</summary>

```text
Act as a senior SDET.
Create a flaky-test triage workflow for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-100</code> - create API contract tests with edge cases (click to expand)</summary>

```text
Act as a staff release engineer.
Create API contract tests with edge cases for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-101</code> - build a visual-regression checklist vs reference (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Build a visual-regression checklist vs reference for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-102</code> - build a browser test plan for a booking flow (click to expand)</summary>

```text
Act as an expert performance tester.
Build a browser test plan for a booking flow for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-103</code> - write a security smoke-test list (defensive) (click to expand)</summary>

```text
Act as a senior QA engineer.
Write a security smoke-test list (defensive) for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-104</code> - design a regression set for a refactor (click to expand)</summary>

```text
Act as an expert test automation lead.
Design a regression set for a refactor for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-105</code> - design a chaos-drill with abort criteria (click to expand)</summary>

```text
Act as a senior SDET.
Design a chaos-drill with abort criteria for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-106</code> - write targeted tests for a one-line fix without over-testing (click to expand)</summary>

```text
Act as a staff release engineer.
Write targeted tests for a one-line fix without over-testing for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-107</code> - create a data-migration verification plan (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Create a data-migration verification plan for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-108</code> - build a test-data factory plan (click to expand)</summary>

```text
Act as an expert performance tester.
Build a test-data factory plan for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-109</code> - build a mobile-layout QA checklist (click to expand)</summary>

```text
Act as a senior QA engineer.
Build a mobile-layout QA checklist for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-110</code> - write a bug report that gets fixed fast (click to expand)</summary>

```text
Act as an expert test automation lead.
Write a bug report that gets fixed fast for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-111</code> - write accessibility checks for a form (click to expand)</summary>

```text
Act as a senior SDET.
Write accessibility checks for a form for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-112</code> - design a release gate with quality bars (click to expand)</summary>

```text
Act as a staff release engineer.
Design a release gate with quality bars for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-113</code> - design a load-test plan with thresholds (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Design a load-test plan with thresholds for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-114</code> - create a flaky-test triage workflow (click to expand)</summary>

```text
Act as an expert performance tester.
Create a flaky-test triage workflow for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-115</code> - create API contract tests with edge cases (click to expand)</summary>

```text
Act as a senior QA engineer.
Create API contract tests with edge cases for a web app.
The intended result is a test plan with cases.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-116</code> - build a visual-regression checklist vs reference (click to expand)</summary>

```text
Act as an expert test automation lead.
Build a visual-regression checklist vs reference for a game build.
The intended result is a flake backlog.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-117</code> - build a browser test plan for a booking flow (click to expand)</summary>

```text
Act as a senior SDET.
Build a browser test plan for a booking flow for a data pipeline.
The intended result is a gate checklist.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-118</code> - write a security smoke-test list (defensive) (click to expand)</summary>

```text
Act as a staff release engineer.
Write a security smoke-test list (defensive) for a CLI.
The intended result is a bug list with repro.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
<summary><code>testing-qa-119</code> - design a regression set for a refactor (click to expand)</summary>

```text
Act as a senior accessibility auditor.
Design a regression set for a refactor for a mobile web view.
The intended result is a QA report with evidence.
Requirements: scale testing to risk; justify full-suite runs; each test needs an oracle and a
failure message.
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
<summary><code>testing-qa-120</code> - design a chaos-drill with abort criteria (click to expand)</summary>

```text
Act as an expert performance tester.
Design a chaos-drill with abort criteria for an API.
The intended result is targeted tests plus rationale.
Requirements: cover happy, empty, invalid, and slow paths; record environment, seed, and version per
run.
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
