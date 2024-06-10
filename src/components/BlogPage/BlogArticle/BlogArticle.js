import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// import ReactMarkdown from "react-markdown"
import MarkdownView from "react-showdown"
import "./BlogArticle.scss"
import PropTypes from "prop-types"

const BlogArticle = ({ title, summary, image, slug, text }) => {
  const imageArticle = image?.localFile ? getImage(image.localFile) : undefined

  return (
    <div className="article__container">
      {imageArticle ? (
        <GatsbyImage
          image={imageArticle}
          alt={image?.alternativeText || title}
          className="article__image"
        />
      ) : (
        <img src={image?.url}
          alt={image?.alternativeText || title}
          className="article__image"
        />
      )}
      <div className="article__description">
        <h6>{`${title}`}</h6>
        {summary && (
          <div>
            <MarkdownView markdown={`${summary}`} />
            {/* <ReactMarkdown source={`${summary} ...`} /> */}
          </div>
        )}
        <div className="article__link">
          <Link to={slug}>
            <small>{text || 'Ver más'}</small>
          </Link>
        </div>
      </div>
    </div>
  )
}

BlogArticle.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.shape({
    alternativeText: PropTypes.string,
    url: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired
      })
    })
  }).isRequired
};

export default BlogArticle;

