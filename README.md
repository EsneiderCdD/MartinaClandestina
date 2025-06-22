
## Arquitectura General

La solución se basa en cuatro piezas fundamentales:

1. **Contexto de Transición (`TransitionContext`)**  
   Un proveedor React (`TransitionProvider`) que expone el estado `targetPath` y su setter. Este contexto centraliza la ruta de destino y dispara la animación de entrada y salida del telón.

2. **Overlay de Animación (`TransitionOverlay`)**  
   Un componente que utiliza Framer Motion y AnimatePresence para montar un `<motion.div>` que baja desde `y: -100%` hasta `y: 0%` (600 ms), y luego sube nuevamente (600 ms). En su interior se muestra un logo centrado, revelado progresivamente al bajar el telón.

3. **Layout Animado (`AnimatedLayout`)**  
   Envuelve las rutas de React Router. Detecta cambios en `targetPath`, monta el overlay, espera 600 ms para navegar a la nueva ruta, y tras otros 600 ms oculta el overlay y resetea `targetPath`. Así asegura que el contenido nuevo ya está cargado bajo el telón antes de subirlo.

4. **Enlaces Animados (`AnimatedLink`)**  
   Un reemplazo minimalista de `<Link>` que, al hacer clic, previene el comportamiento por defecto y establece `targetPath` en el contexto sin llamar directamente a `navigate()`. De esta forma, la navegación queda sincronizada con la animación.

## Requisitos y Dependencias

- **React** y **react-router-dom** para la navegación entre páginas.
- **Framer Motion** para la animación del telón.
- Estructura de carpetas clara:
  - `src/transition/` para contexto y overlay.
  - `src/layouts/` para el layout animado.
  - `src/router/` para el enlace animado.
  - `src/assets/images/Logo.png` para el logo centrado.
- CSS modular (`*.module.css`) para estilos encapsulados.

## Flujo de la Animación

1. El usuario hace clic en un `<AnimatedLink>`; este escribe la ruta deseada en el contexto.
2. `AnimatedLayout` detecta la nueva ruta, monta `TransitionOverlay` y lo anima hacia abajo (600 ms).
3. Al completarse la bajada, React Router cambia la ruta y carga el nuevo contenido.
4. Después de otros 600 ms, `TransitionOverlay` se desmonta, subiendo el telón y dejando ver la página nueva.

## Claves para Replicarlo

- Usa un **contexto** para desacoplar enlace y navegación.
- Controla la **montura** del overlay con un estado booleano (`showOverlay`).
- Emplea **AnimatePresence** para que Framer Motion anime entradas y salidas.
- Divide responsabilidades: contexto, overlay, layout y enlaces.
- Ajusta duraciones (600 ms), sincronizaciones y easing en `transition` de Framer Motion.

Con esta guía en párrafos tendrás un manual claro para entender y replicar la animación de “telón” en cualquier proyecto React.
 