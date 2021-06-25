import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../seo"
import "./ServicesContainer.scss"

const Services = () => {
  // const { servicesBanner } = useStaticQuery(graphql`
  //   {
  //     servicesBanner: allStrapiBanners(filter: { page: { eq: "services" } }) {
  //       nodes {
  //         title
  //         image {
  //           childImageSharp {
  //             gatsbyImageData(quality: 100, webpOptions: { quality: 90 })
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { title, image } = servicesBanner.nodes[0]
  // const imagen = getImage(image)

  return (
    <Layout>
      <SEO title="Servicios" />
      <p>services</p>
      {/* <BgImage image={imagen} className="Services__BgImage">
        <h1 className="Services__Title">{title}</h1>
      </BgImage>
      <h1>The service PAGE</h1>
      <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}

export default Services
