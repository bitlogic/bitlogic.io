import * as React from "react"

import Layout from "../../components/layout"
import { Seo } from "../index"
import useBitwayPage from "../../hooks/useBitwayPage"
import Gallery from "./Gallery/Gallery"
import Paragraph from "./Paragraph/Paragraph"
import "./BitwayContainer.scss"
import BannerActionCall from "../Banners/BannerActionCall"
import { useBanner } from "../../hooks"

const BitwayPage = () => {
  const {
    allStrapiBitwayPage: { nodes },
  } = useBitwayPage()

  const sections = nodes[0].sections

  const bannerData = useBanner()

  const bannerActionCall = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "bitway" && banner.type === "actionCall"
  )

  const { pageTitle, pageDescription, pageKeywords } = nodes[0].SEO

  // vista desktop
  // sort funciona con referencia, asi que se crea una nueva array
  const sectionswide = [...sections]
  // se ordenan las galerias primero
  // se filtran las galerias y los parrafos
  const gallery = sectionswide.filter(e => e.galleryImage)
  const paragraph = sectionswide
    .filter(e => e.body)
    .map(e => <Paragraph key={e.index} text={e} />)
  // y se renderizan
  return (
    <Layout>
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
      />
      <div className="bitway-body">
        {/* se renderiza por vistas */}
        {/* vista mobile */}
        {sections?.map((elem, index, array) => {
          if (elem.galleryImage) {
            if (array[index - 1]?.galleryImage) {
              return null
            }
            if (array[index + 1]?.galleryImage) {
              return (
                <Gallery
                  className="bitway-mobile"
                  key={index}
                  content={[elem, array[index + 1]]}
                />
              )
            } else {
              return (
                <Gallery
                  className="bitway-mobile"
                  key={index}
                  content={[elem]}
                />
              )
            }
          } else if (elem.body) {
            return (
              <Paragraph className="bitway-mobile" key={index} text={elem} />
            )
          } else {
            return null
          }
        })}
        {/* vista desktop */}
        <Gallery className="bitway-desktop" content={gallery} />
        <section className="bitway-desktop">{paragraph}</section>
      </div>
      <BannerActionCall banner={bannerActionCall} />
    </Layout>
  )
}

export default BitwayPage
