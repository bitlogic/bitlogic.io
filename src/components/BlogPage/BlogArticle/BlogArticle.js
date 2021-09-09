import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import showdown from "showdown"
import "./BlogArticle.scss"


const BlogArticle = ({ title, summary, image, slug, text }) => {
  let converter = new showdown.Converter()
  let html = converter.makeHtml(summary)

  const ReplaceHtml = () => {
    return { __html: html }
  }

  return (
    <div className="article__container">
      <GatsbyImage
        image={getImage(image.localFile)}
        alt={title}
        className="article__image"
      />
      <div className="article__description">
        <h3>{title}</h3>
        <div>
          <p dangerouslySetInnerHTML={ReplaceHtml()} />
        </div>
        <div className="article__link">
          <Link to={slug}>{text}</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle
