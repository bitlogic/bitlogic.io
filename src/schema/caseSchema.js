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
    image: StrapiCaseImage
    strapiId: Int
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
    profile: StrapiCaseQuoteProfile
    image: StrapiCaseQuoteImage
  }
  
  type StrapiCaseQuoteProfile {
    id: Int
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: StrapiCaseQuoteProfileFormats
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
  
      # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
      difference: String
  
      # Configures the locale Moment.js will use to format the date.
      locale: String
    ): Date
    localFile: File
  }
  
  type StrapiCaseQuoteProfileFormats {
    thumbnail: StrapiCaseQuoteProfileFormatsThumbnail
  }
  
  type StrapiCaseQuoteProfileFormatsThumbnail {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiCaseQuoteImage {
    id: Int
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: StrapiCaseQuoteImageFormats
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
  
      # Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds".
      difference: String
  
      # Configures the locale Moment.js will use to format the date.
      locale: String
    ): Date
    localFile: File
  }
  
  type StrapiCaseQuoteImageFormats {
    small: StrapiCaseQuoteImageFormatsSmall
    thumbnail: StrapiCaseQuoteImageFormatsThumbnail
  }
  
  type StrapiCaseQuoteImageFormatsSmall {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiCaseQuoteImageFormatsThumbnail {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiCaseImage {
    id: Int
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: StrapiCaseImageFormats
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
  
      # Configures the locale Moment.js will use to format the date.
      locale: String
    ): Date
    localFile: File
  }
  
  type StrapiCaseImageFormats {
    small: StrapiCaseImageFormatsSmall
    thumbnail: StrapiCaseImageFormatsThumbnail
    large: StrapiCaseImageFormatsLarge
    medium: StrapiCaseImageFormatsMedium
  }
  
  type StrapiCaseImageFormatsSmall {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiCaseImageFormatsThumbnail {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiCaseImageFormatsLarge {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiCaseImageFormatsMedium {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
`

module.exports = {
  value: caseSchema,
}
