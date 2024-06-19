import React from "react"
import "./DualSection.scss"
import MarkdownView from "react-showdown"
import CustomImage from "../CustomImage/CustomImage"
import CustomLink from "../CustomLink/CustomLink"

export default function DualSection({ data }) {
  const dualSectionParts = data?.dualSectionPart
  const listSectionParts = dualSectionParts.map(section => (
    <div
      key={section.id}
      className={`dualSection ${section.length === 3 ? "col - md - 4" : "col - md - 6"
        } my-2 p-md-3 p-xl-4`}
    >
      <div className="dualSection__image">
        <CustomImage image={section?.image}
          width={290}
          height={250}
          alt={section?.image?.alternativeText || section.title}
          className=''
        />
      </div>

      <div className="dualSection__textContainer">
        <h4>{section.title}</h4>
        {section?.description && (
          <div>
            <MarkdownView
              markdown={section.description}
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
          </div>
        )}
        {section.button && (
          <CustomLink
            content={section.button.content}
            url={section.button?.url}
            landing={section.button?.landing_page}
            className=''
          />
        )}
      </div>
    </div>
  ))

  return (
    <div className="container py-3">
      <div className="d-flex flex-column flex-md-row">
        {listSectionParts}
      </div>
    </div>
  )
}
