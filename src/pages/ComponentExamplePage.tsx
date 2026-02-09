import { ComponentExample } from "@/components/component-example"

/**
 * ComponentExamplePage - Dedicated page for ComponentExample component
 * 
 * Displays the component-example.tsx component in its own page
 */
export function ComponentExamplePage() {
  return (
    <div className="flex flex-col">
      {/* Header Area */}
      <div className="flex flex-col gap-6 border-b border-border bg-background px-6 py-8">
        <h1 className="text-2xl font-semibold text-foreground">
          Component Examples
        </h1>
        <p className="text-sm text-muted-foreground">
          Examples of UI components and their usage
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <ComponentExample />
      </div>
    </div>
  )
}
