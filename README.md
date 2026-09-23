# Travelling Books — versión HTML + CSS + JS

Esta versión elimina React, TypeScript, Tailwind, TanStack, shadcn y cualquier dependencia de Lovable.

## Estructura

- `index.html` → toda la landing page
- `styles.css` → todos los estilos
- `script.js` → menú mobile + lightbox + navegación de galería
- `img/` → carpeta para logos, portadas y fotografías

## Abrir localmente

No necesitás npm ni Python para probarla: podés abrir `index.html` directamente en el navegador.

También podés usar VS Code + Live Server.

## Imágenes

El ZIP exportado de Lovable que recibimos NO contiene los archivos binarios de las imágenes. Contiene únicamente archivos `.asset.json` que apuntan a los assets alojados por Lovable.

Por eso esta conversión conserva los nombres exactos que la landing espera dentro de `img/`:

- `travelling-books-logo.png`
- `photobook-000.jpg` a `photobook-007.jpg`
- `photobook-024.png`
- `photobook-026.png`
- `photobook-028.png`
- `photobook-030.png`
- `photobook-032.png`
- `photobook-034.png`
- `photobook-036.png`
- `photobook-037.png`
- `photobook-039.png`
- `photobook-041.png`
- `photobook-043.png`
- `photobook-045.png`

Copiá esas imágenes reales dentro de `img/` y la web las va a tomar automáticamente.

El `favicon.png` sí venía físicamente dentro del ZIP y ya fue copiado.
