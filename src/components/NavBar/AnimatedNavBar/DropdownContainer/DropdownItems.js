import React, { memo, useState, useEffect } from "react";
import "./dropdownItems.scss";
import CustomImage from "../../../CustomImage/CustomImage";
import CustomLink from "../../../CustomLink/CustomLink";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa";

const RenderSection = ({ section, className, isOpen, toggleSubLandingPages, isMobileView }) => {
  const { icon, label, url, landing_page, sub_landing_pages = [] } = section || {};
  const hasSubLandingPages = sub_landing_pages.length > 0;

  return (
    <>
      <div className={className}>
        <CustomImage
          image={icon}
          alt={icon?.alternativeText || "NavLink icon"}
          className="navbarItemIcon"
          width={28}
          height={28}
        />
        <CustomLink
          content={label}
          url={url}
          landing={landing_page}
          className="dropdownItem_link-inner"
        />
        {hasSubLandingPages && (
          <FaAngleDown
            className={`dropdownItem_icon ${isOpen ? "open" : ""}`}
            onClick={() => toggleSubLandingPages(section.id)}
          />
        )}
      </div>
      {section?.text && <p className="navItemP">{section.text}</p>}

      {(hasSubLandingPages && (isOpen || !isMobileView)) && (
        <ul className={`subLandingPages ${sub_landing_pages.length > 5 ? "two-column-list" : ""}`}>
          {sub_landing_pages.map(({ id, name, slug }) => (
            <li key={id} className="subLandingPages-item">
              <CustomLink
                content={name}
                url={`/${slug}`}
                className="dropdownItem_link-subLanding"
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

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
  isOpen: PropTypes.bool.isRequired,
  toggleSubLandingPages: PropTypes.func.isRequired,
  isMobileView: PropTypes.bool.isRequired,
};

const DropdownItems = memo(({ sections, topLevel }) => {
  const [openSectionId, setOpenSectionId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1200);

  // Actualizar el estado `isMobileView` según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSubLandingPages = (sectionId) => {
    if (isMobileView) {
      setOpenSectionId((prevId) => (prevId === sectionId ? null : sectionId));
    }
  };

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
              isOpen={openSectionId === topLevel.id}
              toggleSubLandingPages={toggleSubLandingPages}
              isMobileView={isMobileView}
            />
          </div>
        )}
        <div className="dropdownItem_content">
          {sections?.map((section) => (
            <div key={section.id} className="dropdownItem">
              <RenderSection
                section={section}
                className={"dropdownItem_link"}
                isOpen={openSectionId === section.id}
                toggleSubLandingPages={toggleSubLandingPages}
                isMobileView={isMobileView}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

DropdownItems.propTypes = {
  topLevel: PropTypes.object,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default DropdownItems;
