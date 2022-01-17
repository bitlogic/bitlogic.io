import "./PartnersSection.scss"
import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useTheme } from "../../context/themeContext"

const PartnersSection = ({ title, partners }) => {
  const { theme } = useTheme()

  const partnerList = partners.map(partner => {
    const partnerImage = getImage(partner?.image?.localFile)
    const imagenDM = getImage(partner?.imageDark?.localFile)
    return (
      <div className="partners__image">
        <GatsbyImage
          image={theme === "dark" && imagenDM ? imagenDM : partnerImage}
          alt={partner.caption}
        />
      </div>
    )
  })
  return (
    <div className="partners">
      <h2 className="partners__title">{title}</h2>
      <div className="partners__logos">{partnerList}</div>
    </div>
  )
}

export default PartnersSection
