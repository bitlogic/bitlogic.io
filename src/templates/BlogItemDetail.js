import React from "react"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import Layout from "../components/layout"
import { BannerTop } from "../components/index.js"
import "./BlogItemDetail.scss"

export const BlogDetail = ({ data }) => {
  const detail = data.allStrapiArticle.nodes[0]
  const { title, image } = detail
  const bannerTop = { title, image }

  return (
    <Layout>
      <BannerTop banner={bannerTop} />
      <div className="detail__container">
        <div className="detail__description">
          <Markdown escapeHtml={true}>{detail.description}</Markdown>
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
