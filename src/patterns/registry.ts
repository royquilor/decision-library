import type { ComponentType } from "react"

import { BreadcrumbVariantA } from "./breadcrumbs/variant-a"
import { BreadcrumbVariantB } from "./breadcrumbs/variant-b"
import { BreadcrumbVariantC } from "./breadcrumbs/variant-c"
import { CollapsibleVariantA } from "./collapsible/variant-a"
import { CollapsibleVariantB } from "./collapsible/variant-b"
import { CollapsibleVariantC } from "./collapsible/variant-c"

export interface PatternVariant {
  id: string
  name: string
  description: string
  component: ComponentType
  sourceCode: string
  metadata: {
    rationale: string
    tradeOffs: string[]
    designDecisionsFollowed: string[]
    componentsReused: string[]
    flaggedViolations: string[]
  }
}

export interface PatternDefinition {
  id: string
  slug: string
  name: string
  description: string
  category: "components" | "layouts" | "patterns"
  variants: PatternVariant[]
}

// Load source code at build time
const breadcrumbSources = import.meta.glob<string>(
  "./breadcrumbs/variant-*.tsx",
  { query: "?raw", import: "default", eager: true }
)

const collapsibleSources = import.meta.glob<string>(
  "./collapsible/variant-*.tsx",
  { query: "?raw", import: "default", eager: true }
)

