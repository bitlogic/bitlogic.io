import { useStaticQuery, graphql } from "gatsby"

const useHomePage = () => {
  const query = useStaticQuery(graphql`
    query allStrapiHome {
      allStrapiHome {
        nodes {
          pageMetadata {
            pageDescription
            pageKeywords
            pageTitle
          }
          body {
            id
            strapi_component
            title
            subtitle
            text
            summary
            description
            content
            animation
            variant
            show
            profileDescription
            imagePosition
            form_url
            concactFormAnchor
            contactForm
            color
            callToAction
            allBlog
            allCases
            videoUrl
            video {
              url
              mime
            }
            profile {
              alternativeText
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            professionals {
              id
              name
              position
              quote
              linkedin
              photo {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            media {
              id
              name
              img {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              imageDark {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            items {
              id
              title
              text
              landing_page {
                slug
              }
              image {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            imageDark {
              alternativeText
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            image {
              alternativeText
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            dualSectionPart {
              id
              title
              description
              button {
                content
                url
                landing_page {
                  slug
                }
              }
              backgroundImage {
                url
              }
              backgroundImageDark {
                url
              }
              image {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            cases {
              id
              title
              subtitle
              description
              button {
                content
                url
                landing_page {
                  slug
                }
              }
              image {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              quote {
                title
                description
                variant
                profile {
                  alternativeText
                  url
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                image {
                  alternativeText
                  url
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            button {
              content
              url
              landing_page {
                slug
              }
            }
            backgroundImageDark {
              url
            }
            backgroundImage {
              url
            }
            articles {
              id
              title
              summary
              slug
              published_at
              imagePage {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              image {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            ListItem {
              id
              title
              description
              landing_page {
                slug
              }
              icon {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            Card {
              id
              title
              description
              landing_page {
                slug
              }
              icon {
                alternativeText
                url
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
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

export default useHomePage
