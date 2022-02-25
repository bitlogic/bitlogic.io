import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ContactData from "./ContactData/contactData"
import SocialLinks from "../../constants/SocialLinks/socialLinks"
import "./Footer.scss"


const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Container className="Footer__Container">
          <Row className="Footer__Row">
            <Col
              xs={12}
              md={6}
              lg={4}
              className="Footer__Col Footer__Col__Contact"
            >
              <div className="Footer__Title">
                <ContactData/>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="Footer__Col Footer__Col__Social"
            >
              <div className="Footer__Title">
               
                <SocialLinks />
              </div>
            </Col>
            <Col
              xs={12}
              md={12}
              lg={4}
              className="Footer__Col Footer__Col__Logo"
            >
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Footer
