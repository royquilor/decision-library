# Text Rules & Hierarchy (Text API)

## Purpose

This document defines how text is structured, used, and interpreted across the UI.

Text hierarchy exists to:
- Communicate importance and meaning
- Establish reading order
- Reduce cognitive load
- Create consistent rhythm across screens

This document defines **roles and intent**, not aesthetic preferences.

---

## Core Principle

> **Text styles are chosen by semantic role, not visual preference.**

If the meaning of the text is the same, the text role should be the same —  
even if the screen or component changes.

---

## Text Roles (Hierarchy)

The system uses a small, intentional set of text roles.

These roles should feel distinct even:
- Without color
- Without font weight changes
- Without layout context

### 1. Page Title

**Purpose**
- Defines the primary context of the screen
- Answers: “Where am I?”

**Rules**
- One per screen
- Should be immediately scannable
- Must be visually dominant

**Examples**
- Dashboard
- Settings
- Project Overview

---

### 2. Section Heading

**Purpose**
- Introduces a logical group of content
- Breaks a page into meaningful chunks

**Rules**
- Used to separate conceptual sections
- Always visually subordinate to the page title
- Should not compete for attention

**Examples**
- Account details
- Notifications
- Billing information

---

### 3. Body Text

**Purpose**
- Primary reading content
- Explanatory or instructional text

**Rules**
- Should prioritise readability over emphasis
- Default choice for most text
- Avoid visual noise (no unnecessary emphasis)

**Examples**
- Descriptions
- Instructions
- Supporting explanations

---

### 4. Secondary / Muted Text

**Purpose**
- Provides context without demanding attention
- Supports nearby primary content

**Rules**
- Must remain readable
- Should not introduce new primary information
- Should never overpower body text

**Examples**
- Helper text
- Metadata
- Timestamps
- Hints

---

### 5. Micro / Meta Text

**Purpose**
- Extremely low-priority information
- UI affordances or system-level details

**Rules**
- Used sparingly
- Never critical to understanding the screen
- Must not be relied upon to communicate core actions

**Examples**
- Footnotes
- Legal notes
- Subtle UI labels

---

## Usage Rules

### Reuse Over Creation

- Existing text roles must be reused whenever possible
- New text styles should not be created without strong justification
- Visual variation alone is not a reason to introduce a new role

---

### Hierarchy Must Be Obvious

Text hierarchy should be clear:
- At a glance
- When squinting
- In low-contrast conditions

If hierarchy relies on color alone, it is insufficient.

---

### One Role Per Meaning

If two pieces of text communicate the same type of information,
they should use the same text role — even if their placement differs.

---

## Anti-Patterns (Avoid)

- Creating new text styles to “make it feel right”
- Using font weight instead of hierarchy
- Encoding layout or spacing meaning into text size
- Letting components define their own text hierarchy

Text hierarchy is global, not component-owned.

---

## Examples in Context

Text roles should be evaluated in context, not isolation.

A single screen may include:
- One page title
- Multiple section headings
- Body text within each section
- Secondary text supporting actions or data

The **relationship between text elements** matters more than individual styling.

---

## Relationship to Other Design Decisions

- Spacing decisions rely on text hierarchy
- Layout decisions follow text importance
- Components consume text roles; they do not redefine them

Text hierarchy is foundational.

---

## When to Revisit This Document

This document should be updated when:
- A new type of content consistently appears
- Existing roles no longer express meaning clearly
- AI or humans repeatedly misuse a text role

Changes should be intentional and documented.

---

## Summary

Text hierarchy is a **semantic system**, not a visual one.

When text roles are clear:
- Spacing decisions become easier
- Components become more reusable
- AI becomes more reliable
- UI becomes calmer and more legible

Consistency here unlocks speed everywhere else.
