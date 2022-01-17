import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Markdown from "react-markdown"
import { SubModulesEdTech } from "../index"
import "./Cards.scss"
import { useTheme } from "../../context/themeContext"

const Cards = ({ tech }) => {
  const { theme } = useTheme()

  const subModules = tech?.edTechSubmodules?.ed_tech_submodules.map(submod => (
    <p
      key={submod.id}
      className={
        submod.edTechType === "SIS" ? "no-border" : "no-border no-mobile"
      }
    >
      {submod.title}
    </p>
  ))

  const submoduleItems = tech?.edTechSubmodules?.ed_tech_submodules.map(
    submod =>
      submod.edTechType === "SIS" ? null : (
        <SubModulesEdTech
          key={submod.id}
          items={submod}
          variant={submod.edTechType == "DDE" && "dataDriven"}
        />
      )
  )

  const icon = getImage(tech?.icon?.localFile)
  const iconDark = getImage(tech?.iconDarkMode?.localFile)

  return (
    <>
      <div className=" Cards container-fluid ">
        <div className="Cards__icon ">
          <GatsbyImage image={theme === "dark" && iconDark ? iconDark : icon} alt={tech.title} />
        </div>
        <div className="Cards__body col-12">
          <div className="Cards__title col-lg-8">{tech.title}</div>

          <div className="Cards__container">
            <div className="row">
              <div className="Cards__block col-12 col-lg-9">
                <div className="Cards__description">
                  <Markdown escapeHtml={true}>{tech.content}</Markdown>
                </div>
              </div>
              <div className="Cards__submodules col-12 col-lg-3">
                <h4 className="Cards__submodules__title ">Submódulos</h4>
                <div className="Cards__submodules__items Cards__submodules__items--titles">
                  {subModules}
                </div>
              </div>
            </div>
          </div>
          <div className="Cards__container--submodules">
            <div className="Cards__submodules Cards__submodules--items col-12 col-lg-10">
              <div className="Cards__submodules__items "> {submoduleItems}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
