# BEM Examples - Real Components

## Example 1: Search Input Component

**Naming**: `search-input-component` → initials `sic`

### TypeScript
```typescript
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-input-component',
  imports: [],
  templateUrl: './search-input-component.html',
  styleUrl: './search-input-component.css',
})
export class SearchInputComponent {
  placeholder = input('Buscar...');
  value = input('');
  
  submitted = output<string>();
  valueChanged = output<string>();
  
  onSubmit(val: string) {
    this.submitted.emit(val.trim());
  }
  
  onInput(val: string) {
    this.valueChanged.emit(val);
  }
}
```

### HTML (Clean, BEM only)
```html
<div class="search-input-component">
  <div class="sic__wrapper">
    <label class="sic__label" for="search-input">
      Buscar
    </label>
    
    <div class="sic__input-group">
      <input
        id="search-input"
        (input)="onInput($event.target.value)"
        (keyup.enter)="onSubmit($event.target.value)"
        [value]="value()"
        class="sic__input"
        type="search"
        [attr.placeholder]="placeholder()"
        aria-label="Búsqueda"
      />
      <button 
        (click)="onSubmit($event.target.value)"
        class="sic__button"
        type="button"
        aria-label="Enviar búsqueda"
      >
        Buscar
      </button>
    </div>
    
    <p class="sic__hint">
      Escribe para buscar al instante
    </p>
  </div>
</div>
```

### CSS (@apply-driven, responsive)
```css
@reference '#styles/app.css';

:host {
  @apply block;
}

@layer components {
  /* Block: search-input-component (sic) */
  .search-input-component {
    @apply w-full;
  }

  .sic__wrapper {
    @apply flex flex-col gap-3 md:gap-4;
  }

  /* Label */
  .sic__label {
    @apply text-sm font-semibold text-base-content uppercase tracking-wide md:text-base;
  }

  /* Input Group (flex row) */
  .sic__input-group {
    @apply join w-full;
  }

  /* Input Field */
  .sic__input {
    @apply input input-bordered join-item w-full focus:outline-none focus:ring-2 focus:ring-primary/50;
  }

  /* Button */
  .sic__button {
    @apply btn btn-primary join-item md:btn-wide;
  }

  /* Hover effect */
  .sic__button:hover {
    @apply btn-primary-focus;
  }

  /* Hint text */
  .sic__hint {
    @apply text-xs text-base-content/60 italic md:text-sm;
  }

  /* Modifiers */
  .sic__input--error {
    @apply input-error;
  }

  .sic__button--loading {
    @apply btn-disabled loading;
  }
}
```

---

## Example 2: Empty State Component

**Naming**: `empty-state` → initials `es`

### HTML
```html
<div class="empty-state">
  <div class="es__icon">📭</div>
  <h2 class="es__title">{{ title() }}</h2>
  <p class="es__description">{{ description() }}</p>
  
  <a class="es__link" [routerLink]="actionLink()">
    {{ actionLabel() }}
  </a>
</div>
```

### CSS
```css
.empty-state {
  @apply flex flex-col items-center justify-center rounded-box border border-base-300 bg-base-100/50 p-8 text-center md:p-10;
}

.es__icon {
  @apply mb-4 text-5xl md:text-6xl;
}

.es__title {
  @apply mb-2 text-2xl font-bold text-base-content md:text-3xl;
}

.es__description {
  @apply mb-6 max-w-sm text-base-content/70 md:text-lg;
}

.es__link {
  @apply btn btn-outline btn-primary md:btn-wide;
}

/* Modifier: featured */
.empty-state--featured {
  @apply border-primary bg-primary/5;
}

.empty-state--featured .es__title {
  @apply text-primary;
}
```

---

## Example 3: Card Component

**Naming**: `card-panel` → initials `cp`

### HTML
```html
<article class="card-panel">
  <header class="cp__header">
    <h3 class="cp__title">{{ title() }}</h3>
    <span class="cp__badge">{{ badge() }}</span>
  </header>
  
  <div class="cp__content">
    <ng-content></ng-content>
  </div>
  
  <footer class="cp__footer">
    <button class="cp__button cp__button--primary">Aceptar</button>
    <button class="cp__button cp__button--ghost">Cancelar</button>
  </footer>
</article>
```

### CSS
```css
.card-panel {
  @apply rounded-xl border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md;
}

.cp__header {
  @apply flex items-center justify-between border-b border-base-300 bg-base-200/30 px-4 py-4 md:px-6;
}

.cp__title {
  @apply text-base font-bold text-base-content md:text-lg;
}

.cp__badge {
  @apply badge badge-primary;
}

.cp__content {
  @apply p-4 md:p-6;
}

.cp__footer {
  @apply flex justify-end gap-2 border-t border-base-300 p-4 md:gap-3;
}

.cp__button {
  @apply btn btn-sm md:btn-md;
}

.cp__button--primary {
  @apply btn-primary;
}

.cp__button--ghost {
  @apply btn-ghost;
}
```
