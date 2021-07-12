import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import ServicesSection from "../ServicesSection/ServicesSection"
import BitWaySection from "../BitWaySection/BitWaySection"
import { useBanner, useHomePage } from "../../../hooks/index"
import Layout from "../../layout"
import { Seo } from "../../index"

import "./HomeContainer.scss"

const Home = () => {
  /* const data = useHomePage() */
  const dataBanner = useBanner()
  const banner = dataBanner?.allStrapiBanners?.nodes.find(
    banner => banner.page === "home"
  )

  const imagen = getImage(banner.image)
  const logoImage = getImage(banner.logo)

  return (
    <Layout>
      <Seo title="Home" />
      {
        <BgImage image={imagen} className="Home__BgImage">
          <div className="Home__Logo__Container">
            <GatsbyImage
              image={logoImage}
              alt={`img-${banner.title}`}
            ></GatsbyImage>
          </div>
          <h1 className="Home__Title">{banner.title}</h1>
        </BgImage>
        /*{ <ServicesSection />}
      {/* <BitWaySection /> */
      }
    </Layout>
  )
}

export default Home
