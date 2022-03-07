import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ContactData from "./ContactData/contactData"
import Location from './Location/location';
import SocialLinks from "./SocialLinks/socialLinks"
import Navegation from './Navegation/navegation';
import Subscription from './Subscription/subscription';
import "./Footer.scss"


const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Container fluid className="Footer__Container fluid">
          <Row className="Footer__Row">
            <Col
              xs={6}
              md={3}
              lg={4}
              xl={3}
              className="Footer__Col Footer__Col__Navegation"
            >
              <div className="Footer__Title">
                <Navegation />
              </div>
            </Col>

            <Col
              xs={6}
              md={4}
              lg={4}
              xl={3}
              className="Footer__Col Footer__Col__Contact"
            >
              <div className="Footer__Title">
                <ContactData />
              </div>
            </Col>

            <Col
              xs={6}
              md={4}
              lg={4}
              xl={3}
              className="Footer__Col Footer__Col__Contact d-none d-xl-block"
            >
              <div className="Footer__Title">
                <Location />
              </div>
            </Col>

            <Col
              xs={12}
              md={5}
              lg={4}
              xl={3}
              className="Footer__Col Footer__Col__Navegation"
            >
              <div className="Footer__Title">
                <Subscription />
              </div>
            </Col>

            <Col
              xs={12}
              md={12}
              lg={12}
              className="Footer__Col Footer__Col__Social"
            >
              <div className="Footer__Title">

                <SocialLinks />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Footer
