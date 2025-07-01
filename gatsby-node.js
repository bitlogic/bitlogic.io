// gatsby-node.js

const path = require("path")
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
    resolve: {
      extensions: [".mjs", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
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
  const professionalsSchema = require("./src/schema/professionalsSchema")
  const generalSchema = require("./src/schema/generalSchema")
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

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // 1) Blog detail pages
  const blogResult = await graphql(`
    {
      allStrapiArticle {
        nodes {
          slug
          updated_at
        }
      }
    }
  `)
  if (blogResult.errors) {
    reporter.panicOnBuild("Error creating blog detail pages", blogResult.errors)
  }
  const blogTemplate = path.resolve("./src/templates/BlogItemDetail.js")
  blogResult.data.allStrapiArticle.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogTemplate,
      context: {
        slug: node.slug,
        lastmod: node.updated_at,
      },
    })
  })

  // 2) Landing pages
  const landingResult = await graphql(`
    {
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
  if (landingResult.errors) {
    reporter.panicOnBuild("Error creating landing pages", landingResult.errors)
  }
  const landings = landingResult.data.allStrapiLandingPage.nodes
  const landingTemplate = path.resolve("./src/templates/LandingPage.js")
  const buildLandingUrl = node => {
    if (!node) return ""
    if (node.parent_page) {
      const parent = landings.find(l => l.slug === node.parent_page.slug)
      return buildLandingUrl(parent) + `/${node.slug}`
    }
    return `/${node.slug}`
  }
  landings.forEach(node => {
    createPage({
      path: buildLandingUrl(node),
      component: landingTemplate,
      context: {
        slug: node.slug,
        lastmod: node.updated_at,
      },
    })
  })

  // 3) Category pages
  const categoryResult = await graphql(`
    {
      allStrapiBlogCategory {
        nodes {
          name
          slug
        }
      }
    }
  `)
  if (categoryResult.errors) {
    reporter.panicOnBuild(
      "Error creating category pages",
      categoryResult.errors
    )
  }
  const categoryTemplate = path.resolve("./src/templates/CategoryPage.js")
  categoryResult.data.allStrapiBlogCategory.nodes.forEach(category => {
    const slugLower = category.slug.toLowerCase()
    createPage({
      
      path: `/categoria/${slugLower}`,
      component: categoryTemplate,
      context: {
        name: category.name,
      },
    })
  })
}
