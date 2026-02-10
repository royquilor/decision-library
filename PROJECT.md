# Design Library — Project Decisions

## What This Is

A deployed web app that serves as the **single source of truth** for UI design decisions, component patterns, and variant explorations. The team uses it to browse, compare, and approve UI approaches before production implementation.

This is **not** a full design system. It is an R&D tool for exploring UI variants with design decision guardrails.

---

## Why It Exists

### The Problem

- AI tools (Cursor, Claude) generate UI fast but inconsistently
- Developers using AI often create custom one-off components instead of reusing existing ones
- Spacing, text hierarchy, and layout decisions are implicit — relying on individual judgement
- There was no single place for the team to review and approve UI explorations
- Design decisions lived in people's heads, not in shared documents

### The Solution

A pattern library where:
1. Design decisions are documented as markdown files (spacing, text, component rules)
2. A dev prompts AI (e.g. Cursor) with those docs as context
3. AI generates variant components following a `reuse > extend > create` philosophy
4. Variants appear in the app with preview/code tabs and full audit metadata
5. The whole team reviews variants at a deployed URL
6. Approved code gets copy-pasted from the code tab into the production codebase

---

## Who Uses It

A **5-15 person cross-functional team**: designers, developers, and PMs.

- **Designers** review variants visually, compare structural approaches
- **Developers** grab copy-paste React/JSX from the code tab
- **PMs/stakeholders** scroll through variants, see trade-offs, pick preferred approaches

The adoption hook is **single source of truth** — everything (decisions, components, variants, rationale) lives in one place the team can always reference.

---

## Key Decisions Made

### Workflow

**Decision**: Dev prompts AI in Cursor within this project. AI generates variant files directly into the codebase following the design-decision docs. The app is deployed so the team can review.

**Why**: Keeps the loop tight — AI generates, the app reflects changes immediately after deploy. No separate tooling or manual copy steps to get variants visible.

### Variant Viewing

**Decision**: Each pattern has a detail page with two sections:
1. **Isolated variants** — stacked vertically, each with preview/code tabs
2. **In-context preview** — a dropdown selector showing the chosen variant inside a simplified app shell (real sidebar + topbar, muted placeholder content areas)

**Why**: Stakeholders need both views. Isolated for comparing variants side-by-side. In-context for understanding how a component sits within the real app layout. The simplified shell uses muted placeholder divs — you don't need full content to evaluate breadcrumb placement.

### Preview + Code Tabs

**Decision**: Each variant has a Preview tab (live render) and a Code tab (full source file with syntax highlighting and copy button). Code is read from the actual source file at build time.

**Why**: Code tab shows the real source — always in sync, no separate curated snippets to maintain. Full file shown (imports, hooks, everything) so devs can copy the whole thing.

### Audit Trail Metadata

**Decision**: Each variant shows full audit trail — name, description, rationale, trade-offs, which design decisions were followed, which existing components were reused, and flagged violations.

**Why**: PMs and designers need to understand **why** a variant exists, not just what it looks like. The component reuse list makes the `reuse > extend > create` philosophy visible and reviewable. Flagged violations surface when a variant introduces custom components that could have reused existing ones.

### Component Reuse Enforcement

**Decision**: Show which existing shadcn/ui components each variant uses. Flag when variants introduce custom components that could reuse existing ones.

**Why**: The core problem is AI generating one-off components. Making reuse visible and flagging violations keeps the team honest about the `reuse > extend > create` hierarchy documented in the design rules.

### Sidebar Navigation

**Decision**: Grouped by type — Overview, Components, Layouts, Design Decisions.

**Why**: As the library grows, flat lists become unnavigable. Groups help the team find what they need. Existing neutral UI specimens merged into the Layouts group rather than staying separate.

### URL Routing

**Decision**: React Router with shareable URLs (e.g. `/patterns/breadcrumbs`, `/docs/spacing`).

**Why**: The team accesses this via a deployed URL. Stakeholders need to share direct links to specific patterns in Slack, meetings, and PRs.

### Dark Mode

**Decision**: Global toggle in the header. Persists via localStorage.

**Why**: CSS tokens for dark mode already existed. A global toggle lets the team see how variants look in both themes without any extra work per variant.

### Design Decision Docs in App

**Decision**: Render the markdown files (spacing.md, text.md, etc.) as browsable pages inside the app.

**Why**: If this is the single source of truth, the rules should be readable alongside the patterns. Team members shouldn't need to open a separate repo or editor to read the design decisions.

### Pattern File Convention

**Decision**: `src/patterns/[name]/variant-a.tsx`, `variant-b.tsx`, etc. Just variant files — no config files needed per pattern.

**Why**: Lowest friction for AI generation. When prompting Cursor, you just say "create 3 variants in src/patterns/breadcrumbs/" and the AI generates files. The pattern registry in `src/patterns/registry.ts` handles metadata and wiring.

### Pattern Registry

