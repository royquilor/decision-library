import * as React from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const panels = [
  {
    id: "overview",
    title: "Project Overview",
    content:
      "This project uses a modular architecture with shared design tokens. All spacing follows the 4px base grid defined in spacing.md.",
  },
  {
    id: "constraints",
    title: "Design Constraints",
    content:
      "Components must not introduce custom spacing values. Text hierarchy follows semantic roles, not arbitrary font sizes.",
  },
  {
    id: "notes",
    title: "Implementation Notes",
    content:
      "All UI is built with shadcn/ui primitives. New components require justification and should be documented in the decision log.",
  },
]

/**
 * Accordion-style Collapsible
 *
 * Stacked collapsible panels where only one can be open at a time.
 * Opening a panel automatically closes the previously open one.
 */
export function CollapsibleVariantC() {
  const [openId, setOpenId] = React.useState<string | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {panels.map((panel) => (
        <Collapsible
          key={panel.id}
          open={openId === panel.id}
          onOpenChange={(isOpen) =>
            setOpenId(isOpen ? panel.id : null)
          }
        >
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
