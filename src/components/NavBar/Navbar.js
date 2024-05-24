import React from "react"
import "./NavBar.scss"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import AnimatedNavbar from "./AnimatedNavBar/AnimatedNavbar"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { useNavbar, useLandingUrl } from "../../hooks/index"
import { useTheme } from "../../context/themeContext"
// theme images
import moon from "../../images/moon-solid.svg"
import sun from "../../images/sun.svg"

const NavBar = () => {
  const { theme, toggleTheme } = useTheme()
  const navbarData = useNavbar()
  const getUrl = useLandingUrl();

  const logoLight = getImage(
    navbarData.allStrapiLayout?.nodes[0].navbar?.logo?.localFile
  )
  const logoDark = getImage(
    navbarData.allStrapiLayout?.nodes[0].navbar?.logoDark?.localFile
  )

  const navbarButton = navbarData.allStrapiLayout?.nodes[0].navbar?.navButton

  const menuData = navbarData.allStrapiLayout?.nodes[0].navbar?.menu

  return (
    <>
      <Navbar variant="dark" expand="xl" className="NavBar">
        <Link to="/" className="NavBar__Logo" >
          {logoLight && (
            <GatsbyImage
              image={theme === "dark" && logoDark ? logoDark : logoLight}
              alt={logoLight?.alternativeText
                ? `${logoLight.alternativeText}`
                : "Bitlogic - Home"
              }
              className="logo"
              width={120}
              height={35}
            />
          )}
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
                //homeComponents={navbarData.allStrapiHome?.nodes[0].body}
                navbarItems={
                  menuData
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
                      ? getUrl(navbarButton.landing_page.slug)
                      : `${navbarButton.url ? navbarButton.url : ""}`
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
