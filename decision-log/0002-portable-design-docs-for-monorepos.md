# 0002: Portable design docs with CLAUDE.md snippet for other repos

**Date:** 2025-02-11
**Status:** Accepted

## Context

The design decision docs (`design-rules.md`, `text.md`, `spacing.md`) were created for this project but are intentionally generic. We want to reuse them across other monorepo codebases that already have their own `CLAUDE.md` at the root.

The challenge: `CLAUDE.md` is automatically loaded by Claude Code at session start, but the design docs are only read when explicitly referenced. Without a clear integration path, agents in other repos won't know the design rules exist.

## Decision

Create a portable snippet (`docs/claude-md-snippet.md`) that can be pasted into any repo's `CLAUDE.md` to wire up the design rules.

The recommended structure in the target repo:

```
other-monorepo/
├── CLAUDE.md              ← paste snippet here
├── docs/
│   └── design/
│       ├── design-rules.md
│       ├── text.md
│       └── spacing.md
│   └── ...
```

The snippet instructs agents to read all 3 design docs before creating or modifying UI components. The path (`docs/design/`) is a convention — it can be adjusted per repo.

## Files changed

- `docs/claude-md-snippet.md` — reusable snippet with setup instructions

## Trade-offs

- **Pro:** Design rules can be shared across repos without maintaining separate copies of `CLAUDE.md` logic
- **Pro:** Each repo keeps its own `CLAUDE.md` for project-specific instructions — design rules are additive
- **Pro:** The `docs/design/` convention is intuitive and doesn't conflict with existing doc structures
- **Con:** Requires manual copy of doc files into each repo — no automated sync
- **Con:** If design rules evolve in one repo, other repos won't automatically get updates
