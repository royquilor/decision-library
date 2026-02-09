import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

/**
 * AppShell - Global frame shared across all Neutral UI Specimens
 * 
 * Provides:
 * - Sidebar (left): Persistent vertical navigation using shadcn sidebar component
 * - Topbar (top): Global actions and status
 * - Main content area: Scrollable content area
 * 
 * Spacing:
 * - Uses container padding for sidebar and topbar
 * - Main content area uses section spacing for header area
 * 
 * Uses shadcn sidebar component for proper sidebar functionality including:
 * - Collapsible sidebar
 * - Mobile responsive behavior
 * - Keyboard shortcuts (Cmd/Ctrl + B)
 */
type Route = "dashboard" | "component-examples" | "examples"

interface AppShellProps {
  children: React.ReactNode
  currentRoute: Route
  onNavigate: (route: Route) => void
}

export function AppShell({ children, currentRoute, onNavigate }: AppShellProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        {/* Sidebar header */}
        <SidebarHeader>
          <div className="flex h-16 items-center px-2">
            <span className="text-base font-medium text-sidebar-foreground">
              Design Decisions
            </span>
          </div>
        </SidebarHeader>

        {/* Sidebar navigation content */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Navigation items - using stack spacing for list items */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={currentRoute === "dashboard"}
                    onClick={() => onNavigate("dashboard")}
                  >
                    Dashboard
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={currentRoute === "component-examples"}
                    onClick={() => onNavigate("component-examples")}
                  >
                    Component Examples
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={currentRoute === "examples"}
                    onClick={() => onNavigate("examples")}
                  >
                    Examples
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Sidebar footer - empty for now */}
        <SidebarFooter />
        
        {/* Sidebar rail for resizing */}
        <SidebarRail />
      </Sidebar>

      {/* Main content area with topbar */}
      <SidebarInset>
        {/* Topbar - Fixed height, global actions */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
          <div className="flex items-center gap-4">
            {/* Sidebar trigger button */}
            <SidebarTrigger />
            {/* Topbar content - using inline spacing for related elements */}
            <span className="text-sm text-muted-foreground">
              Neutral UI Specimens
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* Topbar actions */}
            <button className="text-sm text-muted-foreground hover:text-foreground">
              Actions
            </button>
          </div>
        </header>

        {/* Main content - scrollable */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
