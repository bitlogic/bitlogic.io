import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useEdTechSubmodules } from "../../hooks/index"
import { SubModuleItems } from "../index"
import "./SubmodulesEdTech.scss"

const SubModulesEdTech = ({ items, variant }) => {
  const data = useEdTechSubmodules()
  const submodules = data?.submodules?.nodes
  console.log("submodules,submodules", submodules)
  const custom = submodules.find(art => art.strapiId === items.id)
  const { submodule, submoduleItem, title } = custom
  const { description, logo, id } = submodule

  console.log("object,CUSTOM", custom)
  const logoSubmodule = logo && (
    <GatsbyImage image={getImage(logo)} alt={`${title}-${id}`} />
  )

  const classVariant = variant && `${variant}`

  return (
    <div className="Submodules row">
      <div className={`Submodules__image ${classVariant} col-3 col-lg-2`}>
        {logoSubmodule}
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
