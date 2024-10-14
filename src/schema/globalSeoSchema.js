const globalSeoSchema = `
  type StrapiGlobalSeo implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!
    id: ID!
    siteURL: String!
    robots: Boolean!
    author: String!
    siteMetadata: ComponentSeo
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

  type StrapiGlobalConfig implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!
    id: ID!
    script: [StrapiGlobalConfigScript]
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
  
  type StrapiGlobalConfigScript {
    id: Int!
    name: String
    enable: Boolean
    src: String!
  }
`
module.exports = {
  value: globalSeoSchema,
}
