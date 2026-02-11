import * as React from "react"
import { useParams } from "react-router-dom"
import { getPatternBySlug } from "@/patterns/registry"
import { PreviewCodePanel } from "@/components/PreviewCodePanel"
import { SimplifiedAppShell } from "@/components/SimplifiedAppShell"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PatternDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const pattern = getPatternBySlug(slug ?? "")
  const [selectedVariantId, setSelectedVariantId] = React.useState<string>("")

  React.useEffect(() => {
    if (pattern?.variants[0]) {
      setSelectedVariantId(pattern.variants[0].id)
    }
  }, [pattern])

  if (!pattern) {
    return (
      <div className="p-6 text-muted-foreground">Pattern not found.</div>
    )
  }

  const selectedVariant = pattern.variants.find(
    (v) => v.id === selectedVariantId
  )

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-border bg-background px-6 py-8">
        <h1 className="text-2xl font-semibold text-foreground">
          {pattern.name}
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          {pattern.description}
        </p>
      </div>

      <div className="flex flex-col gap-8 p-6">
        {/* Isolated Variants */}
        {pattern.variants.map((variant) => (
          <section key={variant.id} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-foreground">
                {variant.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {variant.description}
              </p>
            </div>

            <PreviewCodePanel
              preview={<variant.component />}
              code={variant.sourceCode}
            />

            {/* Audit trail — collapsed by default (progressive disclosure) */}
            <Collapsible defaultOpen={false}>
              <Card>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer select-none">
                    <div className="flex items-center justify-between">
                      <CardTitle>Audit Trail</CardTitle>
                      <ChevronRight className="size-4 text-muted-foreground transition-transform duration-200 [[data-state=open]_&]:rotate-90" />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Rationale</span>
                      <p className="text-sm text-muted-foreground">
                        {variant.metadata.rationale}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Trade-offs</span>
                      <ul className="list-disc pl-4 text-sm text-muted-foreground">
                        {variant.metadata.tradeOffs.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">
                        Design Decisions Followed
                      </span>
                      <ul className="list-disc pl-4 text-sm text-muted-foreground">
                        {variant.metadata.designDecisionsFollowed.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">
                        Components Reused
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {variant.metadata.componentsReused.map((c) => (
                          <Badge key={c} variant="secondary">
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {variant.metadata.flaggedViolations.length > 0 && (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-destructive">
                          Flagged Violations
                        </span>
                        <ul className="list-disc pl-4 text-sm text-destructive">
                          {variant.metadata.flaggedViolations.map((v, i) => (
                            <li key={i}>{v}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </section>
        ))}

        {/* In-Context Preview */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <h2 className="text-lg font-medium text-foreground">
              In-Context Preview
            </h2>
            <Select
              value={selectedVariantId}
              onValueChange={setSelectedVariantId}
            >
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent>
                {pattern.variants.map((v) => (
                  <SelectItem key={v.id} value={v.id}>
                    {v.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedVariant && (
            <PreviewCodePanel
              preview={
                <SimplifiedAppShell>
                  <selectedVariant.component />
                </SimplifiedAppShell>
              }
              code={selectedVariant.sourceCode}
            />
          )}
        </section>
      </div>
    </div>
  )
}
