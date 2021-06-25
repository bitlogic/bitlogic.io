import { useStaticQuery, graphql } from "gatsby"

const useBanner = () => {
    const query = useStaticQuery(graphql`
    {
        allStrapiBanners {
            nodes {
              title
              strapiId
              image {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100,
                    layout: FULL_WIDTH
                  )
                }
              }
              page
              type
            }
        }
    }
  `)
  return query
}

export default useBanner

