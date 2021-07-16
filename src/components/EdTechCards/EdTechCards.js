import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import showdown from "showdown"
import "./EdtechCards.scss"

const EdTechCards = ({ title, edteches }) => {
  const titles = title
  let converter = new showdown.Converter()
  let post = titles
  let html = converter.makeHtml(post)

  const ReplaceHtml = () => {
    return { __html: html }
  }
  const edtechCard = edteches
    ?.map((edtech, idx) => (
      <div className="row mt-4">
        <div key={idx} className="col-12 col-lg-8 EdtechCards__card">
          <div className="EdtechCards__image col-4 ">
            <GatsbyImage
              image={getImage(edtech?.homeIcon)}
              alt={edtech.homeTitle}
            />{" "}
          </div>
          <div className="EdtechCards__textContainer col-8">
            <p className="EdtechCards__title">{edtech.homeTitle}</p>
            <p className="EdtechCards__intro">{edtech.homeIntro}</p>
          </div>
        </div>

        <Link to={"/edtech"} className="EdtechCards__link col-12 col-lg-2">
          Ver más
        </Link>
      </div>
    ))
    .slice(0, 3)

  return (
    <>
      <div className=" EdtechCards">
        <div className=" container-fluid">
          <div className="row align-items-center ">
            <div
              dangerouslySetInnerHTML={ReplaceHtml()}
              className="col-12 col-lg-6 EdtechCards__mainTitle"
            ></div>
            <div className="col-12 col-lg-6 EdtechCards__containerCards">
              {edtechCard}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EdTechCards
