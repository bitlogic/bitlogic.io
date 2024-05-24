import * as React from "react"
import { useHomePage } from "../../../hooks/index"
import Layout from "../../layout"
import { Seo } from "../../index"
import { CustomSection } from "../../index"
import "./HomeContainer.scss"


const Home = ({ location }) => {
  const data = useHomePage()?.allStrapiHome?.nodes[0]
  const { pageTitle, pageDescription, pageKeywords } =
    data?.pageMetadata || {}

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
      {data?.body?.length > 0 && (
        <CustomSection sections={data?.body} location={location} />
      )}
    </Layout>
  )
}

export default Home
