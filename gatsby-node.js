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
    query Articles {
      allStrapiArticle {
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
}

