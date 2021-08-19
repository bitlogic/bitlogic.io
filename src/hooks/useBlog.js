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
            image {
              id
              childImageSharp {
                gatsbyImageData
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