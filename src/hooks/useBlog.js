import { useStaticQuery, graphql } from "gatsby"

const useBlog = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBlogCategory {
        nodes {
          name
          articles {
            title
            summary
            slug
            image {
              url
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