# Card

## Purpose
A contained visual unit grouping related content. Used for features, testimonials, course modules, and any content benefiting from visual separation. Cards should be restrained — they contain content, they don't decorate it.

---

## Variants

### Default
```css
.ko-card {
  background-color: var(--color-bg-default);         /* #FAF8F5 */
  border: 1px solid var(--color-border-default);     /* #1E1A18 */
  border-radius: var(--radius-default);              /* 2px */
  padding: var(--space-6);                           /* 24px */
}
```

### Tinted
For use on white backgrounds, or to create visual grouping without a hard border.
```css
.ko-card--tinted {
  background-color: var(--color-bg-subtle);          /* #F5E6EA */
  border: none;
  border-radius: var(--radius-default);
  padding: var(--space-6);
}
```

### Inverse
Dark cards for emphasis, feature highlights, standout sections.
```css
.ko-card--inverse {
  background-color: var(--color-bg-inverse);         /* #1E1A18 */
  color: var(--color-text-inverse);                  /* #FAF8F5 */
  border: none;
  border-radius: var(--radius-default);
  padding: var(--space-8);                           /* 32px */
}
```

---

## Padding by context

| Context | Padding |
|---------|---------|
| Compact — feature list items | `--space-4` (16px) |
| Default — standard cards | `--space-6` (24px) |
| Feature / prominent | `--space-8` (32px) |

---

## Card anatomy

1. **Eyebrow** (optional) — uppercase label, `--text-xs`, `--color-text-muted`
2. **Heading** — DM Serif Display (narrative) or DM Sans (functional) depending on context
3. **Body copy** — DM Sans, `--text-base`, `--leading-normal`
4. **Action** (optional) — ghost button or text link, at card bottom

---

## Hover state (interactive cards)

Only apply hover state to cards that are clickable.
```css
.ko-card--interactive {
  cursor: pointer;
  transition: box-shadow var(--duration-default) var(--ease-default),
              transform var(--duration-default) var(--ease-default);
}

.ko-card--interactive:hover {
  box-shadow: var(--shadow-default);
  transform: translateY(-2px);
}
```

---

## DO
- Keep cards consistent in size within a grid
- Let illustrations carry visual interest — the card border is sufficient structure
- Use tinted variant to group cards on a white/Ground page without visual weight

## DON'T
- Don't add drop shadows to static (non-interactive) cards
- Don't mix card variants within the same grid without clear intent
- Don't round corners beyond `--radius-default` (2px)
- Don't put cards inside cards
- Don't add decorative icons or emojis to card headings
