import React from "react"
import { Link } from "gatsby"
// import ReactMarkdown from "react-markdown"
import MarkdownView from "react-showdown"
import "./BlogArticle.scss"
import PropTypes from "prop-types"
import CustomImage from "../../CustomImage/CustomImage"

const BlogArticle = ({ title, summary, image, slug, text }) => {

  return (
    <div className="article__container">
      <CustomImage image={image}
        alt={image?.alternativeText || title}
        className="article__image"
        width={140}
        height={170}
      />
      <div className="article__description">
        <h4>{title}</h4>
        <MarkdownView markdown={`${summary}`}
          dangerouslySetInnerHTML={{ __html: summary }}
        />
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
  summary: PropTypes.string.isRequired,
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

