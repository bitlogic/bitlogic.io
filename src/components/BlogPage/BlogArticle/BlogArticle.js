import React from "react"
import { Link } from "gatsby"
import MarkdownView from "react-showdown"
import PropTypes from "prop-types"
import CustomImage from "../../CustomImage/CustomImage"
import "./BlogArticle.scss"

const BlogArticle = ({
  title,
  summary,
  image,
  slug,
  text,
  destacado = false,
}) => (
  <div
    className={`article__container${destacado ? ' article--destacado' : ''}`}
    data-nosnippet
  >
    {destacado && (
      <span className="article__badge">Destacado</span>
    )}

    <CustomImage
      image={image}
      alt={image?.alternativeText || title}
      className="article__image"
      width={140}
      height={170}
    />

    <div className="article__description">
      <h4 className="article__title">{title}</h4>
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

BlogArticle.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alternativeText: PropTypes.string,
    url: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }),
    }),
  }).isRequired,
  slug: PropTypes.string.isRequired,
  text: PropTypes.string,
  destacado: PropTypes.bool,
}

export default BlogArticle;



