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
      <div className="one_sec container" id={strapi_component + "-" + id}>
        <div className="one_sec-title">
          <h3>{title}</h3>
          <h3 className="one_sec-title-body">{description}</h3>
          {button && (
            <button>
              <a href={button.url} target="_blank" rel="noreferrer">
                {button.content}
              </a>
            </button>
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
