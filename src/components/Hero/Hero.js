import React from "react"
import PropTypes from 'prop-types'
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


Hero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    listAnimation: PropTypes.string,
    subtitle: PropTypes.string,
    strapi_component: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    button: PropTypes.shape({
      url: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  }).isRequired
}


export default Hero
