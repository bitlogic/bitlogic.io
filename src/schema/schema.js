const schema = `

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
}

type StrapiHome implements Node {
  body: JSON
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
  pageMetadata: StrapiHomePageMetadata
  strapiId: Int
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
}

type StrapiHomePageMetadata {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}

type StrapiServicesPage implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
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
  pageMetadata: StrapiServicesPagePageMetadata
  strapiId: Int
  topBanner: StrapiServicesPageTopBanner
  actionCallBanner: StrapiServicesPageActionCallBanner
}

type StrapiServicesPageTopBanner {
  id: Int
  title: String
  summary: String
  bgImage: LocalFile
  bgImageDarkMode: LocalFile
}

type StrapiServicesPageActionCallBanner {
  id: Int
  title: String
  link: StrapiServicesPageActionCallBannerLink
  image: LocalFile
  imageDarkMode: LocalFile
}

type StrapiServicesPageActionCallBannerLink {
  id: Int
  name: String
  pathTo: String
}

type StrapiServicesPagePageMetadata {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}

type StrapiServices implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  title: String
  description: String
  visible: Boolean
  homeIntro: String
  homeTitle: String
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
  icon: LocalFile
  strapiId: Int
  iconDarkMode: LocalFile
}

type StrapiGlobalSeo implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  siteURL: String
  robots: Boolean
  author: String
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
  siteMetadata: StrapiGlobalSeoSiteMetadata
  strapiId: Int
}

type StrapiGlobalSeoSiteMetadata {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}

type StrapiEdteches implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  title: String
  content: String
  homeIntro: String
  homeTitle: String
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
  edTechSubmodules: StrapiEdtechesEdTechSubmodules
  icon: LocalFile
  homeIcon: LocalFile
  strapiId: Int
  iconDarkMode: LocalFile
  homeIconDarkMode: LocalFile
}


type StrapiEdtechesEdTechSubmodules {
  id: Int
  ed_tech_submodules: [StrapiEdtechesEdTechSubmodulesEd_tech_submodules]
}

type StrapiEdtechesEdTechSubmodulesEd_tech_submodules {
  id: Int
  edTechType: String
  title: String
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
}

type StrapiEdTechSubmodules implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  edTechType: String
  title: String
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
  submodule: StrapiEdTechSubmodulesSubmodule
  submoduleItem: [StrapiEdTechSubmodulesSubmoduleItem]
  strapiId: Int
}

type StrapiEdTechSubmodulesSubmodule {
  id: Int
  title: String
  description: String
  logo: LocalFile
  logoDarkMode: LocalFile
}


type StrapiEdTechSubmodulesSubmoduleItem {
  id: Int
  content: String
  title: String
  icon: LocalFile
  iconDarkMode: LocalFile
}


type StrapiEdTechPage implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
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
  SEO: StrapiEdTechPageSEO
  banners: [StrapiEdTechPageBanners]
  strapiId: Int
  topBanner: StrapiEdTechPageTopBanner
  actionCallBanner: StrapiEdTechPageActionCallBanner
}

type StrapiEdTechPageTopBanner {
  id: Int
  title: String
  summary: String
  bgImage: LocalFile
  bgImageDarkMode: LocalFile
}

type StrapiEdTechPageActionCallBanner {
  id: Int
  title: String
  link: StrapiEdTechPageActionCallBannerLink
  image: LocalFile
  imageDarkMode: LocalFile
}

type StrapiEdTechPageActionCallBannerLink {
  id: Int
  name: String
  pathTo: String
}

type StrapiEdTechPageSEO {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}

type StrapiEdTechPageBanners {
  id: Int
  banner: StrapiEdTechPageBannersBanner
}

type StrapiEdTechPageBannersBanner {
  id: Int
  title: String
  enable: Boolean
  page: String
  type: String
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
  image: LocalFile
  logo: LocalFile
}

type StrapiBanners implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  title: String
  enable: Boolean
  page: String
  type: String
  summary: String
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
  link: StrapiBannersLink
  image: LocalFile
  logo: LocalFile
  strapiId: Int
  imageDarkMode: LocalFile
  logoDarkMode: LocalFile
}


type StrapiBannersLink {
  id: Int
  name: String
  pathTo: String
}

type StrapiBitwayPage implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
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
  SEO: StrapiBitwayPageSEO
  sections: [StrapiBitwayPageSections]
  strapiId: Int
  banners: [StrapiBitwayPageBanners]
  banner: [StrapiBitwayPageBanner]
  actionCallBanner: StrapiBitwayPageActionCallBanner
}

type StrapiBitwayPageActionCallBanner {
  id: Int
  title: String
  link: StrapiBitwayPageActionCallBannerLink
  image: LocalFile
  imageDarkMode: LocalFile
}

type StrapiBitwayPageActionCallBannerLink {
  id: Int
  name: String
  pathTo: String
}


type StrapiBitwayPageBanner {
  id: Int
  enable: Boolean
}

type StrapiBitwayPageBanners {
  id: Int
  banner: StrapiBitwayPageBannersBanner
  enable: Boolean
}

type StrapiBitwayPageBannersBanner {
  id: Int
  title: String
  enable: Boolean
  page: String
  type: String
  summary: String
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
  logo: LocalFile
}

type StrapiBitwayPageSEO {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}

type StrapiBitwayPageSections {
  id: Int
  body: String
  type: String
  galleryImage: [StrapiBitwayPageSectionsGalleryImage]
}

type StrapiBitwayPageSectionsGalleryImage {
  id: Int
  text: String
  caption: String
  image: LocalFile
  imageDark: LocalFile
}

type StrapiBlogCategory implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  name: String
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
  articles: [StrapiBlogCategoryArticles]
  strapiId: Int
  article: [StrapiBlogCategoryArticle]
}

type StrapiBlogCategoryArticle {
  id: Int
  title: String
  description: String
  summary: String
  slug: String
  blog_category: Int
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
  author: [StrapiBlogCategoryArticleAuthor]
  image: LocalFile
}

type StrapiBlogCategoryArticleAuthor {
  id: Int
  name: String
  summary: String
  subTitle: String
  image: LocalFile
}

type StrapiBlogCategoryArticleAuthorImage {
  id: Int
  name: String
  width: Int
  height: Int
  formats: StrapiBlogCategoryArticleAuthorImageFormats
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
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
  localFile: File
}

type StrapiBlogCategoryArticleAuthorImageFormats {
  thumbnail: StrapiBlogCategoryArticleAuthorImageFormatsThumbnail
  large: StrapiBlogCategoryArticleAuthorImageFormatsLarge
  medium: StrapiBlogCategoryArticleAuthorImageFormatsMedium
  small: StrapiBlogCategoryArticleAuthorImageFormatsSmall
}

type StrapiBlogCategoryArticleAuthorImageFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogCategoryArticleAuthorImageFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogCategoryArticleAuthorImageFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogCategoryArticleAuthorImageFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogCategoryArticleImage {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: StrapiBlogCategoryArticleImageFormats
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
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
  localFile: File
}

type StrapiBlogCategoryArticleImageFormats {
  thumbnail: StrapiBlogCategoryArticleImageFormatsThumbnail
  large: StrapiBlogCategoryArticleImageFormatsLarge
  medium: StrapiBlogCategoryArticleImageFormatsMedium
  small: StrapiBlogCategoryArticleImageFormatsSmall
}

type StrapiBlogCategoryArticleImageFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogCategoryArticleImageFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogCategoryArticleImageFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogCategoryArticleImageFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogCategoryArticles {
  id: Int
  title: String
  description: String
  summary: String
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
  image: LocalFile
  slug: String
}

type StrapiArticle implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  title: String
  description: String
  summary: String
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
  image: LocalFile
  blog_categories: [StrapiArticleBlog_categories]
  strapiId: Int
  slug: String
  blog_category: StrapiArticleBlog_category
  author: [StrapiArticleAuthor]
}

type StrapiArticleBlog_category {
  id: Int
  name: String
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
}

type StrapiArticleAuthor {
  id: Int
  name: String
  summary: String
  subTitle: String
  image: LocalFile
}

type StrapiArticleAuthorImage {
  id: Int
  name: String
  width: Int
  height: Int
  formats: StrapiArticleAuthorImageFormats
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
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
  localFile: File
}

type StrapiArticleAuthorImageFormats {
  thumbnail: StrapiArticleAuthorImageFormatsThumbnail
  large: StrapiArticleAuthorImageFormatsLarge
  medium: StrapiArticleAuthorImageFormatsMedium
  small: StrapiArticleAuthorImageFormatsSmall
}

type StrapiArticleAuthorImageFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiArticleAuthorImageFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiArticleAuthorImageFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiArticleAuthorImageFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiArticleBlog_categories {
  id: Int
  name: String
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
}

type StrapiBlogPage implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
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
  pageMetadata: StrapiBlogPagePageMetadata
  strapiId: Int
  title: String
  actionCallBanner: StrapiBlogPageActionCallBanner
}

type StrapiBlogPageActionCallBanner {
  id: Int
  title: String
  link: StrapiBlogPageActionCallBannerLink
  image: LocalFile
  imageDarkMode: LocalFile
}

type StrapiBlogPageActionCallBannerLink {
  id: Int
  name: String
  pathTo: String
}

type StrapiBlogPagePageMetadata {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}

type StrapiContactPage implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  title: String
  imageName: String
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
  pageMetadata: StrapiContactPagePageMetadata
  contactForm: StrapiContactPageContactForm
  image: LocalFile
  strapiId: Int
}

type StrapiContactPageContactForm {
  id: Int
  portalId: String
  formId: String
}

type StrapiContactPagePageMetadata {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}

type LocalFile {
  localFile: File @link(from: "localFile___NODE")
}

type StrapiGlobalConfig implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
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
  script: [StrapiGlobalConfigScript]
  strapiId: Int
}

type StrapiGlobalConfigScript {
  id: Int
  name: String
  enable: Boolean
  src: String
}

type StrapiLayoutFooter {
  id: Int
  subscription: StrapiLayoutFooterSubscription
  navegation: StrapiLayoutFooterNavegation
  socialMedia: StrapiLayoutFooterSocialMedia
  location: StrapiLayoutFooterLocation
  contact: StrapiLayoutFooterContact
  internalLink: StrapiLayoutFooterInternalLink
  navbar: StrapiLayoutNavbar
  logo: LocalFile
}


type StrapiLayoutNavbar {
  id: Int
  navbarItem: [StrapiLayoutNavbarNavbarItem]
  logo: StrapiLayoutNavbarLogo
}

type StrapiLayoutNavbarNavbarItem {
  id: Int
  label: String
  landing: StrapiLayoutNavbarNavbarItemLanding
  url: String
  visible: Boolean
  dropdown: Boolean
}

type StrapiLayoutNavbarNavbarItemLanding {
  id: Int
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
}

type StrapiLayoutNavbarLogo {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
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
  localFile: File
}

type StrapiLayoutFooterSubscription {
  id: Int
  title: String
}

type StrapiLayoutFooterNavegation {
  id: Int
  title: String
  pageLink: [StrapiLayoutFooterNavegationPageLink]
}

type StrapiLayoutFooterNavegationPageLink {
  id: Int
  name: String
  pathTo: String
}

type StrapiLayoutFooterSocialMedia {
  id: Int
  socialMedia: [StrapiLayoutFooterSocialMediaSocialMedia]
}

type StrapiLayoutFooterSocialMediaSocialMedia {
  id: Int
  url: String
  name: String
  icon: StrapiLayoutFooterSocialMediaSocialMediaIcon
  order: Int
}

type StrapiLayoutFooterSocialMediaSocialMediaIcon {
  id: Int
  name: String
  code: String
  type: String
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
  icon: StrapiLayoutFooterSocialMediaSocialMediaIconIcon
}

type StrapiLayoutFooterSocialMediaSocialMediaIconIcon {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
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
  localFile: File
}

type StrapiLayoutFooterLocation {
  id: Int
  title: String
  iconText: [StrapiLayoutFooterLocationIconText]
}

type StrapiLayoutFooterLocationIconText {
  id: Int
  name: String
  icon: StrapiLayoutFooterLocationIconTextIcon
}

type StrapiLayoutFooterLocationIconTextIcon {
  id: Int
  name: String
  code: String
  type: String
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
  icon: StrapiLayoutFooterLocationIconTextIconIcon
}

type StrapiLayoutFooterLocationIconTextIconIcon {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
  provider: String
  created_at(
    formatString: String
    fromNow: Boolean
    difference: String
    locale: String
  ): Date
  updated_at(
    fromNow: Boolean
    difference: String
    locale: String
  ): Date
  localFile: File
}

type StrapiLayoutFooterContact {
  id: Int
  title: String
  iconText: [StrapiLayoutFooterContactIconText]
}

type StrapiLayoutFooterContactIconText {
  id: Int
  name: String
  icon: StrapiLayoutFooterContactIconTextIcon
}

type StrapiLayoutFooterContactIconTextIcon {
  id: Int
  name: String
  code: String
  type: String
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
  icon: StrapiLayoutFooterContactIconTextIconIcon
}

type StrapiLayoutFooterContactIconTextIconIcon {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
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
  localFile: File
}

type StrapiLayoutFooterInternalLink {
  id: Int
  name: String
  pathTo: String
}

type StrapiLayoutFooterLogo {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
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
  localFile: File
}

`


module.exports = {
  value: schema,
}
