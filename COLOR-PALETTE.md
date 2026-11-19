# Tidal Ink — Complete Material 3 Expressive Palette

## Design intent

A completely new colorway for frisky's professional portfolio: deep teal identity, blue-slate support, warm amber accents, and clean mineral-blue reading surfaces. Designed for a confident, contemporary technical portfolio without looking like a generic purple template or a rainbow component demo.

This is an original curated direction generated through the actual shadcn M3E color implementation and Google's Material Color Utilities. It is not an official named Google palette or a claim that an external human designer selected it. The key colors were selected deliberately; semantic roles and tone ramps were generated rather than guessed.

## Quick anchors

- Deep teal actions: `#006A61` light / `#82D5CA` dark.
- Blue-slate support: `#4E5F77` / `#B6C8E3`.
- Warm amber accent: `#85530C` / `#FDB96C`.
- Canvas: `#F6FAFE` / `#0F1417`.
- Reading ink: `#181C1F` / `#DFE3E7`.
- Mint hero detail: primary-container. Amber shape detail: tertiary-container.

Use the role values above, not the input seed hexes, for actual UI. In dark mode, light accent fills deliberately receive dark `on-*` labels; do not keep white button labels blindly.

## Complete generated role inventory

The 53 roles below are the full output of the inspected M3E generator with Material Color Utilities 0.4.0. That includes compatibility/additional roles; it is not a claim that every role is needed by this portfolio or mandated by Google. Prefer surface-container roles to the older surface-variant role. Keep `*-dim` unused unless a specific verified component requires them.

| Role | Light | Dark |
| --- | --- | --- |
| `background` | `#F6FAFE` | `#0F1417` |
| `on-background` | `#181C1F` | `#DFE3E7` |
| `surface` | `#F6FAFE` | `#0F1417` |
| `surface-dim` | `#D7DADF` | `#0F1417` |
| `surface-bright` | `#F6FAFE` | `#353A3D` |
| `surface-container-lowest` | `#FFFFFF` | `#0A0F12` |
| `surface-container-low` | `#F0F4F8` | `#181C1F` |
| `surface-container` | `#EBEEF3` | `#1C2023` |
| `surface-container-high` | `#E5E8ED` | `#262B2E` |
| `surface-container-highest` | `#DFE3E7` | `#313539` |
| `on-surface` | `#181C1F` | `#DFE3E7` |
| `on-surface-variant` | `#3E484F` | `#BEC8D0` |
| `outline` | `#6F7880` | `#88929A` |
| `outline-variant` | `#BEC8D0` | `#3E484F` |
| `inverse-surface` | `#2C3134` | `#DFE3E7` |
| `inverse-on-surface` | `#EDF1F5` | `#2C3134` |
| `primary` | `#006A61` | `#82D5CA` |
| `primary-dim` | `#005D55` | `#9EF2E6` |
| `on-primary` | `#FFFFFF` | `#003732` |
| `primary-container` | `#9EF2E6` | `#005049` |
| `on-primary-container` | `#005049` | `#9EF2E6` |
| `primary-fixed` | `#9EF2E6` | `#9EF2E6` |
| `primary-fixed-dim` | `#82D5CA` | `#82D5CA` |
| `on-primary-fixed` | `#00201D` | `#00201D` |
| `on-primary-fixed-variant` | `#005049` | `#005049` |
| `inverse-primary` | `#82D5CA` | `#006A61` |
| `secondary` | `#4E5F77` | `#B6C8E3` |
| `secondary-dim` | `#43536B` | `#C9DBF8` |
| `on-secondary` | `#FFFFFF` | `#203147` |
| `secondary-container` | `#D3E4FF` | `#37485F` |
| `on-secondary-container` | `#37485F` | `#D3E4FF` |
| `secondary-fixed` | `#D3E4FF` | `#D3E4FF` |
| `secondary-fixed-dim` | `#B6C8E3` | `#B6C8E3` |
| `on-secondary-fixed` | `#091C31` | `#091C31` |
| `on-secondary-fixed-variant` | `#37485F` | `#37485F` |
| `tertiary` | `#85530C` | `#FDB96C` |
| `tertiary-dim` | `#774800` | `#FAB669` |
| `on-tertiary` | `#FFFFFF` | `#482900` |
| `tertiary-container` | `#FFDDBA` | `#673D00` |
| `on-tertiary-container` | `#673D00` | `#FFDDBA` |
| `tertiary-fixed` | `#FFDDBA` | `#FFDDBA` |
| `tertiary-fixed-dim` | `#FDB96C` | `#FDB96C` |
| `on-tertiary-fixed` | `#2B1700` | `#2B1700` |
| `on-tertiary-fixed-variant` | `#673D00` | `#673D00` |
| `error` | `#BA1A1A` | `#FFB4AB` |
| `error-dim` | `#A80710` | `#FF554A` |
| `on-error` | `#FFFFFF` | `#690005` |
| `error-container` | `#FFDAD6` | `#93000A` |
| `on-error-container` | `#93000A` | `#FFDAD6` |
| `surface-variant` | `#DAE4EC` | `#3E484F` |
| `surface-tint` | `#006A61` | `#82D5CA` |
| `shadow` | `#000000` | `#000000` |
| `scrim` | `#000000` | `#000000` |

