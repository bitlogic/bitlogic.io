const homeSchema = `
  type StrapiHome implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!
    id: ID!
    pageMetadata: ComponentSeo
    body: [BodyComponent]
    published_at(
      formatString: String
      fromNow: Boolean
      difference: String
      locale: String
    ): Date!
    created_at(
      formatString: String
      fromNow: Boolean
      difference: String
      locale: String
    ): Date!
    updated_at(
      formatString: String
      fromNow: Boolean
      difference: String
      locale: String
    ): Date
  }
`
module.exports = {
  value: homeSchema,
}
