const landingSchema = `
  type StrapiLandingPage implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!    
    id: ID!
    strapiId: Int
    name: String!
    slug: String!
    body: [BodyComponent]
    navigation: StrapiComponentNavigation
    parent_page: StrapiLandingPage
    seo: ComponentSeo
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
    ): Date!
  }

  type StrapiComponentNavigation {
    id: Int
    title: String
    showSiblingPages: Boolean
    relatedPages: StrapiComponentNavigationRelatedPages
  }

  type StrapiComponentNavigationRelatedPages {
    id: Int
    title: String!
    pages: [ComponentButton]
  }
`
module.exports = {
  value: landingSchema,
}
