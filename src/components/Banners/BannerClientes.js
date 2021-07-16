import React from "react"

import { useBanner } from "../../hooks/index"
import showdown from "showdown"
// import "./BannerISO.scss"

const BannerClientes = ({ banner, title }) => {
  const dataBanner = useBanner()

  const bannerSelected = dataBanner?.allStrapiBanners?.nodes.find(
    ban => ban.strapiId === banner.id
  )
  const { summary } = bannerSelected

  const titles = summary
  let converter = new showdown.Converter()
  let post = titles
  let html = converter.makeHtml(post)

  const ReplaceHtml = () => {
    return { __html: html }
  }
  return (
    <div className="banner">
      <div className="bannerISO__row">
        <div className="banner__titleContainer ">
          <h2>{title}</h2>
          <div
            dangerouslySetInnerHTML={ReplaceHtml()}
            className="banner__subtitle"
          ></div>
        </div>
      </div>
    </div>
  )
}
export default BannerClientes
