// gatsby-browser.js

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

  // Inyectamos el mismo CSS crítico en el head para desarrollo / SPA
  const style = document.createElement("style")
  style.id = "critical-banner-hero"
  style.innerHTML = criticalCSS
  document.head.appendChild(style)
}
