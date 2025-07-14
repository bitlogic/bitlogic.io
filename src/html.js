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
        {/* ——— Aquí ya no inyectamos CSS crítico del banner ——— */}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  )
}
