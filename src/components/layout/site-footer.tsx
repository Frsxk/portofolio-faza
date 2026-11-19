import type { PortfolioContent } from "@/content/types"

export function SiteFooter({ content }: { content: PortfolioContent }) {
  const { footer } = content

  return (
    <footer className="border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto max-w-7xl px-4 py-8 min-[600px]:px-6 min-[600px]:py-10 min-[840px]:px-8">
        <div className="flex flex-col items-start justify-between gap-6 min-[840px]:flex-row min-[840px]:gap-12">
          <div className="min-w-0 max-w-[70ch]">
            <p className="text-title-medium text-on-surface">{footer.colophon}</p>
            <p className="mt-3 text-body-medium text-on-surface-variant">{footer.stackSummary}</p>
            <p className="mt-3 text-body-medium text-on-surface-variant">{footer.editionNote}</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <a
              href={footer.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring state-layer relative inline-flex min-h-12 items-center justify-center rounded-lg px-4 py-3 text-label-large text-primary"
            >
              View CV
            </a>
            <a
              href="#top"
              className="focus-ring state-layer relative inline-flex min-h-12 items-center justify-center rounded-lg px-4 py-3 text-label-large text-primary"
            >
              Back to top
            </a>
          </div>
        </div>
        <p className="mt-8 max-w-[90ch] text-body-small text-on-surface-variant">
          {footer.thirdPartyAttribution}
        </p>
      </div>
    </footer>
  )
}
