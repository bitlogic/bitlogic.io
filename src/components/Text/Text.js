import React from "react"
import MarkdownView from "react-showdown"
import "./Text.scss"

export default function Text({ data }) {
  const title = data?.title
  const description = data?.text
  const bgImage = data?.backgroundImage?.url

  return (
    <div className="container-text mt-3 mt-xl-5" style={{
      backgroundImage: `url(${bgImage})`,
    }}>
      <div className="container">
        {title !== "" && title !== undefined && title !== null ? (
          <div className="text d-flex flex-column flex-md-row">
            <div className="title">
              <h2 className="titleText pt-5 px-3 ps-md-0">{title}</h2>
            </div>
            <MarkdownView
              markdown={description}
              className="description"
            />
          </div>
        ) : (
          <div className="container-markdown">
            <MarkdownView
              markdown={description}
              className="notTitle"
            />
          </div>
        )}
      </div>
    </div>
  )
}
