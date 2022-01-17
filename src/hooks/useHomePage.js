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
                localFile {
                  childImageSharp {
                    gatsbyImageData(height: 90)
                  }
                }
              }
              homeIconDarkMode {
                localFile {
                  childImageSharp {
                    gatsbyImageData(height: 90)
                  }
                }
              }
            }
            services {
              homeIntro
              homeTitle
              icon {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              iconDarkMode {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            partners {
              caption
              id
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              imageDark {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
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
