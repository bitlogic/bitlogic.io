import * as React from "react"
import { useHomePage } from "../../../hooks/index"
import Hero from "../../Hero/Hero"
import Layout from "../../layout"
import { Seo } from "../../index"

import "./HomeContainer.scss"

// Dynamic zone components:
import AnimatedTransitionContinous from "../../animatedTransitionContinous/AnimatedTransitionContinous"
import Quote from "../../quote/Quote"
import VideoBackground from "../../videoBackground/VideoBackground"

const bodyComponents = {
  "home.hero": data => <Hero data={data}/>,
  "home.transition": data => (
    <AnimatedTransitionContinous>
      {data.text}
    </AnimatedTransitionContinous>
  ),
  "home.quote": data => <Quote data={data} />,
  "home.video-background": data => <VideoBackground data={data} /> ,
  "home.dual-section": data => <p>dual section</p>,
}

const Home = () => {
  const data = useHomePage()
  console.log(data)
  const { pageTitle, pageDescription, pageKeywords } =
    data?.allStrapiHome?.nodes[0]?.pageMetadata || {}

  return (
    <Layout>
      {data?.allStrapiHome?.nodes[0]?.pageMetadata && (
        <Seo
          title={pageTitle}
          description={pageDescription}
          keywords={pageKeywords}
        />
      )}

      {/* Dynamic zone */}
      {data.allStrapiHome.nodes[0].body.map(component =>
        bodyComponents[component.strapi_component](component)
      )}
    </Layout>
  )
}

export default Home
