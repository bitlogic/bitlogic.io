import React, { useRef } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Seo, CustomSection, Navigation, Layout } from "../components"

const LandingPage = ({ data, location }) => {
  const { name, slug, parent_page, seo, body, navigation } =
    data?.allStrapiLandingPage?.nodes[0] || {}

  const wrapperRef = useRef(null)

  const landing = {
    name,
    slug,
    parent_page,
    ref: wrapperRef,
  }

  return (
    <Layout location={location} options={{ hasHeader: true }}>
      <Seo
        title={seo?.pageTitle || name}
        description={seo?.pageDescription}
        keywords={seo?.pageKeywords}
      />
      {body?.length > 0 && navigation ? (
        <>
          <CustomSection sections={body.slice(0, 1)} />
          <div
            ref={wrapperRef}
            className="wrapper-container d-flex flex-column flex-lg-row"
          >
            <Navigation data={navigation} landing={landing} />
            <div className="content-section flex-grow-1">
              <CustomSection sections={body.slice(1)} />
            </div>
          </div>
        </>
      ) : (
        <CustomSection sections={body} />
      )}
    </Layout>
  )
}

LandingPage.propTypes = {
  data: PropTypes.shape({
    allStrapiLandingPage: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          body: PropTypes.arrayOf(PropTypes.object),
          seo: PropTypes.shape({
            pageTitle: PropTypes.string.isRequired,
            pageDescription: PropTypes.string.isRequired,
            pageKeywords: PropTypes.string,
          }),
        })
      ),
    }),
  }),
  location: PropTypes.object.isRequired,
}

export const query = graphql`
  query($slug: String!) {
    allStrapiLandingPage(filter: { slug: { eq: $slug } }) {
      nodes {
        name
        slug
        parent_page {
          slug
        }
        seo {
          pageTitle
          pageKeywords
          pageDescription
        }
        navigation {
          title
          showSiblingPages
          relatedPages {
            title
            pages {
              id
              content
              url
              landing_page {
                name
                slug
              }
            }
          }
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
`

export default LandingPage
