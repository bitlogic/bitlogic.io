import { Link } from "gatsby"
import React from "react"

const ButtonLink = ({ button }) => {
  let internal = ""
  if (button.landing_page) internal = "/" + button.landing_page.slug
  else if (button.singleType) internal = "/" + button.singleType

  if (internal) return <Link to={internal}>{button.content}</Link>
  else return <a href={button.url} target="_blank" rel="noreferrer">{button.content}</a>
}

export default ButtonLink
