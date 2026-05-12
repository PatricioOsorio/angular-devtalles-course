# Angular Patterns for BEM

## Standalone Component Pattern

**Structure**:
```
src/app/components/search-input-component/
├── search-input-component.ts
├── search-input-component.html
└── search-input-component.css
```

### Full Component Template

```typescript
import { Component, input, output, signal, effect, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-input-component',
  standalone: true,
  imports: [], // Sin imports necesarios, es puro HTML + BEM
  templateUrl: './search-input-component.html',
  styleUrl: './search-input-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  // Inputs
  placeholder = input('Buscar...');
  initialValue = input('');
  disabled = input(false);
  debounceMs = input(300);

  // Outputs
  submitted = output<string>();
  valueChanged = output<string>();

  // Signals
  value = signal(this.initialValue());
  isLoading = signal(false);

  // Lifecycle
  syncInitialValue = effect(() => {
    this.value.set(this.initialValue());
  });

  private debounceTimer?: ReturnType<typeof setTimeout>;

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
    
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.valueChanged.emit(target.value);
    }, this.debounceMs());
  }

  onSubmit(value: string) {
    const trimmed = value.trim();
    if (trimmed) {
      this.submitted.emit(trimmed);
    }
  }
}
```

### HTML Structure (BEM-only)

```html
<div class="search-input-component">
  <!-- Wrapper para agrupar elementos relacionados -->
  <div class="sic__wrapper">
    
    <!-- Label (accesibilidad) -->
    <label class="sic__label" for="sic-input">
      {{ placeholder() }}
    </label>

    <!-- Input + Button group (join = row layout) -->
    <div class="sic__input-group">
      <input
        id="sic-input"
        (input)="onInput($event)"
        (keyup.enter)="onSubmit(($event.target as HTMLInputElement).value)"
        [value]="value()"
        [disabled]="disabled()"
        class="sic__input"
        type="search"
        [attr.aria-label]="placeholder()"
      />
      
      <button
        (click)="onSubmit(value())"
        [disabled]="disabled() || isLoading()"
        class="sic__button"
        [class.sic__button--loading]="isLoading()"
        type="button"
        aria-label="Enviar búsqueda"
      >
        @if (isLoading()) {
          Cargando...
        } @else {
          Buscar
        }
      </button>
    </div>

    <!-- Helper text -->
    @if (value() && !isLoading()) {
      <p class="sic__hint">
        Presiona Enter o haz clic en Buscar
      </p>
    }
  </div>
</div>
```

### CSS Complete (@apply + Responsive)

```css
@reference '#styles/app.css';

:host {
  @apply block;
}

@layer components {
  /* ====== BLOCK: search-input-component ====== */
  
  .search-input-component {
    @apply w-full;
  }

  /* Wrapper */
  .sic__wrapper {
    @apply flex flex-col gap-2 sm:gap-3;
  }

  /* Label */
  .sic__label {
    @apply text-xs font-bold uppercase tracking-wider text-base-content/70 sm:text-sm;
  }

  /* Input Group (join = adjacent buttons row) */
  .sic__input-group {
    @apply join w-full lg:max-w-lg;
  }

  /* Input */
  .sic__input {
    @apply input input-bordered join-item w-full;
    @apply focus:outline-none focus:ring-2 focus:ring-primary/50;
    @apply disabled:opacity-50;
  }

  /* Button */
  .sic__button {
    @apply btn btn-primary join-item;
    @apply transition-all duration-200;
  }

  .sic__button:hover:not(:disabled) {
    @apply btn-primary-focus;
  }

  /* Modifier: Loading State */
  .sic__button--loading {
    @apply btn-disabled;
  }

  /* Helper hint */
  .sic__hint {
    @apply mt-1 text-xs text-base-content/60 italic sm:text-sm;
  }
}
```

---

## Common Patterns

### 1. Modifier States

```html
<button class="sic__button sic__button--primary">Aceptar</button>
<button class="sic__button sic__button--ghost">Cancelar</button>
<button class="sic__button sic__button--disabled">Deshabilitado</button>
```

```css
.sic__button--primary {
  @apply btn-primary;
}

.sic__button--ghost {
  @apply btn-ghost;
}

.sic__button--disabled {
  @apply btn-disabled;
}
```

### 2. Conditional Elements

```html
@if (error()) {
  <p class="sic__error">{{ error() }}</p>
}

@if (isLoading()) {
  <div class="sic__spinner"></div>
}
```

```css
.sic__error {
  @apply text-error text-sm font-semibold;
}

.sic__spinner {
  @apply h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent;
}
```

### 3. Nested Components (Single Block)

```html
<!-- Aqui seguimos usando clases del bloque padre -->
<div class="search-input-component">
  <app-icon class="sic__icon"></app-icon>
  <input class="sic__input" />
</div>
```

**NO hagas**:
```html
<!-- ❌ Múltiples bloques en un componente -->
<div class="search-input-component">
  <app-icon class="icon-wrapper"> <!-- Evita otro bloque -->
```

### 4. Feature Components with Layout

```typescript
@Component({
  selector: 'app-search-page',
  imports: [SearchInputComponent], // componente reutilizable
  template: `
    <article class="search-page">
      <section class="sp__hero">
        <h1 class="sp__title">Búsqueda avanzada</h1>
      </section>
      
      <section class="sp__search">
        <app-search-input-component
          (submitted)="onSearch($event)"
        ></app-search-input-component>
      </section>
      
      <section class="sp__results">
        <!-- resultados -->
      </section>
    </article>
  `,
  styleUrl: './search-page.css',
})
export class SearchPage {}
```

**CSS**: Cada bloque en su propio namespace
```css
.search-page { /* sp */ }
.sp__hero { }
.sp__title { }
.sp__search { }
.sp__results { }

/* Los componentes hijos mantienen sus bloques */
/* .search-input-component { /* sic */ } */
```
