import * as React from "react"
import { useHomePage } from "../../../hooks/index"
import Layout from "../../layout"
import { Seo, CustomSection } from "../../index"

import "./HomeContainer.scss"

const Home = () => {

  const data = useHomePage()
  
  const homeSections = data?.allStrapiHome?.nodes[0]?.sections
  const { pageTitle, pageDescription, pageKeywords } = data?.allStrapiHome?.nodes[0].pageMetadata || {}


  return (
    <Layout>
      <Seo 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords} 
      />
      <CustomSection sections={homeSections} />
    </Layout>
  )
}

export default Home
