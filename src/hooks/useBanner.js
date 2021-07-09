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
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          logo {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                formats: [AUTO, WEBP]
                placeholder: BLURRED
              )
            }
          }
          link {
            name
            pathTo
          }
        }
      }
    }
  `)
  return query
}

export default useBanner
