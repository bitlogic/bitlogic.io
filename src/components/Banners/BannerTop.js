import React from 'react'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "./BannerTop.scss"

const BannerTop = ({banner}) => {

    const image = getImage(banner.image)
    
    return (
        <div className="banner">
            <BgImage image={image} className="banner__bgImage" >
                <div className="banner__titleContainer">
                    <h1 className="banner__title">{banner.title}</h1>
                </div>
            </BgImage>
        </div>
    )
}

export default BannerTop
