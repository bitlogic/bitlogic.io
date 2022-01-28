import * as React from "react"
import { useHomePage } from "../../../hooks/index"
import Layout from "../../layout"
import {
  Seo,
  CustomSection,
  BannerLogo,
  BannerBgImage,
  BannerISO,
  ServiceCards,
  EdTechCards,
  PartnersSection,
} from "../../index"

import "./HomeContainer.scss"

const Home = () => {
  const data = useHomePage()

  const homeSections = data?.allStrapiHome?.nodes[0]?.sections
  const { pageTitle, pageDescription, pageKeywords } =
    data?.allStrapiHome?.nodes[0]?.pageMetadata || {}
  const {
    topHomeBanner,
    infoImgBanner,
    infoBgBanner,
    infoBanner,
    servicesBlock,
    partnersBlock,
    edtechBlock,
  } = data?.allStrapiHome?.nodes[0]

  return (
    <Layout>
      {data?.allStrapiHome?.nodes[0]?.pageMetadata && (
        <Seo
          title={pageTitle}
          description={pageDescription}
          keywords={pageKeywords}
        />
      )}
      {topHomeBanner && <BannerLogo banner={topHomeBanner} />}
      {servicesBlock && (
        <ServiceCards
          title={servicesBlock?.title}
          services={servicesBlock?.services}
        />
      )}
      {edtechBlock && (
        <EdTechCards
          title={edtechBlock.title}
          edteches={edtechBlock.edteches}
        />
      )}
      {infoBgBanner && <BannerBgImage banner={infoBgBanner} />}
      {infoImgBanner && <BannerISO banner={infoImgBanner} />}
      {partnersBlock && (
        <PartnersSection
          title={partnersBlock.title}
          partners={partnersBlock.partners}
        />
      )}
      {infoBanner && <BannerBgImage banner={infoBanner} />}
      {homeSections && <CustomSection sections={homeSections} />}
    </Layout>
  )
}

export default Home
