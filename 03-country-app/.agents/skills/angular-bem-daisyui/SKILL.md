---
name: angular-bem-daisyui
description: Estándar para escribir componentes en Angular utilizando el patrón BEM para los nombres de clases y TailwindCSS encapsulado con el plugin de DaisyUI en cada componente.
---

# Estándar de Componentes: Angular + BEM + DaisyUI

Este skill debe ser utilizado siempre que se te pida analizar, crear o refactorizar un componente en este proyecto. El objetivo de este estándar es mantener el HTML limpio, modular y estructurarlo mediante clases semánticas BEM que consumen los estilos de utilidad de Tailwind en el CSS.

## 1. Regla Principal: Cero Clases Inline de Tailwind en HTML
**Está prohibido** utilizar clases de utilidades de TailwindCSS directamente en los archivos `.html` (por ejemplo: `class="flex items-center text-red-500"`). Toda utilidad debe estar mapeada a una clase semántica BEM dentro del archivo CSS del componente utilizando `@apply`.

## 2. Estructura del Archivo CSS del Componente
Cada componente debe tener su propio archivo `.css`. Todos los archivos CSS de un componente **DEBEN** estar compuestos por una cabecera importando la configuración y un bloque `@layer components`.

La estructura exacta requerida es:
```css
@reference 'tailwindcss';
@plugin 'daisyui';

@layer components {
  /* Bloque (Block) Principal */
  .mi-componente {
    @apply flex flex-col p-4 bg-base-100 rounded-box border border-base-300 shadow-sm;
  }

  /* Elemento (Element) hijo usando la ABREVIATURA del bloque base (mc = mi-componente) */
  .mc__title {
    @apply text-xl font-bold text-primary mb-2;
  }
}
```

## 3. Estructura del Archivo HTML
El archivo `.html` utilizará únicamente las clases BEM declaradas en el CSS logrando una estructura limpia. Recuerda usar siempre la **abreviatura** del contenedor padre para todas las clases de los elementos internos.

**Correcto:**
```html
<article class="mi-componente">
  <h2 class="mc__title">¡Hola Mundo!</h2>
</article>
```

## 4. Archivo TypeScript del Componente
El componente de Angular siempre debe apuntar a su correspondiente archivo de estilo a través de `styleUrl`.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  imports: [],
  templateUrl: './mi-componente.html',
  styleUrl: './mi-componente.css', // 👈 Obligatorio
})
export class MiComponente {}
```

## 5. Presupuesto de Estilos (Angular Budget)
Al importar DaisyUI como plugin en cada archivo componente, el framework inyecta componentes de DaisyUI incrementando el tamaño base del CSS por componente. Por eso, asume que el `anyComponentStyle` budget de Angular fue ajustado y está bien que los componentes tengan tamaños de diseño mayores en el build.
