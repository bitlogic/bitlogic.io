const caseSchema = `
  type StrapiCase implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!
    id: ID!
    strapiId: Int
    title: String!
    description: String
    button: ComponentButton
    quote: ComponentQuote
    image: LocalFile
    subtitle: String
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
  value: caseSchema,
}
