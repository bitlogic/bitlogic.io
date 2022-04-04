import React from "react"
import "./BannerHead.scss"
import MarkdownView from "react-showdown"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const BannerHead = ({ data }) => {
    const title = data?.title;
    const image = data?.image;

    const checkImage = () => {

        if (image?.url) {
            return <img src={image?.url} alt={image?.name} />
        } else {
            const imagen = getImage(image?.localFile)
            return <GatsbyImage image={imagen} alt={`img-${title}`}></GatsbyImage>
        }
    }

    return (
        <div class="banner d-flex justify-content-center">
            <div class="banner__image">
                {image && checkImage()}
            </div>

            {title && (
                <MarkdownView markdown={title} />
            )}
        </div>
    )
}

export default BannerHead
