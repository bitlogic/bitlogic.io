import React from "react"
import { useTheme } from "../../context/themeContext"

const OneSection = ({ data: { id, strapi_component, dualSectionPart } }) => {
  const { theme } = useTheme()
  const {
    title,
    button,
    description,
    image,
    backgroundImage,
    backgroundImageDark,
  } = dualSectionPart ? dualSectionPart[0] : {}

  return (
    <div
      className="one_sec-background"
      style={{
        backgroundImage: `url(${
          theme === "dark" && backgroundImageDark?.url
            ? backgroundImageDark?.url
            : backgroundImage?.url
          })`,
      }}
    >
      <div className="container one_sec" id={strapi_component + "-" + id}>
        <div className="one_sec-title">
          <h4>{title}</h4>
          <h4 className="one_sec-title-body">{description}</h4>
          {button && (
            <a href={button?.url} target="_blank" rel="noreferrer" >
              <button className="px-4">{button?.content}</button>
            </a>
          )}
        </div>
        <div className="one_sec-img">
          <img src={image?.url} alt="one_sec" />
        </div>
      </div>
    </div>
  )
}

export default OneSection
