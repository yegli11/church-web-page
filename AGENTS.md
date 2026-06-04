<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SEO

El SEO es una prioridad de este proyecto. Sigue estas reglas al crear o editar páginas, layouts o rutas (ver detalle en `.cursor/rules/seo.mdc`):

- **Rutas en español**, con slugs ASCII en minúscula y sin acentos ni ñ (`/historia`, `/ensenanzas`, `/departamentos`, `/ministerios`). Al renombrar rutas, agrega redirect `permanent: true` en `next.config.ts` y actualiza `Header`, `Footer` y `ROUTES` en `app/_lib/site.ts`.
- **Metadata único por página**: cada `page.tsx` exporta `metadata` con `title`, `description` (en español, ~150-160 chars) y `alternates.canonical`. El layout raíz ya define `metadataBase`, plantilla de título, Open Graph/Twitter, `robots` y JSON-LD (`@type: Church`); no lo dupliques.
- `themeColor`/`viewport` van en `export const viewport: Viewport`, no en `metadata`.
- Mantén `app/sitemap.ts`, `app/robots.ts` y `app/manifest.ts` al día (añade nuevas rutas a `ROUTES`).
- **HTML semántico**: un solo `<h1>` por página, landmarks (`header`/`main`/`nav`/`footer`), `alt` descriptivo en imágenes, `next/link` para navegación interna.
- Configura el dominio real en `NEXT_PUBLIC_SITE_URL` (o `SITE_URL` en `app/_lib/site.ts`).
