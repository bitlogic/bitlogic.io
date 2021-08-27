import React from "react"
import "./Paragraph.scss"
import MarkdownView from "react-showdown"
const Paragraph = ({ text: { body }, ...extra }) => {
  return (
    <section {...extra} className={`bitway-paragraph ${extra.className}`}>
      <MarkdownView
        markdown={body}
        options={{ strikethrough: true, literalMidWordAsterisks: true }}
        strikethrough={true}
        literalMidWordAsterisks={false}
      />
    </section>
  )
}

export default Paragraph
