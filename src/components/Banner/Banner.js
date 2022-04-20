import React from "react"
import { Link } from "gatsby"
import "./Banner.scss"

const Banner = ({ data }) => {
  const title = data?.title
  const variant = data?.variant
  const summary = data?.summary
  const image = data?.image
  const button = data?.button
  return (
    <div className={`banner ${variant}`} id={data.strapi_component + "-" + data.id}>
      <div className="title container">
        <div className="col-12 col-md-6">
          <h1>{title}</h1>
          <h3>{summary}</h3>
          {button &&
            (button?.landing_page ? (
              <Link to={`../${button.landing_page.slug}`} className="button">
                {button.content}
              </Link>
            ) : (
              <a
                href={button.url}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                {button.content}
              </a>
            ))}
        </div>
      </div>
      
      <div className="imagen col-12 col-md-6">
        <img src={image?.url} alt={title} />
      </div>
    </div>
  )
}

export default Banner
