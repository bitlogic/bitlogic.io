import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useCases } from "../../hooks/index"
import "./CasesSection.scss"
import { FaRegThumbsUp, FaShareAlt, FaRegComment } from "react-icons/fa";
import Quote from "../quote/Quote";

const CasesList = () => {

  const casesData = useCases()
  const cases = casesData?.allStrapiCases?.nodes

  

  
  const expendedCards = cases.map(caso => {
      const image = getImage(caso.image?.localFile)
      const profileImg = getImage(caso.quote?.profile?.localFile)

      return (
    <div className="col-12 row caseExpanded">
      <div className="col-12">
      <GatsbyImage image={image} alt="alt" className="caseExpanded__img"/>
      </div>
      <div className="col-12 col-md-7">
        <h5 className="pt-3 pb-2">{caso.title}</h5>
        <p>{caso.description}</p>
      </div>
      <div className="col-12 col-md-5 row caseQuote">
        <h5 className="caseQuote__title col-12 pt-md-3 pb-2">{caso.quote.title}</h5>
        <p className="caseQuote__descr col-9 col-md-12">"{caso.quote.description}"</p>
        <GatsbyImage image={profileImg} className="ml-md-3 caseQuote__profileImg col-3 col-md-12" />
      </div>
      <div className="col-12">redes</div>
    </div>
  )

  }

  ) 
  return (
    <div className="container py-5 casesSection">
      <div className="row">{expendedCards}</div>
    </div>
  )
}

export default CasesList
