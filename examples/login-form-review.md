# Example Review: Login Form

This example shows how a reviewer might use UX Accessibility Review Kit to capture practical feedback before a login form is shipped.

## Context

The reviewed screen is a simple email and password login form with a primary submit button, password reset link, and validation messages.

## Findings

### Label every input

- Status: Done
- Category: Forms
- WCAG: 3.3.2 Labels or Instructions
- Notes: Email and password fields have visible labels that remain on screen after the fields are filled.

### Explain errors clearly

- Status: Needs work
- Category: Forms
- WCAG: 3.3.1 Error Identification
- Notes: The form only highlights the password field in red. Add text that explains the password is required and ensure the message is announced to assistive technology.

### Show visible focus

- Status: Needs work
- Category: Keyboard
- WCAG: 2.4.7 Focus Visible
- Notes: The forgot password link has a weak focus state. Increase the outline contrast and make the focus indicator visible on the pale background.

### Use specific action labels

- Status: Done
- Category: Content
- WCAG: 2.4.4 Link Purpose
- Notes: The button says "Sign in" and the recovery link says "Forgot password?", so the actions are understandable.

## Recommended Follow-Up

Fix the error message pattern first, then retest keyboard focus across the full form. After that, run the form on a narrow mobile viewport to confirm labels and validation messages do not overlap.
