# 0000: Security and code quality audit

**Date:** 2025-02-11
**Status:** Pending

## Context

An audit of the codebase identified several security, accessibility, and code quality issues in shadcn/ui components and project configuration. These were found in vendored components (installed via shadcn CLI), not custom code.

## Findings

### HIGH — Insecure Cookie (CSRF risk)

**File:** `src/components/ui/sidebar.tsx:85`

Sidebar state cookie is set without `SameSite` attribute, meaning it will be sent on cross-site requests.

**Fix:** Add `SameSite=Lax` to the cookie string.

---

### LOW — Type Assertion Bypassing Safety

**File:** `src/components/ui/input-group.tsx:55-60`

`as HTMLElement` suppresses type checking and can cause runtime errors if the target isn't an element.

**Fix:** Use `e.target instanceof HTMLElement` guard instead of type assertion.

---

### LOW — Non-deterministic State Initialization (SSR Hazard)

**File:** `src/components/ui/sidebar.tsx:593-595`

`Math.random()` in state initialization will cause hydration mismatches if the app moves to SSR/RSC.

**Fix:** Use deterministic width based on index, or a CSS-only approach.

---

### LOW — Accessibility: Non-focusable Element with `role="link"`

**File:** `src/components/ui/breadcrumb.tsx:63`

A `<span>` with `role="link"` is not keyboard-accessible. Screen readers announce it as a link but users cannot tab to it.

**Fix:** Add `tabIndex={0}` to the element.

---

### LOW — `shadcn` CLI in Production Dependencies

**File:** `package.json`

The `shadcn` package is a dev-only CLI tool but is listed in production dependencies.

**Fix:** Move to `devDependencies`.

## Decision

Document these findings and address them incrementally. The HIGH issue (cookie) should be fixed first. LOW issues can be fixed as part of regular maintenance.

## Trade-offs

- **Pro:** Fixes are small and low-risk
- **Pro:** Improves security posture and SSR-readiness
- **Con:** These are vendored shadcn components — fixes may be overwritten on next `shadcn add` or update
- **Con:** Some fixes (accessibility, SSR) are preventative rather than fixing active bugs
