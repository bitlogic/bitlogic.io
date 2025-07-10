// src/html.js
import React from "react"

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        {headComponents}
        {/* ——— CSS CRÍTICO DEL BANNER HERO ——— */}
        <style>{`
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
        `}</style>
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  )
}
