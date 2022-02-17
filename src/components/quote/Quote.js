import "./quote.scss"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Quote = ({ data: { description, title, variant, profile, image } }) => {
  return (
    <section className={`quote variant-${variant}`}>
      <div className="quote-body">
        <img
          placeholder="https://via.placeholder.com/900"
          src={"http://localhost:1337" + image.url}
          alt=""
        />
      </div>

      <div className="quote-person">
        <h2 className="quote-person-title">{title}</h2>
        <p className="quote-person-text">{description}</p>
      </div>

      <div className="quote-profile make-it-fast">
        <img
          placeholder="https://via.placeholder.com/300"
          src={"http://localhost:1337" + profile.url}
          alt=""
        />
      </div>
    </section>
  )
}

Quote.defaultProps = {
  description: "",
  title: "",
  variant: "",
  profile: {},
  image: {},
}

export default Quote
