---
version: alpha
name: Apple
description: A translucent, photography-first interface built to feel like Apple hardware and Apple web chrome. The system uses SF Pro Display/Text, one Action Blue accent, frosted navigation, soft parchment canvases, hairline borders, and subtle blur instead of heavy framing. UI chrome stays quiet so content and motion feel premium, airy, and unmistakably Apple.

colors:
  primary: var(--apple-primary)
  primary-focus: var(--apple-primary-focus)
  primary-on-dark: var(--apple-primary-on-dark)
  ink: var(--apple-ink)
  body: var(--apple-body)
  body-on-dark: var(--apple-body-on-dark)
  body-muted: var(--apple-body-muted)
  ink-muted-80: var(--apple-ink-muted-80)
  ink-muted-48: var(--apple-ink-muted-48)
  divider-soft: var(--apple-divider-soft)
  hairline: var(--apple-hairline)
  canvas: var(--apple-canvas)
  canvas-parchment: var(--apple-canvas-parchment)
  surface-pearl: var(--apple-surface-pearl)
  surface-tile-1: var(--apple-surface-tile-1)
  surface-tile-2: var(--apple-surface-tile-2)
  surface-tile-3: var(--apple-surface-tile-3)
  surface-black: var(--apple-surface-black)
  surface-chip-translucent: var(--apple-surface-chip-translucent)
  on-primary: oklch(98% 0.005 255)
  on-dark: oklch(99% 0.002 255)

typography:
  hero-display:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: var(--apple-tracking-tight)
  display-lg:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  display-md:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.47
    letterSpacing: var(--apple-tracking-tighter)
  lead:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: var(--apple-tracking-normal)
  lead-airy:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  tagline:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.19
    letterSpacing: 0.231px
  body-strong:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: var(--apple-tracking-tighter)
  body:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: var(--apple-tracking-tighter)
  dense-link:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 2.41
    letterSpacing: 0
  caption:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.224px
  caption-strong:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: -0.224px
  button-large:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: 0
  button-utility:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: -0.224px
  fine-print:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.12px
  micro-legal:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.08px
  nav-link:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.12px

