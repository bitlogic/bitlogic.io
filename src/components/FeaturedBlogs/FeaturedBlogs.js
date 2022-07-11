import React from "react"

import "./featuredBlogs.scss"
import BlogArticle from "../BlogPage/BlogArticle/BlogArticle"

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
  return (
    <div
      className="container featured pb-3"
      id={data.strapi_component + "-" + data.id}
    >
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
              text="Ver más"
            />
          ))}
      </div>
    </div>
  )
}

export default FeaturedBlogs
