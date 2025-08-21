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
        <meta charset="utf-8" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  )
}
