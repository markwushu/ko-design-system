# Kept Organised Design System

Design system for [Kept Organised](https://keptorganised.com) — a digital productivity brand by Mark Wu.

This is an AI-native design system: structured, machine-readable, and built to be used directly with Claude and Claude Code. All tokens, component specs, and brand guidelines are plain text and JSON — no proprietary tooling required.

---

## Structure

```
/
├── CLAUDE.md                  ← Start here. Orchestration for Claude Code.
├── README.md                  ← This file.
│
├── tokens/
│   ├── colors.json            ← Colour tokens (brand + semantic)
│   ├── typography.json        ← Type scale, families, weights
│   ├── spacing.json           ← 8pt grid spacing and breakpoints
│   └── effects.json           ← Radius, shadow, motion, z-index
│
├── css/
│   ├── tokens.css             ← All tokens as CSS custom properties
│   └── base.css               ← Reset, base styles, typography defaults
│
├── tailwind.config.js         ← Tailwind v3 config (references CSS vars)
│
├── components/
│   ├── typography.md          ← Type scale, eyebrow, prose rules
│   ├── button.md              ← Primary, secondary, ghost variants
│   ├── card.md                ← Default, tinted, inverse variants
│   ├── navigation.md          ← Desktop + mobile nav
│   ├── form-elements.md       ← Inputs, labels, checkbox, select
│   ├── hero.md                ← Hero section layout and content rules
│   ├── testimonial.md         ← Pull quote and card variants
│   └── price-cta.md           ← Price block and CTA rules
│
├── brand/
│   ├── voice.md               ← Tone of voice, writing rules, AI tells to avoid
│   ├── illustration.md        ← Visual direction, subject library, style spec
│   └── principles.md          ← Eight design principles
│
└── assets/
    └── illustrations/         ← Illustration files (PNG, transparent bg, 2×)
```

---

## Quick start

### GoHighLevel
1. Copy the contents of `css/tokens.css` into your GHL Custom CSS
2. Copy the contents of `css/base.css` into your GHL Custom CSS (after tokens)
3. Reference `--color-*`, `--font-*`, `--space-*` etc. in all custom CSS

### Lovable (React + Vite + Tailwind)
1. Copy `tailwind.config.js` to your project root
2. Import `css/tokens.css` in `src/index.css` or `src/App.css`
3. Import `css/base.css` after tokens
4. Install Lucide: `npm install lucide-react`
5. Use Tailwind utilities — all values reference the CSS tokens

### Claude Code
Read `CLAUDE.md`. It tells you everything you need before writing any code.

---

## Colour system

| Token | Value | Use |
|-------|-------|-----|
| `--color-bg-default` | `#FAF8F5` | Page background |
| `--color-bg-subtle` | `#F5E6EA` | Section and card backgrounds |
| `--color-bg-inverse` | `#1E1A18` | Dark sections |
| `--color-text-default` | `#1E1A18` | Primary text |
| `--color-text-muted` | `#5C5450` | Secondary text |
| `--color-text-brand` | `#C21F42` | Brand emphasis, links |
| `--color-action-primary` | `#C21F42` | Primary button fill |
| `--color-border-default` | `#1E1A18` | Default border |

---

## Typography

| Role | Family |
|------|--------|
| Headings (Display, H1–H3) | DM Serif Display |
| Body, UI, H4–H6, Buttons | DM Sans |
| Code, data | DM Mono |

Google Fonts: [DM Serif Display + DM Sans + DM Mono](https://fonts.google.com/share?selection.family=DM+Mono:wght@400;500|DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400|DM+Serif+Display:ital@0;1)

---

## Non-negotiable rules

- No AI-generated imagery — ever
- No raw hex values in components — always reference tokens
- Border radius: sharp (0–2px maximum)
- No countdown timers, no manufactured scarcity, no fake urgency

---

## Version history

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | May 2026 | Initial release |

---

*Built by Mark Wu. Kept Organised.*
