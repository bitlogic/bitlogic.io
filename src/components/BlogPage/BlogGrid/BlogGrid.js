import React from 'react'
import './BlogGrid.scss'
import Pagination from '../../Pagination/Pagination'

const BlogGrid = ({ title, children }) => {
  return (
    <div className="grid__container">
      <h5>{title}</h5>
      {/* <div className="grid__content">{children}</div> */}
      <Pagination initialState={true} postPerPage="3" posts={children} />
    </div>
  )
}

export default BlogGrid