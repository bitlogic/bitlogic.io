const homeSchema = `

type StrapiHome implements Node {
    body: JSON
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
    pageMetadata: StrapiHomePageMetadata
    strapiId: Int
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
  }
  
  type StrapiHomePageMetadata {
    id: Int
    pageTitle: String
    pageDescription: String
    pageKeywords: String
  }

`
module.exports = {
  value: homeSchema,
}