rounded:
  none: 0px
  xs: 5px
  sm: 8px
  md: 11px
  lg: 18px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 17px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: var(--apple-primary)
    textColor: oklch(98% 0.005 255)
    typography: body
    rounded: pill
    padding: 11px 22px
    interaction: scale(0.95)
  button-primary-focus:
    outline: 2px solid
    outlineColor: var(--apple-primary-focus)
  button-secondary-pill:
    backgroundColor: transparent
    textColor: var(--apple-primary)
    border: 1px solid
    borderColor: var(--apple-primary)
    typography: body
    rounded: pill
    padding: 11px 22px
  button-dark-utility:
    backgroundColor: var(--apple-ink)
    textColor: var(--apple-body-on-dark)
    typography: button-utility
    rounded: sm
    padding: 8px 15px
  button-pearl-capsule:
    backgroundColor: var(--apple-surface-pearl)
    textColor: var(--apple-ink-muted-80)
    border: 1px solid
    borderColor: var(--apple-divider-soft)
    typography: caption
    rounded: md
    padding: 8px 14px
  button-store-hero:
    backgroundColor: var(--apple-primary)
    textColor: oklch(98% 0.005 255)
    typography: button-large
    rounded: pill
    padding: 14px 28px
  button-icon-circular:
    backgroundColor: var(--apple-surface-chip-translucent)
    opacity: 0.64
    textColor: var(--apple-ink)
    rounded: full
    size: 44px
  text-link:
    backgroundColor: transparent
    textColor: var(--apple-primary)
    typography: body
  text-link-on-dark:
    backgroundColor: transparent
    textColor: var(--apple-primary-on-dark)
    typography: body
  global-nav:
    backgroundColor: var(--apple-surface-black)
    textColor: var(--apple-body-on-dark)
    typography: nav-link
    height: 44px
  sub-nav-frosted:
    backgroundColor: var(--apple-canvas-parchment)
    opacity: 0.8
    backdropFilter: blur(20px) saturate(180%)
    textColor: var(--apple-ink)
    typography: tagline
    height: 52px
  product-tile-light:
    backgroundColor: var(--apple-canvas)
    textColor: var(--apple-ink)
    typography: display-lg
    rounded: none
    padding: 80px
  product-tile-parchment:
    backgroundColor: var(--apple-canvas-parchment)
    textColor: var(--apple-ink)
    typography: display-lg
    rounded: none
    padding: 80px
  product-tile-dark:
    backgroundColor: var(--apple-surface-tile-1)
    textColor: var(--apple-body-on-dark)
    typography: display-lg
    rounded: none
    padding: 80px
  product-tile-dark-2:
    backgroundColor: var(--apple-surface-tile-2)
    textColor: var(--apple-body-on-dark)
    rounded: none
  product-tile-dark-3:
    backgroundColor: var(--apple-surface-tile-3)
    textColor: var(--apple-body-on-dark)
    rounded: none
  store-utility-card:
    backgroundColor: var(--apple-canvas)
    textColor: var(--apple-ink)
    border: 1px solid
    borderColor: var(--apple-hairline)
    typography: body-strong
    rounded: lg
    padding: 24px
  configurator-option-chip:
    backgroundColor: var(--apple-canvas)
    textColor: var(--apple-ink)
    typography: caption
    rounded: pill
    padding: 12px 16px
  configurator-option-chip-selected:
    border: 2px solid
    borderColor: var(--apple-primary-focus)
  search-input:
    backgroundColor: var(--apple-canvas)
    textColor: var(--apple-ink)
    border: 1px solid
    borderColor: rgba(0, 0, 0, 0.08)
    typography: body
    rounded: pill
    padding: 12px 20px
    height: 44px
  floating-sticky-bar:
    backgroundColor: var(--apple-canvas-parchment)
    opacity: 0.8
    backdropFilter: blur(20px) saturate(180%)
    textColor: var(--apple-body)
    typography: body
    height: 64px
    padding: 12px 32px
  environment-quote-card:
    backgroundColor: var(--apple-surface-tile-1)
    textColor: var(--apple-body-on-dark)
    typography: display-lg
    rounded: none
    padding: 80px
  footer:
    backgroundColor: var(--apple-canvas-parchment)
    textColor: var(--apple-ink-muted-80)
    typography: fine-print
    padding: 64px
---

## Overview

Apple's feel comes from restraint plus material precision. The interface should read as **glass, paper, and polished metal** stacked on top of a calm photographic canvas. Content should breathe. Chrome should feel translucent. Headlines should feel carved, not bolded. Actions should be obvious, but never loud.

The app should not look like a generic dashboard with borders. It should feel closer to an Apple product page or Apple Store educational surface: a frosted top bar, soft off-white canvases, quietly rounded pills, hairline separators, and a single saturated blue used only for interaction. Cards exist, but they should feel like light utility surfaces, not boxed widgets.

The rhythm is simple: airy hero, supportive utility panel, quiet nav, minimal chrome, and one accent color. When a stronger focal point is needed, the system should use material change first — translucency, blur, parchment, or dark tile — before adding more border or shadow.

Store and shop surfaces keep the same language but switch tone: translucent navigation layers, fuller blur, tighter utility cards, and sharper dark/light contrast. Across all pages the type system, spacing, and blue accent remain consistent. This is one language expressed through different surface volumes.

