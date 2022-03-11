import React from "react"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import { useTheme } from "../../context/themeContext"

import moon from "../../images/moon-solid.svg"
import sun from "../../images/sun-icon-1.png"

const MENU_LINKS = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "servicios", url: "/services" },
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
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          style={{ margin: theme === "dark" ? "0 5px 0 0" : "" }}
        >
          {theme === "dark" ? (
            <img
              src={moon}
              className="theme-toggle-moon"
              alt="theme"
              width="20"
            />
          ) : (
            <img
              className="theme-toggle-sun"
              src={sun}
              alt="theme"
              width="25"
            />
          )}
        </button>
      </Nav.Item>
    </Nav>
  )
}

export default MenuLinks