## Additional status families

These 12 variables per mode are project-defined extensions, not standard Google M3 role names. They are generated using the same M3E library from separate status key colors. Use standard error/on-error/error-container/on-error-container for errors; do not invent a second destructive red.

| Project role | Light | Dark |
| --- | --- | --- |
| `success` | `#2D6A45` | `#95D5A7` |
| `on-success` | `#FFFFFF` | `#00391D` |
| `success-container` | `#B1F1C2` | `#10512F` |
| `on-success-container` | `#10512F` | `#B1F1C2` |
| `warning` | `#835415` | `#FABA72` |
| `on-warning` | `#FFFFFF` | `#482900` |
| `warning-container` | `#FFDDBA` | `#673D00` |
| `on-warning-container` | `#673D00` | `#FFDDBA` |
| `info` | `#3C6090` | `#A5C8FF` |
| `on-info` | `#FFFFFF` | `#00315E` |
| `info-container` | `#D4E3FF` | `#214876` |
| `on-info-container` | `#214876` | `#D4E3FF` |

Variables are `--portfolio-color-success`, `--portfolio-color-on-success`, etc. Optional Tailwind v4 utilities from `status.tailwind.css` include `bg-status-success-container` and `text-on-status-success-container`. Show an icon and readable status text. The amber decorative family is not a warning by itself; warning semantics require a status label/context.

## Usage direction

- Page: surface/on-surface. Main body copy uses full-opacity on-surface; supporting copy uses on-surface-variant, not a guessed gray or opacity trick.
- Cards: surface-container-low; nested content: surface-container or surface-container-high. Use tonal hierarchy, not a new random accent for each project.
- Main CTA: primary/on-primary. Secondary CTA: secondary-container/on-secondary-container. Quiet tertiary action: text/outlined component using built-in roles.
- Hero shape: primary-container, with a small tertiary-container counterpoint. Keep meaningful text on a stable surface and outside decorative clipping.
- Focus: the supplied M3E secondary focus ring, with spacing to separate it from filled controls. Outline is for essential boundaries; outline-variant is decorative and is not certified as an identifying boundary.
- Links: primary on neutral surfaces, underlined where needed for discoverability. Links on colored panels use that panel's matching content role with another non-color affordance.
- Code: surface-container-highest/on-surface with the library's syntax role mappings; verify actual syntax tokens if adding a highlighter.
- Snackbar: inverse-surface/inverse-on-surface; action inverse-primary.
- Disabled controls retain the library's disabled state styling. Do not call their intentionally reduced contrast a text contrast pass.
- Avoid black/white literal styles, page-wide gradients, arbitrary accent colors, and project-image palette extraction on shared UI. Source project media/brand marks may retain authentic colors.
- Approximate visual balance: 80% neutral surfaces, 15% teal/slate tonal treatments, 5% warm expression. This is a composition heuristic, not an algorithm or official Material percentage.

## New-project theme setup — do not skip

