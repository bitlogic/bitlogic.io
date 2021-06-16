import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import ServicesSection from "../ServicesSection/ServicesSection"
import BitWaySection from "../BitWaySection/BitWaySection"

import Layout from "../../layout"
import SEO from "../../seo"

import "./HomeContainer.css"

const Home = () => {
  const {
    banner: {
      nodes: {
        0: { title, image, logo },
      },
    },
  } = useStaticQuery(graphql`
    {
      banner: allStrapiBanners(filter: { page: { eq: "home" } }) {
        nodes {
          strapiId
          title
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, webpOptions: { quality: 90 })
            }
          }
          logo {
            childImageSharp {
              gatsbyImageData(quality: 100, webpOptions: { quality: 90 })
            }
          }
        }
      }
    }
  `)

  console.log(image)
  const imagen = getImage(image)
  const logoImage = getImage(logo)

  return (
    <Layout>
      <SEO title="Home" />
      <BgImage image={imagen} className="Home__BgImage">
        <div className="Home__Logo__Container">
          <GatsbyImage image={logoImage} alt={`img-${title}`}></GatsbyImage>
        </div>
        <h1 className="Home__Title">{title}</h1>
      </BgImage>
      <ServicesSection />
      <BitWaySection />
    </Layout>
  )
}

export default Home
