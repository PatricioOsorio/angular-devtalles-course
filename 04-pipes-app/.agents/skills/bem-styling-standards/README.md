# BEM Styling Standards - Documentation Index

Este skill proporciona un estándar **compacto y práctico** para Angular + BEM + Tailwind + DaisyUI.

## 📚 Estructura

```
bem-styling-standards/
├── SKILL.md                      # Core rules (80 líneas, Golden Rules + Setup)
└── references/
    ├── examples.md               # 3 componentes reales (search, empty, card)
    ├── angular-patterns.md       # Standalone patterns + nested components
    └── testing.md                # Validación manual + scripts + tests
```

## 🚀 Quick Start

1. **Lee SKILL.md primero** - 5 minutos para entender Golden Rules
2. **Explora examples.md** - Componente real: `search-input-component` → `sic__label`
3. **Implementa en tu componente** - Sigue Angular Patterns
4. **Valida con testing.md** - Checklist o script

## 📖 Archivos Detalle

### `SKILL.md` (Core)
- **Golden Rules** - 5 no-negociables (HTML limpio, @apply always, BEM, etc)
- **Convention** - naming: `nombre-completo` + iniciales
- **Setup** - @reference + @layer
- **Estructura Mínima** - ejemplo HTML + CSS
- **Do's & Don'ts** - tabla rápida
- **Checklist** - 5 items clave

**Cuándo usarlo**: Referencia rápida, onboarding nuevos devs

---

### `references/examples.md` (Real Code)

**3 Componentes Completos**:

1. **Search Input Component** (`sic`)
   - TypeScript completo con signals
   - HTML clean (BEM only)
   - CSS con @apply + responsive
   - ~80 líneas total

2. **Empty State** (`es`)
   - HTML mínimo
   - Modifiers (featured)
   - ~30 líneas

3. **Card Panel** (`cp`)
   - Header + Footer
   - Múltiples buttons
   - ~40 líneas

**Copy-paste ready** - reemplaza selectors según tu componente

---

### `references/angular-patterns.md` (Implementation)

**Full Standalone Component**:
- TypeScript con signals/effects
- HTML con @if, @switch (Angular 17+)
- CSS responsivo (mobile-first)
- Patrones: modifiers, states, nested components

**Secciones**:
1. Full template (TS + HTML + CSS unidos)
2. Structure folder
3. Common patterns (loading, error, conditions)
4. Feature pages con sub-componentes

---

### `references/testing.md` (Validation)

**Manual Checklist**:
- ✅ Naming audit
- ✅ HTML audit
- ✅ CSS audit
- ✅ Build check

**Scripts**:
- `validate-bem.js` - Node script para validar automático
- Jest tests - Component coverage

**Before/After**: Refactor real

---

## 🎯 Flujo de Uso

### Crear Componente Nuevo
```
1. Decide nombre: search-input-component
2. Calcula iniciales: sic
3. Copia estructura de examples.md
4. Adapta HTML/CSS a tu caso
5. Valida con checklist de testing.md
```

### Refactorizar Componente Viejo
```
1. Identifica bloque semántico
2. Extrae todas las utility classes de HTML
3. Crea clases BEM en CSS con @apply
4. Reemplaza @apply Tailwind (no inline)
5. Valida: npm run build + checklist
```

---

## 💡 Key Principles

| Principio | Beneficio |
|-----------|-----------|
| **HTML = BEM solo** | Plantilla limpia, fácil de leer |
| **CSS = @apply** | Reutilizable, debuggeable, performante |
| **Responsive en CSS** | No saturar template |
| **Sin &__ en CSS nativo** | Evita bugs + warnings en Angular |
| **Un bloque per componente** | Encapsulación clara |

---

## 🔗 References

- [BEM Official](http://getbem.com/)
- [Tailwind @apply](https://tailwindcss.com/docs/adding-custom-styles#using-apply-with-existing-classes)
- [DaisyUI Components](https://daisyui.com/)
- [Angular Standalone](https://angular.io/guide/standalone-components)

---

## 📝 Version

- **v2.0** - Refactored & simplified
- **Golden Rules** focus: 5 reglas core
- **Multi-file**: SKILL core + 3 references
- **Real examples**: search-input-component included
- **Testing**: Manual + automated validation

---

## ❓ FAQ

**P: ¿Puedo usar BEM sin Tailwind?**
A: Sí. Las reglas son aplicables a cualquier CSS. @apply es recomendado pero opcional.

**P: ¿Y si el componente tiene una sola palabra (profile)?**
A: Renombra a `profile-container` → iniciales `pc`.

**P: ¿Qué pasa con componentes muy complejos?**
A: Mantén un bloque por "sección visual principal". Sub-elementos con prefijo.

**P: ¿Build budget excedido?**
A: Ajusta budget en `angular.json` o split CSS en múltiples archivos.

**P: ¿Cómo valido compliance?**
A: Manual: checklist en testing.md. Automático: `validate-bem.js` o ESLint.
