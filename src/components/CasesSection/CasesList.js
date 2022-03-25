import React from "react"
import MarkdownView from "react-showdown"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useCases } from "../../hooks/index"
import "./CasesSection.scss"
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const CasesList = () => {
  const casesData = useCases()
  const cases = casesData?.allStrapiCase?.nodes

  const expendedCards = cases.map(caso => {
    const image = getImage(caso.image?.localFile)
    const profileImg = getImage(caso.quote?.profile?.localFile)

    return (
      <div className="col-12 row caseExpanded my-3" id={caso.title}>
        <div className="col-12">
          <GatsbyImage image={image} alt="alt" className="caseExpanded__img" />
        </div>
        <div className="col-12 col-md-7">
            {caso.title && (
                <h5 className="pt-3 pb-2 caseExpanded__title">{caso.title}</h5>
            )}
          
          {caso.subtitle && (
          <h6 className="caseExpanded__subtitle">{caso.subtitle}</h6>              
          )}
          <div className="caseExpanded__descr">
          <MarkdownView markdown={caso.description} />
          </div>
        </div>
        <div className="col-12 col-md-5 row caseQuote">
          <h5 className="caseQuote__title col-12 pt-md-3 pb-2">
            {caso.quote.title}
          </h5>
          <p className="caseQuote__descr col-9 col-md-12">
            "{caso.quote.description}"
          </p>
          <GatsbyImage
            image={profileImg}
            className="ml-md-3 caseQuote__profileImg col-3 col-md-12"
          />
        </div>
        <div className="col-12">
          <h6 className="caseExpanded__share">Compartílo en tus redes sociales</h6>
          <div className="caseExpanded__icons d-flex justify-content-center">
            <FaInstagram color="#3f6be8" size={20} />
            <FaLinkedinIn color="#3f6be8" size={20} />
            <FaTwitter color="#3f6be8" size={20} />
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="container py-5 casesSection">
      <div className="row">{expendedCards}</div>
    </div>
  )
}

export default CasesList
