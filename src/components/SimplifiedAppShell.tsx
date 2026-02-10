import * as React from "react"

interface SimplifiedAppShellProps {
  children: React.ReactNode
}

/**
 * A self-contained, static mockup of the app shell layout.
 * Used for in-context previews — shows how a component looks
 * within the real app structure (sidebar + topbar + header area).
 *
 * Does NOT use SidebarProvider — completely independent from the real shell.
 */
export function SimplifiedAppShell({ children }: SimplifiedAppShellProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-border bg-background h-[480px]">
      {/* Simplified topbar */}
      <div className="flex h-10 shrink-0 items-center gap-2 border-b border-border bg-background px-3">
        <div className="h-3 w-3 rounded bg-muted" />
        <div className="h-px w-4 bg-border" />
        <div className="h-3 w-16 rounded bg-muted" />
        <div className="h-3 w-12 rounded bg-muted/60 ml-2" />
        <div className="h-3 w-12 rounded bg-muted/60" />
      </div>

      {/* Sidebar + content row */}
      <div className="flex flex-1 min-h-0">
        {/* Simplified sidebar */}
        <div className="flex w-48 shrink-0 flex-col gap-4 border-r border-border bg-sidebar p-3">
          <div className="h-3 w-20 rounded bg-muted" />
          <div className="flex flex-col gap-1.5">
            <div className="h-6 w-full rounded bg-muted/40" />
            <div className="h-6 w-full rounded bg-muted/40" />
            <div className="h-6 w-full rounded bg-sidebar-accent" />
            <div className="h-6 w-full rounded bg-muted/40" />
          </div>
          <div className="h-3 w-16 rounded bg-muted mt-2" />
          <div className="flex flex-col gap-1.5">
            <div className="h-6 w-full rounded bg-muted/40" />
            <div className="h-6 w-full rounded bg-muted/40" />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header area — variant renders here */}
          <div className="flex flex-col gap-4 border-b border-border px-6 py-6">
            {children}
            {/* Muted page title placeholder */}
            <div className="h-5 w-40 rounded bg-muted" />
            <div className="h-3 w-64 rounded bg-muted/50" />
          </div>

          {/* Muted content placeholders */}
          <div className="flex flex-col gap-4 p-6">
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 rounded-lg bg-muted/20 border border-border" />
              <div className="h-24 rounded-lg bg-muted/20 border border-border" />
              <div className="h-24 rounded-lg bg-muted/20 border border-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
