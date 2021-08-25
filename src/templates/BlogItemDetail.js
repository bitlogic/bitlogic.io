import React from "react"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import Layout from "../components/layout"
import { Seo } from '../components/index.js'
import { BannerTop } from "../components/index.js"
import "./BlogItemDetail.scss"

 const BlogDetail = ({ data }) => {
  const detail = data.allStrapiArticle.nodes[0]
  const { title, image } = detail
  const bannerTop = { title, image }

  return (
    <Layout>
      <Seo 
        title={detail.title}
      />
      <BannerTop banner={bannerTop} />
      <div className="detail__container">
        <div className="detail__description">
          <Markdown>{detail.description}</Markdown>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  allStrapiArticle(filter: { slug: { eq: $slug } }) {
    nodes {
      title
      summary
      description
      slug
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
      blog_categories {
        name
      }
    }
  }
}
`
export default BlogDetail