**Key Characteristics:**
- Photography-first presentation; UI recedes so the product can speak.
- Alternating full-bleed tile sections: white/parchment ↔ near-black, with the color change itself acting as the section divider.
- Single blue accent (`--apple-primary`) carries every interactive element. No second brand color exists.
- Two button grammars: tiny blue pill CTAs and compact utility rects.
- SF Pro Display + SF Pro Text — negative letter-spacing at display sizes for the signature "Apple tight" headline feel.
- Whisper-soft elevation used only when a product image needs to breathe — exactly one drop-shadow in the entire system.
- Tight two-row nav: slim global nav + product-specific frosted sub-nav with persistent right-aligned primary CTA.
- Section rhythm across multiple pages: light hero → dark product tile → light utility tile → dark tile → parchment footer — a predictable pulse.

---

## Colors

> All colors are CSS variables in `src/styles/theme/daisyui-theme.css`. Light and dark themes switch automatically via `prefers-dark`.

### Brand & Accent
- **Action Blue** (`--apple-primary`): The single brand-level interactive color. All text links, all blue pill CTAs ("Learn more", "Buy"), and the focus ring root. This is Apple's quiet but universal "click me" signal. Press state shrinks via transform: scale(0.95) rather than a hex change.
- **Focus Blue** (`--apple-primary-focus`): A marginally brighter sibling of Action Blue, reserved for the keyboard focus ring on buttons (outline: 2px solid).
- **Sky Link Blue** (`--apple-primary-on-dark`): A brighter blue used on dark surfaces for in-copy links and inline callouts, where Action Blue would disappear against the tile background.

### Surface
- **Pure White / Canvas** (`--apple-canvas`): The dominant canvas. Content, utility cards, store tiles, configurator grids. Light mode: near-white; dark mode: near-black.
- **Parchment** (`--apple-canvas-parchment`): The signature Apple off-white. Used for alternating light tiles, footer region, and the default page canvas in store utility sections. Just different enough from white to create rhythm.
- **Pearl Button** (`--apple-surface-pearl`): A near-white used as the fill for secondary "ghost" buttons — lighter than the parchment canvas so the button still reads as a button against parchment.
- **Near-Black Tile 1** (`--apple-surface-tile-1`): The primary dark-tile surface on the homepage product grid.
- **Near-Black Tile 2** (`--apple-surface-tile-2`): A micro-step lighter — used where a dark tile sits directly above or below Tile 1 to create the faintest separation.
- **Near-Black Tile 3** (`--apple-surface-tile-3`): A micro-step darker — used at the bottom of the stack and in embedded video/player frames.
- **Pure Black** (`--apple-surface-black`): Reserved for true void — video player backgrounds, edge-to-edge photographic overlays, the global nav bar background.
- **Translucent Chip Gray** (`--apple-surface-chip-translucent`): The base color of the translucent gray chip used over photography for circular control buttons. In production, applied at ~64% alpha.

### Text
- **Near-Black Ink** (`--apple-ink`): The voice of every headline, every body paragraph, and the dark utility button's fill. Chosen instead of pure black to keep the page feeling photographic rather than printed.
- **Body** (`--apple-body`): Same tone as ink — Apple uses one near-black for all text on light surfaces.
- **Body On Dark** (`--apple-body-on-dark`): All text on dark tiles and on the global nav bar.
- **Body Muted** (`--apple-body-muted`): Secondary copy on dark tiles where pure white would be too loud.
- **Ink Muted 80** (`--apple-ink-muted-80`): Body text on the white Pearl Button surface — slightly softer than pure black.
- **Ink Muted 48** (`--apple-ink-muted-48`): Disabled button text and legal fine-print.

### Hairlines & Borders
- **Divider Soft** (`--apple-divider-soft`): The "border" tone on secondary buttons — functions as a ring shadow rather than a hard line. In production, often applied as rgba(0, 0, 0, 0.04).
- **Hairline** (`--apple-hairline`): The 1px hairline border on store utility cards and configurator chips.

