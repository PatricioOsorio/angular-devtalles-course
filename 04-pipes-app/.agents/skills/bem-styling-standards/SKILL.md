---
name: bem-styling-standards
description: >
  Estándar BEM para Angular: bloque-nombre-completo + iniciales (nc), CSS-first con
  @apply Tailwind/DaisyUI. HTML limpio, estilos en CSS. Para pages, layouts y componentes
  standalone.
---

# BEM Styling Standards

## Golden Rules (No Negotiable)

1. **HTML = BEM solo**, sin utility classes de Tailwind. Ni una.
2. **CSS = @apply siempre**. Tailwind y DaisyUI via `@apply`, no en template.
3. **Bloque = nombre-completo** (ej: `search-input`). Elementos con iniciales: `nc__label`.
4. **Sin `&__` en CSS nativo**. Siempre selectores explícitos (`.es__card {}`).
5. **Responsive en CSS con breakpoints Tailwind via `@apply`** (`sm:`, `md:`, `lg:`, `xl:`). No responsive utilities en `.html`.

## BEM Convention

- **Block**: `nombre-completo` (2+ palabras)
  - Si 1 palabra: renombra a `palabra-container`
- **Initials**: primera letra de cada palabra
  - `search-input` → `si`
  - `empty-state` → `es`
  - `navbar-menu` → `nm`
- **Elements**: `xx__element`
- **Modifiers**: `xx__element--variant`

Ejemplos:
- `search-input-component` → `sic__label`, `sic__input`, `sic__button--primary`
- `profile-card` → `pc__avatar`, `pc__name--bold`

## Setup (Required)

**1. package.json** - Import alias:
```json
{
  "imports": {
    "#styles/app.css": "./src/styles/app.css"
  }
}
```

**2. Component CSS** - Always start with:
```css
@reference '#styles/app.css';

:host {
  @apply block;
}

@layer components {
  /* tu código aqui */
}
```

## Estructura Mínima

**HTML** (clean):
```html
<section class="search-input-component">
  <label class="sic__label">Email</label>
  <input class="sic__input" type="email" />
  <button class="sic__button">Enviar</button>
</section>
```

**CSS** (@apply driven):
```css
.search-input-component {
  @apply flex flex-col gap-4;
}

.sic__label {
  @apply text-sm font-semibold text-base-content;
}

.sic__input {
  @apply input input-bordered;
}

.sic__button {
  @apply btn btn-primary;
}

.sic__button--loading {
  @apply btn-disabled;
}

/* Responsive */
.search-input-component {
  @apply md:flex-row md:gap-6;
}
```

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|--------|----------|
| `.sic__input { @apply input; }` | `class="input"` en HTML |
| `.sc { @apply flex; } .sc__item { @apply ... }` | `&__item` en CSS nativo |
| Responsive en `.css` con `@apply md:... lg:...` | `class="md:flex lg:grid"` en template |
| Un bloque por componente | Múltiples bloques sin razón |
| `sic__button--active` | `sic__button-active` |

## Checklist Rápido

- [ ] HTML = bloque BEM + elementos con iniciales
- [ ] CSS tiene `@reference '#styles/app.css'`
- [ ] Tailwind/DaisyUI vía `@apply`
- [ ] Breakpoints (`sm:/md:/lg:`) definidos en CSS vía `@apply`
- [ ] Sin `&__` ni `&--`
- [ ] Responsive en CSS
- [ ] Build pasa sin errores
