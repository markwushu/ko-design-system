# Hero Section

## Purpose
The first impression. The hero communicates the core promise, establishes visual identity, and drives a single action. It is not a summary of everything the product does — it is the hook that earns the scroll.

---

## Layout

### Desktop — 2 column (default)
```
[Eyebrow                        ]   [                        ]
[Headline                       ]   [  Illustration          ]
[Subhead — max 2 lines          ]   [                        ]
[                               ]   [                        ]
[ CTA Button ]                      [                        ]
[Supporting proof (optional)    ]
```

- Left column: 58% width, text content
- Right column: 42% width, illustration
- Vertical alignment: centre
- Column gap: `--space-16` (64px)
- Section padding: `--space-24` top and bottom (96px)

### Mobile — stacked
- Illustration above headline (test this) OR headline first, illustration below
- Section padding: `--space-16` top, `--space-12` bottom (64px / 48px)
- All content full-width

---

## CSS

```css
.ko-hero {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
  background-color: var(--color-bg-default);
}

.ko-hero__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
}

@media (min-width: 1024px) {
  .ko-hero {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }

  .ko-hero__inner {
    grid-template-columns: 58fr 42fr;
    gap: var(--space-16);
  }
}

.ko-hero__eyebrow {
  /* Use .ko-eyebrow or .ko-eyebrow--brand from base.css */
}

.ko-hero__headline {
  font-family: var(--font-heading);
  font-size: var(--text-h1);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-default);
  margin-bottom: var(--space-4);
}

@media (min-width: 1024px) {
  .ko-hero__headline {
    font-size: var(--text-display);
  }
}

.ko-hero__subhead {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
  color: var(--color-text-muted);
  max-width: 52ch;
  margin-bottom: var(--space-8);
}

.ko-hero__proof {
  margin-top: var(--space-4);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.ko-hero__illustration {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ko-hero__illustration img {
  max-width: 100%;
  height: auto;
  min-width: 0;
}
```

---

## Background options

| Variant | CSS | Use |
|---------|-----|-----|
| Light (default) | `--color-bg-default` | Standard, clean, most common |
| Tinted | `--color-bg-subtle` | Adds warmth, emotional moments |
| Inverse | `--color-bg-inverse` | High contrast, use sparingly |

---

## Content anatomy

1. **Eyebrow** (optional) — product name or context, `ko-eyebrow--brand`
2. **Headline** — DM Serif Display, `--text-display` desktop / `--text-h1` mobile
3. **Subhead** — DM Sans, `--text-lg`, `--color-text-muted`, max 2 lines / 52ch
4. **CTA button** — Primary variant, `lg` size
5. **Supporting proof** (optional) — "X people have already used this system" or a one-line testimonial below the button

---

## Illustration placement

- Right column on desktop — never left (Western reading pattern flows left-to-right into the illustration)
- Transparent background or Ground (#FAF8F5) — never coloured backgrounds on the illustration itself
- Do not scale below 280px width at any breakpoint
- Format: PNG with transparent background at 2× resolution

---

## Headline writing rules

- Maximum 10 words
- Should complete a full sentence — not a floating noun phrase
- Aim for the "finally" register: specific, honest, outcome-focused
- Avoid: generic ("Transform your life"), jargon ("Synergise your workflow"), hyperbole

---

## DO
- One CTA only — do not split attention with secondary actions in the hero
- Let the illustration do emotional work — no UI mockups or screenshots here
- Test headline variants — the hero is the highest-leverage copy on the page

## DON'T
- Don't put a video background in the hero
- Don't animate headline text
- Don't add more than one button
- Don't add nav links or sub-menus below the headline
- Don't use stock photography
- Don't use AI-generated imagery
