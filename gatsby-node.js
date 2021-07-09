exports.createSchemaCustomization = ({ actions }) => {
  const schema = require("./src/schema/schema")

  const { createTypes } = actions
  const typeDefs = schema.value // + luego se concatenan

  createTypes(typeDefs)
}
