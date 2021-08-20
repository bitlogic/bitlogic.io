import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

import { Seo } from "../index"

const Blog = () => (
  <Layout>
    <Seo />
    <h1>Hi from the Blog page</h1>
    <p>Welcome to Blog</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
