import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import MarkdownView from "react-showdown"
import "./BlogArticle.scss"


const BlogArticle = ({ title, summary, image, slug, text }) => {
  return (
    <div className="article__container">
      <div className="article__image">
        <GatsbyImage image={getImage(image.localFile)} alt={title} />
      </div>
      <div className="article__description">
        <h3>{title}</h3>
        <div>
          <MarkdownView markdown={summary} />
        </div>
        <div className="article__link">
          <Link to={slug}>{text}</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle
