import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {
  Seo,
  CasesSection,
  CasesList,
  LogosSection,
} from "../components/index.js"

// componentes del body
import Hero from "../components/Hero/Hero"
import BannerList from "../components/BannerList/BannerLis"
import ExpandGrid from "../components/expandGrid/ExpandGrid"
import Catsone from "../components/Catsone/catsone"
import BannerHead from "../components/BannerHead/BannerHead"
import Text from "../components/Text/Text"
import Form from "../components/Form/Form"
import VideoBackground from "../components/videoBackground/VideoBackground"


const LandingPage = ({ data, location }) => {
  const pageData = data?.allStrapiLandingPage?.nodes[0]
  const content = pageData.body.map((component, idx) => {
    const hero =
      component.strapi_component === "home.hero" ? (
        <Hero data={component} />
      ) : null

    const bannerList =
      component.strapi_component === "components.banner-list" ? (
        <BannerList data={component} />
      ) : null

    const expandGrid =
      component.strapi_component === "components.selected-grid" ? (
        <ExpandGrid data={component} />
      ) : null

    const casesSection =
      component.strapi_component === "components.cases-section" &&
      !component.allCases ? (
        <CasesSection data={component} />
      ) : null

    const casesList =
      component.strapi_component === "components.cases-section" &&
      component.allCases ? (
        <CasesList />
      ) : null

    const catsone =
      component.strapi_component === "scripts.catsone" ? (
        <Catsone data={component} />
      ) : null

    const bannerHead =
      component.strapi_component === "banners.banner-head" ? (
        <BannerHead data={component} />
      ) : null

    const text =
      component.strapi_component === "components.text" ? (
        <Text data={component} />
      ) : null
    const logosSection =
      component.strapi_component === "components.logos-section" ? (
        <LogosSection data={component} />
      ) : null
    const form =
      component.strapi_component === "components.form" ? (
        <Form data={component} location={location} />
      ) : null

      const videoBackground =
      component.strapi_component === "home.video-background" ? (
        <VideoBackground data={component} />
      ) : null

    return (
      <div key={idx}>
        <>
          {hero}
          {bannerList}
          {expandGrid}
          {casesSection}
          {casesList}
          {catsone}
          {bannerHead}
          {text}
          {logosSection}
          {form}
          {videoBackground}
        </>
      </div>
    )
  })

  return (
    <Layout location={location} options={{ hasHeader: true }}>
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
