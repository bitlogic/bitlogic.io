import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/index.js"

// componentes del body
import Hero from "../components/Hero/Hero"
import ExpandGrid from "../components/expandGrid/ExpandGrid"

const LandingPage = ({ data }) => {
  const pageData = data?.allStrapiLandingPage?.nodes[0]

  const bodyComponents = {
    "home.hero": data => <Hero data={data} />,
    "components.banner-list": data => <p>banner list</p>,
    "components.selected-grid": data => <ExpandGrid data={data} /> ,
  }

  return (
    <Layout options={{hasHeader: false}} >
      <Seo title={pageData.name} />
      {/* Dynamic zone */}
      {pageData.body.map(component =>
        bodyComponents[component.strapi_component](component)
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
