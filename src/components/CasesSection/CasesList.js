import React from "react"
import MarkdownView from "react-showdown"
import { useCases } from "../../hooks/index"
import "./CasesSection.scss"
import PropTypes from "prop-types"
import CustomImage from "../CustomImage/CustomImage"

const CasesList = ({ data }) => {
  const cases = useCases()?.allStrapiCase?.nodes
  const { title } = data;

  const expendedCards = cases.map(caso => {

    return (
      <div className="col-12 row caseExpanded my-3" key={caso.strapiId}>
        <div className="col-12">
          <CustomImage
            image={caso?.image}
            className="caseExpanded__img"
            alt={caso?.image?.alternativeText || caso.title}
          />
        </div>
        <div className="col-12 col-md-7">
          <h4 className="pt-3 pb-2 caseExpanded__title">{caso.title}</h4>
          {caso.description && (
            <div className="caseExpanded__descr">
              <MarkdownView markdown={caso.description}
                dangerouslySetInnerHTML={{ __html: caso.description }}
              />
            </div>
          )}
        </div>
        <div className="col-12 col-md-5 row caseQuote">
          {caso?.quote?.title && (
            <h4 className="caseQuote__title col-12 pt-md-3 pb-2">
              {caso.quote.title}
            </h4>
          )}
          {caso?.quote?.description && (
            <div className="caseQuote__descr col-9 col-md-12">
              <MarkdownView
                markdown={caso.quote.description}
                dangerouslySetInnerHTML={{ __html: caso.quote.description }}
              />
            </div>
          )}
          <CustomImage
            image={caso?.quote?.profile}
            className="ml-md-3 caseQuote__profileImg col-3 col-md-12"
            alt={caso?.quote?.profile?.alternativeText || caso?.quote?.title}
          />
        </div>
      </div>
    )
  })

  return (
    <div className="container py-5 casesSection">
      <h2>{title}</h2>
      <div className="row">{expendedCards}</div>
    </div>
  )
}

CasesList.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}

export default CasesList
