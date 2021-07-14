import React from "react"
import Markdown from "react-markdown"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import "./ServiceCards.scss"

const ServiceCards = ({ title, services }) => {
  console.log(" sectionssections", services)

  const servicios = services?.map((service, idx) => (
    <div className="col-12 col-md-3 ServiceCards__card">
      <div>
        <GatsbyImage image={getImage(service?.homeIcon)} />{" "}
      </div>
      <div>
        <p>{service.homeTitle}</p>
        <p>{service.homeIntro}</p>
      </div>
    </div>
  ))

  return (
    <>
      <div className="container ServiceCards">
        <div className="row">
          <Markdown className="col-12">{title}</Markdown>
        </div>
        <div className="row justify-content-center">{servicios}</div>
      </div>
    </>
  )
}

export default ServiceCards
