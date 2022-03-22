import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useCases } from "../../hooks/index"
import "./CasesSection.scss"
import { FaRegThumbsUp, FaShareAlt, FaRegComment } from "react-icons/fa";

const CasesSection = ({ data }) => {
  const { title, cases } = data
  console.log(cases, "cases")
  const casesData = useCases()
  console.log(casesData, "data")

  const casos = cases.map(caso => 
    casesData.allStrapiCases.nodes.find(ca => ca.id === caso.strapiId)  
  )
  console.log(casos, "casos reales")


  const casesCards = casos.slice(0,3).map((caso, idx) => {
    console.log(caso, "caso")
    
    return (
      <div className="case col-12 col-md-4 row" key={`case-${idx}`} id={data.strapi_component + "-" + data.id}>
        <div className="col-6 col-md-12">
          <img className="case__img" src={caso.image?.url} alt="A kitten" />
        </div>
        <div className="col-6 col-md-12">
          <div className="case__descr">
            <h5 className="case__descr_title">{caso.title}</h5>
            <p className="case__descr_text">{caso.description}</p>
          </div>
          <button>{caso.button.content}</button>
        </div>
        <div className="case__socials col-12">
          <FaRegThumbsUp color="#3F6BE8" size={20} />
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
