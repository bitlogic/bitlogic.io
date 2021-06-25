import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import showdown from "showdown"

import "./BitWaySection.scss"
import PropTypes from "prop-types"

const BitWaySection = () => {
  const { bitway } = useStaticQuery(graphql`
    {
      bitway: allStrapiHomePage {
        nodes {
          titleBitWay
          imageBitWay {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const { titleBitWay, imageBitWay } = bitway.nodes[0]

  const titles = titleBitWay
  let converter = new showdown.Converter()
  let post = titles
  let html = converter.makeHtml(post)

  const ReplaceHtml = () => {
    return { __html: html }
  }

  const imagen = getImage(imageBitWay)

  return (
    <div className="Home__Bitway">
      <BgImage image={imagen} className="Home__Bitway__BgImage">
        <div
          dangerouslySetInnerHTML={ReplaceHtml()}
          className="Service__Title"
        ></div>
      </BgImage>
    </div>
  )
}

BitWaySection.propTypes = {}

export default BitWaySection
