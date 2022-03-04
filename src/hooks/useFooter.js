import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  const query = useStaticQuery(graphql`
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
                  gatsbyImageData
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
  return query
}

export default useFooter

