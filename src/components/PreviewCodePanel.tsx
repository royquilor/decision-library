import * as React from "react"
import Prism from "prismjs"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/themes/prism-tomorrow.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"

interface PreviewCodePanelProps {
  preview: React.ReactNode
  code: string
  className?: string
}

export function PreviewCodePanel({
  preview,
  code,
  className,
}: PreviewCodePanelProps) {
  const [copied, setCopied] = React.useState(false)

  const highlightedCode = React.useMemo(
    () => Prism.highlight(code, Prism.languages.tsx, "tsx"),
    [code]
  )

  const handleCopy = React.useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <Tabs defaultValue="preview" className={className}>
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="rounded-lg border border-border p-6 bg-background">
          {preview}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div className="relative rounded-lg border border-border overflow-hidden">
          <Button
            variant="ghost"
            size="icon-sm"
            className="absolute right-2 top-2 z-10 text-muted-foreground hover:text-foreground"
            onClick={handleCopy}
            aria-label="Copy code"
          >
            {copied ? (
              <CheckIcon className="size-4" />
            ) : (
              <CopyIcon className="size-4" />
            )}
          </Button>
          <pre className="overflow-x-auto p-4 text-sm !m-0 !bg-[#2d2d2d]">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  )
}
