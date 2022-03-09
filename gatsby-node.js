const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const schema = require("./src/schema/schema")

  const { createTypes } = actions
  const typeDefs = schema.value // + luego se concatenan

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
      context: { slug: node.slug },
    })
  })

  // CREACION DE LANDING PAGES
  const { data: LandingQueryData } = await graphql(`
    query Landings {
      allStrapiLandingPage {
        nodes {
          slug
        }
      }
    }
  `)

  if (LandingQueryData.errors) {
    reporter.panicOnBuild("Error creando paginas de landing")
  }

  LandingQueryData.allStrapiLandingPage.nodes.forEach(node => {
    const BlogDetail = path.resolve("./src/templates/LandingPage.js")
    createPage({
      path: "/landing/" + node.slug,
      component: BlogDetail,
      context: { slug: node.slug },
    })
  })
}