export const patterns: PatternDefinition[] = [
  {
    id: "breadcrumbs",
    slug: "breadcrumbs",
    name: "Breadcrumbs",
    description:
      "Navigation breadcrumb patterns for showing page hierarchy and location context.",
    category: "components",
    variants: [
      {
        id: "variant-a",
        name: "Simple Breadcrumb",
        description:
          "Standard breadcrumb with text links and chevron separators.",
        component: BreadcrumbVariantA,
        sourceCode: breadcrumbSources["./breadcrumbs/variant-a.tsx"] ?? "",
        metadata: {
          rationale:
            "Standard pattern for shallow navigation hierarchies (2-4 levels). Minimal visual weight, maximum clarity.",
          tradeOffs: [
            "Works well for shallow paths; becomes unwieldy for deep hierarchies",
            "Text-only links may lack visual affordance for some users",
          ],
          designDecisionsFollowed: [
            "Text: uses micro/meta text role (text-sm, muted-foreground) via Breadcrumb components",
            "Spacing: inline spacing (gap-1.5) between breadcrumb segments",
            "Components: reuses all shadcn Breadcrumb primitives — no custom components created",
          ],
          componentsReused: [
            "Breadcrumb",
            "BreadcrumbList",
            "BreadcrumbItem",
            "BreadcrumbLink",
            "BreadcrumbSeparator",
            "BreadcrumbPage",
          ],
          flaggedViolations: [],
        },
      },
      {
        id: "variant-b",
        name: "Collapsed Breadcrumb",
        description:
          "Breadcrumb with ellipsis for deep navigation paths, preserving first and last segments.",
        component: BreadcrumbVariantB,
        sourceCode: breadcrumbSources["./breadcrumbs/variant-b.tsx"] ?? "",
        metadata: {
          rationale:
            "Prevents breadcrumb from becoming too wide in deep hierarchies while preserving start and end context.",
          tradeOffs: [
            "Hides middle context; user must infer path from first and last segments",
            "Ellipsis is not interactive in this variant — hidden segments are not accessible",
          ],
          designDecisionsFollowed: [
            "Spacing: maintains consistent inline spacing despite collapsed segments",
            "Components: reuses BreadcrumbEllipsis from shadcn — no custom overflow logic",
          ],
          componentsReused: [
            "Breadcrumb",
            "BreadcrumbList",
            "BreadcrumbItem",
            "BreadcrumbLink",
            "BreadcrumbSeparator",
            "BreadcrumbPage",
            "BreadcrumbEllipsis",
          ],
          flaggedViolations: [],
        },
      },
      {
        id: "variant-c",
        name: "Dropdown Breadcrumb",
        description:
          "Breadcrumb with dropdown menu revealing collapsed segments on click.",
        component: BreadcrumbVariantC,
        sourceCode: breadcrumbSources["./breadcrumbs/variant-c.tsx"] ?? "",
        metadata: {
          rationale:
            "Full context on demand. Best for deep hierarchies where users need to navigate to any ancestor.",
          tradeOffs: [
            "Adds interaction complexity (click to reveal hidden segments)",
            "Dropdown menu requires DropdownMenu component dependency",
          ],
          designDecisionsFollowed: [
            "Components: reuses DropdownMenu from shadcn for disclosure — no custom popover",
            "Spacing: dropdown follows container padding rules from spacing.md",
            "Text: dropdown items use default text role — consistent with DropdownMenuItem styling",
          ],
          componentsReused: [
            "Breadcrumb",
            "BreadcrumbList",
            "BreadcrumbItem",
            "BreadcrumbLink",
            "BreadcrumbSeparator",
            "BreadcrumbPage",
            "BreadcrumbEllipsis",
            "DropdownMenu",
            "DropdownMenuContent",
            "DropdownMenuItem",
            "DropdownMenuTrigger",
          ],
          flaggedViolations: [],
        },
      },
    ],
  },
  {
    id: "collapsible",
    slug: "collapsible",
    name: "Collapsible",
    description:
      "Expandable and collapsible panels for progressive disclosure of content.",
    category: "components",
    variants: [
      {
        id: "variant-a",
        name: "Simple Collapsible",
        description:
          "Basic stacked collapsible panels with chevron indicator. All panels start collapsed.",
        component: CollapsibleVariantA,
        sourceCode: collapsibleSources["./collapsible/variant-a.tsx"] ?? "",
        metadata: {
          rationale:
            "Progressive disclosure reduces cognitive load. Users see headings first and expand only what they need.",
          tradeOffs: [
            "Content is hidden by default — users must click to discover it",
            "Multiple open panels can create a long page",
          ],
          designDecisionsFollowed: [
            "Components: reuses Collapsible from shadcn/ui — no custom expand/collapse logic",
            "Components: reuses Card, CardHeader, CardTitle, CardContent from shadcn/ui",
            "Spacing: gap-3 between panels for clear visual separation",
          ],
          componentsReused: [
            "Collapsible",
            "CollapsibleTrigger",
            "CollapsibleContent",
            "Card",
            "CardHeader",
            "CardTitle",
            "CardContent",
          ],
          flaggedViolations: [],
        },
      },
      {
        id: "variant-b",
        name: "Collapsible with Summary",
        description:
          "Stacked panels showing a summary line and badge when collapsed, giving context before expanding.",
        component: CollapsibleVariantB,
        sourceCode: collapsibleSources["./collapsible/variant-b.tsx"] ?? "",
        metadata: {
          rationale:
            "Summary text and badges give users enough context to decide whether to expand, reducing unnecessary clicks.",
          tradeOffs: [
            "Header area is taller due to summary text — less compact than simple variant",
            "Requires additional content (summary, badge) per panel",
          ],
          designDecisionsFollowed: [
            "Components: reuses Badge from shadcn/ui for metadata display",
            "Text: summary uses muted-foreground for secondary hierarchy",
            "Spacing: gap-1 between title and summary for tight grouping",
          ],
          componentsReused: [
            "Collapsible",
            "CollapsibleTrigger",
            "CollapsibleContent",
            "Card",
            "CardHeader",
            "CardTitle",
            "CardContent",
            "Badge",
          ],
          flaggedViolations: [],
        },
      },
      {
        id: "variant-c",
        name: "Accordion-style Collapsible",
        description:
          "Stacked panels where only one can be open at a time. Opening a panel closes the previous one.",
        component: CollapsibleVariantC,
        sourceCode: collapsibleSources["./collapsible/variant-c.tsx"] ?? "",
        metadata: {
          rationale:
            "Enforces focus on one section at a time. Prevents the page from becoming excessively long with multiple open panels.",
          tradeOffs: [
            "Users cannot compare content across panels without toggling back and forth",
            "Requires state management to coordinate open/close behavior",
          ],
          designDecisionsFollowed: [
            "Components: reuses Collapsible with controlled open state — no custom accordion primitive",
            "Spacing: consistent gap-3 between panels matches simple variant",
            "Text: same text hierarchy as simple variant — no visual differentiation needed",
          ],
          componentsReused: [
            "Collapsible",
            "CollapsibleTrigger",
            "CollapsibleContent",
            "Card",
            "CardHeader",
            "CardTitle",
            "CardContent",
          ],
          flaggedViolations: [],
        },
      },
    ],
  },
]

export function getPatternBySlug(
  slug: string
): PatternDefinition | undefined {
  return patterns.find((p) => p.slug === slug)
}
