import React from "react"

const Navbar = ({ children, onMouseLeave }) => {
  return (
    <button className="navbar-el" onMouseLeave={onMouseLeave}>
      <ul className="navbar-list">{children}</ul>
    </button>
  )
}

export default Navbar
