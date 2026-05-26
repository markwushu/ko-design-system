/** ============================================================
 *  Kept Organised Design System — Tailwind Config v1.0
 *  
 *  All values reference CSS custom properties from tokens.css.
 *  This means tokens.css remains the single source of truth.
 *  Changes to tokens.css flow through automatically.
 *
 *  Requires: Tailwind CSS v3.x
 *  Usage: copy this file to project root, import tokens.css
 *  ============================================================ */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    './index.html',
  ],

  theme: {
    extend: {

      /* ── COLOURS ─────────────────────────────────────────── */
      colors: {

        /* Brand layer — raw palette */
        brand: {
          crimson: 'var(--color-brand-crimson)',
          deep:    'var(--color-brand-deep)',
          tint:    'var(--color-brand-tint)',
          ink:     'var(--color-brand-ink)',
          body:    'var(--color-brand-body)',
          ground:  'var(--color-brand-ground)',
        },

        /* Semantic layer — use these in components */
        bg: {
          DEFAULT: 'var(--color-bg-default)',
          subtle:  'var(--color-bg-subtle)',
          inverse: 'var(--color-bg-inverse)',
          brand:   'var(--color-bg-brand)',
        },

        text: {
          DEFAULT: 'var(--color-text-default)',
          muted:   'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
          brand:   'var(--color-text-brand)',
          subtle:  'var(--color-text-subtle)',
        },

        action: {
          primary:       'var(--color-action-primary)',
          'primary-hover': 'var(--color-action-primary-hover)',
          'primary-text':  'var(--color-action-primary-text)',
          'ghost-text':    'var(--color-action-ghost-text)',
          'ghost-hover':   'var(--color-action-ghost-hover-bg)',
        },

        border: {
          DEFAULT: 'var(--color-border-default)',
          subtle:  'var(--color-border-subtle)',
          faint:   'var(--color-border-faint)',
          brand:   'var(--color-border-brand)',
        },

        state: {
          focus:   'var(--color-state-focus)',
          error:   'var(--color-state-error)',
          success: 'var(--color-state-success)',
          warning: 'var(--color-state-warning)',
        },

      },

      /* ── TYPOGRAPHY: Families ────────────────────────────── */
      fontFamily: {
        heading: 'var(--font-heading)',
        body:    'var(--font-body)',
        mono:    'var(--font-mono)',
        sans:    'var(--font-body)',    /* Override Tailwind default */
      },

      /* ── TYPOGRAPHY: Scale ───────────────────────────────── */
      fontSize: {
        'display': [
          'var(--text-display)',
          { lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)' }
        ],
        'h1': [
          'var(--text-h1)',
          { lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)' }
        ],
        'h2': [
          'var(--text-h2)',
          { lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)' }
        ],
        'h3': [
          'var(--text-h3)',
          { lineHeight: 'var(--leading-snug)' }
        ],
        'h4': [
          'var(--text-h4)',
          { lineHeight: 'var(--leading-normal)' }
        ],
        'h5': [
          'var(--text-h5)',
          { lineHeight: 'var(--leading-normal)' }
        ],
        'lg':   ['var(--text-lg)',   { lineHeight: 'var(--leading-normal)' }],
        'base': ['var(--text-base)', { lineHeight: 'var(--leading-normal)' }],
        'sm':   ['var(--text-sm)',   { lineHeight: 'var(--leading-normal)' }],
        'xs':   ['var(--text-xs)',   { lineHeight: 'var(--leading-normal)' }],
        'mono': ['var(--text-mono)', { lineHeight: 'var(--leading-normal)' }],
      },

      /* ── TYPOGRAPHY: Line heights ────────────────────────── */
      lineHeight: {
        tight:   'var(--leading-tight)',
        snug:    'var(--leading-snug)',
        normal:  'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
      },

      /* ── TYPOGRAPHY: Letter spacing ──────────────────────── */
      letterSpacing: {
        tight:  'var(--tracking-tight)',
        normal: 'var(--tracking-normal)',
        wide:   'var(--tracking-wide)',
        wider:  'var(--tracking-wider)',
      },

      /* ── TYPOGRAPHY: Font weights ────────────────────────── */
      fontWeight: {
        regular:  'var(--weight-regular)',
        medium:   'var(--weight-medium)',
        semibold: 'var(--weight-semibold)',
        bold:     'var(--weight-bold)',
      },

      /* ── SPACING ─────────────────────────────────────────── */
      spacing: {
        '0':   'var(--space-0)',
        'px':  'var(--space-px)',
        '1':   'var(--space-1)',
        '2':   'var(--space-2)',
        '3':   'var(--space-3)',
        '4':   'var(--space-4)',
        '5':   'var(--space-5)',
        '6':   'var(--space-6)',
        '8':   'var(--space-8)',
        '10':  'var(--space-10)',
        '12':  'var(--space-12)',
        '16':  'var(--space-16)',
        '20':  'var(--space-20)',
        '24':  'var(--space-24)',
        '32':  'var(--space-32)',
        '40':  'var(--space-40)',
        '48':  'var(--space-48)',
      },

      /* ── MAX WIDTHS ──────────────────────────────────────── */
      maxWidth: {
        'sm':    'var(--container-sm)',
        'md':    'var(--container-md)',
        'lg':    'var(--container-lg)',
        'xl':    'var(--container-xl)',
        '2xl':   'var(--container-2xl)',
        'prose': 'var(--container-prose)',
      },

      /* ── BORDER RADIUS ───────────────────────────────────── */
      borderRadius: {
        'none':    'var(--radius-none)',
        'sm':      'var(--radius-sm)',
        'DEFAULT': 'var(--radius-default)',
        'lg':      'var(--radius-lg)',
        'full':    'var(--radius-full)',
      },

      /* ── SHADOWS ─────────────────────────────────────────── */
      boxShadow: {
        'none':    'var(--shadow-none)',
        'sm':      'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow-default)',
        'lg':      'var(--shadow-lg)',
        'xl':      'var(--shadow-xl)',
      },

      /* ── MOTION ──────────────────────────────────────────── */
      transitionDuration: {
        'fast':    'var(--duration-fast)',
        'DEFAULT': 'var(--duration-default)',
        'slow':    'var(--duration-slow)',
      },

      transitionTimingFunction: {
        'DEFAULT': 'var(--ease-default)',
        'in':      'var(--ease-in)',
        'out':     'var(--ease-out)',
      },

      /* ── Z-INDEX ─────────────────────────────────────────── */
      zIndex: {
        'below':    'var(--z-below)',
        'base':     'var(--z-base)',
        'raised':   'var(--z-raised)',
        'dropdown': 'var(--z-dropdown)',
        'sticky':   'var(--z-sticky)',
        'modal':    'var(--z-modal)',
        'toast':    'var(--z-toast)',
      },

    },
  },

  plugins: [],
}
