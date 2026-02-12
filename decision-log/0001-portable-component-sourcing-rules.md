# 0001: Make component sourcing rules portable across codebases

**Date:** 2025-02-11
**Status:** Accepted

## Context

The component creation rules in `docs/design-rules.md` and `CLAUDE.md` originally hardcoded paths like `src/components/ui/` and listed specific installed components. This made the rules tightly coupled to this project's structure.

We plan to reuse these design decision documents in other monorepo codebases that have different directory structures and their own component sets.

## Decision

Replace all hardcoded component paths and static component lists with **search-based discovery**:

- Search for component directories (`components/`, `ui/`, `shared/`, `common/`) relative to the project root
- Check for `components.json` to detect shadcn/ui configuration and locate the UI component path
- Check `package.json` for already-installed component libraries
- Fetch `https://ui.shadcn.com/llms.txt` to check shadcn/ui availability

This applies to AI agents and human developers alike — as long as you're in the right project directory, the rules work.

## Files changed

- `src/docs/design-rules.md` — rendered doc page
- `docs/design-rules.md` — reference doc
- `CLAUDE.md` — AI agent instructions

## Trade-offs

- **Pro:** Rules are now reusable across any project structure
- **Pro:** No need to maintain a static list of installed components (it was already out of date after adding `collapsible`)
- **Con:** Agents must do a search step instead of checking a known path — slightly more work per session
- **Con:** Less prescriptive — new developers don't see an explicit component inventory at a glance
