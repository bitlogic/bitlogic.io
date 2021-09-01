import { useStaticQuery, graphql } from "gatsby"

const useBanner = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBanners {
        nodes {
          title
          strapiId
          page
          type
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                )
              }
            }
          }
          link {
            name
            pathTo
          }
          summary
        }
      }
    }
  `)
  return query
}

export default useBanner
