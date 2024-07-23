import React from "react"
import PropTypes from 'prop-types'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "./BannerTop.scss"

import { useTheme } from "../../context/themeContext"

const BannerTop = ({ banner }) => {
  const { bgImage, bgImageDarkMode, image, imagePage, title, summary } = banner
  const { theme } = useTheme()

  const imageBanner =
    getImage(bgImage?.localFile) ||
    getImage(image?.localFile) ||
    getImage(imagePage?.localFile)
  const imageDM = getImage(bgImageDarkMode?.localFile)

  return (
    <div className="banner">
      {theme === "dark" && imageDM ? (
        <BgImage image={imageDM} className="banner__bgImage">
          <div className="banner__titleContainer">
            <h1 className="banner__title">{title}</h1>
          </div>
        </BgImage>
      ) : (
        <BgImage image={imageBanner} className="banner__bgImage">
          <div className="banner__titleContainer">
            <h1 className="banner__title">{title}</h1>
          </div>
        </BgImage>
      )}
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

BannerTop.propTypes = {
  banner: PropTypes.shape({
    bgImage: PropTypes.shape({
      localFile: PropTypes.object
    }),
    bgImageDarkMode: PropTypes.shape({
      localFile: PropTypes.object
    }),
    image: PropTypes.shape({
      localFile: PropTypes.object
    }),
    imagePage: PropTypes.shape({
      localFile: PropTypes.object
    }),
    title: PropTypes.string.isRequired,
    summary: PropTypes.string
  }).isRequired
}

export default BannerTop
