import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo, CasesSection } from "../components/index.js"

// componentes del body
import Hero from "../components/Hero/Hero"
import BannerList from '../components/BannerList/BannerLis';
import ExpandGrid from "../components/expandGrid/ExpandGrid"

const LandingPage = ({ data }) => {
  const pageData = data?.allStrapiLandingPage?.nodes[0]
  const content = pageData.body.map((component, idx) => {

    const hero = component.strapi_component === "home.hero" ? 
      <Hero data={component} /> :
      null

    const bannerList = component.strapi_component === "components.banner-list" ? 
      <BannerList data={component} /> :
      null

    const expandGrid = component.strapi_component === "components.selected-grid" ? 
      <ExpandGrid data={component} /> :
      null

    const casesSection = component.strapi_component === "components.cases-section" ? 
      <CasesSection data={component} /> :
      null

    return (
      <div key={idx}>
      <>
        {component.strapi_component === "home.hero" && hero}
        {component.strapi_component === "components.banner-list" && bannerList}
        {component.strapi_component === "components.selected-grid" && expandGrid}
        {component.strapi_component === "components.cases-section" && casesSection} 
      </>
    </div>
    )

  })

  return (
    <Layout options={{ hasHeader: true }} >
      <Seo title={pageData.name} />
      {content}
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
