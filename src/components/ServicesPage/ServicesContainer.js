import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"

const Services = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allStrapiServices {
  //       nodes {
  //         description
  //         title
  //         strapiId
  //         image
  //       }
  //     }
  //   }
  // `)
  // console.log(data.allStrapiServices.nodes)
  return (
    <Layout>
      <SEO title="Servicios" />
      <h1>Hi from the Service page</h1>
      <p>Welcome to Service</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Services
