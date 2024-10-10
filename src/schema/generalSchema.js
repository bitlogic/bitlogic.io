const generalSchema = `
  type LocalFile {
    id: Int
    name: String
    alternativeText: String
    url: String
    localFile: File
    formats: StrapiImageFormats
    caption: String
    width: Int
    height: Int
    hash: String
    ext: String
    mime: String
    size: Float
    provider: String
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
  }

  type LocalFile {
    localFile: File @link(from: "localFile___NODE")
  }

  type StrapiImageFormats {
    thumbnail: StrapiImageFormatsSizes
    large: StrapiImageFormatsSizes
    medium: StrapiImageFormatsSizes
    small: StrapiImageFormatsSizes
  }
  
  type StrapiImageFormatsSizes {
    name: String
    hash: String
    ext: String
    mime: String
    width: Int
    height: Int
    size: Float
    url: String
  }

  type BodyComponent {
    id: Int!
    strapi_component: String
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
    titlePosition: String
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
    button: ComponentButton
    media: [ComponentContentImage]
    items: [ComponentSelectedGridItem]
    dualSectionPart: [ComponentDualSectionPart]
    Card: [ComponentContentPageCard]
    ListItem: [ComponentContentPageCard]
    professionals: [StrapiProfessional]
    articles: [StrapiArticle]
  }

  type ComponentSeo {
    pageTitle: String!
    pageDescription: String!
    pageKeywords: String
  }

  type ComponentButton {
    id: Int
    content: String!
    url: String
    landing_page: StrapiLandingPage
  }

  type ComponentDualSection {
    id: ID!
    title: String
    summary: String
    dualSectionPart: [ComponentDualSectionPart]
  }

  type ComponentDualSectionPart {
    id: Int!
    title: String!
    description: String!
    image: LocalFile 
    button: ComponentButton
    backgroundImage: LocalFile 
    backgroundImageDark: LocalFile 
    navTitle: String
  }

  type ComponentTransition {
    id: ID!
    text: String
    image: LocalFile 
    imagePosition: String
    color: String!
  }

  type ComponentQuote {
    id: ID!
    title: String
    description: String!
    profile: LocalFile 
    image: LocalFile 
    variant: String
    button: ComponentButton
    profileDescription: String
    videoUrl: String
  }

  type ComponentVideoBackground {
    id: ID!
    description: String
    title: String
    video: LocalFile 
    button: ComponentButton
    backgroundImage: LocalFile 
    videoUrl: String
  }

  type ComponentText {
    id: ID!
    title: String
    text: String!
    backgroundImage: LocalFile 
    titlePosition: String!
  }

  type ComponentLogosSection {
    id: ID!
    title: String
    summary: String
    media: [ComponentContentImage]
  }

  type ComponentContentImage {
    id: Int!
    img: LocalFile 
    imageDark: LocalFile 
    name: String!
  }

  type ComponentBannerList {
    id: ID!
    title: String
    Card: [ComponentContentPageCard]
    contactForm: Boolean
    concactFormAnchor: String
    navTitle: String
    callToAction: String
  }

  type ComponentContentPageCard {
    id: Int!
    icon: LocalFile 
    description: String
    title: String
    landing_page: StrapiLandingPage
  }

  type ComponentBanner {
    id: ID!
    title: String!
    variant: String!
    summary: String
    image: LocalFile 
    button: ComponentButton
    imageDark: LocalFile 
    animation: JSON
    navTitle: String
  }

  type ComponentCatsone {
    id: ID!
    show: Boolean
  }

  type ComponentFeaturedBlogs {
    id: ID!
    title: String
    subtitle: String
    allBlog: Boolean
    navTitle: String
    articles(sort: String, limit: Int, start: Int, where: JSON): [StrapiArticle]
  }

  type ComponentPipedriveForm {
    id: ID!
    title: String
    content: String
    form_url: String!
    image: LocalFile 
    animation: JSON
  }

  type ComponentSelectedGrid {
    id: ID!
    title: String
    subtitle: String
    items: [ComponentSelectedGridItem]
    backgroundImage: LocalFile 
    backgroundImageDark: LocalFile 
    callToAction: String
  }

  type ComponentSelectedGridItem {
    id: Int!
    text: String
    image: LocalFile 
    title: String!
    navTitle: String
    landing_page: StrapiLandingPage
  }

  type ComponentProfessionalsSection {
    id: ID!
    title: String
    summary: String
    professionals(sort: String, limit: Int, start: Int, where: JSON): [StrapiProfessional]
  }

  type ComponentListItems {
    id: ID!
    title: String
    ListItem: [ComponentContentPageCard]
  }
`

module.exports = {
  value: generalSchema,
}
