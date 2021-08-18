import { useStaticQuery, graphql } from "gatsby"

const useArticle = () => {
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
    }
  `)
  return query
}

export default useArticle