# 💻 Agentic Coding - 90 copyable GPT-6 Astra prompts

> Long-horizon coding tasks, refactors, Codex/Copilot workflows with verification proportional to risk.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](28-productivity.md) · [Next](02-computer-use.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>agentic-coding-001</code> - build a REST endpoint with validation, error handling, and OpenAPI docs (click to expand)</summary>

```text
Act as a senior staff engineer.
Build a REST endpoint with validation, error handling, and OpenAPI docs for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>agentic-coding-002</code> - harden an auth flow against OWASP Top 10 issues and document the threat  (click to expand)</summary>

```text
Act as a principal software architect.
Harden an auth flow against OWASP Top 10 issues and document the threat model for an e-commerce
platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-003</code> - create a feature-flag system with targeting rules and audit log (click to expand)</summary>

```text
Act as a senior backend engineer.
Create a feature-flag system with targeting rules and audit log for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-004</code> - create a CLI tool with config files, help text, and shell completions (click to expand)</summary>

```text
Act as a staff full-stack developer.
Create a CLI tool with config files, help text, and shell completions for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-005</code> - build a file-upload pipeline with virus-scan hooks and size limits (click to expand)</summary>

```text
Act as a senior platform engineer.
Build a file-upload pipeline with virus-scan hooks and size limits for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-006</code> - optimize a slow database query path and prove the speedup with benchmark (click to expand)</summary>

```text
Act as an expert code reviewer.
Optimize a slow database query path and prove the speedup with benchmarks for an enterprise internal
tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>agentic-coding-007</code> - write a migration script with dry-run, rollback, and data validation (click to expand)</summary>

```text
Act as a senior staff engineer.
Write a migration script with dry-run, rollback, and data validation for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>agentic-coding-008</code> - add role-based access control to an existing API with tests (click to expand)</summary>

```text
Act as a principal software architect.
Add role-based access control to an existing API with tests for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-009</code> - add structured logging, tracing, and health checks to a service (click to expand)</summary>

```text
Act as a senior backend engineer.
Add structured logging, tracing, and health checks to a service for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-010</code> - implement a background job queue with retries, idempotency, and observab (click to expand)</summary>

```text
Act as a staff full-stack developer.
Implement a background job queue with retries, idempotency, and observability for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-011</code> - implement pagination, filtering, and sorting for a list API (click to expand)</summary>

```text
Act as a senior platform engineer.
Implement pagination, filtering, and sorting for a list API for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>agentic-coding-012</code> - migrate a callback-based flow to async/await with full type safety (click to expand)</summary>

```text
Act as an expert code reviewer.
Migrate a callback-based flow to async/await with full type safety for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>agentic-coding-013</code> - convert a monolith handler into testable services with dependency inject (click to expand)</summary>

```text
Act as a senior staff engineer.
Convert a monolith handler into testable services with dependency injection for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-014</code> - refactor a tangled module into clean layers without changing behavior (click to expand)</summary>

```text
Act as a principal software architect.
Refactor a tangled module into clean layers without changing behavior for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-015</code> - build a webhook receiver with signature verification and replay protecti (click to expand)</summary>

```text
Act as a senior backend engineer.
Build a webhook receiver with signature verification and replay protection for a healthcare data
service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-016</code> - build a REST endpoint with validation, error handling, and OpenAPI docs (click to expand)</summary>

```text
Act as a staff full-stack developer.
Build a REST endpoint with validation, error handling, and OpenAPI docs for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-017</code> - harden an auth flow against OWASP Top 10 issues and document the threat  (click to expand)</summary>

```text
Act as a senior platform engineer.
Harden an auth flow against OWASP Top 10 issues and document the threat model for an open-source
library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>agentic-coding-018</code> - create a feature-flag system with targeting rules and audit log (click to expand)</summary>

```text
Act as an expert code reviewer.
Create a feature-flag system with targeting rules and audit log for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-019</code> - create a CLI tool with config files, help text, and shell completions (click to expand)</summary>

```text
Act as a senior staff engineer.
Create a CLI tool with config files, help text, and shell completions for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>agentic-coding-020</code> - build a file-upload pipeline with virus-scan hooks and size limits (click to expand)</summary>

```text
Act as a principal software architect.
Build a file-upload pipeline with virus-scan hooks and size limits for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-021</code> - optimize a slow database query path and prove the speedup with benchmark (click to expand)</summary>

```text
Act as a senior backend engineer.
Optimize a slow database query path and prove the speedup with benchmarks for a healthcare data
service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-022</code> - write a migration script with dry-run, rollback, and data validation (click to expand)</summary>

```text
Act as a staff full-stack developer.
Write a migration script with dry-run, rollback, and data validation for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-023</code> - add role-based access control to an existing API with tests (click to expand)</summary>

```text
Act as a senior platform engineer.
Add role-based access control to an existing API with tests for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-024</code> - add structured logging, tracing, and health checks to a service (click to expand)</summary>

```text
Act as an expert code reviewer.
Add structured logging, tracing, and health checks to a service for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>agentic-coding-025</code> - implement a background job queue with retries, idempotency, and observab (click to expand)</summary>

```text
Act as a senior staff engineer.
Implement a background job queue with retries, idempotency, and observability for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-026</code> - implement pagination, filtering, and sorting for a list API (click to expand)</summary>

```text
Act as a principal software architect.
Implement pagination, filtering, and sorting for a list API for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-027</code> - migrate a callback-based flow to async/await with full type safety (click to expand)</summary>

```text
Act as a senior backend engineer.
Migrate a callback-based flow to async/await with full type safety for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-028</code> - convert a monolith handler into testable services with dependency inject (click to expand)</summary>

```text
Act as a staff full-stack developer.
Convert a monolith handler into testable services with dependency injection for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-029</code> - refactor a tangled module into clean layers without changing behavior (click to expand)</summary>

```text
Act as a senior platform engineer.
Refactor a tangled module into clean layers without changing behavior for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>agentic-coding-030</code> - build a webhook receiver with signature verification and replay protecti (click to expand)</summary>

```text
Act as an expert code reviewer.
Build a webhook receiver with signature verification and replay protection for an enterprise
internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-031</code> - build a REST endpoint with validation, error handling, and OpenAPI docs (click to expand)</summary>

```text
Act as a senior staff engineer.
Build a REST endpoint with validation, error handling, and OpenAPI docs for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-032</code> - harden an auth flow against OWASP Top 10 issues and document the threat  (click to expand)</summary>

```text
Act as a principal software architect.
Harden an auth flow against OWASP Top 10 issues and document the threat model for an e-commerce
platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-033</code> - create a feature-flag system with targeting rules and audit log (click to expand)</summary>

```text
Act as a senior backend engineer.
Create a feature-flag system with targeting rules and audit log for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-034</code> - create a CLI tool with config files, help text, and shell completions (click to expand)</summary>

```text
Act as a staff full-stack developer.
Create a CLI tool with config files, help text, and shell completions for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-035</code> - build a file-upload pipeline with virus-scan hooks and size limits (click to expand)</summary>

```text
Act as a senior platform engineer.
Build a file-upload pipeline with virus-scan hooks and size limits for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-036</code> - optimize a slow database query path and prove the speedup with benchmark (click to expand)</summary>

```text
Act as an expert code reviewer.
Optimize a slow database query path and prove the speedup with benchmarks for an enterprise internal
tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-037</code> - write a migration script with dry-run, rollback, and data validation (click to expand)</summary>

```text
Act as a senior staff engineer.
Write a migration script with dry-run, rollback, and data validation for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-038</code> - add role-based access control to an existing API with tests (click to expand)</summary>

```text
Act as a principal software architect.
Add role-based access control to an existing API with tests for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-039</code> - add structured logging, tracing, and health checks to a service (click to expand)</summary>

```text
Act as a senior backend engineer.
Add structured logging, tracing, and health checks to a service for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-040</code> - implement a background job queue with retries, idempotency, and observab (click to expand)</summary>

```text
Act as a staff full-stack developer.
Implement a background job queue with retries, idempotency, and observability for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-041</code> - implement pagination, filtering, and sorting for a list API (click to expand)</summary>

```text
Act as a senior platform engineer.
Implement pagination, filtering, and sorting for a list API for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-042</code> - migrate a callback-based flow to async/await with full type safety (click to expand)</summary>

```text
Act as an expert code reviewer.
Migrate a callback-based flow to async/await with full type safety for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-043</code> - convert a monolith handler into testable services with dependency inject (click to expand)</summary>

```text
Act as a senior staff engineer.
Convert a monolith handler into testable services with dependency injection for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-044</code> - refactor a tangled module into clean layers without changing behavior (click to expand)</summary>

```text
Act as a principal software architect.
Refactor a tangled module into clean layers without changing behavior for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-045</code> - build a webhook receiver with signature verification and replay protecti (click to expand)</summary>

```text
Act as a senior backend engineer.
Build a webhook receiver with signature verification and replay protection for a healthcare data
service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-046</code> - build a REST endpoint with validation, error handling, and OpenAPI docs (click to expand)</summary>

```text
Act as a staff full-stack developer.
Build a REST endpoint with validation, error handling, and OpenAPI docs for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-047</code> - harden an auth flow against OWASP Top 10 issues and document the threat  (click to expand)</summary>

```text
Act as a senior platform engineer.
Harden an auth flow against OWASP Top 10 issues and document the threat model for an open-source
library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-048</code> - create a feature-flag system with targeting rules and audit log (click to expand)</summary>

```text
Act as an expert code reviewer.
Create a feature-flag system with targeting rules and audit log for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-049</code> - create a CLI tool with config files, help text, and shell completions (click to expand)</summary>

```text
Act as a senior staff engineer.
Create a CLI tool with config files, help text, and shell completions for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-050</code> - build a file-upload pipeline with virus-scan hooks and size limits (click to expand)</summary>

```text
Act as a principal software architect.
Build a file-upload pipeline with virus-scan hooks and size limits for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-051</code> - optimize a slow database query path and prove the speedup with benchmark (click to expand)</summary>

```text
Act as a senior backend engineer.
Optimize a slow database query path and prove the speedup with benchmarks for a healthcare data
service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-052</code> - write a migration script with dry-run, rollback, and data validation (click to expand)</summary>

```text
Act as a staff full-stack developer.
Write a migration script with dry-run, rollback, and data validation for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-053</code> - add role-based access control to an existing API with tests (click to expand)</summary>

```text
Act as a senior platform engineer.
Add role-based access control to an existing API with tests for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-054</code> - add structured logging, tracing, and health checks to a service (click to expand)</summary>

```text
Act as an expert code reviewer.
Add structured logging, tracing, and health checks to a service for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-055</code> - implement a background job queue with retries, idempotency, and observab (click to expand)</summary>

```text
Act as a senior staff engineer.
Implement a background job queue with retries, idempotency, and observability for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-056</code> - implement pagination, filtering, and sorting for a list API (click to expand)</summary>

```text
Act as a principal software architect.
Implement pagination, filtering, and sorting for a list API for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-057</code> - migrate a callback-based flow to async/await with full type safety (click to expand)</summary>

```text
Act as a senior backend engineer.
Migrate a callback-based flow to async/await with full type safety for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-058</code> - convert a monolith handler into testable services with dependency inject (click to expand)</summary>

```text
Act as a staff full-stack developer.
Convert a monolith handler into testable services with dependency injection for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-059</code> - refactor a tangled module into clean layers without changing behavior (click to expand)</summary>

```text
Act as a senior platform engineer.
Refactor a tangled module into clean layers without changing behavior for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-060</code> - build a webhook receiver with signature verification and replay protecti (click to expand)</summary>

```text
Act as an expert code reviewer.
Build a webhook receiver with signature verification and replay protection for an enterprise
internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-061</code> - build a REST endpoint with validation, error handling, and OpenAPI docs (click to expand)</summary>

```text
Act as a senior staff engineer.
Build a REST endpoint with validation, error handling, and OpenAPI docs for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-062</code> - harden an auth flow against OWASP Top 10 issues and document the threat  (click to expand)</summary>

```text
Act as a principal software architect.
Harden an auth flow against OWASP Top 10 issues and document the threat model for an e-commerce
platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-063</code> - create a feature-flag system with targeting rules and audit log (click to expand)</summary>

```text
Act as a senior backend engineer.
Create a feature-flag system with targeting rules and audit log for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-064</code> - create a CLI tool with config files, help text, and shell completions (click to expand)</summary>

```text
Act as a staff full-stack developer.
Create a CLI tool with config files, help text, and shell completions for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-065</code> - build a file-upload pipeline with virus-scan hooks and size limits (click to expand)</summary>

```text
Act as a senior platform engineer.
Build a file-upload pipeline with virus-scan hooks and size limits for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-066</code> - optimize a slow database query path and prove the speedup with benchmark (click to expand)</summary>

```text
Act as an expert code reviewer.
Optimize a slow database query path and prove the speedup with benchmarks for an enterprise internal
tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-067</code> - write a migration script with dry-run, rollback, and data validation (click to expand)</summary>

```text
Act as a senior staff engineer.
Write a migration script with dry-run, rollback, and data validation for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-068</code> - add role-based access control to an existing API with tests (click to expand)</summary>

```text
Act as a principal software architect.
Add role-based access control to an existing API with tests for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-069</code> - add structured logging, tracing, and health checks to a service (click to expand)</summary>

```text
Act as a senior backend engineer.
Add structured logging, tracing, and health checks to a service for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-070</code> - implement a background job queue with retries, idempotency, and observab (click to expand)</summary>

```text
Act as a staff full-stack developer.
Implement a background job queue with retries, idempotency, and observability for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-071</code> - implement pagination, filtering, and sorting for a list API (click to expand)</summary>

```text
Act as a senior platform engineer.
Implement pagination, filtering, and sorting for a list API for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-072</code> - migrate a callback-based flow to async/await with full type safety (click to expand)</summary>

```text
Act as an expert code reviewer.
Migrate a callback-based flow to async/await with full type safety for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-073</code> - convert a monolith handler into testable services with dependency inject (click to expand)</summary>

```text
Act as a senior staff engineer.
Convert a monolith handler into testable services with dependency injection for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-074</code> - refactor a tangled module into clean layers without changing behavior (click to expand)</summary>

```text
Act as a principal software architect.
Refactor a tangled module into clean layers without changing behavior for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-075</code> - build a webhook receiver with signature verification and replay protecti (click to expand)</summary>

```text
Act as a senior backend engineer.
Build a webhook receiver with signature verification and replay protection for a healthcare data
service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-076</code> - build a REST endpoint with validation, error handling, and OpenAPI docs (click to expand)</summary>

```text
Act as a staff full-stack developer.
Build a REST endpoint with validation, error handling, and OpenAPI docs for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-077</code> - harden an auth flow against OWASP Top 10 issues and document the threat  (click to expand)</summary>

```text
Act as a senior platform engineer.
Harden an auth flow against OWASP Top 10 issues and document the threat model for an open-source
library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-078</code> - create a feature-flag system with targeting rules and audit log (click to expand)</summary>

```text
Act as an expert code reviewer.
Create a feature-flag system with targeting rules and audit log for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-079</code> - create a CLI tool with config files, help text, and shell completions (click to expand)</summary>

```text
Act as a senior staff engineer.
Create a CLI tool with config files, help text, and shell completions for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-080</code> - build a file-upload pipeline with virus-scan hooks and size limits (click to expand)</summary>

```text
Act as a principal software architect.
Build a file-upload pipeline with virus-scan hooks and size limits for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-081</code> - optimize a slow database query path and prove the speedup with benchmark (click to expand)</summary>

```text
Act as a senior backend engineer.
Optimize a slow database query path and prove the speedup with benchmarks for a healthcare data
service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-082</code> - write a migration script with dry-run, rollback, and data validation (click to expand)</summary>

```text
Act as a staff full-stack developer.
Write a migration script with dry-run, rollback, and data validation for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-083</code> - add role-based access control to an existing API with tests (click to expand)</summary>

```text
Act as a senior platform engineer.
Add role-based access control to an existing API with tests for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-084</code> - add structured logging, tracing, and health checks to a service (click to expand)</summary>

```text
Act as an expert code reviewer.
Add structured logging, tracing, and health checks to a service for an enterprise internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-085</code> - implement a background job queue with retries, idempotency, and observab (click to expand)</summary>

```text
Act as a senior staff engineer.
Implement a background job queue with retries, idempotency, and observability for a SaaS startup.
The intended result is a working implementation plus a short test report.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-086</code> - implement pagination, filtering, and sorting for a list API (click to expand)</summary>

```text
Act as a principal software architect.
Implement pagination, filtering, and sorting for a list API for an e-commerce platform.
The intended result is code plus rollback instructions.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-087</code> - migrate a callback-based flow to async/await with full type safety (click to expand)</summary>

```text
Act as a senior backend engineer.
Migrate a callback-based flow to async/await with full type safety for a healthcare data service.
The intended result is implementation with before/after benchmarks in a table.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-088</code> - convert a monolith handler into testable services with dependency inject (click to expand)</summary>

```text
Act as a staff full-stack developer.
Convert a monolith handler into testable services with dependency injection for a fintech backend.
The intended result is code plus a review checklist of risks and mitigations.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
<summary><code>agentic-coding-089</code> - refactor a tangled module into clean layers without changing behavior (click to expand)</summary>

```text
Act as a senior platform engineer.
Refactor a tangled module into clean layers without changing behavior for an open-source library.
The intended result is production-ready code with README usage section.
Requirements: reuse existing project patterns; no new dependencies without justification; keep the
diff minimal and reversible; explain every new abstraction.
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
<summary><code>agentic-coding-090</code> - build a webhook receiver with signature verification and replay protecti (click to expand)</summary>

```text
Act as an expert code reviewer.
Build a webhook receiver with signature verification and replay protection for an enterprise
internal tool.
The intended result is a unified diff with a file-by-file change summary.
Requirements: preserve backward compatibility for existing API consumers; optimize for readability
over cleverness; add docstrings for public APIs.
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
