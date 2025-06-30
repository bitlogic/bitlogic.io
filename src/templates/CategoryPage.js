// src/templates/CategoryPage.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogArticle from "../components/BlogPage/BlogArticle/BlogArticle"
import Seo from "../components/Seo/Seo"
const CategoryPage = ({ data }) => {
  const categoryName = data.strapiBlogCategory.name
  const articles = data.allStrapiArticle.nodes  
  return (
    <Layout>
      <Seo title={`Categoría: ${categoryName}`} />
      <div className="category__container container">
        <h1>{categoryName}</h1>
        <div className="category__articles">
          {articles.map(article => (
            <BlogArticle
              key={article.id}
              image={article.image || article.imagePage}
              title={article.title}
              summary={article.summary}
              slug={`/blog/${article.slug}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($name: String!) {
    strapiBlogCategory(name: { eq: $name }) {
      name
    }
    allStrapiArticle(
      filter: { blog_category: { name: { eq: $name } } }
      sort: { fields: published_at, order: DESC }
    ) {
      nodes {
        id
        title
        summary
        slug
        image {
          url
          alternativeText
        }
        imagePage {
          url
          alternativeText
        }
      }
    }
  }
`
export default CategoryPage