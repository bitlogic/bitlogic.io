import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// componentes del body
import {
  Seo,
  CasesSection,
  CasesList,
  LogosSection,
  Banner,
  Form,
  BannerList,
  ExpandGrid,
  Catsone,
  Text,
  AnimatedTransitionContinous,
  DualSection,
  OneSection,
  Quote,
  FeaturedBlogs
} from "../components"

import VideoBackground from "../components/videoBackground/VideoBackground"

const LandingPage = ({ data, location }) => {
  const pageData = data?.allStrapiLandingPage?.nodes[0]
  const content = pageData.body.map((component, idx) => {
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
    const banner =
      component.strapi_component === "components.banner" ? (
        <Banner data={component} />
      ) : null

    const quote =
      component.strapi_component === "home.quote" ? (
        <Quote data={component} />
      ) : null

    const dualSection =
      component.strapi_component === "home.dual-section" &&
      (component.dualSectionPart.length === 1 ? (
        <OneSection data={component} />
      ) : (
        <DualSection data={component} />
      ))

    const animatedTransition =
      component.strapi_component === "home.transition" ? (
        <AnimatedTransitionContinous data={component} />
      ) : null

    const videoBackground =
      component.strapi_component === "home.video-background" ? (
        <VideoBackground data={component} />
      ) : null

      const featuredBlogs =
      component.strapi_component === "components.featured-blogs" ? (
        <FeaturedBlogs data={component} />
      ) : null

    return (
      <div key={idx}>
        <>
          {banner}
          {bannerList}
          {expandGrid}
          {casesSection}
          {casesList}
          {catsone}
          {text}
          {logosSection}
          {form}
          {videoBackground}
          {quote}
          {dualSection}
          {animatedTransition}
          {featuredBlogs}
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
