import React from "react"
import { useBlog } from "../../hooks"
import BlogGrid from "./BlogGrid/BlogGrid"
import BlogArticle from "./BlogArticle/BlogArticle"
import Seo from "../Seo/Seo"
import "./BlogContainer.scss"
import Layout from "../layout"
import Banner from "../Banner/Banner"

const Blog = () => {

  const blogData = useBlog()
  const data = blogData?.allStrapiBlogCategory?.nodes
  const dataArticles = blogData?.allStrapiArticle?.nodes
  const filterArticle = data.map(category => dataArticles.filter(article => category.name === article?.blog_category?.name))
  const { seo, banner } = blogData.allStrapiBlogPage.nodes[0]
  const callToAction = blogData?.allStrapiBlogPage?.callToActionArticle


  return (
    <Layout>
      <Seo
        title={seo.pageTitle}
        description={seo.pageDescription}
        keywords={seo.pageKeywords}
      />
      <Banner data={banner} />
      {data.length > 0 && (
        <div className="blog__container container">
          {filterArticle?.map((category, idx) => (
            <BlogGrid key={data[idx].name} title={category[0]?.blog_category?.name}>
              {category.map(item => (
                <BlogArticle
                  key={item.id}
                  image={item?.image || item?.imagePage}
                  title={item.title}
                  summary={item.summary}
                  slug={"/blog/" + item.slug}
                  text={callToAction}
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
