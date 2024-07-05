import React from "react"
import "./DualSection.scss"
import MarkdownView from "react-showdown"
import CustomImage from "../CustomImage/CustomImage"
import CustomLink from "../CustomLink/CustomLink"
import PropTypes from "prop-types"

export default function DualSection({ data }) {
  const dualSectionParts = data?.dualSectionPart
  const { title, summary } = data

  const listSectionParts = dualSectionParts?.map(section => (
    <div
      key={section.id}
      className={`dualSection d-flex flex-column ${
        section.length === 3 ? "col - md - 4" : "col - md - 6"
      }`}
    >
      <div className="dualSection__image">
        <CustomImage
          image={section?.image}
          width={290}
          height={250}
          alt={section?.image?.alternativeText || section.title}
          className=""
        />
      </div>
      <div className="dualSection__textContainer">
        {section.button ? (
          <h3 className="dualSection__title active">
            <CustomLink
              content={section.title}
              url={section.button?.url}
              landing={section.button?.landing_page}
              className="dualSection__title active"
            />
          </h3>
        ) : (
          <h3 className="dualSection__title">{section.title}</h3>
        )}
        {section?.description && (
          <MarkdownView
            markdown={section.description}
            dangerouslySetInnerHTML={{ __html: section.description }}
          />
        )}
      </div>
    </div>
  ))

  return (
    <section className="DualSection container py-5">
      {title && <h2>{title}</h2>}
      {summary && <p className="summary">{summary}</p>}
      <div className={`d-flex flex-column flex-md-row ${title && "pt-4"}`}>
        {listSectionParts}
      </div>
    </section>
  )
}

DualSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
    dualSectionPart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        button: PropTypes.shape({
          content: PropTypes.string,
          url: PropTypes.string,
          landing_page: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
        }),
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          alternativeText: PropTypes.string,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.object.isRequired,
            }),
          }),
        }).isRequired,
      })
    ),
  }),
}
