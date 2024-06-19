import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
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
            }
          }
          Sites {
            title
            websites {
              id
              name
              url
              icon {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          footer {
            contact {
              title
              iconText {
                id
                name
                icon {
                  code
                  name
                  type
                }
              }
            }
            internalLink {
              name
              pathTo
            }
            location {
              title
              iconText {
                id
                name
                icon {
                  code
                  name
                  type
                }
              }
            }
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 139, height: 41)
                }
              }
            }
            navegation {
              title
            }
            socialMedia {
              socialMedia {
                name
                url
                id
                icon {
                  code
                  type
                  name
                }
              }
            }
            subscription {
              title
              url
              callToAction
              landing_page {
                slug
              }
            }
          }
        }
      }          
    }       
  `)
}

export default useFooter