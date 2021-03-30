import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "gatsby"
import logo from "../../images/logoprincipal.png"
import "./Footer.css"
import ContactData from "../../constants/ContactData/contactData"
import SocialLinks from "./../../constants/socialLinks"

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Container className="Footer__Container">
          <Row className="Footer__Row">
            <Col
              xs={12}
              md={12}
              lg={4}
              className="Footer__Col Footer__Col__Logo"
            >
              {" "}
              <Link to="/">
                <img
                  src={logo}
                  width={143}
                  // quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="logo bitlogic"
                  //   style={{ marginLeft: `58px`, marginBottom: "0rem" }}
                  className="Footer__Logo d-inline-block align-center"
                />
              </Link>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="Footer__Col Footer__Col__Contact"
            >
              <div className="Footer__Title">
                <h3 className="Footer__Title__Text">Contacto</h3>
                <ContactData />
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="Footer__Col Footer__Col__Social"
            >
              <div className="Footer__Title">
                <h3 className="Footer__Title__Text">S&iacute;guenos</h3>
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
