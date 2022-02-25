import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../FontAwesomeOne/FontAwesomeOne"


const Icon = ({ type, code }) => {
  return (
    <div>
      <FontAwesomeIcon icon={[ type, code ]} />
    </div>
  )
}

export default Icon