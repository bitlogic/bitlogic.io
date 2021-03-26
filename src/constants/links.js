import React from "react"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"

const MENU_LINKS = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "servicios", url: "/services/" },
  { id: 3, text: "edtech", url: "/edTech/" },
  { id: 4, text: "bitway", url: "/bitway/" },
  { id: 5, text: "blog", url: "/blog/" },
  { id: 5, text: "contact", url: "/contacto/" },
]

export default function links({ styleClass }) {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
  )
}
