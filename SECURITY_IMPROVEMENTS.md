# Security Improvements

## HIGH

### Insecure Cookie — Missing SameSite Attribute

**File:** `src/components/ui/sidebar.tsx:85`

The sidebar state cookie is set without the `SameSite` attribute, which means it will be sent on cross-site requests, opening the door to CSRF.

**Current:**

```typescript
document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
```

**Fix:**

```typescript
document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}; SameSite=Lax`
```

---

## LOW

### Type Assertion Bypassing Safety

**File:** `src/components/ui/input-group.tsx:55-60`

`as HTMLElement` suppresses type checking and can cause runtime errors if the target isn't an element.

**Current:**

```typescript
onClick={(e) => {
  if ((e.target as HTMLElement).closest("button")) {
    return
  }
  e.currentTarget.parentElement?.querySelector("input")?.focus()
}}
```

**Fix:**

```typescript
onClick={(e) => {
  if (e.target instanceof HTMLElement && e.target.closest("button")) {
    return
  }
  e.currentTarget.parentElement?.querySelector("input")?.focus()
}}
```

---

### Non-deterministic State Initialization (SSR Hazard)

**File:** `src/components/ui/sidebar.tsx:593-595`

`Math.random()` in state initialization will cause hydration mismatches if the app ever moves to SSR/RSC.

**Current:**

```typescript
const [width] = React.useState(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
})
```

**Fix:** Use a deterministic width based on the index or a CSS-only approach.

```typescript
// Option A: Deterministic based on index
const width = `${50 + ((index * 17) % 40)}%`

// Option B: CSS-only with random-looking animation
// Use CSS custom properties or nth-child selectors
```

---

### Accessibility: `role="link"` on Non-focusable Element

**File:** `src/components/ui/breadcrumb.tsx:63`

A `<span>` with `role="link"` is not keyboard-accessible. Screen readers will announce it as a link but users cannot tab to it.

**Current:**

```typescript
<span
  role="link"
  aria-disabled="true"
  ...
>
```

**Fix:**

```typescript
<span
  role="link"
  aria-disabled="true"
  tabIndex={0}
  ...
>
```

---

### `shadcn` CLI in Production Dependencies

**File:** `package.json`

The `shadcn` package is a CLI tool for scaffolding components. It should not be in production dependencies.

**Fix:** Move it to `devDependencies`.

```bash
npm uninstall shadcn && npm install -D shadcn
```
