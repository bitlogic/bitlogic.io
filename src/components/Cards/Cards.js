import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Markdown from "react-markdown"
import { SubModulesEdTech } from "../index"
import "./Cards.scss"

const Cards = ({ tech }) => {
  const subModules = tech?.edTechSubmodules?.ed_tech_submodules.map(submod =>
    submod.edTechType === "SIS" ? (
      <p key={submod.id} className="no-border">
        {submod.title}
      </p>
    ) : submod.edTechType == "DDE" ? (
      <SubModulesEdTech key={submod.id} items={submod} variant={"dataDriven"} />
    ) : (
      <SubModulesEdTech key={submod.id} items={submod} />
    )
  )

  const icon = getImage(tech?.icon)

  return (
    <>
      <div className=" Cards container px-4">
        <div className="Cards__icon ">
          <GatsbyImage image={icon} alt={tech.title} />
        </div>
        <div className="Cards__body col-12">
          <div className="Cards__title col-md-9">{tech.title}</div>

          <div className="Cards__container">
            <div className="row">
              <div className="Cards__block col-12 col-md-9">
                <div className="Cards__description">
                  <Markdown escapeHtml={true}>{tech.content}</Markdown>
                </div>
              </div>
              <div className="Cards__submodules col-12 col-md-3">
                <h4 className="Cards__submodules__title ">Submódulos</h4>
                <div className="Cards__submodules__items ">{subModules}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
