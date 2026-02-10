# Human Workflow: Design & AI Collaboration

## Purpose

This document defines how humans (designers, developers) work with AI when building UI features.

The goal is to:
- Preserve design intent
- Reduce repetitive audits
- Enable AI to work effectively
- Keep decisions explicit and reusable

Humans are responsible for **intent, taste, and judgement**.

---

## Step 1 — Maintain Design Decision Files

Humans maintain and evolve:
- `design-decisions.md`
- `text.md`
- `spacing.md`

These files:
- Change slowly
- Capture intent and rationale
- Act as shared contracts

They should not be rewritten per feature.

---

## Step 2 — Write the Feature PRD

The feature PRD should focus on:
- User problem
- Scope
- Constraints
- Acceptance criteria

The PRD should **reference** design decisions, not restate them.

Example:
> “This feature must follow the design decisions defined in `design-decisions.md`, `text.md`, and `spacing.md`.”

---

## Step 3 — Provide Clear Inputs to AI

When prompting AI:
- Include the PRD
- Reference the design decision files
- Avoid embedding design rules directly in the prompt

This keeps responsibilities clean and avoids duplication.

---

## Step 4 — Review AI Output Structurally

Human review should focus on:
- Hierarchy correctness
- Spacing relationships
- Component reuse
- Rule adherence

Humans should avoid:
- Micro-adjusting pixels immediately
- Re-litigating agreed rules
- Introducing exceptions without documentation

---

## Step 5 — Document Exceptions or New Decisions

When:
- A rule is bent
- A new component is introduced
- A spacing or hierarchy exception is required

Humans should briefly document:
- What changed
- Why it changed
- Any trade-offs

This prevents silent drift.

---

## Step 6 — Improve the System, Not Just the Screen

If the same issue appears repeatedly:
- Update the design decision files
- Clarify examples
- Improve constraints

Prefer fixing the **system** over fixing individual outputs.

---

## Summary

Humans are responsible for:
- Defining intent
- Maintaining design contracts
- Reviewing for structure, not vibes
- Improving the system over time

AI handles execution. Humans guard quality.
