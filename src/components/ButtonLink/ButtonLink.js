import { Link } from "gatsby"
import React from "react"
import PropTypes from 'prop-types'
import useLandingUrl from "../../hooks/useLandingUrl"

const ButtonLink = ({ button }) => {
  const getUrl = useLandingUrl()
  let internal = ""
  if (!button) return null
  if (button?.landing_page) internal = getUrl(button.landing_page.slug)
  else if (button?.singleType) internal = "/" + button.singleType

  if (internal) return <Link to={internal}>{button.content}</Link>

  return (
    <a href={button?.url}
      target={button.url?.startsWith('http') && "_blank"}
      rel={button.url?.startsWith('http') && "noreferrer noopener"}
    >
      {button.content}
    </a>)
}

ButtonLink.propTypes = {
  button: PropTypes.shape({
    singleType: PropTypes.string,
    url: PropTypes.shape({
      startsWith: PropTypes.string
    }),
    content: PropTypes.string.isRequired,
    landing_page: PropTypes.shape({
      slug: PropTypes.string.isRequired
    })
  }).isRequired
}

export default ButtonLink