**Decision**: Manual TypeScript registry (`src/patterns/registry.ts`) for MVP. Auto-discovery planned for later.

**Why**: Auto-discovery requires a Vite plugin or build script — added complexity for MVP. A manual registry (one file to update) is simpler to start. Once the pattern count grows, auto-discovery via `import.meta.glob` can be added.

### AI-Generated Metadata

**Decision**: AI generates everything — variant code AND all metadata (name, description, rationale, trade-offs, components used, design decisions followed).

**Why**: Speed. The dev reviews and edits the AI output, but the AI drafts it all. This keeps the feedback loop fast and ensures metadata is present from the start rather than being an afterthought.

### Deployment

**Decision**: Static site on Vercel/Netlify.

**Why**: The team needs to access it via URL. Static deploy is zero-cost, auto-updates on push, and requires no backend.

### App Name

**Decision**: "Design Library"

**Why**: Clear and descriptive. Communicates that this is a library of design patterns and decisions the team can reference.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 7 | Build tool |
| Tailwind CSS 4 | Styling |
| shadcn/ui (radix-nova) | Component primitives |
| React Router DOM | URL-based routing |
| Prism.js | Syntax highlighting in code tabs |
| react-markdown | Rendering design decision docs |
| lucide-react | Icons |
| CVA | Component variant management |

---

## Architecture

```
src/
├── App.tsx                          # Routes configuration
├── main.tsx                         # Entry point (BrowserRouter)
├── index.css                        # Theme tokens + markdown prose styles
├── layouts/
│   └── AppShell.tsx                 # Sidebar + header + Outlet
├── components/
│   ├── SiteHeader.tsx               # Header with dark mode toggle
│   ├── PreviewCodePanel.tsx         # Preview/Code tabs with Prism + copy
│   ├── SimplifiedAppShell.tsx       # Static app shell mockup for in-context preview
│   └── ui/                          # shadcn/ui components
├── pages/
│   ├── HomePage.tsx                 # Welcome + links
│   ├── PatternDetailPage.tsx        # Variant viewer (reads from registry)
│   ├── DesignDecisionPage.tsx       # Markdown doc renderer
│   └── neutral/                     # Existing specimen pages
├── patterns/
│   ├── registry.ts                  # Pattern definitions + metadata
│   └── breadcrumbs/                 # Variant files (variant-a.tsx, etc.)
├── docs/
│   ├── registry.ts                  # Doc definitions + markdown loading
│   └── *.md                         # Design decision markdown files
├── hooks/
│   ├── use-theme.ts                 # Dark mode hook
│   └── use-mobile.ts               # Mobile breakpoint detection
└── lib/
    └── utils.ts                     # cn() utility
```

### How Source Code Display Works

Variant source code is loaded at build time using Vite's `import.meta.glob` with `?raw` query. This means:
- The actual `.tsx` file content becomes a string at build time
- The code tab always shows the real source — never out of sync
- No runtime file reading needed

### How the Simplified App Shell Works

The `SimplifiedAppShell` component is a **self-contained static mockup** — it does NOT use the real `SidebarProvider` context. This avoids conflicts with the outer app shell. It renders muted placeholder rectangles for sidebar items and topbar elements, with the variant component placed in the header area.

---

## How to Add a New Pattern

1. Create variant files in `src/patterns/[name]/variant-a.tsx`, `variant-b.tsx`, etc.
2. Each variant exports a single React component
3. Add the pattern to `src/patterns/registry.ts` with metadata
4. Add a sidebar entry in `src/layouts/AppShell.tsx` under the appropriate group
5. The route `/patterns/:slug` already handles any slug — no route changes needed

When prompting AI to generate variants, provide:
- The design decision docs (spacing.md, text.md, design-rules)
- The existing component library (src/components/ui/)
- The file convention (src/patterns/[name]/variant-x.tsx)
- The instruction to reuse existing components and document all metadata

---

## Design Decision Docs (Reference)

These files live in `src/docs/` and are rendered in-app:

| File | What It Defines |
|---|---|
| `spacing.md` | Spacing roles (inline, stack, section, container), density modes |
| `text.md` | Text hierarchy (page title, section heading, body, secondary, micro) |
| `design-rules.md` | Guiding principles, component creation rules, reuse philosophy |
| `neutral-ui-specimens.md` | Reference implementations for calibrating spacing and hierarchy |
| `ai-workflow.md` | How AI should plan, implement, and validate UI features |
| `human-workflow.md` | How humans work with AI, review output, and maintain decisions |

---

## What's Not Built Yet (Future)

- **Auto-discovery**: Scan `src/patterns/` at build time to auto-generate sidebar entries and routes
- **Voting/feedback**: In-app mechanism for team members to signal variant preferences
- **Component reuse linting**: Automated flagging of custom components that could reuse existing ones
- **Side-by-side comparison**: View two variants next to each other
- **Per-preview dark mode toggle**: Each preview independently toggleable (currently global only)
