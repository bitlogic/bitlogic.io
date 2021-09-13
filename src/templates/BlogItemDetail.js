import React from "react"
import { graphql } from "gatsby"
import showdown from "showdown"
import Layout from "../components/layout"
import { Seo } from "../components/index.js"
import { BannerTop } from "../components/index.js"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
import "./BlogItemDetail.scss"

const BlogDetail = ({ data }) => {
  const { title, description, image } = data?.allStrapiArticle?.nodes[0]
  const bannerTop = { title, image }

  let converter = new showdown.Converter()
  let html = converter.makeHtml(description)

  const ReplaceHtml = () => {
    return { __html: html }
  }

  return (
    <Layout>
      <Seo title={title} />
      <BannerTop banner={bannerTop} />
      <div className="detail__container row">
        <div className="col-lg-12">
          <div className="detail__description">
            <p dangerouslySetInnerHTML={ReplaceHtml()} />
            {/* <div className="detail__description-author">
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
            </div> */}
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
      }
    }
  }
`
export default BlogDetail
