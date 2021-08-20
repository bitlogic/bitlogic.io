import { useStaticQuery, graphql } from "gatsby"

const useEdTechSubmodules = () => {
  const query = useStaticQuery(graphql`
    {
      submodules: allStrapiEdTechSubmodules {
        nodes {
          id
          strapiId
          title
          edTechType
          submodule {
            description
            title
            logo {
              childImageSharp {
                gatsbyImageData(width: 60)
              }
            }
          }
          submoduleItem {
            title
            id
            content
            icon {
              childImageSharp {
                gatsbyImageData(width: 60)
              }
            }
          }
        }
      }
    }
  `)
  return query
}

export default useEdTechSubmodules
