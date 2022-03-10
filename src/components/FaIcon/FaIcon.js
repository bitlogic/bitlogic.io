import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../FontAwesomeOne/FontAwesomeOne"


const FaIcon = ({ type, code }) => {
  return (
    <div>
      <FontAwesomeIcon icon={[type, code]} />
    </div>
  )
}

export default FaIcon