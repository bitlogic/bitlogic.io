const blogSchema = `
  type StrapiBlogCategory implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!
    id: ID!
    strapiId: Int
    name: String!
    article(sort: String, limit: Int, start: Int, where: JSON): [StrapiArticle]
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
  
  type StrapiArticle implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!
    id: ID!
    strapiId: Int
    title: String!
    description: String!
    summary: String!
    slug: String!
    image: LocalFile
    imagePage: LocalFile
    seo: ComponentSeo
    blog_category: StrapiBlogCategory
    author: [StrapiArticleAuthor]
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
  
  type StrapiArticleAuthor {
    id: Int!
    name: String!
    summary: String
    subTitle: String
    image: LocalFile
  }
  
  type StrapiBlogPage implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!
    id: ID!
    pageMetadata: ComponentSeo
    callToActionArticle: String
    banner: ComponentBanner
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
