import React from "react"
import Navbar from "react-bootstrap/Navbar"
import { MenuLinks } from "../../constants"
import logoLight from "../../images/tipologo-azul.png"
import { Link } from "gatsby"
import "./NavBar.scss"

const NavBar = () => {
  return (
    <>
      <Navbar variant="dark" expand="xl" className="NavBar ">
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
          <MenuLinks />
          <div className="NavBar_Side" >
            <button>Let´s Talk</button>
            <p>ES</p>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
