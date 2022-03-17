import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./CasesSection.scss"
import { FaRegThumbsUp, FaShareAlt, FaRegComment } from "react-icons/fa";

const CasesSection = ({ data }) => {
  const { title, cases } = data

  const casesCards = cases.map((caso, idx) => {
    
    return (
      <div className="case col-12 col-md-4 row" key={`case-${idx}`}>
        <div className="col-6 col-md-12">
        <img className="case__img" src={caso.image?.url} alt="A kitten" />
        </div>
        <div className="col-6 col-md-12">
          <div className="case__descr">
            <h5 className="case__descr_title">{caso.title}</h5>
            <p className="case__descr_text">{caso.description}</p>
          </div>
          <button>Ver más</button>
        </div>
        <div className="case__socials col-12">
          <FaRegThumbsUp color="#3F6BE8" size={20}/>
          <FaRegComment color="#3F6BE8" size={20} />
          <FaShareAlt color="#3F6BE8" size={20} />
        </div>
      </div>
    )
  })

  return (
    <div className="container py-5 casesSection">
      {title && <h2>{title}</h2>}
      {casesCards.length > 0 && <div className="cases row">{casesCards}</div>}
    </div>
  )
}

export default CasesSection
