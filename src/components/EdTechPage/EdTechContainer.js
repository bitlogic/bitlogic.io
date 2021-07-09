import * as React from "react"
import { useEdTech } from "../../hooks"
import { BannerTop, BannerActionCall } from "../index"
import Layout from "../layout"
import SEO from "../seo"
import "./EdtechContainer.scss"
import Cards from "../Cards/Cards"

const EdTech = () => {
  const data = useEdTech()

  const edTechs = data?.allStrapiEdteches?.nodes

  const bannerTop = data?.allStrapiBanners?.nodes[0]
  const banner = bannerTop && <BannerTop banner={bannerTop} />

  const content = edTechs.map(tech => <Cards key={tech.id} tech={tech} />)

  const bannerBottom = <BannerActionCall />

  return (
    <Layout>
      <SEO title="EdTech" />
      {banner}
      <div className="container">{content}</div>
      {bannerBottom}
    </Layout>
  )
}

export default EdTech
