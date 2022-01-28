import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import showdown from "showdown"
import "./ServiceCards.scss"
import { useTheme } from "../../context/themeContext"

const ServiceCards = ({ title, services }) => {
  const { theme } = useTheme()

  const titles = title
  let converter = new showdown.Converter()
  let post = titles
  let html = converter.makeHtml(post)

  const ReplaceHtml = () => {
    return { __html: html }
  }

  const servicios = services?.map((service, idx) => (
      <div key={idx} className="col-12 col-md-7 col-lg-3 ServiceCards__card">
        <div className="ServiceCards__image">
          <GatsbyImage
            image={theme === "dark" && getImage(service?.iconDarkMode?.localFile) ? getImage(service?.iconDarkMode?.localFile) : getImage(service?.icon?.localFile)}
            alt={service.homeTitle}
          />{" "}
        </div>
        <div className="ServiceCards__textContainer">
          <p className="ServiceCards__title">{service.homeTitle}</p>
          <p className="ServiceCards__intro">{service.homeIntro}</p>
        </div>

        <Link to={"/servicios"} className="ServiceCards__link">
          Ver más
        </Link>
      </div>
    ))
    .slice(0, 3)

  return (
    <>
      <div className="container-fluid  ServiceCards">
        <div className="row">
          <div
            dangerouslySetInnerHTML={ReplaceHtml()}
            className="col-12 ServiceCards__mainTitle"
          ></div>
        </div>
        <div className="ServiceCards__container row justify-content-center">
          {servicios}
        </div>
      </div>
    </>
  )
}

export default ServiceCards
