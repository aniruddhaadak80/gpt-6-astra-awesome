# 🧩 Structured Outputs & Schemas — 90 copyable GPT-6 Astra prompts

> Schemas for structure; prompts for semantics. No temperature/top_p with Astra tool-calling.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](23-long-context.md) · [Next ▶](25-reasoning-effort.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `structured-outputs-001` — define a ticket-triage schema with enums and confidence

```text
Act as a senior API designer. Define a ticket-triage schema with enums and confidence for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-002` — build a resume-parse schema with evidence spans

```text
Act as an expert data-modeler. Build a resume-parse schema with evidence spans for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-003` — create a eval-row schema for prompt testing

```text
Act as a senior integration engineer. Create a eval-row schema for prompt testing for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-004` — design an event-log schema with dedupe keys

```text
Act as a prompt-interface designer. Design an event-log schema with dedupe keys for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-005` — build a translation-memory schema

```text
Act as a senior tooling engineer. Build a translation-memory schema for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-006` — create a catalog-item schema with variants

```text
Act as an expert JSON-schema author. Create a catalog-item schema with variants for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-007` — design a deployment-manifest schema

```text
Act as a senior API designer. Design a deployment-manifest schema for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-008` — build a QA-report schema with severity enums

```text
Act as an expert data-modeler. Build a QA-report schema with severity enums for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-009` — create a survey-response schema with scales

```text
Act as a senior integration engineer. Create a survey-response schema with scales for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-010` — design a meeting-notes schema with owners/dates

```text
Act as a prompt-interface designer. Design a meeting-notes schema with owners/dates for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-011` — build a bug-report schema with repro steps

```text
Act as a senior tooling engineer. Build a bug-report schema with repro steps for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-012` — create an invoice-line schema with totals validation

```text
Act as an expert JSON-schema author. Create an invoice-line schema with totals validation for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-013` — design a course-outline schema with outcomes

```text
Act as a senior API designer. Design a course-outline schema with outcomes for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-014` — build a product-review extraction schema

```text
Act as an expert data-modeler. Build a product-review extraction schema for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-015` — create a recipe schema with units and steps

```text
Act as a senior integration engineer. Create a recipe schema with units and steps for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-016` — define a ticket-triage schema with enums and confidence

```text
Act as a prompt-interface designer. Define a ticket-triage schema with enums and confidence for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-017` — build a resume-parse schema with evidence spans

```text
Act as a senior tooling engineer. Build a resume-parse schema with evidence spans for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-018` — create a eval-row schema for prompt testing

```text
Act as an expert JSON-schema author. Create a eval-row schema for prompt testing for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-019` — design an event-log schema with dedupe keys

```text
Act as a senior API designer. Design an event-log schema with dedupe keys for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-020` — build a translation-memory schema

```text
Act as an expert data-modeler. Build a translation-memory schema for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-021` — create a catalog-item schema with variants

```text
Act as a senior integration engineer. Create a catalog-item schema with variants for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-022` — design a deployment-manifest schema

```text
Act as a prompt-interface designer. Design a deployment-manifest schema for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-023` — build a QA-report schema with severity enums

```text
Act as a senior tooling engineer. Build a QA-report schema with severity enums for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-024` — create a survey-response schema with scales

```text
Act as an expert JSON-schema author. Create a survey-response schema with scales for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-025` — design a meeting-notes schema with owners/dates

```text
Act as a senior API designer. Design a meeting-notes schema with owners/dates for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-026` — build a bug-report schema with repro steps

```text
Act as an expert data-modeler. Build a bug-report schema with repro steps for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `structured-outputs-027` — create an invoice-line schema with totals validation

```text
Act as a senior integration engineer. Create an invoice-line schema with totals validation for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-028` — design a course-outline schema with outcomes

```text
Act as a prompt-interface designer. Design a course-outline schema with outcomes for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `structured-outputs-029` — build a product-review extraction schema

```text
Act as a senior tooling engineer. Build a product-review extraction schema for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-030` — create a recipe schema with units and steps

```text
Act as an expert JSON-schema author. Create a recipe schema with units and steps for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `structured-outputs-031` — define a ticket-triage schema with enums and confidence

```text
Act as a senior API designer. Define a ticket-triage schema with enums and confidence for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `structured-outputs-032` — build a resume-parse schema with evidence spans

```text
Act as an expert data-modeler. Build a resume-parse schema with evidence spans for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `structured-outputs-033` — create a eval-row schema for prompt testing

```text
Act as a senior integration engineer. Create a eval-row schema for prompt testing for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `structured-outputs-034` — design an event-log schema with dedupe keys

```text
Act as a prompt-interface designer. Design an event-log schema with dedupe keys for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `structured-outputs-035` — build a translation-memory schema

```text
Act as a senior tooling engineer. Build a translation-memory schema for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `structured-outputs-036` — create a catalog-item schema with variants

```text
Act as an expert JSON-schema author. Create a catalog-item schema with variants for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `structured-outputs-037` — design a deployment-manifest schema

```text
Act as a senior API designer. Design a deployment-manifest schema for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `structured-outputs-038` — build a QA-report schema with severity enums

```text
Act as an expert data-modeler. Build a QA-report schema with severity enums for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `structured-outputs-039` — create a survey-response schema with scales

```text
Act as a senior integration engineer. Create a survey-response schema with scales for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `structured-outputs-040` — design a meeting-notes schema with owners/dates

```text
Act as a prompt-interface designer. Design a meeting-notes schema with owners/dates for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `structured-outputs-041` — build a bug-report schema with repro steps

```text
Act as a senior tooling engineer. Build a bug-report schema with repro steps for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `structured-outputs-042` — create an invoice-line schema with totals validation

```text
Act as an expert JSON-schema author. Create an invoice-line schema with totals validation for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `structured-outputs-043` — design a course-outline schema with outcomes

```text
Act as a senior API designer. Design a course-outline schema with outcomes for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `structured-outputs-044` — build a product-review extraction schema

```text
Act as an expert data-modeler. Build a product-review extraction schema for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `structured-outputs-045` — create a recipe schema with units and steps

```text
Act as a senior integration engineer. Create a recipe schema with units and steps for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `structured-outputs-046` — define a ticket-triage schema with enums and confidence

```text
Act as a prompt-interface designer. Define a ticket-triage schema with enums and confidence for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `structured-outputs-047` — build a resume-parse schema with evidence spans

```text
Act as a senior tooling engineer. Build a resume-parse schema with evidence spans for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `structured-outputs-048` — create a eval-row schema for prompt testing

```text
Act as an expert JSON-schema author. Create a eval-row schema for prompt testing for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `structured-outputs-049` — design an event-log schema with dedupe keys

```text
Act as a senior API designer. Design an event-log schema with dedupe keys for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `structured-outputs-050` — build a translation-memory schema

```text
Act as an expert data-modeler. Build a translation-memory schema for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `structured-outputs-051` — create a catalog-item schema with variants

```text
Act as a senior integration engineer. Create a catalog-item schema with variants for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `structured-outputs-052` — design a deployment-manifest schema

```text
Act as a prompt-interface designer. Design a deployment-manifest schema for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `structured-outputs-053` — build a QA-report schema with severity enums

```text
Act as a senior tooling engineer. Build a QA-report schema with severity enums for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `structured-outputs-054` — create a survey-response schema with scales

```text
Act as an expert JSON-schema author. Create a survey-response schema with scales for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `structured-outputs-055` — design a meeting-notes schema with owners/dates

```text
Act as a senior API designer. Design a meeting-notes schema with owners/dates for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `structured-outputs-056` — build a bug-report schema with repro steps

```text
Act as an expert data-modeler. Build a bug-report schema with repro steps for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `structured-outputs-057` — create an invoice-line schema with totals validation

```text
Act as a senior integration engineer. Create an invoice-line schema with totals validation for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `structured-outputs-058` — design a course-outline schema with outcomes

```text
Act as a prompt-interface designer. Design a course-outline schema with outcomes for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `structured-outputs-059` — build a product-review extraction schema

```text
Act as a senior tooling engineer. Build a product-review extraction schema for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `structured-outputs-060` — create a recipe schema with units and steps

```text
Act as an expert JSON-schema author. Create a recipe schema with units and steps for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `structured-outputs-061` — define a ticket-triage schema with enums and confidence

```text
Act as a senior API designer. Define a ticket-triage schema with enums and confidence for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `structured-outputs-062` — build a resume-parse schema with evidence spans

```text
Act as an expert data-modeler. Build a resume-parse schema with evidence spans for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `structured-outputs-063` — create a eval-row schema for prompt testing

```text
Act as a senior integration engineer. Create a eval-row schema for prompt testing for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `structured-outputs-064` — design an event-log schema with dedupe keys

```text
Act as a prompt-interface designer. Design an event-log schema with dedupe keys for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `structured-outputs-065` — build a translation-memory schema

```text
Act as a senior tooling engineer. Build a translation-memory schema for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `structured-outputs-066` — create a catalog-item schema with variants

```text
Act as an expert JSON-schema author. Create a catalog-item schema with variants for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `structured-outputs-067` — design a deployment-manifest schema

```text
Act as a senior API designer. Design a deployment-manifest schema for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `structured-outputs-068` — build a QA-report schema with severity enums

```text
Act as an expert data-modeler. Build a QA-report schema with severity enums for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `structured-outputs-069` — create a survey-response schema with scales

```text
Act as a senior integration engineer. Create a survey-response schema with scales for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `structured-outputs-070` — design a meeting-notes schema with owners/dates

```text
Act as a prompt-interface designer. Design a meeting-notes schema with owners/dates for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `structured-outputs-071` — build a bug-report schema with repro steps

```text
Act as a senior tooling engineer. Build a bug-report schema with repro steps for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `structured-outputs-072` — create an invoice-line schema with totals validation

```text
Act as an expert JSON-schema author. Create an invoice-line schema with totals validation for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `structured-outputs-073` — design a course-outline schema with outcomes

```text
Act as a senior API designer. Design a course-outline schema with outcomes for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `structured-outputs-074` — build a product-review extraction schema

```text
Act as an expert data-modeler. Build a product-review extraction schema for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `structured-outputs-075` — create a recipe schema with units and steps

```text
Act as a senior integration engineer. Create a recipe schema with units and steps for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `structured-outputs-076` — define a ticket-triage schema with enums and confidence

```text
Act as a prompt-interface designer. Define a ticket-triage schema with enums and confidence for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `structured-outputs-077` — build a resume-parse schema with evidence spans

```text
Act as a senior tooling engineer. Build a resume-parse schema with evidence spans for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `structured-outputs-078` — create a eval-row schema for prompt testing

```text
Act as an expert JSON-schema author. Create a eval-row schema for prompt testing for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `structured-outputs-079` — design an event-log schema with dedupe keys

```text
Act as a senior API designer. Design an event-log schema with dedupe keys for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `structured-outputs-080` — build a translation-memory schema

```text
Act as an expert data-modeler. Build a translation-memory schema for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `structured-outputs-081` — create a catalog-item schema with variants

```text
Act as a senior integration engineer. Create a catalog-item schema with variants for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `structured-outputs-082` — design a deployment-manifest schema

```text
Act as a prompt-interface designer. Design a deployment-manifest schema for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `structured-outputs-083` — build a QA-report schema with severity enums

```text
Act as a senior tooling engineer. Build a QA-report schema with severity enums for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `structured-outputs-084` — create a survey-response schema with scales

```text
Act as an expert JSON-schema author. Create a survey-response schema with scales for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `structured-outputs-085` — design a meeting-notes schema with owners/dates

```text
Act as a senior API designer. Design a meeting-notes schema with owners/dates for the Responses API. The intended result is a JSON schema plus field guide. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `structured-outputs-086` — build a bug-report schema with repro steps

```text
Act as an expert data-modeler. Build a bug-report schema with repro steps for an internal tool. The intended result is a test matrix. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `structured-outputs-087` — create an invoice-line schema with totals validation

```text
Act as a senior integration engineer. Create an invoice-line schema with totals validation for a partner API. The intended result is a prompt snippet for semantic rules. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Use tools where they help; state what evidence you checked before acting. Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `structured-outputs-088` — design a course-outline schema with outcomes

```text
Act as a prompt-interface designer. Design a course-outline schema with outcomes for a mobile client. The intended result is a migration note. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Parallelize with subagents where independent work exists; merge with a single coherent voice. Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `structured-outputs-089` — build a product-review extraction schema

```text
Act as a senior tooling engineer. Build a product-review extraction schema for a data warehouse. The intended result is a validation checklist. Requirements: use schema enforcement for shape; prompt for judgment calls; enums closed; include 'unknown' with reason field. Keep a searchable working note so the task survives context compaction. Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `structured-outputs-090` — create a recipe schema with units and steps

```text
Act as an expert JSON-schema author. Create a recipe schema with units and steps for a webhook consumer. The intended result is three valid examples plus one invalid with reason. Requirements: validate totals, dates, and units explicitly; no free-text where an enum fits. Compare against the provided reference and fix the largest gaps first. Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
