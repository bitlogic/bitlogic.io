import * as React from "react"
import { useEdTech, useBanner } from "../../hooks"
import { BannerTop, BannerActionCall } from "../index"
import Layout from "../layout"
import SEO from "../seo"
import "./EdtechContainer.scss"
import Cards from "../Cards/Cards"

const EdTech = () => {
  const data = useEdTech()
  const bannerData = useBanner()
  const edTechs = data?.allStrapiEdteches?.nodes

  const content = edTechs.map(tech => <Cards key={tech.id} tech={tech} />)

  const bannerTop = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "edtech" && banner.type === "top"
  )
  const bannerActionCall = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "edtech" && banner.type === "actionCall"
  )

  return (
    <Layout>
      <SEO title="EdTech" />
      <BannerTop banner={bannerTop} />
      <div className="container">{content}</div>
      <BannerActionCall banner={bannerActionCall} />
    </Layout>
  )
}

export default EdTech
