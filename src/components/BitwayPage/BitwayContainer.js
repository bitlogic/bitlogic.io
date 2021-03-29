import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Bitway = () => (
  <Layout>
    <SEO title="Bitway" />
    <h1>Hi from the Bitway page</h1>
    <p>Welcome to Bitway</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Bitway
