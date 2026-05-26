# Kept Organised Design System

## What this is
The design system for Kept Organised — a digital productivity brand built by Mark Wu.
This system governs all UI across keptorganised.com, course pages (GoHighLevel), web apps (Lovable), and all future products under the Kept Organised brand.

## Read this file first. Every time.
Before writing a single line of CSS, HTML, JSX, or Tailwind class — read this file and the relevant component spec. The design system exists so you don't have to guess.

---

## Non-negotiable brand rules

- **No AI-generated imagery. Ever.** Illustrations are hand-drawn, ink/pencil, physical objects. See `/brand/illustration.md`.
- **Typography:** DM Serif Display for headings (H1–H3 and Display), DM Sans for body and UI, DM Mono for code and data.
- **Border radius:** Sharp. `--radius-none` (0px) for inputs and most elements. `--radius-sm` (1px) maximum for buttons and cards.
- **Tone:** Wry but not sarcastic. Honest but not harsh. Confident but not aggressive. See `/brand/voice.md`.
- **No fake urgency.** No countdown timers. No "limited spots". No manufactured scarcity of any kind.
- **Never use raw hex values or pixel values in components.** Always reference CSS custom properties (tokens).

---

## Token locations

| What | File |
|------|------|
| All tokens as CSS custom properties | `/css/tokens.css` |
| Colour tokens (JSON) | `/tokens/colors.json` |
| Typography tokens (JSON) | `/tokens/typography.json` |
| Spacing tokens (JSON) | `/tokens/spacing.json` |
| Effects tokens — radius, shadow, motion (JSON) | `/tokens/effects.json` |
| Tailwind config | `/tailwind.config.js` |
| Base styles + resets | `/css/base.css` |

---

## Quick reference — most-used tokens

```css
/* Colours */
--color-bg-default:       #FAF8F5   /* Ground — main page background */
--color-bg-subtle:        #F5E6EA   /* Tint — section and card backgrounds */
--color-bg-inverse:       #1E1A18   /* Ink — dark section background */
--color-text-default:     #1E1A18   /* Ink — primary text */
--color-text-muted:       #5C5450   /* Body — secondary text */
--color-text-inverse:     #FAF8F5   /* Ground — text on dark backgrounds */
--color-text-brand:       #C21F42   /* Crimson — brand emphasis */
--color-action-primary:   #C21F42   /* Crimson — primary button fill */
--color-border-default:   #1E1A18   /* Ink — default border */

/* Typography */
--font-heading:   'DM Serif Display', Georgia, serif
--font-body:      'DM Sans', system-ui, sans-serif
--font-mono:      'DM Mono', 'Courier New', monospace

/* Spacing (8pt base) */
--space-2:  8px   --space-4: 16px   --space-6: 24px
--space-8: 32px  --space-12: 48px  --space-16: 64px

/* Effects */
--radius-none:    0px
--radius-sm:      1px
--radius-default: 2px
```

---

## Component specs

Read the spec for any component before building it.

| Component | Spec |
|-----------|------|
| Typography scale | `/components/typography.md` |
| Buttons | `/components/button.md` |
| Cards | `/components/card.md` |
| Navigation | `/components/navigation.md` |
| Form elements | `/components/form-elements.md` |
| Hero section | `/components/hero.md` |
| Price / CTA block | `/components/price-cta.md` |
| Testimonial | `/components/testimonial.md` |

---

## Platform notes

### GoHighLevel (GHL)
- Link `/css/tokens.css` and `/css/base.css` via custom HTML `<link>` tags or paste into custom CSS
- No npm. No Tailwind. Use CSS custom properties directly.
- All class names should be prefixed `ko-` to avoid GHL style conflicts

### Lovable (React + Vite)
- Install Tailwind and add `/tailwind.config.js`
- Import `/css/tokens.css` in your root `index.css` or `App.css`
- Use Tailwind utility classes that reference the token variables
- Lucide React is the icon library: `npm install lucide-react`

### Notion
- Manual application only — Notion does not support custom CSS
- Reference brand colours and type specs for any embedded content, cover images, or exported assets

---

## Icons

**Recommended: Lucide**
- React: `npm install lucide-react` → `import { ArrowRight } from 'lucide-react'`
- CDN (GHL): `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- Stroke width: 1.5 (default) — do not change
- Size: 16px (inline), 20px (UI), 24px (prominent)
- Colour: inherit from parent text colour via `currentColor`

---

## Dark mode

Token structure is in place. The `[data-theme="dark"]` selector exists in `/css/tokens.css` with placeholder values. **Do not implement dark mode until the dark token values are explicitly defined.** When implementing: add `data-theme="dark"` to the `<html>` or root element.

---

## Design principles

1. **Restraint earns trust.** If an element doesn't need to be there, remove it.
2. **Honest over clever.** Truth outperforms interesting.
3. **Never use raw values.** Always reference tokens.
4. **One clear next step.** Every surface has one primary action.
5. **Craft is visible at close range.** Details matter.

Full principles: `/brand/principles.md`

---

## When in doubt

1. Check the relevant component spec in `/components/`
2. Check `/brand/principles.md`
3. Choose the most restrained, grounded option available
4. If still unsure — ask before building

---

*Version: 1.0 | Created: May 2026*
*Design system for Kept Organised by Mark Wu*
