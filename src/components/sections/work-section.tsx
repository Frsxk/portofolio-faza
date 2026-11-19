import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"

import { Badge } from "@/components/m3e/badge"
import { Button } from "@/components/m3e/button"
import { FilterChip } from "@/components/m3e/chip"
import { ToggleGroup, ToggleGroupItem } from "@/components/m3e/toggle-group"
import { FeaturedStudy } from "@/components/sections/featured-study"
import { ProjectLinks } from "@/components/sections/project-links"
import { ProjectNotesDialog } from "@/components/sections/project-notes-dialog"
import type { PortfolioContent, ProjectStudy, WorkFilterCategory } from "@/content/types"
import { expressiveMotion } from "@/lib/design/motion"

interface WorkSectionProps {
  content: PortfolioContent
  featured: ProjectStudy
  supporting: readonly ProjectStudy[]
}

function selectInquirySubject(subject: string) {
  window.dispatchEvent(
    new CustomEvent("tidal-ink:contact-subject", { detail: { subject } })
  )
}

export function WorkSection({ content, featured, supporting }: WorkSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const [category, setCategory] = useState<WorkFilterCategory>("all")
  const [stacks, setStacks] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<ProjectStudy | null>(null)
  const [notesOpen, setNotesOpen] = useState(false)

  function matchesFilters(project: ProjectStudy) {
    return (
      (category === "all" || project.category === category) &&
      stacks.every((stack) => project.stack.includes(stack))
    )
  }

  function clearFilters() {
    setCategory("all")
    setStacks([])
  }

  function openNotes(project: ProjectStudy) {
    setSelectedProject(project)
    setNotesOpen(true)
  }

  const visibleFeatured = matchesFilters(featured)
  const visibleSupporting = supporting.filter(matchesFilters)
  const visibleCount = visibleSupporting.length + (visibleFeatured ? 1 : 0)
  const totalCount = supporting.length + 1
  const hasFilters = category !== "all" || stacks.length > 0

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-28 px-4 py-16 min-[600px]:px-8 min-[840px]:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-5 min-[840px]:grid-cols-12 min-[840px]:gap-8">
          <p className="font-mono text-label-large text-primary min-[840px]:col-span-3 min-[840px]:pt-2">
            {content.work.sectionIndex}
          </p>
          <div className="min-w-0 min-[840px]:col-span-9">
            <h2
              id="work-heading"
              className="max-w-3xl text-headline-large text-on-surface min-[840px]:text-display-small-emphasized"
            >
              {content.work.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-body-large text-on-surface-variant">
              {content.work.lead}
            </p>
          </div>
        </header>

        <div className="my-8 space-y-5 rounded-2xl bg-surface-container-low p-4 min-[600px]:p-6 min-[840px]:my-12">
          <div>
            <p id="work-category-label" className="mb-3 text-label-large text-on-surface">
              Discipline
            </p>
            <ToggleGroup
              aria-labelledby="work-category-label"
              value={[category]}
              onValueChange={(values) => {
                const selected = content.work.categories.find((item) => item.value === values[0])
                if (selected) setCategory(selected.value)
              }}
              spacing={2}
              className="max-w-full flex-wrap"
            >
              {content.work.categories.map((item) => (
                <ToggleGroupItem
                  key={item.value}
                  value={item.value}
                  className="h-auto min-h-12 max-w-full whitespace-normal px-5 py-3 text-center"
                >
                  {item.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div role="group" aria-labelledby="work-stack-label" aria-describedby="work-stack-help">
            <p id="work-stack-label" className="text-label-large text-on-surface">Stack</p>
            <p id="work-stack-help" className="mt-1 text-body-small text-on-surface-variant">
              Match every selected technology. Leave unselected to show any stack.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {content.work.filterStacks.map((stack) => (
                <FilterChip
                  key={stack}
                  pressed={stacks.includes(stack)}
                  onPressedChange={(pressed) => {
                    setStacks((current) =>
                      pressed ? [...current, stack] : current.filter((item) => item !== stack)
                    )
                  }}
                  className="h-auto min-h-12 max-w-full whitespace-normal py-3"
                >
                  {stack}
                </FilterChip>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant pt-4">
            <p role="status" aria-live="polite" aria-atomic="true" className="text-body-medium text-on-surface-variant">
              {visibleCount} of {totalCount} {totalCount === 1 ? "project" : "projects"} shown
            </p>
            {hasFilters && (
              <Button
                variant="text"
                className="min-h-12"
                onClick={clearFilters}
                disableRipple={Boolean(prefersReducedMotion)}
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-12 min-[840px]:space-y-16">
          {visibleFeatured && (
            <motion.div
              layout={prefersReducedMotion ? false : "position"}
              transition={expressiveMotion.spatial.default}
            >
              <FeaturedStudy
                project={featured}
                onOpenNotes={openNotes}
                onSelectSubject={selectInquirySubject}
              />
            </motion.div>
          )}

          {visibleSupporting.map((project) => (
            <motion.article
              key={project.id}
              layout={prefersReducedMotion ? false : "position"}
              transition={expressiveMotion.spatial.default}
              aria-labelledby={`project-${project.id}-title`}
              className="grid min-w-0 gap-5 border-t border-outline-variant pt-6 min-[600px]:grid-cols-2 min-[600px]:gap-6 min-[840px]:grid-cols-12 min-[840px]:gap-8 min-[840px]:pt-8"
            >
              <p className="font-mono text-label-large text-primary min-[600px]:col-span-2 min-[840px]:col-span-1">
                {project.indexLabel}
              </p>
              <figure className="min-w-0 min-[840px]:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface-container-highest">
                  <img
                    src={project.schematic.src}
                    alt={project.schematic.alt}
                    width={project.schematic.aspectWidth}
                    height={project.schematic.aspectHeight}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-body-small text-on-surface-variant">
                  {project.schematic.caption}
                </figcaption>
              </figure>
              <div className="min-w-0 min-[840px]:col-span-6 min-[840px]:pt-4">
                <Badge variant="secondary">{project.editionTag}</Badge>
                <h3 id={`project-${project.id}-title`} className="mt-4 text-headline-medium-emphasized text-on-surface">
                  {project.title}
                </h3>
                <p className="mt-2 text-title-medium text-on-surface-variant">{project.subtitle}</p>
                <p className="mt-4 text-body-large text-on-surface">{project.summary}</p>
                <p className="mt-4 text-body-small text-on-surface-variant">{project.role}</p>
                <ul aria-label={`${project.title} stack`} className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((stack) => (
                    <li key={stack}><Badge variant="outline">{stack}</Badge></li>
                  ))}
                </ul>
                <ProjectLinks links={project.links} title={project.title} />
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    variant="tonal"
                    size="md"
                    className="h-auto min-h-14 max-w-full whitespace-normal py-3 text-center"
                    onClick={() => openNotes(project)}
                    aria-label={`Read architecture notes for ${project.title}`}
                    disableRipple={Boolean(prefersReducedMotion)}
                  >
                    Read architecture notes
                  </Button>
                  <Button
                    variant="text"
                    size="md"
                    className="h-auto min-h-14 max-w-full whitespace-normal py-3 text-center"
                    render={<a href="#contact" onClick={() => selectInquirySubject(project.inquirySubject)} />}
                    nativeButton={false}
                    disableRipple={Boolean(prefersReducedMotion)}
                  >
                    Discuss {project.title}
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}

          {visibleCount === 0 && (
            <div className="rounded-3xl border border-outline-variant bg-surface-container-low px-5 py-10 min-[600px]:px-8">
              <h3 className="text-headline-small text-on-surface">No projects match this combination.</h3>
              <p className="mt-3 max-w-xl text-body-large text-on-surface-variant">
                Try a different discipline or remove a stack filter. Clearing filters brings back every project.
              </p>
              <Button
                variant="tonal"
                size="md"
                className="mt-6 h-auto min-h-14 max-w-full whitespace-normal py-3"
                onClick={clearFilters}
                disableRipple={Boolean(prefersReducedMotion)}
              >
                Show all projects
              </Button>
            </div>
          )}
        </div>
      </div>

      <ProjectNotesDialog
        project={selectedProject}
        open={notesOpen}
        onOpenChange={setNotesOpen}
        onSelectSubject={selectInquirySubject}
      />
    </section>
  )
}
