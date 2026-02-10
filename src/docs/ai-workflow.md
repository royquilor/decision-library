# AI Workflow: UI Feature Implementation

## Purpose

This document defines how AI tools (e.g. Claude) should plan, implement, and validate UI features.

The goal is to:
- Enable fast implementation
- Prevent UI inconsistency
- Ensure design decisions are respected
- Avoid unnecessary component or spacing drift

AI is responsible for **execution and consistency**, not design intent.

---

## Inputs (Authoritative)

Before starting any work, the AI must treat the following as **constraints**, not suggestions:

- Feature PRD
- `design-decisions.md`
- `text.md`
- `spacing.md`

If there is a conflict between feature requirements and design decisions, the AI should **flag it explicitly** before proceeding.

---

## Step 1 — Understand the Feature

The AI should first identify:
- What problem the feature solves
- Which screens or UI areas are affected
- Which existing components are likely relevant

The AI should **not** write code at this stage.

---

## Step 2 — Map Design Constraints

Before implementation, the AI should determine:

### Text
- Which text roles apply (e.g. page title, section heading, body)
- Whether any new text styles are required (default: no)

### Spacing
- Which spacing roles apply (inline, stack, section, container)
- Whether spacing can be expressed using existing rules

### Components
- Which existing components can be reused
- Whether extension is sufficient vs creating a new component

If a new component seems necessary, the AI should:
- Explain why reuse is insufficient
- Keep the component minimal and scoped

---

## Step 3 — Plan the Implementation

The AI should outline a brief plan, for example:
- Components to touch or create
- Order of implementation
- Any risks or assumptions

This plan can be short and does not need to be exhaustive.

---

## Step 4 — Implement Incrementally

Implementation should follow this order:
1. Scaffold components (structure only)
2. Apply layout and hierarchy
3. Apply spacing rules
4. Apply states and interactions

The AI should avoid:
- One-pass “build everything” outputs
- Introducing custom spacing values
- Creating stylistic variants without need

---

## Step 5 — Self-Check Against Design Decisions

Before finalising output, the AI must verify:

- No new spacing values were introduced without justification
- Text hierarchy follows `text.md`
- Spacing usage follows `spacing.md`
- Existing components were reused where possible
- Any deviations are explicitly documented

If uncertainty exists, the AI should surface questions rather than guess.

---

## Step 6 — Output & Notes

Final output should include:
- The implementation
- Brief notes on:
  - Decisions made
  - Any trade-offs
  - Any assumptions

These notes help humans review and provide future context.

---

## Summary

AI is expected to:
- Follow design decisions as contracts
- Plan before implementing
- Build incrementally
- Self-check before completion

Speed is valuable, but consistency is required.
