import React from "react"
import "./BannerHead.scss"
import MarkdownView from "react-showdown"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useTheme } from "../../context/themeContext"

const BannerHead = ({ data }) => {
  const { theme } = useTheme()

  const title = data?.title

  const checkImage = () => {
    if (data?.image?.url) {
      return (
        <img
          src={
            theme === "dark" && data?.imageDark
              ? data?.imageDark?.url
              : data?.image?.url
          }
          alt={data?.image?.name}
        />
      )
    } else {
      const image = getImage(data?.image?.localFile)
      const imageDark = data?.imageDark && getImage(data?.imageDark?.localFile)
      return (
        <GatsbyImage
          image={theme === "dark" && imageDark ? imageDark : image}
          alt={`img-${title}`}
        ></GatsbyImage>
      )
    }
  }

  return (
    <div class="banner d-flex justify-content-center">
      <div class="banner__image">{checkImage()}</div>
      {title && <MarkdownView markdown={title} />}
    </div>
  )
}

export default BannerHead
