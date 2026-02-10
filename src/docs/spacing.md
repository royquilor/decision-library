# Spacing Rules & Layout Rhythm (Spacing API)

## Purpose

This document defines how spacing is used across the UI to communicate
relationship, hierarchy, and density.

Spacing exists to:
- Group related content
- Separate unrelated content
- Support scanning and comprehension
- Balance speed vs comfort for users

This document defines **spacing intent and roles**, not arbitrary values.

---

## Core Principle

> **Spacing communicates relationship, not decoration.**

Elements that are conceptually related should feel closer together.
Unrelated elements should clearly separate.

---

## Defaults vs Density

### Default Spacing (Primary Mode)

The default UI spacing is designed to:
- Feel calm and readable
- Support scanning and comprehension
- Work well for most users and contexts

This is the baseline for:
- Most screens
- Most users
- Most workflows

---

### Dense Spacing (Intentional Mode)

Dense spacing may be used when:
- Users are experienced or power users
- Information density improves speed
- The UI is data-heavy

Dense spacing:
- Is intentional and scoped
- Still follows spacing roles
- Never introduces arbitrary values

Dense mode is a **controlled variation**, not a separate system.

---

## Spacing Roles

Spacing is defined by **purpose**, not size.

### 1. Inline Spacing

**Purpose**
- Separates tightly related elements

**Examples**
- Icon ↔ text
- Label ↔ input
- Button icon ↔ label

**Rules**
- Should feel compact
- Should not break visual grouping
- Never used to separate conceptual sections

---

### 2. Stack Spacing

**Purpose**
- Separates items in a vertical group

**Examples**
- Form fields in a form
- List items
- Settings rows

**Rules**
- Consistent within a group
- Communicates “these belong together”
- Should not vary item-to-item

---

### 3. Section Spacing

**Purpose**
- Separates conceptual blocks of content

**Examples**
- Sections on a page
- Distinct functional areas
- Groups of related settings

**Rules**
- Clearly larger than stack spacing
- Should visually reset the reader
- Must signal a new concept

---

### 4. Container Padding

**Purpose**
- Creates internal breathing room

**Examples**
- Cards
- Panels
- Modals
- Sidebars

**Rules**
- Padding should be consistent per container type
- Padding defines comfort and clarity
- Containers should not invent their own padding rules

---

## Neutral UI Specimen (Reference Frame)

A small, neutral UI layout is used to evaluate spacing decisions.

It includes:
- Page title
- Section heading
- Body text
- Form field
- Button
- Card
- List item

This specimen:
- Removes product-specific bias
- Makes vertical rhythm visible
- Acts as a calibration reference for humans and AI

Spacing should feel correct here **before** being applied elsewhere.

---

## Usage Rules

### Reuse Over Custom Spacing

- Spacing roles must be reused across the UI
- Custom spacing values should not be introduced casually
- Visual discomfort usually indicates a role mismatch, not a missing value

---

### Consistency Within Context

Within a given context:
- Stack spacing should remain consistent
- Section spacing should not fluctuate
- Inline spacing should feel predictable

Inconsistency increases cognitive load.

---

### Density Adjustments

When denser UI is required:
- Reduce spacing uniformly within roles
- Do not mix dense and default spacing in the same context
- Document the decision briefly if unclear

Density should be applied **systematically**, not locally.

---

## Anti-Patterns (Avoid)

- Adjusting spacing “until it looks right”
- Mixing spacing values within the same group
- Encoding hierarchy through spacing alone
- Letting components define their own spacing rules
- Using spacing to compensate for unclear hierarchy

Spacing supports hierarchy; it does not replace it.

---

## Relationship to Other Design Decisions

- Text hierarchy informs spacing relationships
- Layout relies on spacing roles for structure
- Components consume spacing roles, not define them

Spacing is a foundational system.

---

## When to Revisit This Document

This document should be updated when:
- New UI patterns emerge consistently
- Density needs change significantly
- Users struggle with comprehension or scanning
- AI repeatedly misuses spacing roles

Changes should be intentional and documented.

---

## Summary

Good spacing:
- Communicates meaning
- Reduces cognitive load
- Supports both comfort and speed

Defaults serve most users.
Density is intentional.
Consistency is non-negotiable.
