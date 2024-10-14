const blogSchema = `
  type StrapiProfessional implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!    
    id:ID!
    strapiId: ID
    name: String!
    quote: String!
    position: String
    linkedin: String
    photo: LocalFile
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
  value: blogSchema,
}
