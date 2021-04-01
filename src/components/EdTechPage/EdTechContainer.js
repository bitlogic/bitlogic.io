import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../seo"
import "./EdtechContainer.css"

const EdTech = () => {
  const {
    edtechBanner: {
      nodes: {
        0: { title, image },
      },
    },
  } = useStaticQuery(graphql`
    {
      edtechBanner: allStrapiBanners(filter: { page: { eq: "edtech" } }) {
        nodes {
          title
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, webpOptions: { quality: 90 })
            }
          }
        }
      }
    }
  `)

  const imagen = getImage(image)

  return (
    <Layout>
      <SEO title="EdTech" />
      <BgImage image={imagen} className="Services__BgImage">
        <h1 className="Services__Title">{title}</h1>
      </BgImage>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default EdTech
