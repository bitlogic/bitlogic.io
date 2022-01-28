import { useStaticQuery, graphql } from "gatsby"

const useJobsPage = () => {
    const query = useStaticQuery(graphql`
    {
      strapiJobsPage {
        title
        pageMetadata {
          pageDescription
          pageKeywords
          pageTitle
        }
      }
    }
       
  `)
    return query
}

export default useJobsPage
