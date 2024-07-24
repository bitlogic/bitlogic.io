import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import FaIcon from "../../FaIcon/FaIcon"
import "./socialLinks.scss"
import PropTypes from "prop-types"

export default function SocialLinks({ image, socialMedia }) {
  const logo = getImage(image?.localFile?.childImageSharp?.gatsbyImageData)

  const socialMediaItems = socialMedia?.map(item => {
    return (
      <a
        key={item.id}
        href={item.url}
        target="_blank"
        className={`btn-social m-2 btn-social-icon btn-${item.icon?.name}`}
        rel="noreferrer"
        aria-label={`Link externo a ${item?.name}`}
      >
        <FaIcon type={item.icon?.type} code={item.icon?.code} />
      </a>
    )
  })

  return (
    <div className="Footer__socialMedia d-flex flex-column">
      {socialMedia?.length > 0 && (
        <div className="Footer__socialMedia__Links d-flex justify-content-center justify-content-sm-start">
          {socialMediaItems}
        </div>
      )}

      {logo && (
        <div className="Footer__socialMedia__Logo text-center">
          <Link to="/">
            <GatsbyImage
              image={logo}
              alt={image?.alternativeText || "Logo Bitlogic"}
            />
          </Link>
        </div>
      )}
    </div>
  )
}

SocialLinks.propTypes = {
  image: PropTypes.shape({
    alternativeText: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }),
    }),
  }),
  socialMedia: PropTypes.arrayOf(
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
}
