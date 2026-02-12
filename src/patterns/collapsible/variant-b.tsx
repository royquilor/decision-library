import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

const panels = [
  {
    title: "Project Overview",
    badge: "3 rules",
    summary: "Modular architecture with shared design tokens.",
    content:
      "This project uses a modular architecture with shared design tokens. All spacing follows the 4px base grid defined in spacing.md. Components are sourced from shadcn/ui before any custom work is considered.",
  },
  {
    title: "Design Constraints",
    badge: "2 rules",
    summary: "No custom spacing. Semantic text roles only.",
    content:
      "Components must not introduce custom spacing values. Text hierarchy follows semantic roles, not arbitrary font sizes. Exceptions must be documented with rationale.",
  },
  {
    title: "Implementation Notes",
    badge: "4 rules",
    summary: "shadcn/ui primitives with documented exceptions.",
    content:
      "All UI is built with shadcn/ui primitives. New components require justification and should be documented in the decision log. Source code is loaded at build time for preview display.",
  },
]

/**
 * Collapsible with Summary
 *
 * Stacked collapsible panels that show a summary line and badge
 * when collapsed, giving users context before expanding.
 */
export function CollapsibleVariantB() {
  return (
    <div className="flex flex-col gap-3">
      {panels.map((panel) => (
        <Collapsible key={panel.title} defaultOpen={false}>
          <Card>
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer select-none">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CardTitle>{panel.title}</CardTitle>
                      <Badge variant="secondary">{panel.badge}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {panel.summary}
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 [[data-state=open]_&]:rotate-90" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {panel.content}
                </p>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      ))}
    </div>
  )
}
