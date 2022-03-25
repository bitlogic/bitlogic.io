const generalSchema = `
type LocalFile {
    localFile: File
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
    formats: StrapiBlogCategoryArticleAuthorImageFormats
  }

  type LocalFile {
    localFile: File @link(from: "localFile___NODE")
  }
`

module.exports = {
  value: generalSchema,
}
