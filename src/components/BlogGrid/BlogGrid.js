import React from 'react'

import './BlogGrid.scss'

const BlogGrid = ({title, children}) => {
  return (
    <div className="grid__container">
       <h3>{title}</h3>
       <div className="grid__content">
          {children}
       </div>
    </div>
    )
}

export default BlogGrid