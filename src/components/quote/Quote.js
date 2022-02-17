import "./quote.scss"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Quote = ({ data: {description, title, variant, profile, image} }) => {
  const variants = {
    quote: {
      gridTemplateAreas: '"quote-person quote-body"',
      gridTemplateColumns: "1fr 2fr",
    },
    image: {
      gridTemplateAreas: '"quote-body quote-person"',
      gridTemplateColumns: "2fr 1fr",
    },
  }

  return (
    <section className="quote" style={variants[variant || "quote"]}>
      <div className="quote-body">
        <img
          placeholder="https://via.placeholder.com/900"
          src={"http://localhost:1337" + image.url}
          alt=""
        />
      </div>
      <div className="quote-person">
        <h2 className="quote-person-title">{title}</h2>
        <p className="quote-person-text">
          {description}
        </p>
        <div className="quote-person-profile make-it-fast">
          <img
            placeholder="https://via.placeholder.com/300"
            src={"http://localhost:1337" + profile.url}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

Quote.defaultProps = {
  description: "",
  title: "",
  variant: "",
  profile: {},
  image: {}

}

export default Quote
