import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const panels = [
  {
    title: "Project Overview",
    content:
      "This project uses a modular architecture with shared design tokens. All spacing follows the 4px base grid defined in spacing.md.",
  },
  {
    title: "Design Constraints",
    content:
      "Components must not introduce custom spacing values. Text hierarchy follows semantic roles, not arbitrary font sizes.",
  },
  {
    title: "Implementation Notes",
    content:
      "All UI is built with shadcn/ui primitives. New components require justification and should be documented in the decision log.",
  },
]

/**
 * Simple Collapsible
 *
 * Basic stacked collapsible panels with chevron indicator.
 * All panels start collapsed for progressive disclosure.
 */
export function CollapsibleVariantA() {
  return (
    <div className="flex flex-col gap-3">
      {panels.map((panel) => (
        <Collapsible key={panel.title} defaultOpen={false}>
          <Card>
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer select-none">
                <div className="flex items-center justify-between">
                  <CardTitle>{panel.title}</CardTitle>
                  <ChevronRight className="size-4 text-muted-foreground transition-transform duration-200 [[data-state=open]_&]:rotate-90" />
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
