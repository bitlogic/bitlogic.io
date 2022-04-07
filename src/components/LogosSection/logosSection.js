import "./logosSection.scss"
import React from "react"
import { useTheme } from "../../context/themeContext"

const LogosSection = ({ data }) => {
  const { title, summary, media } = data

  const { theme } = useTheme()

  const logoList = media.map(logo => {
    return (
      <div className="logos__image">
        <img
          src={
            theme === "dark" && logo.imageDark
              ? logo.imageDark.url
              : logo.img.url
          }
          alt={logo.name}
        />
      </div>
    )
  })
  return (
    <div className="logos container py-3 my-3">
      {title && <h2 className="logos__title">{title}</h2>}
      {summary && <h6 className="logos__summary px-lg-3">{summary}</h6>}
      <div className="logos__logos">{logoList}</div>
    </div>
  )
}

export default LogosSection
