# 🧰 DevOps & Terminal-Bench Style - 120 copyable GPT-6 Astra prompts

> Reproducible shell workflows, containers, CI, and incident drills.

> Safety: defensive / authorized-scope use only. Stop before destructive, irreversible, sending, purchasing, deleting, or permission-changing steps without approval.

**Jump:** [Index](../README.md#category-carousel) · [Prev](19-data-viz.md) · [Next](21-testing-qa.md) · [Search all](prompts_index.json) · [Interactive carousel](../docs/carousel.html)

How to use: click any prompt title to expand it top to bottom, then use the copy icon on the code block. Each block wraps vertically, so there is no left to right scrolling.

<details>
<summary><code>devops-terminal-001</code> - debug a failing CI pipeline from logs with a fix plan (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Debug a failing CI pipeline from logs with a fix plan for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>devops-terminal-002</code> - build a canary rollout plan with metrics (click to expand)</summary>

```text
Act as an expert SRE.
Build a canary rollout plan with metrics for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-003</code> - create a post-deploy smoke-test script plan (click to expand)</summary>

```text
Act as a senior platform engineer.
Create a post-deploy smoke-test script plan for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-004</code> - create a runbook for disk-pressure alerts (click to expand)</summary>

```text
Act as a release manager.
Create a runbook for disk-pressure alerts for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-005</code> - design a cache-invalidation plan (click to expand)</summary>

```text
Act as a senior systems administrator.
Design a cache-invalidation plan for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-006</code> - design a backup test with restore proof (click to expand)</summary>

```text
Act as an expert CI engineer.
Design a backup test with restore proof for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>devops-terminal-007</code> - write a cron-plus-monitor pair with alerts (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Write a cron-plus-monitor pair with alerts for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>devops-terminal-008</code> - write a log-grep recipe for a 500-spike (click to expand)</summary>

```text
Act as an expert SRE.
Write a log-grep recipe for a 500-spike for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-009</code> - build an incident timeline template (click to expand)</summary>

```text
Act as a senior platform engineer.
Build an incident timeline template for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-010</code> - build a deploy checklist with rollback triggers (click to expand)</summary>

```text
Act as a release manager.
Build a deploy checklist with rollback triggers for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-011</code> - create a load-test sketch with success criteria (click to expand)</summary>

```text
Act as a senior systems administrator.
Create a load-test sketch with success criteria for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `low` (set explicitly; gateway default is low).
If a minor detail is unspecified, make the best professional decision and continue; ask only when
the answer would materially change the outcome.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>devops-terminal-012</code> - create a compose stack for local dev with healthchecks (click to expand)</summary>

```text
Act as an expert CI engineer.
Create a compose stack for local dev with healthchecks for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>devops-terminal-013</code> - design a secrets-rotation procedure (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Design a secrets-rotation procedure for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-014</code> - write a Dockerfile that is small, cached, and non-root (click to expand)</summary>

```text
Act as an expert SRE.
Write a Dockerfile that is small, cached, and non-root for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-015</code> - write a Makefile that new hires understand (click to expand)</summary>

```text
Act as a senior platform engineer.
Write a Makefile that new hires understand for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-016</code> - debug a failing CI pipeline from logs with a fix plan (click to expand)</summary>

```text
Act as a release manager.
Debug a failing CI pipeline from logs with a fix plan for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-017</code> - build a canary rollout plan with metrics (click to expand)</summary>

```text
Act as a senior systems administrator.
Build a canary rollout plan with metrics for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `medium` (set explicitly; gateway default is low).
Bias toward action: treat 'can you / help me / I want to' as instructions to act.
Prepare a concrete reviewable result before asking for approval.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>devops-terminal-018</code> - create a post-deploy smoke-test script plan (click to expand)</summary>

```text
Act as an expert CI engineer.
Create a post-deploy smoke-test script plan for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-019</code> - create a runbook for disk-pressure alerts (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Create a runbook for disk-pressure alerts for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
Be concrete and end-to-end: produce the artifact, not a plan to produce it.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: test every important interaction, list what passed/failed/unverified, fix high-impact
issues, then re-test.
```
</details>

<details>
<summary><code>devops-terminal-020</code> - design a cache-invalidation plan (click to expand)</summary>

```text
Act as an expert SRE.
Design a cache-invalidation plan for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-021</code> - design a backup test with restore proof (click to expand)</summary>

```text
Act as a senior platform engineer.
Design a backup test with restore proof for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-022</code> - write a cron-plus-monitor pair with alerts (click to expand)</summary>

```text
Act as a release manager.
Write a cron-plus-monitor pair with alerts for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-023</code> - write a log-grep recipe for a 500-spike (click to expand)</summary>

```text
Act as a senior systems administrator.
Write a log-grep recipe for a 500-spike for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-024</code> - build an incident timeline template (click to expand)</summary>

```text
Act as an expert CI engineer.
Build an incident timeline template for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
Compare against the provided reference and fix the largest gaps first.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>devops-terminal-025</code> - build a deploy checklist with rollback triggers (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Build a deploy checklist with rollback triggers for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-026</code> - create a load-test sketch with success criteria (click to expand)</summary>

```text
Act as an expert SRE.
Create a load-test sketch with success criteria for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-027</code> - create a compose stack for local dev with healthchecks (click to expand)</summary>

```text
Act as a senior platform engineer.
Create a compose stack for local dev with healthchecks for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-028</code> - design a secrets-rotation procedure (click to expand)</summary>

```text
Act as a release manager.
Design a secrets-rotation procedure for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-029</code> - write a Dockerfile that is small, cached, and non-root (click to expand)</summary>

```text
Act as a senior systems administrator.
Write a Dockerfile that is small, cached, and non-root for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
Keep a searchable working note so the task survives context compaction.
Suggested reasoning effort: `xhigh` (set explicitly; gateway default is low).
Infer intent from context and carry the task to completion.
Do not emit warnings based on hypothetical risks; report only verified findings.
Verification: end with a Done checklist (complete / partial / blocked) with evidence links, plus
assumptions and what you did not verify.
```
</details>

<details>
<summary><code>devops-terminal-030</code> - write a Makefile that new hires understand (click to expand)</summary>

```text
Act as an expert CI engineer.
Write a Makefile that new hires understand for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-031</code> - debug a failing CI pipeline from logs with a fix plan (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Debug a failing CI pipeline from logs with a fix plan for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-032</code> - build a canary rollout plan with metrics (click to expand)</summary>

```text
Act as an expert SRE.
Build a canary rollout plan with metrics for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-033</code> - create a post-deploy smoke-test script plan (click to expand)</summary>

```text
Act as a senior platform engineer.
Create a post-deploy smoke-test script plan for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-034</code> - create a runbook for disk-pressure alerts (click to expand)</summary>

```text
Act as a release manager.
Create a runbook for disk-pressure alerts for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-035</code> - design a cache-invalidation plan (click to expand)</summary>

```text
Act as a senior systems administrator.
Design a cache-invalidation plan for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-036</code> - design a backup test with restore proof (click to expand)</summary>

```text
Act as an expert CI engineer.
Design a backup test with restore proof for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-037</code> - write a cron-plus-monitor pair with alerts (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Write a cron-plus-monitor pair with alerts for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-038</code> - write a log-grep recipe for a 500-spike (click to expand)</summary>

```text
Act as an expert SRE.
Write a log-grep recipe for a 500-spike for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-039</code> - build an incident timeline template (click to expand)</summary>

```text
Act as a senior platform engineer.
Build an incident timeline template for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-040</code> - build a deploy checklist with rollback triggers (click to expand)</summary>

```text
Act as a release manager.
Build a deploy checklist with rollback triggers for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-041</code> - create a load-test sketch with success criteria (click to expand)</summary>

```text
Act as a senior systems administrator.
Create a load-test sketch with success criteria for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-042</code> - create a compose stack for local dev with healthchecks (click to expand)</summary>

```text
Act as an expert CI engineer.
Create a compose stack for local dev with healthchecks for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-043</code> - design a secrets-rotation procedure (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Design a secrets-rotation procedure for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-044</code> - write a Dockerfile that is small, cached, and non-root (click to expand)</summary>

```text
Act as an expert SRE.
Write a Dockerfile that is small, cached, and non-root for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-045</code> - write a Makefile that new hires understand (click to expand)</summary>

```text
Act as a senior platform engineer.
Write a Makefile that new hires understand for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-046</code> - debug a failing CI pipeline from logs with a fix plan (click to expand)</summary>

```text
Act as a release manager.
Debug a failing CI pipeline from logs with a fix plan for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-047</code> - build a canary rollout plan with metrics (click to expand)</summary>

```text
Act as a senior systems administrator.
Build a canary rollout plan with metrics for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-048</code> - create a post-deploy smoke-test script plan (click to expand)</summary>

```text
Act as an expert CI engineer.
Create a post-deploy smoke-test script plan for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-049</code> - create a runbook for disk-pressure alerts (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Create a runbook for disk-pressure alerts for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-050</code> - design a cache-invalidation plan (click to expand)</summary>

```text
Act as an expert SRE.
Design a cache-invalidation plan for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-051</code> - design a backup test with restore proof (click to expand)</summary>

```text
Act as a senior platform engineer.
Design a backup test with restore proof for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-052</code> - write a cron-plus-monitor pair with alerts (click to expand)</summary>

```text
Act as a release manager.
Write a cron-plus-monitor pair with alerts for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-053</code> - write a log-grep recipe for a 500-spike (click to expand)</summary>

```text
Act as a senior systems administrator.
Write a log-grep recipe for a 500-spike for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-054</code> - build an incident timeline template (click to expand)</summary>

```text
Act as an expert CI engineer.
Build an incident timeline template for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-055</code> - build a deploy checklist with rollback triggers (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Build a deploy checklist with rollback triggers for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-056</code> - create a load-test sketch with success criteria (click to expand)</summary>

```text
Act as an expert SRE.
Create a load-test sketch with success criteria for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-057</code> - create a compose stack for local dev with healthchecks (click to expand)</summary>

```text
Act as a senior platform engineer.
Create a compose stack for local dev with healthchecks for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-058</code> - design a secrets-rotation procedure (click to expand)</summary>

```text
Act as a release manager.
Design a secrets-rotation procedure for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-059</code> - write a Dockerfile that is small, cached, and non-root (click to expand)</summary>

```text
Act as a senior systems administrator.
Write a Dockerfile that is small, cached, and non-root for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-060</code> - write a Makefile that new hires understand (click to expand)</summary>

```text
Act as an expert CI engineer.
Write a Makefile that new hires understand for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-061</code> - debug a failing CI pipeline from logs with a fix plan (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Debug a failing CI pipeline from logs with a fix plan for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-062</code> - build a canary rollout plan with metrics (click to expand)</summary>

```text
Act as an expert SRE.
Build a canary rollout plan with metrics for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-063</code> - create a post-deploy smoke-test script plan (click to expand)</summary>

```text
Act as a senior platform engineer.
Create a post-deploy smoke-test script plan for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-064</code> - create a runbook for disk-pressure alerts (click to expand)</summary>

```text
Act as a release manager.
Create a runbook for disk-pressure alerts for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-065</code> - design a cache-invalidation plan (click to expand)</summary>

```text
Act as a senior systems administrator.
Design a cache-invalidation plan for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-066</code> - design a backup test with restore proof (click to expand)</summary>

```text
Act as an expert CI engineer.
Design a backup test with restore proof for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-067</code> - write a cron-plus-monitor pair with alerts (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Write a cron-plus-monitor pair with alerts for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-068</code> - write a log-grep recipe for a 500-spike (click to expand)</summary>

```text
Act as an expert SRE.
Write a log-grep recipe for a 500-spike for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-069</code> - build an incident timeline template (click to expand)</summary>

```text
Act as a senior platform engineer.
Build an incident timeline template for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-070</code> - build a deploy checklist with rollback triggers (click to expand)</summary>

```text
Act as a release manager.
Build a deploy checklist with rollback triggers for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-071</code> - create a load-test sketch with success criteria (click to expand)</summary>

```text
Act as a senior systems administrator.
Create a load-test sketch with success criteria for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-072</code> - create a compose stack for local dev with healthchecks (click to expand)</summary>

```text
Act as an expert CI engineer.
Create a compose stack for local dev with healthchecks for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-073</code> - design a secrets-rotation procedure (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Design a secrets-rotation procedure for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-074</code> - write a Dockerfile that is small, cached, and non-root (click to expand)</summary>

```text
Act as an expert SRE.
Write a Dockerfile that is small, cached, and non-root for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-075</code> - write a Makefile that new hires understand (click to expand)</summary>

```text
Act as a senior platform engineer.
Write a Makefile that new hires understand for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-076</code> - debug a failing CI pipeline from logs with a fix plan (click to expand)</summary>

```text
Act as a release manager.
Debug a failing CI pipeline from logs with a fix plan for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-077</code> - build a canary rollout plan with metrics (click to expand)</summary>

```text
Act as a senior systems administrator.
Build a canary rollout plan with metrics for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-078</code> - create a post-deploy smoke-test script plan (click to expand)</summary>

```text
Act as an expert CI engineer.
Create a post-deploy smoke-test script plan for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-079</code> - create a runbook for disk-pressure alerts (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Create a runbook for disk-pressure alerts for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-080</code> - design a cache-invalidation plan (click to expand)</summary>

```text
Act as an expert SRE.
Design a cache-invalidation plan for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-081</code> - design a backup test with restore proof (click to expand)</summary>

```text
Act as a senior platform engineer.
Design a backup test with restore proof for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-082</code> - write a cron-plus-monitor pair with alerts (click to expand)</summary>

```text
Act as a release manager.
Write a cron-plus-monitor pair with alerts for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-083</code> - write a log-grep recipe for a 500-spike (click to expand)</summary>

```text
Act as a senior systems administrator.
Write a log-grep recipe for a 500-spike for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-084</code> - build an incident timeline template (click to expand)</summary>

```text
Act as an expert CI engineer.
Build an incident timeline template for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-085</code> - build a deploy checklist with rollback triggers (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Build a deploy checklist with rollback triggers for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-086</code> - create a load-test sketch with success criteria (click to expand)</summary>

```text
Act as an expert SRE.
Create a load-test sketch with success criteria for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-087</code> - create a compose stack for local dev with healthchecks (click to expand)</summary>

```text
Act as a senior platform engineer.
Create a compose stack for local dev with healthchecks for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-088</code> - design a secrets-rotation procedure (click to expand)</summary>

```text
Act as a release manager.
Design a secrets-rotation procedure for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-089</code> - write a Dockerfile that is small, cached, and non-root (click to expand)</summary>

```text
Act as a senior systems administrator.
Write a Dockerfile that is small, cached, and non-root for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-090</code> - write a Makefile that new hires understand (click to expand)</summary>

```text
Act as an expert CI engineer.
Write a Makefile that new hires understand for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-091</code> - debug a failing CI pipeline from logs with a fix plan (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Debug a failing CI pipeline from logs with a fix plan for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-092</code> - build a canary rollout plan with metrics (click to expand)</summary>

```text
Act as an expert SRE.
Build a canary rollout plan with metrics for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-093</code> - create a post-deploy smoke-test script plan (click to expand)</summary>

```text
Act as a senior platform engineer.
Create a post-deploy smoke-test script plan for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-094</code> - create a runbook for disk-pressure alerts (click to expand)</summary>

```text
Act as a release manager.
Create a runbook for disk-pressure alerts for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-095</code> - design a cache-invalidation plan (click to expand)</summary>

```text
Act as a senior systems administrator.
Design a cache-invalidation plan for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-096</code> - design a backup test with restore proof (click to expand)</summary>

```text
Act as an expert CI engineer.
Design a backup test with restore proof for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-097</code> - write a cron-plus-monitor pair with alerts (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Write a cron-plus-monitor pair with alerts for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-098</code> - write a log-grep recipe for a 500-spike (click to expand)</summary>

```text
Act as an expert SRE.
Write a log-grep recipe for a 500-spike for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-099</code> - build an incident timeline template (click to expand)</summary>

```text
Act as a senior platform engineer.
Build an incident timeline template for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-100</code> - build a deploy checklist with rollback triggers (click to expand)</summary>

```text
Act as a release manager.
Build a deploy checklist with rollback triggers for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-101</code> - create a load-test sketch with success criteria (click to expand)</summary>

```text
Act as a senior systems administrator.
Create a load-test sketch with success criteria for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-102</code> - create a compose stack for local dev with healthchecks (click to expand)</summary>

```text
Act as an expert CI engineer.
Create a compose stack for local dev with healthchecks for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-103</code> - design a secrets-rotation procedure (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Design a secrets-rotation procedure for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-104</code> - write a Dockerfile that is small, cached, and non-root (click to expand)</summary>

```text
Act as an expert SRE.
Write a Dockerfile that is small, cached, and non-root for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-105</code> - write a Makefile that new hires understand (click to expand)</summary>

```text
Act as a senior platform engineer.
Write a Makefile that new hires understand for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-106</code> - debug a failing CI pipeline from logs with a fix plan (click to expand)</summary>

```text
Act as a release manager.
Debug a failing CI pipeline from logs with a fix plan for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-107</code> - build a canary rollout plan with metrics (click to expand)</summary>

```text
Act as a senior systems administrator.
Build a canary rollout plan with metrics for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-108</code> - create a post-deploy smoke-test script plan (click to expand)</summary>

```text
Act as an expert CI engineer.
Create a post-deploy smoke-test script plan for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-109</code> - create a runbook for disk-pressure alerts (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Create a runbook for disk-pressure alerts for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-110</code> - design a cache-invalidation plan (click to expand)</summary>

```text
Act as an expert SRE.
Design a cache-invalidation plan for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-111</code> - design a backup test with restore proof (click to expand)</summary>

```text
Act as a senior platform engineer.
Design a backup test with restore proof for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-112</code> - write a cron-plus-monitor pair with alerts (click to expand)</summary>

```text
Act as a release manager.
Write a cron-plus-monitor pair with alerts for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-113</code> - write a log-grep recipe for a 500-spike (click to expand)</summary>

```text
Act as a senior systems administrator.
Write a log-grep recipe for a 500-spike for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-114</code> - build an incident timeline template (click to expand)</summary>

```text
Act as an expert CI engineer.
Build an incident timeline template for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-115</code> - build a deploy checklist with rollback triggers (click to expand)</summary>

```text
Act as a senior DevOps engineer.
Build a deploy checklist with rollback triggers for AWS.
The intended result is a step runbook with commands.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-116</code> - create a load-test sketch with success criteria (click to expand)</summary>

```text
Act as an expert SRE.
Create a load-test sketch with success criteria for an on-prem cluster.
The intended result is a postmortem template.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-117</code> - create a compose stack for local dev with healthchecks (click to expand)</summary>

```text
Act as a senior platform engineer.
Create a compose stack for local dev with healthchecks for a startup.
The intended result is a monitoring query set.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-118</code> - design a secrets-rotation procedure (click to expand)</summary>

```text
Act as a release manager.
Design a secrets-rotation procedure for a homelab.
The intended result is a compose/Docker spec.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
<summary><code>devops-terminal-119</code> - write a Dockerfile that is small, cached, and non-root (click to expand)</summary>

```text
Act as a senior systems administrator.
Write a Dockerfile that is small, cached, and non-root for GCP.
The intended result is a checklist with rollback.
Requirements: non-destructive first; dry-run before mutate; pin versions; note OS/shell assumptions.
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
<summary><code>devops-terminal-120</code> - write a Makefile that new hires understand (click to expand)</summary>

```text
Act as an expert CI engineer.
Write a Makefile that new hires understand for Azure.
The intended result is a fix plan with evidence.
Requirements: log commands and outputs for audit; least privilege; no hardcoded secrets.
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
