const iconScheme = `
  type StrapiIcon implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!
    id: ID!
    strapiId: Int
    name: String!
    code: String!
    type: String!
    icon: LocalFile
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
  value: iconScheme,
}
