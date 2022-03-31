const blogSchema = `
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
    bannerHead: StrapiBlogPageBannerHead
  }

  type StrapiBlogPageBannerHead {
    id: Int
    title: String
    image: localFile
  }
  
  type StrapiBlogPageBannerHeadImage {
    id: Int
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: StrapiBlogPageBannerHeadImageFormats
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
  
  type StrapiBlogPagePageMetadata {
    id: Int
    pageTitle: String
    pageDescription: String
    pageKeywords: String
  }

  type LocalFile {
    localFile: File @link(from: "localFile___NODE")
  }
  
`

module.exports = {
  value: blogSchema,
}
