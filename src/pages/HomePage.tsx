import { Link } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const PATTERN_LINKS = [
  {
    to: "/patterns/breadcrumbs",
    title: "Breadcrumbs",
    description: "Navigation breadcrumb variants with audit trail metadata.",
  },
]

const DOC_LINKS = [
  { to: "/docs/spacing", title: "Spacing Rules", description: "Spacing roles, density, and layout rhythm." },
  { to: "/docs/text", title: "Text Hierarchy", description: "Text roles, semantic hierarchy, and usage rules." },
  { to: "/docs/design-rules", title: "Design Rules", description: "Guiding principles and component creation rules." },
  { to: "/docs/neutral-ui-specimens", title: "Neutral UI Specimens", description: "Reference implementations for calibration." },
  { to: "/docs/ai-workflow", title: "AI Workflow", description: "How AI tools should plan and implement UI features." },
  { to: "/docs/human-workflow", title: "Human Workflow", description: "How humans work with AI when building UI." },
]

export function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 border-b border-border bg-background px-6 py-8">
        <h1 className="text-2xl font-semibold text-foreground">
          R&D Pattern Lab
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Explore UI patterns, component variants, and design decision
          documentation. A single source of truth for the team.
        </p>
      </div>

      <div className="flex flex-col gap-8 p-6">
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-medium text-foreground">Patterns</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PATTERN_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="no-underline">
                <Card className="hover:bg-muted/50 transition-colors h-full">
                  <CardHeader>
                    <CardTitle>{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-medium text-foreground">
            Design Decisions
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {DOC_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="no-underline">
                <Card className="hover:bg-muted/50 transition-colors h-full">
                  <CardHeader>
                    <CardTitle>{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
