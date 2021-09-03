import { useStaticQuery, graphql } from "gatsby"

const useGlobalConfig = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiGlobalConfig {
        nodes {
          script {
            enable
            name
            src
          }
        }
      }
    }
  `)
  return query
}

export default useGlobalConfig
