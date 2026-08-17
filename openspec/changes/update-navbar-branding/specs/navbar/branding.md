# Navbar Branding Specification

## Overview
The navbar must be updated to reflect a more corporate identity, integrating the official logo and expanding navigation options to prepare for future content sections.

## Requirements

### 1. Visual Elements
- **Logo**: Replace the text-based branding with the image `assets/logo.png`. The logo should maintain a proportional height (e.g., 40-60px) to fit within the UIKit navbar.
- **Color Scheme**: The navbar background must be set to the "Deep Navy" color (`var(--primary-color)`) to match the footer section.
- **Contrast**: All text and links within the navbar must be white or light gray to ensure readability against the dark background.

### 2. Navigation Structure
The navbar must contain the following elements in order:
- **Left**: Official Logo.
- **Center/Right**:
    - "Casos de Éxito" (Link/Anchor).
    - "Nosotros" (Link/Anchor).
    - "Empezar mi Exploración Gratis" (Primary Action Button).

### 3. Behavior
- **Sticky**: The navbar must remain fixed at the top of the viewport during scroll.
- **Responsive**: On mobile, the navigation links should collapse into a UIKit drawer or hamburger menu.
