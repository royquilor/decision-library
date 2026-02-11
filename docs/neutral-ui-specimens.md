# Neutral UI Specimens

## Purpose

Neutral UI Specimens are **reference implementations** used to validate
text hierarchy, spacing rules, and component usage in a controlled environment.

They exist to:
- Demonstrate correct application of design decisions
- Make spacing and hierarchy visible
- Provide calibration references for humans and AI
- Prevent design drift as features scale

Neutral UI Specimens are **examples**, not sources of truth.

They do not define new rules.

---

## Dependency Order (Important)

Neutral UI Specimens are built using:

- `design-decisions.md`
- `text.md`
- `spacing.md`
- Existing components

They must **only consume** these decisions, never introduce new ones.

If a specimen exposes a problem, the fix belongs in the decision documents,
not inside the specimen.

---

## What a Neutral UI Specimen Is

A Neutral UI Specimen is:
- Product-agnostic
- Intentionally plain
- Structurally complete
- Semantically correct

It focuses on:
- Hierarchy
- Spacing relationships
- Grouping
- Rhythm

It avoids:
- Branding
- Marketing copy
- Visual flair
- Product-specific logic

---

## Global Frame (Shared Across All Specimens)

All specimens share the same global frame.

### Sidebar
- Persistent vertical navigation
- Fixed spacing and padding
- Uses existing navigation components
- No specimen-specific variations

### Topbar
- Global actions and status
- Fixed height and spacing
- Consistent across all specimens

### Header Area (Critical Calibration Zone)
Each specimen includes a header area containing:
- Optional breadcrumbs (secondary or meta text)
- Page title (page title text role)
- Optional description (body or secondary text)
- Primary and/or secondary CTAs

Rules:
- Header spacing always uses section-level spacing
- Text hierarchy must be immediately clear
- CTA placement must be consistent

If hierarchy or spacing fails here, it indicates a system issue.

---

## Specimen Variants

Specimens vary by **content pattern**, not by rules.

Each variant exists to pressure-test different spacing and hierarchy scenarios.

---

### Specimen A — Dashboard (Overview Pattern)

**Purpose**
- Validate section spacing
- Validate grouping of heterogeneous content
- Test card padding consistency

**Content Includes**
- Multiple content sections
- Cards with titles and body text
- Metrics with supporting labels
- Mixed content density

**What This Specimen Tests**
- Section spacing vs stack spacing
- Card internal padding
- Header-to-content relationship
- Visual rhythm across sections

Default spacing mode is used.

---

### Specimen B — Table / Data List (Density Pattern)

**Purpose**
- Validate dense UI behavior
- Test scan-ability under compression
- Test consistency in repeated rows

**Content Includes**
- Table or structured list
- Column headers
- Repeating rows
- Optional row-level actions
- Optional filters

**What This Specimen Tests**
- Dense spacing mode application
- Row height consistency
- Header clarity without relying on excessive spacing
- Alignment under density constraints

Dense spacing must be applied **systematically**, not locally.

---

### Specimen C — Tabs / Segmented Content (Navigation Pattern)

**Purpose**
- Validate internal navigation spacing
- Test content reset and hierarchy consistency
- Ensure spacing stability across tab changes

**Content Includes**
- Tabs or segmented control
- Repeating content structures per tab
- Optional empty states

**What This Specimen Tests**
- Spacing between navigation and content
- Consistency across tab switches
- Proper hierarchy reset per view

Spacing rules must remain consistent across tabs.

---

## Density Rules in Specimens

- Default spacing is the baseline for all specimens
- Dense spacing is applied only in specimens that explicitly require it
- Dense and default spacing must not be mixed within the same context
- Density changes must not alter hierarchy meaning

If density introduces confusion, hierarchy or spacing rules must be revisited.

---

## How Humans Use These Specimens

Humans use specimens to:
- Review AI output structurally
- Compare spacing and hierarchy decisions
- Diagnose “this feels off” issues
- Validate new patterns before production use

Specimens are used as **reference frames**, not templates.

---

## How AI Uses These Specimens

AI uses specimens to:
- Map new features to known layout patterns
- Apply spacing and text roles consistently
- Avoid inventing layout logic
- Validate decisions before implementation

AI should not copy specimens verbatim.
It should **follow their structure and rules**.

---

## What to Do When a Specimen Feels Wrong

If a specimen reveals an issue:
1. Identify whether the issue is hierarchy, spacing, or component usage
2. Update the relevant decision document (`text.md`, `spacing.md`, etc.)
3. Re-evaluate the specimen

Specimens should not be patched locally.

---

## When to Add a New Specimen

Add a new specimen only when:
- A new content pattern appears repeatedly
- Existing specimens no longer cover common layouts
- A new density or interaction model is introduced

Each new specimen must justify:
- What pattern it represents
- What decisions it validates

---

## Summary

Neutral UI Specimens:
- Demonstrate correct design decisions
- Make abstract rules concrete
- Reduce subjective debate
- Improve AI reliability
- Scale design quality over time

They are boring by design.
That is their strength.
