import React from "react"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import { useTheme } from "../../context/themeContext"

import moon from '../../images/moon-solid.svg'
import sun from '../../images/sun-solid.svg'

const MENU_LINKS = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "servicios", url: "/servicios" },
  { id: 3, text: "edtech", url: "/edtech" },
  { id: 4, text: "bitway", url: "/bitway" },
  { id: 5, text: "blog", url: "/blog" },
  { id: 6, text: "jobs", url: "/jobs" },
  { id: 7, text: "contacto", url: "/contacto" },
]

const MenuLinks = ({ styleClass }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Nav className="NavBar__List ">
      {MENU_LINKS.map(({ id, text, url }) => (
        <Nav.Item key={id} className="NavBar__Item">
          <Link
            to={url}
            className={`NavBar__Link ${styleClass ? styleClass : ""}`}
            activeClassName="NavBar__Link--active"
          >
            {text}
          </Link>
        </Nav.Item>
      ))}
      <Nav.Item className="NavBar__Item">
        <button className="theme-toggle" onClick={toggleTheme}>
          <img src={theme === "dark" ? moon : sun} alt="theme" width="30" />
        </button>
      </Nav.Item>
    </Nav>
  )
}

export default MenuLinks
