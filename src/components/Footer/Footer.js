import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import ContactData from "./ContactData/contactData"
import Location from './Location/location';
import SocialLinks from "./SocialLinks/socialLinks"
import Navegation from './Navegation/navegation';
import Subscription from './Subscription/subscription';
import Sites from './Sites/Sites'
import "./Footer.scss"


const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Container fluid className="Footer__Container">
          <Col>
            <div className="Footer__Row">
              <div className="Footer__Title Footer__Col Footer__Col__Navegation">
                <Navegation />
              </div>

              <div className="Footer__Title Footer__Col Footer__Col__Contact">
                <ContactData />
              </div>

              <div className="Footer__Title Footer__Col Footer__Col__Contact">
                <Location />
              </div>

              <div className="Footer__Col">
                <Sites />
              </div>

              <div className="Footer__Title Footer__Col Footer__Col__Subscription">
                <Subscription />
              </div>
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
        </Container>
      </div>
    </>
  )
}
export default Footer
