import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useCases } from "../../hooks/index"
import "./CasesSection.scss"

const CasesSection = ({ data }) => {
  const { title, cases } = data
  const casesData = useCases()

  const casos = cases.map(caso =>
    casesData?.allStrapiCase?.nodes.find(ca => ca.strapiId === caso.id)
  )
  const casesCards = casos.map((caso, idx) => {
    const image = getImage(caso?.image?.localFile)

    return (
      <div
        className="case col-12 col-md-4 row"
        key={`case-${idx}`}
        id={data.strapi_component + "-" + data.id}
      >
        <div className="col-6 col-md-12">
          <GatsbyImage image={image} alt={caso?.title} className="case__img" />
        </div>
        <div className="col-6 col-md-12">
          <div className="case__descr">
            <h5 className="case__descr_title">{caso?.title}</h5>
            <p className="case__descr_text">"{caso?.quote?.description}"</p>
          </div>
          {caso.button?.landing_page && (
            <a href={caso.button?.landing_page?.slug + "/#" + caso?.title}>
              <button>{caso?.button?.content}</button>
            </a>
          )}
          {caso.button?.url && (
            <a href={caso.button?.url}>
              <button>{caso?.button?.content}</button>
            </a>
          )}
        </div>
      </div>
    )
  })

  return (
    <div className="container py-5 casesSection">
      {title && <h2>{title}</h2>}
      {casesCards !== undefined && casesCards.length > 0 && (
        <div className="cases row">{casesCards}</div>
      )}
    </div>
  )
}

export default CasesSection
