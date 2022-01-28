import * as React from "react"
import { useEdTech } from "../../hooks"
import { BannerTop, BannerActionCall, Seo } from "../index"
import Layout from "../layout"

import Cards from "../Cards/Cards"
import "./EdtechContainer.scss"

const EdTech = () => {
  const data = useEdTech()

  const edTechs = data?.allStrapiEdteches?.nodes

  const content = edTechs.map(tech => <Cards key={tech.id} tech={tech} />)

  const bannerTop = data?.allStrapiEdTechPage?.nodes[0].topBanner
  const bannerActionCall = data?.allStrapiEdTechPage?.nodes[0].actionCallBanner

  const {
    pageTitle,
    pageDescription,
    pageKeywords,
  } = data?.allStrapiEdTechPage?.nodes[0].seo

  return (
    <Layout>
      {data?.allStrapiEdTechPage?.nodes[0].seo && (
        <Seo
          title={pageTitle}
          description={pageDescription}
          keywords={pageKeywords}
        />
      )}
      {bannerTop && (
        <BannerTop banner={bannerTop} />
      )}
      {content.length > 0 && (
        <div className="container-fluid EdTech__container">{content}</div>
      )}
      {bannerActionCall && (
        <BannerActionCall banner={bannerActionCall} />
      )}
    </Layout>
  )
}

export default EdTech
