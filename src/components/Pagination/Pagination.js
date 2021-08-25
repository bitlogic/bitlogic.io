import React, { useState } from "react"
import { Link } from "gatsby"
import "./Pagination.scss"

const Pagination = ({ posts, postPerPage, inicialState }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(`${postPerPage}`)
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const indexOfLastPost = inicialState
    ? 1 * postsPerPage
    : currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <div className="grid__content">{currentPosts}</div>
      <nav>
        <ul className="Pagination">
          {pageNumbers.map(number => (
            <li key={number} className="Pagination__item">
              {number === currentPage ? (
                <Link
                  onClick={() => paginate(number)}
                  to="#Articles"
                  className={`Pagination__link active-page`}
                >
                  {number}
                </Link>
              ) : (
                <Link
                  onClick={() => paginate(number)}
                  to="#Articles"
                  className={`Pagination__link `}
                >
                  {number}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Pagination
