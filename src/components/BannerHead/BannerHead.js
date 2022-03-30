import React from "react"
import "./BannerHead.scss"
import MarkdownView from "react-showdown"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const BannerHead = ({ data }) => {

    const title = data?.title;

    const checkImage = (data) => {

        if (data.image[0].url) {
            return <img src={data?.image[0]?.url} alt={data?.image[0]?.name} />
        } else {
            const image = getImage(data?.image[0]?.localFile)
            return <GatsbyImage image={image} alt={`img-${title}`}></GatsbyImage>
        }
    }

    return (
        <div class="banner d-flex justify-content-center">
            <div class="banner__image">
                {checkImage(data)}
            </div>

            {title && (
                <MarkdownView markdown={title} />
            )}
        </div>
    )
}

export default BannerHead
