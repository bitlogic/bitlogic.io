import { useStaticQuery, graphql } from "gatsby"

const useContactPage = () => {
  return useStaticQuery(graphql`
    {
        allStrapiCase {
            nodes {
              strapiId
              title
              subtitle
              description
              quote {
                description
                title
                variant
                profile {
                  alternativeText
                  url
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              image {
                alternativeText
                url
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

}

export default useContactPage
