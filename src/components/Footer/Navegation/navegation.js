import React from "react"
import CustomLink from "../../CustomLink/CustomLink"
import "./navegation.scss"
import PropTypes from "prop-types"

export default function Navegation({ title, items }) {
  if (!items) return null

  const navegationItems = items?.map((navItem, index) => {
    return (
      <li className="mb-2" key={`${navItem.label}-${index}`}>
        <CustomLink
          content={navItem.label}
          url={
            navItem?.url ||
            (navItem?.singleType ? `/${navItem.singleType}/` : "")
          }
          landing={navItem?.landing}
          className=""
        />
      </li>
    )
  })

  return (
    <div className="Footer__navigation">
      <h6>{title}</h6>
      <ul className="Footer__navigation__items">{navegationItems}</ul>
    </div>
  )
}

Navegation.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      singleType: PropTypes.string,
      landing: PropTypes.shape({
        slug: PropTypes.string,
      }),
    })
  ),
}
