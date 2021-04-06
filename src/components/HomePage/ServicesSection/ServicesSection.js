import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import ServiceItem from "./ServiceItem"

const ServicesSection = () => {
  const {
    services: { nodes },
  } = useStaticQuery(graphql`
    {
      services: allStrapiServices {
        nodes {
          strapiId
          title
          content
          icon {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {nodes.map((service, key) => {
        return <ServiceItem service={service} key={service.strapiId} />
      })}
    </div>
  )
}

export default ServicesSection
