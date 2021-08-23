import React from "react"

import { useBanner, useBlog } from "../../hooks"

import Layout from "../../components/layout"
import BlogGrid from '../BlogGrid/BlogGrid'
import BlogArticle from '../BlogArticle/BlogArticle'

import { Seo, BannerActionCall } from "../index"

import "./BlogContainer.scss"

const Blog = () => {

  const bannerData = useBanner()
  const blogData = useBlog()
  const data = blogData?.allStrapiBlogCategory?.nodes
  
  const bannerBlog = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "blog" && banner.type === "bgColor"
  )
    
  const bannerActionCall = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "blog" && banner.type === "actionCall"
  )
  
  const { pageTitle, pageDescription, pageKeywords } = blogData?.allStrapiBlogPage?.nodes[0]?.seo

  return (
    <Layout>
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
      />
      <div className="blog__container">
        <div className="banner__container">
          <p dangerouslySetInnerHTML={{ __html: bannerBlog.summary }} />
        </div>
        {data?.map((article, idx) => (
          <BlogGrid key={idx} title={article.name}>
            {article?.articles?.map((item, idx) => (
              <BlogArticle
                key={idx}
                image={item.image}
                title={item.title}
                summary={item.summary.substring(0, 95)}
                slug={"/blog/" + item.slug}
                text="Ver más"
              />
            ))}
          </BlogGrid>
        ))}
      </div>
      <BannerActionCall banner={bannerActionCall} />
    </Layout>
  )
}

export default Blog
