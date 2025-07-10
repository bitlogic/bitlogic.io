// gatsby-browser.js
export const onClientEntry = () => {
  const style = document.createElement("style")
  style.id = "critical-banner-hero"
  style.innerHTML = `
    .banner.hero .title h1 {
      text-transform: uppercase;
      text-align: left;
      margin-bottom: 0.8rem;
      font-size: 32px;
      font-family: "Plain", sans-serif;
      word-wrap: initial;
    }
    .banner.hero .title p {
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
    }
  `
  document.head.appendChild(style)

  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "image"
  link.href = "https://strapi-s3-bitlogic.s3.sa-east-1.amazonaws.com/background_componente_video_be81ab4bf2.webp"
  document.head.appendChild(link)
}
