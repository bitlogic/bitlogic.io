import React, { memo } from "react"
import "./dropdownItems.scss"
import CustomImage from "../../../CustomImage/CustomImage"
import CustomLink from "../../../CustomLink/CustomLink"
import PropTypes from "prop-types"

const RenderSection = ({ section, className }) => {
  return (
    <>
      <div className={className}>
        <CustomImage
          image={section?.icon}
          alt={section?.icon?.alternativeText || "NavLink icon"}
          className="navbarItemIcon"
          width={28}
          height={28}
        />
        <CustomLink
          content={section.label}
          url={section?.url}
          landing={section?.landing_page}
          className="dropdownItem_link-inner"
        />
      </div>
      {section?.text && <p className="navItemP">{section.text}</p>}
      {section?.sub_landing_pages && section.sub_landing_pages.length > 0 && (
        <ul className="subLandingPages">
          {section.sub_landing_pages.map(subItem => (
            <li key={subItem.id}>
              <CustomLink
                content={subItem.name}
                url={`/${subItem.slug}`}
                className="dropdownItem_link-subLanding"
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

RenderSection.propTypes = {
  className: PropTypes.string,
  section: PropTypes.shape({
    label: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    landing_page: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    sub_landing_pages: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    icon: PropTypes.shape({
      url: PropTypes.string,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.object.isRequired,
        }),
      }),
    }),
  }),
}

const DropdownItems = memo(({ sections, topLevel }) => {
    return (
      <div className="dropdownItem_container" style={!sections ? { maxHeight: "0" } : {}}>
        <div className="dropdownItem_section" data-first-dropdown-section>
          {topLevel && (
            <div 
              className="dropdownItem_topLevel"
              style={{
                marginRight: "15px", // Espacio entre topLevel y dropdown
                paddingBottom: "8px",
              }}
            >
              <RenderSection
                section={topLevel}
                className={"dropdownItem_link-topLevel"}
              />
            </div>
          )}
          <div className="dropdownItem_content">
            {sections?.map(section => (
              <div key={section.id} className="dropdownItem">
                <RenderSection
                  section={section}
                  className={"dropdownItem_link"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  })
  
DropdownItems.propTypes = {
  topLevel: PropTypes.object,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
}

export default DropdownItems
