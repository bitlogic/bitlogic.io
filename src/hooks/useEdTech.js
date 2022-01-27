import { useStaticQuery, graphql } from "gatsby"

const useEdTech = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiEdTechPage {
        nodes {
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
        }
      }
      allStrapiEdteches(sort: { fields: id, order: ASC }) {
        nodes {
          id
          title
          content
          icon {
            localFile {
              childImageSharp {
                gatsbyImageData(height: 100, quality: 100)
              }
            }
          }
          iconDarkMode {
            localFile {
              childImageSharp {
                gatsbyImageData(height: 100, quality: 100)
              }
            }
          }
          edTechSubmodules {
            ed_tech_submodules {
              id
              title
              edTechType
            }
          }
        }
      }
      allStrapiEdTechPage {
        nodes {
          seo: SEO {
            pageDescription
            pageKeywords
            pageTitle
          }
        }
      }
    }
  `)
  return query
}

export default useEdTech
