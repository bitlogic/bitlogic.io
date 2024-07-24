import React from "react"
import FaIcon from "../../FaIcon/FaIcon"
import "./contactData.scss"
import CustomLink from "../../CustomLink/CustomLink"
import PropTypes from "prop-types"

export default function ContactData({ contactData, internalLink, navButton }) {
  if (!contactData) return null

  const contact = contactData?.iconText.map(item => {
    return (
      <div className="icon-text d-flex" key={item.id}>
        <FaIcon type={item.icon.type} code={item.icon.code} />
        {item.name}
      </div>
    )
  })

  return (
    <div className="Footer__contactData">
      <h6>{contactData?.title}</h6>
      {contactData?.iconText?.length > 0 && (
        <div className="Footer__contactData__contact">{contact}</div>
      )}
      {navButton && internalLink && (
        <CustomLink
          content={internalLink?.name}
          url={navButton?.url}
          landing={navButton?.landing_page}
          className="Footer__contactData__link"
        />
      )}
    </div>
  )
}

ContactData.propTypes = {
  contactData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    iconText: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        icon: PropTypes.shape({
          type: PropTypes.string.isRequired,
          code: PropTypes.string.isRequired,
        }),
      })
    ),
  }),
  internalLink: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  navButton: PropTypes.shape({
    content: PropTypes.string,
    url: PropTypes.string,
    landing_page: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}
