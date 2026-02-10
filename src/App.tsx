import { Routes, Route, Navigate } from "react-router-dom"
import { AppShell } from "@/layouts/AppShell"
import { HomePage } from "@/pages/HomePage"
import { NeutralSpecimenDashboard } from "@/pages/neutral/NeutralSpecimenDashboard"
import { ComponentExamplePage } from "@/pages/ComponentExamplePage"
import { ExamplePage } from "@/pages/ExamplePage"
import { PatternDetailPage } from "@/pages/PatternDetailPage"
import { DesignDecisionPage } from "@/pages/DesignDecisionPage"

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="patterns/:slug" element={<PatternDetailPage />} />
        <Route path="docs/:slug" element={<DesignDecisionPage />} />
        <Route path="layouts/dashboard" element={<NeutralSpecimenDashboard />} />
        <Route path="layouts/components" element={<ComponentExamplePage />} />
        <Route path="layouts/examples" element={<ExamplePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
