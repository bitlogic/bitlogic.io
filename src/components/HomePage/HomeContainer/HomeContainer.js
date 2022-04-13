import * as React from "react"
import { useHomePage } from "../../../hooks/index"
import Layout from "../../layout"
import { Seo } from "../../index"

import "./HomeContainer.scss"

// Dynamic zone components:
import AnimatedTransitionContinous from "../../animatedTransitionContinous/AnimatedTransitionContinous"
import Quote from "../../quote/Quote"
import VideoBackground from "../../videoBackground/VideoBackground"
import Banner from "../../Banner/Banner"
import DualSection from "../../DualSection/DualSection"
import OneSection from "../../DualSection/OneSection"
import Text from "../../Text/Text"
import BannerList from "../../BannerList/BannerList"
const bodyComponents = {
  "components.banner": data => <Banner data={data} />,
  "home.transition": data => <AnimatedTransitionContinous data={data} />,
  "home.quote": data => <Quote data={data} />,
  "home.video-background": data => <VideoBackground data={data} />,
  "components.text": data => <Text data={data} />,
  "home.dual-section": data =>
    data.dualSectionPart.length === 1 ? (
      <OneSection data={data} />
    ) : (
      <DualSection data={data} />
    ),
  "components.banner-list": data => <BannerList data={data} />,
}

const Home = ({ location }) => {
  const data = useHomePage()
  
  const { pageTitle, pageDescription, pageKeywords } =
    data?.allStrapiHome?.nodes[0]?.pageMetadata || {}

  return (
    <Layout location={location}>
      {data?.allStrapiHome?.nodes[0]?.pageMetadata && (
        <Seo
          title={pageTitle}
          description={pageDescription}
          keywords={pageKeywords}
        />
      )}

      {/* Dynamic zone */}
      {data.allStrapiHome.nodes[0].body.map(component =>
        bodyComponents[component.strapi_component]
          ? bodyComponents[component.strapi_component](component)
          : null
      )}
    </Layout>
  )
}

export default Home
