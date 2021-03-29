import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Links from "../../constants/links"
import logo from "../../images/logoprincipal.png"
import { Link } from "gatsby"
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" className="NavBar ">
        <Link to="/">
          <img
            src={logo}
            width={143}
            // quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="logo bitlogic"
            style={{ marginLeft: `58px`, marginBottom: "0rem" }}
            className="d-inline-block align-top"
          />
        </Link>
        <Navbar.Toggle
          className="NavBar__Toggle "
          aria-controls=" basic-navbar-nav"
        />
        <Navbar.Collapse id=" basic-navbar-nav" className="NavBar__Collapse">
          {/* Menu Links */}
          <Links />
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
