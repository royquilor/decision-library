import { Outlet, Link, useLocation } from "react-router-dom"
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

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [{ label: "Home", path: "/" }],
  },
  {
    label: "Components",
    items: [{ label: "Breadcrumbs", path: "/patterns/breadcrumbs" }],
  },
  {
    label: "Layouts",
    items: [
      { label: "Dashboard", path: "/layouts/dashboard" },
      { label: "Component Examples", path: "/layouts/components" },
      { label: "Examples", path: "/layouts/examples" },
    ],
  },
  {
    label: "Design Decisions",
    items: [
      { label: "Spacing", path: "/docs/spacing" },
      { label: "Text", path: "/docs/text" },
      { label: "Design Rules", path: "/docs/design-rules" },
      { label: "Neutral UI Specimens", path: "/docs/neutral-ui-specimens" },
      { label: "AI Workflow", path: "/docs/ai-workflow" },
      { label: "Human Workflow", path: "/docs/human-workflow" },
    ],
  },
]

export function AppShell() {
  const { pathname } = useLocation()

  return (
    <SidebarProvider className="flex flex-col min-h-svh w-full">
      <SiteHeader />

      <div className="flex flex-1 min-w-0">
        <Sidebar>
          <SidebarHeader>
            <div className="flex h-16 items-center px-2">
              <span className="text-base font-medium text-sidebar-foreground">
                R&D Pattern Lab
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            {NAV_GROUPS.map((group) => (
              <SidebarGroup key={group.label}>
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.path}
                        >
                          <Link to={item.path}>{item.label}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>

          <SidebarFooter />
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
