import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/**
 * NeutralSpecimenDashboard - Specimen A (Dashboard/Overview Pattern)
 * 
 * Purpose:
 * - Validate section spacing
 * - Validate grouping of heterogeneous content
 * - Test card padding consistency
 * 
 * Content Includes:
 * - Multiple content sections
 * - Cards with titles and body text
 * - Metrics with supporting labels
 * - Mixed content density
 * 
 * What This Specimen Tests:
 * - Section spacing vs stack spacing
 * - Card internal padding
 * - Header-to-content relationship
 * - Visual rhythm across sections
 * 
 * Text Roles:
 * - Page Title: text-2xl font-semibold (primary context)
 * - Section Heading: text-lg font-medium (logical groups)
 * - Body Text: text-sm (primary reading content)
 * - Secondary/Muted: text-sm text-muted-foreground (context without attention)
 * 
 * Spacing Roles:
 * - Section Spacing: gap-8 (separates conceptual blocks)
 * - Stack Spacing: gap-4 (items in vertical group)
 * - Inline Spacing: gap-2 (tightly related elements)
 * - Container Padding: p-6 (cards, panels)
 */
export function NeutralSpecimenDashboard() {
  return (
    <div className="flex flex-col">
      {/* Header Area - Critical Calibration Zone */}
      {/* Uses section spacing to separate header from content */}
      <div className="flex flex-col gap-6 border-b border-border bg-background px-6 py-8">
        {/* Optional breadcrumbs - using micro/meta text role */}
        <nav className="text-xs text-muted-foreground">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Dashboard</span>
        </nav>

        {/* Page Title - one per screen, visually dominant */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-foreground">
              Dashboard
            </h1>
            {/* Optional description - using body or secondary text */}
            <p className="text-sm text-muted-foreground">
              Overview of key metrics and information
            </p>
          </div>

          {/* Primary and/or secondary CTAs */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="default">
              Secondary Action
            </Button>
            <Button variant="default" size="default">
              Primary Action
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {/* Uses section spacing between sections */}
      <div className="flex flex-col gap-8 p-6">
        {/* Section 1: Metrics Overview */}
        <section className="flex flex-col gap-4">
          {/* Section Heading - introduces logical group */}
          <h2 className="text-lg font-medium text-foreground">
            Overview
          </h2>

          {/* Cards grid - using stack spacing for items */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Card 1: Metric Card */}
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
                <CardDescription>Active users this month</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Metric value - using body text */}
                <div className="text-2xl font-semibold">1,234</div>
                {/* Supporting label - using secondary/muted text */}
                <p className="mt-2 text-sm text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Metric Card */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Total revenue generated</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">$45,678</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Metric Card */}
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Currently in progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">24</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  3 completed this week
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Recent Activity */}
        <section className="flex flex-col gap-4">
          {/* Section Heading */}
          <h2 className="text-lg font-medium text-foreground">
            Recent Activity
          </h2>

          {/* Card with list content */}
          <Card>
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
              <CardDescription>Latest updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
              {/* List items - using stack spacing */}
              <ul className="flex flex-col gap-4">
                {/* List item 1 */}
                <li className="flex flex-col gap-1 border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      {/* Item title - using body text */}
                      <span className="text-sm font-medium text-foreground">
                        Project updated
                      </span>
                      {/* Item description - using body text */}
                      <span className="text-sm text-foreground">
                        User updated project settings
                      </span>
                    </div>
                    {/* Timestamp - using secondary/muted text */}
                    <span className="text-xs text-muted-foreground">
                      2 hours ago
                    </span>
                  </div>
                </li>

                {/* List item 2 */}
                <li className="flex flex-col gap-1 border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">
                        New user registered
                      </span>
                      <span className="text-sm text-foreground">
                        A new user joined the platform
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      5 hours ago
                    </span>
                  </div>
                </li>

                {/* List item 3 */}
                <li className="flex flex-col gap-1 border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">
                        Task completed
                      </span>
                      <span className="text-sm text-foreground">
                        User completed a task
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      1 day ago
                    </span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Form Example */}
        <section className="flex flex-col gap-4">
          {/* Section Heading */}
          <h2 className="text-lg font-medium text-foreground">
            Settings
          </h2>

          {/* Card with form */}
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Update your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Form fields - using stack spacing */}
              <form className="flex flex-col gap-4">
                {/* Form field 1 */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" />
                  {/* Helper text - using secondary/muted text */}
                  <p className="text-xs text-muted-foreground">
                    This will be displayed on your profile
                  </p>
                </div>

                {/* Form field 2 */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                  <p className="text-xs text-muted-foreground">
                    We'll never share your email
                  </p>
                </div>

                {/* Form actions - using inline spacing */}
                <div className="flex items-center gap-2">
                  <Button type="submit" variant="default">
                    Save Changes
                  </Button>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
