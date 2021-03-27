import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "gatsby"
import logo from "../../images/logoprincipal.png"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Container fluid>
          <Row>
            <Col>
              {" "}
              <Link to="/">
                <img
                  src={logo}
                  width={143}
                  // quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="logo bitlogic"
                  //   style={{ marginLeft: `58px`, marginBottom: "0rem" }}
                  className="d-inline-block align-center"
                />
              </Link>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Footer
