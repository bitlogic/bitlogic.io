import React from "react"
import { graphql } from "gatsby"
import showdown from "showdown"
// import ReactMarkdown from "react-markdown"
import MarkdownView from "react-showdown"
import Layout from "../components/layout"
import { Seo } from "../components/index.js"
import { BannerTop } from "../components/index.js"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import "./BlogItemDetail.scss"

const BlogDetail = ({ data }) => {
  const { title, description, image, author } = data?.allStrapiArticle?.nodes[0]
  const bannerTop = { title, image }

  let { summary } = author
  
  return (
    <Layout>
      <Seo title={title} />
      <BannerTop banner={bannerTop} />
      <div className="detail__container row">
        <div className="col-lg-12">
          <div className="detail__description">
            <MarkdownView
              markdown={description}
            />
            {/* <ReactMarkdown source={description} /> */}
            <div className="detail__description-author">
              {author?.map(author => (
                <div className="detail__box-author">
                  <div className="detail__box-author-image">
                    <GatsbyImage
                      image={getImage(author?.image.localFile)}
                      alt={author?.name}
                    />
                  </div>
                  <div className="detail__box-autor-description">
                    <h5>{author?.name}</h5>
                    <h6>{author?.subTitle}</h6>
                    <p>{author?.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4">
          <div className="detail__sidebar">
            <h4>Artículos relacionados</h4>
            <div>
              <div className="detail__sidebar__blog-card">
                <div className="detail__sidebar__blog-card-description">
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <span className="detail__sidebar__blog-card-more"> 
                    <a href="#" target="_blank">Ver más</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allStrapiArticle(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        description
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        author {
          name
          subTitle
          summary
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
          }
        }
      }
    }
  }
`
export default BlogDetail
