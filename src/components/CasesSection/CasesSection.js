import React from "react"
import "./CasesSection.scss"

const CasesSection = ({ data }) => {
  const { title, cases } = data
  console.log(data)

  const casesCards = cases.map((caso, idx) => {
    return (
      <div className="case col-12 col-md-4 row">
        <div className="case__img col-6 col-md-12"></div>
        <div className="case__descr col-6 col-md-12">
          <h5 className="case__descr_title">{caso.title}</h5>
          <p className="case__descr_text">{caso.description}</p>
          <button>Ver más</button>
        </div>
        <div className="case__socials col-12"></div>
      </div>
    )
  })

  return (
    <div className="container my-3 casesSection">
      {title && (
        <h2>{title}</h2>
      )}
      {casesCards.length > 0 && (
        <div className="cases row">{casesCards}</div>
      )}
    </div>
  )
}

export default CasesSection
