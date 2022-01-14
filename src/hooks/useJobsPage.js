import { useStaticQuery, graphql } from "gatsby"

const useJobsPage = () => {
    const query = useStaticQuery(graphql`
    {
        allStrapiJobsPage {
            nodes {
              pageMetadata {
                pageDescription
                pageKeywords
                pageTitle
              }
            }
        }
        strapiJobsPage {
            banner
        }
    }
       
  `)
    return query
}

export default useJobsPage
