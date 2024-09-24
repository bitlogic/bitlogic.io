const landingSchema = `
type StrapiLandingPage implements Node {
    name: String
    body: [BodyComponent]
    navigation: StrapiNavigation
    slug: String  
    parent_page : StrapiLandingPage
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

  type StrapiNavigation {
    title: String
    showSiblingPages: Boolean
    relatedPages: StrapiNavigationRelatedPages
  }

  type StrapiNavigationRelatedPages {
    title: String
    pages: [Button]
  }

  type BodyComponent {
    id: ID!
    title: String
    subtitle: String
    summary: String
    text: String
    description: String
    concactFormAnchor: String
    callToAction: String
    videoUrl: String
    variant: String
    imagePosition: String
    color: String
    profileDescription: String
    form_url: String
    content: String
    animation: JSON
    contactForm: Boolean
    allBlog: Boolean
    show: Boolean
    image: LocalFile
    imageDark: LocalFile
    backgroundImage: LocalFile
    backgroundImageDark: LocalFile
    video: LocalFile
    profile: LocalFile
    button: Button
    media: [CustomImage]
    items: [GridItems]
    dualSectionPart: [SectionPart]
    Card: [Card]
    ListItem: [Card]
    professionals: [StrapiProfessional]
    articles: [StrapiArticle]
  }

  type Card {
    id: ID!
    title: String
    description: String
    landing_page: StrapiLandingPage
    icon: LocalFile
  }

  type GridItems {
    id: ID!
    title: String!
    text: String
    landing_page: StrapiLandingPage
    image: LocalFile
  }

  type CustomImage {
    id: ID!
    name: String
    img: LocalFile
    imageDark: LocalFile
  }

  type SectionPart {
    id: ID!
    title: String
    description: String
    button: Button
    image: LocalFile
    backgroundImage: LocalFile
    backgroundImageDark: LocalFile
  }

  type Button {
    id: ID
    content: String!
    url: String
    landing_page: StrapiLandingPage
  }

  type LocalFile {
    localFile: File @link(from: "localFile___NODE")
  }
`
module.exports = {
  value: landingSchema,
}
