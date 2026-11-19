import { useReducedMotion } from "motion/react"

import { Button } from "@/components/m3e/button"
import { Icon } from "@/components/m3e/icon"
import { HeroSculpture } from "@/components/sections/hero-sculpture"
import type { PortfolioContent } from "@/content/types"

export function HeroSection({
  identity,
  sampleDisclosure,
}: {
  identity: PortfolioContent["identity"]
  sampleDisclosure: string
}) {
  const prefersReducedMotion = useReducedMotion() ?? true

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative py-12 min-[600px]:py-16 min-[840px]:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 min-[600px]:px-6 min-[840px]:grid-cols-12 min-[840px]:gap-12 min-[840px]:px-8">
        <div className="flex min-w-0 flex-col items-start min-[840px]:col-span-7">
          <p className="font-mono text-label-large text-on-surface-variant">{identity.indexLine}</p>
          <h1
            id="hero-heading"
            className="mt-3 max-w-[18ch] text-display-small-emphasized text-on-surface min-[600px]:text-display-medium-emphasized"
          >
            {identity.headline}
          </h1>
          <p className="mt-5 max-w-[62ch] text-body-large text-on-surface-variant">{identity.positioning}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              variant="filled"
              size="md"
              render={<a href={identity.primaryCta.href} />}
              nativeButton={false}
              disableRipple={Boolean(prefersReducedMotion)}
            >
              <span>{identity.primaryCta.label}</span>
              <Icon name="arrow_downward" size={20} />
            </Button>
            <Button
              variant="tonal"
              size="md"
              render={<a href={identity.secondaryCta.href} />}
              nativeButton={false}
              disableRipple={Boolean(prefersReducedMotion)}
            >
              {identity.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-6 max-w-[62ch] rounded-lg border border-outline-variant/50 bg-surface-container-low px-3.5 py-2.5 text-body-medium text-on-surface-variant">
            {sampleDisclosure}
          </p>
        </div>
        <div className="flex min-w-0 justify-center min-[840px]:col-span-5 min-[840px]:justify-end">
          <HeroSculpture
            telemetry={identity.heroTelemetry}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>
      </div>
    </section>
  )
}
