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
  } = data?.allStrapiGlobalSeo?.nodes[0] || {}

  const metaDescription = description || siteDesc
  const defaultTitle = siteTitle
  const preventIndex = robots ? `index, follow` : `noindex, nofollow`
  const defaultKeywords = keywords || siteKeywords
  console.log(defaultTitle)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        defaultTitle
          ? ((title.length + defaultTitle.length) <= 50 // Cambia 50 por el límite deseado
              ? `%s | ${defaultTitle}` // Si el título es corto, concatenar
              : `%s`) // Si es largo, usar solo el título particular
          : null // Si no hay defaultTitle, no usar plantilla
      }      
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
  keywords: ``
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string
}

export default Seo
