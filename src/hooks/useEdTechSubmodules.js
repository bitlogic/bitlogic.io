import { useStaticQuery, graphql } from "gatsby"

const useEdTechSubmodules = () => {
  const query = useStaticQuery(graphql`
    {
      submodules: allStrapiEdTechSubmodules {
        nodes {
          id
          strapiId
          title
          edTechType
          submodule {
            description
            title
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 60, quality: 100)
                }
              }
            }
            logoDarkMode {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 60, quality: 100)
                }
              }
            }
          }
          submoduleItem {
            title
            id
            content
            icon {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 60, quality: 100)
                }
              }
            }
            iconDarkMode {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 60, quality: 100)
                }
              }
            }
          }
        }
      }
    }
  `)
  return query
}

export default useEdTechSubmodules
