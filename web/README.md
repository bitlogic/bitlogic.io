# bitlogic.io — rediseño

Sitio institucional de Bitlogic. Next.js 15 (App Router) + TypeScript + Tailwind v4,
bilingüe español/inglés, con el hero en WebGL y la capa de datos estructurados
pensada para posicionar en motores generativos.

Vive en `web/` porque el sitio actual (Gatsby + Strapi) sigue en la raíz del repo.
Los dos pueden convivir hasta el corte: son proyectos de Vercel distintos.

```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run build      # 35 páginas estáticas
npm run typecheck
```

---

## Cómo está armado

```
src/
  app/
    [locale]/          layout raíz (define <html lang>), home y catch-all
    api/contact/       recepción de leads
    og/                imagen social 1200×630 generada al vuelo
    llms.txt/          índice en Markdown para modelos
    llms-full.txt/     el sitio entero en un archivo de texto
    robots.ts sitemap.ts globals.css
  content/             site.ts (hechos) + es.ts / en.ts (todo el copy)
  lib/                 routes, seo, llms, fonts
  components/          brand, chrome, hero, motion, sections, pages, forms, ui
  middleware.ts        reescribe / → /es sin ensuciar la URL
```

### Ruteo bilingüe

`src/lib/routes.ts` es la **única fuente de verdad**: la tabla `ROUTES` define los
segmentos de cada página en los dos idiomas. De ahí salen el ruteo, el sitemap,
los `hreflang`, el selector de idioma del header y el `llms.txt`. Agregar una
página es agregar una fila; si falta un idioma, TypeScript no compila.

El español se sirve **sin prefijo** (`/servicios`) y el inglés bajo `/en`
(`/en/services`). El árbol real de archivos es `/es/...` y `/en/...`, y
`middleware.ts` reescribe (no redirige) para que la URL pública quede limpia.
`/es/servicios` escrito a mano redirige 308 a `/servicios`, así nunca hay dos
URLs con el mismo contenido.

### Contenido

Todo el copy vive en `src/content/es.ts` y `src/content/en.ts`. El diccionario
español define la forma (`export type Dictionary = typeof es`) y el inglés se
tipa contra ella: **no puede existir una página traducida a medias**.

Los hechos que no dependen del idioma —dirección, partners, cifras, board,
paleta— están en `src/content/site.ts` y se usan tanto en las páginas como en
el JSON-LD y en los `llms.txt`.

> Antes de publicar, leé [`CONTENT-REVIEW.md`](./CONTENT-REVIEW.md): lista cada
> afirmación del sitio con su fuente y marca las que necesitan visto bueno de
> marketing.

---

## GEO — posicionamiento en motores generativos

Era el objetivo principal del rediseño. Lo que está implementado:

| Pieza | Dónde | Qué resuelve |
|---|---|---|
| **Bloque respuesta-primero** | `AnswerBlock` en cada página | Un `<h2>` con la pregunta tal como la escribiría una persona y 2–3 oraciones que se sostienen fuera de contexto. Es el párrafo que los modelos citan casi textual. |
| **Entidad consolidada** | `lib/seo.ts` → `organizationLd` | Mismo `@id` de `Organization` en todas las páginas, con dirección, `sameAs`, `knowsAbout` y credenciales. Sin esto los motores arman varias entidades distintas para la misma empresa. |
| **Schema por tipo de página** | `[...slug]/page.tsx` → `pageLd()` | `Service`, `Article` + `Quotation` para los casos, `FAQPage`, `ContactPage`, `BreadcrumbList`. |
| **`/llms.txt` y `/llms-full.txt`** | `lib/llms.ts` | El sitio entero en Markdown plano, generado desde los mismos diccionarios. Sin JS, sin recorrer 13 páginas. |
| **`robots.txt` permisivo** | `app/robots.ts` | GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot y compañía entran explícitamente. Bloquearlos es desaparecer de las respuestas. |
| **`hreflang` recíproco** | `alternatesFor()` + sitemap | Español e inglés se refuerzan en vez de competir como contenido duplicado. |
| **HTML completo sin JS** | Todo el sitio es SSG | Las animaciones sólo mueven `opacity` y `transform`: el texto ya está en el HTML servido. |
| **FAQ abierta** | `FaqList` | A propósito no es un acordeón. Un acordeón + `FAQPage` es la forma más común de tener el marcado y perder igual la cita. |

Lo que **falta** y conviene hacer después:

- `llms.txt` se sirve sólo en español. Si el inglés pesa comercialmente, sumar `/en/llms.txt`.
- No hay `Review`/`AggregateRating`: requiere reseñas verificables (Clutch tiene 5).
- El blog está vacío. Es la fuente de citas más productiva a mediano plazo.

