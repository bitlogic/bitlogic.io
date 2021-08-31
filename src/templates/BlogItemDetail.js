import React from "react"
import { graphql } from "gatsby"
import showdown from "showdown"
import Layout from "../components/layout"
import { Seo } from '../components/index.js'
import { BannerTop } from "../components/index.js"
import "./BlogItemDetail.scss"

 const BlogDetail = ({ data }) => {
  const detail = data.allStrapiArticle.nodes[0]
  const { title, image } = detail
  const bannerTop = { title, image }

  let converter = new showdown.Converter()
  let description = detail.description
  let html = converter.makeHtml(description)

  const ReplaceHtml = () => {
    return { __html: html }
  }

  return (
    <Layout>
      <Seo title={detail.title} />
      <BannerTop banner={bannerTop} />
      <div className="detail__container">
        <div className="detail__description">
          <p dangerouslySetInnerHTML={ReplaceHtml()} />

          {/* <MarkdownView markdown={detail.description} /> */}
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
        localFile {
          childImageSharp {
            gatsbyImageData
          }
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
