import { useStaticQuery, graphql } from "gatsby"

const useNavbar = () => {
  return useStaticQuery(graphql`
    {
      allStrapiLayout {
        nodes {
          navbar {
            navButton {
              landing_page {
                slug
              }
              url
              content
            }
            navbarItem {
              url
              label
              singleType
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
            logoDark {
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
