import React, { memo } from "react"
import "./dropdown.scss"
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
          className="dropdown_elem-link-inner"
        />
      </div>
      {section?.text && <p className="navItemP">{section.text}</p>}
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

const Dropdown = memo(({ sections, topLevel }) => {
  return (
    <div className="dropdown_elem" style={!sections ? { maxHeight: "0" } : {}}>
      <div className="dropdown_elem-section" data-first-dropdown-section>
        {topLevel && (
          <div
            className="dropdown_elem_topLevel"
            style={{
              borderBottom: "2px solid #808080",
              marginBottom: "15px",
              paddingBottom: "8px",
            }}
          >
            <RenderSection
              section={topLevel}
              className={"dropdown_elem-link-topLevelLink"}
            />
          </div>
        )}
        <div className="dropdown_section">
          {sections?.map(section => (
            <div key={section.id}>
              <RenderSection
                section={section}
                className={"dropdown_elem-link"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

Dropdown.propTypes = {
  topLevel: PropTypes.object,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
}

export default Dropdown
