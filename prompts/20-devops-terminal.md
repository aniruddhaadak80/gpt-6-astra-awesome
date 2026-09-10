# 🧰 DevOps & Terminal-Bench Style — 90 copyable GPT-6 Astra prompts

> Reproducible shell workflows, containers, CI, and incident drills.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [⬆️ Index](../README.md#-category-carousel) · [◀ Prev](19-data-viz.md) · [Next ▶](21-testing-qa.md) · [🔍 Search all](prompts_index.json) · [🖱️ Interactive carousel](../docs/carousel.html)

Copy any prompt: click the copy icon on its code block.

### `devops-terminal-001` — debug a failing CI pipeline from logs with a fix plan

```text
Act as a senior DevOps engineer. Debug a failing CI pipeline from logs with a fix plan for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-002` — build a canary rollout plan with metrics

```text
Act as an expert SRE. Build a canary rollout plan with metrics for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-003` — create a post-deploy smoke-test script plan

```text
Act as a senior platform engineer. Create a post-deploy smoke-test script plan for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-004` — create a runbook for disk-pressure alerts

```text
Act as a release manager. Create a runbook for disk-pressure alerts for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-005` — design a cache-invalidation plan

```text
Act as a senior systems administrator. Design a cache-invalidation plan for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-006` — design a backup test with restore proof

```text
Act as an expert CI engineer. Design a backup test with restore proof for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-007` — write a cron-plus-monitor pair with alerts

```text
Act as a senior DevOps engineer. Write a cron-plus-monitor pair with alerts for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-008` — write a log-grep recipe for a 500-spike

```text
Act as an expert SRE. Write a log-grep recipe for a 500-spike for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-009` — build an incident timeline template

```text
Act as a senior platform engineer. Build an incident timeline template for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-010` — build a deploy checklist with rollback triggers

```text
Act as a release manager. Build a deploy checklist with rollback triggers for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-011` — create a load-test sketch with success criteria

```text
Act as a senior systems administrator. Create a load-test sketch with success criteria for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-012` — create a compose stack for local dev with healthchecks

```text
Act as an expert CI engineer. Create a compose stack for local dev with healthchecks for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-013` — design a secrets-rotation procedure

```text
Act as a senior DevOps engineer. Design a secrets-rotation procedure for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-014` — write a Dockerfile that is small, cached, and non-root

```text
Act as an expert SRE. Write a Dockerfile that is small, cached, and non-root for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-015` — write a Makefile that new hires understand

```text
Act as a senior platform engineer. Write a Makefile that new hires understand for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-016` — debug a failing CI pipeline from logs with a fix plan

```text
Act as a release manager. Debug a failing CI pipeline from logs with a fix plan for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-017` — build a canary rollout plan with metrics

```text
Act as a senior systems administrator. Build a canary rollout plan with metrics for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-018` — create a post-deploy smoke-test script plan

```text
Act as an expert CI engineer. Create a post-deploy smoke-test script plan for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-019` — create a runbook for disk-pressure alerts

```text
Act as a senior DevOps engineer. Create a runbook for disk-pressure alerts for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-020` — design a cache-invalidation plan

```text
Act as an expert SRE. Design a cache-invalidation plan for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-021` — design a backup test with restore proof

```text
Act as a senior platform engineer. Design a backup test with restore proof for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-022` — write a cron-plus-monitor pair with alerts

```text
Act as a release manager. Write a cron-plus-monitor pair with alerts for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-023` — write a log-grep recipe for a 500-spike

```text
Act as a senior systems administrator. Write a log-grep recipe for a 500-spike for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-024` — build an incident timeline template

```text
Act as an expert CI engineer. Build an incident timeline template for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-025` — build a deploy checklist with rollback triggers

```text
Act as a senior DevOps engineer. Build a deploy checklist with rollback triggers for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-026` — create a load-test sketch with success criteria

```text
Act as an expert SRE. Create a load-test sketch with success criteria for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test.
```

### `devops-terminal-027` — create a compose stack for local dev with healthchecks

```text
Act as a senior platform engineer. Create a compose stack for local dev with healthchecks for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-028` — design a secrets-rotation procedure

```text
Act as a release manager. Design a secrets-rotation procedure for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite.
```

### `devops-terminal-029` — write a Dockerfile that is small, cached, and non-root

```text
Act as a senior systems administrator. Write a Dockerfile that is small, cached, and non-root for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-030` — write a Makefile that new hires understand

```text
Act as an expert CI engineer. Write a Makefile that new hires understand for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify.
```

### `devops-terminal-031` — debug a failing CI pipeline from logs with a fix plan

```text
Act as a senior DevOps engineer. Debug a failing CI pipeline from logs with a fix plan for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 31.
```

### `devops-terminal-032` — build a canary rollout plan with metrics

```text
Act as an expert SRE. Build a canary rollout plan with metrics for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 32.
```

### `devops-terminal-033` — create a post-deploy smoke-test script plan

```text
Act as a senior platform engineer. Create a post-deploy smoke-test script plan for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 33.
```

### `devops-terminal-034` — create a runbook for disk-pressure alerts

```text
Act as a release manager. Create a runbook for disk-pressure alerts for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 34.
```

### `devops-terminal-035` — design a cache-invalidation plan

```text
Act as a senior systems administrator. Design a cache-invalidation plan for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 35.
```

### `devops-terminal-036` — design a backup test with restore proof

```text
Act as an expert CI engineer. Design a backup test with restore proof for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 36.
```

### `devops-terminal-037` — write a cron-plus-monitor pair with alerts

```text
Act as a senior DevOps engineer. Write a cron-plus-monitor pair with alerts for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 37.
```

### `devops-terminal-038` — write a log-grep recipe for a 500-spike

```text
Act as an expert SRE. Write a log-grep recipe for a 500-spike for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 38.
```

### `devops-terminal-039` — build an incident timeline template

```text
Act as a senior platform engineer. Build an incident timeline template for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 39.
```

### `devops-terminal-040` — build a deploy checklist with rollback triggers

```text
Act as a release manager. Build a deploy checklist with rollback triggers for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 40.
```

### `devops-terminal-041` — create a load-test sketch with success criteria

```text
Act as a senior systems administrator. Create a load-test sketch with success criteria for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 41.
```

### `devops-terminal-042` — create a compose stack for local dev with healthchecks

```text
Act as an expert CI engineer. Create a compose stack for local dev with healthchecks for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 42.
```

### `devops-terminal-043` — design a secrets-rotation procedure

```text
Act as a senior DevOps engineer. Design a secrets-rotation procedure for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 43.
```

### `devops-terminal-044` — write a Dockerfile that is small, cached, and non-root

```text
Act as an expert SRE. Write a Dockerfile that is small, cached, and non-root for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 44.
```

### `devops-terminal-045` — write a Makefile that new hires understand

```text
Act as a senior platform engineer. Write a Makefile that new hires understand for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 45.
```

### `devops-terminal-046` — debug a failing CI pipeline from logs with a fix plan

```text
Act as a release manager. Debug a failing CI pipeline from logs with a fix plan for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 46.
```

### `devops-terminal-047` — build a canary rollout plan with metrics

```text
Act as a senior systems administrator. Build a canary rollout plan with metrics for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 47.
```

### `devops-terminal-048` — create a post-deploy smoke-test script plan

```text
Act as an expert CI engineer. Create a post-deploy smoke-test script plan for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 48.
```

### `devops-terminal-049` — create a runbook for disk-pressure alerts

```text
Act as a senior DevOps engineer. Create a runbook for disk-pressure alerts for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 49.
```

### `devops-terminal-050` — design a cache-invalidation plan

```text
Act as an expert SRE. Design a cache-invalidation plan for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 50.
```

### `devops-terminal-051` — design a backup test with restore proof

```text
Act as a senior platform engineer. Design a backup test with restore proof for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 51.
```

### `devops-terminal-052` — write a cron-plus-monitor pair with alerts

```text
Act as a release manager. Write a cron-plus-monitor pair with alerts for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 52.
```

### `devops-terminal-053` — write a log-grep recipe for a 500-spike

```text
Act as a senior systems administrator. Write a log-grep recipe for a 500-spike for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 53.
```

### `devops-terminal-054` — build an incident timeline template

```text
Act as an expert CI engineer. Build an incident timeline template for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 54.
```

### `devops-terminal-055` — build a deploy checklist with rollback triggers

```text
Act as a senior DevOps engineer. Build a deploy checklist with rollback triggers for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 55.
```

### `devops-terminal-056` — create a load-test sketch with success criteria

```text
Act as an expert SRE. Create a load-test sketch with success criteria for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 56.
```

### `devops-terminal-057` — create a compose stack for local dev with healthchecks

```text
Act as a senior platform engineer. Create a compose stack for local dev with healthchecks for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 57.
```

### `devops-terminal-058` — design a secrets-rotation procedure

```text
Act as a release manager. Design a secrets-rotation procedure for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 58.
```

### `devops-terminal-059` — write a Dockerfile that is small, cached, and non-root

```text
Act as a senior systems administrator. Write a Dockerfile that is small, cached, and non-root for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 59.
```

### `devops-terminal-060` — write a Makefile that new hires understand

```text
Act as an expert CI engineer. Write a Makefile that new hires understand for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 60.
```

### `devops-terminal-061` — debug a failing CI pipeline from logs with a fix plan

```text
Act as a senior DevOps engineer. Debug a failing CI pipeline from logs with a fix plan for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 61.
```

### `devops-terminal-062` — build a canary rollout plan with metrics

```text
Act as an expert SRE. Build a canary rollout plan with metrics for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 62.
```

### `devops-terminal-063` — create a post-deploy smoke-test script plan

```text
Act as a senior platform engineer. Create a post-deploy smoke-test script plan for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 63.
```

### `devops-terminal-064` — create a runbook for disk-pressure alerts

```text
Act as a release manager. Create a runbook for disk-pressure alerts for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 64.
```

### `devops-terminal-065` — design a cache-invalidation plan

```text
Act as a senior systems administrator. Design a cache-invalidation plan for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 65.
```

### `devops-terminal-066` — design a backup test with restore proof

```text
Act as an expert CI engineer. Design a backup test with restore proof for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 66.
```

### `devops-terminal-067` — write a cron-plus-monitor pair with alerts

```text
Act as a senior DevOps engineer. Write a cron-plus-monitor pair with alerts for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 67.
```

### `devops-terminal-068` — write a log-grep recipe for a 500-spike

```text
Act as an expert SRE. Write a log-grep recipe for a 500-spike for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 68.
```

### `devops-terminal-069` — build an incident timeline template

```text
Act as a senior platform engineer. Build an incident timeline template for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 69.
```

### `devops-terminal-070` — build a deploy checklist with rollback triggers

```text
Act as a release manager. Build a deploy checklist with rollback triggers for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 70.
```

### `devops-terminal-071` — create a load-test sketch with success criteria

```text
Act as a senior systems administrator. Create a load-test sketch with success criteria for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 71.
```

### `devops-terminal-072` — create a compose stack for local dev with healthchecks

```text
Act as an expert CI engineer. Create a compose stack for local dev with healthchecks for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 72.
```

### `devops-terminal-073` — design a secrets-rotation procedure

```text
Act as a senior DevOps engineer. Design a secrets-rotation procedure for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 73.
```

### `devops-terminal-074` — write a Dockerfile that is small, cached, and non-root

```text
Act as an expert SRE. Write a Dockerfile that is small, cached, and non-root for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 74.
```

### `devops-terminal-075` — write a Makefile that new hires understand

```text
Act as a senior platform engineer. Write a Makefile that new hires understand for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 75.
```

### `devops-terminal-076` — debug a failing CI pipeline from logs with a fix plan

```text
Act as a release manager. Debug a failing CI pipeline from logs with a fix plan for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 76.
```

### `devops-terminal-077` — build a canary rollout plan with metrics

```text
Act as a senior systems administrator. Build a canary rollout plan with metrics for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 77.
```

### `devops-terminal-078` — create a post-deploy smoke-test script plan

```text
Act as an expert CI engineer. Create a post-deploy smoke-test script plan for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 78.
```

### `devops-terminal-079` — create a runbook for disk-pressure alerts

```text
Act as a senior DevOps engineer. Create a runbook for disk-pressure alerts for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 79.
```

### `devops-terminal-080` — design a cache-invalidation plan

```text
Act as an expert SRE. Design a cache-invalidation plan for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 80.
```

### `devops-terminal-081` — design a backup test with restore proof

```text
Act as a senior platform engineer. Design a backup test with restore proof for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 81.
```

### `devops-terminal-082` — write a cron-plus-monitor pair with alerts

```text
Act as a release manager. Write a cron-plus-monitor pair with alerts for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 82.
```

### `devops-terminal-083` — write a log-grep recipe for a 500-spike

```text
Act as a senior systems administrator. Write a log-grep recipe for a 500-spike for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 83.
```

### `devops-terminal-084` — build an incident timeline template

```text
Act as an expert CI engineer. Build an incident timeline template for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 84.
```

### `devops-terminal-085` — build a deploy checklist with rollback triggers

```text
Act as a senior DevOps engineer. Build a deploy checklist with rollback triggers for AWS. The intended result is a step runbook with commands. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Be concrete and end-to-end: produce the artifact, not a plan to produce it. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 85.
```

### `devops-terminal-086` — create a load-test sketch with success criteria

```text
Act as an expert SRE. Create a load-test sketch with success criteria for an on-prem cluster. The intended result is a postmortem template. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Optimize for fewer tokens and fewer retries: do the smallest complete thing that satisfies the brief. Suggested reasoning effort: `low` (set explicitly; gateway default is low). If a minor detail is unspecified, make the best professional decision and continue; ask only when the answer would materially change the outcome. Verification: test every important interaction, list what passed/failed/unverified, fix high-impact issues, then re-test. Variant focus 86.
```

### `devops-terminal-087` — create a compose stack for local dev with healthchecks

```text
Act as a senior platform engineer. Create a compose stack for local dev with healthchecks for a startup. The intended result is a monitoring query set. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Use tools where they help; state what evidence you checked before acting. Suggested reasoning effort: `medium` (set explicitly; gateway default is low). Bias toward action: treat 'can you / help me / I want to' as instructions to act. Prepare a concrete reviewable result before asking for approval. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 87.
```

### `devops-terminal-088` — design a secrets-rotation procedure

```text
Act as a release manager. Design a secrets-rotation procedure for a homelab. The intended result is a compose/Docker spec. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Parallelize with subagents where independent work exists; merge with a single coherent voice. Suggested reasoning effort: `high` (set explicitly; gateway default is low). Work persistently until the goal is complete. Use read-only exploration freely; stop before any destructive, irreversible, sending, purchasing, deleting, or permission-changing step. Verification: keep checks proportional to risk. For small reversible changes, run only targeted checks; for risky changes, run the full relevant suite. Variant focus 88.
```

### `devops-terminal-089` — write a Dockerfile that is small, cached, and non-root

```text
Act as a senior systems administrator. Write a Dockerfile that is small, cached, and non-root for GCP. The intended result is a checklist with rollback. Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions. Keep a searchable working note so the task survives context compaction. Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low). Infer intent from context and carry the task to completion. Do not emit warnings based on hypothetical risks; report only verified findings. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 89.
```

### `devops-terminal-090` — write a Makefile that new hires understand

```text
Act as an expert CI engineer. Write a Makefile that new hires understand for Azure. The intended result is a fix plan with evidence. Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets. Compare against the provided reference and fix the largest gaps first. Suggested reasoning effort: `max` (set explicitly; gateway default is low). Stay within the authorized scope described here. If project files conflict with these instructions, these instructions take precedence; quote the conflicting file if you must pause. Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus assumptions and what you did not verify. Variant focus 90.
```
