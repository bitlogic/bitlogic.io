import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faSpotify,
  faXTwitter, 
} from "@fortawesome/free-brands-svg-icons"
import PropTypes from "prop-types"

const iconMap = {
  "fa-envelope": faEnvelope,
  "fa-location-dot": faLocationDot,
  "fa-linkedin": faLinkedin,
  "fa-x-twitter": faXTwitter, 
  "fa-instagram": faInstagram,
  "fa-youtube": faYoutube,
  "fa-spotify": faSpotify,
}

const FaIcon = ({ type, code }) => {
  const normalizedCode = code?.toLowerCase()
  const icon = iconMap[normalizedCode]

  if (!icon) {
    console.warn(`Icono no encontrado: type=${type}, code=${code}`)
    return null
  }

  return <FontAwesomeIcon icon={icon} />
}

FaIcon.propTypes = {
  type: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default FaIcon
