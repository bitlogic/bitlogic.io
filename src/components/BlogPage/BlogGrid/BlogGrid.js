// src/components/BlogPage/BlogGrid/BlogGrid.jsx
import React from "react"
import PropTypes from "prop-types"
import "./BlogGrid.scss"

const BlogGrid = ({ title, viewAllHref, children }) => (
  <section className="blog__section" data-nosnippet>
    <header className="blog__section-header">
      <h2 className="blog__section-title">{title}</h2>
      {viewAllHref && (
        <a href={viewAllHref} className="blog__view-all">
          Ver todos
        </a>
      )}
    </header>
    <div className="blog__section-articles-grid">
      {children}
    </div>
  </section>
)

BlogGrid.propTypes = {
  title: PropTypes.string.isRequired,
  viewAllHref: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default BlogGrid




