# The IO Prep — Design System

## Company context
The IO Prep is an online IGCSE and IB English test-prep company built around video courses taught by a single instructor: a Harvard PhD student, ex-Oxford undergraduate, who scored 45/45 on the IB Diploma. The brand trades on that credential — precise, high-achieving, Oxbridge-adjacent — rather than on scale or a large teaching staff.

**Sources given:** none attached (no Figma file, codebase, or slide deck). This design system was authored from a written brief only:
- Brand colors: Oxford University blue `#002147` and white.
- Typeface: Times New Roman.
- A draft (unbuilt) logo concept: a capital "I" inside a capital "O", read as a crescent moon with a vertical line through it (io ≈ "moon"). **No logo file was provided**, so no mark has been drawn — see "Logo" below.

Because no design source exists, this system was authored as a from-scratch brand-guidelines build (per design-system authoring rules: only draw a standard component set when no concrete source defines one).

## Logo
No logo asset was supplied. Per policy, no logo has been drawn, reconstructed, or approximated — the crescent-moon "I-in-O" concept described in the brief is a build note, not something to render from memory. Everywhere a mark would go, the wordmark **"The IO Prep"** is set in plain type (Times New Roman, Oxford blue) instead. **Ask:** please attach the actual logo file (SVG/PNG) once it exists, and this system will swap it in across every card, kit, and template.

## Products covered
1. **Marketing website** — landing/course pages (`ui_kits/marketing/`)
2. **Student dashboard / course player** — video lessons (`ui_kits/dashboard/`)
3. **Checkout / pricing** (`ui_kits/checkout/`)

## Content fundamentals
- **Voice:** prestigious and authoritative. Copy leans on credentials (Harvard, Oxford, 45/45) rather than hype or urgency. No exclamation marks, no hedging.
- **Person:** direct address to the student ("you") in instructional copy; the instructor is referred to by credential, not first name, in marketing copy ("taught by a Harvard PhD candidate who scored a perfect 45/45") — this keeps the authority explicit rather than casual/personal.
- **Casing:** sentence case for UI copy and headings (not Title Case, not ALL CAPS) — reads as academic prose, not a marketing headline. Eyebrows/labels use small caps or letter-spaced uppercase sparingly (e.g. "IGCSE ENGLISH", "IB ENGLISH A&L") to mimic exam-board signage.
- **Numbers:** grades and scores are always exact and unhedged — "45/45", "Grade 9", "7 in IB English" — never rounded to "top marks" alone.
- **Tone examples:**
  - "A complete IB English A: Language and Literature course, taught by the person who scored 45/45."
  - "Every past-paper question, marked the way examiners actually mark it."
  - "Enrol once. Watch on your schedule. Revisit any lesson before the exam."
- **Avoid:** emoji (none used anywhere), slang, superlatives without evidence ("best", "amazing"), urgency/countdown language, first names/casual signatures.
- **Punctuation:** full sentences, proper terminal punctuation on standalone statements; em dashes used sparingly for a clause break, not stacked.

## Visual foundations
- **Color:** Oxford blue (`#002147`) is the dominant brand color — used for headers, primary buttons, rules, and inverse (dark) sections. White is the primary page background. A gold/cream accent family (`--gold`, `--cream`) stands in for "academic prestige" marks — grade badges, quote marks, dividers, hover underlines — used sparingly, never as a background for large areas. Neutrals are cool grays. No purple, no bright saturated color outside gold.
- **Type:** Times New Roman everywhere — headings and body alike (per brief; no separate UI sans). This is a deliberate, traditional choice; do not substitute a grotesque/sans for "UI polish". Headings are bold serif at large sizes with tight leading; body copy is regular weight at 17–19px with generous (1.6) line-height for long-form reading.
- **Spacing:** 4px base scale (`--space-1`…`--space-10`), generous section padding (48–96px vertical on marketing pages) — the brand reads as unhurried and editorial, not dense/app-like.
- **Backgrounds:** flat color fields only — solid Oxford blue, white, or cream. No photography-heavy hero backgrounds, no gradients, no repeating patterns/textures, no illustration style has been established (none provided — do not invent one). Full-bleed color bands are used to separate sections (e.g. a dark Oxford-blue band for a credential/quote section).
- **Animation:** minimal. Standard-ease (`cubic-bezier(.4,0,.2,1)`) fades and color transitions only, 120–200ms. No bounce, no spring, no parallax — motion should feel like a page turning, not an app micro-interaction.
- **Hover states:** links and text buttons shift from Oxford blue to gold on hover (`--link` → `--link-hover`) with an underline; filled buttons darken slightly (blue-900) rather than change hue.
- **Press/active states:** subtle darken, no scale/shrink — this is a formal, print-adjacent brand, not a bouncy consumer app.
- **Borders:** thin 1px hairlines (`--border-hairline`) for structure; a heavier 2px Oxford-blue or gold rule is used as a deliberate "underline" accent beneath headings/section markers, evoking an exam-paper rule line.
- **Shadows:** very restrained — a soft, low-opacity blue-tinted shadow (`--shadow-card`) on cards/menus; no heavy drop shadows, no neumorphism.
- **Corner radii:** minimal — 2–4px (`--radius-sm/md/lg`) on cards and inputs; pills (`--radius-pill`) reserved for tags/badges only. Nothing "app-rounded" (12px+) — the brand should feel closer to a printed page than a mobile app.
- **Cards:** white or cream surface, 1px hairline border, small radius (3–4px), soft shadow only on hover/raised states — flat and document-like at rest.
- **Transparency/blur:** none established; avoid glassmorphism — it reads as consumer-tech, not academic.
- **Imagery color vibe:** not established (no photography supplied). If/when lesson thumbnails or instructor photography are added, keep them cool-toned and undramatic — avoid warm golden-hour treatments that clash with the gold accent's controlled, sparing use.

## Iconography
No icon set, icon font, or SVG sprite was supplied. **Substitution:** [Lucide](https://lucide.dev) icons are linked from CDN as the closest neutral, thin-stroke line-icon match (1.5px stroke, no fill) — flagged here per policy. Icons are used sparingly and only for functional UI (form affordances, player controls, nav chevrons) — never as decoration, never as emoji substitutes. If The IO Prep has (or commissions) its own icon set, replace the CDN link in `styles.css`'s consumers and update this note.

## Intentional additions
No component source was provided, so a standard primitive set was authored (Button, Badge, Tag, Card, Input, Select, Checkbox, Radio, Switch, Tooltip, Dialog, Toast, Tabs) sized to the three product surfaces above.

## Index
- `styles.css` — root stylesheet (import this one file).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii/shadows/motion).
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand/tone, iconography).
- `components/core/` — Button, Badge, Tag, Card
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/feedback/` — Tooltip, Dialog, Toast
- `components/navigation/` — Tabs

### Components (full list)
Button, Badge, Tag, Card, Input, Select, Checkbox, Radio, Switch, Tooltip, Dialog, Toast, Tabs.
- `ui_kits/marketing/` — marketing website (landing/course pages)
- `ui_kits/dashboard/` — student dashboard / course player
- `ui_kits/checkout/` — checkout / pricing
- `assets/` — empty except a `README` note (no logo/imagery supplied yet)
- `SKILL.md` — Claude Code–compatible skill wrapper for this system
