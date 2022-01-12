import React from "react"
import { useBanner, useBlog } from "../../hooks"

import Layout from "../../components/layout"
import BlogGrid from "./BlogGrid/BlogGrid"
import BlogArticle from "./BlogArticle/BlogArticle"

import { Seo, BannerActionCall } from "../index"

import "./BlogContainer.scss"

const Blog = () => {
  const bannerData = useBanner()
  const blogData = useBlog()
  const data = blogData?.allStrapiBlogCategory?.nodes
  const dataArticles = blogData?.allStrapiArticle?.nodes

  const bannerBlog = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "blog" && banner.type === "bgColor"
  )

  const bannerActionCall = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "blog" && banner.type === "actionCall"
  )

  const filterArticle = data.map(category => dataArticles.filter(article => category.name === article.blog_category.name))

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
          {bannerBlog && (
            <div className="banner__container">
              <h3 dangerouslySetInnerHTML={{ __html: bannerBlog.summary }} />
            </div>
          )}
          
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
      
      {bannerActionCall && <BannerActionCall banner={bannerActionCall} />}
    </Layout>
  )
}

export default Blog
