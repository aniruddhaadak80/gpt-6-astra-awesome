# 05 — Testing & verification calibration

Astra over-verifies small diffs. Scale checks to risk.

```text
Do not write tests for reversible, low-impact changes that mirror the implementation. If you verify, make tests meaningful and necessary. Re-run suites only when new failures or unresolved issues justify it. Always close with: what was tested, what failed, what was not verified, plus a Done table (complete / partial / blocked) with evidence.
```

Small fix → targeted checks. Risky refactor → full relevant suite + rollback note.
