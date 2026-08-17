## Context

The current implementation has a redundancy where a wrapper `div` contains another `div` acting as the image container. This causes inconsistent spacing in some responsive views and adds unnecessary DOM depth.

## Goals / Non-Goals

**Goals:**
- Flatten the HTML structure to a single container.
- Center the overlay content horizontally.
- Ensure the image container spans the full width of its parent grid column.

**Non-Goals:**
- Changing the image itself.
- Modifying the text content of the overlay.

## Decisions

### 1. HTML Refactoring: Direct Container
- **Decision**: Remove the wrapper `div` and apply `position: relative`, `background-image`, `border-radius`, and `overflow: hidden` directly to the main image container.
- **Rationale**: This eliminates the "double div" issue and makes the layout more predictable.

### 2. Centering Strategy: Flexbox / Text-align
- **Decision**: Use `text-align: center` for the overlay content and `margin: 0 auto` if needed for any inner elements.
- **Rationale**: Since the overlay content is primarily text, simple text alignment is the most efficient way to achieve horizontal centering across all devices.

### 3. Responsive Width
- **Decision**: Set the container width to `100%` and ensure the parent grid column is configured to allow full bleed if necessary.
- **Rationale**: This ensures that the hero visual maximizes the available space on both desktop and mobile.

## Risks / Trade-offs

- **[Risk]**: Removing the wrapper might affect the grid alignment if the wrapper had specific margins $\rightarrow$ **Mitigation**: Explicitly define the padding and margin of the new single container to match the intended design.
- **[Risk]**: Centered text might feel too "generic" compared to the left-aligned version $\rightarrow$ **Mitigation**: Use a balanced font weight and spacing to maintain the professional "Corporate" feel.
