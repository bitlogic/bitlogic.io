import { useStaticQuery, graphql } from "gatsby"

const useServicePage = () => {
  const query = useStaticQuery(graphql`
    {
      strapiServicesPage {
        topBanner {
          title
          summary
          bgImageDarkMode {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          bgImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        actionCallBanner {
          title
          link {
            name
            pathTo
          }
          imageDarkMode {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        pageMetadata {
          pageDescription
          pageKeywords
          pageTitle
        }

      }
    }
  `)
  return query
}

export default useServicePage
