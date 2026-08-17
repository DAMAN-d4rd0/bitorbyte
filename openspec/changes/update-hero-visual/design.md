## Context

The hero section currently contains a placeholder `div` for the main visual. We need to replace this with a high-quality image (`assets/people.jpeg`) and use a UIKit-based overlay to position the business value proposition text.

## Goals / Non-Goals

**Goals:**
- Replace the placeholder with a professional image.
- Implement a text overlay at the bottom of the image.
- Ensure the text is readable regardless of the image's brightness.
- Maintain a modern, professional aesthetic using UIKit.

**Non-Goals:**
- Adding complex animations or interactive elements to the image.
- Changing the main hero headline or the primary CTA button.

## Decisions

### 1. Implementation Method: CSS Background vs. `<img>` with Absolute Overlay
- **Decision**: Use a `div` with the image as a `background-image` (using `background-size: cover`) and an absolute positioned overlay for the text.
- **Rationale**: This allows for the most flexibility in positioning the text at the bottom and ensures the image fills the container without distortion across different screen sizes.
- **Alternative**: Using an `<img>` tag with a `relative` container. While possible, `background-image` is cleaner for "hero" style visuals with text overlays.

### 2. Contrast Strategy: Gradient Overlay
- **Decision**: Implement a linear gradient from transparent (top) to semi-transparent black (bottom) as a pseudo-element or overlay layer.
- **Rationale**: This guarantees that white text at the bottom remains legible even if the image has light areas in that region.

## Risks / Trade-offs

- **[Risk]**: The image `assets/people.jpeg` may be too large, affecting load times $\rightarrow$ **Mitigation**: Recommend optimizing the image size before deployment.
- **[Risk]**: The text may cover important parts of the image $\rightarrow$ **Mitigation**: Use a carefully calculated padding and a semi-transparent gradient to soften the impact.
