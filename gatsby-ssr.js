// gatsby-ssr.js
import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Preload de la imagen crítica
    <link
      key="preload-background"
      rel="preload"
      as="image"
      href="https://strapi-s3-bitlogic.s3.sa-east-1.amazonaws.com/background_componente_video_be81ab4bf2.webp"
    />,
    // CSS crítico del Banner Hero
    <style
      key="critical-banner-hero"
      dangerouslySetInnerHTML={{
        __html: `
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
        `,
      }}
    />,
  ])
}
