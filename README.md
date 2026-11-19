# Muhammad Faza Al-Banna — Portfolio

A single-page portfolio in React, TypeScript, Vite, and Tailwind CSS. Local shadcn M3E components provide the Material 3 Expressive interface; Base UI handles accessible interaction primitives. Tidal Ink semantic color roles support light, dark, and system modes.

The page has four sections: hero, selected work, atelier, and contact. It is one page only, with anchor navigation (`#work`, `#atelier`, `#contact`). The old multi-page URLs (`/projects`, `/about`, `/contact`) redirect to the matching section; see `netlify.toml`.

## Run locally

Install [Bun](https://bun.sh/) and use the included lockfile:

```sh
bun install --frozen-lockfile
bun run dev
```

Open the local URL printed by Vite. Other project commands:

```sh
bun run typecheck    # TypeScript project checks
bun run lint         # Oxlint
bun run test         # Vitest component tests in jsdom
bun run build        # TypeScript checks and production output in dist/
bun run preview      # Serve the production output locally
bun run check:icons  # Check the bundled Material Symbols subset
bun run gen:icons    # Regenerate that subset after changing icon usage
```

`preview` requires a completed build. The jsdom setup uses a fixed light-system preference and reduced motion, with observer and pointer shims for APIs that lack layout behavior. Tests must explicitly drive observer callbacks when checking visibility or resize behavior. These tests do not verify browser layout, contrast, animation timing, or mail-client integration.

## Content

Edit `src/content/portfolio.ts`, using `src/content/types.ts` as the content contract. It holds the identity, navigation, hero copy, projects and architecture notes, capabilities, contact configuration, and footer disclosures. The first project is the featured project; supporting projects are selected by their `featured` flag.

The five projects are NimeNime Hub, Knight of the Night, Smol Maiden, Epic Selfbot, and this portfolio itself. Each project lists its stack and, where one exists, its GitHub and live demo links. Smol Maiden is closed source and has no code link. Schematic files in `public/schematics/` are illustrations, not screenshots; update each project's image path, alternative text, caption, and dimensions when replacing one. Architecture notes and code excerpts are short reconstructions from the project descriptions, not verbatim source excerpts; replace them with real excerpts when the project repos are reviewed.

## Contact form

The contact form posts to FormSubmit, the same service the old portfolio used, and delivers to fazaalbanna0410@gmail.com. It shows sending, success, and error states, and only reports success after FormSubmit answers. The form has not been test-submitted from this branch; send one test message before relying on it.

Before publishing, review `contact.email`, the title, description, and social metadata in `index.html`, plus `public/favicon.svg` as appropriate. Keep navigation anchors aligned with the sections rendered by `src/App.tsx`.

## Deployment

The site deploys on Netlify at https://faza-al-banna.netlify.app/. `netlify.toml` builds with Bun (`bun install --frozen-lockfile && bun run build`) and publishes `dist/`. There is no server and no React Router; the old server, dev-server, and React Router files were removed in the rewrite.

## Design and attribution

`DESIGN.md` describes the portfolio direction; `COLOR-PALETTE.md` and `src/styles/palette.css` document the Tidal Ink palette. Teal identifies primary actions, tonal mineral surfaces keep long architecture notes readable, and selective shape motion connects interaction to state. Roboto Flex carries editorial hierarchy; JetBrains Mono distinguishes technical notation.

The local component library derives from [shadcn M3E](https://shadcn-m3e.crystaworld.dev/) by Crysta1221 (MIT). Its upstream license is retained in `UPSTREAM-LICENSE.txt`. Preserve `THIRD-PARTY-NOTICES.txt` when distributing this project; it records Material, shadcn/ui, shape, ripple, and other component sources. Google Material Symbols, Material shape outlines, and Material Color Utilities retain their respective Apache 2.0 notices. Roboto Flex and JetBrains Mono are distributed under SIL Open Font License 1.1 via Fontsource.

This project is not affiliated with or endorsed by Google or shadcn/ui.
