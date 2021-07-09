const schema = `
type StrapiServices implements Node {
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
    title: String
    description: String
    visible: Boolean
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
    strapiId: Int
  }
  
  type StrapiHomePage implements Node {
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
    UID: String
    titleEdTech: String
    titleBitWay: String
    titleClientes: String
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
    imageBitWay: File @link(from: "imageBitWay___NODE")
    strapiId: Int
  }
  
  type StrapiEdteches implements Node {
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
    title: String
    content: String
    submodulesTitle: String
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
    icon: File  @link(from: "icon___NODE")
    strapiId: Int
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
    image: File  @link(from: "image___NODE")
    logo: File  @link(from: "logo___NODE")
    strapiId: Int
  }
  
  type StrapiBannersLink {
    id: Int
    name: String
    pathTo: String
  }
  
  type SitePlugin implements Node {
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
    resolve: String
    name: String
    version: String
    pluginOptions: SitePluginPluginOptions
    nodeAPIs: [String]
    browserAPIs: [String]
    ssrAPIs: [String]
    pluginFilepath: String
    packageJson: SitePluginPackageJson
  }
  
  type SitePluginPluginOptions {
    name: String
    path: String
    queryLimit: Int
    contentTypes: [String]
    singleTypes: [String]
    defaults: SitePluginPluginOptionsDefaults
    base64Width: Int
    stripMetadata: Boolean
    defaultQuality: Int
    failOnError: Boolean
    short_name: String
    start_url: String
    background_color: String
    theme_color: String
    display: String
    icon: String
    legacy: Boolean
    theme_color_in_head: Boolean
    cache_busting_mode: String
    crossOrigin: String
    include_favicon: Boolean
    cacheDigest: String
    pathCheck: Boolean
    allExtensions: Boolean
    isTSX: Boolean
    jsxPragma: String
  }
  
  type SitePluginPluginOptionsDefaults {
    formats: [String]
    placeholder: String
    quality: Int
    breakpoints: [Int]
    backgroundColor: String
  }
  
  type SitePluginPackageJson {
    name: String
    description: String
    version: String
    main: String
    license: String
    dependencies: [SitePluginPackageJsonDependencies]
    devDependencies: [SitePluginPackageJsonDevDependencies]
    peerDependencies: [SitePluginPackageJsonPeerDependencies]
    keywords: [String]
  }
  
  type SitePluginPackageJsonDependencies {
    name: String
    version: String
  }
  
  type SitePluginPackageJsonDevDependencies {
    name: String
    version: String
  }
  
  type SitePluginPackageJsonPeerDependencies {
    name: String
    version: String
  }
  
  type SiteBuildMetadata implements Node {
    id: ID!
    parent: Node
    children: [Node!]!
    internal: Internal!
    buildTime(
      
      formatString: String
  
      
      fromNow: Boolean
  
      
      difference: String
  
      
      locale: String
    ): Date
  }
  
  type Query {
    file(
      sourceInstanceName: StringQueryOperatorInput
      absolutePath: StringQueryOperatorInput
      relativePath: StringQueryOperatorInput
      extension: StringQueryOperatorInput
      size: IntQueryOperatorInput
      prettySize: StringQueryOperatorInput
      modifiedTime: DateQueryOperatorInput
      accessTime: DateQueryOperatorInput
      changeTime: DateQueryOperatorInput
      birthTime: DateQueryOperatorInput
      root: StringQueryOperatorInput
      dir: StringQueryOperatorInput
      base: StringQueryOperatorInput
      ext: StringQueryOperatorInput
      name: StringQueryOperatorInput
      relativeDirectory: StringQueryOperatorInput
      dev: IntQueryOperatorInput
      mode: IntQueryOperatorInput
      nlink: IntQueryOperatorInput
      uid: IntQueryOperatorInput
      gid: IntQueryOperatorInput
      rdev: IntQueryOperatorInput
      ino: FloatQueryOperatorInput
      atimeMs: FloatQueryOperatorInput
      mtimeMs: FloatQueryOperatorInput
      ctimeMs: FloatQueryOperatorInput
      atime: DateQueryOperatorInput
      mtime: DateQueryOperatorInput
      ctime: DateQueryOperatorInput
      birthtime: DateQueryOperatorInput
      birthtimeMs: FloatQueryOperatorInput
      blksize: IntQueryOperatorInput
      blocks: IntQueryOperatorInput
      publicURL: StringQueryOperatorInput
      childrenImageSharp: ImageSharpFilterListInput
      childImageSharp: ImageSharpFilterInput
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
    ): File
    allFile(
      filter: FileFilterInput
      sort: FileSortInput
      skip: Int
      limit: Int
    ): FileConnection!
    directory(
      sourceInstanceName: StringQueryOperatorInput
      absolutePath: StringQueryOperatorInput
      relativePath: StringQueryOperatorInput
      extension: StringQueryOperatorInput
      size: IntQueryOperatorInput
      prettySize: StringQueryOperatorInput
      modifiedTime: DateQueryOperatorInput
      accessTime: DateQueryOperatorInput
      changeTime: DateQueryOperatorInput
      birthTime: DateQueryOperatorInput
      root: StringQueryOperatorInput
      dir: StringQueryOperatorInput
      base: StringQueryOperatorInput
      ext: StringQueryOperatorInput
      name: StringQueryOperatorInput
      relativeDirectory: StringQueryOperatorInput
      dev: IntQueryOperatorInput
      mode: IntQueryOperatorInput
      nlink: IntQueryOperatorInput
      uid: IntQueryOperatorInput
      gid: IntQueryOperatorInput
      rdev: IntQueryOperatorInput
      ino: FloatQueryOperatorInput
      atimeMs: FloatQueryOperatorInput
      mtimeMs: FloatQueryOperatorInput
      ctimeMs: FloatQueryOperatorInput
      atime: DateQueryOperatorInput
      mtime: DateQueryOperatorInput
      ctime: DateQueryOperatorInput
      birthtime: DateQueryOperatorInput
      birthtimeMs: FloatQueryOperatorInput
      blksize: IntQueryOperatorInput
      blocks: IntQueryOperatorInput
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
    ): Directory
    allDirectory(
      filter: DirectoryFilterInput
      sort: DirectorySortInput
      skip: Int
      limit: Int
    ): DirectoryConnection!
    site(
      buildTime: DateQueryOperatorInput
      siteMetadata: SiteSiteMetadataFilterInput
      port: IntQueryOperatorInput
      host: StringQueryOperatorInput
      polyfill: BooleanQueryOperatorInput
      pathPrefix: StringQueryOperatorInput
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
    ): Site
    allSite(
      filter: SiteFilterInput
      sort: SiteSortInput
      skip: Int
      limit: Int
    ): SiteConnection!
    siteFunction(
      functionRoute: StringQueryOperatorInput
      pluginName: StringQueryOperatorInput
      originalAbsoluteFilePath: StringQueryOperatorInput
      originalRelativeFilePath: StringQueryOperatorInput
      relativeCompiledFilePath: StringQueryOperatorInput
      absoluteCompiledFilePath: StringQueryOperatorInput
      matchPath: StringQueryOperatorInput
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
    ): SiteFunction
    allSiteFunction(
      filter: SiteFunctionFilterInput
      sort: SiteFunctionSortInput
      skip: Int
      limit: Int
    ): SiteFunctionConnection!
    sitePage(
      path: StringQueryOperatorInput
      component: StringQueryOperatorInput
      internalComponentName: StringQueryOperatorInput
      componentChunkName: StringQueryOperatorInput
      matchPath: StringQueryOperatorInput
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
      isCreatedByStatefulCreatePages: BooleanQueryOperatorInput
      pluginCreator: SitePluginFilterInput
      pluginCreatorId: StringQueryOperatorInput
    ): SitePage
    allSitePage(
      filter: SitePageFilterInput
      sort: SitePageSortInput
      skip: Int
      limit: Int
    ): SitePageConnection!
    imageSharp(
      fixed: ImageSharpFixedFilterInput
      fluid: ImageSharpFluidFilterInput
      gatsbyImageData: JSONQueryOperatorInput
      original: ImageSharpOriginalFilterInput
      resize: ImageSharpResizeFilterInput
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
    ): ImageSharp
    allImageSharp(
      filter: ImageSharpFilterInput
      sort: ImageSharpSortInput
      skip: Int
      limit: Int
    ): ImageSharpConnection!
    strapiServices(
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
      title: StringQueryOperatorInput
      description: StringQueryOperatorInput
      visible: BooleanQueryOperatorInput
      published_at: DateQueryOperatorInput
      created_at: DateQueryOperatorInput
      updated_at: DateQueryOperatorInput
      icon: FileFilterInput
      strapiId: IntQueryOperatorInput
    ): StrapiServices
    allStrapiServices(
      filter: StrapiServicesFilterInput
      sort: StrapiServicesSortInput
      skip: Int
      limit: Int
    ): StrapiServicesConnection!
    strapiHomePage(
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
      UID: StringQueryOperatorInput
      titleEdTech: StringQueryOperatorInput
      titleBitWay: StringQueryOperatorInput
      titleClientes: StringQueryOperatorInput
      published_at: DateQueryOperatorInput
      created_at: DateQueryOperatorInput
      updated_at: DateQueryOperatorInput
      imageBitWay: FileFilterInput
      strapiId: IntQueryOperatorInput
    ): StrapiHomePage
    allStrapiHomePage(
      filter: StrapiHomePageFilterInput
      sort: StrapiHomePageSortInput
      skip: Int
      limit: Int
    ): StrapiHomePageConnection!
    strapiEdteches(
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
      title: StringQueryOperatorInput
      content: StringQueryOperatorInput
      submodulesTitle: StringQueryOperatorInput
      published_at: DateQueryOperatorInput
      created_at: DateQueryOperatorInput
      updated_at: DateQueryOperatorInput
      icon: FileFilterInput
      strapiId: IntQueryOperatorInput
    ): StrapiEdteches
    allStrapiEdteches(
      filter: StrapiEdtechesFilterInput
      sort: StrapiEdtechesSortInput
      skip: Int
      limit: Int
    ): StrapiEdtechesConnection!
    strapiBanners(
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
      title: StringQueryOperatorInput
      enable: BooleanQueryOperatorInput
      page: StringQueryOperatorInput
      type: StringQueryOperatorInput
      summary: StringQueryOperatorInput
      published_at: DateQueryOperatorInput
      created_at: DateQueryOperatorInput
      updated_at: DateQueryOperatorInput
      link: StrapiBannersLinkFilterInput
      image: FileFilterInput
      logo: FileFilterInput
      strapiId: IntQueryOperatorInput
    ): StrapiBanners
    allStrapiBanners(
      filter: StrapiBannersFilterInput
      sort: StrapiBannersSortInput
      skip: Int
      limit: Int
    ): StrapiBannersConnection!
    sitePlugin(
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
      resolve: StringQueryOperatorInput
      name: StringQueryOperatorInput
      version: StringQueryOperatorInput
      pluginOptions: SitePluginPluginOptionsFilterInput
      nodeAPIs: StringQueryOperatorInput
      browserAPIs: StringQueryOperatorInput
      ssrAPIs: StringQueryOperatorInput
      pluginFilepath: StringQueryOperatorInput
      packageJson: SitePluginPackageJsonFilterInput
    ): SitePlugin
    allSitePlugin(
      filter: SitePluginFilterInput
      sort: SitePluginSortInput
      skip: Int
      limit: Int
    ): SitePluginConnection!
    siteBuildMetadata(
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
      buildTime: DateQueryOperatorInput
    ): SiteBuildMetadata
    allSiteBuildMetadata(
      filter: SiteBuildMetadataFilterInput
      sort: SiteBuildMetadataSortInput
      skip: Int
      limit: Int
    ): SiteBuildMetadataConnection!
  }
  
`

module.exports = {
  value: schema,
}
