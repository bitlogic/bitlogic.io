import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Markdown from "react-markdown"

const ServiceCard = ({ service }) => {
  const icon = getImage(service.icon.localFile)

  return (
    <div className="serviceCard row">
      <div className="col-12 col-md-2 justify-content-center">
        <div className="serviceCard__icon">
          <GatsbyImage image={icon} alt={service.title} />
        </div>
      </div>
      <div className="col-12 col-md-10 serviceCard__block">
        <div className="serviceCard__title">{service.title}</div>
        <div >
          <Markdown className="serviceCard__description" escapeHtml={true}>{service.description}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
