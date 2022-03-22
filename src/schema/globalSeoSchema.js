const globalSeoSchema = `
type StrapiGlobalSeo implements Node {
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
    siteURL: String
    robots: Boolean
    author: String
    published_at(
      formatString: String
      fromNow: Boolean
      difference: String
      locale: String
    ): Date
    created_at(
      formatString: String
      fromNow: Boolean
      difference: String
      locale: String
    ): Date
    updated_at(
      formatString: String
      fromNow: Boolean
      difference: String
      locale: String
    ): Date
    siteMetadata: StrapiGlobalSeoSiteMetadata
    strapiId: Int
  }
  
  type StrapiGlobalSeoSiteMetadata {
    id: Int
    pageTitle: String
    pageDescription: String
    pageKeywords: String
  }
`
module.exports = {
    value: globalSeoSchema,
  }
