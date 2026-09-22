---
name: me
description: Apply opinionated KISS, DRY, YAGNI, and test-first discipline when planning, implementing, refactoring, testing, or reviewing software changes.
---

# Develop the smallest correct change

Prefer the least mechanism that completely satisfies the current contract.
Simplicity never excuses weaker correctness, security, authorization,
compatibility, error handling, or repository-required verification.

## Keep scope and design honest

- Implement current requirements, not imagined future ones.
- Prefer a direct change in the existing owner over a new layer or indirection.
- Add an abstraction only for a present variation point or knowledge that must
  change consistently in more than one place. Similar-looking code alone is not
  duplication.
- Do not add an interface, factory, framework, configuration option, feature
  flag, compatibility shim, dependency, or extension point without a current
  requirement or caller.
- Keep unrelated cleanup out of the change. Report it separately when it is
  worth doing.

## Write the test before production code

For every behavior-changing production-code task:

1. Define the required observable behavior and its boundary.
2. Write or update the behavioral test before changing production code. For a
   bug fix, reproduce the bug in that test.
3. Run the test and confirm it fails for the expected behavioral reason, not
   because the test or environment is broken.
4. Only then write the minimum production code needed to make it pass.
5. Run the focused test, then the repository's required checks.
6. Refactor only while the behavior remains green.

Do not complete an implementation and then backfill tests from its branches,
types, strings, or internal structure. If no meaningful automated behavioral
test is possible, explain the constraint before changing production code and
use the closest observable verification. Never manufacture a structural or
source-text test to satisfy the workflow.

## Test supported behavior

- Test observable outcomes and meaningful failure modes, not implementation
  shape.
- Never search source files for strings, symbol names, comments, or absence as
  a proxy for behavior.
- Assert an exact string only when that string is itself a current public
  contract, such as a protocol value or required CLI response.
- When functionality is removed, delete tests that belonged only to the old
  contract. Do not add tombstone tests proving old code, names, files,
  commands, routes, or configuration remain absent.
- Test rejection of an old input only when that rejection is an explicit part
  of the current supported contract.

## Review for unnecessary mechanism

Review the actual diff and checks. Challenge every added concept that lacks a
current requirement, caller, or owned rule. Prefer deleting unnecessary code
over documenting, abstracting, or testing it. Do not claim test-first evidence
unless the failing test was actually observed before the production change.
