import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ServiceItem from "./ServiceItem"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import showdown from "showdown"
import "./ServiceSection.css"

const ServicesSection = () => {
  const { title, services } = useStaticQuery(graphql`
    {
      title: allStrapiHomePage {
        nodes {
          titleClientes
        }
      }
      services: allStrapiServices(sort: { order: ASC, fields: id }) {
        nodes {
          home {
            title
            content
            icon {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const { titleServices } = title.nodes[0]
  const { nodes } = services

  const titles = titleServices
  let converter = new showdown.Converter()
  let post = titles
  let html = converter.makeHtml(post)

  const ReplaceHtml = () => {
    return { __html: html }
  }

  return (
    <Container>
      <div
        dangerouslySetInnerHTML={ReplaceHtml()}
        className="Service__Title"
      ></div>

      <Row>
        {nodes.map((service, key) => {
          return (
            <ServiceItem
              className="Service__Item"
              service={service}
              key={key}
            />
          )
        })}
      </Row>
    </Container>
  )
}

export default ServicesSection
