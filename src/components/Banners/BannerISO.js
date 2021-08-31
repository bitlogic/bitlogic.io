import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useBanner } from "../../hooks/index"
import showdown from "showdown"
import "./BannerISO.scss"

const BannerISO = ({ banner, title }) => {
  const dataBanner = useBanner()

  const bannerSelected = dataBanner?.allStrapiBanners?.nodes.find(
    ban => ban.strapiId === banner.id
  )
  const { logo, summary } = bannerSelected

  const titles = summary
  let converter = new showdown.Converter()
  let post = titles
  let html = converter.makeHtml(post)

  const ReplaceHtml = () => {
    return { __html: html }
  }
  return (
    <div className="bannerISO">
      <div className="bannerISO__row">
        <div className="bannerISO__titleContainer ">
          <h2>{title}</h2>
          <div
            dangerouslySetInnerHTML={ReplaceHtml()}
            className="bannerISO__subtitle"
          ></div>
        </div>
        <div className="bannerISO__image ">
          <GatsbyImage image={getImage(logo.localFile)} alt={`img-${title}`} />
        </div>
      </div>
    </div>
  )
}
export default BannerISO
