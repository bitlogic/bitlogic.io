import { useStaticQuery, graphql } from "gatsby"

const useBlog = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBlogCategory {
        nodes {
          name
        }
      }
      allStrapiArticle(sort: { fields: published_at, order: DESC }) {
        nodes {
          title
          summary
          slug
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          blog_category {
            name
          }
        }
      }
      allStrapiBlogPage {
        nodes {
          seo: pageMetadata {
            pageTitle
            pageKeywords
            pageDescription
          }
          bannerHead {
            title
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
    }
  `)
  return query
}

export default useBlog
