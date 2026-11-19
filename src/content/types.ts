export type WorkCategory = "systems" | "interface" | "tooling"

export type WorkFilterCategory = "all" | WorkCategory

export interface NavItem {
  id: "work" | "atelier" | "contact"
  label: string
  href: "#work" | "#atelier" | "#contact"
}

export type SocialBrand = "linkedin" | "github" | "instagram" | "discord"

export interface TelemetrySpec {
  label: string
  value: string
}

export interface ProjectTradeoff {
  decision: string
  rationale: string
}

export interface ProjectCodeSample {
  filename: string
  language: string
  code: string
}

export interface ProjectArchitectureNotes {
  overview: string
  constraints: readonly string[]
  tradeoffs: readonly ProjectTradeoff[]
  snippet: ProjectCodeSample
}

export interface ProjectSchematic {
  src: string
  alt: string
  caption: string
  aspectWidth: number
  aspectHeight: number
  isIllustration: boolean
}

export interface ProjectLinks {
  github?: string
  live?: string
}

export interface ProjectStudy {
  id: string
  indexLabel: string
  title: string
  subtitle: string
  featured: boolean
  isSample: boolean
  category: WorkCategory
  editionTag: string
  role: string
  stack: readonly string[]
  summary: string
  problem: string
  architecture: string
  verificationNote: string
  inquirySubject: string
  links?: ProjectLinks
  schematic: ProjectSchematic
  architectureNotes: ProjectArchitectureNotes
}

export interface CapabilityDomain {
  id: string
  title: string
  summary: string
  deliverables: readonly string[]
  tools: readonly string[]
}

export interface PortfolioContent {
  meta: {
    isSample: boolean
    editionLabel: string
    sampleDisclosure: string
    siteTitle: string
    siteDescription: string
  }
  identity: {
    monogram: string
    displayName: string
    role: string
    locationLabel: string
    indexLine: string
    headline: string
    positioning: string
    primaryCta: {
      label: string
      href: "#work"
    }
    secondaryCta: {
      label: string
      href: "#contact"
    }
    heroTelemetry: {
      id: string
      title: string
      specs: readonly TelemetrySpec[]
    }
  }
  navigation: readonly NavItem[]
  work: {
    sectionIndex: string
    heading: string
    lead: string
    categories: ReadonlyArray<{
      value: WorkFilterCategory
      label: string
    }>
    filterStacks: readonly string[]
  }
  projects: readonly ProjectStudy[]
  atelier: {
    sectionIndex: string
    heading: string
    lead: string
    principles: ReadonlyArray<{
      id: string
      title: string
      body: string
    }>
    studioNote: {
      title: string
      body: string
    }
    capabilitiesHeading: string
    capabilities: readonly CapabilityDomain[]
  }
  contact: {
    sectionIndex: string
    heading: string
    lead: string
    email: string
    isSampleEmail: boolean
    sampleEmailNote: string
    workingNotes: string
    draftNotice: string
    subjectPresets: readonly string[]
    socials: readonly { name: string; url: string; brand: SocialBrand }[]
  }
  footer: {
    colophon: string
    stackSummary: string
    editionNote: string
    thirdPartyAttribution: string
    cvUrl: string
  }
}
