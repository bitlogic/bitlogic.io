const iconScheme = `

type StrapiIcon implements Node {
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
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
  
      # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
      difference: String
  
      # Configures the locale Moment.js will use to format the date.
      locale: String
    ): Date
    icon: StrapiIconIcon
    strapiId: Int
  }
  
  type StrapiIconIcon {
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
  value: iconScheme,
}
