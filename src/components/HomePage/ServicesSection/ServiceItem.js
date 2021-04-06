import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Card from "react-bootstrap/Card"

const ServiceItem = ({ service }) => {
  const { title, strapiId, content, icon } = service

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceItem

// make propTypes
