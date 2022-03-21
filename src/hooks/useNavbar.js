import { useStaticQuery, graphql } from "gatsby"

const useNavbar = () => {
  return useStaticQuery(graphql`
    {
      allStrapiLayout {
        nodes {
          navbar {
            navbarItem {
              url
              label
              landing {
                slug
                name
              }
              dropdown
              id
            }
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      allStrapiLandingPage {
        nodes {
          body
          name
        }
      }
      allStrapiHome {
        nodes {
          body
        }
      }
    }
    
  `)
}

export default useNavbar
