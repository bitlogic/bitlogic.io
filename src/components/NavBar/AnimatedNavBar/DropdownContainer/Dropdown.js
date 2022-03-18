import React from "react"
import "./dropdown.scss"

const Dropdown = ({ sections }) => {
  return (
    <div className="dropdown_elem">
      <div className="dropdown_elem-section" data-first-dropdown-section>
        <ul>
          {sections &&
            sections.map(section => (
              <p className="dropdown_elem-link">
                <a href={section.href}>{section.name}</a>
              </p>
            ))}
        </ul>
      </div>
    </div>
  )
}



export default Dropdown
