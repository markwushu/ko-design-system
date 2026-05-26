# Price / CTA Block

## Purpose
The moment of purchase decision. Remove friction, not add it. Every element earns its place: the price, the value summary, the guarantee, the button. Nothing else.

---

## Anatomy

1. **Eyebrow** (optional) — "Get the system", uppercase, `--text-xs`, `--color-text-muted`
2. **Product name** — DM Serif Display, `--text-h2`
3. **Short value statement** — DM Sans, `--text-lg`, `--color-text-muted` — one sentence maximum
4. **Price** — DM Serif Display, `--text-display`
5. **Price qualifier** (optional) — "one-time payment", `--text-sm`, `--color-text-muted`
6. **What's included** — flat list, DM Sans, `--text-base`, outcomes not feature names
7. **CTA button** — Primary variant, full-width, `lg` size
8. **Guarantee / risk removal** — DM Sans, `--text-sm`, `--color-text-muted` — below the button

---

## CSS

```css
.ko-price-block {
  background-color: var(--color-bg-subtle);           /* Tint */
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-default);
  padding: var(--space-12);                           /* 48px */
  max-width: var(--container-sm);                     /* 480px */
  margin-left: auto;
  margin-right: auto;
}

/* Highlighted variant — for pages with multiple price tiers */
.ko-price-block--featured {
  border-color: var(--color-border-brand);            /* Crimson */
  border-width: 2px;
}

.ko-price-block__name {
  font-family: var(--font-heading);
  font-size: var(--text-h2);
  color: var(--color-text-default);
  margin-bottom: var(--space-2);
}

.ko-price-block__value-statement {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
}

.ko-price-block__price-wrapper {
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
  margin-bottom: var(--space-2);
}

.ko-price-block__currency {
  font-family: var(--font-heading);
  font-size: var(--text-h2);                          /* Smaller than the number */
  color: var(--color-text-default);
  align-self: flex-start;
  margin-top: var(--space-3);                         /* Align to top of number */
}

.ko-price-block__amount {
  font-family: var(--font-heading);
  font-size: var(--text-display);                     /* 64px */
  line-height: var(--leading-tight);
  color: var(--color-text-default);
}

.ko-price-block__qualifier {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
}

.ko-price-block__includes {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-8) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.ko-price-block__includes li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-default);
}

/* Dash separator — no decorative icons */
.ko-price-block__includes li::before {
  content: '—';
  color: var(--color-text-brand);
  flex-shrink: 0;
  margin-top: 1px;
}

.ko-price-block__cta {
  width: 100%;
  margin-bottom: var(--space-4);
}

.ko-price-block__guarantee {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-align: center;
  line-height: var(--leading-relaxed);
}
```

---

## Guarantee writing rules

Be specific. Vague guarantees add no trust.

✓ "If you complete the Weekly Reset once and don't feel clearer, email me for a full refund. No questions asked."

✗ "I'm so confident you'll love it, I offer a money-back guarantee!"

---

## What's included list rules

Write items as outcomes, not feature names:

✓ "A clear, actionable plan every Monday morning"
✓ "The exact questions to ask in your weekly review"

✗ "The Weekly Planning Worksheet (PDF)"
✗ "Module 3: The Review Process"

4–6 items maximum. More than 6 starts to feel padded.

---

## Inline variant

When placed within a long-form sales page rather than as a standalone block:

```css
.ko-price-block--inline {
  max-width: 100%;
  padding: var(--space-8) var(--space-6);
}
```

---

## DO
- Remove every element that doesn't help the person say yes
- Match the CTA label to the outcome: "Start the reset", "Get the system"
- Use the guarantee to address the biggest specific hesitation directly

## DON'T
- Don't use countdown timers
- Don't manufacture scarcity ("Only 3 spots left", "Price goes up Friday")
- Don't put the price behind a click ("Click to reveal")
- Don't add "BEST VALUE" or "MOST POPULAR" badges without genuine basis
- Don't inflate perceived value: "Worth $997 — yours for $27"
- Don't add decorative dividers, icons, or emojis to the includes list
