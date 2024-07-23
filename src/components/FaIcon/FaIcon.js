import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../FontAwesomeOne/FontAwesomeOne"
import PropTypes from 'prop-types'

const FaIcon = ({ type, code }) => {
  return (
    <div>
      <FontAwesomeIcon icon={[type, code]} />
    </div>
  )
}

FaIcon.protoType = {
  type: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
}

export default FaIcon