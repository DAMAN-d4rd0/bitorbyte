# Hero Overlay Refactor Specification

## Overview
This spec defines the transition from a nested `div` structure to a single-container hero overlay to ensure better responsiveness and visual centering.

## Requirements

### 1. Structural Simplification
- **Single Container**: The hero visual must be contained in a single `div` that handles both the background image and the overlay.
- **Elimination**: Remove any outer wrapper `div` that solely exists to contain the image, moving all styles (like `border-radius` and `overflow: hidden`) to the main container.

### 2. Centering and Width
- **Full Width**: The container must span the maximum available width of its grid column.
- **Centering**: The overlay text must be centered horizontally.
- **Responsiveness**: In mobile views, the overlay must adapt to the full width of the screen, maintaining its positioning at the bottom of the image.

### 3. Visuals
- **Background**: Use `assets/people.jpeg` with `background-size: cover`.
- **Overlay**: A semi-transparent dark gradient at the bottom to ensure text readability.
- **Content**: The text content remains: *"Haz que la tecnología se adapte a tu negocio con tu presupuesto. Consultoría experta para PyMEs. Implementamos soluciones reales, eliminamos costos innecesarios y te devolvemos el control de tu empresa."*
