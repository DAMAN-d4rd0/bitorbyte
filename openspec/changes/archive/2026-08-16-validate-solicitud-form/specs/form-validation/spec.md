## Purpose

Ensures that the request form captures all mandatory contact and company information before submission to maintain lead quality.

## ADDED Requirements

### Requirement: Mandatory Form Fields
The system MUST validate that the fields for name, company (empresa), and email are filled out before allowing the form to be submitted.

#### Scenario: Submit with missing required fields
- **WHEN** the user attempts to submit the form while any of the 'name', 'empresa', or 'email' fields are empty
- **THEN** the system SHALL prevent form submission and notify the user that these fields are required.

#### Scenario: Submit with all required fields filled
- **WHEN** the user fills in the 'name', 'empresa', and 'email' fields and submits the form
- **THEN** the system SHALL allow the form submission to proceed.
