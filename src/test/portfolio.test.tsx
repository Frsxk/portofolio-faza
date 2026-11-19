import type { ReactNode } from "react"
import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import { DesignProviders } from "@/components/layout/design-providers"
import { ModeSwitcher } from "@/components/layout/mode-switcher"
import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import { WorkSection } from "@/components/sections/work-section"
import { getFeaturedStudy, getSupportingStudies, portfolioContent } from "@/content/portfolio"

const featured = getFeaturedStudy()
const supporting = getSupportingStudies()

function renderPortfolio(children: ReactNode) {
  return render(<DesignProviders>{children}</DesignProviders>)
}

function renderWork() {
  return renderPortfolio(
    <WorkSection content={portfolioContent} featured={featured} supporting={supporting} />
  )
}

function expectVisibleStudies(titles: readonly string[]) {
  expect(screen.queryAllByRole("article")).toHaveLength(titles.length)
  for (const title of titles) {
    expect(screen.getByRole("article", { name: title })).toBeVisible()
  }
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe("portfolio real content", () => {
  it("lists real projects and a working contact address, with no sample flags", () => {
    renderPortfolio(
      <>
        <WorkSection content={portfolioContent} featured={featured} supporting={supporting} />
        <ContactSection content={portfolioContent.contact} />
      </>
    )

    expect(portfolioContent.projects).toHaveLength(5)
    expect(portfolioContent.meta.isSample).toBe(false)
    expect(featured.title).toBe("NimeNime Hub")
    for (const project of portfolioContent.projects) {
      expect(project.isSample).toBe(false)
      expect(project.editionTag).not.toMatch(/sample|synthetic/i)
      const article = screen.getByRole("article", { name: project.title })
      expect(within(article).getByText(project.editionTag, { exact: true })).toBeVisible()
    }

    expect(portfolioContent.contact.isSampleEmail).toBe(false)
    expect(portfolioContent.contact.email).toBe("fazaalbanna0410@gmail.com")
    expect(screen.queryByText("Sample email address", { exact: true })).not.toBeInTheDocument()
    expect(screen.getByText("Email address", { exact: true })).toBeVisible()
    expect(screen.getByText(portfolioContent.contact.email, { exact: true })).toBeVisible()
  })
  it("shows real project photos, not schematic illustrations", () => {
    renderPortfolio(
      <>
        <WorkSection content={portfolioContent} featured={featured} supporting={supporting} />
        <ContactSection content={portfolioContent.contact} />
      </>
    )

    for (const project of portfolioContent.projects) {
      expect(project.schematic.isIllustration).toBe(false)
      expect(project.schematic.src).toMatch(/^(https:\/\/|data:image\/)/)
      const article = screen.getByRole("article", { name: project.title })
      expect(within(article).getByAltText(/screenshot/i)).toBeVisible()
    }
    expect(screen.queryByText("[Schematic Illustration]", { exact: true })).not.toBeInTheDocument()
  })
})

describe("portfolio hero", () => {
  it("shows the owner's portrait inside the hero arch", () => {
    renderPortfolio(
      <HeroSection
        identity={portfolioContent.identity}
        sampleDisclosure={portfolioContent.meta.sampleDisclosure}
      />
    )
    const portrait = screen.getByAltText("Portrait of Muhammad Faza Al-Banna")
    expect(portrait).toBeVisible()
    expect(portrait).toHaveAttribute("src", expect.stringContaining("data:image/jpeg;base64,"))
  })
})

describe("portfolio work browser", () => {
  it("intersects the discipline with every selected stack and clears an empty result", async () => {
    const user = userEvent.setup()
    renderWork()
    const allTitles = portfolioContent.projects.map((project) => project.title)
    expectVisibleStudies(allTitles)

    await user.click(screen.getByRole("button", { name: "Interface" }))
    expectVisibleStudies(["NimeNime Hub", "Knight of the Night", "Portfolio (This Website)"])

    const stacks = within(screen.getByRole("group", { name: "Stack" }))
    await user.click(stacks.getByRole("button", { name: "TypeScript" }))
    expectVisibleStudies(["Portfolio (This Website)"])

    await user.click(stacks.getByRole("button", { name: "Node.js" }))
    expectVisibleStudies([])
    const showAll = screen.getByRole("button", { name: "Show all projects" })
    expect(showAll).toBeVisible()
    await user.click(showAll)

    expectVisibleStudies(allTitles)
    expect(screen.getByRole("button", { name: "All Projects" })).toHaveAttribute("aria-pressed", "true")
    expect(stacks.getByRole("button", { name: "TypeScript" })).toHaveAttribute("aria-pressed", "false")
    expect(stacks.getByRole("button", { name: "Node.js" })).toHaveAttribute("aria-pressed", "false")
    expect(screen.queryByRole("button", { name: "Clear filters" })).not.toBeInTheDocument()

    await user.click(stacks.getByRole("button", { name: "Discord.js" }))
    expectVisibleStudies(["Smol Maiden", "Epic Selfbot"])
    await user.click(screen.getByRole("button", { name: "Clear filters" }))
    expectVisibleStudies(allTitles)
    expect(stacks.getByRole("button", { name: "Discord.js" })).toHaveAttribute("aria-pressed", "false")
  })

  it.each(["escape", "close button"] as const)("closes project notes with %s and returns focus to the opener", async (method) => {
    const user = userEvent.setup()
    renderWork()
    const article = screen.getByRole("article", { name: featured.title })
    const opener = within(article).getByRole("button", { name: "Read architecture notes" })
    await user.click(opener)

    const dialog = await screen.findByRole("dialog", { name: featured.title })
    expect(dialog).toBeVisible()
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true))

    if (method === "escape") {
      await user.keyboard("{Escape}")
    } else {
      await user.click(within(dialog).getByRole("button", { name: "Close notes" }))
    }

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
    await waitFor(() => expect(opener).toHaveFocus())
  })
})

