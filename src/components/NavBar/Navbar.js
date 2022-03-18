import React from "react"
import "./NavBar.scss"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import AnimatedNavbar from "./AnimatedNavBar/AnimatedNavbar"

import { useNavbar } from "../../hooks/index"

// default logo
import logoLight from "../../images/tipologo-azul.png"

import { useTheme } from "../../context/themeContext"
// theme images
import moon from "../../images/moon-solid.svg"
import sun from "../../images/sun.svg"
const NavBar = () => {
  const { theme, toggleTheme } = useTheme()
  const navbarData = useNavbar()
  return (
    <>
      <Navbar variant="dark" expand="xl" className="NavBar">
        <Link to="/">
          <img
            src={logoLight}
            alt="Logo Bitlogic"
            className="d-inline-block align-top NavBar__Logo"
          />
        </Link>
        <Navbar.Toggle
          className="NavBar__Toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="NavBar__Collapse">
          {/* Menu Links */}
          {navbarData && (
            <AnimatedNavbar
              homeComponents={navbarData.allStrapiHome?.nodes[0].body}
              landingComponents={navbarData.allStrapiLandingPage?.nodes}
              navbarItems={
                navbarData.allStrapiLayout?.nodes[0].navbar.navbarItem
              }
              duration={300}
            />
          )}
          <div className="NavBar_Side">
            <button className="NavBar_Side-contact">Let´s Talk</button>
            <p>ES</p>
            <button className="theme-toggle" onClick={toggleTheme}>
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
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
