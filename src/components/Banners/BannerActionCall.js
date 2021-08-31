import React from "react"
import { Link } from "gatsby"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import "./BannerActionCall.scss"

const BannerActionCall = ({ banner }) => {
  const icon = getImage(banner?.logo?.localFile)

  return (
    <div className="bannerActCall">
      <div className="bannerActCall__logo">
        <GatsbyImage image={icon} alt={banner.title} />
      </div>
      <div className="bannerActCall__description">
        <h3 className="bannerActCall__title">{banner.title}</h3>
        <Link to={`/${banner.link.pathTo}`} className="bannerActCall__link">
          {banner.link.name}
        </Link>
      </div>
    </div>
  )
}

export default BannerActionCall