describe("portfolio contact", () => {
  it("associates errors with invalid fields and focuses the first remaining invalid field", async () => {
    const user = userEvent.setup()
    renderPortfolio(<ContactSection content={portfolioContent.contact} />)
    const form = within(screen.getByRole("form", { name: "Send a message" }))
    const name = form.getByRole("textbox", { name: "Name (required)" })
    const email = form.getByRole("textbox", { name: "Reply email (required)" })
    const subject = form.getByRole("combobox", { name: "Subject (required)" })
    const message = form.getByRole("textbox", { name: "Message (required)" })
    const submit = form.getByRole("button", { name: "Send message" })

    await user.click(submit)
    expect(name).toHaveFocus()
    expect(form.getAllByRole("alert")).toHaveLength(4)
    for (const field of [name, email, subject, message]) {
      expect(field).toHaveAttribute("aria-invalid", "true")
      const descriptions = field.getAttribute("aria-describedby")?.split(/\s+/) ?? []
      const error = form.getAllByRole("alert").find((alert) => descriptions.includes(alert.id))
      expect(error).toBeDefined()
      expect(error).toBeVisible()
      expect(error).not.toBeEmptyDOMElement()
    }

    await user.type(name, "Ada")
    await user.type(email, "not-an-email")
    await user.type(subject, "General inquiry")
    await user.type(message, "Too short")
    await user.click(submit)
    expect(email).toHaveFocus()
    expect(name).toHaveAttribute("aria-invalid", "false")
    expect(subject).toHaveAttribute("aria-invalid", "false")
    expect(form.getAllByRole("alert")).toHaveLength(2)

    await user.clear(email)
    await user.type(email, "ada@example.com")
    await user.click(submit)
    expect(message).toHaveFocus()
    expect(email).toHaveAttribute("aria-invalid", "false")
    expect(form.getAllByRole("alert")).toHaveLength(1)
  })

  it("sends a valid message through FormSubmit and reports success", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true } as Response)
    renderPortfolio(<ContactSection content={portfolioContent.contact} />)
    const form = within(screen.getByRole("form", { name: "Send a message" }))

    await user.type(form.getByRole("textbox", { name: "Name (required)" }), "Ada")
    await user.type(form.getByRole("textbox", { name: "Reply email (required)" }), "ada@example.com")
    await user.type(form.getByRole("combobox", { name: "Subject (required)" }), "General inquiry")
    await user.type(
      form.getByRole("textbox", { name: "Message (required)" }),
      "Hello, I would like to work with you on a project."
    )
    await user.click(form.getByRole("button", { name: "Send message" }))

    await screen.findByText("Message sent. I will reply to ada@example.com.")
    expect(fetchMock).toHaveBeenCalledOnce()
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe("https://formsubmit.co/2c7a81099a9584b7dfd2ef87615d7a2d")
    expect(init.method).toBe("POST")
    expect(form.getByRole("textbox", { name: "Name (required)" })).toHaveValue("")
  })

  it("reports a failed send and lets the user retry", async () => {
    const user = userEvent.setup()
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network down"))
    renderPortfolio(<ContactSection content={portfolioContent.contact} />)
    const form = within(screen.getByRole("form", { name: "Send a message" }))

    await user.type(form.getByRole("textbox", { name: "Name (required)" }), "Ada")
    await user.type(form.getByRole("textbox", { name: "Reply email (required)" }), "ada@example.com")
    await user.type(form.getByRole("combobox", { name: "Subject (required)" }), "General inquiry")
    await user.type(
      form.getByRole("textbox", { name: "Message (required)" }),
      "Hello, I would like to work with you on a project."
    )
    await user.click(form.getByRole("button", { name: "Send message" }))

    await screen.findByText(
      "Message not sent. Try again, or email fazaalbanna0410@gmail.com directly."
    )
    expect(form.getByRole("button", { name: "Send message" })).toBeEnabled()
  })

  it("reports a rejected clipboard write and permits a successful retry", async () => {
    const user = userEvent.setup()
    const writeText = vi.spyOn(navigator.clipboard, "writeText")
      .mockRejectedValueOnce(new DOMException("Permission denied", "NotAllowedError"))
      .mockResolvedValueOnce(undefined)
    renderPortfolio(<ContactSection content={portfolioContent.contact} />)

    const copy = screen.getByRole("button", { name: "Copy email address" })
    await user.click(copy)
    expect(writeText).toHaveBeenNthCalledWith(1, portfolioContent.contact.email)
    const failure = await screen.findByText(/copy failed/i)
    expect(failure).toBeVisible()
    expect(failure).toHaveAttribute("aria-live", "polite")
    expect(copy).toBeEnabled()

    await user.click(copy)
    expect(writeText).toHaveBeenNthCalledWith(2, portfolioContent.contact.email)
    await waitFor(() => expect(failure).toHaveTextContent(portfolioContent.contact.email))
    expect(failure).toHaveAttribute("aria-live", "polite")
    expect(screen.queryByText(/copy failed/i)).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Copy address again" })).toBeEnabled()
  })
})

describe("portfolio appearance", () => {
  it("persists a selected theme across provider remounts", async () => {
    const user = userEvent.setup()
    const view = renderPortfolio(<ModeSwitcher />)
    await user.click(screen.getByRole("button", { name: /^Color theme:/ }))
    await user.click(await screen.findByRole("menuitemradio", { name: "Dark" }))

    await waitFor(() => {
      expect(localStorage.getItem("color-mode")).toBe("dark")
      expect(screen.getByRole("button", { name: /^Color theme: dark \(dark active\)/ })).toBeVisible()
    })
    view.unmount()
    renderPortfolio(<ModeSwitcher />)
    expect(screen.getByRole("button", { name: /^Color theme: dark \(dark active\)/ })).toBeVisible()

    await user.click(screen.getByRole("button", { name: /^Color theme:/ }))
    expect(await screen.findByRole("menuitemradio", { name: "Dark" })).toHaveAttribute("aria-checked", "true")
    await user.click(screen.getByRole("menuitemradio", { name: "Light" }))
    await waitFor(() => {
      expect(localStorage.getItem("color-mode")).toBe("light")
      expect(screen.getByRole("button", { name: /^Color theme: light \(light active\)/ })).toBeVisible()
    })
  })
})