### Material Language
- **Translucency first.** Treat nav bars, sticky bars, and floating controls as frosted material. Use alpha surfaces and backdrop blur before adding borders.
- **Blur as structure.** Backdrop blur is not decoration. It is the separator between chrome and content.
- **Soft atmospheric wash.** If a hero needs depth, use a very subtle background wash or image-driven atmosphere. Never use loud decorative gradients on controls, cards, or text blocks.
- **Chrome stays quiet.** Heavy shadows, hard outlines, and dense borders are off-brand. Prefer hairlines, surface changes, and spacing.

### Brand Gradient
Use gradients sparingly and only as atmosphere. They belong in backgrounds, hero washes, or photographic treatment, not in buttons, cards, or navigation.

---

## Typography

### Font Family
- **Display**: `SF Pro Display, system-ui, -apple-system, sans-serif` — Apple's proprietary display face, optimized for sizes ≥ 19px. Defines the voice of every headline.
- **Body / UI**: `SF Pro Text, system-ui, -apple-system, sans-serif` — the text-optimized variant used for body copy, captions, buttons, and links below 20px.
- **OpenType features**: `font-variant-numeric: numerator` is enabled on numeric links (pricing tables, spec sheets). Display sizes rely on tight tracking rather than contextual ligatures.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `hero-display` | 56px | 600 | 1.07 | var(--apple-tracking-tight) | Hero headline; the signature "Apple tight" tracking |
| `display-lg` | 40px | 600 | 1.10 | 0 | Tile headlines atop every product tile |
| `display-md` | 34px | 600 | 1.47 | var(--apple-tracking-tighter) | Section heads (SF Pro Text at display proportions) |
| `lead` | 28px | 400 | 1.14 | var(--apple-tracking-normal) | Product tile subcopy |
| `lead-airy` | 24px | 300 | 1.5 | 0 | Environment-page lead paragraphs (the rare weight 300) |
| `tagline` | 21px | 600 | 1.19 | 0.231px | Sub-tile tagline; sub-nav category name |
| `body-strong` | 17px | 600 | 1.24 | var(--apple-tracking-tighter) | Inline strong emphasis |
| `body` | 17px | 400 | 1.47 | var(--apple-tracking-tighter) | Default paragraph |
| `dense-link` | 17px | 400 | 2.41 | 0 | Footer / store utility link lists (relaxed leading) |
| `caption` | 14px | 400 | 1.43 | -0.224px | Secondary captions, button text |
| `caption-strong` | 14px | 600 | 1.29 | -0.224px | Emphasized captions |
| `button-large` | 18px | 300 | 1.0 | 0 | Store hero CTAs (the rare weight 300) |
| `button-utility` | 14px | 400 | 1.29 | -0.224px | Utility/nav button labels |
| `fine-print` | 12px | 400 | 1.0 | -0.12px | Fine-print, footer body |
| `micro-legal` | 10px | 400 | 1.3 | -0.08px | Micro legal disclaimers |
| `nav-link` | 12px | 400 | 1.0 | -0.12px | Global nav menu items |

### Principles

- **Negative letter-spacing at display sizes.** Every headline at 17px and up carries a slight tracking tighten (var(--apple-tracking-tight) → var(--apple-tracking-tighter)). This produces the iconic "Apple tight" headline cadence. Never used at 12px or below.
- **Body copy at 17px, not 16px.** Apple breaks the SaaS convention and runs paragraph text at 17px. The extra pixel gives the page an unmistakable "reading, not scanning" pace.
- **Weight 300 is real and rare.** Used deliberately on a handful of large-size reads (button-large at 18px/300 and lead-airy at 24px/300). It's not an accident — it's a light-atmosphere cue reserved for moments where the content should feel airy.
- **Weight 600, not 700, for headlines.** Apple's headlines sit at weight 600. Weight 700 is used sparingly for tagline (21px) when a touch more assertion is needed.
- **Line-height is context-specific.** Display sizes use 1.07–1.19 (tight). Body uses 1.47. Utility link stacks in the footer/store use an unusually relaxed 2.41 (dense-link). The 2.41 is not a bug — it's how the footer's dense link columns breathe.
- **Weight 500 is deliberately absent.** The ladder is 300 / 400 / 600 / 700. Mid-weight readings always use 600.

