const landingSchema = `
type StrapiLandingPage implements Node {
    body: JSON
    name: String
    slug: String
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
    strapiId: Int
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
    seo: StrapiLandingPageSeo
  }
  
  type StrapiLandingPageSeo {
    id: Int
    pageTitle: String
    pageDescription: String
    pageKeywords: String
  }

  type LocalFile {
    localFile: File @link(from: "localFile___NODE")
  }
`
module.exports = {
  value: landingSchema,
}
