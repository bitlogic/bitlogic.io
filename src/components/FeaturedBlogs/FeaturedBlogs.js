import React from "react"

import "./featuredBlogs.scss"
import BlogArticle from "../BlogPage/BlogArticle/BlogArticle"

const FeaturedBlogs = ({ data }) => {
  return (
    <div className="contaner featured" id={data.strapi_component + "-" + data.id}>
      <h2>{data.title}</h2>
      <h6 className="px-5">{data.subtitle}</h6>

      <div className="featured-blogs">
        {data.articles.slice(0, 3).map((item, idx) => (
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
