import React from "react"
import "./Hero.scss"

const Hero = ({
  data: { title, listAnimation, subtitle, image, button, strapi_component, id },
}) => {
  return (
    <div className="hero" id={strapi_component + "-" + id}>
      <div className="hero-title">
        <h1>{title}</h1>
        <h3>{listAnimation || subtitle}</h3>
        {button && (
          <button>
            <a href={button.url} target="_blank" rel="noreferrer">
              {button.content}
            </a>
          </button>
        )}
      </div>
      <div className="hero-img">
        <img src={image?.url} alt="hero" />
      </div>
    </div>
  )
}

export default Hero
