import React from "react"
import "./Sites.scss"
import CustomImage from "../../CustomImage/CustomImage"
import PropTypes from "prop-types"

const Sites = ({ sitesData }) => {
  if (!sitesData) return null

  const { title, websites } = sitesData

  if (!websites) return null

  const websitesItems = websites.map(website => {
    const path = website.url.startsWith("https")
      ? website.url
      : `https://${website.url}`

    return (
      <div key={website.id}>
        <a
          aria-label={`Visita nuestro sitio web: ${path}`}
          href={path}
          onClick={e => {
            e.preventDefault()
            window.location.href = path
          }}
        >
          <CustomImage
            image={website?.icon}
            alt={website?.icon?.alternativeText || "Website Icon"}
            width={30}
            height={15}
            className=""
          />
          {website?.name || ""}
        </a>
      </div>
    )
  })

  return (
    <div className="Footer_sites">
      {title && <h6>{title}</h6>}
      <div className="Footer__sites__items">{websitesItems}</div>
    </div>
  )
}

Sites.propTypes = {
  sitesData: PropTypes.shape({
    title: PropTypes.string,
    websites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
        name: PropTypes.string,
        icon: PropTypes.shape({
          url: PropTypes.string,
          alternativeText: PropTypes.string,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.object.isRequired,
            }),
          }),
        }),
      })
    ),
  }),
}

export default Sites
