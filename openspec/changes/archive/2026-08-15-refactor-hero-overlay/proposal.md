## Why

The current hero image implementation uses redundant nested `div` structures, which can lead to unexpected spacing and alignment issues, especially on responsive views. Simplifying the structure to a single container with a centered overlay will improve code maintainability and visual consistency.

## What Changes

- Remove the unnecessary outer wrapper `div` for the hero visual.
- Refactor the image container to be a single `div` that handles both the background image and the overlay.
- Center the overlay content and ensure it spans the maximum possible width in responsive layouts.
- Optimize the CSS to ensure the text is perfectly centered and the image behaves as a full-bleed background.

## Capabilities

### New Capabilities
- `hero/overlay-refactor`: Specification for the simplified single-div hero overlay, focusing on centering and full-width responsiveness.

### Modified Capabilities
- None

## Impact

- `index.html`: Structural changes to the hero section's visual column.
- `css/styles.css`: Modification of the overlay styles to support centering and full-width behavior.
