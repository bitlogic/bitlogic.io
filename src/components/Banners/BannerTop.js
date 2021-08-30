import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "./BannerTop.scss"

const BannerTop = ({ banner }) => {
  const { image, title, summary } = banner
  const imageBanner = getImage(image.localFile)

  return (
    <div className="banner">
      <BgImage image={imageBanner} className="banner__bgImage">
        <div className="banner__titleContainer">
          <h1 className="banner__title">{title}</h1>
        </div>
      </BgImage>
      {summary ? (
        <div className="banner__summary">
          <div className="container ">
            <p className="banner__summary__txt">{summary}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default BannerTop
