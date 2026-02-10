"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Building2Icon,
  ChevronDownIcon,
  FolderIcon,
  LayoutGridIcon,
  PlusIcon,
  FolderKanbanIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

/** Mock teams: id, label, icon for list (default: Acme Inc) */
const MOCK_TEAMS = [
  { id: "acme", label: "Acme Inc", icon: LayoutGridIcon },
  { id: "beta", label: "Beta Corp", icon: Building2Icon },
  { id: "gamma", label: "Gamma Ltd", icon: FolderIcon },
] as const

/** Mock projects (default: Alpha) */
const MOCK_PROJECTS = [
  { id: "alpha", label: "Alpha", icon: FolderIcon },
  { id: "beta", label: "Beta", icon: FolderKanbanIcon },
  { id: "gamma", label: "Gamma", icon: LayoutGridIcon },
] as const

const TEAM_SHORTCUTS = ["⌘ 1", "⌘ 2", "⌘ 3"] as const
const PROJECT_SHORTCUTS = ["⌘ 1", "⌘ 2", "⌘ 3"] as const

/**
 * SiteHeader - Sticky full-width site header (Option A: sidebar + sticky site header)
 *
 * Spans the entire viewport width (above the sidebar and content).
 * Contains: menu collapse trigger, separator, logo, then team + project switchers.
 * Switchers use dropdown menus with label at top and "Add" action in footer.
 */
interface SiteHeaderProps {
  className?: string
  children?: React.ReactNode
}

export function SiteHeader({ className, children }: SiteHeaderProps) {
  const [team, setTeam] = React.useState<string>(MOCK_TEAMS[0].id)
  const [project, setProject] = React.useState<string>(MOCK_PROJECTS[0].id)
  const { theme, toggleTheme } = useTheme()

  const currentTeam = MOCK_TEAMS.find((t) => t.id === team) ?? MOCK_TEAMS[0]
  const currentProject =
    MOCK_PROJECTS.find((p) => p.id === project) ?? MOCK_PROJECTS[0]

  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-20 flex h-14 w-full shrink-0 items-center gap-2 border-b px-4",
        className
      )}
    >
      <SidebarTrigger className="-ml-1 shrink-0" />
      <Separator
        orientation="vertical"
        className="h-4 shrink-0 self-center data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
      />
      <span className="text-sm font-medium text-foreground ml-3 shrink-0">
        Vertesia
      </span>
      {children ?? (
        <div className="flex items-center gap-2">
          {/* Team switcher: label top-left, items with icon + shortcut, Add team in footer */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 px-2 text-sm font-normal text-foreground hover:bg-accent/50"
              >
                {currentTeam.label}
                <ChevronDownIcon className="size-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-48">
              <DropdownMenuLabel className="text-left">
                Teams
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                {MOCK_TEAMS.map((t, i) => (
                  <DropdownMenuItem
                    key={t.id}
                    onSelect={() => setTeam(t.id)}
                  >
                    <span className="flex size-7 items-center justify-center rounded-md bg-muted">
                      <t.icon className="size-4 text-muted-foreground" />
                    </span>
                    <span className="ml-2">{t.label}</span>
                    <DropdownMenuShortcut>{TEAM_SHORTCUTS[i]}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <PlusIcon className="size-4" />
                <span className="ml-2">Add team</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Project switcher: same structure */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 px-2 text-sm font-normal text-foreground hover:bg-accent/50"
              >
                {currentProject.label}
                <ChevronDownIcon className="size-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-48">
              <DropdownMenuLabel className="text-left">
                Projects
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                {MOCK_PROJECTS.map((p, i) => (
                  <DropdownMenuItem
                    key={p.id}
                    onSelect={() => setProject(p.id)}
                  >
                    <span className="flex size-7 items-center justify-center rounded-md bg-muted">
                      <p.icon className="size-4 text-muted-foreground" />
                    </span>
                    <span className="ml-2">{p.label}</span>
                    <DropdownMenuShortcut>
                      {PROJECT_SHORTCUTS[i]}
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <PlusIcon className="size-4" />
                <span className="ml-2">Add project</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      <div className="ml-auto flex items-center">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
        </Button>
      </div>
    </header>
  )
}
