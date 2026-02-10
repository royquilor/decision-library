import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { getDocBySlug } from "@/docs/registry"

export function DesignDecisionPage() {
  const { slug } = useParams<{ slug: string }>()
  const doc = getDocBySlug(slug ?? "")

  if (!doc) {
    return (
      <div className="p-6 text-muted-foreground">Document not found.</div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 border-b border-border bg-background px-6 py-8">
        <h1 className="text-2xl font-semibold text-foreground">
          {doc.meta.title}
        </h1>
      </div>
      <div className="p-6">
        <article className="markdown-prose max-w-none">
          <ReactMarkdown>{doc.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  )
}
