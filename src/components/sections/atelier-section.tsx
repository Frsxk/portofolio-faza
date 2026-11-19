import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/m3e/accordion"
import type { PortfolioContent } from "@/content/types"

export function AtelierSection({ content }: { content: PortfolioContent }) {
  const { atelier } = content

  return (
    <section
      id="atelier"
      aria-labelledby="atelier-heading"
      className="scroll-mt-28 py-12 min-[600px]:py-16 min-[840px]:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 min-[600px]:px-6 min-[840px]:px-8">
        <header className="max-w-[65ch]">
          <p className="font-mono text-label-large text-on-surface-variant">
            {atelier.sectionIndex}
          </p>
          <h2
            id="atelier-heading"
            className="mt-3 text-headline-medium text-on-surface min-[600px]:text-headline-large"
          >
            {atelier.heading}
          </h2>
          <p className="mt-4 text-body-large text-on-surface-variant">{atelier.lead}</p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 min-[600px]:gap-12 min-[840px]:grid-cols-2 min-[840px]:gap-16">
          <div className="min-w-0">
            <div className="space-y-8">
              {atelier.principles.map((principle) => (
                <article key={principle.id} aria-labelledby={`principle-${principle.id}`}>
                  <h3
                    id={`principle-${principle.id}`}
                    className="text-title-large text-on-surface"
                  >
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-[65ch] text-body-large text-on-surface-variant">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
            <aside className="mt-10 border-t border-outline-variant pt-6">
              <h3 className="text-title-medium text-on-surface">{atelier.studioNote.title}</h3>
              <p className="mt-3 max-w-[65ch] text-body-medium text-on-surface-variant">
                {atelier.studioNote.body}
              </p>
            </aside>
          </div>

          <div className="min-w-0">
            <h3 id="capabilities-heading" className="mb-5 text-title-large text-on-surface">
              {atelier.capabilitiesHeading}
            </h3>
            <Accordion
              aria-labelledby="capabilities-heading"
              className="motion-reduce:[&_[data-slot=accordion-content]]:animate-none motion-reduce:[&_[data-slot=accordion-item]]:transition-none motion-reduce:[&_[data-slot=ripple]]:hidden"
            >
              {atelier.capabilities.map((capability) => (
                <AccordionItem
                  key={capability.id}
                  value={capability.id}
                  className="bg-surface-container-low"
                >
                  <AccordionTrigger className="min-h-16 px-5">
                    {capability.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-body-large">{capability.summary}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-body-medium">
                      {capability.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                    <p className="mt-5 text-label-large text-on-surface">
                      {capability.tools.join(" · ")}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
