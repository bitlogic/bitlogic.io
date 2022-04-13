import React from "react"
import MarkdownView from "react-showdown"
import "./Text.scss"

export default function Text({ data }) {
  const title = data?.title
  const description = data?.text
  const bgImage = data?.backgroundImage?.url

  return (
    <div className="container-text" style={{
      backgroundImage: `url(${bgImage})`,
    }}>
      {title !== "" && title !== undefined && title !== null ? (
        <div className="text d-flex flex-column flex-md-row">
          <div className="title">
            <h2 className="titleText pt-5 px-3 pb-3">{title}</h2>
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
            className="notTitle mx-lg-5"
          />
        </div>
      )}
    </div>
  )
}
