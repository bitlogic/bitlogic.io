import { useStaticQuery, graphql } from "gatsby"

const useServices = () => {
    const query = useStaticQuery(graphql`
    {
      allStrapiServices(filter: {visible: {eq: true}}) {
        nodes {
          description
          title
          id
          icon {
            childImageSharp {
              gatsbyImageData(
                quality: 100,
                placeholder: BLURRED
                )
            }
          }
        }
      }
    }
  `)
  return query
}

export default useServices