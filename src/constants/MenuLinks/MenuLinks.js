import React from "react"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import { useTheme } from "../../context/themeContext"

const MENU_LINKS = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "servicios", url: "/servicios" },
  { id: 3, text: "edtech", url: "/edtech" },
  { id: 4, text: "bitway", url: "/bitway" },
  { id: 5, text: "blog", url: "/blog" },
  { id: 6, text: "contacto", url: "/contacto" },
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
      <button onClick={toggleTheme} className="theme-toggle NavBar__Link">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="adjust"
          class="svg-inline--fa fa-adjust fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill={theme === 'dark' ? "white" : "black"}
            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
          ></path>
        </svg>
      </button>
      </Nav.Item>
    </Nav>
  )
}

export default MenuLinks
