import { useEffect, useId, useState, type FormEvent } from "react"
import { useReducedMotion } from "motion/react"

import { Button } from "@/components/m3e/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/m3e/field"
import { Input } from "@/components/m3e/input"
import { BrandIcon } from "@/components/sections/brand-icons"
import { Shape } from "@/components/m3e/shape"
import { toast } from "@/components/m3e/sonner"
import { Textarea } from "@/components/m3e/textarea"
import type { PortfolioContent, SocialBrand } from "@/content/types"

// FormSubmit endpoint already used by the old portfolio. It delivers to
// fazaalbanna0410@gmail.com. No test submission has been sent from here.
const FORM_SUBMIT_URL = "https://formsubmit.co/2c7a81099a9584b7dfd2ef87615d7a2d"

/*
 * Elsewhere button colors. These are the social networks' own brand
 * colors (see the --brand-* tokens in src/index.css), not Tidal Ink
 * roles. White text on each passes WCAG AA 4.5:1. The M3E Button keeps
 * its state-layer hover, ripple, and focus ring; only the fill changes.
 */
const BRAND_BUTTON_CLASS: Record<SocialBrand, string> = {
  linkedin: "bg-[var(--brand-linkedin)] text-white",
  github: "bg-[var(--brand-github)] text-white",
  instagram: "bg-[var(--brand-instagram)] text-white",
  discord: "bg-[var(--brand-discord)] text-white",
}

type Draft = { name: string; email: string; subject: string; message: string }
type DraftErrors = Partial<Record<keyof Draft, string>>
type CopyState = "idle" | "copying" | "success" | "error"
type SubmitState = "idle" | "sending" | "success" | "error"

export function ContactSection({ content }: { content: PortfolioContent["contact"] }) {
  const id = useId()
  const reducedMotion = useReducedMotion() ?? true
  const [draft, setDraft] = useState<Draft>({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<DraftErrors>({})
  const [copyState, setCopyState] = useState<CopyState>("idle")
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [submitStatus, setSubmitStatus] = useState("")

  useEffect(() => {
    function selectSubject(event: Event) {
      if (!(event instanceof CustomEvent)) return
      const detail: unknown = event.detail
      const subject = typeof detail === "string"
        ? detail
        : detail && typeof detail === "object" && "subject" in detail
          ? detail.subject
          : undefined
      if (typeof subject !== "string" || !subject.trim()) return
      setDraft((current) => ({ ...current, subject }))
      setErrors((current) => ({ ...current, subject: undefined }))
      setSubmitStatus("Subject added. Complete the remaining fields to send your message.")
    }

    window.addEventListener("tidal-ink:contact-subject", selectSubject)
    return () => window.removeEventListener("tidal-ink:contact-subject", selectSubject)
  }, [])

  function updateDraft(field: keyof Draft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitState("idle")
    setSubmitStatus("")
  }

  async function copyEmail() {
    setCopyState("copying")
    try {
      await navigator.clipboard.writeText(content.email)
      setCopyState("success")
      toast.success("Email address copied", {
        description: content.email,
      })
    } catch {
      setCopyState("error")
      toast.error("Could not copy the email address", {
        description: "Select the address and copy it manually instead.",
      })
    }
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitState === "sending") return
    const form = event.currentTarget
    const replyEmail = form.elements.namedItem("email")
    const nextErrors: DraftErrors = {}
    if (!draft.name.trim()) nextErrors.name = "Enter your name."
    if (!draft.email.trim() || !(replyEmail instanceof HTMLInputElement) || !replyEmail.validity.valid) {
      nextErrors.email = "Enter a valid reply email address."
    }
    if (!draft.subject.trim()) nextErrors.subject = "Enter a subject or choose a suggestion."
    if (draft.message.trim().length < 20) nextErrors.message = "Write a message of at least 20 characters."
    setErrors(nextErrors)
    const firstInvalid = (["name", "email", "subject", "message"] as const).find((field) => nextErrors[field])
    if (firstInvalid) {
      setSubmitState("idle")
      setSubmitStatus("Check the highlighted fields. Nothing has been sent.")
      const control = form.elements.namedItem(firstInvalid)
      if (control instanceof HTMLElement) control.focus()
      return
    }

    setSubmitState("sending")
    setSubmitStatus("Sending your message…")
    try {
      const body = new FormData(form)
      const response = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      })
      if (!response.ok) throw new Error(`FormSubmit answered ${response.status}`)
      setDraft({ name: "", email: "", subject: "", message: "" })
      setSubmitState("success")
      setSubmitStatus(`Message sent. I will reply to ${draft.email.trim()}.`)
      toast.success("Message sent", { description: `I will reply to ${draft.email.trim()}.` })
    } catch {
      setSubmitState("error")
      setSubmitStatus(`Message not sent. Try again, or email ${content.email} directly.`)
      toast.error("Message not sent", { description: `Try again, or email ${content.email} directly.` })
    }
  }

  const copyStatus = copyState === "success"
    ? `Copied ${content.email}.`
    : copyState === "error"
      ? "Copy failed. Select the email address above and copy it manually."
      : copyState === "copying"
        ? "Copying the email address…"
        : ""

  return (
    <section id="contact" aria-labelledby={`${id}-heading`} className="scroll-mt-24 py-16 min-[840px]:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 min-[600px]:px-6 min-[840px]:grid-cols-12 min-[840px]:gap-12 min-[840px]:px-8">
        <div className="min-w-0 min-[840px]:col-span-5">
          <p className="font-mono text-label-large text-on-surface-variant">{content.sectionIndex}</p>
          <h2 id={`${id}-heading`} className="mt-3 text-headline-large-emphasized text-on-surface">{content.heading}</h2>
          <p className="mt-5 text-body-large text-on-surface-variant">{content.lead}</p>
          <div className="mt-8 rounded-xl bg-tertiary-container p-5 text-on-tertiary-container min-[600px]:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-label-large">{content.isSampleEmail ? "Sample email address" : "Email address"}</p>
                <p className="mt-2 break-all text-title-large select-text">{content.email}</p>
              </div>
              <Shape
                name={copyState === "success" ? "very-sunny" : copyState === "error" ? "12-sided-cookie" : "sunny"}
                aria-hidden="true"
                className="size-12 bg-on-tertiary-container motion-reduce:transition-none"
              />
            </div>
            {content.isSampleEmail && <p className="mt-3 text-body-medium">{content.sampleEmailNote}</p>}
            <Button type="button" variant="tonal" size="md" className="mt-5" disabled={copyState === "copying"} onClick={copyEmail} disableRipple={reducedMotion}>
              {copyState === "copying" ? "Copying address…" : copyState === "success" ? "Copy address again" : "Copy email address"}
            </Button>
            <p aria-live="polite" aria-atomic="true" className="mt-3 min-h-6 text-body-medium">{copyStatus}</p>
          </div>
          <p className="mt-5 text-body-medium text-on-surface-variant">{content.workingNotes}</p>
          <div className="mt-8">
            <h3 className="text-title-medium text-on-surface">Elsewhere</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {content.socials.map((social) => (
                <li key={social.name}>
                  <Button
                    variant="tonal"
                    size="md"
                    className={`h-auto min-h-12 px-4 py-3 ${BRAND_BUTTON_CLASS[social.brand]}`}
                    render={<a href={social.url} target="_blank" rel="noopener noreferrer" />}
                    nativeButton={false}
                    disableRipple={reducedMotion}
                  >
                    <BrandIcon brand={social.brand} className="size-5" />
                    {social.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form noValidate onSubmit={submitForm} aria-label="Send a message" aria-describedby={`${id}-notice`} className="min-w-0 rounded-xl bg-surface-container-low p-5 min-[600px]:p-8 min-[840px]:col-span-7">
          <p id={`${id}-notice`} className="mb-7 text-body-medium text-on-surface-variant">{content.draftNotice}</p>
          <input type="hidden" name="_subject" value={draft.subject} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://faza-al-banna.netlify.app/#contact" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="grid gap-6 min-[600px]:grid-cols-2">
            <Field data-invalid={Boolean(errors.name)}>
              <FieldLabel htmlFor={`${id}-name`}>Name (required)</FieldLabel>
              <Input id={`${id}-name`} name="name" autoComplete="name" required value={draft.name} onChange={(event) => updateDraft("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${id}-name-error` : undefined} />
              <FieldError id={`${id}-name-error`}>{errors.name}</FieldError>
            </Field>
            <Field data-invalid={Boolean(errors.email)}>
              <FieldLabel htmlFor={`${id}-email`}>Reply email (required)</FieldLabel>
              <Input id={`${id}-email`} name="email" type="email" autoComplete="email" required value={draft.email} onChange={(event) => updateDraft("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${id}-email-error` : undefined} />
              <FieldError id={`${id}-email-error`}>{errors.email}</FieldError>
            </Field>
            <Field data-invalid={Boolean(errors.subject)} className="min-[600px]:col-span-2">
              <FieldLabel htmlFor={`${id}-subject`}>Subject (required)</FieldLabel>
              <Input id={`${id}-subject`} name="subject" list={`${id}-subjects`} required value={draft.subject} onChange={(event) => updateDraft("subject", event.target.value)} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? `${id}-subject-error` : undefined} />
              <datalist id={`${id}-subjects`}>
                {content.subjectPresets.map((subject) => <option key={subject} value={subject} />)}
              </datalist>
              <FieldError id={`${id}-subject-error`}>{errors.subject}</FieldError>
            </Field>
            <Field data-invalid={Boolean(errors.message)} className="min-[600px]:col-span-2">
              <FieldLabel htmlFor={`${id}-message`}>Message (required)</FieldLabel>
              <Textarea id={`${id}-message`} name="message" required minLength={20} rows={6} className="min-h-40 resize-y" value={draft.message} onChange={(event) => updateDraft("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={`${id}-message-help${errors.message ? ` ${id}-message-error` : ""}`} />
              <FieldDescription id={`${id}-message-help`}>At least 20 characters.</FieldDescription>
              <FieldError id={`${id}-message-error`}>{errors.message}</FieldError>
            </Field>
          </div>
          <Button type="submit" variant="filled" size="md" className="mt-7" disabled={submitState === "sending"} disableRipple={reducedMotion}>
            {submitState === "sending" ? "Sending…" : "Send message"}
          </Button>
          <p aria-live="polite" aria-atomic="true" className="mt-4 min-h-6 text-body-medium text-on-surface-variant">{submitStatus}</p>
        </form>
      </div>
    </section>
  )
}
