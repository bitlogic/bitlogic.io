import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import showdown from "showdown"

import "./EdtechSection.css"
import PropTypes from "prop-types"

const BitWaySection = () => {
  /* const { edtech } = useStaticQuery(graphql`
    {
      edtech: allStrapiHomePage {
        nodes {
          titleEdTech
        }
      }
    }
  `) */

  /* const { titleEdTech } = edtech.nodes[0]

  const titles = titleBitWay
  let converter = new showdown.Converter()
  let post = titles
  let html = converter.makeHtml(post)

  const ReplaceHtml = () => {
    return { __html: html }
  }
 */
  return null
  /*   <div className="Home__Edtech">
      <BgImage image={imagen} className="Home__Bitway__BgImage">
        <div
          dangerouslySetInnerHTML={ReplaceHtml()}
          className="Service__Title"
        ></div>
      </BgImage>
    </div> */
}

BitWaySection.propTypes = {}

export default BitWaySection
