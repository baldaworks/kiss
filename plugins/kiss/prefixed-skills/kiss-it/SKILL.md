---
name: kiss-it
description: Apply KISS, DRY, and YAGNI when writing, refactoring, or reviewing code.
---

# KISS IT

## KISS

Choose the simplest clear solution that fully meets the requirements. Prefer
direct code over unnecessary layers and abstractions. Optimize for ease of
understanding, not the fewest lines. Simplify the implementation, not the
required behavior or safeguards.

## DRY

Keep shared rules in one place. Reuse existing code when it represents the same
rule. Do not merge unrelated logic merely because it looks similar; a little
duplication is better than an abstraction full of exceptions.

## YAGNI

Implement current requirements. Do not add speculative features, configuration,
or extensibility. Add them when a real need appears, not to prepare for an
imagined future.

## Meaningful tests

Test observable behavior and meaningful failure cases, not implementation
structure. For each test, identify the behavioral error it would catch; do not
add tests merely to increase their number.

Before changing behavior, use an existing test or write the smallest necessary
behavioral test. Observe the expected failure before implementing the change,
then confirm it passes. Do not backfill tests from the new implementation.
If meaningful automation is not possible, explain why and verify the behavior
directly instead of inventing a structural test.

Do not search source code for strings or symbols as a proxy for behavior.
Exact-string assertions are appropriate when the string itself is part of
supported behavior. When removing functionality, remove tests belonging only
to the old contract; do not add tests merely proving the old code stays absent.
Test rejection of old inputs only when rejection is a current requirement.
