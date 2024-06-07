import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// import ReactMarkdown from "react-markdown"
import MarkdownView from "react-showdown"
import "./BlogArticle.scss"

const BlogArticle = ({ title, summary, image, slug, text }) => {
  const imageArticle = image?.localFile ? getImage(image?.localFile) : undefined;

  return (
    <div className="article__container">
      {imageArticle ? (
        <GatsbyImage
          image={imageArticle}
          alt={title}
          className="article__image"
        />
      ) : (
        <img src={image?.url} alt={title} className="article__image" />
      )}
      <div className="article__description">
        <h6>{`${title}`}</h6>
        <div>
          <MarkdownView markdown={`${summary}`} />
          {/* <ReactMarkdown source={`${summary} ...`} /> */}
        </div>
        <div className="article__link">
          <Link to={slug}>
            <small>{text}</small>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle
