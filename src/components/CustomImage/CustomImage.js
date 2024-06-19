import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types"

const CustomImage = ({ image, className, alt, width, height }) => {

  if (!image) return null;

  const { url, localFile } = image;

  if (localFile) {
    const localImage = getImage(localFile);

    return (
      <GatsbyImage loading="lazy"
        image={localImage}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    )
  }

  return (
    <img loading="lazy"
      src={url}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  )
}

CustomImage.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
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