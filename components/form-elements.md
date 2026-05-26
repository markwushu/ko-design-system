# Form Elements

## Purpose
Used in checkout flows, contact forms, intake forms, and any user input context. Form elements must feel precise and honest — no decorative chrome. Every element earns its place.

---

## Input

```css
.ko-input {
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  color: var(--color-text-default);
  background-color: var(--color-bg-default);
  border: 1px solid var(--color-border-default);      /* #1E1A18 */
  border-radius: var(--radius-none);                  /* 0px — fully sharp */
  padding: var(--space-3) var(--space-4);             /* 12px 16px */
  line-height: var(--leading-normal);
  transition: border-color var(--duration-fast) var(--ease-default);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.ko-input::placeholder {
  color: var(--color-text-muted);
}

.ko-input:focus {
  border-color: var(--color-border-brand);            /* #C21F42 */
}

.ko-input:disabled {
  background-color: var(--color-bg-subtle);
  opacity: 0.6;
  cursor: not-allowed;
}

.ko-input--error {
  border-color: var(--color-state-error);             /* #C21F42 */
}

.ko-input--filled {
  border-color: var(--color-border-subtle);           /* #5C5450 */
}
```

---

## Label

```css
.ko-label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-xs);                          /* 12px */
  font-weight: var(--weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);               /* 0.05em */
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);                      /* 8px */
}

/* Required field indicator */
.ko-label--required::after {
  content: ' *';
  color: var(--color-text-brand);
}
```

---

## Helper and error text

```css
.ko-field-helper {
  display: block;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-1);                         /* 4px */
}

.ko-field-error {
  display: block;
  font-size: var(--text-sm);
  color: var(--color-state-error);
  margin-top: var(--space-1);
}
```

---

## Checkbox

```css
.ko-checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  cursor: pointer;
}

.ko-checkbox {
  width: 16px;
  height: 16px;
  min-width: 16px;
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-none);                  /* 0px */
  background-color: var(--color-bg-default);
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  margin-top: 2px;                                    /* Align with text */
  transition: background-color var(--duration-fast), border-color var(--duration-fast);
}

.ko-checkbox:checked {
  background-color: var(--color-action-primary);
  border-color: var(--color-action-primary);
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4L3.5 6.5L9 1' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

.ko-checkbox-label {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  color: var(--color-text-default);
  line-height: var(--leading-normal);
}
```

---

## Select / Dropdown

```css
.ko-select {
  /* Inherits all .ko-input styles */
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235C5450' stroke-width='1.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-10);
  cursor: pointer;
}
```

---

## Textarea

```css
.ko-textarea {
  /* Inherits all .ko-input styles */
  min-height: 120px;
  resize: vertical;
  line-height: var(--leading-relaxed);
}
```

---

## Form field wrapper

```html
<div class="ko-field">
  <label class="ko-label ko-label--required" for="email">Email address</label>
  <input class="ko-input" type="email" id="email" placeholder="you@example.com" />
  <span class="ko-field-helper">We'll send your receipt here.</span>
  <!-- OR on error: -->
  <span class="ko-field-error">Please enter a valid email address.</span>
</div>
```

```css
.ko-field {
  display: flex;
  flex-direction: column;
}

.ko-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);                                /* 24px between fields */
}
```

---

## Form layout rules
- Labels always above inputs — never inside as placeholder-only
- Placeholder text should show an example value, not the label itself
- Error messages appear below the relevant field, not as a page-level toast
- Required fields: asterisk (*) after label — never hide required status
- Validate inline after field blur, not only on submit
- Submit button: Primary variant, full-width on mobile

---

## DO
- Group related fields visually with `--space-6` gap
- Write helper text that explains the *why*, not just the *what*
- Show inline validation as the user completes each field

## DON'T
- Don't use placeholder text as the label
- Don't add decorative borders or backgrounds to the form container
- Don't round input corners beyond `--radius-none` (0px) — fully sharp is intentional
- Don't use floating labels
- Don't show all errors only on submit
