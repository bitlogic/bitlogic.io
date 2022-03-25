const caseSchema = `

type StrapiCase implements Node {
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
    title: String
    description: String
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
    button: StrapiCaseButton
    quote: StrapiCaseQuote
    image: LocalFile
    strapiId: Int
    subtitle: String
  }
  
  type StrapiCaseButton {
    id: Int
    content: String
    url: String
    landing_page: StrapiCaseButtonLanding_page
  }
  
  type StrapiCaseButtonLanding_page {
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
  
  type StrapiCaseQuote {
    id: Int
    title: String
    description: String
    variant: String
    profile: LocalFile
    image: LocalFile
  }

  type LocalFile {
    localFile: File @link(from: "localFile___NODE")
  }
`

module.exports = {
  value: caseSchema,
}
