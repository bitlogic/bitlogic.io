import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import ServiceItem from "./ServiceItem"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

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
              gatsbyImageData(quality: 100, width: 50)
              resize(width: 80) {
                width
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Row>
        {nodes.map((service, key) => {
          return (
            <ServiceItem
              className="Service__Item"
              service={service}
              key={service.strapiId}
            />
          )
        })}
      </Row>
    </Container>
  )
}

export default ServicesSection
