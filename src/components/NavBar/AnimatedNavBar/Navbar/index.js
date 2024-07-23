import React from "react"
import PropTypes from "prop-types"

const Navbar = ({ children, onMouseLeave }) => {
  return (
    <button className="navbar-el" onMouseLeave={onMouseLeave}>
      <ul className="navbar-list">{children}</ul>
    </button>
  )
}

Navbar.propTypes = {
  children: PropTypes.array.isRequired,
  onMouseLeave: PropTypes.func
}

export default Navbar
