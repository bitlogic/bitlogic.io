import React from "react"
import ButtonLink from "../ButtonLink/ButtonLink"
import "./DualSection.scss"
import MarkdownView from "react-showdown"

export default function DualSection({ data }) {
  const dualSectionParts = data?.dualSectionPart
  const listSectionParts = dualSectionParts.map(section => (
    <div
      key={section.id}
      className={`dualSection ${section.length === 3 ? "col - md - 4" : "col - md - 6"
        } my-2 p-md-3 p-xl-4`}
    >
      <div className="dualSection__image">
        <img src={section.image.url} alt="naturaleza" />
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
          <button className="px-4">
            <ButtonLink button={section.button} />
          </button>
        )}
      </div>
    </div>
  ))

  return (
    <div className="container py-3" id={data.strapi_component + "-" + data.id}>
      <div className="d-flex flex-column flex-md-row">{listSectionParts}</div>
    </div>
  )
}
