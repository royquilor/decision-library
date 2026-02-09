import * as React from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

/**
 * SiteHeader - Sticky full-width site header (Option A: sidebar + sticky site header)
 *
 * Spans the entire viewport width (above the sidebar and content).
 * Contains: menu collapse trigger (left), vertical separator, logo, then breadcrumbs.
 *
 * Spacing (per spacing.md):
 * - Inline spacing (gap-2) between trigger, separator, and within logo+breadcrumbs group.
 * - Stack spacing (ml-3) after separator before logo to separate nav chrome from content.
 */
interface SiteHeaderProps {
  className?: string
  children?: React.ReactNode
}

export function SiteHeader({ className, children }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-20 flex h-14 w-full shrink-0 items-center gap-2 border-b px-4",
        className
      )}
    >
      {/* Nav chrome: trigger + separator (inline spacing) */}
      <SidebarTrigger className="-ml-1 shrink-0" />
      <Separator
        orientation="vertical"
        className="h-4 shrink-0 self-center data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
      />
      {/* Logo: stack spacing from separator, then inline spacing to breadcrumbs */}
      <span className="text-sm font-medium text-foreground ml-3 shrink-0">
        Vertesia
      </span>
      {/* Breadcrumbs or custom content (inline spacing from logo) */}
      {children ?? (
        <span className="text-sm text-muted-foreground">
          Neutral UI Specimens
        </span>
      )}
    </header>
  )
}
