# Amiga, no estás sola — sitio público

Landing estática (HTML + CSS + un JS mínimo), implementada desde el proyecto de Claude Design
`Amiga No Estas Sola - Landing.dc.html` y su design system. Sin framework ni paso de build:
el contenido va en el HTML para que los buscadores lo lean completo y la página cargue rápido.

## Estructura

| Ruta | Qué es |
| --- | --- |
| `index.html` | Landing: inicio, quiénes somos, trayectoria, valores, fundadora, podcast, preguntas frecuentes, únete, líneas de ayuda. |
| `erika-caro/index.html` | Perfil de Erika Caro (para posicionar la búsqueda por su nombre). |
| `404.html` | Página de error. |
| `assets/css/styles.css` | Tokens del design system + componentes. |
| `assets/js/main.js` | Menú móvil y sección activa en la navegación. |
| `assets/img/` | Logos, sprite de iconos (Lucide), foto, imagen Open Graph. |
| `assets/fonts/` | Atkinson Hyperlegible y Gabarito autoalojadas (woff2). |
| `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest`, `.htaccess` | SEO técnico y servidor (Apache/LiteSpeed, p. ej. Hostinger). |

Probar en local: `python -m http.server 8765` y abrir `http://127.0.0.1:8765/`.
(Los iconos usan un sprite SVG externo; no se ven abriendo el archivo con doble clic.)

## Antes de publicar

1. **Dominio.** Todo el SEO usa `https://amiganoestassola.com` como marcador. Si el dominio real es otro,
   reemplázalo en `index.html`, `erika-caro/index.html`, `sitemap.xml`, `robots.txt` y `llms.txt`.
2. **Foto de Erika Caro.** El original está en `assets/img/originales/erika-caro-original.jpg` (692×1152).
   De ahí salen, con el encuadre del diseño (4:5, `object-position: 50% 22%`), los archivos que usa el sitio:
   `erika-caro-psicologa.jpg` y `.webp` (692×865), `erika-caro-psicologa-420.webp` y la imagen para redes
   `erika-caro-og.jpg` (1200×630). Si cambia la foto hay que regenerar los cuatro.
3. **Redes sociales.** Agrega los perfiles reales (Instagram, Facebook, LinkedIn de Erika, etc.) al arreglo
   `sameAs` del JSON-LD (`Organization` y `Person`). Es de lo que más ayuda a que Google asocie la marca
   y el nombre "Erika Caro" con este sitio.
4. **Líneas de ayuda** de México, Ecuador, Perú, Argentina, Venezuela y Chile: pendientes de confirmar por el colectivo.
5. Al cambiar contenido, actualiza `<lastmod>` en `sitemap.xml`. Si editas una pregunta frecuente,
   edita también su copia en el JSON-LD `FAQPage` (deben coincidir).

## Después de publicar

- Verifica el dominio en **Google Search Console** y **Bing Webmaster Tools** y envía `sitemap.xml`.
- Valida los datos estructurados en <https://search.google.com/test/rich-results>.
- Enlaza el sitio desde la descripción del podcast en Spotify, el grupo de WhatsApp y las redes:
  los enlaces entrantes son lo que más mueve el posicionamiento.

## Reglas de contenido (del design system)

Voz cercana ("nosotras" / "tú"), nunca "las víctimas" sino "mujeres que han vivido violencia".
Cifras solo reales (+380 mujeres, 7 países, enero de 2022, 6 fundadoras). Sin emoji.
Toda página que hable de violencia lleva visible el bloque de líneas de ayuda.
