import type { Transition } from "motion/react"

/**
 * Material 3 Expressive spring conversion for Motion (`motion/react`).
 * M3 defines damping as a dimensionless ratio zeta; Motion expects a damping
 * coefficient c. For unit mass (m = 1): c = 2 * zeta * sqrt(stiffness).
 * Source: DESIGN.md § Motion & Choreography -> Spring tokens.
 */
export function materialSpring(
  stiffness: number,
  dampingRatio: number
): Transition {
  return {
    type: "spring",
    mass: 1,
    stiffness,
    damping: 2 * dampingRatio * Math.sqrt(stiffness),
  }
}

export const expressiveMotion = {
  spatial: {
    fast: materialSpring(800, 0.6),
    default: materialSpring(380, 0.8),
    slow: materialSpring(200, 0.8),
  },
  effects: {
    fast: materialSpring(3800, 1),
    default: materialSpring(1600, 1),
    slow: materialSpring(800, 1),
  },
} as const
