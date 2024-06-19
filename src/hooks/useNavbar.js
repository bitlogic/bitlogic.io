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
          menu {
            title
            id
            visible
            dropdown
            url
            landing_page {
              slug
            }
            dropdownItems {
              id
              label
              text
              url
              icon {
                alternativeText
                url
                localFile {
                  childrenImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                    )
                  }
                }
              }
              landing_page {
                slug
              }
            }
            toplevelItem {
              id
              label
              text
              url
              icon {
                localFile {
                  childrenImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                    )
                  }
                }
                alternativeText
              }
              landing_page {
                slug
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
