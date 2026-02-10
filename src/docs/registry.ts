export interface DocDefinition {
  slug: string
  title: string
  filename: string
}

export const docs: DocDefinition[] = [
  { slug: "spacing", title: "Spacing Rules", filename: "spacing.md" },
  { slug: "text", title: "Text Hierarchy", filename: "text.md" },
  { slug: "design-rules", title: "Design Rules", filename: "design-rules.md" },
  {
    slug: "neutral-ui-specimens",
    title: "Neutral UI Specimens",
    filename: "neutral-ui-specimens.md",
  },
  { slug: "ai-workflow", title: "AI Workflow", filename: "ai-workflow.md" },
  {
    slug: "human-workflow",
    title: "Human Workflow",
    filename: "human-workflow.md",
  },
]

// Load all markdown files at build time
const markdownFiles = import.meta.glob<string>("./*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

export function getDocBySlug(
  slug: string
): { meta: DocDefinition; content: string } | undefined {
  const meta = docs.find((d) => d.slug === slug)
  if (!meta) return undefined
  const content = markdownFiles[`./${meta.filename}`]
  if (!content) return undefined
  return { meta, content }
}
