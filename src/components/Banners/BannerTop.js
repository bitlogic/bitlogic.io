import React from "react"
import PropTypes from "prop-types"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "./BannerTop.scss"

const BannerTop = ({ banner }) => {
  const { image, imagePage, title, variant = "" } = banner

  const imageBanner =
    getImage(image?.localFile) || getImage(imagePage?.localFile)

  return (
    <div className={`BannerTop ${variant}`}>
      {imageBanner ? (
        <BgImage
          image={imageBanner}
          className="BannerTop__bgImage"
          loading="eager"
          fetchpriority="high"
        >
          <div className={`BannerTop__titleContainer ${variant}`}>
            <h1 className={`BannerTop__title ${variant && "background container"}`}>
              {title}
            </h1>
          </div>
        </BgImage>
      ) : (
        <div className={`BannerTop__titleContainer ${variant}`}>
          <h1 className={`BannerTop__title ${variant && "background container"}`}>
            {title}
          </h1>
        </div>
      )}
    </div>
  )
}

BannerTop.propTypes = {
  banner: PropTypes.shape({
    image: PropTypes.shape({
      localFile: PropTypes.object,
    }),
    imagePage: PropTypes.shape({
      localFile: PropTypes.object,
    }),
    title: PropTypes.string.isRequired,
    variant: PropTypes.string,
  }).isRequired,
}

export default BannerTop
