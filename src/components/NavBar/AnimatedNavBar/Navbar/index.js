import React from "react"
import PropTypes from "prop-types"

const Navbar = ({ children, onMouseLeave }) => {
  return (
    <div
      className="navbar-el"
      onMouseLeave={onMouseLeave}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onMouseLeave();
        }
      }}
      role="button"
      tabIndex={0} // Hace que el elemento sea accesible con el teclado
      aria-label="Navbar container" // Puedes cambiarlo por una descripción más específica si es necesario
    >
      <ul className="navbar-list">{children}</ul>
    </div>
  )
}


Navbar.propTypes = {
  children: PropTypes.array.isRequired,
  onMouseLeave: PropTypes.func,
}

export default Navbar
