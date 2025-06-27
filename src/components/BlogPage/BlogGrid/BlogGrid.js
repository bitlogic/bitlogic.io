import React from "react"
import "./BlogGrid.scss"
import PropTypes from "prop-types"

const BlogGrid = ({ title, children }) => {
  return (
    <div className="grid__container" data-nosnippet>
      <h2>{title}</h2>
      <div className="grid__content">
        {children}
      </div>
    </div>
  )
}

BlogGrid.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
}

export default BlogGrid


