import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const EdTech = () => (
  <Layout>
    <SEO title="EdTech" />
    <h1>Hi from the EdTech page</h1>
    <p>Welcome to EdTech</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EdTech
