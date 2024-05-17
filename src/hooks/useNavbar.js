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
                  gatsbyImageData(
                    placeholder: BLURRED
                  )
                }
              }
            }
            logoDark {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                  )
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
          slug
          parent_page {
            slug
          }
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
