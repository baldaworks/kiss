# kiss

`kiss` is an opinionated development plugin for coding agents. Its **KISS IT**
skill applies KISS, DRY, and YAGNI to help write simpler, clearer code: avoid
unnecessary abstractions, keep shared rules in one place, and build only what
is needed now.

The repository contains native plugin packages for Codex, Claude Code, Grok
Build, GitHub Copilot CLI, OpenCode v2, and Cursor. It also retains the portable
Agent Plugins 1.0 package at the repository root.

## Install and use

The commands below install from Git. They will provide version 0.3.0 **only
after this repository version is pushed**; the package files in a local checkout
are not a published marketplace or release.

| Agent | Install | Use |
| --- | --- | --- |
| Codex | `codex plugin marketplace add baldaworks/kiss` then `codex plugin add kiss@kiss` | `$kiss:it` |
| Claude Code | `claude plugin marketplace add baldaworks/kiss` then `claude plugin install kiss@kiss` | `/kiss:it` |
| Grok Build | `grok plugin marketplace add baldaworks/kiss`, then choose KISS IT in the Marketplace tab | `/kiss-it` |
| GitHub Copilot CLI | `copilot plugin marketplace add baldaworks/kiss` then `copilot plugin install kiss@kiss` | Ask Copilot to use the `kiss-it` skill |
| OpenCode v2 | `opencode plugin add github:baldaworks/kiss` | Ask OpenCode to load the `kiss-it` skill |
| Cursor | `agent plugin marketplace add https://github.com/baldaworks/kiss.git`, then install KISS IT from Customize or the interactive plugin marketplace | Ask Cursor to use the `kiss-it` skill |

Cursor's CLI can register a marketplace but does not expose a separate
non-interactive plugin-install command. The native package is in
`plugins/kiss`; this is not a listing in Cursor's public Marketplace.

The root `plugin.json` and `skills/it/SKILL.md` form the Agent Plugins 1.0
package. That standard does not define installation or invocation commands;
use the instructions of your Agent Plugins client. Its skill identifier is
`it`.

The packages contain one instruction skill, with no hooks, MCP servers,
subagents, or required credentials. Manifest checks and the OpenCode registration
test do not establish that a particular agent has installed or invoked the
plugin; verify the installed skill in your agent after installation.