### Note on Font Substitutes
SF Pro is Apple's proprietary system font. When building off-system:

- Use `system-ui, -apple-system, BlinkMacSystemFont` as the first stack entry — on macOS/iOS/Safari this resolves to the real SF Pro.
- For non-Apple platforms, **Inter** (Google Fonts, variable) is the closest open-source equivalent. Inter at weight 600 with `font-feature-settings: "ss03"` approximates SF Pro's rounded "a" character.
- Nudge `letter-spacing` down by `-0.01em` on display sizes to re-create the Apple tight feel; Inter's default tracking runs slightly wider than SF Pro.
- For body text, tighten line-height by `0.03` (from 1.47 → 1.44) when substituting Inter — Inter's taller x-height needs less leading.

---

## Layout

### Spacing System
- **Base unit:** 8px. Sub-base values (2, 4, 5, 6, 7) are used for tight typographic adjustments; structural layout snaps to 8/12/16/20/24.
- **Tokens:** xxs (4px) · xs (8px) · sm (12px) · md (17px) · lg (24px) · xl (32px) · xxl (48px) · section (80px).
- **Section vertical padding:** section (80px) inside a product tile; tiles stack edge-to-edge with 0 gap (the color change provides the break).
- **Card padding:** lg (24px) inside utility grid cards.
- **Button padding:** 8–11px vertical, 15–22px horizontal.
- **Universal rhythm constants:** the 17px body line-height multiplier (~25px line) and 21px tagline size show up on every analyzed page.

### Grid & Container
- **Max content width:** ~980px on text-heavy sections (environment), ~1440px on product grids (store, accessories), full-bleed for product tiles (homepage).
- **Column patterns:** 3 to 5 column utility card grid on store/accessories; 2-column side-by-side tiles on homepage occasional sections; single-column centered stack on product tile heroes.
- **Gutters:** 20–24px between cards in a utility grid.

### Whitespace Philosophy
Apple's whitespace is the product's pedestal. Every tile begins with at least 64px of air above its headline and 48–64px below. Product renders are never crowded; the nearest content to a product image is at least 40px away. The footer is the only area that breaks this — there, Apple goes deliberately dense to make the full information architecture visible at a glance.

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Full-bleed tiles, global nav, footer, body sections |
| Soft hairline | 1px var(--apple-hairline) border | Utility cards, sub-nav frosted-glass separator |
| Backdrop blur | backdrop-filter: blur(20px) saturate(180%) | Sub-nav and the iPhone buy floating sticky bar |
| Product shadow | var(--apple-shadow-product) | Product renders resting on a surface (the only true "shadow" in the system) |

**Shadow philosophy.** Apple uses **exactly one** drop-shadow, and it is applied to photographic product imagery — never to cards, never to buttons, never to text. Elevation in the UI comes from (a) surface-color change (light tile ↔ dark tile) and (b) backdrop-blur on sticky bars. The single shadow is about giving the product weight, not about UI hierarchy.

### Decorative Depth
- **Atmospheric imagery** on the environment page (photographic vista) supplies mood; no CSS gradient involved.
- **Edge-to-edge tile alternation** creates rhythm without borders or shadows — the color change itself is the divider.
- **Backdrop-filter blur** on sub-nav-frosted and floating-sticky-bar creates a "floating over content" effect that's functional, not decorative.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0px | Full-bleed product tiles (no corner rounding) |
| xs | 5px | Inline links when styled as subtle chips (rare) |
| sm | 8px | Dark utility buttons (Sign In, Bag), inline card imagery |
| md | 11px | White Pearl Button capsules |
| lg | 18px | Store utility cards, accessories grid cards |
| pill | 9999px | Primary blue pill CTAs, sub-nav buy button, configurator option chips, search input — the signature Apple pill |
| full | 9999px / 50% | Circular control chips floating over photography |

