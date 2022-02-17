import * as React from "react"
import { useHomePage } from "../../../hooks/index"
import Layout from "../../layout"
import { Seo } from "../../index"

import "./HomeContainer.scss"

// Dynamic zone components:

const bodyComponents = {
  "home.hero": data => <p>Hero</p>,
  "home.transition": data => <p>Transition</p>,
  "home.quote": data => <p>Quote</p>,
  "home.video-background": data => <p>video background</p>,
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
