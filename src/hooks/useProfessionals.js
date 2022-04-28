import { useStaticQuery, graphql } from "gatsby"

const useContactPage = () => {
  return useStaticQuery(graphql`
    {
      allStrapiProfessional {
        nodes {
          quote
          position
          name
          linkedin
          strapiId
          id
          photo {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
}

export default useContactPage
