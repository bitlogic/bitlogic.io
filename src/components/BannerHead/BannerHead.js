import React from "react"
import "./BannerHead.scss"
import MarkdownView from "react-showdown"

const BannerHead = ({ data }) => {

    const title = data?.title;
    const image = data?.image;
    console.log(image)
    return (
        <div class="banner d-flex justify-content-center">
            <div class="banner__image">
                {(image.length !== 0) && (
                    <img
                        src={image.url} alt={image.name}
                    />
                )}
            </div>
            <div class="banner__title">
                <h1>
                    {title && (
                        <MarkdownView markdown={title} />
                    )}
                </h1>
            </div>
        </div>
    )
}

export default BannerHead
