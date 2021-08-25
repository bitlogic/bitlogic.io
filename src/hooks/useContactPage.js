import { useStaticQuery, graphql } from "gatsby"

const useContactPage = () => {
  const query = useStaticQuery(graphql`
    {
    allStrapiContactPage {
        nodes {
            image {
                childImageSharp {
                    gatsbyImageData
                  }
            }
            title
        }
    }
    }
  `)
  return query
}

export default useContactPage
