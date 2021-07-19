import * as React from "react"
import { useHomePage } from "../../../hooks/index"
import Layout from "../../layout"
import { Seo, CustomSection } from "../../index"

import "./HomeContainer.scss"

const Home = () => {
  const data = useHomePage()
  const homeSections = data?.allStrapiHome?.nodes[0]?.sections

  return (
    <Layout>
      <Seo title="Home" />
      <CustomSection sections={homeSections} />
    </Layout>
  )
}

export default Home
