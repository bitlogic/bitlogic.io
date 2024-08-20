import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import "./navbarItems.scss"
import { FaAngleDown } from "react-icons/fa";

const NavbarItem = ({ title, children, index, to, isDropdown, ...props }) => {
  const onMouseEnter = () => {
    props.onMouseEnter(index)
  }

  return (
    <li className="navbar_item">
      <Link
        activeClassName="navbar_item-title-active"
        to={to}
        className="navbar_item-title navbar_item-title-active"
        onMouseEnter={onMouseEnter}
        onFocus={onMouseEnter}
      >
        {title}
        {isDropdown && (
          <FaAngleDown />
        )}
      </Link>
      <div className="navbar_item-dropdown_container">{children}</div>
    </li>
  )
}

NavbarItem.propTypes = {
  title: PropTypes.string,
  children: (PropTypes.bool || PropTypes.object),
  index: PropTypes.number.isRequired,
  to: PropTypes.string,
  isDropdown: PropTypes.bool,
  onMouseEnter: PropTypes.func.isRequired
}

export default NavbarItem
