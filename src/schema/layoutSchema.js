const layoutSchema = `
  type StrapiLayout implements Node {
    parent: Node
    children: [Node!]!
    internal: Internal!    
    id: ID!
    footer: StrapiLayoutFooter
    navbar: StrapiLayoutNavbar
    menu: [StrapiLayoutMenu]
    Sites: StrapiLayoutSites
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

  type StrapiLayoutFooter {
    id: ID!
    subscription: StrapiLayoutFooterSubscription
    navegation: StrapiLayoutFooterNavegation
    socialMedia: StrapiLayoutFooterSocialMedia
    location: StrapiLayoutFooterListIcon
    contact: StrapiLayoutFooterListIcon
    internalLink: StrapiLayoutFooterInternalLink
    navbar: StrapiLayoutNavbar
    logo: LocalFile
  }

  type StrapiLayoutFooterSubscription {
    id: ID!
    title: String!
    callToAction: String
    url: String
    landing_page: StrapiLandingPage
  }

  type StrapiLayoutFooterNavegation {
    id: ID!
    title: String!
    pageLink: [StrapiLayoutFooterNavegationPageLink]
  }
  
  type StrapiLayoutFooterNavegationPageLink {
    id: Int!
    name: String!
    pathTo: String
  }

  type StrapiLayoutFooterSocialMedia {
    id: ID!
    socialMedia: [StrapiLayoutFooterSocialMediaSocialMedia]
  }
  
  type StrapiLayoutFooterSocialMediaSocialMedia {
    id: Int!
    url: String!
    name: String!
    icon: StrapiIcon
  }

  type StrapiLayoutFooterListIcon {
    id: ID!
    title: String!
    iconText: [StrapiLayoutFooterListIconIconText]
  }
  
  type StrapiLayoutFooterListIconIconText {
    id: Int!
    name: String!
    icon: StrapiIcon
  }

  type StrapiLayoutFooterInternalLink {
    id: ID!
    name: String!
    pathTo: String
  }

  type StrapiLayoutNavbar {
    id: ID!
    navbarItem: [StrapiLayoutNavbarNavbarItem]
    logo: LocalFile
    logoDark: LocalFile
    navButton: ComponentButton
  }
  
  type StrapiLayoutNavbarNavbarItem {
    id: Int!
    label: String!
    landing: StrapiLandingPage
    url: String
    visible: Boolean
    dropdown: Boolean
    singleType: String
  }

  type StrapiLayoutMenu {
    id: Int!
    title: String!
    url: String
    visible: Boolean
    dropdown:Boolean
    landing_page: StrapiLandingPage
    toplevelItem: StrapiMenuDropdownItem
    dropdownItems: [StrapiMenuDropdownItem]
  }

  type StrapiMenuDropdownItem {
    id: Int!
    label: String!
    icon: LocalFile
    url: String
    text: String
    landing_page: StrapiLandingPage
  }

  type StrapiLayoutSites {
    id: ID!
    title: String!
    websites: [StrapiLayoutSitesWebsites]
  }

  type StrapiLayoutSitesWebsites {
    id: Int!
    name: String!
    url: String!
    icon: LocalFile
  }
`
module.exports = {
  value: layoutSchema,
}
