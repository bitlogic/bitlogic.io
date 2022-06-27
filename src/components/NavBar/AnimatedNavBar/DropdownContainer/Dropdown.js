import { Link } from "gatsby"
import React from "react"
import "./dropdown.scss"

const Dropdown = ({ sections, slug }) => {
  return (
    <div className="dropdown_elem" style={!sections ? { maxHeight: "0" } : {}}>
      <div className="dropdown_elem-section" data-first-dropdown-section>
        <ul>
          {sections &&
            sections.map(section =>
              (section.strapi_component === "components.selected-grid") ? (
                section?.items.map(item =>(
                  item.navTitle ? (
                    <p className="dropdown_elem-link">
                      <Link
                        to={"/" + (item.landing_page.slug || "")}
                        state={{ component: section.id }}
                        className="dropdown_elem-link-inner"
                      >
                        {item.navTitle}
                      </Link>
                    </p>
                  ) : ( null )
                ))
              ) : (
                section?.navTitle ? (
                  <p className="dropdown_elem-link">
                    <Link
                      to={"/" + (slug || "")}
                      state={{ component: section.strapi_component + '-' + section.id }}
                      className="dropdown_elem-link-inner"
                    >
                      {section.navTitle}
                    </Link>
                  </p>
                ) : null
              )
            )}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
