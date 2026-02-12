# PRD: Design Decisions & Design Rules

## Overview

This document defines the **design decisions, rules, and constraints** that guide how UI is designed and implemented in this product.

Its purpose is to:
- Create a shared design language between designers, developers, and AI tools
- Reduce subjective or ad-hoc UI decisions
- Improve consistency, speed, and confidence when building UI
- Act as a reference point for future decisions

This is **not** a full design system.
It is a **set of intentional design contracts**.

---

## Problem Statement

Currently:
- Spacing, text hierarchy, and layout decisions are implicit
- UI details rely on individual judgement or “vibes”
- AI tools (e.g. Claude) are fast but inconsistent at details
- Developers may unintentionally create new components or spacing patterns

This leads to:
- Inconsistent UI
- Repeated debates
- Slower iteration
- Fragile AI-assisted workflows

---

## Goals

- Define clear, human-readable design rules
- Separate **design intent** from **implementation details**
- Enable AI to build UI without inventing new patterns
- Make design decisions explainable and repeatable
- Support reuse over novelty

---

## Non-Goals

- This is not a pixel-perfect design system
- This does not define every component or token
- This does not replace design judgement
- This is not a complete Figma or Tailwind spec

---

## Guiding Principles

1. **Reuse over creation**  
   Existing components should be reused whenever possible.

2. **Relationships over numbers**  
   Spacing and hierarchy communicate meaning, not just size.

3. **Explicit over implicit**  
   If a rule matters, it should be written down.

4. **Design as contracts**  
   Design decisions behave like APIs: they define what is allowed and why.

5. **AI follows rules, humans provide taste**  
   AI is responsible for speed; humans are responsible for judgement.

---

## Structure

This PRD is supported by focused documents, each covering a specific decision domain:

- `design-decisions.md` (this file)
- `text.md` – text hierarchy and usage
- `spacing.md` – spacing rules and reference examples

Each document defines **intent, rules, and examples**, not just values.

---

## Design Decision Domains

### 1. Text (Text API)

Text hierarchy defines:
- Visual importance
- Reading order
- Emphasis and grouping

Rules:
- Text styles are chosen by **semantic role**, not aesthetics
- New text styles should not be created without a clear need
- Hierarchy must be visible without color or decoration

Examples and guidance live in `text.md`.

---

### 2. Spacing (Spacing API)

Spacing communicates:
- Relationship between elements
- Grouping vs separation
- Calm vs density

Rules:
- Spacing is defined by **purpose**, not arbitrary values
- Components must use predefined spacing roles
- Custom spacing values should not be introduced without justification

Examples and a neutral reference layout live in `spacing.md`.

---

## Neutral UI Specimen

A small, neutral UI layout is used as a **reference frame** to test and explain spacing and hierarchy decisions.

It includes:
- Page title
- Section heading
- Body text
- Form field
- Button
- Card
- List item

Purpose:
- Make spacing and hierarchy visible
- Remove product-specific bias
- Provide a calibration point for humans and AI

This specimen is intentionally simple and reused as a reference.

---

## Component Creation Rules

Before creating a new component:
1. **Search the codebase** for existing components (search for common UI directories like `components/`, `ui/`, `shared/`, or framework-specific locations)
2. If not found locally, **check shadcn/ui** (https://ui.shadcn.com/llms.txt) — if available, install it via `npx shadcn@latest add <name>` before building custom
3. Can an existing component be extended without breaking its intent?
4. Is the difference semantic or purely visual?

### Component Sourcing Priority

When a UI component is needed, follow this order:

1. **Search & reuse** — Search the current project for existing components (look for `components/`, `ui/`, or equivalent directories relative to the project root)
2. **Install from shadcn/ui** — If the project uses shadcn/ui (check for `components.json`), install the component from the library
3. **Extend** — If a close match exists, extend it with variants rather than creating a new component
4. **Create custom** — Only as a last resort, and document the reason

### How to discover existing components

AI agents and developers should search rather than assume paths:
- Look for `components.json` to confirm shadcn/ui is configured and find the UI component path
- Search for directories named `components`, `ui`, `shared`, or `common`
- Search for file patterns like `*.tsx`, `*.vue`, `*.svelte` in those directories
- Check `package.json` for component libraries already installed (e.g. `radix-ui`, `@headlessui`, `@base-ui`)

This approach works across monorepos and different project structures — no hardcoded paths required.

New components should only be created when:
- The use case is fundamentally different
- No shadcn/ui component covers the need
- Reuse would cause confusion or misuse

Component decisions should be documented briefly when unclear.

---

## Documentation & Decision Logging

Significant design decisions should be documented when:
- A rule is bent or extended
- A new component is introduced
- A spacing or hierarchy exception is made

Documentation should include:
- What decision was made
- Why it was made
- Any trade-offs considered

This creates shared context for:
- Future contributors
- AI tools
- Future design iterations

---

## Success Metrics

- Reduced UI inconsistencies
- Faster AI-assisted UI implementation
- Fewer debates about spacing and hierarchy
- Increased reuse of existing components
- Clearer communication between design and development

---

## Open Questions

- Which rules should eventually be enforced via linting?
- How strict should AI enforcement be vs human override?
- When does this evolve into a more formal design system?

These will be revisited as the product evolves.

---

## Summary

This document exists to make design decisions:
- Visible
- Explainable
- Reusable
- Enforceable (when appropriate)

It enables speed **without sacrificing quality**, especially in AI-assisted workflows.
