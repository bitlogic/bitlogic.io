import React from "react"
import { useBlog } from "../../hooks"
import BlogGrid from "./BlogGrid/BlogGrid"
import BlogArticle from "./BlogArticle/BlogArticle"

import "./BlogContainer.scss"

const Blog = () => {

  const blogData = useBlog()
  const data = blogData?.allStrapiBlogCategory?.nodes
  const dataArticles = blogData?.allStrapiArticle?.nodes
  const defaultCategory = data[0]?.name
  const filterArticle = data.map(category => dataArticles.filter(article => category.name === article?.blog_category?.name || defaultCategory))

  return (
    <>
      {data.length > 0 && (
        <div className="blog__container container">
          {filterArticle?.map((category, idx) => (
            <BlogGrid key={idx} title={category[0]?.blog_category?.name}>
              {category.map((item, idx) => (
                <BlogArticle
                  key={idx}
                  image={item.image}
                  title={item.title}
                  summary={item.summary}
                  slug={"/blog/" + item.slug}
                  text="Ver más"
                />
              ))}
            </BlogGrid>
          ))}
        </div>
      )}
    </>
  )
}

export default Blog
