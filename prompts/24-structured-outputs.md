# 🧩 Structured Outputs & Schemas - 120 copyable GPT-6 Astra prompts

> Schemas for structure; prompts for semantics. No temperature/top_p with Astra tool-calling.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](23-long-context.md) · [Next](25-reasoning-effort.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>structured-outputs-001</code> - define a ticket-triage schema with enums and confidence (click to expand)</summary>

```text
Act as a senior API designer.
Define a ticket-triage schema with enums and confidence for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>structured-outputs-002</code> - build a resume-parse schema with evidence spans (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a resume-parse schema with evidence spans for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>structured-outputs-003</code> - create a eval-row schema for prompt testing (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a eval-row schema for prompt testing for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-004</code> - design an event-log schema with dedupe keys (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design an event-log schema with dedupe keys for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>structured-outputs-005</code> - build a translation-memory schema (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a translation-memory schema for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-006</code> - create a catalog-item schema with variants (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a catalog-item schema with variants for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-007</code> - design a deployment-manifest schema (click to expand)</summary>

```text
Act as a senior API designer.
Design a deployment-manifest schema for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>structured-outputs-008</code> - build a QA-report schema with severity enums (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a QA-report schema with severity enums for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-009</code> - create a survey-response schema with scales (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a survey-response schema with scales for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Use tools where they help; state what evidence you checked before acting.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>structured-outputs-010</code> - design a meeting-notes schema with owners/dates (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a meeting-notes schema with owners/dates for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-011</code> - build a bug-report schema with repro steps (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a bug-report schema with repro steps for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-012</code> - create an invoice-line schema with totals validation (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create an invoice-line schema with totals validation for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-013</code> - design a course-outline schema with outcomes (click to expand)</summary>

```text
Act as a senior API designer.
Design a course-outline schema with outcomes for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>structured-outputs-014</code> - build a product-review extraction schema (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a product-review extraction schema for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>structured-outputs-015</code> - create a recipe schema with units and steps (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a recipe schema with units and steps for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-016</code> - define a ticket-triage schema with enums and confidence (click to expand)</summary>

```text
Act as a prompt-interface designer.
Define a ticket-triage schema with enums and confidence for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>structured-outputs-017</code> - build a resume-parse schema with evidence spans (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a resume-parse schema with evidence spans for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-018</code> - create a eval-row schema for prompt testing (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a eval-row schema for prompt testing for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-019</code> - design an event-log schema with dedupe keys (click to expand)</summary>

```text
Act as a senior API designer.
Design an event-log schema with dedupe keys for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>structured-outputs-020</code> - build a translation-memory schema (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a translation-memory schema for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-021</code> - create a catalog-item schema with variants (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a catalog-item schema with variants for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Use tools where they help; state what evidence you checked before acting.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>structured-outputs-022</code> - design a deployment-manifest schema (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a deployment-manifest schema for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Parallelize with subagents where independent work exists; merge with a single coherent voice.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>structured-outputs-023</code> - build a QA-report schema with severity enums (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a QA-report schema with severity enums for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Work persistently until the goal is complete.
Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing,
deleting, or permission-changing step.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-024</code> - create a survey-response schema with scales (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a survey-response schema with scales for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-025</code> - design a meeting-notes schema with owners/dates (click to expand)</summary>

```text
Act as a senior API designer.
Design a meeting-notes schema with owners/dates for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>structured-outputs-026</code> - build a bug-report schema with repro steps (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a bug-report schema with repro steps for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the
brief.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>structured-outputs-027</code> - create an invoice-line schema with totals validation (click to expand)</summary>

```text
Act as a senior integration engineer.
Create an invoice-line schema with totals validation for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Use tools where they help; state what evidence you checked before acting.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: keep checks proportional to risk.
For small reversible changes, run only targeted checks; for risky changes, run the full relevant
suite.
```
</details>

<details>
<summary><code>structured-outputs-028</code> - design a course-outline schema with outcomes (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a course-outline schema with outcomes for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-029</code> - build a product-review extraction schema (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a product-review extraction schema for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-030</code> - create a recipe schema with units and steps (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a recipe schema with units and steps for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>structured-outputs-031</code> - define a ticket-triage schema with enums and confidence (click to expand)</summary>

```text
Act as a senior API designer.
Define a ticket-triage schema with enums and confidence for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 31.
```
</details>

<details>
<summary><code>structured-outputs-032</code> - build a resume-parse schema with evidence spans (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a resume-parse schema with evidence spans for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-033</code> - create a eval-row schema for prompt testing (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a eval-row schema for prompt testing for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-034</code> - design an event-log schema with dedupe keys (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design an event-log schema with dedupe keys for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-035</code> - build a translation-memory schema (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a translation-memory schema for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-036</code> - create a catalog-item schema with variants (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a catalog-item schema with variants for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 36.
```
</details>

<details>
<summary><code>structured-outputs-037</code> - design a deployment-manifest schema (click to expand)</summary>

```text
Act as a senior API designer.
Design a deployment-manifest schema for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 37.
```
</details>

<details>
<summary><code>structured-outputs-038</code> - build a QA-report schema with severity enums (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a QA-report schema with severity enums for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-039</code> - create a survey-response schema with scales (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a survey-response schema with scales for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-040</code> - design a meeting-notes schema with owners/dates (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a meeting-notes schema with owners/dates for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-041</code> - build a bug-report schema with repro steps (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a bug-report schema with repro steps for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 41.
```
</details>

<details>
<summary><code>structured-outputs-042</code> - create an invoice-line schema with totals validation (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create an invoice-line schema with totals validation for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 42.
```
</details>

<details>
<summary><code>structured-outputs-043</code> - design a course-outline schema with outcomes (click to expand)</summary>

```text
Act as a senior API designer.
Design a course-outline schema with outcomes for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-044</code> - build a product-review extraction schema (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a product-review extraction schema for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-045</code> - create a recipe schema with units and steps (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a recipe schema with units and steps for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-046</code> - define a ticket-triage schema with enums and confidence (click to expand)</summary>

```text
Act as a prompt-interface designer.
Define a ticket-triage schema with enums and confidence for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-047</code> - build a resume-parse schema with evidence spans (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a resume-parse schema with evidence spans for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 47.
```
</details>

<details>
<summary><code>structured-outputs-048</code> - create a eval-row schema for prompt testing (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a eval-row schema for prompt testing for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-049</code> - design an event-log schema with dedupe keys (click to expand)</summary>

```text
Act as a senior API designer.
Design an event-log schema with dedupe keys for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 49.
```
</details>

<details>
<summary><code>structured-outputs-050</code> - build a translation-memory schema (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a translation-memory schema for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-051</code> - create a catalog-item schema with variants (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a catalog-item schema with variants for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-052</code> - design a deployment-manifest schema (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a deployment-manifest schema for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-053</code> - build a QA-report schema with severity enums (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a QA-report schema with severity enums for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-054</code> - create a survey-response schema with scales (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a survey-response schema with scales for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 54.
```
</details>

<details>
<summary><code>structured-outputs-055</code> - design a meeting-notes schema with owners/dates (click to expand)</summary>

```text
Act as a senior API designer.
Design a meeting-notes schema with owners/dates for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-056</code> - build a bug-report schema with repro steps (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a bug-report schema with repro steps for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-057</code> - create an invoice-line schema with totals validation (click to expand)</summary>

```text
Act as a senior integration engineer.
Create an invoice-line schema with totals validation for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-058</code> - design a course-outline schema with outcomes (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a course-outline schema with outcomes for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-059</code> - build a product-review extraction schema (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a product-review extraction schema for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 59.
```
</details>

<details>
<summary><code>structured-outputs-060</code> - create a recipe schema with units and steps (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a recipe schema with units and steps for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-061</code> - define a ticket-triage schema with enums and confidence (click to expand)</summary>

```text
Act as a senior API designer.
Define a ticket-triage schema with enums and confidence for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 61.
```
</details>

<details>
<summary><code>structured-outputs-062</code> - build a resume-parse schema with evidence spans (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a resume-parse schema with evidence spans for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-063</code> - create a eval-row schema for prompt testing (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a eval-row schema for prompt testing for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-064</code> - design an event-log schema with dedupe keys (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design an event-log schema with dedupe keys for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-065</code> - build a translation-memory schema (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a translation-memory schema for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-066</code> - create a catalog-item schema with variants (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a catalog-item schema with variants for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 66.
```
</details>

<details>
<summary><code>structured-outputs-067</code> - design a deployment-manifest schema (click to expand)</summary>

```text
Act as a senior API designer.
Design a deployment-manifest schema for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 67.
```
</details>

<details>
<summary><code>structured-outputs-068</code> - build a QA-report schema with severity enums (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a QA-report schema with severity enums for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-069</code> - create a survey-response schema with scales (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a survey-response schema with scales for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-070</code> - design a meeting-notes schema with owners/dates (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a meeting-notes schema with owners/dates for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-071</code> - build a bug-report schema with repro steps (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a bug-report schema with repro steps for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 71.
```
</details>

<details>
<summary><code>structured-outputs-072</code> - create an invoice-line schema with totals validation (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create an invoice-line schema with totals validation for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 72.
```
</details>

<details>
<summary><code>structured-outputs-073</code> - design a course-outline schema with outcomes (click to expand)</summary>

```text
Act as a senior API designer.
Design a course-outline schema with outcomes for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-074</code> - build a product-review extraction schema (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a product-review extraction schema for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-075</code> - create a recipe schema with units and steps (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a recipe schema with units and steps for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-076</code> - define a ticket-triage schema with enums and confidence (click to expand)</summary>

```text
Act as a prompt-interface designer.
Define a ticket-triage schema with enums and confidence for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-077</code> - build a resume-parse schema with evidence spans (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a resume-parse schema with evidence spans for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 77.
```
</details>

<details>
<summary><code>structured-outputs-078</code> - create a eval-row schema for prompt testing (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a eval-row schema for prompt testing for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-079</code> - design an event-log schema with dedupe keys (click to expand)</summary>

```text
Act as a senior API designer.
Design an event-log schema with dedupe keys for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 79.
```
</details>

<details>
<summary><code>structured-outputs-080</code> - build a translation-memory schema (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a translation-memory schema for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-081</code> - create a catalog-item schema with variants (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a catalog-item schema with variants for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-082</code> - design a deployment-manifest schema (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a deployment-manifest schema for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-083</code> - build a QA-report schema with severity enums (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a QA-report schema with severity enums for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-084</code> - create a survey-response schema with scales (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a survey-response schema with scales for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 84.
```
</details>

<details>
<summary><code>structured-outputs-085</code> - design a meeting-notes schema with owners/dates (click to expand)</summary>

```text
Act as a senior API designer.
Design a meeting-notes schema with owners/dates for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-086</code> - build a bug-report schema with repro steps (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a bug-report schema with repro steps for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-087</code> - create an invoice-line schema with totals validation (click to expand)</summary>

```text
Act as a senior integration engineer.
Create an invoice-line schema with totals validation for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-088</code> - design a course-outline schema with outcomes (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a course-outline schema with outcomes for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-089</code> - build a product-review extraction schema (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a product-review extraction schema for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 89.
```
</details>

<details>
<summary><code>structured-outputs-090</code> - create a recipe schema with units and steps (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a recipe schema with units and steps for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-091</code> - define a ticket-triage schema with enums and confidence (click to expand)</summary>

```text
Act as a senior API designer.
Define a ticket-triage schema with enums and confidence for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 91.
```
</details>

<details>
<summary><code>structured-outputs-092</code> - build a resume-parse schema with evidence spans (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a resume-parse schema with evidence spans for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-093</code> - create a eval-row schema for prompt testing (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a eval-row schema for prompt testing for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-094</code> - design an event-log schema with dedupe keys (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design an event-log schema with dedupe keys for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-095</code> - build a translation-memory schema (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a translation-memory schema for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-096</code> - create a catalog-item schema with variants (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a catalog-item schema with variants for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 96.
```
</details>

<details>
<summary><code>structured-outputs-097</code> - design a deployment-manifest schema (click to expand)</summary>

```text
Act as a senior API designer.
Design a deployment-manifest schema for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 97.
```
</details>

<details>
<summary><code>structured-outputs-098</code> - build a QA-report schema with severity enums (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a QA-report schema with severity enums for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-099</code> - create a survey-response schema with scales (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a survey-response schema with scales for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-100</code> - design a meeting-notes schema with owners/dates (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a meeting-notes schema with owners/dates for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-101</code> - build a bug-report schema with repro steps (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a bug-report schema with repro steps for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 101.
```
</details>

<details>
<summary><code>structured-outputs-102</code> - create an invoice-line schema with totals validation (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create an invoice-line schema with totals validation for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 102.
```
</details>

<details>
<summary><code>structured-outputs-103</code> - design a course-outline schema with outcomes (click to expand)</summary>

```text
Act as a senior API designer.
Design a course-outline schema with outcomes for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-104</code> - build a product-review extraction schema (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a product-review extraction schema for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-105</code> - create a recipe schema with units and steps (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a recipe schema with units and steps for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-106</code> - define a ticket-triage schema with enums and confidence (click to expand)</summary>

```text
Act as a prompt-interface designer.
Define a ticket-triage schema with enums and confidence for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-107</code> - build a resume-parse schema with evidence spans (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a resume-parse schema with evidence spans for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 107.
```
</details>

<details>
<summary><code>structured-outputs-108</code> - create a eval-row schema for prompt testing (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a eval-row schema for prompt testing for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-109</code> - design an event-log schema with dedupe keys (click to expand)</summary>

```text
Act as a senior API designer.
Design an event-log schema with dedupe keys for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
Variant focus 109.
```
</details>

<details>
<summary><code>structured-outputs-110</code> - build a translation-memory schema (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a translation-memory schema for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-111</code> - create a catalog-item schema with variants (click to expand)</summary>

```text
Act as a senior integration engineer.
Create a catalog-item schema with variants for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-112</code> - design a deployment-manifest schema (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a deployment-manifest schema for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-113</code> - build a QA-report schema with severity enums (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a QA-report schema with severity enums for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-114</code> - create a survey-response schema with scales (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a survey-response schema with scales for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 114.
```
</details>

<details>
<summary><code>structured-outputs-115</code> - design a meeting-notes schema with owners/dates (click to expand)</summary>

```text
Act as a senior API designer.
Design a meeting-notes schema with owners/dates for the Responses API.
The intended result is a JSON schema plus field guide.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-116</code> - build a bug-report schema with repro steps (click to expand)</summary>

```text
Act as an expert data-modeler.
Build a bug-report schema with repro steps for an internal tool.
The intended result is a test matrix.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-117</code> - create an invoice-line schema with totals validation (click to expand)</summary>

```text
Act as a senior integration engineer.
Create an invoice-line schema with totals validation for a partner API.
The intended result is a prompt snippet for semantic rules.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
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
<summary><code>structured-outputs-118</code> - design a course-outline schema with outcomes (click to expand)</summary>

```text
Act as a prompt-interface designer.
Design a course-outline schema with outcomes for a mobile client.
The intended result is a migration note.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
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
<summary><code>structured-outputs-119</code> - build a product-review extraction schema (click to expand)</summary>

```text
Act as a senior tooling engineer.
Build a product-review extraction schema for a data warehouse.
The intended result is a validation checklist.
Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include
'unknown' with reason field.
Keep a searchable working note so the task survives context compaction.
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 119.
```
</details>

<details>
<summary><code>structured-outputs-120</code> - create a recipe schema with units and steps (click to expand)</summary>

```text
Act as an expert JSON-schema author.
Create a recipe schema with units and steps for a webhook consumer.
The intended result is three valid examples plus one invalid with reason.
Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits.
Compare against the provided reference and fix the largest gaps first.
Stay within the authorized scope described here.
If project files conflict with these instructions, these instructions take precedence; quote the
conflicting file if you must pause.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
Variant focus 120.
```
</details>
