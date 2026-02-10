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
} from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/SiteHeader"

/**
 * AppShell - Option A: Sidebar + sticky site header
 *
 * Layout:
 * - Sticky site header (full width, top) with team + project switchers
 * - Row: Sidebar (left) + Main content (SidebarInset)
 *
 * Uses shadcn sidebar for: collapsible sidebar, mobile drawer, Cmd/Ctrl+B.
 */
type Route = "dashboard" | "component-examples" | "examples"

interface AppShellProps {
  children: React.ReactNode
  currentRoute: Route
  onNavigate: (route: Route) => void
}

export function AppShell({ children, currentRoute, onNavigate }: AppShellProps) {
  return (
    <SidebarProvider className="flex flex-col min-h-svh w-full">
      {/* Sticky site header: trigger, logo, team switcher, project switcher */}
      <SiteHeader />

      {/* Sidebar + main content row */}
      <div className="flex flex-1 min-w-0">
        <Sidebar>
          <SidebarHeader>
            <div className="flex h-16 items-center px-2">
              <span className="text-base font-medium text-sidebar-foreground">
                Design Decisions
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
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

          <SidebarFooter />
          <SidebarRail />
        </Sidebar>

        {/* Main content - scrollable */}
        <SidebarInset>
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
