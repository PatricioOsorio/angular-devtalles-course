# DESIGN.md - Pipes App

## 1. Objetivo de Diseño
Este documento define los estandares visuales y de implementacion para toda la app de pipes.

El objetivo es una interfaz tipo Apple-like: minimalista, limpia, con alto cuidado visual, pero sin perder jerarquia, personalidad y consistencia.

## 2. Stack y Fuente de Verdad
- Stack UI obligatorio: DaisyUI v5 + Tailwind CSS v4 (CSS-first).
- Tema central: variables definidas en src/styles/theme/daisyui-theme.css.
- Modo visual por defecto: claro.
- Modo oscuro: automatico via prefers-color-scheme.
- Regla principal: no hardcodear colores, tipografia o espaciados fuera del sistema de tokens.

## 3. Reglas No Negociables (MUST)
- MUST usar BEM como convencion central en templates.
- MUST mantener HTML limpio: solo clases BEM en template (sin utilities Tailwind inline).
- MUST aplicar estilos en CSS con @apply (Tailwind y DaisyUI desde CSS, no desde HTML).
- MUST usar bloque con nombre completo y elementos con iniciales.
- MUST definir responsive desde CSS con prefijos sm/md/lg/xl via @apply.
- MUST evitar nesting BEM de tipo &__ y &-- en CSS nativo; usar selectores explicitos.
- MUST usar colores semanticos del tema (primary, secondary, accent, base, neutral, info, success, warning, error).
- MUST respetar contraste WCAG AA en ambos modos (light/dark).

## 4. Direccion Visual
- Estetica general: sobria, premium, espaciosa, limpia.
- Densidad: media-baja (respira, evita saturacion).
- Bordes: redondez suave y consistente, sin extremos.
- Profundidad: baja a media, con sombras discretas y limpias.
- Ruido visual: minimo.
- Consistencia: misma logica de jerarquia, radio, contraste y espaciado en todas las pantallas.

## 5. Sistema de Color
### 5.1 Tokens permitidos
- Base: --color-base-100, --color-base-200, --color-base-300, --color-base-content.
- Semanticos: --color-primary, --color-secondary, --color-accent, --color-neutral.
- Estado: --color-info, --color-success, --color-warning, --color-error.
- Apple tokens de apoyo: --apple-primary, --apple-canvas, --apple-surface-pearl, --apple-ink, --apple-divider-soft, --apple-hairline y equivalentes dark.

### 5.2 Reglas de uso
- SHOULD usar roles semanticos antes que tonos absolutos.
- MUST evitar colores crudos de paleta Tailwind fija si no dependen de tokens del tema.
- SHOULD reservar primary para foco de accion (CTA, links de alto peso, estados activos).
- SHOULD usar accent y secondary para diferenciacion de contexto, no para competir con primary.
- MUST asegurar legibilidad alta entre fondo y contenido en tarjetas, formularios y tablas.

## 6. Gradientes
- MUST usar gradientes solo con colores del sistema (tokens DaisyUI/tema).
- SHOULD aplicar gradientes en hero, headers de seccion, highlights o superficies clave.
- SHOULD evitar gradientes en exceso dentro de zonas densas de datos.
- MUST mantener contraste de texto sobre gradiente en WCAG AA.
- SHOULD usar transiciones de color suaves, sin bandas ni cortes agresivos.

## 7. Tipografia
- Fuente base objetivo: sistema Apple-like (SF Pro con fallbacks de sistema equivalentes).
- Jerarquia: encabezados fuertes, cuerpo neutral, labels legibles y compactos.
- SHOULD mantener pesos y tamaños segun escala del proyecto (h1-h5 y body).
- SHOULD aplicar tracking usando variables del tema cuando sea necesario (--apple-tracking-tight, --apple-tracking-tighter, --apple-tracking-normal).
- MUST priorizar legibilidad sobre expresividad decorativa.

## 8. Espaciado, Radio y Bordes
- MUST usar espaciado con escala del sistema (Tailwind spacing scale via @apply).
- MUST usar radios definidos por tokens del tema (--radius-selector, --radius-field, --radius-box).
- SHOULD mantener ritmo vertical consistente entre bloques de contenido.
- MUST usar divisores y bordes suaves del sistema para separar contenido sin ruido.

## 9. Movimiento e Interaccion
Nivel de animacion: moderado.

- SHOULD usar animaciones cortas y suaves para entrada, hover y cambios de estado.
- SHOULD usar stagger leve en listas o cards cuando mejore jerarquia visual.
- MUST evitar animaciones largas, elasteicas o distractoras.
- MUST respetar preferencias de movimiento reducido del usuario.
- SHOULD reforzar feedback con cambios de elevacion, opacidad o color semantico.

## 10. Estandares por Componente
### 10.1 Navbar/Header
- Superficie limpia con alto contraste y separacion clara del contenido.
- Navegacion con estados activos/inactivos semanticos.
- Acciones primarias visibles sin saturar.

### 10.2 Cards de Pipes
- Contenedor claro y legible con jerarquia: titulo, transformacion, resultado.
- Espaciado interno uniforme y densidad baja-media.
- Elevacion sutil para separar tarjetas del fondo.

### 10.3 Forms e Inputs
- Estados obligatorios: default, focus, error, disabled, valid.
- El foco debe ser claramente visible y consistente.
- Mensajes de ayuda/error con color semantico y redaccion corta.

### 10.4 Tablas y Listas
- Lectura prioritaria: alineacion, contraste y escaneo rapido.
- Filas con separacion suave y hover discreto.
- Encabezados claros con jerarquia visual estable.

### 10.5 Botones, Chips y Badges
- Botones: semantica clara (primary, secondary, ghost, danger segun contexto).
- Chips/badges: uso informativo, no decorativo excesivo.
- Estados hover/focus/disabled consistentes en toda la app.

### 10.6 Empty y Error States
- Mensaje breve y accion siguiente clara.
- Uso de color semantico segun contexto (neutral, warning, error, info).
- Composicion simple: titulo, descripcion, CTA.

### 10.7 Modales y Drawers
- MUST usar para tareas focales, no para flujo principal continuo.
- Jerarquia clara: titulo, cuerpo, acciones.
- Fondo y overlay con contraste suficiente y foco controlado.

## 11. Accesibilidad (MUST)
- Cumplir WCAG AA en contraste, foco visible y navegacion por teclado.
- Estados interactivos distinguibles sin depender solo del color.
- Texto, labels y mensajes de error deben ser claros y directos.
- Componentes de capa (modal/drawer/menu) deben manejar foco correctamente.

## 12. Consistencia de Implementacion
- Un componente, un bloque BEM principal.
- Convencion de nombres estable y predecible en toda la app.
- Reutilizar patrones de layout y composicion antes de crear variaciones nuevas.
- Cualquier excepcion visual debe justificarse por funcion de producto.

## 13. Checklist de PR (Obligatorio)
- Se respetan reglas BEM y HTML limpio.
- No hay utilities Tailwind en templates.
- Estilos aplicados via @apply en CSS.
- Colores, radios, tipografia y espaciado salen de tokens del sistema.
- Componente responsive definido en CSS (no en HTML).
- Contraste y foco cumplen WCAG AA en light y dark.
- Estados de interaccion completos (hover, focus, disabled, error/valid).
- UI consistente con estetica minimalista premium del proyecto.

## 14. Regla de Gobernanza
Si una decision visual contradice este documento, prevalece este DESIGN.md.

Si una necesidad nueva no esta cubierta, se agrega aqui antes de propagar el patron a nuevas pantallas.
