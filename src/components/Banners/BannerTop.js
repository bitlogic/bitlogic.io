import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "./BannerTop.scss"

const BannerTop = ({ banner }) => {
  const image = getImage(banner.image)

  return (
    <div className="banner">
      <BgImage image={image} className="banner__bgImage">
        <div className="banner__titleContainer">
          <h1 className="banner__title">{banner.title}</h1>
        </div>
      </BgImage>
      {banner.summary ? (
        <div className="banner__summary">
          <div className="container ">
            <p className="banner__summary__txt">{banner.summary}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default BannerTop
