import { useStaticQuery, graphql } from "gatsby"

const useContactPage = () => {
  const query = useStaticQuery(graphql`
    {
        allStrapiCases {
            nodes {
              strapiId
              title
              description
              quote {
                description
                title
                variant
                profile {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              button {
                content
                id
                url
                landing_page {
                  slug
                }
              }
            }
          }
    }
  `)
  return query
}

export default useContactPage
