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
  const callToAction = useBlog()?.allStrapiBlogPage?.callToAction;

  return (
    <div className="container featured pb-3">
      <h2>{data.title}</h2>
      <h6 className="px-md-3">{data.subtitle}</h6>

      <div className="featured-blogs">
        {data.articles
          .sort(compareDates)
          .slice(0, 3)
          .map((item, idx) => (
            <BlogArticle
              key={idx}
              image={item.image}
              title={item.title}
              summary={item.summary}
              slug={"/blog/" + item.slug}
              text={callToAction}
            />
          ))}
      </div>
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
        }).isRequired
      })
    )
  })
}

export default FeaturedBlogs
