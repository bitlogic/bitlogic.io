import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { useLandingUrl, useNavbar } from "../../hooks/index"
import "./Navigation.scss"
import  FaAngleDown from "react-icons/lib/fa/angle-down"
import PropTypes from "prop-types"

const Navigation = ({ data, landing }) => {
  const getUrl = useLandingUrl()
  const landings = useNavbar()?.allStrapiLandingPage?.nodes

  const [showSiblings, setShowSiblings] = useState(false)
  const [showRelated, setShowRelated] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const [isBottom, setIsBottom] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navRef = useRef(null)
  const placeholderRef = useRef(null)
  const wrapperRef = landing.ref

  useEffect(() => {
    const handleScroll = () => {
      const navRect = navRef.current.getBoundingClientRect()
      const placeholderTop = placeholderRef.current.getBoundingClientRect().top
      const wrapperRect = wrapperRef.current.getBoundingClientRect()
      const currentScrollY = window.scrollY
      const scrollingUp = currentScrollY < lastScrollY
      setLastScrollY(currentScrollY)

      if (wrapperRect.bottom <= navRect.bottom && !isBottom) {
        setIsFixed(false)
        setIsBottom(true)
      } else if (scrollingUp && isBottom) {
        setIsBottom(false)
        setIsFixed(true)
      } else if (navRect.top <= 0 && !isFixed && !isBottom) {
        setIsFixed(true)
      } else if (placeholderTop > 0 && isFixed) {
        setIsFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isFixed, isBottom, wrapperRef, lastScrollY])

  if (!data) return null

  const { title, showSiblingPages, relatedPages } = data

  const siblingPages = landings
    .filter(
      node =>
        node?.parent_page?.slug === landing?.parent_page?.slug &&
        node.slug !== landing.slug
    )
    .map(page => {
      return (
        <Link
          key={page.slug}
          to={getUrl(page.slug)}
          className={`Navigation__item ${
            showSiblings ? "expanded" : "collapsed"
          } `}
        >
          {page.name}
        </Link>
      )
    })

  const pages = relatedPages?.pages?.map(page => (
    <Link
      className={`Navigation__item ${showRelated ? "expanded" : "collapsed"}`}
      key={page.id}
      to={page.landing_page ? getUrl(page?.landing_page?.slug) : page.url}
    >
      {page.content}
    </Link>
  ))

  return (
    <>
      <div ref={placeholderRef} className="reference" />
      <aside
        ref={navRef}
        id="navigation-wrapper"
        className={`Navigation__wrapper d-flex flex-column ${
          isFixed ? "scrolled" : ""
        } ${isBottom ? "at-bottom" : ""}`}
      >
        <div className="Navigation container">
          {title && showSiblingPages && (
            <button onClick={() => setShowSiblings(!showSiblings)}>
              <h3>
                {title}
                <FaAngleDown
                  className={`icon ${showSiblings ? "rotate" : ""}`}
                />
              </h3>
            </button>
          )}
          {showSiblingPages && (
            <div
              className={`Navigation__siblingPages ${
                showSiblings ? "expanded" : "collapsed"
              }`}
            >
              <p className={`Navigation__item current expanded`}>
                {landing.name}
              </p>
              {siblingPages}
            </div>
          )}
          {relatedPages?.pages?.length > 0 && (
            <>
              <button onClick={() => setShowRelated(!showRelated)}>
                <h3>
                  {relatedPages.title}
                  <FaAngleDown
                    className={`icon ${showRelated ? "rotate" : ""}`}
                  />
                </h3>
              </button>
              <div
                className={`Navigation__relatedPages ${
                  showRelated ? "expanded" : "collapsed"
                }`}
              >
                {pages}
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}

Navigation.propTypes = {
  landing: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    parent_page: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    ref: PropTypes.shape({
      current: PropTypes.shape({
        getBoundingClientRect: PropTypes.func,
      }),
    }).isRequired,
  }),
  data: PropTypes.shape({
    title: PropTypes.string,
    showSiblingPages: PropTypes.bool,
    relatedPages: PropTypes.shape({
      title: PropTypes.string.isRequired,
      pages: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          content: PropTypes.string.isRequired,
          url: PropTypes.string,
          landing_page: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }),
}

export default Navigation
