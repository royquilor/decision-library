# CLAUDE.md - Project Instructions for AI Agents

## Project Overview

This is a **Decision Library** — a React app for documenting and previewing design decisions, rules, and UI patterns.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui (radix-nova style), Lucide icons

## Component Sourcing Rule

**Before creating any new UI component, follow this order:**

1. **Check existing** — Look in `src/components/ui/` for an already installed component
2. **Check shadcn/ui** — Fetch https://ui.shadcn.com/llms.txt to see if the component exists in the shadcn/ui library
3. **Propose installation** — If available in shadcn/ui but not installed, propose installing it with `npx shadcn@latest add <name>` before writing any custom code
4. **Extend** — If a close match exists, extend it with variants rather than creating a new component
5. **Create custom** — Only as a last resort, and document the reason in `docs/`

### Currently Installed shadcn/ui Components

alert-dialog, badge, breadcrumb, button, card, combobox, dropdown-menu, field, input-group, input, label, select, separator, sheet, sidebar, skeleton, tabs, textarea, tooltip

### Install Command

```bash
npx shadcn@latest add <component-name>
```

## Key Paths

- `src/components/ui/` — shadcn/ui components
- `src/components/` — custom components
- `src/pages/` — page components
- `src/lib/utils.ts` — `cn()` utility for Tailwind class merging
- `docs/` — design decision documentation
- `components.json` — shadcn/ui configuration

## Design Rules

- Follow rules in `docs/design-decisions-design-rules.md`
- Reuse over creation — do not invent new components or spacing patterns
- Spacing is defined by purpose, not arbitrary values
- Text styles are chosen by semantic role, not aesthetics
- Document any exceptions or new component decisions

## Code Conventions

- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Use `@/` path alias for imports
- Use Lucide icons via `lucide-react`
