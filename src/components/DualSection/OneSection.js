import React from "react"

const OneSection = ({ data: { id, strapi_component, dualSectionPart } }) => {
  const { title, button, description, image } = dualSectionPart
    ? dualSectionPart[0]
    : {}

  return (
    <div className="one_sec container" id={strapi_component + "-" + id}>
      <div className="one_sec-title">
        <h1>{title}</h1>
        <p>{description}</p>
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
  )
}

export default OneSection
