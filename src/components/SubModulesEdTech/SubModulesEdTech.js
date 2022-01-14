import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useEdTechSubmodules } from "../../hooks/index"
import { SubModuleItems } from "../index"
import "./SubmodulesEdTech.scss"
import { useTheme } from "../../context/themeContext"

const SubModulesEdTech = ({ items, variant }) => {
  const data = useEdTechSubmodules()
  const { theme } = useTheme()
  const submodules = data?.submodules?.nodes

  const custom = submodules.find(art => art.strapiId === items.id)
  const { submodule, submoduleItem, title } = custom
  const { description, logo, logoDarkMode,  id } = submodule

  const logoLight = getImage(logo?.localFile)
  const logoDark = getImage(logoDarkMode?.localFile)

  // const logoSubmodule = logo && logoDarkMode (
  //   <GatsbyImage image={getImage(logo.localFile)} alt={`${title}-${id}`} />
  // )

  const classVariant = variant && `${variant}`

  return (
    <div className="Submodules row">
      <div className={`Submodules__image ${classVariant} col-3 col-lg-2`}>
        <GatsbyImage
          image={theme === "dark" && logoDark ? logoDark : logoLight}
          alt={`${title}-${id}`}
        />
      </div>
      <div className="Submodules__text col-9 col-lg-10">
        <h4>{submodule.title}</h4>
        <p>{description}</p>
      </div>
      <SubModuleItems items={submoduleItem} />
    </div>
  )
}

export default SubModulesEdTech
