# Decision Library

A deployed web app that serves as the **single source of truth** for UI design decisions, component patterns, and variant explorations. The team uses it to browse, compare, and approve UI approaches before production implementation.

This is **not** a full design system. It is an R&D tool for exploring UI variants with design decision guardrails.

## Why It Exists

- AI tools generate UI fast but inconsistently
- Developers using AI often create custom one-off components instead of reusing existing ones
- Spacing, text hierarchy, and layout decisions are implicit — relying on individual judgement
- Design decisions lived in people's heads, not in shared documents

## How It Works

1. Design decisions are documented as markdown files (spacing, text, component rules)
2. A dev prompts AI with those docs as context
3. AI generates variant components following a `reuse > extend > create` philosophy
4. Variants appear in the app with preview/code tabs and full audit metadata
5. The whole team reviews variants at a deployed URL
6. Approved code gets copy-pasted from the code tab into the production codebase

## Who Uses It

A **5-15 person cross-functional team**: designers, developers, and PMs.

- **Designers** review variants visually, compare structural approaches
- **Developers** grab copy-paste React/JSX from the code tab
- **PMs/stakeholders** scroll through variants, see trade-offs, pick preferred approaches

## Getting Started

```bash
npm install
npm run dev
```

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
│   ├── breadcrumbs/                 # Variant files (variant-a.tsx, etc.)
│   └── collapsible/                 # Variant files
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

Variant source code is loaded at build time using Vite's `import.meta.glob` with `?raw` query. The code tab always shows the real source — never out of sync, no runtime file reading needed.

### How the Simplified App Shell Works

The `SimplifiedAppShell` component is a self-contained static mockup — it does NOT use the real `SidebarProvider` context. It supports two layouts: `"header"` (children in the header area with cards below) and `"content"` (muted header above, children in the content area).

## How to Add a New Pattern

1. Create variant files in `src/patterns/[name]/variant-a.tsx`, `variant-b.tsx`, etc.
2. Each variant exports a single React component
3. Add the pattern to `src/patterns/registry.ts` with metadata
4. Add a sidebar entry in `src/layouts/AppShell.tsx` under the appropriate group
5. Add a card link in `src/pages/HomePage.tsx`
6. The route `/patterns/:slug` already handles any slug — no route changes needed

When prompting AI to generate variants, provide:
- The design decision docs (spacing.md, text.md, design-rules)
- The existing component library (search for `components/ui/`)
- The file convention (`src/patterns/[name]/variant-x.tsx`)
- The instruction to reuse existing components and document all metadata

## Design Decision Docs

These files live in `src/docs/` and are rendered in-app:

| File | What It Defines |
|---|---|
| `design-rules.md` | Guiding principles, component creation and sourcing rules |
| `spacing.md` | Spacing roles (inline, stack, section, container), density modes |
| `text.md` | Text hierarchy (page title, section heading, body, secondary, micro) |
| `neutral-ui-specimens.md` | Reference implementations for calibrating spacing and hierarchy |
| `ai-workflow.md` | How AI should plan, implement, and validate UI features |
| `human-workflow.md` | How humans work with AI, review output, and maintain decisions |

## Decision Log

Significant design and architecture decisions are documented in `decision-log/`. See `decision-log/README.md` for the format and conventions.

## Deployment

Static site on Vercel/Netlify. Zero-cost, auto-updates on push, no backend required.

## Future

- **Auto-discovery**: Scan `src/patterns/` at build time to auto-generate sidebar entries and routes
- **Voting/feedback**: In-app mechanism for team members to signal variant preferences
- **Component reuse linting**: Automated flagging of custom components that could reuse existing ones
- **Side-by-side comparison**: View two variants next to each other
- **Per-preview dark mode toggle**: Each preview independently toggleable (currently global only)
