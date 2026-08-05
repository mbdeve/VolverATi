# Volver a Ti — Evento de Bienestar y Crecimiento

Landing page premium para el evento **Volver a Ti**, construida con Next.js 15
(App Router), React 19, TypeScript, TailwindCSS y Framer Motion.

## 🎨 Sistema de diseño

- **Colores:** rosa (`blush`) y morado (`mauve`) sobre fondo crema, con
  degradados suaves y glassmorphism ligero.
- **Tipografía:** `Fraunces` (display, serif elegante) + `Manrope` (texto).
- **Elemento firma:** anillos de "respiración" animados alrededor de la
  imagen del hero, que laten como una inhalación/exhalación (6s), conectando
  el diseño con el tema de meditación del evento.
- **Modo oscuro** vía `next-themes` (clase `.dark`).

## 🧱 Stack técnico

- Next.js 15 · React 19 · TypeScript
- TailwindCSS (sin CSS tradicional, sin Bootstrap)
- Framer Motion (parallax, reveals, carrusel, micro-interacciones)
- React Hook Form + Zod (validación del formulario de compra)
- Componentes estilo shadcn/ui construidos sobre Radix UI
  (`Accordion`, `Select`, `Label`) — no requieren la CLI de shadcn
- Lucide Icons
- `qrcode` para generar el código QR del boleto tras el pago

## 🚀 Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build
npm run start
```

## 📁 Estructura

```
app/
  layout.tsx          # Layout raíz, fuentes, metadata SEO, ThemeProvider
  page.tsx             # Ensambla todas las secciones
  globals.css          # Tokens y utilidades (glass, gradientes)
  robots.ts / sitemap.ts
  politicas/ terminos/ reembolsos/   # Páginas legales
components/
  sections/            # Header, Hero, EventInfo, TicketForm, SuccessScreen,
                        # Benefits, Testimonials, FAQ, Footer
  ui/                   # Button, Input, Textarea, Label, Card, Select, Accordion
  AuroraBackground.tsx  # Fondo con formas orgánicas + partículas
  PaymentMethodPicker.tsx
  PayButton.tsx         # Botón con ripple + loading
  theme-provider.tsx / theme-toggle.tsx
hooks/
  use-countdown.ts      # Contador regresivo reutilizable
lib/
  event-config.ts        # Fecha, precio, cupos, lugar (edita aquí los datos del evento)
  ticket-schema.ts        # Validación Zod del formulario
  provinces.ts
  utils.ts               # cn(), formatRD(), generateOrderId()
```

## ✏️ Personalización rápida

- **Datos del evento** (fecha, hora, lugar, precio, cupos): edita
  `lib/event-config.ts`.
- **Imagen del hero**: reemplaza la URL en `components/sections/Hero.tsx`
  (o usa una imagen local en `public/images` y actualiza el `src`).
- **Pasarela de pago real**: conecta tu proveedor (Stripe, Azul, CardNet,
  etc.) dentro de `onSubmit` en `components/sections/TicketForm.tsx`,
  sustituyendo el `setTimeout` de simulación.
- **Envío real de correo / PDF**: conecta un endpoint de API Route en
  `app/api/` y llama desde `SuccessScreen.tsx` (`handleSendEmail`,
  `handleDownloadPdf`).

## ✅ Accesibilidad y calidad

- Contraste AA en textos sobre fondos claros/oscuros.
- Foco visible (`:focus-visible`) en todos los elementos interactivos.
- `prefers-reduced-motion` respetado globalmente.
- Enlace "Saltar al contenido" para navegación por teclado.
- Formularios con `<label>` asociado, `aria-invalid` y mensajes de error.
- Imágenes con `alt` descriptivo.

## 📱 Responsive

Diseñado mobile-first; probado en breakpoints `sm`, `md`, `lg`, `xl` de
Tailwind.