---

## Animación

`components/motion/MotionProvider.tsx` es la única instancia que administra
scroll suave (Lenis), revelados, contadores, parallax, marquesinas y el color
del header. Las secciones no registran sus propios ScrollTrigger.

Se declara con atributos en el HTML, no con wrappers de React:

| Atributo | Efecto |
|---|---|
| `data-rise` | Aparece con fade + desplazamiento corto |
| `data-reveal-lines` | Cada `.reveal-line > span` sube desde detrás de su máscara |
| `data-count-to="50"` | Cuenta de 0 a 50 |
| `data-parallax="0.2"` | Parallax con scrub |
| `data-marquee="40"` | Marquesina infinita (el contenido va duplicado) |
| `data-theme="dark"` | Además de pintar la sección, invierte el header al pasar por debajo |

### Tres cosas que no son obvias y conviene no romper

1. **El estado inicial lo pone un script bloqueante en el `<head>`**, no React:
   `html[data-animate-ready="true"]` esconde lo animable antes del primer paint.
   Si el motor no arranca en 4 segundos, ese mismo script saca el atributo y
   todo queda visible. Nunca hay contenido escondido para siempre por un chunk
   que no cargó.

2. **Los triggers se arman después de `document.fonts.ready`.** Si se arman
   antes y se llama a `ScrollTrigger.refresh()` para remedir, el refresh
   revierte las animaciones que administra el context — y un tween terminado no
   se vuelve a reproducir.

3. **Los `fromTo` declaran todas las componentes del transform.** GSAP parsea
   `translateY(105%)` del CSS como `y` en píxeles, no como `yPercent`. Un tween
   que sólo anima `yPercent` deja ese `y` pegado y el titular "termina" la
   animación exactamente donde arrancó, invisible, con `progress() === 1`.

### El hero WebGL

`components/hero/RibbonScene.tsx`. El isotipo de bitlogic es una cinta plegada;
acá esa cinta existe en 3D, recorre una curva y el pliegue se cierra con el
scroll. Toda la forma se calcula en el vertex shader a partir de `uv` — no hay
geometría recalculada por frame.

Degrada en tres escalones, y el texto nunca depende de ninguno:

1. **HTML servido**: una versión estática de la cinta en SVG (~2 KB) más el
   titular. Es lo que ve un crawler y lo que se ve mientras carga.
2. **WebGL**: se monta encima sólo si hay contexto, no hay `prefers-reduced-motion`,
   y el dispositivo tiene ≥ 4 GB y ≥ 4 núcleos (`RibbonStage.tsx`).
3. **Congelado**: se detiene con la pestaña oculta o el hero fuera de viewport.

`three` entra por `next/dynamic`, así que no pesa en el First Load JS.

---

## Formulario de contacto

`POST /api/contact` reenvía el lead a `CONTACT_WEBHOOK_URL` (Slack, HubSpot, una
Lambda — lo que marketing elija). Ver `.env.example`.

**Sin esa variable el endpoint responde 501 a propósito** y el formulario muestra
el mail directo. Es deliberado: un formulario que se traga mensajes en silencio
es peor que no tener formulario.

Incluye honeypot, límites de longitud y validación de email del lado del servidor.

---

## Marca

- **Paleta**: la del branding EdTech 2025 (`#121212`, `#F9F4EA`, `#3E6BE8`,
  `#FEAF9B`, `#ECE241`), más el cian `#25CAD3` del isotipo. Definida una sola vez
  en `globals.css` y espejada en `content/site.ts` para los shaders y las OG.
- **Isotipo**: los cuatro polígonos de `components/brand/Logo.tsx` están trazados
  pixel a pixel desde `src/images/logoprincipal.png` del sitio Gatsby. La silueta
  es idéntica al original.
- **Tipografía**: el brandbook pide Apple Garamond y Plain, las dos licenciadas.
  Acá van sus sustitutas libres más cercanas — Instrument Serif e Inter — y
  Poppins sólo para el logotipo. **Cuando marketing entregue los archivos
  oficiales**: reemplazar en `lib/fonts.ts`, y cambiar el `<span>` del wordmark
  en `Logo.tsx` por el SVG oficial (está en el Drive que linkea el handbook).

---

## Deploy

Proyecto de Vercel propio con **root directory `web`**. Framework Next.js,
sin configuración extra. Variables: `CONTACT_WEBHOOK_URL`.

Antes de apuntar el dominio, cambiar `SITE.url` en `src/content/site.ts`: de ahí
salen los canonical, el sitemap, las OG y los `llms.txt`.
