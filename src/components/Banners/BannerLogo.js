import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import logoLight from "../../images/logoprincipal.png"

import { useBanner } from "../../hooks/index"
import { useTheme } from "../../context/themeContext"

import "./BannerLogo.scss"

const BannerLogo = ({ banner, title }) => {
  const { theme } = useTheme()

  const dataBanner = useBanner()

  const bannerSelected = dataBanner?.allStrapiBanners?.nodes.find(
    ban => ban.strapiId === banner.id
  )
  const { image, logo, summary } = bannerSelected

  const imagen = getImage(image.localFile)
  const logoImage = getImage(logo.localFile)

  return (
    <>
      <BgImage image={imagen} className="BannerLogo__BgImage">
        <div className="BannerLogo__Logo__Container">
          {theme === "dark" ? (
            <GatsbyImage image={logoImage} alt={`img-${title}`}></GatsbyImage>
          ) : (
            <GatsbyImage image={logoImage} alt={`img-${title}`}></GatsbyImage>
          )}
        </div>
        <h1 className="BannerLogo__Title">{title}</h1>
      </BgImage>

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
