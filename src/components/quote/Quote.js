import "./quote.scss"

import React from "react"

const Quote = ({ data: { description, title, variant, profile, image } }) => {
  return (
    <div className="container my-3">
      <section className={`quote variant-${variant}`}>
      <div className="quote-body">
        <img
          placeholder="https://via.placeholder.com/900"
          src={image.url}
          alt=""
        />
      </div>

      <div className="quote-person">
        <h4 className="quote-person-title">{title}</h4>
        <p className="quote-person-text">{description}</p>
      </div>

      <div className="quote-profile make-it-fast">
        <img
          placeholder="https://via.placeholder.com/300"
          src={profile.url}
          alt=""
        />
      </div>
    </section>
      </div>
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
