# RAnA / Zero — production site

A production implementation of the Google Stitch design export for RAnA
(AI agent infrastructure company) and Zero (its first agent, a WhatsApp-native
clinic front-desk assistant). Built as a proper Vite + React + Tailwind v4
codebase — component-based and meant to be extended, not a one-off static
export.

## Stack

- **React 19 + Vite** — build tooling, dev server, HMR
- **React Router** — client-side routing across the 5 pages
- **Tailwind CSS v4** (CSS-first config) — design tokens live in
  `src/index.css` under `@theme`, translated from the Stitch "Operational
  Realism" design system
- **lucide-react** — icon set

No backend. No CMS. Content lives in `src/data/content.js` as plain JS —
edit that file to change copy, capabilities, roadmap items, etc. without
touching component code.

## Getting started

\`\`\`bash
npm install
npm run dev       # starts the dev server (default: http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
\`\`\`

## Structure

\`\`\`
src/
  components/
    layout/       Navbar, Footer (used on every page)
    ui/            Design-system primitives: Button, Badge, Card, Field,
                   CodeBlock, Section/Container/SectionHeading/Eyebrow
    product/       Everything product-specific: LiveQueue, HeroSequence,
                   PatientJourney, ComparisonPanel, ZeroChatPreview,
                   RuntimeGrid, Roadmap, AnatomyOfAgent, MarketplaceFlow,
                   the two forms, etc.
  data/
    content.js     All site copy and structured content in one place
  pages/
    Home.jsx        "/"           — the main Zero product narrative
    GetZero.jsx      "/get-zero"   — clinic pilot application
    Platform.jsx     "/platform"   — RAnA Runtime / infrastructure vision
    Developers.jsx   "/developers" — build-on-RAnA + marketplace
    About.jsx        "/about"      — mission, why clinics, technical realism
  App.jsx           Route table, skip-link, scroll-restoration/anchor handling
  index.css         Design tokens (@theme) + base styles
\`\`\`

## Design system

Tokens are defined once in \`src/index.css\`:

- **Color** — off-white/near-black base (\`--color-bg\`, \`--color-ink\`),
  primary teal (\`--color-primary\`), cyan→deep-blue gradient for primary
  actions, hairline \`--color-stroke\` for all borders. No drop shadows
  anywhere, by design.
- **Type** — Hanken Grotesk for headings/body, JetBrains Mono for labels,
  eyebrows, status pills, and code (loaded via Google Fonts in
  \`index.html\`).
- **Status vocabulary** — \`<Badge tone="live" | "building" | "vision" />\`
  is used consistently everywhere a capability or roadmap item needs to
  signal what's real today vs. in progress vs. aspirational. Don't
  introduce a new way of expressing this — reuse the Badge tones.

## Known placeholders (intentionally not wired to a backend)

- **Pilot application form** (\`/get-zero\`) and **builder waitlist form**
  (\`/developers\`) — both have full client-side validation and a real
  idle → submitting → success/error state machine, but the actual submit
  is a simulated delay (see the \`NOTE\` comments in
  \`PilotApplicationForm.jsx\` / \`BuilderWaitlistForm.jsx\`). Point those at
  a real endpoint when one exists.
- **"Read the docs" link** on \`/developers\` points to \`docs.rana.dev\`,
  which doesn't exist yet — swap for the real docs URL once published.
- Marketplace listings, runtime status values, and similar figures are
  illustrative content pulled from the Stitch source, not live data.

## Accessibility notes

- Skip-to-content link, visible on keyboard focus
- Heading hierarchy doesn't skip levels on any page (h1 → h2 → h3)
- All animated components (\`HeroSequence\`, \`LiveQueue\`) respect
  \`prefers-reduced-motion\` and settle on their final state instead of
  animating
- Anchor links (\`#meet-zero\`, \`#pilot-application\`, \`#builder-list\`)
  account for the fixed navbar height via \`scroll-margin-top\`
