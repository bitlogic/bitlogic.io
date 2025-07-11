import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogGrid from "../components/BlogPage/BlogGrid/BlogGrid"
import BlogArticle from "../components/BlogPage/BlogArticle/BlogArticle"
import Seo from "../components/Seo/Seo"
import "./CategoryPage.scss"

const CategoryPage = ({ data }) => {
  const categoryName = data.strapiBlogCategory.name
  const articles = data.allStrapiArticle.nodes

  // Separar destacados (máximo 3) y los demás
  const destacados = articles.filter(article => article.destacado).slice(0, 3)
  const noDestacados = articles.filter(article => !article.destacado)

  // Unir destacados + no destacados
  const todosLosArticulos = [...destacados, ...noDestacados]

  return (
    <Layout>
      <Seo title={`Blog | ${categoryName}`} />

      <div className="category__container container">
        <BlogGrid title={categoryName} className="category-grid">
          {todosLosArticulos.map(article => (
            <BlogArticle
              key={article.id}
              image={article.image || article.imagePage}
              title={article.title}
              summary={article.summary}
              slug={`/blog/${article.slug}`}
            />
          ))}
        </BlogGrid>
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
        destacado  
        image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        imagePage {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default CategoryPage
