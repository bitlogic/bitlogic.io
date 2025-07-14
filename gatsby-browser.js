export const onClientEntry = () => {
  const criticalCSS = `
    .banner.hero .title h1 {
      text-transform: uppercase;
      text-align: left;
      margin-bottom: 0.8rem;
      font-size: 52px;
      font-family: "Plain", sans-serif;
      word-wrap: initial;
    }
    .banner.hero .title p {
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
    }
  `

  // Inyectar CSS crítico
  const style = document.createElement("style")
  style.id = "critical-banner-hero"
  style.innerHTML = criticalCSS
  document.head.appendChild(style)

  // Precargar poster del video
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "image"
  link.href = "https://strapi-s3-bitlogic.s3.sa-east-1.amazonaws.com/background_componente_video_be81ab4bf2.webp"
  document.head.appendChild(link)
}
