import { Button } from "@/components/m3e/button"
import type { ProjectLinks as ProjectLinksData } from "@/content/types"

export function ProjectLinks({ links, title }: { links?: ProjectLinksData; title: string }) {
  if (!links?.github && !links?.live) return null

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {links.github && (
        <Button
          variant="text"
          size="md"
          className="h-auto min-h-12 px-4 py-3"
          render={<a href={links.github} target="_blank" rel="noopener noreferrer" />}
          nativeButton={false}
          aria-label={`View code for ${title} on GitHub`}
        >
          View code
        </Button>
      )}
      {links.live && (
        <Button
          variant="text"
          size="md"
          className="h-auto min-h-12 px-4 py-3"
          render={<a href={links.live} target="_blank" rel="noopener noreferrer" />}
          nativeButton={false}
          aria-label={`Open the live demo of ${title}`}
        >
          Live demo
        </Button>
      )}
    </div>
  )
}