### Photography Geometry
- **Hero imagery**: full-bleed, 21:9 or taller on the homepage; 16:9 on environment and shop pages. Product renders are photographic-realistic, often shot on a tinted surface that becomes the tile background.
- **Product renders**: PNG/WebP with transparency; rest on a surface tile and pick up the system shadow.
- **Accessory grid**: square 1:1 crops at lg (18px) radius, light neutral backgrounds, product centered with 20–40px internal padding.
- **No rounded imagery in hero tiles** — images are full-bleed rectangular. Rounding (sm, lg) appears only on inline card imagery.
- Lazy-loading via responsive `srcset` and `sizes` across all breakpoints; CDN-optimized WebP.

---

## Components

### Global Navigation

**Key Properties:**
- Background: translucent black or frosted parchment depending on page tone, always with blur
- Text: var(--apple-body-on-dark) or var(--apple-ink) using nav-link typography
- Height: 44px
- No shadow; sits flush and quiet, with only a hairline or translucent divider when needed.
- Right-aligned controls should remain minimal and precise.
- Mobile: collapse aggressively and preserve only the essentials.

**Tailwind Implementation:**
```html
<nav class="fixed top-0 w-full h-11 bg-[var(--apple-surface-black)] 
            text-[var(--apple-body-on-dark)] z-50 flex justify-between items-center px-6">
  <!-- Left: Logo -->
  <!-- Center: Links (hidden mobile) -->
  <!-- Right: Search, Bag -->
</nav>
```

### Sub-Navigation (Frosted)

**Key Properties:**
- Background: var(--apple-canvas-parchment) or var(--apple-canvas) at 80% opacity with backdrop blur
- Sticky positioning below global nav
- Height: 52px
- Left: category name in tagline typography
- Right: inline nav links + persistent primary CTA button
- Creates frosted-glass "floating over content" effect

### Buttons

**Primary Pill:** Background var(--apple-primary), text white, rounded pill, padding 11px × 22px. Press state: scale(0.95). Focus: 2px outline var(--apple-primary-focus).

**Secondary Pill:** Border 1px var(--apple-primary), text var(--apple-primary), background transparent, rounded pill, padding 11px × 22px.

**Dark Utility:** Background var(--apple-ink), text var(--apple-body-on-dark), rounded sm, padding 8px × 15px. Used for Sign In, Bag, etc.

**Pearl Capsule:** Background var(--apple-surface-pearl), text var(--apple-ink-muted-80), border 1px var(--apple-divider-soft), rounded md, padding 8px × 14px.

**Store Hero:** Background var(--apple-primary), text white, button-large typography (18px / 300), rounded pill, padding 14px × 28px.

**Icon Circular:** 44 × 44px, background var(--apple-surface-chip-translucent) at ~64% alpha, rounded full. Floats over photography.

### Product Tiles

**Light Tile:** Background var(--apple-canvas), text var(--apple-ink), centered headline + tagline + two CTAs + product render. Vertical padding: 80px. Rounded: none (full-bleed).

**Parchment Tile:** Same as light but background var(--apple-canvas-parchment). Used to break rhythm between consecutive white tiles.

**Dark Tile 1:** Background var(--apple-surface-tile-1), text var(--apple-body-on-dark). Same content stack as light tile. Uses var(--apple-primary-on-dark) for inline links (brighter on dark).

**Dark Tile 2 & 3:** Variants using var(--apple-surface-tile-2) and var(--apple-surface-tile-3) for micro-step color separations when stacking dark tiles.

### Utility Cards (Grid)

**Key Properties:**
- Background: var(--apple-canvas)
- Border: 1px var(--apple-hairline)
- Rounded: lg (18px)
- Padding: 24px
- Content: product image (1:1 crop, sm inner radius) + name (body-strong) + price (body) + link (text-link)

