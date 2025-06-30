import { useStaticQuery, graphql } from "gatsby"

const useBlog = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBlogCategory {
        nodes {
          name
          slug
        }
      }
      allStrapiArticle(sort: { fields: published_at, order: DESC }) {
        nodes {
          title
          id
          summary
          slug
          Destacado
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
  return query
}

export default useBlog
