import { useStaticQuery, graphql } from "gatsby"

const useHomePage = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiHome {
        nodes {
          pageMetadata {
            pageDescription
            pageKeywords
            pageTitle
          }
          sections {
            title
            type
            enable
            edteches {
              homeIntro
              homeTitle
              homeIcon {
                childImageSharp {
                  gatsbyImageData(height: 90)
                }
              }
            }
            services {
              homeIntro
              homeTitle
              homeIcon {
                childImageSharp {
                  gatsbyImageData(height: 90)
                }
              }
            }
            partners {
              caption
              id
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            banner {
              title
              type
              enable
              id
            }
          }
        }
      }
    }
  `)
  return query
}

export default useHomePage
