import React from "react"
import { useCases } from "../../hooks/index"
import "./CasesSection.scss"
import PropTypes from "prop-types"
import MarkdownView from "react-showdown"
import CustomLink from "../CustomLink/CustomLink";
import CustomImage from "../CustomImage/CustomImage"

const CasesSection = ({ data }) => {
  const { title, cases } = data
  const casesData = useCases()?.allStrapiCase?.nodes

  const casos = cases.map(caso =>
    casesData?.find(ca => ca.strapiId === caso.id)
  )

  const casesCards = casos.map(caso => {

    return (
      <div key={caso.strapiId}
        className={`case col-12 row ${casos.length === 3
          ? "col-md-4"
          : "col-md-6"
          }`
        }
      >
        <div className="col-6 col-md-12">
          <CustomImage
            image={caso?.image}
            width={130}
            height={200}
            className="case__img"
            alt={caso?.image?.alternativeText || caso.title}
          />
        </div>
        <div className="col-6 col-md-12">
          <div className="case__descr">
            <h4 className="case__descr_title">
              {caso.title}
            </h4>
            {caso?.description && (
              <div className="case__descr_text">
                <MarkdownView
                  markdown={caso.description}
                  dangerouslySetInnerHTML={{ __html: caso.description }}
                />
              </div>
            )}
          </div>
          {caso?.button && (
            <button aria-label={`Ir a ${caso.button.content}`}>
              <CustomLink
                content={caso.button.content}
                url={caso?.button?.url}
                landing={caso?.button?.landing_page}
                className=''
              />
            </button>
          )}
        </div>
      </div>
    )
  })

  return (
    <div className="container py-5 casesSection">
      <h2>{title}</h2>
      {casesCards !== undefined && casesCards.length > 0 && (
        <div className="cases row">{casesCards}</div>
      )}
    </div>
  )
}

CasesSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cases: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.shape({
          alternativeText: PropTypes.string,
          url: PropTypes.string.isRequired,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.object.isRequired
            })
          })
        }).isRequired,
        button: PropTypes.shape({
          content: PropTypes.string.isRequired,
          url: PropTypes.string,
          landing_page: PropTypes.shape({
            slug: PropTypes.string.isRequired
          })
        })
      })
    )
  })
}

export default CasesSection
