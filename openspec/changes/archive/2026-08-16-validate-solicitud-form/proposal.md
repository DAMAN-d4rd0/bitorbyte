## Why

The `#solicitud-form` currently allows submissions without required information, which can lead to incomplete leads and communication gaps. Validating essential fields ensures data quality.

## What Changes

- Implement client-side validation for the `#solicitud-form` in `main.js`.
- Ensure the fields corresponding to `name`, `empresa`, and `email` are required before the form can be submitted.

## Capabilities

### New Capabilities
- `form-validation`: Client-side validation requirements for the request form to ensure mandatory fields are filled.

### Modified Capabilities
- None

## Impact

- `main.js`: Addition of validation logic to the form submission handler.
- User Experience: Users will be notified if required fields are missing.
