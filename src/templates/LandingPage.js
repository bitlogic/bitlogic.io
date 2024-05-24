import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import {
  Seo,
  CustomSection
} from "../components"

const LandingPage = ({ data, location }) => {
  const pageData = data?.allStrapiLandingPage?.nodes[0]

  return (
    <Layout location={location} options={{ hasHeader: true }}>
      <Seo title={pageData.name} />
      {pageData?.body?.length > 0 && (
        <CustomSection sections={pageData.body} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allStrapiLandingPage(filter: { slug: { eq: $slug } }) {
      nodes {
        body
        name
      }
    }
  }
`
export default LandingPage
