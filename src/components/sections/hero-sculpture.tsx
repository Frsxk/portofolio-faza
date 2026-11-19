import { useEffect, useState } from "react"
import { motion } from "motion/react"

import { HERO_PORTRAIT_SRC } from "@/assets/hero-portrait"
import { Icon } from "@/components/m3e/icon"
import { Shape } from "@/components/m3e/shape"
import { Toggle } from "@/components/m3e/toggle"
import type { PortfolioContent } from "@/content/types"
import { expressiveMotion } from "@/lib/design/motion"

const restingTransform = { x: 0, y: 0, scale: 1, rotate: 0 }

export function HeroSculpture({
  telemetry,
  morphed,
  onToggleMorph,
  prefersReducedMotion,
}: {
  telemetry: PortfolioContent["identity"]["heroTelemetry"]
  morphed: boolean
  onToggleMorph: () => void
  prefersReducedMotion: boolean
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const settled = mounted || prefersReducedMotion

  return (
    <div className="relative w-full min-w-0 max-w-96 pb-2">
      <div className="relative h-72 min-[600px]:h-80 min-[840px]:h-88">
        <motion.div
          initial={false}
          animate={settled ? restingTransform : { x: -8, y: 12, scale: 0.96, rotate: -4 }}
          transition={prefersReducedMotion ? { duration: 0 } : expressiveMotion.spatial.default}
          className="pointer-events-none absolute end-2 top-0"
        >
          <Shape
            name="4-leaf-clover"
            aria-hidden="true"
            className="pointer-events-none size-14 bg-secondary-container motion-reduce:transition-none min-[600px]:size-16"
          />
        </motion.div>

        <motion.div
          initial={false}
          animate={settled ? restingTransform : { x: 0, y: 20, scale: 0.96, rotate: 3 }}
          transition={prefersReducedMotion ? { duration: 0 } : { ...expressiveMotion.spatial.slow, delay: 0.05 }}
          className="pointer-events-none absolute end-4 top-6 aspect-square w-60 max-w-[calc(100%-1rem)] min-[600px]:w-72 min-[840px]:w-80"
        >
          <Shape
            name={morphed ? "4-sided-cookie" : "arch"}
            className="pointer-events-none size-60 max-w-full bg-primary-container motion-reduce:transition-none min-[600px]:size-72 min-[840px]:size-80"
            style={{ height: "auto" }}
          >
            <img
              src={HERO_PORTRAIT_SRC}
              alt="Portrait of Muhammad Faza Al-Banna"
              width={400}
              height={600}
              loading="eager"
              decoding="async"
              className="object-top"
            />
          </Shape>
        </motion.div>

        <motion.div
          initial={false}
          animate={settled ? restingTransform : { x: 8, y: 12, scale: 0.96, rotate: -5 }}
          transition={prefersReducedMotion ? { duration: 0 } : { ...expressiveMotion.spatial.default, delay: 0.1 }}
          className="pointer-events-none absolute start-0 bottom-6"
        >
          <Shape
            name={morphed ? "12-sided-cookie" : "sunny"}
            aria-hidden="true"
            className="pointer-events-none size-20 bg-tertiary-container motion-reduce:transition-none min-[600px]:size-24"
          />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={settled ? restingTransform : { x: 0, y: 8, scale: 1, rotate: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { ...expressiveMotion.spatial.default, delay: 0.15 }}
        className="relative ms-auto -mt-8 w-[calc(100%-1rem)] max-w-72 rounded-xl border border-outline-variant/70 bg-surface-container-high p-4 shadow-elevation-1"
      >
        <p className="break-words font-mono text-label-medium text-primary">
          {telemetry.id}: {telemetry.title}
        </p>
        <dl className="mt-4 grid gap-3">
          {telemetry.specs.map((spec) => (
            <div key={spec.label} className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3 text-body-medium">
              <dt className="break-words text-on-surface-variant">{spec.label}</dt>
              <dd className="break-words text-end text-on-surface">{spec.value}</dd>
            </div>
          ))}
        </dl>
        <Toggle
          variant="tonal"
          size="md"
          pressed={morphed}
          onPressedChange={() => onToggleMorph()}
          aria-label="Morph hero Material geometry"
          className="mt-4 h-14 w-full min-w-0 px-3 text-label-large"
        >
          <Icon name="architecture" fill="auto" size={20} />
          <span>{morphed ? "Geometry: Cookie" : "Geometry: Arch"}</span>
        </Toggle>
      </motion.div>
    </div>
  )
}
