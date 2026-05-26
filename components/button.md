# Button

## Purpose
The primary action trigger across all Kept Organised interfaces. Every page should have one clear primary action. Secondary and ghost variants exist for supporting actions only — they must not compete with the primary.

---

## Variants

### Primary
The default call-to-action. Crimson fill, Ground text.

```css
.ko-btn--primary {
  background-color: var(--color-action-primary);        /* #C21F42 */
  color: var(--color-action-primary-text);              /* #FAF8F5 */
  border: 1px solid var(--color-action-primary);
  border-radius: var(--radius-sm);                      /* 1px */
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-medium);
  padding: var(--space-3) var(--space-6);               /* 12px 24px */
  min-width: 160px;
  cursor: pointer;
  transition: background-color var(--duration-default) var(--ease-default),
              border-color var(--duration-default) var(--ease-default);
}

.ko-btn--primary:hover {
  background-color: var(--color-action-primary-hover);  /* #8A1630 */
  border-color: var(--color-action-primary-hover);
}
```

Tailwind: `bg-action-primary text-action-primary-text border border-action-primary rounded-sm px-6 py-3 font-body font-medium text-base min-w-[160px] hover:bg-action-primary-hover hover:border-action-primary-hover transition-DEFAULT`

---

### Secondary
Supporting action. Transparent fill, Ink border and text.

```css
.ko-btn--secondary {
  background-color: transparent;
  color: var(--color-action-secondary-text);            /* #1E1A18 */
  border: 1px solid var(--color-action-secondary-border); /* #1E1A18 */
  border-radius: var(--radius-sm);
}

.ko-btn--secondary:hover {
  background-color: var(--color-action-secondary-hover-bg);   /* #1E1A18 */
  color: var(--color-action-secondary-hover-text);            /* #FAF8F5 */
}
```

---

### Ghost
Lowest-hierarchy action. No border, Crimson text, Tint hover.

```css
.ko-btn--ghost {
  background-color: transparent;
  color: var(--color-action-ghost-text);                /* #C21F42 */
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
}

.ko-btn--ghost:hover {
  background-color: var(--color-action-ghost-hover-bg); /* #F5E6EA */
}
```

---

## Sizes

| Size | Padding | Font size | Min width |
|------|---------|-----------|-----------|
| `sm` | `--space-2` / `--space-4` (8px 16px) | `--text-sm` (14px) | none |
| `default` | `--space-3` / `--space-6` (12px 24px) | `--text-base` (16px) | 160px |
| `lg` | `--space-4` / `--space-8` (16px 32px) | `--text-lg` (18px) | 200px |

---

## States

| State | Behaviour |
|-------|-----------|
| Default | As specified per variant |
| Hover | Colour shift, 200ms transition |
| Focus | 2px outline, `--color-state-focus` (#C21F42), 2px offset |
| Active | Slight scale down: `transform: scale(0.98)` |
| Disabled | `opacity: 0.4`, `cursor: not-allowed`, no hover state |
| Loading | Replace label with `…` or spinner — never disable silently without feedback |

```css
.ko-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.ko-btn:focus-visible {
  outline: 2px solid var(--color-state-focus);
  outline-offset: 2px;
}
```

---

## Base shared CSS

```css
.ko-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color var(--duration-default) var(--ease-default),
              color var(--duration-default) var(--ease-default),
              border-color var(--duration-default) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);
}

.ko-btn:active {
  transform: scale(0.98);
}
```

---

## Full-width variant

On mobile CTAs and inside price/CTA blocks, buttons go full width:

```css
.ko-btn--full {
  width: 100%;
}
```

---

## With icon

Icons (Lucide) sit left of label for directional actions, right for "go" / "next" actions:

```html
<!-- Icon left: download, add, etc. -->
<button class="ko-btn ko-btn--primary">
  <svg><!-- Lucide icon, 16px --></svg>
  Download now
</button>

<!-- Icon right: next, start, etc. -->
<button class="ko-btn ko-btn--primary">
  Start the reset
  <svg><!-- Lucide ArrowRight, 16px --></svg>
</button>
```

Icon size: 16px inline, 20px prominent. Stroke: 1.5 (Lucide default). Colour: `currentColor`.

---

## DO
- One primary button per visible screen section
- Write labels as verbs: "Start the reset", "Get the system", "Download now"
- Use full-width on mobile CTA sections
- Match size to context — `lg` for hero CTAs, `default` for inline, `sm` for compact UI

## DON'T
- Don't write fake-urgent labels: "BUY NOW", "Last chance today"
- Don't use more than one primary button per section
- Don't truncate labels — resize the button
- Don't uppercase labels (it reads as shouting)
- Don't add border-radius beyond `--radius-sm` (1px)
- Don't add icons to both sides of a label
