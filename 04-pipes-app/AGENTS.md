You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## Important specific requirements for this project

- Always use the `/caveman` skill for all chat interactions, even if the user does not specify it.
- Always consult `DESIGN.md` as the visual and UI source of truth for design decisions, component styling, and consistency.
- Before executing any action (code edits, commands, refactors, deletions, installs, or file operations), ask clarifying questions first.
- Never assume user intent, requirements, scope, or preferences when information is ambiguous or missing.
- Execute only what the user explicitly confirms, and stop for confirmation again if scope changes.

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

### Design Token System

**Golden Rule**: Never hardcode color, typography, or spacing values. Always use CSS variables from `src/styles/theme/daisyui-theme.css`.

### DaisyUI + Tailwind 4 Integration

- **Tailwind CSS v4.1.12**: CSS-first, no `tailwind.config.ts`
- **DaisyUI v5.5.19**: Uses OKLch color space for superior perceptual uniformity
- **Theme location**: `src/styles/theme/daisyui-theme.css`

The theme automatically switches between light (`app-light`) and dark (`app-dark`) themes based on `prefers-color-scheme`.
