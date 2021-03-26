import React from "react"
import Navbar from "react-bootstrap/Nav"
// import links from "./../constants/links"
import logo from "../images/logoprincipal.png"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <StaticImage
            src={logo}
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="logo bitlogic"
            // style={{ marginBottom: `1.45rem` }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar>
    </>
  )
}
