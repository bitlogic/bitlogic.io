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
    imagePage: LocalFile
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
    imagePage: LocalFile
    blog_categories: [StrapiArticleBlog_categories]
    strapiId: Int
    slug: String
    blog_category: StrapiArticleBlog_category
    author: [StrapiArticleAuthor]
    seo: StrapiArticlePageMetaData
  }

  type StrapiArticlePageMetaData {
    pageTitle: String
    pageDescription: String
    pageKeywords: String
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
    callToActionArticle: String
    bannerHead: StrapiBlogPageBannerHead
    banner: StrapiBlogPageBanner
  }
  type StrapiBlogPageBanner {
    id: Int
    title: String
    variant: String
    summary: String
    button: StrapiBlogPageBannerButton
    image: StrapiBlogPageBannerImage
    animation: JSON
  }
  type StrapiBlogPageBannerAnimation {
    h: Int
    v: String
    w: Int
    fr: Int
    ip: Int
    nm: String
    op: Int
    ddd: Int
    layers: [StrapiBlogPageBannerAnimationLayers]
  }
  
  type StrapiBlogPageBannerAnimationLayers {
    ao: Int
    bm: Int
    ip: Int
    ks: StrapiBlogPageBannerAnimationLayersKs
    nm: String
    op: Int
    sr: Int
    st: Int
    ty: Int
    ddd: Int
    ind: Int
    shapes: [StrapiBlogPageBannerAnimationLayersShapes]
  }
  
  type StrapiBlogPageBannerAnimationLayersKs {
    a: StrapiBlogPageBannerAnimationLayersKsA
    o: StrapiBlogPageBannerAnimationLayersKsO
    p: StrapiBlogPageBannerAnimationLayersKsP
    r: StrapiBlogPageBannerAnimationLayersKsR
    s: StrapiBlogPageBannerAnimationLayersKsS
  }
  
  type StrapiBlogPageBannerAnimationLayersKsA {
    a: Int
    k: [Float]
    l: Int
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersKsO {
    a: Int
    k: Int
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersKsP {
    a: Int
    k: [Int]
    l: Int
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersKsR {
    a: Int
    k: Int
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersKsS {
    a: Int
    k: [Int]
    l: Int
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapes {
    bm: Int
    hd: Boolean
    it: [StrapiBlogPageBannerAnimationLayersShapesIt]
    ix: Int
    mn: String
    nm: String
    np: Int
    ty: String
    cix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesIt {
    hd: Boolean
    ix: Int
    ks: StrapiBlogPageBannerAnimationLayersShapesItKs
    mn: String
    nm: String
    ty: String
    ind: Int
    c: StrapiBlogPageBannerAnimationLayersShapesItC
    o: StrapiBlogPageBannerAnimationLayersShapesItO
    w: StrapiBlogPageBannerAnimationLayersShapesItW
    bm: Int
    lc: Int
    lj: Int
    a: StrapiBlogPageBannerAnimationLayersShapesItA
    p: StrapiBlogPageBannerAnimationLayersShapesItP
    s: StrapiBlogPageBannerAnimationLayersShapesItS
    sa: StrapiBlogPageBannerAnimationLayersShapesItSa
    sk: StrapiBlogPageBannerAnimationLayersShapesItSk
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItKs {
    a: Int
    k: StrapiBlogPageBannerAnimationLayersShapesItKsK
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItKsK {
    c: Boolean
    i: [[Float]]
    o: [[Float]]
    v: [[Float]]
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItC {
    a: Int
    k: [Float]
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItO {
    a: Int
    k: Int
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItW {
    a: Int
    k: Int
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItA {
    a: Int
    k: [Int]
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItP {
    a: Int
    k: [Float]
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItS {
    a: Int
    k: [Int]
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItSa {
    a: Int
    k: Int
    ix: Int
  }
  
  type StrapiBlogPageBannerAnimationLayersShapesItSk {
    a: Int
    k: Int
    ix: Int
  }
    
  type StrapiBlogPageBannerButton {
    id: Int
    content: String
    url: String
    landing_page: StrapiBlogPageBannerButtonLanding_page
  }
  type StrapiBlogPageBannerButtonLanding_page {
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
  
  type StrapiBlogPageBannerImage {
    id: Int
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: StrapiBlogPageBannerImageFormats
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
  
  type StrapiBlogPageBannerImageFormats {
    small: StrapiBlogPageBannerImageFormatsSmall
    thumbnail: StrapiBlogPageBannerImageFormatsThumbnail
  }
  type StrapiBlogPageBannerImageFormatsSmall {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiBlogPageBannerImageFormatsThumbnail {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }

  type StrapiBlogPageBannerHead {
    id: Int
    title: String
    image: LocalFile
    imageDark: LocalFile
  }

type StrapiBlogPageBannerHeadImageDark {
  id: Int
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: StrapiBlogPageBannerHeadImageDarkFormats
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

type StrapiBlogPageBannerHeadImageDarkFormats {
  thumbnail: StrapiBlogPageBannerHeadImageDarkFormatsThumbnail
  large: StrapiBlogPageBannerHeadImageDarkFormatsLarge
  medium: StrapiBlogPageBannerHeadImageDarkFormatsMedium
  small: StrapiBlogPageBannerHeadImageDarkFormatsSmall
}

type StrapiBlogPageBannerHeadImageDarkFormatsThumbnail {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogPageBannerHeadImageDarkFormatsLarge {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogPageBannerHeadImageDarkFormatsMedium {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
}

type StrapiBlogPageBannerHeadImageDarkFormatsSmall {
  name: String
  hash: String
  ext: String
  mime: String
  width: Int
  height: Int
  size: Float
  url: String
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

  type StrapiBlogPageBannerHeadImageFormats {
    large: StrapiBlogPageBannerHeadImageFormatsLarge
    small: StrapiBlogPageBannerHeadImageFormatsSmall
    medium: StrapiBlogPageBannerHeadImageFormatsMedium
    thumbnail: StrapiBlogPageBannerHeadImageFormatsThumbnail
  }
  
  type StrapiBlogPageBannerHeadImageFormatsLarge {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiBlogPageBannerHeadImageFormatsSmall {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiBlogPageBannerHeadImageFormatsMedium {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
  }
  
  type StrapiBlogPageBannerHeadImageFormatsThumbnail {
    ext: String
    url: String
    hash: String
    mime: String
    name: String
    size: Float
    width: Int
    height: Int
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
