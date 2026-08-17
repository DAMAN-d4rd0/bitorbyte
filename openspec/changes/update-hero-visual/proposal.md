## Why

The current hero section uses a placeholder box. To improve the visual impact and align with the corporate identity, we need to replace this placeholder with a professional image and a stylized text overlay using UIKit's overlay components.

## What Changes

- Replace the hero placeholder `div` with a UIKit overlay structure.
- Set `assets/people.jpeg` as the background image for the overlay.
- Implement a text overlay at the bottom of the image containing the primary value proposition: "Haz que la tecnología se adapte a tu negocio con tu presupuesto. Consultoría experta para PyMEs. Implementamos soluciones reales, eliminamos costos innecesarios y te devolvemos el control de tu empresa."
- Adjust the layout to ensure the image and text are visually balanced.

## Capabilities

### New Capabilities
- `hero/visual-overlay`: Specification for the UIKit overlay implementation in the hero section, including image integration and text positioning.

### Modified Capabilities
- None

## Impact

- `index.html`: Modification of the hero section's HTML structure.
- `css/styles.css`: Possible additions to handle the overlay's visual styling and text alignment.
