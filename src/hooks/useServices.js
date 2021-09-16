import { useStaticQuery, graphql } from "gatsby"

const useServices = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiServicesPage {
        nodes {
          seo: pageMetadata {
            pageDescription
            pageKeywords
            pageTitle
          }
        }
      }
      allStrapiServices(filter: { visible: { eq: true } }) {
        nodes {
          description
          title
          id
          icon {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 150, quality: 100)
              }
            }
          }
        }
      }
    }
  `)
  return query
}

export default useServices
