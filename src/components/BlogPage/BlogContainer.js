import React from "react"
import { useBlog } from "../../hooks"
import Layout from "../../components/layout"
import BlogGrid from "./BlogGrid/BlogGrid"
import BlogArticle from "./BlogArticle/BlogArticle"
import { Seo, BannerHead } from "../index"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import "./BlogContainer.scss"

const Blog = () => {

  const blogData = useBlog()

  const data = blogData?.allStrapiBlogCategory?.nodes
  const dataArticles = blogData?.allStrapiArticle?.nodes
  const bannerHead = blogData?.allStrapiBlogPage?.nodes[0]?.bannerHead[0]
  const title = bannerHead.title
  const image = getImage(bannerHead.image[0]?.localFile)
  const filterArticle = data.map(category => dataArticles.filter(article => category.name === article.blog_category.name))

  console.log(bannerHead)
  const {
    pageTitle,
    pageDescription,
    pageKeywords,
  } = blogData?.allStrapiBlogPage?.nodes[0]?.seo

  return (
    <Layout>
      {blogData?.allStrapiBlogPage?.nodes[0]?.seo && (
        <Seo
          title={pageTitle}
          description={pageDescription}
          keywords={pageKeywords}
        />
      )}
      {data.length > 0 && (
        <div className="blog__container">

          {bannerHead && <BannerHead data={bannerHead} />}

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
    </Layout>
  )
}

export default Blog
