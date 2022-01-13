import { useStaticQuery, graphql } from "gatsby"

const useJobsPage = () => {
    const query = useStaticQuery(graphql`
    {
        strapiJobsPage {
            banner
        }
    }
       
  `)
    return query
}

export default useJobsPage
