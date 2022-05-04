import React from "react"
import "./NavBar.scss"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import AnimatedNavbar from "./AnimatedNavBar/AnimatedNavbar"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { useNavbar } from "../../hooks/index"
import menusvg from '../../images/menu.svg'
import { useTheme } from "../../context/themeContext"
// theme images
import moon from "../../images/moon-solid.svg"
import sun from "../../images/sun.svg"

const NavBar = () => {
  const { theme, toggleTheme } = useTheme()
  const navbarData = useNavbar()

  const logoLight = getImage(
    navbarData.allStrapiLayout?.nodes[0].navbar?.logo?.localFile
  )
  const logoDark = getImage(
    navbarData.allStrapiLayout?.nodes[0].navbar?.logoDark?.localFile
  )

  const navbarButton = navbarData.allStrapiLayout?.nodes[0].navbar?.navButton

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
          {navbarData && (
            <div className="NavBar_links">
              <AnimatedNavbar
                homeComponents={navbarData.allStrapiHome?.nodes[0].body}
                landingComponents={navbarData.allStrapiLandingPage?.nodes}
                navbarItems={
                  navbarData.allStrapiLayout?.nodes[0].navbar?.navbarItem
                }
                duration={300}
              />
            </div>
          )}
          <div className="NavBar_Side">
            {navbarButton && (
              <button className="NavBar_Side-contact">
                <Link
                  to={
                    navbarButton.landing_page
                      ? "/" + navbarButton.landing_page.slug
                      : ""
                  }
                >
                  {navbarButton.content}
                </Link>
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
