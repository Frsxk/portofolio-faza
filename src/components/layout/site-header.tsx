import { useState } from "react"
import { useReducedMotion } from "motion/react"

import { ModeSwitcher } from "@/components/layout/mode-switcher"
import { Badge } from "@/components/m3e/badge"
import { Button } from "@/components/m3e/button"
import { Icon } from "@/components/m3e/icon"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/m3e/sheet"
import type { NavItem, PortfolioContent } from "@/content/types"
import { cn } from "@/lib/m3e/cn"

export function SiteHeader({
  content,
  activeSection,
}: {
  content: PortfolioContent
  activeSection?: NavItem["id"]
}) {
  const [open, setOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-30 border-b border-outline-variant/60 bg-surface">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 min-[600px]:px-6 min-[840px]:px-8">
        <a
          href="#top"
          className="focus-ring state-layer relative inline-flex min-h-12 min-w-0 items-center gap-3 rounded-lg px-2 py-1 text-on-surface"
        >
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-container font-mono text-label-large font-semibold text-on-primary-container">
            {content.identity.monogram}
          </span>
          <span className="text-title-medium font-medium">
            {content.identity.displayName}
          </span>
          {/* Edition badge only from 420px up: below that the monogram
              and name already fill the header. */}
          <Badge
            variant="tertiary"
            className="hidden min-[420px]:inline-flex"
          >
            {content.meta.editionLabel}
          </Badge>
        </a>

        <div className="hidden items-center gap-1 min-[600px]:flex">
          <nav aria-label="Primary sections" className="flex items-center gap-1">
            {content.navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "tonal" : "text"}
                size="md"
                render={
                  <a
                    href={item.href}
                    aria-current={activeSection === item.id ? "true" : undefined}
                  />
                }
                nativeButton={false}
                disableRipple={Boolean(prefersReducedMotion)}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ModeSwitcher />
          <div className="min-[600px]:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="tonal"
                    size="md"
                    disableRipple={Boolean(prefersReducedMotion)}
                    className="px-4"
                  />
                }
              >
                <Icon name="menu" size={20} />
                <span>Menu</span>
              </SheetTrigger>
              <SheetContent
                side="right"
                showCloseButton={false}
                className="flex flex-col justify-between overflow-y-auto bg-surface-container-low p-6"
              >
                <div>
                  <div className="mb-4 flex justify-end">
                    <SheetClose
                      render={
                        <Button
                          variant="text"
                          size="icon-md"
                          aria-label="Close menu"
                          disableRipple={Boolean(prefersReducedMotion)}
                        />
                      }
                    >
                      <Icon name="close" size={20} />
                    </SheetClose>
                  </div>
                  <SheetHeader>
                    <SheetTitle>{content.identity.displayName}</SheetTitle>
                    <SheetDescription>
                      {content.identity.role} ({content.meta.editionLabel})
                    </SheetDescription>
                  </SheetHeader>
                  <nav
                    aria-label="Mobile sections"
                    className="mt-6 flex flex-col gap-2"
                  >
                    {content.navigation.map((item) => (
                      <Button
                        key={item.id}
                        variant={activeSection === item.id ? "tonal" : "text"}
                        size="md"
                        className={cn("w-full justify-start")}
                        render={
                          <a
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={
                              activeSection === item.id ? "true" : undefined
                            }
                          />
                        }
                        nativeButton={false}
                        disableRipple={Boolean(prefersReducedMotion)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </nav>
                </div>
                <p className="mt-8 text-body-medium text-on-surface-variant">
                  {content.meta.sampleDisclosure}
                </p>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
