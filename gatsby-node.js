const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const schema = require("./src/schema/schema")

  const { createTypes } = actions
  const typeDefs = schema.value // + luego se concatenan

  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query Pages {
      allStrapiArticle {
        nodes {
          slug
        }
      }
      allStrapiPage {
        nodes {
          slug
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panicOnBuild("Error on createPages")
  }

  data.allStrapiArticle.nodes.forEach(node => {
    const BlogDetail = path.resolve("./src/templates/BlogItemDetail.js")
    createPage({
      path: "/blog/" + node.slug,
      component: BlogDetail,
      context: { slug: node.slug },
    })
  })

  data.allStrapiPage.nodes.forEach(node => {
    const Page = path.resolve("./src/templates/Page.js")
    createPage({
      path: "/" + node.slug,
      component: Page,
      context: { slug: node.slug },
    })
  })
}

