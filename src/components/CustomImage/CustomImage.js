import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types"

const CustomImage = ({ image, className, alt }) => {

  if (!image) return null;

  const { url, localFile } = image;

  if (localFile) {
    const localImage = getImage(localFile);

    return (
      <GatsbyImage
        image={localImage}
        alt={alt}
        className={className}
      />
    )
  }

  return (
    <img src={url}
      alt={alt}
      className={className}
    />
  )
}

CustomImage.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired
      })
    })
  })
}

export default CustomImage;