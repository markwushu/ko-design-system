# Typography

## Purpose
The typographic system establishes visual hierarchy and communicates brand character. DM Serif Display carries authority and warmth. DM Sans carries clarity and practicality. Together they avoid both the austerity of a pure sans-serif brand and the heaviness of an all-serif brand.

## Font families

| Role | Family | Token |
|------|--------|-------|
| Display + H1–H3 | DM Serif Display | `--font-heading` |
| Body, UI, H4–H6, buttons | DM Sans | `--font-body` |
| Code, data, technical | DM Mono | `--font-mono` |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap
```

---

## Type scale

| Name | Size | Token | Line height | Use |
|------|------|-------|-------------|-----|
| Display | 64px / 4rem | `--text-display` | `--leading-tight` (1.1) | Hero headlines only |
| H1 | 48px / 3rem | `--text-h1` | `--leading-tight` (1.1) | Page-level headings |
| H2 | 36px / 2.25rem | `--text-h2` | `--leading-snug` (1.2) | Section headings |
| H3 | 28px / 1.75rem | `--text-h3` | `--leading-snug` (1.2) | Sub-section headings |
| H4 | 22px / 1.375rem | `--text-h4` | `--leading-normal` (1.5) | Card headings |
| H5 | 18px / 1.125rem | `--text-h5` | `--leading-normal` (1.5) | Component labels |
| Body Large | 18px / 1.125rem | `--text-lg` | `--leading-normal` (1.5) | Intro paragraphs |
| Body | 16px / 1rem | `--text-base` | `--leading-normal` (1.5) | Default copy |
| Body Small | 14px / 0.875rem | `--text-sm` | `--leading-normal` (1.5) | Secondary copy |
| Caption | 12px / 0.75rem | `--text-xs` | `--leading-normal` (1.5) | Labels, metadata |
| Mono | 14px / 0.875rem | `--text-mono` | `--leading-normal` (1.5) | Code, data |

---

## Eyebrow / label type
Used above headings to set context — e.g. "The Method", "What You Get", "Weekly Reset".

```css
font-family: var(--font-body);
font-size: var(--text-xs);          /* 12px */
font-weight: var(--weight-medium);  /* 500 */
text-transform: uppercase;
letter-spacing: var(--tracking-wider); /* 0.1em */
color: var(--color-text-muted);     /* or --color-text-brand for emphasis */
margin-bottom: var(--space-3);      /* 12px — space before heading */
```

Tailwind: `font-body text-xs font-medium uppercase tracking-wider text-text-muted mb-3`

---

## Heading hierarchy rules

- Use H1 once per page
- H1–H3: `--font-heading` (DM Serif Display), `--weight-regular` — never use bold weight on DM Serif Display
- H4–H6: `--font-body` (DM Sans), `--weight-semibold`
- Never skip heading levels for visual reasons — if you want H3 styling on an H2, use a class
- Letter-spacing on Display and H1: `--tracking-tight` (-0.02em)

---

## Pull quote / italic emphasis

DM Serif Display has a distinct italic that suits pull quotes and testimonials.

```css
font-family: var(--font-heading);
font-style: italic;
font-size: var(--text-h3);
line-height: var(--leading-snug);
color: var(--color-text-default);
```

---

## Prose / reading copy

```css
line-height: var(--leading-relaxed);  /* 1.7 */
max-width: var(--container-prose);    /* 68ch */
```

Apply `.prose` or `max-w-prose leading-relaxed` to any extended reading copy.

---

## DO
- Use DM Serif Display for emotional, narrative, persuasive moments
- Use italic DM Serif Display for pull quotes and testimonials
- Pair an eyebrow label with most H1s and H2s to give context before the headline
- Set Display and H1 with `--tracking-tight`
- Limit line length on body copy to `--container-prose` (68ch)

## DON'T
- Don't use DM Serif Display for body copy or UI labels
- Don't bold DM Serif Display — it is a display weight face
- Don't use more than two type sizes in a single component
- Don't centre-align long blocks of body copy
- Don't use type sizes smaller than `--text-xs` (12px) for any readable text
