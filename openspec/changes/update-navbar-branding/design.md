## Context

The landing page currently uses a basic UIKit navbar with text branding. We need to transition to a full corporate branding style using an external asset (`logo.png`) and a specific color theme that aligns with the footer.

## Goals / Non-Goals

**Goals:**
- Implement a high-contrast, corporate-style navbar.
- Integrate `assets/logo.png` as the primary brand identifier.
- Add navigation links for "Casos de Éxito" and "Nosotros" as placeholders for future content.
- Ensure consistent branding with the Deep Navy (`var(--primary-color)`) theme.

**Non-Goals:**
- Creating the actual pages for "Casos de Éxito" or "Nosotros" (only the links in the navbar).
- Modifying the logic of the "Exploración Gratis" CTA.

## Decisions

### 1. Navbar Styling: Direct CSS Override vs. UIKit Theme
- **Decision**: Use a custom CSS class for the navbar to force the `background-color` to `var(--primary-color)`.
- **Rationale**: While UIKit has theme options, a direct override is simpler for a single-page site and ensures an exact match with the footer's Deep Navy color.
- **Alternative**: Using a custom UIKit theme file, which would be overkill for this specific change.

### 2. Logo Implementation: `<img>` tag with fixed height
- **Decision**: Use an `<img>` tag within the `uk-navbar-left` container with a `max-height` constraint.
- **Rationale**: This prevents the logo from distorting the navbar height while ensuring it scales correctly on different screen sizes.

## Risks / Trade-offs

- **[Risk]**: Logo image may not be available or have the wrong format $\rightarrow$ **Mitigation**: Use an `alt` tag with "bitORbyte" and a fallback style to maintain layout integrity.
- **[Risk]**: Deep Navy background may make some UIKit default link colors invisible $\rightarrow$ **Mitigation**: Apply specific white/light-gray color styles to all `uk-navbar-item` elements.
