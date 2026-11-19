import { motion, useReducedMotion } from "motion/react"

import { Badge } from "@/components/m3e/badge"
import { Button } from "@/components/m3e/button"
import { Icon } from "@/components/m3e/icon"
import { ProjectLinks } from "@/components/sections/project-links"
import type { ProjectStudy } from "@/content/types"
import { expressiveMotion } from "@/lib/design/motion"

export function FeaturedStudy({
  project,
  onOpenNotes,
  onSelectSubject,
}: {
  project: ProjectStudy
  onOpenNotes: (project: ProjectStudy) => void
  onSelectSubject?: (subject: string) => void
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <article
      aria-labelledby={`project-${project.id}-title`}
      className="rounded-3xl border border-outline-variant/60 bg-surface-container-low p-5 shadow-elevation-0 min-[600px]:p-8 min-[840px]:p-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-label-large text-primary">
          {project.indexLabel} · FEATURED PROJECT
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="tertiary">Flagship Project</Badge>
          <Badge variant="secondary">{project.editionTag}</Badge>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 min-[840px]:grid-cols-12 min-[840px]:items-start">
        <div className="min-w-0 min-[840px]:col-span-7">
          <figure className="overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface-container-highest">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
              transition={expressiveMotion.spatial.default}
            >
              <img
                src={project.schematic.src}
                alt={project.schematic.alt}
                width={project.schematic.aspectWidth}
                height={project.schematic.aspectHeight}
                loading="eager"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
            </motion.div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-outline-variant/50 bg-surface-container px-4 py-2.5 text-label-medium text-on-surface-variant">
              <span>{project.schematic.caption}</span>
              <span className="font-mono">[Schematic Illustration]</span>
            </figcaption>
          </figure>
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-6 min-[840px]:col-span-5">
          <div>
            <h3
              id={`project-${project.id}-title`}
              className="text-headline-medium-emphasized text-on-surface"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-title-medium text-on-surface-variant">
              {project.subtitle}
            </p>
            <p className="mt-4 text-body-large text-on-surface">{project.summary}</p>

            <dl className="mt-5 space-y-3 border-t border-outline-variant/50 pt-4">
              <div>
                <dt className="font-mono text-label-medium text-on-surface-variant">
                  Problem
                </dt>
                <dd className="text-body-medium text-on-surface">{project.problem}</dd>
              </div>
              <div>
                <dt className="font-mono text-label-medium text-on-surface-variant">
                  Architecture
                </dt>
                <dd className="text-body-medium text-on-surface">
                  {project.architecture}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-label-medium text-on-surface-variant">
                  Verification
                </dt>
                <dd className="text-body-medium text-on-surface">
                  {project.verificationNote}
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <ProjectLinks links={project.links} title={project.title} />

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="filled"
              size="md"
              className="h-auto min-h-14 max-w-full whitespace-normal py-3 text-center"
              onClick={() => onOpenNotes(project)}
              disableRipple={Boolean(prefersReducedMotion)}
            >
              <Icon name="description" size={20} />
              <span>Read architecture notes</span>
            </Button>
            <Button
              variant="outlined"
              size="md"
              className="h-auto min-h-14 max-w-full whitespace-normal py-3 text-center"
              render={
                <a
                  href="#contact"
                  onClick={() => onSelectSubject?.(project.inquirySubject)}
                />
              }
              nativeButton={false}
              disableRipple={Boolean(prefersReducedMotion)}
            >
              Discuss this project
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
