# 💻 Agentic Coding — 90 copyable GPT-6 Astra prompts

> Long-horizon coding tasks, refactors, Codex/Copilot workflows with verification proportional to risk.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](28-productivity.md) · [Next ▶](02-computer-use.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `agentic-coding-001` — build a REST endpoint with validation, error handling, and OpenAPI docs

```text
Act as a senior staff engineer. Build a REST endpoint with validation, error handling, and OpenAPI docs for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-002` — harden an auth flow against OWASP Top 10 issues and document the threat 

```text
Act as a principal software architect. Harden an auth flow against OWASP Top 10 issues and document the threat model for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-003` — create a feature-flag system with targeting rules and audit log

```text
Act as a senior backend engineer. Create a feature-flag system with targeting rules and audit log for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-004` — create a CLI tool with config files, help text, and shell completions

```text
Act as a staff full-stack developer. Create a CLI tool with config files, help text, and shell completions for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-005` — build a file-upload pipeline with virus-scan hooks and size limits

```text
Act as a senior platform engineer. Build a file-upload pipeline with virus-scan hooks and size limits for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-006` — optimize a slow database query path and prove the speedup with benchmark

```text
Act as an expert code reviewer. Optimize a slow database query path and prove the speedup with benchmarks for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-007` — write a migration script with dry-run, rollback, and data validation

```text
Act as a senior staff engineer. Write a migration script with dry-run, rollback, and data validation for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-008` — add role-based access control to an existing API with tests

```text
Act as a principal software architect. Add role-based access control to an existing API with tests for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-009` — add structured logging, tracing, and health checks to a service

```text
Act as a senior backend engineer. Add structured logging, tracing, and health checks to a service for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-010` — implement a background job queue with retries, idempotency, and observab

```text
Act as a staff full-stack developer. Implement a background job queue with retries, idempotency, and observability for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-011` — implement pagination, filtering, and sorting for a list API

```text
Act as a senior platform engineer. Implement pagination, filtering, and sorting for a list API for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-012` — migrate a callback-based flow to async/await with full type safety

```text
Act as an expert code reviewer. Migrate a callback-based flow to async/await with full type safety for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-013` — convert a monolith handler into testable services with dependency inject

```text
Act as a senior staff engineer. Convert a monolith handler into testable services with dependency injection for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-014` — refactor a tangled module into clean layers without changing behavior

```text
Act as a principal software architect. Refactor a tangled module into clean layers without changing behavior for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-015` — build a webhook receiver with signature verification and replay protecti

```text
Act as a senior backend engineer. Build a webhook receiver with signature verification and replay protection for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-016` — build a REST endpoint with validation, error handling, and OpenAPI docs

```text
Act as a staff full-stack developer. Build a REST endpoint with validation, error handling, and OpenAPI docs for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-017` — harden an auth flow against OWASP Top 10 issues and document the threat 

```text
Act as a senior platform engineer. Harden an auth flow against OWASP Top 10 issues and document the threat model for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-018` — create a feature-flag system with targeting rules and audit log

```text
Act as an expert code reviewer. Create a feature-flag system with targeting rules and audit log for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-019` — create a CLI tool with config files, help text, and shell completions

```text
Act as a senior staff engineer. Create a CLI tool with config files, help text, and shell completions for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-020` — build a file-upload pipeline with virus-scan hooks and size limits

```text
Act as a principal software architect. Build a file-upload pipeline with virus-scan hooks and size limits for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-021` — optimize a slow database query path and prove the speedup with benchmark

```text
Act as a senior backend engineer. Optimize a slow database query path and prove the speedup with benchmarks for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-022` — write a migration script with dry-run, rollback, and data validation

```text
Act as a staff full-stack developer. Write a migration script with dry-run, rollback, and data validation for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-023` — add role-based access control to an existing API with tests

```text
Act as a senior platform engineer. Add role-based access control to an existing API with tests for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-024` — add structured logging, tracing, and health checks to a service

```text
Act as an expert code reviewer. Add structured logging, tracing, and health checks to a service for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-025` — implement a background job queue with retries, idempotency, and observab

```text
Act as a senior staff engineer. Implement a background job queue with retries, idempotency, and observability for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-026` — implement pagination, filtering, and sorting for a list API

```text
Act as a principal software architect. Implement pagination, filtering, and sorting for a list API for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `agentic-coding-027` — migrate a callback-based flow to async/await with full type safety

```text
Act as a senior backend engineer. Migrate a callback-based flow to async/await with full type safety for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-028` — convert a monolith handler into testable services with dependency inject

```text
Act as a staff full-stack developer. Convert a monolith handler into testable services with dependency injection for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `agentic-coding-029` — refactor a tangled module into clean layers without changing behavior

```text
Act as a senior platform engineer. Refactor a tangled module into clean layers without changing behavior for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-030` — build a webhook receiver with signature verification and replay protecti

```text
Act as an expert code reviewer. Build a webhook receiver with signature verification and replay protection for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `agentic-coding-031` — build a REST endpoint with validation, error handling, and OpenAPI docs

```text
Act as a senior staff engineer. Build a REST endpoint with validation, error handling, and OpenAPI docs for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `agentic-coding-032` — harden an auth flow against OWASP Top 10 issues and document the threat 

```text
Act as a principal software architect. Harden an auth flow against OWASP Top 10 issues and document the threat model for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `agentic-coding-033` — create a feature-flag system with targeting rules and audit log

```text
Act as a senior backend engineer. Create a feature-flag system with targeting rules and audit log for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `agentic-coding-034` — create a CLI tool with config files, help text, and shell completions

```text
Act as a staff full-stack developer. Create a CLI tool with config files, help text, and shell completions for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `agentic-coding-035` — build a file-upload pipeline with virus-scan hooks and size limits

```text
Act as a senior platform engineer. Build a file-upload pipeline with virus-scan hooks and size limits for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `agentic-coding-036` — optimize a slow database query path and prove the speedup with benchmark

```text
Act as an expert code reviewer. Optimize a slow database query path and prove the speedup with benchmarks for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `agentic-coding-037` — write a migration script with dry-run, rollback, and data validation

```text
Act as a senior staff engineer. Write a migration script with dry-run, rollback, and data validation for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `agentic-coding-038` — add role-based access control to an existing API with tests

```text
Act as a principal software architect. Add role-based access control to an existing API with tests for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `agentic-coding-039` — add structured logging, tracing, and health checks to a service

```text
Act as a senior backend engineer. Add structured logging, tracing, and health checks to a service for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `agentic-coding-040` — implement a background job queue with retries, idempotency, and observab

```text
Act as a staff full-stack developer. Implement a background job queue with retries, idempotency, and observability for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `agentic-coding-041` — implement pagination, filtering, and sorting for a list API

```text
Act as a senior platform engineer. Implement pagination, filtering, and sorting for a list API for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `agentic-coding-042` — migrate a callback-based flow to async/await with full type safety

```text
Act as an expert code reviewer. Migrate a callback-based flow to async/await with full type safety for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `agentic-coding-043` — convert a monolith handler into testable services with dependency inject

```text
Act as a senior staff engineer. Convert a monolith handler into testable services with dependency injection for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `agentic-coding-044` — refactor a tangled module into clean layers without changing behavior

```text
Act as a principal software architect. Refactor a tangled module into clean layers without changing behavior for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `agentic-coding-045` — build a webhook receiver with signature verification and replay protecti

```text
Act as a senior backend engineer. Build a webhook receiver with signature verification and replay protection for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `agentic-coding-046` — build a REST endpoint with validation, error handling, and OpenAPI docs

```text
Act as a staff full-stack developer. Build a REST endpoint with validation, error handling, and OpenAPI docs for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `agentic-coding-047` — harden an auth flow against OWASP Top 10 issues and document the threat 

```text
Act as a senior platform engineer. Harden an auth flow against OWASP Top 10 issues and document the threat model for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `agentic-coding-048` — create a feature-flag system with targeting rules and audit log

```text
Act as an expert code reviewer. Create a feature-flag system with targeting rules and audit log for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `agentic-coding-049` — create a CLI tool with config files, help text, and shell completions

```text
Act as a senior staff engineer. Create a CLI tool with config files, help text, and shell completions for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `agentic-coding-050` — build a file-upload pipeline with virus-scan hooks and size limits

```text
Act as a principal software architect. Build a file-upload pipeline with virus-scan hooks and size limits for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `agentic-coding-051` — optimize a slow database query path and prove the speedup with benchmark

```text
Act as a senior backend engineer. Optimize a slow database query path and prove the speedup with benchmarks for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `agentic-coding-052` — write a migration script with dry-run, rollback, and data validation

```text
Act as a staff full-stack developer. Write a migration script with dry-run, rollback, and data validation for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `agentic-coding-053` — add role-based access control to an existing API with tests

```text
Act as a senior platform engineer. Add role-based access control to an existing API with tests for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `agentic-coding-054` — add structured logging, tracing, and health checks to a service

```text
Act as an expert code reviewer. Add structured logging, tracing, and health checks to a service for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `agentic-coding-055` — implement a background job queue with retries, idempotency, and observab

```text
Act as a senior staff engineer. Implement a background job queue with retries, idempotency, and observability for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `agentic-coding-056` — implement pagination, filtering, and sorting for a list API

```text
Act as a principal software architect. Implement pagination, filtering, and sorting for a list API for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `agentic-coding-057` — migrate a callback-based flow to async/await with full type safety

```text
Act as a senior backend engineer. Migrate a callback-based flow to async/await with full type safety for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `agentic-coding-058` — convert a monolith handler into testable services with dependency inject

```text
Act as a staff full-stack developer. Convert a monolith handler into testable services with dependency injection for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `agentic-coding-059` — refactor a tangled module into clean layers without changing behavior

```text
Act as a senior platform engineer. Refactor a tangled module into clean layers without changing behavior for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `agentic-coding-060` — build a webhook receiver with signature verification and replay protecti

```text
Act as an expert code reviewer. Build a webhook receiver with signature verification and replay protection for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `agentic-coding-061` — build a REST endpoint with validation, error handling, and OpenAPI docs

```text
Act as a senior staff engineer. Build a REST endpoint with validation, error handling, and OpenAPI docs for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `agentic-coding-062` — harden an auth flow against OWASP Top 10 issues and document the threat 

```text
Act as a principal software architect. Harden an auth flow against OWASP Top 10 issues and document the threat model for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `agentic-coding-063` — create a feature-flag system with targeting rules and audit log

```text
Act as a senior backend engineer. Create a feature-flag system with targeting rules and audit log for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `agentic-coding-064` — create a CLI tool with config files, help text, and shell completions

```text
Act as a staff full-stack developer. Create a CLI tool with config files, help text, and shell completions for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `agentic-coding-065` — build a file-upload pipeline with virus-scan hooks and size limits

```text
Act as a senior platform engineer. Build a file-upload pipeline with virus-scan hooks and size limits for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `agentic-coding-066` — optimize a slow database query path and prove the speedup with benchmark

```text
Act as an expert code reviewer. Optimize a slow database query path and prove the speedup with benchmarks for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `agentic-coding-067` — write a migration script with dry-run, rollback, and data validation

```text
Act as a senior staff engineer. Write a migration script with dry-run, rollback, and data validation for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `agentic-coding-068` — add role-based access control to an existing API with tests

```text
Act as a principal software architect. Add role-based access control to an existing API with tests for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `agentic-coding-069` — add structured logging, tracing, and health checks to a service

```text
Act as a senior backend engineer. Add structured logging, tracing, and health checks to a service for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `agentic-coding-070` — implement a background job queue with retries, idempotency, and observab

```text
Act as a staff full-stack developer. Implement a background job queue with retries, idempotency, and observability for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `agentic-coding-071` — implement pagination, filtering, and sorting for a list API

```text
Act as a senior platform engineer. Implement pagination, filtering, and sorting for a list API for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `agentic-coding-072` — migrate a callback-based flow to async/await with full type safety

```text
Act as an expert code reviewer. Migrate a callback-based flow to async/await with full type safety for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `agentic-coding-073` — convert a monolith handler into testable services with dependency inject

```text
Act as a senior staff engineer. Convert a monolith handler into testable services with dependency injection for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `agentic-coding-074` — refactor a tangled module into clean layers without changing behavior

```text
Act as a principal software architect. Refactor a tangled module into clean layers without changing behavior for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `agentic-coding-075` — build a webhook receiver with signature verification and replay protecti

```text
Act as a senior backend engineer. Build a webhook receiver with signature verification and replay protection for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `agentic-coding-076` — build a REST endpoint with validation, error handling, and OpenAPI docs

```text
Act as a staff full-stack developer. Build a REST endpoint with validation, error handling, and OpenAPI docs for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `agentic-coding-077` — harden an auth flow against OWASP Top 10 issues and document the threat 

```text
Act as a senior platform engineer. Harden an auth flow against OWASP Top 10 issues and document the threat model for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `agentic-coding-078` — create a feature-flag system with targeting rules and audit log

```text
Act as an expert code reviewer. Create a feature-flag system with targeting rules and audit log for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `agentic-coding-079` — create a CLI tool with config files, help text, and shell completions

```text
Act as a senior staff engineer. Create a CLI tool with config files, help text, and shell completions for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `agentic-coding-080` — build a file-upload pipeline with virus-scan hooks and size limits

```text
Act as a principal software architect. Build a file-upload pipeline with virus-scan hooks and size limits for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `agentic-coding-081` — optimize a slow database query path and prove the speedup with benchmark

```text
Act as a senior backend engineer. Optimize a slow database query path and prove the speedup with benchmarks for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `agentic-coding-082` — write a migration script with dry-run, rollback, and data validation

```text
Act as a staff full-stack developer. Write a migration script with dry-run, rollback, and data validation for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `agentic-coding-083` — add role-based access control to an existing API with tests

```text
Act as a senior platform engineer. Add role-based access control to an existing API with tests for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `agentic-coding-084` — add structured logging, tracing, and health checks to a service

```text
Act as an expert code reviewer. Add structured logging, tracing, and health checks to a service for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `agentic-coding-085` — implement a background job queue with retries, idempotency, and observab

```text
Act as a senior staff engineer. Implement a background job queue with retries, idempotency, and observability for a SaaS startup. The intended result is a working implementation plus a short test report. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `agentic-coding-086` — implement pagination, filtering, and sorting for a list API

```text
Act as a principal software architect. Implement pagination, filtering, and sorting for a list API for an e-commerce platform. The intended result is code plus rollback instructions. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `agentic-coding-087` — migrate a callback-based flow to async/await with full type safety

```text
Act as a senior backend engineer. Migrate a callback-based flow to async/await with full type safety for a healthcare data service. The intended result is implementation with before/after benchmarks in a table. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `agentic-coding-088` — convert a monolith handler into testable services with dependency inject

```text
Act as a staff full-stack developer. Convert a monolith handler into testable services with dependency injection for a fintech backend. The intended result is code plus a review checklist of risks and mitigations. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `agentic-coding-089` — refactor a tangled module into clean layers without changing behavior

```text
Act as a senior platform engineer. Refactor a tangled module into clean layers without changing behavior for an open-source library. The intended result is production-ready code with README usage section. Requirements: reuse existing project patterns; no new dependencies without justification; keep the diff minimal and reversible; explain every new abstraction. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `agentic-coding-090` — build a webhook receiver with signature verification and replay protecti

```text
Act as an expert code reviewer. Build a webhook receiver with signature verification and replay protection for an enterprise internal tool. The intended result is a unified diff with a file-by-file change summary. Requirements: preserve backward compatibility for existing API consumers; optimize for readability over cleverness; add docstrings for public APIs. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
