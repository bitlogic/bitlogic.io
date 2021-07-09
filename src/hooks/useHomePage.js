import { useStaticQuery, graphql } from "gatsby"

const useHomePage = () => {
  /* const query = useStaticQuery(graphql`
    {
      allStrapiHomePage(sort: { fields: id, order: ASC }) {
        nodes {
          title
          content
          icon {
            childImageSharp {
              gatsbyImageData
            }
          }
          submodulesTitle
        }
      }
    }
  `)
  return query */
}

export default useHomePage
