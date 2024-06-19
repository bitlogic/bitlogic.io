import React from "react"
import "./NavBar.scss"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import AnimatedNavbar from "./AnimatedNavBar/AnimatedNavbar"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import CustomLink from "../CustomLink/CustomLink"

import { useNavbar } from "../../hooks/index"
import { useTheme } from "../../context/themeContext"
// theme images
import moon from "../../images/moon-solid.svg"
import sun from "../../images/sun.svg"

const NavBar = () => {
  const { theme, toggleTheme } = useTheme()
  const navbarData = useNavbar()?.allStrapiLayout?.nodes[0]
  const menuData = navbarData?.menu

  const logoLight = getImage(navbarData?.navbar?.logo?.localFile)
  const logoDark = getImage(navbarData?.navbar?.logoDark?.localFile)
  const navbarButton = navbarData?.navbar?.navButton

  return (
    <>
      <Navbar variant="dark" expand="xl" className="NavBar">
        <Link to="/" className="NavBar__Logo" >
          <GatsbyImage
            image={theme === "dark" && logoDark ? logoDark : logoLight}
            alt={"bitlogic"}
            className="logo"
          />
        </Link>
        <Navbar.Toggle
          className="NavBar__Toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="NavBar__Collapse">
          {/* Menu Links */}
          {menuData && (
            <div className="NavBar_links">
              <AnimatedNavbar
                navbarItems={menuData}
                duration={300}
              />
            </div>
          )}
          <div className="NavBar_Side">
            {navbarButton && (
              <button className="NavBar_Side-contact"
                aria-label={`Ir a ${navbarButton.content}`}
              >
                <CustomLink
                  content={navbarButton.content}
                  url={navbarButton?.url}
                  landing={navbarButton?.landing_page}
                  className=''
                />
              </button>
            )}
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
