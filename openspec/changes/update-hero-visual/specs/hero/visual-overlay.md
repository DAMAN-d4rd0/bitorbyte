# Hero Visual Overlay Specification

## Overview
The hero section's visual representation must be upgraded from a placeholder to a professional image-based overlay that reinforces the business value proposition.

## Requirements

### 1. Visual Components
- **Background Image**: Use `assets/people.jpeg`. The image must be displayed as a background or a full-width image within the overlay.
- **Overlay Technique**: Utilize UIKit's overlay capabilities (e.g., `uk-overlay` or a custom relative/absolute positioning) to place content over the image.
- **Text Content**: The following text must be clearly visible at the bottom of the image:
    *"Haz que la tecnología se adapte a tu negocio con tu presupuesto. Consultoría experta para PyMEs. Implementamos soluciones reales, eliminamos costos innecesarios y te devolvemos el control de tu empresa."*

### 2. Styling & Typography
- **Text Contrast**: Apply a semi-transparent dark gradient or a background blur to the bottom of the image to ensure the text is readable regardless of the image's colors.
- **Alignment**: The text must be aligned to the bottom, centered or left-aligned depending on the visual balance of the hero section.
- **Typography**: Use the existing brand fonts (Inter/Montserrat).

### 3. Responsiveness
- **Image Scaling**: The image should scale correctly (cover) on all screen sizes without distorting.
- **Text Adaptation**: The overlay text should remain readable and appropriately sized on mobile devices.