### Cards & Containers

**Store Utility Card:** White card with hairline border, 18px radius, 24px padding. Houses product image + specs + link.

**Configurator Option Chip:** Pill-shaped (rounded full), background var(--apple-canvas), text var(--apple-ink), caption typography. Selected state: border 2px var(--apple-primary-focus).

**Search Input:** Background var(--apple-canvas), text var(--apple-ink), body typography, 1px rgba(0,0,0,0.08) border, rounded pill, padding 12px × 20px, height 44px.

**Floating Sticky Bar:** Fixed at viewport bottom, background var(--apple-canvas-parchment) at 80% with backdrop blur, height 64px. Left: price total. Right: "Add to Bag" CTA.

**Environment Quote Card:** Full-bleed dark photographic hero with var(--apple-surface-tile-1) fallback, centered headline (display-lg), 80px padding.

**Footer:** Background var(--apple-canvas-parchment), text var(--apple-ink-muted-80), dense link columns (2.41 line-height), column heads (caption-strong), legal row (fine-print / var(--apple-ink-muted-48)), 64px padding.

---

## Do's and Don'ts

### Do
- Use `var(--apple-primary)` (Action Blue) for every interactive element — links, pill CTAs, focus signals — and nothing else. The single accent is non-negotiable.
- Set headlines in hero-display or display-lg with negative letter-spacing (var(--apple-tracking-tight) → var(--apple-tracking-tighter)) to get the signature Apple tight cadence.
- Run body copy at 17px / 400 / 1.47. The extra pixel and generous leading are part of the premium feel.
- Prefer translucency and blur for nav, sticky bars, and floating controls before introducing borders.
- Alternate canvas, parchment, and dark tile to create rhythm. Material change should come before decorative chrome.
- Reserve rounded pill for primary actions and action chips. It should read as an affordance, not generic softness.
- Apply the single product-shadow (`--apple-shadow-product`) only to product renders resting on a surface — never on cards, buttons, or text.
- Use `transform: scale(0.95)` as the active/press state on buttons.
- Keep color relationships muted and deliberate. Most surfaces should feel off-white, parchment, or near-black, never saturated.

### Don't
- Don't introduce a second accent color; every click signal is var(--apple-primary) (Action Blue).
- Don't add shadows to cards, buttons, or text — shadow is reserved for product imagery.
- Don't use hard opaque fills for chrome when a frosted layer can work.
- Don't use loud gradients as UI decoration. If a gradient exists, it must feel like atmosphere, not UI skin.
- Don't set body copy at weight 500 — the ladder is 300 / 400 / 600 / 700, with 500 deliberately absent.
- Don't round full-bleed tiles — tiles are rectangular and edge-to-edge; the material change is the divider.
- Don't tighten line-height below 1.47 for body copy.
- Don't mix radii grammars — use sm for compact utility, lg for utility cards, pill for pills, and nothing in between except rare md capsules.
- Don't use `--apple-primary-on-dark` on light surfaces — it belongs to dark tiles and dark chrome only.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Single-column tiles; sub-nav collapses to category name + primary CTA only; hero typography drops to 28px |
| Phone | 420–640px | Single-column stack; product renders scale to 80% of tile width; hero h1 drops to 34px |
| Large phone | 641–735px | Tiles transition to tighter padding (48px vertical vs 80px); fine-print wraps |
| Tablet portrait | 736–833px | Global nav collapses to hamburger; sub-nav hides category chips, keeps primary CTA |
| Tablet landscape | 834–1023px | Global nav returns fully expanded; 3-column utility grids become 2-column |
| Small desktop | 1024–1068px | Product tiles use 2/3 width with margin gutters; hero h1 stays at 40px |
| Desktop | 1069–1440px | Full layout; 4–5 column store grids; 1440px content max |
| Wide desktop | ≥ 1441px | Content locks at 1440px, margins absorb extra width |

