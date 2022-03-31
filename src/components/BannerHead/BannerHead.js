import React from "react"
import "./BannerHead.scss"
import MarkdownView from "react-showdown"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const BannerHead = ({ data }) => {
    const title = data?.title;

    const checkImage = () => {

        if (data?.image?.url) {
            return <img src={data?.image?.url} alt={data?.image?.name} />
        } else {
            const image = getImage(data?.image?.localFile)
            return <GatsbyImage image={image} alt={`img-${title}`}></GatsbyImage>
        }
    }

    return (
        <div class="banner d-flex justify-content-center">
            <div class="banner__image">
                {checkImage()}
            </div>

            {title && (
                <MarkdownView markdown={title} />
            )}
        </div>
    )
}

export default BannerHead
