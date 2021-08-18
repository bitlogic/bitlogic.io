import * as React from "react"

import { useBanner, useArticle } from "../../hooks"

import Layout from "../../components/layout"
import BlogGrid from '../BlogGrid/BlogGrid'
import BlogArticle from '../BlogArticle/BlogArticle'

import { Seo, BannerActionCall } from "../index"

import "./BlogContainer.scss"

const Blog = () => {
  const bannerData = useBanner()
  const articleData = useArticle()
  const data = articleData?.allStrapiBlogCategory?.nodes
  
  const bannerBlog = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "blog" && banner.type === "bgColor"
  )
    
  const bannerActionCall = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "blog" && banner.type === "actionCall"
  )



  return (
    <Layout>
      <Seo />
      <div className="blog__container">
        <div className="banner__container">
          <p dangerouslySetInnerHTML={{ __html: bannerBlog.summary }} />
        </div>
        {data?.map((article, idx) => (
          <BlogGrid key={idx} title={article.name}>
            {
              article?.articles.map((item, idx) =>(
                <BlogArticle 
                  key={idx}
                  image={item.image}
                  title={item.title}
                  summary={item.summary.substring(0, 95)}
                  text="Ver más"
                />
              ))
            }
          </BlogGrid>
        ))}
      </div>
      <BannerActionCall banner={bannerActionCall} />
    </Layout>
  )
}

export default Blog
