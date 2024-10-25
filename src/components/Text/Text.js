import React from "react"
import MarkdownView from "react-showdown"
import "./Text.scss"
import PropTypes from "prop-types"

export default function Text({ data }) {
  const { title, text, titlePosition, backgroundImage } = data
  const bgImage = backgroundImage?.url
  return (
    <div
      className="Text mt-3"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
      }}
    >
      <div className={`Text__wrapper container ${titlePosition || "Left"}`}>
        {title && <h2 className="Text__title">{title}</h2>}
        <div className="Text__description">
          <MarkdownView
            markdown={text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </div>
  )
}

Text.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    titlePosition: PropTypes.string,
    text: PropTypes.string.isRequired,
    backgroundImage: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
}
