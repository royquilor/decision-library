import { Example, ExampleWrapper } from "@/components/example"

/**
 * ExamplePage - Dedicated page for Example component
 * 
 * Displays the example.tsx component in its own page
 */
export function ExamplePage() {
  return (
    <div className="flex flex-col">
      {/* Header Area */}
      <div className="flex flex-col gap-6 border-b border-border bg-background px-6 py-8">
        <h1 className="text-2xl font-semibold text-foreground">
          Examples
        </h1>
        <p className="text-sm text-muted-foreground">
          Example component demonstrations
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <ExampleWrapper>
          <Example title="Example Component">
            <div className="text-sm text-foreground">
              This is the Example component page. The Example component provides
              a wrapper for displaying example content with proper styling.
            </div>
          </Example>
        </ExampleWrapper>
      </div>
    </div>
  )
}
