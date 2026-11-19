import { useEffect, useState } from "react"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { AtelierSection } from "@/components/sections/atelier-section"
import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import { WorkSection } from "@/components/sections/work-section"
import { getFeaturedStudy, getSupportingStudies, portfolioContent } from "@/content/portfolio"
import type { NavItem } from "@/content/types"

const featured = getFeaturedStudy()
const supporting = getSupportingStudies()

function App() {
  const [activeSection, setActiveSection] = useState<NavItem["id"]>()

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return

    const visibleSections = new Map<string, IntersectionObserverEntry>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleSections.set(entry.target.id, entry)
          else visibleSections.delete(entry.target.id)
        }

        const nearest = [...visibleSections.values()].sort(
          (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
        )[0]
        const current = portfolioContent.navigation.find((item) => item.id === nearest?.target.id)
        setActiveSection(current?.id)
      },
      { rootMargin: "-88px 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    for (const id of ["top", ...portfolioContent.navigation.map((item) => item.id)]) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-4 z-50 inline-flex min-h-12 -translate-y-24 items-center rounded-lg bg-primary px-5 text-label-large text-on-primary focus:translate-y-0"
      >
        Skip to main content
      </a>
      <SiteHeader content={portfolioContent} activeSection={activeSection} />
      <main id="main-content" tabIndex={-1} className="focus-ring">
        <HeroSection
          identity={portfolioContent.identity}
          sampleDisclosure={portfolioContent.meta.sampleDisclosure}
        />
        <WorkSection content={portfolioContent} featured={featured} supporting={supporting} />
        <AtelierSection content={portfolioContent} />
        <ContactSection content={portfolioContent.contact} />
      </main>
      <SiteFooter content={portfolioContent} />
    </>
  )
}

export default App
