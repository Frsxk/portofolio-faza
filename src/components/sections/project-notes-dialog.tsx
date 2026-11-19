import { useReducedMotion } from "motion/react"

import { Badge } from "@/components/m3e/badge"
import { Button } from "@/components/m3e/button"
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/m3e/dialog"
import { Icon } from "@/components/m3e/icon"
import type { ProjectStudy } from "@/content/types"

export function ProjectNotesDialog({
  project,
  open,
  onOpenChange,
  onSelectSubject,
}: {
  project: ProjectStudy | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelectSubject?: (subject: string) => void
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Dialog open={open && project !== null} onOpenChange={onOpenChange}>
      {project && (
        <DialogContent
          className="max-w-2xl bg-surface-container-high"
          style={{ width: "calc(100% - 3rem)" }}
          showCloseButton={false}
        >
          <DialogHeader>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-label-large text-on-surface-variant">
                {project.indexLabel}
              </span>
              <Badge variant="secondary">{project.editionTag}</Badge>
            </div>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.subtitle}</DialogDescription>
          </DialogHeader>

          <DialogBody className="space-y-6 text-on-surface">
            <p className="text-body-large text-on-surface">
              {project.architectureNotes.overview}
            </p>

            <section className="rounded-xl bg-surface-container p-4">
              <h3 className="text-title-medium text-on-surface">Constraints</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-body-medium text-on-surface-variant">
                {project.architectureNotes.constraints.map((constraint) => (
                  <li key={constraint}>{constraint}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-title-medium text-on-surface">
                Key engineering trade-offs
              </h3>
              {project.architectureNotes.tradeoffs.map((tradeoff) => (
                <div
                  key={tradeoff.decision}
                  className="rounded-lg border border-outline-variant/50 bg-surface-container-low p-3.5"
                >
                  <h4 className="text-title-medium text-on-surface">
                    {tradeoff.decision}
                  </h4>
                  <p className="mt-1 text-body-medium text-on-surface-variant">
                    {tradeoff.rationale}
                  </p>
                </div>
              ))}
            </section>

            <div className="min-w-0 rounded-md border border-outline-variant/60 bg-surface-container-highest p-4">
              <div className="break-words font-mono text-label-medium text-on-surface-variant">
                {project.architectureNotes.snippet.filename}
              </div>
              <pre
                tabIndex={0}
                aria-label={`${project.architectureNotes.snippet.filename} code excerpt`}
                className="focus-ring mt-2 overflow-x-auto font-mono text-body-medium leading-relaxed text-on-surface"
              >
                <code>{project.architectureNotes.snippet.code}</code>
              </pre>
            </div>
          </DialogBody>

          <DialogFooter className="gap-2">
            <Button
              variant="tonal"
              size="md"
              render={
                <a
                  href="#contact"
                  onClick={() => {
                    onSelectSubject?.(project.inquirySubject)
                    onOpenChange(false)
                  }}
                />
              }
              nativeButton={false}
              disableRipple={Boolean(prefersReducedMotion)}
            >
              <Icon name="mail" size={20} />
              <span>Discuss project</span>
            </Button>
            <DialogClose
              render={
                <Button
                  variant="filled"
                  size="md"
                  disableRipple={Boolean(prefersReducedMotion)}
                />
              }
            >
              Close notes
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  )
}
