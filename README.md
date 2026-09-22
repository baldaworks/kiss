# kiss

`kiss` is an opinionated development plugin for coding agents. Its `me` skill
pushes software work toward the smallest correct change using KISS, DRY, YAGNI,
and test-first development.

The skill requires behavioral tests before production code, rejects speculative
abstractions, and avoids tests that inspect source text or preserve removed
functionality as a tombstone.

Clients that expose namespaced plugin skills can select:

```text
kiss:me
```

The package follows the Agent Plugins 1.0 format. Installation and invocation
details are defined by the client that loads it.
