import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import "./SubModuleItem.scss"

const SubModuleItems = ({ items }) => {
  const submoduleItem = items?.map(item => (
    <div key={item.id} className="SubmoduleItem row">
      <div className="SubmoduleItem__image col-3 col-lg-2">
        <GatsbyImage image={getImage(item.icon)} alt={`${item.id}`} />
      </div>
      <div className="SubmoduleItem__text col-9 col-lg-10">
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </div>
  ))

  return <div>{submoduleItem}</div>
}
export default SubModuleItems
