import { useStaticQuery, graphql } from "gatsby"

const useHomePage = () => {
  const data = useStaticQuery(graphql`
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
            titlePosition
            form_url
            concactFormAnchor
            contactForm
            color
            callToAction
            allBlog

            videoUrl
            video {
              url
              mime
            }
            poster {
              url
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            backgroundImage {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1200
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
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
          }
        }
      }
    }
  `)

  return data
}

export default useHomePage
