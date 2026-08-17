## Context

The request form `#solicitud-form` is handled by `main.js`. Currently, the form does not enforce required fields on the client side, relying on the backend or simple HTML attributes which might be bypassed or provide poor UX.

## Goals / Non-Goals

**Goals:**
- Implement a JavaScript validation check within the existing form submission handler in `main.js`.
- Prevent the form from submitting if `name`, `empresa`, and `email` are empty.
- Provide a simple alert or visual feedback to the user when validation fails.

**Non-Goals:**
- Implement complex real-time validation (e.g., as the user types).
- Redesign the form's HTML structure.
- Implement backend validation (out of scope for this specific client-side request).

## Decisions

**Decision: Use a simple loop/array for required field validation**
- **Rationale**: Since the fields are identified by their `name` attribute (`name`, `empresa`, `email`), iterating over a list of required names and checking their values is cleaner and more maintainable than multiple `if` statements.
- **Alternative**: Hard-coding each check (`if (!nameValue) ...`). This was rejected because it is more verbose and harder to extend if more fields become required.

**Decision: Use `window.alert` for immediate feedback**
- **Rationale**: The user requested a simple addition to `main.js` without modifying the overall structure. `alert` is the most direct way to notify the user without adding new HTML elements or CSS for error messages.
- **Alternative**: Adding custom error spans under each input. Rejected to keep the change minimal and avoid modifying HTML.

## Risks / Trade-offs

- [Risk] Users might find `alert()` intrusive. → [Mitigation] Use a clear, concise message.
- [Risk] Client-side validation can be bypassed. → [Mitigation] This is intended for UX; mandatory data integrity must still be enforced on the server.
