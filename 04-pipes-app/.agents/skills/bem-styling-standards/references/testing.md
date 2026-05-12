# BEM CSS Testing & Validation

## Manual Checklist per Component

Run this after every component refactor:

### Naming & Structure
- [ ] Block name follows pattern: `palabra-palabra-palabra`
- [ ] Initials calculated correctly (1st letter of each word)
- [ ] All elements use prefix: `.xx__element`
- [ ] No underscores in block name except for BEM syntax
- [ ] No `&__` or `&--` nesting in CSS

### HTML Audit
- [ ] No Tailwind utility classes in template
- [ ] Only BEM class names in `class` attributes
- [ ] All inputs/buttons have `class` from CSS
- [ ] `aria-label` where needed (accessibility)

### CSS Audit
- [ ] File starts with `@reference '#styles/app.css'`
- [ ] All styles in `@layer components { }`
- [ ] Every selector explicitly named (no `&` nesting)
- [ ] All Tailwind via `@apply`
- [ ] All DaisyUI via `@apply`
- [ ] Responsive in CSS, not HTML

### Build & Performance
- [ ] Build completes without CSS errors
- [ ] Component CSS under 12kB (budget)
- [ ] No console warnings about unknown classes

---

## Quick Validation Script

Save as `validate-bem.js` and run with Node:

```javascript
const fs = require('fs');
const path = require('path');

function validateBEM(componentPath) {
  const htmlFile = path.join(componentPath, `${path.basename(componentPath)}.html`);
  const cssFile = path.join(componentPath, `${path.basename(componentPath)}.css`);
  
  if (!fs.existsSync(htmlFile) || !fs.existsSync(cssFile)) {
    console.error('❌ Files not found');
    return false;
  }

  const html = fs.readFileSync(htmlFile, 'utf8');
  const css = fs.readFileSync(cssFile, 'utf8');

  let errors = [];

  // ✅ Check 1: No utility classes in HTML
  const utilityPattern = /class="[^"]*(?:flex|grid|p-\d+|m-\d+|text-|bg-|border)[^"]*"/g;
  if (utilityPattern.test(html)) {
    errors.push('❌ Utility classes found in HTML');
  }

  // ✅ Check 2: CSS has @reference
  if (!css.includes('@reference')) {
    errors.push('❌ Missing @reference directive');
  }

  // ✅ Check 3: No & syntax
  if (css.includes('&__') || css.includes('&--')) {
    errors.push('❌ Found & nesting syntax (use explicit selectors)');
  }

  // ✅ Check 4: @layer components exists
  if (!css.includes('@layer components')) {
    errors.push('❌ Missing @layer components');
  }

  if (errors.length === 0) {
    console.log('✅ All checks passed!');
    return true;
  } else {
    errors.forEach(e => console.log(e));
    return false;
  }
}

// Usage
const componentPath = process.argv[2] || './src/app/components/search-input-component';
validateBEM(componentPath);
```

**Run**:
```bash
node validate-bem.js ./src/app/components/my-component
```

---

## ESLint Rule (Optional)

Add to `.eslintrc.json` to catch utility classes in templates:

```json
{
  "rules": {
    "no-restricted-syntax": [
      "error",
      {
        "selector": "JSXAttribute[name.name='class'][value.value=/flex|grid|p-|m-|text-|bg-|border/]",
        "message": "❌ Utility classes in template. Use BEM in CSS instead."
      }
    ]
  }
}
```

---

## Testing CSS Coverage

Example test with Jest + Testing Library:

```typescript
import { render } from '@testing-library/angular';
import { SearchInputComponent } from './search-input-component';

describe('SearchInputComponent - BEM Compliance', () => {
  it('should render with correct BEM classes', async () => {
    const { container } = await render(SearchInputComponent);
    
    // Block exists
    expect(container.querySelector('.search-input-component')).toBeTruthy();
    
    // Elements use prefix
    expect(container.querySelector('.sic__input')).toBeTruthy();
    expect(container.querySelector('.sic__button')).toBeTruthy();
    expect(container.querySelector('.sic__label')).toBeTruthy();
  });

  it('should have modifier classes applied', async () => {
    const { container } = await render(SearchInputComponent, {
      componentProperties: { isLoading: signal(true) },
    });
    
    const button = container.querySelector('.sic__button');
    expect(button?.classList.contains('sic__button--loading')).toBe(true);
  });

  it('should NOT have utility classes', async () => {
    const { container } = await render(SearchInputComponent);
    
    const utilityRegex = /flex|grid|p-\d+|m-\d+|text-|bg-|border/;
    const allClasses = container.innerHTML.match(/class="[^"]*"/g) || [];
    
    allClasses.forEach(classAttr => {
      expect(utilityRegex.test(classAttr)).toBe(false);
    });
  });

  it('should apply @apply styles correctly', async () => {
    const { container } = await render(SearchInputComponent);
    const input = container.querySelector('.sic__input') as HTMLInputElement;
    
    // Computed styles should reflect @apply declarations
    const styles = window.getComputedStyle(input);
    expect(styles.borderStyle).not.toBe('none'); // from input-bordered
  });
});
```

---

## Common Issues & Fixes

| Issue | Symptom | Fix |
|-------|---------|-----|
| Missing `@reference` | Build fails: "Cannot apply unknown utility" | Add `@reference '#styles/app.css'` at top |
| Using `&__` in CSS | Build warning | Use explicit selector: `.es__button {}` |
| Utility in template | Breaks BEM pattern | Move to CSS class + `@apply` |
| No `@layer components` | Styles don't override DaisyUI | Wrap all styles in `@layer` |
| Selector conflict | CSS not applying | Use more specific BEM selector or adjust order |
| Budget exceeded | Build fails | Split into multiple files or compress CSS |

---

## Before/After: Real Refactor

### ❌ BEFORE (Wrong)
```html
<!-- HTML: Saturated with utilities -->
<div class="flex flex-col gap-4 p-6 rounded-lg border border-gray-200">
  <label class="text-sm font-semibold text-gray-700">Email</label>
  <input class="input input-bordered w-full" />
  <button class="btn btn-primary btn-lg">Enviar</button>
</div>
```

```css
/* CSS: Empty or minimal */
.search-form { }
```

### ✅ AFTER (Correct)
```html
<!-- HTML: Clean BEM only -->
<div class="search-form">
  <label class="sf__label">Email</label>
  <input class="sf__input" />
  <button class="sf__button">Enviar</button>
</div>
```

```css
/* CSS: All @apply here */
@reference '#styles/app.css';

@layer components {
  .search-form {
    @apply flex flex-col gap-4 p-6 rounded-lg border border-gray-200;
  }

  .sf__label {
    @apply text-sm font-semibold text-gray-700;
  }

  .sf__input {
    @apply input input-bordered w-full;
  }

  .sf__button {
    @apply btn btn-primary btn-lg;
  }
}
```
