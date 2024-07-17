import React from "react"
import "./featuredBlogs.scss"
import BlogArticle from "../BlogPage/BlogArticle/BlogArticle"
import { useBlog } from "../../hooks"
import PropTypes from "prop-types"

const compareDates = (a, b) => {
  if (a?.published_at < b?.published_at) {
    return 1
  } else if (a?.published_at > b?.published_at) {
    return -1
  } else {
    return 0
  }
}

const FeaturedBlogs = ({ data }) => {
  const { title, subtitle, articles } = data;
  const callToAction = useBlog()?.allStrapiBlogPage?.callToActionArticle;

  return (
    <div className="container featured pb-3">
      {title && <h2>{title}</h2>}
      {subtitle && <h3 className="px-md-3">{subtitle}</h3>}
      {articles?.length > 0 && (
        <div className="featured-blogs">
          {articles
            .sort(compareDates)
            .slice(0, 3)
            .map((item) => (
              <BlogArticle
                key={item.id}
                image={item?.image || item?.imagePage}
                title={item.title}
                summary={item.summary}
                slug={"/blog/" + item.slug}
                text={callToAction}
              />
            ))}
        </div>
      )}
    </div>
  )
}

FeaturedBlogs.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        text: PropTypes.string,
        image: PropTypes.shape({
          alternativeText: PropTypes.string,
          url: PropTypes.string.isRequired,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.object.isRequired
            })
          })
        }),
        imagePage: PropTypes.shape({
          alternativeText: PropTypes.string,
          url: PropTypes.string.isRequired,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.object.isRequired
            })
          })
        }),
      })
    )
  })
}

export default FeaturedBlogs
