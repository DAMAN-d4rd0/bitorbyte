# Value Infographic Specification

## Overview
The value infographic is the central visual element of the landing page. It must transform a complex service model into a simple, linear, and trustworthy journey.

## Requirements

### 1. The Journey Flow
The infographic must represent the following sequential steps:
1. **Exploration** $\rightarrow$ Tag: `GRATIS` $\rightarrow$ Action: "Analyze your daily operations."
2. **Evaluation** $\rightarrow$ Tag: `GRATIS` $\rightarrow$ Action: "Quote the exact technology needed."
3. **Implementation** $\rightarrow$ Tag: `GRATIS` $\rightarrow$ Action: "Deploy the solution."
4. **Final Product** $\rightarrow$ Tag: `PAY ONLY FOR PRODUCT` $\rightarrow$ Result: "Own your process."

### 2. Visual & Interactive Behavior
- **Progression**: The flow should be read from left-to-right (desktop) or top-to-bottom (mobile).
- **Animation**: Use `Intersection Observer` to trigger entrance animations as the user scrolls into the section.
- **Clarity**: Each step must have a distinct icon and a clear price tag to reinforce the "zero-risk" entry.

### 3. Messaging
- Emphasize that the consultancy phase is a gift to ensure the final product is exactly what the client needs, eliminating "bloatware" (modules the client doesn't use).
