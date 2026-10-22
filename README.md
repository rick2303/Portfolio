# Personal Portfolio

Portfolio de Franky Interiano, hecho con React, Vite, Tailwind CSS y Motion.

En vivo: [frankyinteriano.com](https://frankyinteriano.com)

## Desarrollo

```bash
npm install
npm run dev
```

## Build

`npm run build` compila con Vite y luego corre `scripts/prerender-meta.js`, que genera:

- `projects.html`, `experience.html` y `contact.html` con su propio título, descripción y Open Graph
- `404.html` (noindex) para rutas que no existen
- `sitemap.xml` con la fecha del build

`public/_redirects` le dice a Netlify qué HTML servir en cada ruta.

Los proyectos se editan en `src/data/projects.js`. Las capturas van en `public/projects/` en formato WebP.

Creado por [@rick2303](https://github.com/rick2303)
