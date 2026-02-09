import * as React from "react"
import { AppShell } from "@/layouts/AppShell"
import { NeutralSpecimenDashboard } from "@/pages/neutral/NeutralSpecimenDashboard"
import { ComponentExamplePage } from "@/pages/ComponentExamplePage"
import { ExamplePage } from "@/pages/ExamplePage"

/**
 * Simple routing using React state
 * Routes are defined here and passed to AppShell for navigation
 */
type Route = "dashboard" | "component-examples" | "examples"

export function App() {
  const [currentRoute, setCurrentRoute] = React.useState<Route>("dashboard")

  // Render the current page based on route
  const renderPage = () => {
    switch (currentRoute) {
      case "dashboard":
        return <NeutralSpecimenDashboard />
      case "component-examples":
        return <ComponentExamplePage />
      case "examples":
        return <ExamplePage />
      default:
        return <NeutralSpecimenDashboard />
    }
  }

  return (
    <AppShell currentRoute={currentRoute} onNavigate={setCurrentRoute}>
      {renderPage()}
    </AppShell>
  )
}

export default App