import { Link } from "gatsby"
import React from "react"
import "./dropdown.scss"

const Dropdown = ({ sections }) => {
  return (
    <div className="dropdown_elem" style={!sections ? {maxHeight: "0"} : {}}>
      <div className="dropdown_elem-section" data-first-dropdown-section>
        <ul>
          {sections &&
            sections.map(section => (
              <p className="dropdown_elem-link">
                <Link
                  to={"/" + (section.slug || "")}
                  state={{ component: section.id }}
                  className="dropdown_elem-link-inner"
                >
                  {section.name}
                </Link>
              </p>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
