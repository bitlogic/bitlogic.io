import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import Layout from "../layout"
import SEO from "../seo"

import "./HomeContainer.css"

const Home = () => {
  const {
    homeBanner: {
      nodes: {
        0: { title, image, logo },
      },
    },
  } = useStaticQuery(graphql`
    {
      homeBanner: allStrapiBanners(filter: { page: { eq: "home" } }) {
        nodes {
          title
          image {
            childImageSharp {
              gatsbyImageData(quality: 50, webpOptions: { quality: 70 })
            }
          }
          logo {
            childImageSharp {
              gatsbyImageData(quality: 50, webpOptions: { quality: 70 })
            }
          }
        }
      }
    }
  `)

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
    </Layout>
  )
}

export default Home
