import { useStaticQuery, graphql } from "gatsby"

const useBlog = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBlogCategory(sort: { fields: articles___published_at, order: DESC }) {
        nodes {
          name
          articles {
            id
            summary
            title
            slug
            image {
              id
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
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