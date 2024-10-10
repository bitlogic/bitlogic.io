const path = require("path")
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const blogSchema = require("./src/schema/blogSchema")
  const caseSchema = require("./src/schema/caseSchema")
  const globalSeoSchema = require("./src/schema/globalSeoSchema")
  const homeSchema = require("./src/schema/homeSchema")
  const iconSchema = require("./src/schema/iconSchema")
  const landingSchema = require("./src/schema/landingSchema")
  const layoutSchema = require("./src/schema/layoutSchema")
  const generalSchema = require("./src/schema/generalSchema")
  const professionalsSchema = require("./src/schema/professionalsSchema")

  const { createTypes } = actions
  const typeDefs =
    blogSchema.value +
    caseSchema.value +
    globalSeoSchema.value +
    homeSchema.value +
    iconSchema.value +
    landingSchema.value +
    layoutSchema.value +
    professionalsSchema.value +
    generalSchema.value
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // CREACION DE PAGINAS DE BLOG
  const { data: blogQueryData } = await graphql(`
    query Articles {
      allStrapiArticle {
        nodes {
          slug
          updated_at
        }
      }
    }
  `)

  if (blogQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de blog")
  }

  blogQueryData.allStrapiArticle.nodes.forEach(node => {
    const BlogDetail = path.resolve("./src/templates/BlogItemDetail.js")
    createPage({
      path: "/blog/" + node.slug,
      component: BlogDetail,
      context: {
        slug: node.slug,
        lastmod: node.updated_at,
      },
    })
  })

  // CREACION DE LANDING PAGES
  const { data: LandingQueryData } = await graphql(`
    query Landings {
      allStrapiLandingPage {
        nodes {
          slug
          updated_at
          parent_page {
            slug
          }
        }
      }
    }
  `)

  if (LandingQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de landing")
  }

  const landings = LandingQueryData.allStrapiLandingPage.nodes

  function getUrl(node) {
    if (!node) return ""

    if (node.parent_page) {
      const parentPage = landings.find(
        landing => landing.slug === node.parent_page.slug
      )
      const parentUrl = getUrl(parentPage)
      return `${parentUrl}/${node.slug}`
    }

    return `/${node.slug}`
  }

  landings.forEach(node => {
    const LandingPage = path.resolve("./src/templates/LandingPage.js")
    const url = getUrl(node)

    createPage({
      path: url,
      component: LandingPage,
      context: {
        slug: node.slug,
        lastmod: node.updated_at,
      },
    })
  })
}
