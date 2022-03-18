import { useStaticQuery, graphql } from "gatsby"

const useNavbar = () => {
  const query = useStaticQuery(graphql`
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
  return query
}

export default useNavbar
