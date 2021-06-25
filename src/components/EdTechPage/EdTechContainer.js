import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"

import showdown from "showdown"

import Layout from "../layout"
import SEO from "../seo"
import "./EdtechContainer.scss"

const EdTech = () => {
  const { edtechBanner, content } = useStaticQuery(graphql`
    {
      edtechBanner: allStrapiBanners(filter: { page: { eq: "edtech" } }) {
        nodes {
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const { title, image } = edtechBanner.nodes[0]
  const imagen = getImage(image)

  /* const { submodules } = content.nodes[0] */

  /* const modules = submodules[0].content
  let converter = new showdown.Converter()
  let post = modules
  let html = converter.makeHtml(post)

  const ReplaceHtml = () => {
    return { __html: html }
  } */

  return (
    <Layout>
      <SEO title="EdTech" />
      <BgImage image={imagen} className="Services__BgImage">
        <h1 className="Services__Title">{title}</h1>
      </BgImage>
      <h1>ED TECH PAGE</h1>
      <Link to="/">Go back to the homepage</Link>
      {/* <div
        dangerouslySetInnerHTML={ReplaceHtml()}
        className="Edtech__content"
      ></div> */}
    </Layout>
  )
}

export default EdTech

/* LO DE ABAJO ES UN QUERY */
/* content: allStrapiEdteches {
    nodes {
      submodules {
        content
      }
    }
  } */
