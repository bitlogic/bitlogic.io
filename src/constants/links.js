import React from "react"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"

const MENU_LINKS = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "servicios", url: "/services" },
  { id: 3, text: "edtech", url: "/edTech" },
  { id: 4, text: "bitway", url: "/bitway" },
  { id: 5, text: "blog", url: "/blog" },
  { id: 6, text: "contact", url: "/contact" },
]

const Links = ({ styleClass }) => {
  return (
    <Nav className="NavBar__Item ">
      {MENU_LINKS.map(({ id, text, url }) => (
        <Link
          key={id}
          to={url}
          className={`NavBar__Link ${styleClass ? styleClass : ""}`}
        >
          {text}
        </Link>
      ))}
    </Nav>
  )
}

export default Links
