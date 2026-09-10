# 06 - Responses API config for Astra

Tool calling requires the Responses API. Legacy params break or degrade.

```text
Model: gpt-6-astra. Start reasoning.effort at low (gateway default) and escalate on evidence: low -> medium -> high -> xhigh -> max. Astra does not support `none`. Remove temperature, top_p, top_logprobs (and logprobs on Chat Completions). Use the Responses API for all tool calling. Support async tool calls, mid-turn steering, compaction with persisted reasoning where your harness allows it. Validate single-task cost on your workload: full-task tokens + retries, not list price.
```

Pricing frame: $10 in / $50 out per 1M; cached in $1; writes $12.50; >272K long-context multipliers; Fast 2×; Batch/Flex 50%.
