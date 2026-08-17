## Context

The project requires a fast, high-impact landing page using vanilla technologies (HTML, CSS, JS) to avoid unnecessary build-tool complexity. We are utilizing UIKit 3 for the layout and UI components to ensure a professional "Corporate" look with minimal custom CSS.

## Goals / Non-Goals

**Goals:**
- Achieve a "Corporate Trust" visual identity using a refined color palette.
- Implement a smooth, scroll-triggered infographic flow for the value proposition.
- Ensure 100% responsiveness for SME owners accessing the site via mobile.
- Maintain zero-dependency JS (Vanilla) for maximum performance.

**Non-Goals:**
- Building a complex CMS or backend for content management (content will be static).
- Implementing a full customer portal (only a lead-capture form).
- Using heavy animation libraries like GSAP (preferring native Intersection Observer and CSS Transitions).

## Decisions

### 1. Layout Framework: UIKit 3 over Tailwind or Bootstrap
- **Rationale**: UIKit's design language is naturally more "corporate" and clean out-of-the-box. Its grid system is intuitive, and the component library (Cards, Nav, Forms) matches the "minimalist empresarial" aesthetic without requiring extensive custom utility classes.
- **Alternative**: Tailwind would allow more precision but requires more boilerplate for a simple landing page.

### 2. Animation Strategy: Intersection Observer + CSS Transitions
- **Rationale**: For the infographic flow, we need a "reveal" effect. Using the native `Intersection Observer API` allows us to trigger CSS classes when elements enter the viewport, keeping the JS bundle size near zero and ensuring high performance.
- **Alternative**: GSAP would provide smoother timelines but adds unnecessary weight to a simple landing page.

### 3. Color Palette (Corporate Trust)
- **Decision**: 
    - Primary: Deep Navy (`#1B263B`) for authority.
    - Secondary: Off-White (`#F8F9FA`) for transparency.
    - Action: Soft Emerald/Cyan for "Gratis" CTAs to symbolize growth and safety.
- **Rationale**: These colors avoid the "cheap" feel of bright, neon colors while remaining modern.

## Risks / Trade-offs

- **[Risk]**: Static content makes updates slower $\rightarrow$ **Mitigation**: Use a clean, modular HTML structure so content can be easily swapped by a developer without breaking the layout.
- **[Risk]**: UIKit's default style might feel too "generic" $\rightarrow$ **Mitigation**: Apply a custom CSS layer for the "Corporate Trust" palette and specific typography (Inter/Montserrat) to give it a unique brand identity.