The structural breakpoints that matter for agents: 1440px (content lock), 1068px (small-desktop), 833px (tablet landscape switch), 734px (tablet portrait), 640px (phone), 480px (small phone).

### Touch Targets
- Minimum 44 × 44px. button-primary lands at ~44 × 100px (with the full-pill radius making the visible hit area more generous than the label suggests).
- button-icon-circular is exactly 44 × 44px.
- Global nav utility links are smaller (~32 × 80px) — they deliberately sit at a tighter target because they're precision desktop actions, and the mobile hamburger replaces them at ≤ 833px.

### Collapsing Strategy
- **Global nav**: full horizontal link row on desktop → collapses to Apple logo + hamburger + bag icon at 834px and below.
- **Sub-nav**: category name + inline links + primary CTA → category name + primary CTA only at mobile; inline links move into a hamburger tray.
- **Product tiles**: stack from 2-column to 1-column at 834px; vertical padding tightens from 80px → 48px at small-phone.
- **Utility grids** (store, accessories): 5-col → 4-col (1440px) → 3-col (1068px) → 2-col (834px) → 1-col (640px).
- **Hero typography**: hero-display (56px) → display-lg (40px) at 1068px → 34px at 640px → 28px at 419px.

### Image Behavior
- All product imagery uses responsive `srcset` with breakpoint-matched crops.
- Hero photography may switch art direction at mobile (e.g., the environment page's vista crops to a taller aspect ratio on mobile, framing the subject differently).
- Product renders maintain their 1:1 or 4:3 aspect ratios across breakpoints; only scale changes.
- Lazy-loading is default; the above-fold hero loads eagerly.

---

## Implementation Notes

### Token Structure
All color, shadow, and tracking values reference CSS variables from `src/styles/theme/daisyui-theme.css`. When light/dark theme changes via prefers-dark, the entire palette shifts automatically. No component variants needed.

### Tailwind + Custom CSS
Use Tailwind classes for layout, spacing, and state (hover, active, focus). Use inline styles or CSS modules for letter-spacing and custom line-heights that Tailwind doesn't cover (e.g., 2.41 for dense-link). Always reference var(--apple-*) for colors.

### Component Composition
Components inherit typography from their YAML entry; don't override font-size in Tailwind unless breakpoint-specific. Padding and rounded tokens follow the grid (4, 8, 11, 18, 24, 32, 48, 80). Border colors always use var(--apple-hairline) or var(--apple-divider-soft), never inline grays.

---

## Iteration Guide

1. Focus on ONE component at a time. Reference its key directly (button-primary, product-tile-dark, search-input).
2. Variants of an existing component (-active, -focus, -2, -3) live as separate entries in components.
3. Use var(--apple-*) everywhere — never inline hex or oklch.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay SF Pro Display 600 with negative letter-spacing. Body stays SF Pro Text 400 at 17px. The boundary is unbreakable.
6. The single drop-shadow (var(--apple-shadow-product)) is reserved for product photography only.
7. When in doubt about emphasis: alternate surface (light → dark tile) before adding chrome.

---

## Known Gaps

- Form validation and error states were not surfaced on the analyzed pages; only the neutral search input is documented.
- The homepage's embedded video/player frame uses var(--apple-surface-black); interior player controls are not documented (they're a platform widget, not a web-design token).
- Some component imagery is dynamic (rotating product hero) and its specific copy varies per surface — component specs name the structure, not the rotating content.
- Dark-mode counterparts for store and accessories utility cards were not surfaced on the analyzed pages; the system documented is the daytime/light-dominant variant Apple ships by default.
- Atmospheric photography (environment page mountain vista) is a content asset, not a design token; the documented environment-quote-card describes the structural surface only.
- The exact backdrop-filter blur radius on sub-nav-frosted and floating-sticky-bar is platform-dependent; production CSS uses saturate(180%) blur(20px) as a typical baseline but the value isn't formalized as a token.
