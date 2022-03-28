import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import { useTheme } from "../../context/themeContext"

import "./BannerLogo.scss"

const BannerLogo = ({ banner }) => {
  const { theme } = useTheme()
  const { bgImage, bgImageDarkMode, image, imageDarkMode, title } = banner

  const imagen = getImage(bgImage?.localFile)
  const logoImage = getImage(image?.localFile)
  // Version Dark Mode
  const imagenDM = getImage(bgImageDarkMode?.localFile)
  const logoDM = getImage(imageDarkMode?.localFile)

  return (
    <>
      {theme === "dark" && imagenDM && logoDM ? (
        <BgImage image={imagenDM} className="BannerLogo__BgImage">
          <div className="BannerLogo__Logo__Container">
            <GatsbyImage image={logoDM} alt={`img-${title}`}></GatsbyImage>
          </div>
          <h1 className="BannerLogo__Title">{title}</h1>
        </BgImage>
      ) : (
        <BgImage image={imagen} className="BannerLogo__BgImage">
          <div className="BannerLogo__Logo__Container">
            <GatsbyImage image={logoImage} alt={`img-${title}`}></GatsbyImage>
          </div>
          <h1 className="BannerLogo__Title">{title}</h1>
        </BgImage>
      )}
{/* 
      {title ? (
        <div className="BannerLogo__summary">
          <div className="container ">
            <p className="BannerLogo__summary__txt">{title}</p>
          </div>
        </div>
      ) : null} */}
    </>
  )
}

export default BannerLogo
