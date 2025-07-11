// src/hooks/useBlog.js

import { useStaticQuery, graphql } from "gatsby"

const useBlog = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiBlogCategory(sort: { fields: orden, order: ASC }) {
        nodes {
          name
          slug
          orden
        }
      }
      allStrapiArticle(sort: { fields: published_at, order: DESC }) {
        nodes {
          id
          title
          summary
          slug
          destacado
          image {
            url
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          imagePage {
            url
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          blog_category {
            name
            slug
          }
        }
      }
      allStrapiBlogPage {
        nodes {
          callToActionArticle
          seo: pageMetadata {
            pageTitle
            pageKeywords
            pageDescription
          }
          banner {
            id
            title
            variant
            summary
            animation
            button {
              content
              id
              url
              landing_page {
                name
                slug
                id
              }
            }
            image {
              url
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
    }
  `)

  return {
    allStrapiBlogCategory: data.allStrapiBlogCategory,
    allStrapiArticle: data.allStrapiArticle,
    allStrapiBlogPage: data.allStrapiBlogPage,
  }
}

export default useBlog

