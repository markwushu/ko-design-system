# Testimonial

## Purpose
Social proof that addresses specific objections or confirms specific claims. Testimonials are not decorative. Placement matters: put each testimonial next to the claim it supports, not grouped at the bottom of the page as an afterthought.

---

## Variants

### Pull quote — inline / editorial

Used within long-form copy to break up text and add proof at the point of persuasion.

```css
.ko-pullquote {
  padding-left: var(--space-6);                       /* 24px */
  border-left: 2px solid var(--color-border-brand);   /* Crimson */
  margin: var(--space-8) 0;
}

.ko-pullquote__text {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: var(--text-h4);                          /* 22px */
  line-height: var(--leading-snug);
  color: var(--color-text-default);
  margin-bottom: var(--space-3);
}

.ko-pullquote__attribution {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}
```

```html
<blockquote class="ko-pullquote">
  <p class="ko-pullquote__text">
    "I've tried every productivity system out there. This is the first one 
    I've actually stuck to."
  </p>
  <cite class="ko-pullquote__attribution">— Sarah T., project manager</cite>
</blockquote>
```

---

### Card — grid / section

Used in dedicated social proof sections. Typically 3 across on desktop, stacked on mobile.

```css
.ko-testimonial-card {
  /* Inherits .ko-card styles */
  background-color: var(--color-bg-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-default);
  padding: var(--space-6);
}

.ko-testimonial-card__text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-default);
  margin-bottom: var(--space-4);
}

.ko-testimonial-card__attribution {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.ko-testimonial-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);                  /* Circle */
  object-fit: cover;
}

.ko-testimonial-card__name {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-default);
}

.ko-testimonial-card__context {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}
```

---

## DO
- Use real, specific testimonials — vague praise adds no persuasion value
- Include first name and a brief context line — anonymous testimonials are not credible
- Choose testimonials that address real objections: "I wasn't sure it would work for me because..."
- Place testimonials adjacent to the claim they support
- Only include a photo if it adds genuine trust — never use a stock photo as an avatar

## DON'T
- Don't use star ratings — they are generic and look like every other product page
- Don't use stock photo avatars
- Don't use testimonials that could apply to any productivity product
- Don't group all testimonials in one section at the page bottom — distribute them
- Don't fabricate or paraphrase testimonials — use the exact words
