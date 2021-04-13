import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"

const ServiceItem = ({ service }) => {
  const { title, content, icon } = service.home

  const imagen = getImage(icon)

  return (
    <Col xs={12} md={4}>
      <Card className="Service__Card">
        <div className="Service__Card__Img__Container">
          <GatsbyImage
            className="Service__Card__Img"
            image={imagen}
            alt={`img-${title}`}
          ></GatsbyImage>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ServiceItem

// make propTypes
