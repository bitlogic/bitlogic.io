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
  icon: File @link(from: "icon___NODE")
  homeIcon: File @link(from: "homeIcon___NODE")
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
  image: File @link(from: "image___NODE")
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
  image: File @link(from: "image___NODE")
  logo: File @link(from: "logo___NODE")
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
  icon: File @link(from: "icon___NODE")
  homeIcon: File @link(from: "homeIcon___NODE")
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
  icon: File @link(from: "icon___NODE")
  homeIcon: File @link(from: "homeIcon___NODE")
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
  icon: File @link(from: "icon___NODE")
  homeIcon: File @link(from: "homeIcon___NODE")
  strapiId: Int
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
  logo: File @link(from: "logo___NODE")
}

type StrapiEdTechSubmodulesSubmoduleItem {
  id: Int
  content: String
  title: String
  icon: File @link(from: "icon___NODE")
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
  image: File @link(from: "image___NODE")
  logo: File @link(from: "logo___NODE")
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
    # Format the date using Moment.js' date tokens, e.g. . See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens.
    formatString: String
    # Returns a string generated with Moment.js'  function
    fromNow: Boolean
    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String
    # Configures the locale Moment.js will use to format the date.
    locale: String
  ): Date
  created_at(
    # Format the date using Moment.js' date tokens, e.g. . See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens.
    formatString: String
    # Returns a string generated with Moment.js'  function
    fromNow: Boolean
    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String
    # Configures the locale Moment.js will use to format the date.
    locale: String
  ): Date
  updated_at(
    # Format the date using Moment.js' date tokens, e.g. . See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens.
    formatString: String
    # Returns a string generated with Moment.js'  function
    fromNow: Boolean
    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String
    # Configures the locale Moment.js will use to format the date.
    locale: String
  ): Date
  link: StrapiBannersLink
  image: File @link(from: "image___NODE")
  logo: File @link(from: "logo___NODE")
  strapiId: Int
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
  logo: File @link(from: "logo___NODE")
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
  image: File @link(from: "image___NODE")
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
  image: File @link(from: "image___NODE")
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
  image: File @link(from: "image___NODE")
  blog_categories: [StrapiArticleBlog_categories]
  strapiId: Int
  slug: String
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

    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String

    # Configures the locale Moment.js will use to format the date.
    locale: String
  ): Date
  created_at(
    formatString: String

    fromNow: Boolean

    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String

    # Configures the locale Moment.js will use to format the date.
    locale: String
  ): Date
  updated_at(
    formatString: String

    fromNow: Boolean

    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String

    # Configures the locale Moment.js will use to format the date.
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
    # Format the date using Moment.js' date tokens, e.g.  See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens.
    formatString: String

    # Returns a string generated with Moment.js' function
    fromNow: Boolean

    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String

    # Configures the locale Moment.js will use to format the date.
    locale: String
  ): Date
  created_at(
    # Format the date using Moment.js' date tokens, e.g.  See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens.
    formatString: String

    # Returns a string generated with Moment.js' function
    fromNow: Boolean

    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String

    # Configures the locale Moment.js will use to format the date.
    locale: String
  ): Date
  updated_at(
    # Format the date using Moment.js' date tokens, e.g. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens.
    formatString: String

    # Returns a string generated with Moment.js'  function
    fromNow: Boolean

    # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
    difference: String

    # Configures the locale Moment.js will use to format the date.
    locale: String
  ): Date
  pageMetadata: StrapiContactPagePageMetadata
  contactForm: StrapiContactPageContactForm
  image: File @link(from: "image___NODE")
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


`



module.exports = {
  value: schema,
}
