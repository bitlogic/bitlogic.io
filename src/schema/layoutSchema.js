const layoutSchema = `
type StrapiLayoutFooter {
    id: Int
    subscription: StrapiLayoutFooterSubscription
    navegation: StrapiLayoutFooterNavegation
    socialMedia: StrapiLayoutFooterSocialMedia
    location: StrapiLayoutFooterLocation
    contact: StrapiLayoutFooterContact
    internalLink: StrapiLayoutFooterInternalLink
    navbar: StrapiLayoutNavbar
    menu: [StrapiLayoutMenu]
    logo: LocalFile
  }
  
  type StrapiLayoutNavbar {
    id: Int
    navbarItem: [StrapiLayoutNavbarNavbarItem]
    logo: LocalFile
    logoDark: LocalFile
    navButton: StrapiLayoutNavbarNavButton
  }


type StrapiLayoutNavbarNavButton {
  id: Int
  content: String
  url: String
  landing_page: StrapiLayoutNavbarNavButtonLanding_page
}

type StrapiLayoutNavbarNavButtonLanding_page {
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
  
  type StrapiLayoutNavbarNavbarItem {
    id: Int
    label: String
    landing: StrapiLayoutNavbarNavbarItemLanding
    url: String
    visible: Boolean
    dropdown: Boolean
    singleType: String
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
    updated_at(fromNow: Boolean, difference: String, locale: String): Date
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

  type StrapiLayoutMenu {
    title: String
    id: Int
    url: String
    visible: Boolean
    dropdown:Boolean
    english_landing_page: StrapiMenuEnglishLandingPage
    landing_page: StrapiMenuLandingPage
    toplevelItem: StrapiMenuDropdownItem
    dropdownItems: [StrapiMenuDropdownItem]
  }

  type StrapiMenuDropdownItem {
    id: Int
    label: String
    icon: LocalFile
    url: String
    text: String
    english_landing_page: StrapiMenuEnglishLandingPage
    landing_page: StrapiMenuLandingPage
  }

  type StrapiMenuDropdownItemIcon {
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

  type StrapiMenuLandingPage {
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

  type StrapiMenuEnglishLandingPage {
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
  
  type StrapiLayout implements Node {
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
  
      # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
      difference: String
      locale: String
    ): Date
    footer: StrapiLayoutFooter
    navbar: StrapiLayoutNavbar
    menu: [StrapiLayoutMenu]
    strapiId: Int
  }

  type LocalFile {
    localFile: File @link(from: "localFile___NODE")
  }
`
module.exports = {
  value: layoutSchema,
}
