import { useStaticQuery, graphql } from "gatsby"

const useBlog = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBlogCategory {
        nodes {
          name
          articles {
            id
            summary
            title
            slug
            image {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      allStrapiArticle {
        nodes {
          title
          summary
          description
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          blog_categories {
            name
          }
        }
      }
      allStrapiBlogPage {
        nodes {
          seo: pageMetadata {
            pageTitle
            pageKeywords
            pageDescription
          }
        }
      }
    }
  `)
  return query
}

export default useBlog