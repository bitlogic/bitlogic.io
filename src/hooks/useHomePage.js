import { useStaticQuery, graphql } from "gatsby"

const useHomePage = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiHome {
        nodes {
          sections {
            title
            type
            enable
            edteches {
              homeIntro
              homeTitle
              homeIcon {
                childImageSharp {
                  gatsbyImageData(height: 90)
                }
              }
            }
            services {
              homeIntro
              homeTitle
              homeIcon {
                childImageSharp {
                  gatsbyImageData(height: 90)
                }
              }
            }
            banner {
              title
              type
              enable
              id
            }
          }
        }
      }
    }
  `)
  return query
}

export default useHomePage
