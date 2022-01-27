import { useStaticQuery, graphql } from "gatsby"

const useHomePage = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiHome {
        nodes {
          servicesBlock {
            type
            title
            enable
            services {
              homeTitle
              homeIntro
              iconDarkMode {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              icon {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          partnersBlock {
            title
            partners {
              text
              imageDark {
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
              caption
            }
          }
          edtechBlock {
            type
            title
            enable
            edteches {
              homeTitle
              homeIntro
              homeIconDarkMode {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              homeIcon {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          pageMetadata {
            pageDescription
            pageKeywords
            pageTitle
          }
          topHomeBanner {
            title
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
          infoImgBanner {
            title
            subtitle
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
          infoBgBanner {
            title
            link {
              name
              pathTo
            }
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
          infoBanner {
            title
            link {
              name
              pathTo
            }
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
