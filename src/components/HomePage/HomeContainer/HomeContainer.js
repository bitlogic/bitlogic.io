import * as React from "react"
import { useHomePage } from "../../../hooks/index"
import Layout from "../../layout"
import { Seo, CustomSection } from "../../index"
import "./HomeContainer.scss"
import PropTypes from "prop-types"


const Home = ({ location }) => {
  const data = useHomePage()?.allStrapiHome?.nodes[0]
  const { pageTitle, pageDescription, pageKeywords } =
    data?.pageMetadata || {}

  return (
    <Layout location={location}>
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
      />

      {/* Dynamic zone */}
      {data?.body?.length > 0 && (
        <CustomSection sections={data?.body} />
      )}
    </Layout>
  )
}

Home.propTypes = {
  location: PropTypes.object.isRequired
}

export default Home
