import type { M3Theme } from "@/components/m3e/m3-theme-provider"

// Explicit key colors, no image upload or palette extraction required.
// "image" is the inspected library's multi-key-color scheme mode.
export const tidalInkTheme = {
  "source": {
    "primary": "#006B62",
    "secondary": "#4F6078",
    "tertiary": "#8F5B15",
    "neutral": "#74777A"
  },
  "variant": "image",
  "contrast": "standard",
  "spec": "2021",
  "motion": "expressive",
  "shapeScale": 1
} as const satisfies M3Theme
