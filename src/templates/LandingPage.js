import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"

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

LandingPage.propTypes = {
  data: PropTypes.shape({
    allStrapiLandingPage: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          body: PropTypes.arrayOf(
            PropTypes.object
          )
        })
      )
    })
  }),
  location: PropTypes.object.isRequired
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
