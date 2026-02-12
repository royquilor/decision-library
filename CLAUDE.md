# CLAUDE.md - Project Instructions for AI Agents

## Project Overview

This is a **Decision Library** — a React app for documenting and previewing design decisions, rules, and UI patterns.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui (radix-nova style), Lucide icons

## Component Sourcing Rule

**Before creating any new UI component, follow this order:**

1. **Search the codebase** — Search for existing components (look for `components/`, `ui/`, `shared/`, or equivalent directories relative to the project root)
2. **Check shadcn/ui** — If `components.json` exists (confirming shadcn/ui is configured), fetch https://ui.shadcn.com/llms.txt to see if the component is available
3. **Propose installation** — If available in shadcn/ui but not installed, propose installing it with `npx shadcn@latest add <name>` before writing any custom code
4. **Extend** — If a close match exists, extend it with variants rather than creating a new component
5. **Create custom** — Only as a last resort, and document the reason

### How to discover existing components

- Look for `components.json` to confirm shadcn/ui is configured and find the UI component path
- Search for directories named `components`, `ui`, `shared`, or `common`
- Check `package.json` for component libraries already installed (e.g. `radix-ui`, `@headlessui`, `@base-ui`)

## Key Paths

- `src/components/ui/` — shadcn/ui components
- `src/components/` — custom components
- `src/pages/` — page components
- `src/lib/utils.ts` — `cn()` utility for Tailwind class merging
- `docs/` — design decision documentation
- `components.json` — shadcn/ui configuration

## Design Rules

**When creating or modifying UI components, read these files first:**
- `docs/design-rules.md` — component sourcing, creation rules, and guiding principles
- `docs/text.md` — text hierarchy, roles, and usage rules
- `docs/spacing.md` — spacing rules, purpose-based values, and relationships

Key principles (details in the files above):
- Reuse over creation — do not invent new components or spacing patterns
- Spacing is defined by purpose, not arbitrary values
- Text styles are chosen by semantic role, not aesthetics
- Document any exceptions or new component decisions in `decision-log/`

## Code Conventions

- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Use `@/` path alias for imports
- Use Lucide icons via `lucide-react`
