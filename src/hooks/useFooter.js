import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      allStrapiLayout {
        nodes {
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
              pageLink {
                name
                pathTo
              }
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

