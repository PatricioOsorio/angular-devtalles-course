---
name: country-app-identity
description: Identidad visual, diseño UI/UX y lineamientos estéticos oficiales de la aplicación CountryApp. Usar esta skill para generar componentes nuevos o refactorizar existentes con la misma armonía y estilo premium.
---

# Identidad Visual - CountryApp

Esta skill define los lineamientos exactos de diseño, interfaces (UI) y experiencia de usuario (UX) de **CountryApp**. Todo componente nuevo debe adherirse estrictamente a estas reglas para mantener consistencia.

## 1. Reglas Estructurales (BEM + DaisyUI)
- **Implementación limpia:** El HTML no debe contener clases de TailwindCSS directamente (como `class="flex p-4"`).
- **Metodología BEM:** Usa convenciones BEM (ej: `my-component`, `mc__title`, `mc__link--active`).
- **CSS:** Utiliza `@apply` de Tailwind en los archivos `.css` del componente.
- **Componentes de DaisyUI:** Aprovecha semánticamente componentes como `.btn`, `.badge`, `.stats`, `.menu`, `.table` aplicados mediante `@apply`. NOTA: a partir de Tailwind v4, utiliza reglas de selectores descendentes puros (ej. `.mc:hover .mc__child`) en lugar de pseudoclases funcionales como `@apply group-hover`.

## 2. Paleta y Tema (app-light / app-dark)
La aplicación maneja temas light y dark basados en especificaciones OKLCH en `daisyui-theme.css`.
- **Fondos (Base):** Superficies limpias usando colores base. El fondo de las tarjetas y contenedores generalmente se construye con fondos sutiles como `bg-base-200/30` o `bg-base-100/80` superpuestas.
- **Acentos y Marcas:** Se prefieren `primary` y `accent` para llamadas a la acción y estados activos (`menu-active`). Funciones neutrales usan `neutral`.
- **Textos:** Títulos principales usan `text-base-content`, bajadas y descripciones usan `text-base-content/70` o `text-base-content/80`. Textos secundarios o estados vacíos usan `text-base-content/60`.

## 3. Estética Glassmorphism, Layouts y "Modern Premium"
Se busca un aspecto elegante, limpio y profundo (High-End UX):
- **Navegación y Top Menus:** Barras de navegación pegajosas (`sticky top-0 z-40`) con un alto nivel de glassmorphism (`bg-base-100/80 backdrop-blur`) y bordes inferiores (`border-b border-base-300/80`).
- **Contenedores y Tarjetas:** Uso intensivo de contenedores semi-transparentes aislados en el marco: `@apply bg-base-200/30 backdrop-blur-md border border-base-300/50`.
- **Radios Extendidos:** Contenedores curvos amigables, usualmente `rounded-3xl`, `rounded-[2.5rem]` o la variable `rounded-box`.
- **Glows y Mallas Radiales:** Fondos que incluyen destellos sutiles para dar profundidad de campo (`radial-gradient` o `blur-3xl bg-primary/20`).
- **Sombras Expandidas:** Para dar elevación a elementos flotantes (dropdowns) usa `shadow-2xl`. Para tarjetas, usa `shadow-lg` o sombras tintadas muy ligeras y amplias: `shadow-[0_20px_50px_rgba(0,0,0,0.05)]`.

## 4. Tipografía Esquemática
- **Grandes Encabezados (Hero/Titles):** Altamente jerarquizados con contraste tipográfico denso: `@apply text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none`.
- **Subtítulos y Badges:** Minúsculas o microcoyunturas gráficas extremadamente legibles: `@apply text-xs font-semibold uppercase tracking-widest text-base-content/50` o `tracking-[0.2em]`.
- **Descripciones:** Claras, amigables, sobrias: `@apply text-sm sm:text-base text-base-content/80`.

## 5. UI Específica y Microinteracciones
- **Dinámica Suave:** Todo elemento interactivo de gran volumen transiciona verticalmente con elevación de sombra: `@apply transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`.
- **Interacciones Ligeras:** Enlaces de menús (`navbar`, `top-menu`) utilizan una micro-elevación casi imperceptible: `@apply transition duration-200 hover:-translate-y-px`.
- **Estados Activos:** Un link activo en un menú asume: `@apply menu-active bg-primary text-primary-content shadow-sm`.
- **Tablas y Estados Vacíos:** Recubiertas por un `rounded-box border border-base-content/10` o `border-base-300/50`. Si no hay datos o están cargando, el `dt__empty-cell` asume `@apply py-10 text-center text-base-content/60`.

Sigue estos lineamientos paso a paso al diseñar cualquier nuevo `layout`, `page` o `component` para garantizar la uniformidad Premium y el "WOW factor" del ecosistema de CountryApp.
