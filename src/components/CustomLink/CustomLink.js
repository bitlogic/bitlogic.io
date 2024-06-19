import React from "react";
import { useLandingUrl } from "../../hooks";
import { Link } from "gatsby";
import PropTypes from "prop-types"

const CustomLink = ({ content, url, landing, className }) => {
  const getUrl = useLandingUrl();

  if (!url && !landing) return null

  if (landing) {
    return (
      <Link
        className={className}
        aria-label={`Ir a ${content}`}
        to={getUrl(landing.slug)}
      >
        {content}
      </Link>
    )
  }

  if (url?.startsWith('http')) {
    return (
      <a href={url}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label="External Link"
      >
        {content}
      </a>
    )
  }

  return (
    <a
      href={url}
      className={className}
      aria-label={`Ir a ${content}`}
    >
      {content}
    </a>
  )
}


CustomLink.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string,
  landing: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }),
  className: PropTypes.string
}

export default CustomLink;