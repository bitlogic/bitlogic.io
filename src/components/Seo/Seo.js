import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useGlobalSeo } from "../../hooks"

function Seo({ description, lang, meta, title, keywords }) {
  const data = useGlobalSeo()

  const {
    author,
    robots,
    siteMetadata: { siteDesc, siteKeywords, siteTitle },
    siteURL,
  } = data.allStrapiGlobalSeo.nodes[0]

  console.log("siteTitle,,,,", siteTitle)
  const metaDescription = description ? description : siteDesc
  const defaultTitle = siteTitle
  const preventIndex = robots ? `index, follow` : `noindex, nofollow`
  const defaultKeywords = keywords ? keywords : siteKeywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `robots`,
          content: preventIndex,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: defaultKeywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      // link={[]}
    />
  )
}

Seo.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
