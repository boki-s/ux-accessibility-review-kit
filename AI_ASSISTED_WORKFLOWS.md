# AI-Assisted Workflows

UX Accessibility Review Kit is designed to work without AI. The core checklist, notes, and Markdown export should remain usable in any browser with no account, API key, or model dependency.

AI-assisted workflows are a future layer that can help reviewers turn observations into clearer reports while keeping the underlying accessibility guidance open and inspectable.

## Good Uses for LLMs

- Turn checklist notes into a concise review summary
- Rewrite findings in clearer language for non-technical stakeholders
- Suggest follow-up tasks from incomplete checklist items
- Translate review reports between English and Serbian
- Help map review notes to relevant WCAG criteria
- Draft GitHub issues from exported Markdown findings
- Create example reviews for common patterns such as login forms, dashboards, landing pages, and contact forms

## Guardrails

- AI output should never be treated as a full accessibility audit
- WCAG references should remain visible and human-reviewable
- The tool should not send user notes to an AI provider without clear user action
- The core checklist should stay model-independent
- AI-generated suggestions should be editable before export or publication

## Future MCP Direction

A future Model Context Protocol integration could expose the checklist and review-report workflow to AI assistants in a structured way.

Possible MCP tools:

- `list_checklist_items`: return checklist items, categories, languages, and WCAG references
- `create_review_report`: turn selected item states and notes into Markdown
- `suggest_followups`: propose next steps for incomplete or high-risk findings
- `create_github_issue_draft`: format review findings as a GitHub issue draft

This would let an assistant help with review writing while the repository remains transparent, open-source, and independent from any single model provider.

## Example Prompt

```text
Use the exported UX Accessibility Review Markdown below.
Summarize the top findings, keep the language practical, and turn each unresolved item into a clear follow-up task.
Do not invent WCAG failures that are not present in the notes.
```

## Maintainer Position

AI should reduce the effort of writing and organizing accessibility feedback. It should not hide uncertainty, replace human review, or make the checklist harder to use without AI.
