import React from "react"
import MarkdownView from "react-showdown"
import "./Text.scss"

export default function Text({ data }) {
    const title = data?.title
    const description = data?.text
    const bgImage = data?.backgroundImage[0]?.url

    return (
        <div className="container-text">
            {title !== "" && title !== undefined && title !== null ? (
                <div className="text d-flex flex-column flex-md-row">
                    <div
                        className="title"
                        style={{
                            backgroundImage: `url(${bgImage})`,
                        }}
                    >
                        <h2 className="titleText pt-5 ps-4 pe-md-3">{title}</h2>
                    </div>
                    <MarkdownView
                        markdown={description}
                        className="description ps-4 px-lg-5"
                    />
                </div>
            ) : (
                <MarkdownView markdown={description} className="px-lg-5" id="descriptionText" style={{
                    backgroundImage: `url(${bgImage})`,
                }} />
            )}
        </div>
    )
}
