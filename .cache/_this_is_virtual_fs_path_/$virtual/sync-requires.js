
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/benja/Desktop/front/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/benja/Desktop/front/src/pages/404.js")),
  "component---src-pages-bitway-js": preferDefault(require("/home/benja/Desktop/front/src/pages/bitway.js")),
  "component---src-pages-blog-js": preferDefault(require("/home/benja/Desktop/front/src/pages/blog.js")),
  "component---src-pages-contacto-js": preferDefault(require("/home/benja/Desktop/front/src/pages/contacto.js")),
  "component---src-pages-edtech-js": preferDefault(require("/home/benja/Desktop/front/src/pages/edtech.js")),
  "component---src-pages-index-js": preferDefault(require("/home/benja/Desktop/front/src/pages/index.js")),
  "component---src-pages-servicios-js": preferDefault(require("/home/benja/Desktop/front/src/pages/servicios.js"))
}