1. Use this kit's DESIGN.md as the new project's design contract. Build its theme directly from Tidal Ink.
2. Copy `palette.css` into the project's styles and import it **after** the library's `m3e.css`. It contains every light/dark M3 variable and the optional status extensions, not a replacement for M3E typography/shape/motion styles.
3. Copy `theme.config.ts` into the project's design/theme directory and adjust its import path only if aliases differ. Use exactly the same source, variant, spec and contrast in M3eProvider. Do not leave the provider on baseline, because it injects its own role CSS and can replace the frozen palette.
4. Configure `theme={{ defaultTheme: tidalInkTheme, persist: false }}`. `persist: false` keeps the fixed brand authoritative. It does not turn off the separate ColorModeProvider's saved light/dark/system preference. Do not add palette customization unless requested.
5. Set up color mode before first paint as described in DESIGN.md. The Vite default is browser-rendered. If selecting SSR or prerendering, adapt and test browser-only provider initialization rather than assuming a client directive prevents server execution.
6. Do not call setSeedColor: in the inspected implementation it converts this multi-key-color mode to tonalSpot. Do not pick the `expressive` COLOR variant just because the MOTION scheme is expressive. The palette variant here is deliberately `image`, while motion is `expressive`.
7. `image` is simply the inspected generator's multi-key-color branch. The provided explicit key colors require **no source image, no network color extraction, no node-vibrant, and no use-image-theme component**. This source-level behavior is verified in the pinned color module.[50]
8. Optional statuses: import `status.tailwind.css` after Tailwind is available. If not using Tailwind, read the `--portfolio-color-*` variables directly. Never feed the status file to a raw CSS parser expecting Tailwind to have compiled it already.
9. Keep Material Color Utilities pinned to 0.4.0 for exact reproduction; the generation source is pinned to upstream commit `98f011bc8e5932be4d5199419f69d224c936c3aa`. On upgrades, compare every generated role and rerun contrast tests rather than accepting silent color drift.
10. Avoid competing palette definitions from starter styles or generated defaults. Test both modes, state layers, portaled overlays, first paint, and refresh in the actual new app.

### Provider configuration

```tsx
import { tidalInkTheme } from "./theme.config"
import { M3eProvider } from "@/components/m3e/m3e-provider"

<M3eProvider
  colorMode={{ defaultMode: "system", toggleKey: false }}
  theme={{ defaultTheme: tidalInkTheme, persist: false }}
>
  {children}
</M3eProvider>
```

## Measured contrast

- Light primary button: **6.49:1**.
- Light primary container: **7.26:1**.
- Light body text: **16.35:1**.
- Light supporting text: **8.92:1**.
- Dark primary button: **7.74:1**.
- Dark primary container: **7.26:1**.
- Dark body text: **14.37:1**.
- Dark supporting text: **10.91:1**.

The report performs 204 checks across both themes, including accent/container content, fixed pairs, neutral surfaces, links, outline/focus roles, status pairs and specified flat hover/focus/press composites. Pass/fail uses the unrounded WCAG ratio. All text checks target 4.5:1; specified essential boundary checks target 3:1. See `contrast-report.json` for every checked pair.

This validates color combinations, not full-site WCAG conformance. Arbitrary alpha, background imagery, gradient ripple phases, disabled controls, optional *-dim roles, font rasterization and unseen site overrides are outside the certification of these checks. Verify the actual rendered composition.

## Deliverables

- `DESIGN.md`: complete new-project design and development contract.
- `COLOR-PALETTE.md`: this full palette and integration guide.
- `palette.css`: directly usable light/dark semantic variables.
- `palette.json`: values, source configuration, provenance, and six tonal families with 14 tones each.
- `theme.config.ts`: typed against the inspected M3Theme structure; validate imports/types in the consuming project.
- `status.tailwind.css`: optional project-status Tailwind v4 aliases.
- `contrast-report.json`: measured pair/state checks.
- `palette-preview.html` / `palette-preview.png`: static color-application reference, not the portfolio implementation or an animated M3E component demo.

## References

- Color-role meaning and intended pairings follow Google's role guidance.[46]
- Provider configuration and light/dark behavior follow the upstream theming guide and inspected provider.[6][45]
- Exact generation behavior comes from the pinned implementation.[50]

## Sources

[6] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/apps/docs/src/docs/content/theming.md
[45] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/components/m3-theme-provider.tsx
[46] https://m3.material.io/styles/color/roles
[50] https://raw.githubusercontent.com/Crysta1221/shadcn-m3e/98f011bc8e5932be4d5199419f69d224c936c3aa/packages/m3e/src/lib/color.ts
