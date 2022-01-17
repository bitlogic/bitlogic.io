import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import { useBanner } from "../../hooks/index"
import { useTheme } from "../../context/themeContext"

import "./BannerLogo.scss"

const BannerLogo = ({ banner, title }) => {
  const { theme } = useTheme()

  const dataBanner = useBanner()

  const bannerSelected = dataBanner?.allStrapiBanners?.nodes.find(
    ban => ban.strapiId === banner.id
  )
  const { image, imageDarkMode, logo, logoDarkMode, summary } = bannerSelected

  const imagen = getImage(image?.localFile)
  const logoImage = getImage(logo?.localFile)
  // Version Dark Mode
  const imagenDM = getImage(imageDarkMode?.localFile)
  const logoDM = getImage(logoDarkMode?.localFile)

  console.log(logoDM)

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

      {summary ? (
        <div className="BannerLogo__summary">
          <div className="container ">
            <p className="BannerLogo__summary__txt">{summary}</p>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default BannerLogo
