import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// import ReactMarkdown from "react-markdown"
import MarkdownView from "react-showdown"
import "./BlogArticle.scss"

const BlogArticle = ({ title, summary, image, slug, text }) => {
  return (
    <div className="article__container">
      <GatsbyImage
        image={getImage(image?.localFile)}
        alt={title}
        className="article__image"
      />
      <div className="article__description">
        <h6>{`${title} ...`}</h6>
        <div>
          <MarkdownView markdown={`${summary} ...`} />
          {/* <ReactMarkdown source={`${summary} ...`} /> */}
        </div>
        <div className="article__link">
          <Link to={slug}>
            <button>{text}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle
