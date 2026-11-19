---
version: alpha
name: Tidal Ink Expressive Portfolio
description: A new standalone Tidal Ink portfolio built from scratch with Material 3 Expressive, shadcn M3E, authentic shapes, and purposeful spring motion.
colors:
  primary: "#006A61"
  on-primary: "#FFFFFF"
  primary-container: "#9EF2E6"
  on-primary-container: "#005049"
  surface: "#F6FAFE"
  on-surface: "#181C1F"
typography:
  display-small:
    fontFamily: Roboto Flex Variable
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.222222
    letterSpacing: 0px
  display-small-emphasized:
    fontFamily: Roboto Flex Variable
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.222222
    letterSpacing: 0px
  title-medium:
    fontFamily: Roboto Flex Variable
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.2px
  headline-large:
    fontFamily: Roboto Flex Variable
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0px
  body-large:
    fontFamily: Roboto Flex Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px
  label-large:
    fontFamily: Roboto Flex Variable
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.428571
    letterSpacing: 0.1px
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 28px
  3xl: 32px
  4xl: 48px
spacing:
  unit: 4px
  control-gap: 8px
  compact-gap: 12px
  content-gap: 16px
  group-gap: 24px
  region-gap: 32px
  section-gap: 64px
components:
  action-filled:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-medium}"
  hero-tonal-panel:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.3xl}"
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-large}"
---

# Material 3 Expressive Portfolio — Agent Design Contract

## Overview

Build a portfolio that feels **personal, tactile, optimistic, and deliberately composed**: editorial typography, tonal surfaces, a few memorable Material silhouettes, and fluid spring motion. Expressiveness must make the owner's work and contact path easier to notice—not compete with them. Google's research emphasizes that visual excitement cannot compensate for unfamiliar interaction patterns or missing labels; keep portfolio navigation recognizable.[24]

**MUST**, **SHOULD**, and **MAY** express required rules, defaults with documented exceptions, and optional enhancements. Unmarked design decisions below are project defaults, not claims that Google mandates them.

### Scope and source of truth

- This file governs a completely new, standalone portfolio project. Create its layout, information architecture, components, and technical foundation from the supplied brief. Do not assume a prior application, framework, route structure, or design to preserve. Publishing and unrelated work are outside the build scope.
- Material 3 Expressive is an expansion of Material 3, **not Material 4**. Apply Google's tactics: varied shapes, rich role-based color, emphasized typography, containment, natural motion, adaptive components, and selective hero moments.[20]
- The required component source is **[shadcn M3E](https://shadcn-m3e.crystaworld.dev/)**, registry namespace `@m3e`. It is a third-party implementation, not Google's official web component distribution; retain its attribution.[3][43]
- For Google design intent, consult Material guidance. For callable web APIs, props, filenames, classes, and current behavior, consult the installed shadcn M3E source and its corresponding docs. Do not turn Android/Compose API names into invented React APIs.
- Follow project instructions and accessibility requirements first; use this contract for the portfolio's design choices. If an installed library contradicts a snippet here, inspect and reconcile the difference before changing code. Record significant deviations.
- **Tidal Ink is the color identity for the new project.** Use its semantic roles from the start. The YAML is a light-mode summary; `palette.css`, `palette.json`, and the matching provider configuration define both modes. Base the site content only on supplied owner information or explicitly identified sample data.
- Implement only components the site actually needs. Do not turn a portfolio into an Android settings app, dashboard, or component catalog merely to demonstrate Material.

### Three design priorities

1. **Work first:** visitors can identify the owner, understand their focus, inspect projects, and make contact without learning a novel interaction.
2. **One visual language:** M3E components, Material Symbols, role tokens, compatible shape families, and one motion scheme.
3. **Selective delight:** one primary hero composition and, optionally, one further hero moment such as a featured-project expansion. Google specifically recommends limiting hero moments to one or two.[20]

## Colors

### Tidal Ink — color identity

**Direction:** deep teal for identity and high-emphasis actions, blue-slate for quieter controls, warm amber for small expressive accents, and mineral-blue neutrals for reading surfaces. The palette is a custom art direction for this portfolio, not an official Google preset or a claim of human-agency curation. Material 3 Expressive does not require a particular hue.[20][46]

- Light action: **#006A61**; dark action: **#82D5CA**.
- Light canvas/ink: **#F6FAFE** / **#181C1F**; dark canvas/ink: **#0F1417** / **#DFE3E7**.
- Use the matching `on-*` role on every accent/container; never use a seed color as a runtime fill.
- Keep roughly 80% of the visible UI area neutral, 15% in primary/secondary tonal treatments, and 5% amber/decorative accent. This is an editorial balance guideline, not an exact quota or a Material requirement.
- Hero: quiet neutral canvas, teal primary CTA, one mint primary-container shape, and one small amber tertiary-container counterpoint. Do not color the entire hero saturated teal or turn every card into an accent panel.
- Primary is the action family; secondary handles quieter actions/selections; tertiary supports expression rather than indicating success or urgency.
- Status success/warning/info are optional **project extensions**, exported under `--portfolio-color-*`; error uses the standard M3 error family. Always include labels/icons, not color alone.
- Supporting files: `COLOR-PALETTE.md` for the complete light/dark role inventory and integration instructions; `palette.css` for 53 generated role variables plus 12 status variables per mode; `palette.json` for all exact values and tonal families; `theme.config.ts` for the provider settings; `status.tailwind.css` for optional status utility aliases.
- Keep this DESIGN.md as the new project's single design contract, with the palette files alongside it or in a documented design-assets directory.

### Roles, not arbitrary swatches

MUST use semantic utilities such as `bg-surface`, `text-on-surface`, `bg-primary-container`, `text-on-primary-container`, `border-outline`, and `fill-tertiary`. Custom CSS MUST use the corresponding `--md-sys-color-*` variables. Do not hardcode hex, RGB, or OKLCH values inside components; raw colors belong only in theme generation, approved static exports, and source assets.[5][46]

Required pairing rules:

- `primary` → `on-primary`; `primary-container` → `on-primary-container`.
- Equivalent pairs for secondary, tertiary, and error families.
- `surface` and `surface-container-*` → `on-surface`, or `on-surface-variant` for supporting content.
- `inverse-surface` → `inverse-on-surface`; inverse actions use `inverse-primary`.
- `outline` identifies a necessary boundary; `outline-variant` is for lower-emphasis dividers or borders whose control is identifiable by other adequately contrasting content.[5][46]

Palette roles are not permission to skip contrast testing. Custom backgrounds, opacity, image overlays, scoped themes, disabled styles, and animation can invalidate intended pairings. Never reduce body-copy contrast with arbitrary `/50` or opacity utilities.

### Surface and accent allocation

- Page canvas: `surface`.
- Resting project cards: `surface-container-low` or `surface-container`.
- Supporting grouped content: `surface-container`; raised/contextual surfaces: `surface-container-high`.
- Code blocks and input regions: `surface-container-highest` where appropriate.
- Hero panel: one restrained primary or tertiary container, with its matching `on-*` role.
- Filled primary action: primary pair. Secondary action: tonal, outlined, or text variant.
- Tertiary accents: occasional decorative shape, featured metadata, or compositional contrast—not a competing primary CTA everywhere.
- Keep the same role assigned to a layout region across breakpoints; don't swap a region's semantic colors solely because it becomes mobile.[46]

Prefer tonal containment over ubiquitous outlines, translucent glass, gradients, and heavy shadows. Keep the shared UI on Tidal Ink. Project screenshots and logos retain their authentic colors, but arbitrary image-driven recoloring or a different `M3ThemeScope` is not permitted for the shared portfolio chrome without a separately approved art direction.[6]

### Theme policy

Use `M3eProvider` once at the application boundary. It combines `ColorModeProvider` for light/dark/system and `M3ThemeProvider` for palette, motion, and shape scale.[6][15]

- Honor the saved visitor choice; otherwise follow system color mode.
- Use the Tidal Ink source colors and `variant: "image"` exactly as below. Here `image` means the library accepts independent primary/secondary/tertiary/neutral key colors; it does not require an image or `useImageTheme`. Do not switch to `baseline`, call `setSeedColor`, or change to another color variant: that would change the curated secondary/tertiary families.[50]
- Start from `shapeScale: 1`, `motion: "expressive"`, `contrast: "standard"`, and `spec: "2021"` to match the inspected library defaults; a reviewed change to `2025` is a palette decision, not something required by the name Expressive.[45]
- The palette's `variant: "expressive"` and the animation scheme's `motion: "expressive"` are **different settings**. A tonalSpot palette can still use expressive motion. `baseline` ignores the seed.[6]
- Use `useM3Theme().updateTheme(...)` only for explicitly approved settings while keeping this palette configuration intact; use `useColorMode()` for light/dark/system changes. Do not call `setSeedColor` for this fixed multi-key-color identity. Do not invent `ThemeProvider`, `useTheme`, or a generic `setTheme` API from older examples.[1][6]
- Produce stable first-paint colors. For SSR/static output, export/freeze light and dark role CSS from the approved theme and apply the initial color mode before paint using the framework's supported, CSP-compatible approach. A client provider alone is not evidence of flash-free server rendering.[6]
- Do not animate every color on theme switch; the color-mode provider deliberately disables transitions during the swap by default.[6]

For this fixed palette, the installed color module exposes the exact build-time helper `themeCss(options)`, which returns both `:root` and `.dark` role blocks. The supplied `palette.css` is already generated. To regenerate, use the following exact options with Material Color Utilities 0.4.0 and the inspected M3E source. Import the exported CSS after M3E's default styles, and keep provider configuration in sync.[50]

```ts
import { themeCss } from "@/lib/m3e/color"

process.stdout.write(
  themeCss({
    source: {
      primary: "#006B62",
      secondary: "#4F6078",
      tertiary: "#8F5B15",
      neutral: "#74777A",
    },
    variant: "image",
    spec: "2021",
  })
)
```

Run this in the new project's configured TypeScript tooling with its aliases resolved; it is a build-time script, not browser code. For a fixed brand, do not persist a user-selected palette unless the site offers that feature. For pre-paint mode setup, validate the saved `color-mode` value (`light`, `dark`, `system`), resolve system via `matchMedia`, then set the root class before first paint. Handle unavailable storage, use the same key as the provider, and integrate the script with the framework's CSP/hydration support rather than copying a generic inline script blindly.[6][49]

## Typography

MUST use the library's type roles, not an unrelated Tailwind type ramp. The Material scale has display, headline, title, body, and label roles in three sizes, plus emphasized versions. shadcn M3E exposes `text-<role>-<size>` and `text-<role>-<size>-emphasized` utilities.[9][47]

Default mapping:

- Hero identity: `text-display-small-emphasized`, increasing to medium/large only when it fits without crowding.
- Section titles: `text-headline-medium` or `text-headline-large`.
- Project titles: `text-title-large` or `text-headline-small`.
- Reading copy: `text-body-large`; supporting metadata: `text-body-medium`.
- Controls/chips: the component's built-in label style.
- Source snippets: `font-mono`; retain readable line height and horizontal scrolling inside the code block, not on the whole page.

Use Roboto Flex Variable for sans and JetBrains Mono Variable for code by default, as the library documents. A separately approved display font MAY be added as a scoped editorial exception; do not replace the complete M3 control type system with it. Use licensed font files, necessary subsets only, and an intentional fallback strategy.[9][43]

Use `-emphasized` for hierarchy rather than indiscriminate `font-bold`. Do not continuously animate font weight/width, or tightly track small labels. Keep body copy around 60–75 characters per line as a portfolio reading default. Use real heading hierarchy with one primary page `h1`; visual type roles do not dictate HTML heading level.

MUST import `cn` from `@/lib/m3e/cn`: it understands that `text-label-large` is a size utility and `text-on-primary` is a color utility. An unconfigured generic Tailwind merge can discard one.[9]

## Layout

### Composition and spacing

Use an editorial portfolio structure rather than an undifferentiated bento grid:

- Hero: identity and concise positioning, clear project CTA, quieter contact/resume route, one distinctive shape or clipped portrait.
- Selected work: a featured project and a coherent rhythm of supporting projects. Show real title, contribution, context, and outcome when provided; never invent metrics or clients.
- About/capabilities: compact, scannable evidence of the owner's actual experience.
- Contact/footer: a supplied working contact path, supplied social links, and truthful status. Omit unavailable actions or identify unconfigured sample data instead of inventing destinations.

Design a new information architecture around the supplied content. Use a semantic single-page portfolio with anchors by default; add project-detail routes only when the content warrants them. This structure is a starting point, not a fixed template or permission to fabricate missing achievements.

Project layout defaults:

- Four-CSS-pixel spacing base; prefer 8, 12, 16, 24, 32, 48, 64, and 96px intervals.
- Content shell: approximately `max-width: 80rem`, centered; text columns usually narrower.
- Inline gutters: 16px compact, 24px medium, 32px expanded; allow more on wide editorial layouts.
- Section spacing: 48–64px compact, 80–96px expanded.
- Intentional asymmetric hero on wide windows; logical single-column reading order on compact windows.
- Use intrinsic sizing, `minmax(0, 1fr)`, wrapping, container queries where useful, and logical properties. Do not force equal-height text boxes with clipped copy.

These are portfolio defaults, not native Material dimension mandates. Component dimensions come from the installed library; do not apply a blanket dp-to-physical-pixel conversion or scale the whole interface.

### Adaptation and navigation

Define project layout bands at **less than 600 CSS px**, **600–839px**, and **840px and wider**; these are explicit implementation defaults, not assumptions that Tailwind's `md`/`lg` aliases equal them. Use `min-[600px]:` and `min-[840px]:` for these bands, or define named breakpoint tokens once; don't silently reinterpret `md:`/`lg:`. Adapt earlier/later if real content requires it, and record the reason.

- Compact: stacked hero, one-column work, small decorative footprint, readable navigation with labels.
- Medium: two-column work where cards remain readable; hero may split if the text fits.
- Expanded: stronger asymmetry, two/three-column work where warranted; never stretch body copy across the viewport.
- A conventional header is usually best for a portfolio. A Material nav bar/rail MAY replace it only if it improves actual section or route navigation. Do not show duplicate header, rail, bottom bar, and FAB navigation together.
- Use normal anchor links and section IDs for in-page navigation, or the selected router if real project-detail routes are needed. Use `aria-current` appropriately. Tabs are not substitutes for route navigation.
- Reserve space for sticky bars, `scroll-margin-top` on anchored headings, and safe-area insets on fixed mobile elements. Sticky UI MUST NOT obscure focus, headings, or contact actions.
- Reflow without loss of functionality at 320 CSS px and at 400% zoom on a 1280px-wide starting viewport; no page-wide horizontal overflow from shapes or animation.[38]

## Elevation & Depth

MUST use `shadow-elevation-0` through `shadow-elevation-5`, not hand-tuned stacks of generic shadows. Use tone before shadow; elevation communicates layering, not decoration on every container.[11]

- Resting filled card/panel: elevation 0.
- Elevated card/button: level 1 as supplied by the component.
- Menus/raised bars: typically level 2; dialogs/FABs follow their component defaults, commonly level 3.
- Preserve the built-in hover/press elevation response.
- Portaled overlays must remain above page decoration and sticky navigation. Keep one documented z-index hierarchy; do not fix layering bugs with random `z-[99999]` values.
- Reserve scrims for actual modality. Keep text opaque and readable; avoid page-wide blur or transparency as a substitute for depth.

## Shapes

### Authentic Material geometry is required

Use the original Material shape vocabulary for decorative moments, not arbitrary CSS blobs, emoji, stock starbursts, or hand-drawn approximations presented as Material. Google provides 35 expressive shapes and recommends abstract shapes for imagery, avatar masks, and decorative UI, used sparingly.[20][21]

For this stack, install **`@m3e/shape`** and use its `Shape`, `ShapeName`, and `SHAPE_NAMES`. The component clips its content and morphs when its `name` changes; its normalized polygons have matching point counts.[13][18][48]

```tsx
import { Shape } from "@/components/m3e/shape"

export function HeroDecoration() {
  return (
    <Shape
      name="sunny"
      aria-hidden="true"
      className="pointer-events-none size-32 bg-tertiary-container sm:size-48"
    />
  )
}
```

Use names from the **installed** `SHAPE_NAMES`, not Compose enum names. Verified examples include `sunny`, `very-sunny`, `4-leaf-clover`, `12-sided-cookie`, `soft-burst`, `puffy`, `puffy-diamond`, `arch`, `flower`, and `ghost-ish`. Web names and the current Compose catalog are not assumed to match one-to-one.[18][48]

Shape composition rules:

- Choose two or three recurring silhouettes for the portfolio; one dominant shape per hero composition, with at most two small supporting decorative shapes in that region. These limits are house rules for restraint.
- Use clovers/cookies/puffy forms for softness, bursts/sunny forms for emphasis, and arch/oval/pill crops for portraits where they preserve the subject. A shape is not a fixed semantic symbol.[21]
- Keep decorative shapes out of the reading column, behind content, `aria-hidden`, unfocusable, and `pointer-events-none`. Do not put meaningful text or focusable children inside an `aria-hidden` shape.
- For meaningful portraits, keep accessible alt text on the image; do not hide the whole shape. Verify crops at all breakpoints, especially faces and project details.
- Do not clip project screenshots so aggressively that the work becomes unreadable. Usually decorate around a rectangular screenshot instead.
- Keep the focus ring and target geometry on the semantic control outside a decorative clipped child.
- Preserve upstream shape copyright, MIT/Apache notices, and font licenses as applicable. The upstream NOTICE explicitly attributes the shape outlines to Google and the web port to its contributors.[43]

### Corner radius scale

Use the remapped M3E scale: `rounded-xs` 4px, `sm` 8px, `md` 12px, `lg` 16px, `xl` 20px, `2xl` 28px, `3xl` 32px, and `4xl` 48px at `shapeScale: 1`. `rounded-full` is effectively infinite (the M3 full-corner token is 9999px; Tailwind may express its full-radius utility differently).[8][17]

- Preserve each component's specified corner behavior; do not force every card, dialog, and button to the same radius.
- A large editorial hero panel MAY use `rounded-3xl`/`rounded-4xl`; component overrides need a reason.
- **Never override a morphing button with `rounded-full`.** The library uses actual half-height radii (`--btn-h2`) and `--btn-r*` variables; animating 9999px to a small radius with spring overshoot can flash square corners.[8]
- A deliberate mixture of rounded and squarer forms is welcome. Mixing shapes is not permission for random radii on every element.[20][21]

### Shape motion ownership

Keep the library's built-in `clip-path` morph as the default. The inspected `Shape` uses `motion-effects-slow` even though Google broadly categorizes shape changes as spatial motion; that is an implementation detail to preserve unless a reviewed override improves it. Do not silently "correct" it or have Motion animate the same `clip-path` simultaneously.[13][22]

Morph on a meaningful hover/focus/state change; provide a corresponding keyboard interaction when it signals affordance. No perpetual cycling through all shapes. Reduced motion MUST make the morph instant or static, not merely replace its easing with `linear`.

## Components

### Required stack and installation

The inspected registry requires **React 19, Tailwind CSS v4, Base UI**, a configured shadcn project, and source aliases. It copies owned component source into the application; it is not an npm component package named `shadcn-m3e`.[3]

Default foundation: React 19, TypeScript, Vite, Tailwind CSS v4, Base UI, shadcn M3E, and Motion. Confirm current compatible package versions and the initialization procedure before scaffolding. Configure aliases, CSS ordering, one lockfile, and a browser-rendered app root deliberately. The initial plan must explain any proposed alternative stack.

Initialize shadcn once in the newly scaffolded compatible project:

```bash
npx shadcn@latest init -b base -p maia
```

After initialization, register the following namespace in the generated `components.json`, preserving the configuration created by the CLI:[3]

```json
{
  "registries": {
    "@m3e": "https://shadcn-m3e.crystaworld.dev/r/{name}.json"
  }
}
```

Then add the base and only required components, using the new project's selected package manager:[3][48]

```bash
npx shadcn@latest add @m3e/base
npx shadcn@latest add @m3e/button @m3e/card @m3e/shape
```

Use the matching `bunx`/`pnpm dlx` command in a Bun/pnpm repository. Avoid `@m3e/all` unless the project genuinely needs the complete library. Record resolved package versions in the project lockfile and record the upstream registry revision when reviewing imports. Review generated source before customizing it; later additions must not overwrite project-specific component work without inspection.

Import the documented styles after Tailwind, adjusting only the final relative path to the actual stylesheet location. Preserve any framework-required import ordering:[3]

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@fontsource-variable/roboto-flex";
@import "@fontsource-variable/jetbrains-mono";
@import "./lib/m3e/m3e.css";
```

Verify imported dependencies exist. Do not separately generate duplicate competing colors/radii in `@theme`, overwrite the M3E stylesheet with a generic shadcn theme, or edit generated token/icon files by hand.[1][17]

### Provider composition

Illustrative **browser-rendered** boundary after installation; integrate it with the actual framework rather than creating a second root. A `"use client"` directive does not disable server prerendering: see the SSR warning immediately below.[6][25]

```tsx
"use client"

import type { ReactNode } from "react"
import { MotionConfig } from "motion/react"
import { M3eProvider } from "@/components/m3e/m3e-provider"

export function DesignProviders({ children }: { children: ReactNode }) {
  return (
    <M3eProvider
      colorMode={{ defaultMode: "system", toggleKey: false }}
      theme={{
        persist: false,
        defaultTheme: {
          source: {
            primary: "#006B62",
            secondary: "#4F6078",
            tertiary: "#8F5B15",
            neutral: "#74777A",
          },
          variant: "image",
          contrast: "standard",
          spec: "2021",
          motion: "expressive",
          shapeScale: 1,
        },
      }}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </M3eProvider>
  )
}
```

**Conditional SSR/prerendering warning (not a requirement to add SSR):** in the inspected `ColorModeProvider`, the initial resolved system mode calls `window.matchMedia` during render. The default system-mode provider therefore needs an SSR-safe adapter before use in a prerendered app; `"use client"` alone is not a fix. For that rendering path, keep a deterministic server/client initial mode, resolve browser preferences after hydration, and use pre-paint color CSS/mode setup to avoid flash. Do not disable SSR for the entire portfolio or hide its content until mount merely to avoid this problem.[49]

The palette provider uses `persist: false` to keep this fixed brand configuration authoritative. This does not disable the separate color-mode preference: keep light/dark/system persistence. Do not add a palette picker unless explicitly requested. The default `d` color-mode shortcut is disabled here to avoid an undiscoverable single-character keyboard shortcut. Add `TooltipProvider`/`Toaster` only where the installed component guides require them.[3][6]

### API and composition discipline

- Import UI from `@/components/m3e/*`, helpers from `@/lib/m3e/*`; preserve a single resolved component identity. Do not import the upstream docs app or demo-only helpers.[1][2]
- Choose `Button` variants `filled`, `tonal`, `elevated`, `outlined`, or `text`; shapes `round`/`square`; sizes `xs`, `sm`, `md`, `lg`, `xl`. Prefer M3 names over compatibility aliases. In the inspected source, `sm` is 40px high, `md` 56px, and `lg` 96px: do not assume a familiar shadcn size label has its old dimensions.[2][16]
- The implicit Button size is the 40px `default` compatibility size, **not** `md`. Always specify `size` for standalone controls; use `md`/`icon-md` (56px) to meet the 48px hit-area policy without custom geometry. `xs` (32px) and `sm`/`default` (40px) are not compliant standalone targets unless their hit areas are deliberately extended and measured.[16]
- Primary hero CTA: explicitly filled `size="md"` by default; supporting CTA: tonal/outlined. Avoid multiple equally dominant filled actions in the same group.
- Use `size="icon-md"` for a 56px icon control where appropriate. Smaller visible buttons need a reviewed non-overlapping hit-area strategy to meet the portfolio's 48px target policy; do not blindly change height and break half-height radius variables.
- Navigation uses links, actions use buttons. Base UI composition uses `render` and `nativeButton={false}` for a non-button target; do not paste Radix `asChild` patterns.[2]

```tsx
<Button
  variant="filled"
  size="md"
  render={<a href="#work" />}
  nativeButton={false}
>
  Explore my work
</Button>
```

- A project with one destination SHOULD expose a real titled link. A card with separate demo/source actions MUST NOT wrap those links in another link or button. `interactive` styling alone is not complete keyboard/semantic behavior.
- Do not use clickable `div`s with only `onClick`; preserve activation semantics, focus, and names. A tooltip is supplemental, not an icon button's accessible name.
- Use chips for metadata or actual filtering, not decoration that pretends to be clickable. Use toggle/button-group selection APIs for real filter state; don't invent state using color alone.
- Preserve Base UI focus management, portal behavior, keyboard interactions, and `data-*` states. Do not replace them with hand-built modal logic to add animation.
- Use the actual Base UI-backed M3E exports and props. Do not assume Radix `asChild`, arbitrary local extensions, or other libraries' component signatures apply.[1][2]
- Snackbar: import `toast` from `@/components/m3e/sonner`, not directly from `sonner`. The upstream implementation is a single-item queue with a compatible call style, not a wrapper retaining every Sonner option.[1]

### Interaction states and icons

Keep the library's state layer, ripple, focus ring, and press controller. The documented state-layer opacities are hover 8%, focus/pressed 10%, dragged 16%; `data-press` persists at least 225ms to preserve a quick tap's feedback.[10]

- Style the library's `data-press`, not a competing `:active` animation. Do not add a second ripple to a component that already has one.
- Do not confuse transient `data-press` with toggle `data-pressed` or selection `data-selected`. Base UI presence attributes sometimes require `data-[selected]:`, not a variant that only matches the string `"true"`.[1]
- Use Material Symbols Rounded via `Icon`; outlined normally, filled when selected with the documented `fill="auto"` behavior. Brand marks MAY use licensed brand SVGs rather than fake Material glyphs.[12]
- Icon-only controls need `aria-label`; decorative icons need no redundant spoken label. Run `gen:icons` and `check:icons` after adding glyphs, and commit the generated application icon bundle. Runtime-built icon names require the documented `// @icons ...` declaration.[12]

## Motion & Choreography

### Feel and ownership

Motion is a required part of this portfolio—not an optional finishing layer. Aim for **softly elastic, responsive, interruptible, and precise**. The result should feel polished without forcing visitors to wait for animation to read, navigate, or click.

Use **Motion for React**, package `motion`, imports from `motion/react`, for page-level choreography and layout changes. Install a single compatible Motion dependency; do not install both `motion` and `framer-motion`. Another framework is acceptable only for an actual capability gap and must preserve this contract's tokens, accessibility, and performance.[27][31]

Ownership boundary:

- **M3E CSS/components:** ripple, press radius, state layers, selection feedback, built-in menus/dialogs/sheets, and `Shape` clip morphs.
- **Motion:** section composition, modest card-media movement, project-list rearrangement, purposeful shared elements, and optional project-detail transitions.
- One system owns each animated property on each DOM element. Never apply CSS `transition-all` and Motion to the same transform/opacity/radius. An unstyled Motion wrapper can animate the group while the M3E child owns its internal feedback.
- Do not wrap every button with `whileTap={{ scale: ... }}`; the native M3E press morph is already the interaction.

### Spring tokens

Google separates **spatial** motion (position, rotation, size, corners) from **effects** (opacity/color, no overshoot), each at fast/default/slow speed.[22]

For M3E-owned CSS use `motion-spatial-fast|default|slow`, `motion-effects-fast|default|slow`, or the documented `transition-shape`/popup utilities. Supply the specific transition property. Read both the `--md-sys-motion-spring-*-*` easing and its matching `*-duration` token; the inspected library samples real spring responses into CSS `linear()` curves.[7][17]

For custom Motion transitions, keep one central adapter, for example `lib/design/motion.ts`. These expressive reference pairs come from the inspected Compose tokens; the Motion damping coefficient is **derived**, not copied from the ratio field:[27][39]

```ts
import type { Transition } from "motion/react"

// M3 damping is a ratio zeta; Motion damping is a coefficient.
// With unit mass: c = 2 * zeta * sqrt(stiffness).
function materialSpring(stiffness: number, dampingRatio: number): Transition {
  return {
    type: "spring",
    mass: 1,
    stiffness,
    damping: 2 * dampingRatio * Math.sqrt(stiffness),
  }
}

export const expressiveMotion = {
  spatial: {
    fast: materialSpring(800, 0.6),
    default: materialSpring(380, 0.8),
    slow: materialSpring(200, 0.8),
  },
  effects: {
    fast: materialSpring(3800, 1),
    default: materialSpring(1600, 1),
    slow: materialSpring(800, 1),
  },
}
```

Rules for that adapter:

- These are a Compose-derived **web starting point**, not a claim of device-independent identical timing. Motion's rest thresholds, distances, and retargeting affect perceived duration. Verify the result alongside M3E components.
- Do not use `damping: 0.6` in Motion; that is not the M3 damping ratio conversion.
- Do not combine physics `stiffness`/`damping`/`mass` with duration/bounce settings expecting both to apply; Motion's physics parameters take precedence.[27]
- Assign spatial and effects transitions per animated property. Never inherit a bouncy spatial spring onto color/opacity accidentally.
- If the UI lets visitors select a standard motion scheme, bridge that preference to the Motion adapter too. Changing M3E's `data-motion` only changes its CSS, not your JS spring objects. Otherwise keep both explicitly expressive.
- Prefer the installed library's generated CSS springs to hand-coded fallback curves. For unsupported CSS `linear()`, use a tested non-bouncy transition or instant state. Google's cubic-bezier conversion table is a fallback for non-interruptible, non-gesture animations, not a better substitute for retargetable springs.[23]

### Portfolio motion recipes

The distances, counts, and delays here are **house budgets**. They tune a subtle portfolio presentation; spring settling is not a hard-coded duration guarantee.

1. **Signature hero choreography (required):** create one coherent 2.5D arrangement from an authentic Material silhouette, portrait/media where available, and a smaller contrasting accent. Keep text/primary links and meaningful media visible at first paint. After hydration, the decorative wrapper may settle from up to 24–32px offset, scale 0.94 to 1, and at most 8° rotation; stagger the supporting layers by 40–60ms, at most four items. Pair it with one state-driven shape morph on hero focus-within/fine-pointer hover, so the composition responds to attention rather than spinning forever. Use separate wrapper transforms and the child Shape's CSS morph; never animate their same property twice. The signature must still look designed as a static reduced-motion composition. Never hide or delay the LCP heading/image to stage this effect.
2. **Section arrival:** one restrained 8–16px translation plus effects fade, once per section, only after progressive enhancement is active. No word-by-word scroll reveals. Content is visible if JS or observers fail.
3. **Project hover/focus:** preserve the component state layer/elevation. Optionally lift the media wrapper by up to 4px or scale the image to at most 1.02. Use a stable crop; don't shrink the click target or tilt readable paragraphs. Pointer-specific treatments require `(hover: hover) and (pointer: fine)` and must not hide actions from touch users.
4. **Filter change:** keep filters responsive; animate result positions with `layout="position"`, stable project IDs, and a spatial spring. Crossfade added/removed items; announce result count politely and keep focus on the selected filter. Prefer position-only movement if resizing would stretch screenshots/text.[28]
5. **Shared project detail:** optional, and only the second hero moment. Scope `layoutId`s with `LayoutGroup`; retain real links and browser Back/deep linking. Use an accessible M3E dialog or a properly implemented route, not a hand-built full-page overlay. If the installed router cannot safely coordinate shared elements, use a short content transition instead.
6. **Contact confirmation:** truthful inline status or M3 snackbar after actual copy/send success. Feedback text is immediate; a small icon/shape response MAY celebrate it. No simulated sent states.
7. **Loading:** use actual loading/progress components for real pending work. Never add a fake spinner or artificial loading delay to display the shape library. Give progress an accessible status independent of its animation.

### Motion implementation safeguards

- Above-the-fold Motion content uses `initial={false}` or another verified visible initial state. Do not hide essential content behind animation startup. If using SSR/prerendering, remember that `initial={{ opacity: 0 }}` can become hidden server output; verify failure behavior.[31]
- Keep `AnimatePresence` mounted around the conditional and give direct children stable keys. `mode="wait"` supports one child at a time; it is not a grid filtering mode. For `popLayout`, verify ref forwarding and a correctly positioned parent.[29]
- M3E overlay lifecycle/focus rules take precedence over an exit effect. Do not bolt a second AnimatePresence controller onto a Base UI popup without verifying its mount/unmount API. Exiting content must stop being focusable; move/restore focus through the primitive before hiding it from assistive technology.
- Prefer wrapper elements to `motion.create` on complex controls. If using `motion.create`, define it outside render and verify ref/style forwarding.[31]
- Keep shared IDs scoped. Do not animate the whole site's layout on every window resize or scroll event.
- Use motion values rather than React state for per-frame values. Clean up observers, RAF, listeners, and imperative animations on unmount.
- No scroll hijacking, custom cursor replacement, mandatory parallax, auto-advancing work carousel, endless marquee, or autoplay shape rotation. Ambient loops are not required to achieve eye candy.

## Accessibility & Reduced Motion

Target **WCAG 2.2 AA**, supplemented by the stricter project policies below. A component library or automated scan does not establish site-wide conformance.

### Required motion behavior

Wrap custom animation in `MotionConfig reducedMotion="user"`. Motion defaults to `"never"`; the explicit setting is mandatory. It disables Motion transform/layout animations while allowing effects such as opacity/color to persist. It does **not** disable M3E CSS transitions, shape morphs, ripple, native smooth scrolling, video, or other engines.[25][26]

When reduced motion is requested:

- No spatial entrances, parallax, bounce, rotation, large zooms, layout travel, animated shape morph, or decorative auto-play.
- Render the final static state. Short non-spatial fades MAY remain; feedback cannot depend on a fade completing.
- Gate bespoke animation/video with `useReducedMotion()` and the relevant engine's own stop mechanism. Test both initial preference and preference changes in the installed version; do not branch server/client DOM structure on an OS preference.[26]
- Add CSS after the library to cover its own motion. Changing spatial easing to `linear` alone is **not sufficient** because the duration and movement remain.[7]
- A site-level "Reduce motion" control MAY strengthen the OS choice, but MUST NOT override an OS request for reduced motion with more motion.

Starting CSS override; verify its cascade against the installed library and all custom keyframes:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  :root,
  :root[data-motion] {
    --md-sys-motion-spring-fast-spatial: linear;
    --md-sys-motion-spring-default-spatial: linear;
    --md-sys-motion-spring-slow-spatial: linear;
    --md-sys-motion-spring-fast-spatial-duration: 0ms;
    --md-sys-motion-spring-default-spatial-duration: 0ms;
    --md-sys-motion-spring-slow-spatial-duration: 0ms;
  }

  [data-slot="shape"] {
    transition: none;
    will-change: auto;
  }
}
```

Inspect CSS/WAAPI ripple and loading animation separately. For a `Button`, use its `disableRipple` prop; for a custom control that directly embeds `Ripple`, `<Ripple disabled />` can preserve press tracking without the ripple animation; do not remove selected/focused/pressed state feedback.[10]

Reduced interaction animation is a **project requirement** adopting the intent of WCAG 2.3.3 (AAA), not a mislabelled AA criterion. Auto-starting motion lasting more than five seconds alongside other content has a Level A pause/stop/hide requirement, subject to its essential-motion exception. Prefer no decorative loops at all.[36][37]

### Contrast, input, and semantics

- Text: at least **4.5:1** normally; **3:1** for large text (at least 24 CSS px regular or about 18.67px bold). Verify actual type and composite colors, not palette names alone.[33]
- Meaningful icons, required control boundaries, and visual states: at least **3:1** against adjacent colors where WCAG non-text contrast applies. Decorative shapes need not meet text/UI contrast rules, but must not degrade neighboring content.[34]
- Portfolio target policy: **48×48 CSS px hit areas** for standalone buttons, icon controls, and navigation. This is a house rule stronger than WCAG 2.5.8's 24×24 AA floor with its stated exceptions. Inline prose links are not artificially enlarged into overlapping boxes.[35]
- Keep a visible keyboard focus indicator; use the library's `focus-ring` (documented as a 3px secondary outline with 2px offset), verify contrast, and ensure clipping does not remove it. Focus appears immediately, never after hover or animation.[10]
- Include a skip link, landmarks, sensible DOM order, descriptive links, labels, appropriate form errors, and live status for async submission. No information available only through hover, motion, color, or a decorative shape.
- Preserve zoom/text resizing, keyboard activation, Escape behavior, and focus return. Test forms, menus, filters, and modal paths manually.
- The default Vite app is browser-rendered; do not claim server rendering or hydration where neither exists. Provide a useful static no-JS fallback with supplied identity/contact information when available. Ensure animation startup cannot strand a successfully rendered app at opacity zero. Any chosen static-prerender/SSR path needs its own verified fallback and initialization behavior.

## Performance & Progressive Enhancement

Smoothness is a measured requirement, not a screenshot property.

- Prefer `transform` and `opacity`; use layout animation where it genuinely helps. Animating width, height, padding, or positional layout properties can trigger layout/paint. Border-radius and clip-path morphing may also be expensive; benchmark rather than claiming all shapes are GPU-accelerated.[28][30]
- Keep morphing shapes modest in area and number. Reuse the shipped geometry; don't sample polygons or parse SVG paths on every render.
- Audit the built-in `Shape` component's `will-change-[clip-path]`; don't keep many offscreen promoted layers. Remove or scope that hint for numerous static decorations after checking the result.[13][30]
- No full-viewport animated blur, backdrop-filter layers, or continuously repainted gradients. Avoid global `will-change`, unnecessary 3D contexts, and per-frame React rerenders.
- Load responsive project imagery with explicit dimensions/aspect ratios. Lazy-load below-fold media, not the hero/LCP asset. Avoid huge decorative downloads, duplicate font families, and image-palette extraction unless actually used.
- Use one animation engine by default. Consider `LazyMotion`/`m` only after inspecting the bundle: `domAnimation` is not the feature set for layout/drag requirements; select the appropriate installed feature bundle. Do not mix full `motion` components into a `LazyMotion strict` subtree.[32]
- Test the production build with CPU/network throttling and at least one representative lower-powered environment if available. Record the browser/device and capture a performance trace for hero motion, project hover, filtering, and overlay interactions.
- Aim for no sustained animation jank at the display's refresh rate. Record frame/render costs and long tasks; an rAF counter alone is not proof of smoothness.
- Core Web Vitals targets: **LCP ≤2.5s, INP ≤200ms, CLS ≤0.1**, evaluated at the 75th percentile for real users when field data exists. Lab tests are diagnostics, not a claim of field results; no-JS/initial-state visibility and stable image geometry support these goals.[41]
- If effects cost too much, simplify decorative motion first. Keep content, hierarchy, and interaction feedback intact.

## Agent Workflow & Build Order

### Plan the new project

1. Read this file, MASTER-PROMPT.md, COLOR-PALETTE.md, palette exports, supplied content/assets, and applicable workspace instructions. Confirm the new output directory is safe; do not overwrite unrelated files.
2. Inspect the available tooling and current upstream installation/component guidance. Do not request a prior website or application as a prerequisite.
3. Propose one concrete art direction: desktop/mobile hero composition, featured-work treatment, section rhythm, shape vocabulary, and motion choreography. Plan a fresh project structure rather than a compatibility audit.
4. Confirm the toolchain and rendering strategy, distinguish supplied facts from sample content, and consolidate essential questions. Wait for plan approval before scaffolding.
5. The upstream AGENTS.md and foundation/component guides inform APIs and interaction behavior; their monorepo deployment/build commands are not this project's commands.[1]

### Build, review, and complete

1. Scaffold the approved new React/TypeScript/Vite foundation; configure Tailwind, aliases, M3E registry/base, exact palette/provider settings, fonts, and first-paint mode behavior.
2. Implement navigation, the finished hero composition, and one featured project presentation with real components. Verify desktop/mobile, light/dark, press feedback, focus, and reduced motion in the browser.
3. Critique and polish that composition yourself before presenting screenshots and motion evidence. Wait for visual approval before completing the remaining sections.
4. Finish the work/about/contact/footer areas and any justified detail routes. Keep owner content in a centralized typed content model; mark and document any approved sample entries.
5. Add purposeful supporting choreography without duplicating M3E's internal animation ownership. Check rhythm between sections, not only individual components.
6. Establish and run typecheck, lint, focused tests, production build, icon generation/check, browser QA, contrast checks, and performance measurements. Report real results; do not assume upstream docs-app scripts apply.
7. Complete a browser-based visual-quality pass: fix hierarchy, awkward whitespace, poor media crops, shape placement, and generic repetitive layouts. A technically valid component catalog is not the intended result.
8. Deliver runnable source, setup/dev/build/preview instructions, editable content location, screenshots, motion evidence where supported, and honest test results/limitations. Do not publish or commit without authorization.

### Definition of done

All applicable gates MUST pass; document any unavailable environment rather than claiming it was tested.

- [ ] All implemented routes, anchors, metadata, supplied project links, available resume downloads, and contact actions work; no fabricated content/status or fake successful submissions.
- [ ] New shared UI uses `@m3e` components and semantic tokens, correct Base UI APIs, and M3E-aware `cn`.
- [ ] Light/dark/system modes are coherent on first paint, refresh, and navigation; no accidental baseline-color flash or hydration warning.
- [ ] Hero has a deliberate authentic Material shape composition; shapes do not intercept input, cover copy, or create overflow.
- [ ] Typography uses the intended M3 roles and emphasized styles; fonts load with appropriate licenses/fallbacks.
- [ ] A quick pointer tap, longer press, Space, and Enter produce correct component feedback without duplicate ripples or competing transforms.
- [ ] Keyboard-only flow, focus visibility, screen-reader names, overlay focus return, touch operation, and form feedback are verified.
- [ ] Contrast is checked on actual rendered pairs in both themes, including hover/selected/error states where applicable; target areas are measured.
- [ ] Test widths include 320, 390, 600, 768, 840, 1024, and 1440 CSS px, plus 200% text/zoom and 400% reflow. No clipped headings, lost controls, or page-wide horizontal scrolling.
- [ ] Reduced motion is tested on initial load, during interactions, and on preference change/reload as supported; CSS, shape morphs, JS animation, video, and smooth scrolling are covered—not just MotionConfig.
- [ ] The no-JS fallback matches the selected rendering strategy and available supplied content. SSR/prerendering is tested only if implemented. Slow animation startup does not strand rendered content at opacity zero.
- [ ] Animations are responsive under interruption/repeated input; no slow exit blocks navigation, no fake loader delays, no autoplay decorative loop.
- [ ] Production console/network has no component, icon, hydration, or missing-asset errors. Registry-generated changes and lockfile diffs are reviewed.
- [ ] Production performance/bundle checks and visual captures are attached with actual browser/device/test settings. Field Core Web Vitals are reported only if measured.

## Do's and Don'ts

**Do**

- Make one unmistakable hero moment, then let the work breathe.
- Pair rich accents with quiet tonal containment and real hierarchy.
- Reuse original Material shapes and the library's interaction mechanics.
- Give Motion precise property ownership and role-specific springs.
- Make reduced motion a composed static experience, not a broken lesser version.
- Verify the working browser experience, not only the source or screenshots.

**Don't**

- Rebrand generic shadcn cards as M3 Expressive after changing only their border radius.
- Replace this stack with MUI, Material Web, Radix, or another UI kit without an explicitly approved compatibility reason.
- Claim Material Web supplies official complete M3 Expressive web parity; use the documented third-party registry and verify its capabilities.
- Paste outdated Compose, Radix, or theme APIs into React code.
- Add arbitrary blobs, infinite floating shapes, aggressive parallax, staggered paragraphs, or a custom cursor to imitate expressiveness.
- Flatten all semantics into a clickable card, hide controls behind hover, or hide initial content behind JavaScript.
- Copy upstream deployment instructions, demo dependencies, contributor-only token-generation commands, or framework choices into the portfolio without need.
- Call the project complete because a build or accessibility scanner alone passed.

## Research Provenance & Maintenance

Original guidance researched **2026-11-09**. This edition applies the Tidal Ink system to a new standalone portfolio build. Upstream shadcn M3E source inspected at commit **`98f011bc8e5932be4d5199419f69d224c936c3aa`**. Pinned source links below preserve the APIs used to author this contract; live docs can evolve. The library's `AGENTS.md` is the main agent-specific reference, supplemented by its foundation and component guides, Google's design guidance, Motion's API docs, and W3C accessibility criteria.

Known documentation discrepancies resolved here:

- The M3E motion guide shows `setTheme(...)`; the inspected provider and theming guide expose `updateTheme(...)`.[6][7][45]
- The motion guide's reduced-motion sample changes easing without zeroing duration; that does not satisfy this portfolio's no-spatial-motion policy.[7]
- The `Shape` component uses an effects spring for its polygon morph; preserve actual behavior instead of assuming the general spatial classification is the current implementation.[13]
- M3E is Base UI-backed; do not assume Radix composition or complete retention of Sonner-specific options. Read the installed APIs.[1][2]

The YAML is a portable design-token summary; it is not a generated Tailwind theme and does not replace the runtime M3E role system. This contract follows the DESIGN.md machine-readable-plus-prose format; its additional agent/motion/QA sections are intentional project extensions.[42]

When upgrading the registry, compare provider props, component exports, Base UI state attributes, token names, radius mappings, press timing, reduced-motion behavior, and shape names. Re-run the visual/accessibility/motion regression matrix before adopting changes. Update this document and its Tidal Ink snapshot rather than accumulating contradictory overrides. Recheck the palette against `palette.json` after any generator/dependency upgrade; avoid silent color drift.

## Sources

[1] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/AGENTS.md
[2] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/usage.md
[3] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/installation.md
[5] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/color.md
[6] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/theming.md
[7] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/motion.md
[8] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/shape.md
[9] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/typography.md
[10] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/state-layers.md
[11] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/elevation.md
[12] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/icons.md
[13] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/components/shape.tsx
[15] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/components/m3e-provider.tsx
[16] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/components/button.tsx
[17] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/styles/m3e.css
[18] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/lib/shape-library.ts
[20] https://m3.material.io/blog/building-with-m3-expressive
[21] https://m3.material.io/styles/shape
[22] https://m3.material.io/styles/motion/overview
[23] https://m3.material.io/styles/motion/overview/specs
[24] https://design.google/library/expressive-material-design-google-research
[25] https://motion.dev/docs/react-motion-config
[26] https://motion.dev/docs/react-use-reduced-motion
[27] https://motion.dev/docs/react-transitions
[28] https://motion.dev/docs/react-layout-animations
[29] https://motion.dev/docs/react-animate-presence
[30] https://motion.dev/docs/react-performance
[31] https://motion.dev/docs/react-motion-component
[32] https://motion.dev/docs/react-lazy-motion
[33] https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[34] https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[35] https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
[36] https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
[37] https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[38] https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
[39] https://raw.githubusercontent.com/androidx/androidx/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens/ExpressiveMotionTokens.kt
[41] https://web.dev/articles/vitals
[42] https://github.com/google-labs-code/design.md
[43] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/NOTICE
[45] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/components/m3-theme-provider.tsx
[46] https://m3.material.io/styles/color/roles
[47] https://m3.material.io/styles/typography/overview
[48] https://shadcn-m3e.crystaworld.dev/components/shape
[49] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/components/color-mode-provider.tsx
[50] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/lib/color.ts
