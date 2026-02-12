# CLAUDE.md Snippet — Design Rules Integration

Copy the block below into any project's `CLAUDE.md` to activate the design rules.

Assumes design docs are placed in `docs/design/`. Adjust the path if needed.

---

```markdown
## Design Rules

**When creating or modifying UI components, read these files first:**
- `docs/design/design-rules.md` — component sourcing, creation rules, and guiding principles
- `docs/design/text.md` — text hierarchy, roles, and usage rules
- `docs/design/spacing.md` — spacing rules, purpose-based values, and relationships

Key principles (details in the files above):
- Reuse over creation — do not invent new components or spacing patterns
- Spacing is defined by purpose, not arbitrary values
- Text styles are chosen by semantic role, not aesthetics
- Before creating a component, search the codebase for existing ones, then check shadcn/ui (https://ui.shadcn.com/llms.txt)
- Document any exceptions or new component decisions
```

---

## Setup steps

1. Copy `design-rules.md`, `text.md`, and `spacing.md` into `docs/design/` in the target repo
2. Paste the snippet above into the target repo's `CLAUDE.md`
3. Optionally copy `decision-log/` for tracking decisions in that repo too
