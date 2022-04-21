import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      allStrapiLayout {
        nodes {
          navbar {
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
          footer {
            contact {
              title
              iconText {
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
            }
          }
        }
      }          
    }       
  `)
}

export default useFooter

