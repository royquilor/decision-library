# 0003: Initial architecture and workflow decisions

**Date:** 2025-02-11
**Status:** Accepted

## Context

These are the foundational decisions made when building the Decision Library. They define the workflow, viewing experience, technical patterns, and conventions that shape the product.

## Decisions

### Workflow

Dev prompts AI in Cursor within this project. AI generates variant files directly into the codebase following the design-decision docs. The app is deployed so the team can review.

**Why:** Keeps the loop tight — AI generates, the app reflects changes immediately after deploy. No separate tooling or manual copy steps to get variants visible.

### Variant Viewing

Each pattern has a detail page with two sections:
1. **Isolated variants** — stacked vertically, each with preview/code tabs
2. **In-context preview** — a dropdown selector showing the chosen variant inside a simplified app shell

**Why:** Stakeholders need both views. Isolated for comparing variants side-by-side. In-context for understanding how a component sits within the real app layout.

### Preview + Code Tabs

Each variant has a Preview tab (live render) and a Code tab (full source file with syntax highlighting and copy button). Code is read from the actual source file at build time.

**Why:** Code tab shows the real source — always in sync, no separate curated snippets to maintain. Full file shown (imports, hooks, everything) so devs can copy the whole thing.

### Audit Trail Metadata

Each variant shows full audit trail — name, description, rationale, trade-offs, which design decisions were followed, which existing components were reused, and flagged violations.

**Why:** PMs and designers need to understand **why** a variant exists, not just what it looks like. The component reuse list makes the `reuse > extend > create` philosophy visible and reviewable.

### Component Reuse Enforcement

Show which existing shadcn/ui components each variant uses. Flag when variants introduce custom components that could reuse existing ones.

**Why:** The core problem is AI generating one-off components. Making reuse visible and flagging violations keeps the team honest about the `reuse > extend > create` hierarchy.

### Sidebar Navigation

Grouped by type — Overview, Components, Layouts, Design Decisions.

**Why:** As the library grows, flat lists become unnavigable. Groups help the team find what they need.

### URL Routing

React Router with shareable URLs (e.g. `/patterns/breadcrumbs`, `/docs/spacing`).

**Why:** The team accesses this via a deployed URL. Stakeholders need to share direct links to specific patterns in Slack, meetings, and PRs.

### Dark Mode

Global toggle in the header. Persists via localStorage.

**Why:** CSS tokens for dark mode already existed. A global toggle lets the team see how variants look in both themes without any extra work per variant.

### Design Decision Docs in App

Render the markdown files (spacing.md, text.md, etc.) as browsable pages inside the app.

**Why:** If this is the single source of truth, the rules should be readable alongside the patterns. Team members shouldn't need to open a separate repo or editor to read the design decisions.

### Pattern File Convention

`src/patterns/[name]/variant-a.tsx`, `variant-b.tsx`, etc. Just variant files — no config files needed per pattern.

**Why:** Lowest friction for AI generation. The pattern registry in `src/patterns/registry.ts` handles metadata and wiring.

### Pattern Registry

Manual TypeScript registry (`src/patterns/registry.ts`) for MVP. Auto-discovery planned for later.

**Why:** Auto-discovery requires a Vite plugin or build script — added complexity for MVP. A manual registry is simpler to start.

### AI-Generated Metadata

AI generates everything — variant code AND all metadata (name, description, rationale, trade-offs, components used, design decisions followed).

**Why:** Speed. The dev reviews and edits the AI output, but the AI drafts it all. This keeps the feedback loop fast and ensures metadata is present from the start.

### Deployment

Static site on Vercel/Netlify.

**Why:** The team needs to access it via URL. Static deploy is zero-cost, auto-updates on push, and requires no backend.

### App Name: "Decision Library"

**Why:** Emphasizes that this is a library of design *decisions* — the rules, rationale, and variants that guide UI work.

## Trade-offs

- **Pro:** Tight AI-to-review loop with minimal manual steps
- **Pro:** Real source code always in sync with what's displayed
- **Pro:** Full audit metadata makes decisions transparent and reviewable
- **Con:** Manual registry requires updating when adding patterns (auto-discovery planned)
- **Con:** Global dark mode toggle — no per-preview control yet
