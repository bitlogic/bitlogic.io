import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useCases } from "../../hooks/index"
import "./CasesSection.scss"
import { FaRegThumbsUp, FaShareAlt, FaRegComment } from "react-icons/fa";
import Quote from "../quote/Quote";

const CasesSection = ({ data }) => {
  const { title, cases } = data
  const casesData = useCases()

  const casos = cases.map(caso => 
    casesData.allStrapiCases.nodes.find(ca => ca.strapiId === caso.id)  
  )
  console.log(casos, "casos reales")

  const casesCards = casos.map((caso, idx) => {
    console.log(caso, "caso")
    const image = getImage(caso?.image?.localFile)
    
    return (
      <div className="case col-12 col-md-4 row" key={`case-${idx}`} id={data.strapi_component + "-" + data.id}>
        <div className="col-6 col-md-12">
          <GatsbyImage image={image} alt={caso.title} className="case__img"/>
        </div>
        <div className="col-6 col-md-12">
          <div className="case__descr">
            <h5 className="case__descr_title">{caso.title}</h5>
            <p className="case__descr_text">{caso.description}</p>
          </div>
          <button>{caso.button.content}</button>
        </div>
        {/* <div className="case__socials col-12">
          <FaRegThumbsUp color="#3F6BE8" size={20} />
          <FaRegComment color="#3F6BE8" size={20} />
          <FaShareAlt color="#3F6BE8" size={20} />
        </div> */}
      </div>
    )
  })

  const image = getImage(casesData.allStrapiCases.nodes[0].image?.localFile)
  const profileImg = getImage(casesData.allStrapiCases.nodes[0].quote.profile.localFile)
  const expendedCard = (
    <div className="col-12 row caseExpanded">
      <div className="col-12">
      <GatsbyImage image={image} alt="alt" className="caseExpanded__img"/>
      </div>
      <div className="col-12 col-md-7">
        <h5 className="pt-3 pb-2">{casesData.allStrapiCases.nodes[0].title}</h5>
        <p>{casesData.allStrapiCases.nodes[0].description}</p>
      </div>
      <div className="col-12 col-md-5 row caseQuote">
        <h5 className="caseQuote__title col-12 pt-md-3 pb-2">title</h5>
        <p className="caseQuote__descr col-9 col-md-12">"parrafo parrafo parrafo parrafo parrafo"</p>
        <GatsbyImage image={profileImg} className="ml-md-3 caseQuote__profileImg col-3 col-md-12" />
      </div>
      <div className="col-12">redes</div>
    </div>
  )

  return (
    <div className="container py-5 casesSection">
      {title && <h2>{title}</h2>}
      {casesCards.length > 0 && <div className="cases row">{casesCards}</div>}
      <div className="row">{expendedCard}</div>
      
    </div>
  )
}

export default CasesSection
