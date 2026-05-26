# Navigation

## Purpose
Provides wayfinding and brand anchoring. Navigation should be minimal — Kept Organised does not have a complex page architecture. It earns attention for content, not for itself.

---

## Desktop layout

```
[Logo/Wordmark]                    [Link] [Link] [Link] [CTA Button]
```

- Logo: left-aligned
- Links + CTA: right-aligned
- Max width: `--container-xl` (1280px), centred with `--space-16` horizontal padding
- Height: 64px
- Background: `--color-bg-default` initially, `--shadow-sm` added on scroll

```css
.ko-nav {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  height: 64px;
  display: flex;
  align-items: center;
  background-color: var(--color-bg-default);
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-default) var(--ease-default),
              box-shadow var(--duration-default) var(--ease-default);
}

.ko-nav--scrolled {
  border-bottom-color: var(--color-border-faint);
  box-shadow: var(--shadow-sm);
}
```

---

## Mobile layout

```
[Logo/Wordmark]                             [☰]
```

- Logo: left-aligned
- Hamburger trigger: right-aligned, minimum touch target 44×44px
- Menu: full-screen overlay

```css
/* Mobile menu overlay */
.ko-nav__mobile-menu {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  background-color: var(--color-bg-inverse);          /* #1E1A18 */
  padding: var(--space-8) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.ko-nav__mobile-link {
  font-family: var(--font-heading);
  font-size: var(--text-h3);
  color: var(--color-text-inverse);
  text-decoration: none;
}
```

---

## Logo / wordmark

- Wordmark only — no icon or logomark at this stage
- Font: DM Serif Display
- Colour: `--color-text-default` on light nav, `--color-text-inverse` on mobile overlay
- Do not animate or transform the logo

---

## Link styles

```css
.ko-nav__link {
  font-family: var(--font-body);
  font-size: var(--text-sm);                          /* 14px */
  font-weight: var(--weight-medium);
  color: var(--color-text-default);
  text-decoration: none;
  transition: color var(--duration-default) var(--ease-default);
}

.ko-nav__link:hover {
  color: var(--color-text-brand);
}

.ko-nav__link--active {
  color: var(--color-text-brand);
  text-decoration: underline;
  text-underline-offset: 3px;
}
```

---

## CTA in nav

- Desktop: primary button, `sm` size (8px 16px padding), right of links
- Mobile: include as full-width primary button at bottom of mobile overlay menu

---

## Hamburger icon

Use Lucide `Menu` (open) and `X` (close). Stroke 1.5. Size 24px. Colour: `currentColor`.

Accessible toggle:
```html
<button 
  aria-label="Open menu" 
  aria-expanded="false"
  aria-controls="ko-mobile-menu"
  class="ko-nav__hamburger">
  <!-- Lucide Menu icon -->
</button>
```

---

## Scroll detection (JS)

```javascript
const nav = document.querySelector('.ko-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('ko-nav--scrolled', window.scrollY > 0);
}, { passive: true });
```

---

## DO
- Keep desktop nav links to 4 or fewer
- Always include a CTA button in the nav
- Ensure mobile menu close button is prominently placed (top right)
- Lock scroll on body when mobile menu is open

## DON'T
- Don't add dropdown menus unless the product architecture genuinely requires them
- Don't animate the logo
- Don't use mega-menus
- Don't use a hamburger icon on desktop
