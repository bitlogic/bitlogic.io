import { useStaticQuery, graphql } from "gatsby"

const useEdTech = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBanners(filter: { page: { eq: "edtech" } }) {
        nodes {
          enable
          page
          type
          title
          summary
          link {
            pathTo
            name
          }
          logo {
            childImageSharp {
              gatsbyImageData
            }
          }
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      allStrapiEdteches(sort: { fields: id, order: ASC }) {
        nodes {
          id
          title
          content
          icon {
            childImageSharp {
              gatsbyImageData
            }
          }
          edTechSubmodules {
            ed_tech_submodules {
              id
              title
              edTechType
            }
          }
        }
      }
    }
  `)
  return query
}

export default useEdTech
