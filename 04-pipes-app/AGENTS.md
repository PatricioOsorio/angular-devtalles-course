
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## Important specific requirements for this project
- Always use the `/caveman` skill for all chat interactions, even if the user does not specify it.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Design System Standards

All UI components must adhere to the cohesive design system defined in [DESIGN.md](DESIGN.md). This ensures consistency across the application and maintains the photography-first Apple design philosophy.

### Design Token System

**Golden Rule**: Never hardcode color, typography, or spacing values. Always use CSS variables from `src/styles/theme/daisyui-theme.css`.

#### Required CSS Variables by Category

| Category | Variables | Usage |
|----------|-----------|-------|
| **Brand** | `--apple-primary`, `--apple-primary-focus`, `--apple-primary-on-dark` | Action/link colors (Action Blue variants) |
| **Surfaces** | `--apple-canvas`, `--apple-canvas-parchment`, `--apple-surface-tile-[1-3]` | Background layers with depth |
| **Text** | `--apple-ink`, `--apple-body`, `--apple-body-muted`, `--apple-ink-muted-80` | Text colors (never use #000 or #fff) |
| **Borders** | `--apple-divider-soft`, `--apple-hairline` | Separators and dividers |
| **Shadows** | `--apple-shadow-product` | Only for product photography, never decorative |
| **Spacing** | 8px base unit system | All margins/padding multiples of 8px |
| **Typography** | SF Pro Display/Text stacks | Font families (system-ui fallback) |

### DaisyUI + Tailwind 4 Integration

- **Tailwind CSS v4.1.12**: CSS-first, no `tailwind.config.ts`
- **DaisyUI v5.5.19**: Uses OKLch color space for superior perceptual uniformity
- **Theme location**: `src/styles/theme/daisyui-theme.css`

The theme automatically switches between light (`app-light`) and dark (`app-dark`) themes based on `prefers-color-scheme`.

### Component Specifications

Reference [DESIGN.md](DESIGN.md) for detailed specs of:
- Buttons (primary, secondary, tertiary variants)
- Navigation patterns (navbar, sidebar, breadcrumbs)
- Cards and surface tiles
- Forms and inputs
- Typography hierarchy (56px → 10px scale)
- Responsive breakpoints (1440, 1068, 834, 640, 419)

### Key Design Principles

1. **Photography-First**: Content dominates; minimal decoration
2. **Single Accent Color**: Action Blue (`--apple-primary`) for all interactive elements
3. **Surface Tiles**: Rhythm created through `--apple-surface-tile-*` alternation
4. **Type Hierarchy**: 16-point scale with intentional weight ladder (no 500)

See [DESIGN.md](DESIGN.md) for complete context and examples.

### Single Source of Truth

- **Theme tokens** defined in: `src/styles/theme/daisyui-theme.css`
- **Documentation** maintained in: `DESIGN.md`
- When updating design, modify CSS file first, then verify docs reflect changes

