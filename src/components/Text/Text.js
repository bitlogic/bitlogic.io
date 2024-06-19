import React from "react"
import MarkdownView from "react-showdown"
import "./Text.scss"
import PropTypes from "prop-types"

export default function Text({ data }) {
  const { title, text } = data
  const bgImage = data?.backgroundImage?.url

  return (
    <div className="container-text mt-3 mt-xl-5" style={{
      backgroundImage: bgImage ? `url(${bgImage})` : '',
      backgroundPosition: 'center'
    }}>
      {title ? (
        <div className="container text d-flex flex-column flex-md-row gap-xl-5 py-3">
          <div className="title">
            <h2 className="titleText ps-md-0 pt-md-3">{title}</h2>
          </div>
          <div className="description">
            <MarkdownView
              markdown={text}
              dangerouslySetInnerHTML={{ __html: text }}
              style={{ margin: !bgImage && '0rem' }}
            />
          </div>
        </div>
      ) : (
        <div className="container container-markdown" style={{ padding: !bgImage && '0rem' }}>
          <div className="notTitle">
            <MarkdownView
              markdown={text}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      )}
    </div>

  )
}

Text.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    backgroundImage: PropTypes.shape({
      url: PropTypes.string
    })
  })
}
