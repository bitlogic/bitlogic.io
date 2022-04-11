import React from "react"
import MarkdownView from "react-showdown"
import "./Text.scss"

export default function Text({ data }) {
    console.log(data)
    const title = data?.title
    const description = data?.text
    const bgImage = data?.backgroundImage[0].url
    console.log(bgImage)

    return (
        <div className="container-text">
            {title !== "" && title !== undefined && title !== null ? (
                <div className="text d-flex flex-column flex-md-row">
                    <div
                        className="title"
                        style={{
                            backgroundImage: `url('http://localhost:1337/uploads/trama_gris_arriba_4dab8e35c4.png')`,
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
                    backgroundImage: `url('http://localhost:1337/uploads/trama_gris_arriba_4dab8e35c4.png')`,
                }} />
            )}
        </div>
    )
}
