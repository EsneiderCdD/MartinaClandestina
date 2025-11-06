# Martina Clandestina

Aplicación web hecha con React + Vite para consultar el menú diario y generar pedidos por WhatsApp, con transiciones animadas entre páginas.

## Requisitos
- Node.js 18 o superior
- npm

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```
- Abre el navegador en `http://localhost:5173` (o el puerto que indique Vite).

## Build y vista previa
```bash
npm run build
npm run preview
```
- El build se genera en `dist/`.

## Scripts disponibles
- `dev`: inicia el servidor de desarrollo.
- `build`: compila la app para producción.
- `preview`: sirve el build localmente.
- `lint`: ejecuta ESLint.

## Estructura rápida
- `src/pages`: `HomePage`, `MenuPage`, `MoreInfoPage`, `AboutPage`.
- `src/components`: `DayMenu`, `DishSelector`, `OrderSummary`, `OrderQuantitySelector`.
- `src/router`: `AnimatedLink` para navegación con transición.
- `src/transition`: `TransitionContext`, `TransitionOverlay`.
- `src/data/menus.js`: definición de menús por día.
- `src/utils/generateOrderMessage.js`: genera el mensaje de WhatsApp.

## Personalización
- Menús: edita `src/data/menus.js`.
- Número de WhatsApp: modifica el valor en `src/utils/generateOrderMessage.js` (propiedad `wa.me/<numero>`).

## Tecnologías
- React 19, React Router 7, Vite 6, Framer Motion, ESLint.