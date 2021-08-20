import { graphql, useStaticQuery } from "gatsby"

const useGlobalSeo = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiGlobalSeo {
        nodes {
          siteMetadata {
            siteDesc: pageDescription
            siteKeywords: pageKeywords
            siteTitle: pageTitle
          }
          author
          siteURL
          robots
        }
      }
    }
  `)
  return query
}
export default useGlobalSeo
