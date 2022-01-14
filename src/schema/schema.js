const schema = `
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
}

type StrapiHome implements Node {
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
  sections: [StrapiHomeSections]
  pageMetadata: StrapiHomePageMetadata
  strapiId: Int
}

type StrapiHomePageMetadata {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}

type StrapiHomeSections {
  id: Int
  banner: StrapiHomeSectionsBanner
  title: String
  type: String
  enable: Boolean
  services: [StrapiHomeSectionsServices]
  edteches: [StrapiHomeSectionsEdteches]
  partners: [StrapiHomeSectionsPartners]
}

type StrapiHomeSectionsPartners {
  id: Int
  text: String
  caption: String
  image: LocalFile
}

type StrapiHomeSectionsBanner {
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
  summary: String
}

type StrapiHomeSectionsServices {
  id: Int
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
  homeIcon: LocalFile
}

type StrapiHomeSectionsEdteches {
  id: Int
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
  icon: LocalFile
  homeIcon: LocalFile
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
  iconDarkMode: StrapiEdtechesIconDarkMode
  homeIconDarkMode: StrapiEdtechesHomeIconDarkMode
}

type StrapiEdtechesIconDarkMode {
  id: Int
  name: String
  width: Int
  height: Int
  formats: StrapiEdtechesIconDarkModeFormats
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

type StrapiEdtechesIconDarkModeFormats {
  thumbnail: StrapiEdtechesIconDarkModeFormatsThumbnail
  large: StrapiEdtechesIconDarkModeFormatsLarge
  medium: StrapiEdtechesIconDarkModeFormatsMedium
  small: StrapiEdtechesIconDarkModeFormatsSmall
}

type StrapiEdtechesIconDarkModeFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdtechesIconDarkModeFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdtechesIconDarkModeFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdtechesIconDarkModeFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdtechesHomeIconDarkMode {
  id: Int
  name: String
  width: Int
  height: Int
  formats: StrapiEdtechesHomeIconDarkModeFormats
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

type StrapiEdtechesHomeIconDarkModeFormats {
  thumbnail: StrapiEdtechesHomeIconDarkModeFormatsThumbnail
  large: StrapiEdtechesHomeIconDarkModeFormatsLarge
  medium: StrapiEdtechesHomeIconDarkModeFormatsMedium
  small: StrapiEdtechesHomeIconDarkModeFormatsSmall
}

type StrapiEdtechesHomeIconDarkModeFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdtechesHomeIconDarkModeFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdtechesHomeIconDarkModeFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdtechesHomeIconDarkModeFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
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
  logoDarkMode: StrapiEdTechSubmodulesSubmoduleLogoDarkMode
}

type StrapiEdTechSubmodulesSubmoduleLogoDarkMode {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormats
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

type StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormats {
  thumbnail: StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormatsThumbnail
  large: StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormatsLarge
  medium: StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormatsMedium
  small: StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormatsSmall
}

type StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdTechSubmodulesSubmoduleLogoDarkModeFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiEdTechSubmodulesSubmoduleItem {
  id: Int
  content: String
  title: String
  icon: LocalFile
  iconDarkMode: StrapiEdTechSubmodulesSubmoduleItemIconDarkMode
}

type StrapiEdTechSubmodulesSubmoduleItemIconDarkMode {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: StrapiEdTechSubmodulesSubmoduleItemIconDarkModeFormats
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

type StrapiEdTechSubmodulesSubmoduleItemIconDarkModeFormats {
  thumbnail: StrapiEdTechSubmodulesSubmoduleItemIconDarkModeFormatsThumbnail
}

type StrapiEdTechSubmodulesSubmoduleItemIconDarkModeFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
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
  imageDarkMode: StrapiBannersImageDarkMode
  logoDarkMode: StrapiBannersLogoDarkMode
}

type StrapiBannersImageDarkMode {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: StrapiBannersImageDarkModeFormats
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

type StrapiBannersImageDarkModeFormats {
  thumbnail: StrapiBannersImageDarkModeFormatsThumbnail
  large: StrapiBannersImageDarkModeFormatsLarge
  medium: StrapiBannersImageDarkModeFormatsMedium
  small: StrapiBannersImageDarkModeFormatsSmall
}

type StrapiBannersImageDarkModeFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBannersImageDarkModeFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBannersImageDarkModeFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBannersImageDarkModeFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBannersLogoDarkMode {
  id: Int
  name: String
  width: Int
  height: Int
  formats: StrapiBannersLogoDarkModeFormats
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

type StrapiBannersLogoDarkModeFormats {
  thumbnail: StrapiBannersLogoDarkModeFormatsThumbnail
  large: StrapiBannersLogoDarkModeFormatsLarge
  medium: StrapiBannersLogoDarkModeFormatsMedium
  small: StrapiBannersLogoDarkModeFormatsSmall
}

type StrapiBannersLogoDarkModeFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBannersLogoDarkModeFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBannersLogoDarkModeFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBannersLogoDarkModeFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
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

type StrapiJobsPage implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  banner: String
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
  pageMetadata: StrapiJobsPagePageMetadata
}

type StrapiJobsPagePageMetadata {
  id: Int
  pageTitle: String
  pageDescription: String
  pageKeywords: String
}


`



module.exports = {
  value: schema,
}
