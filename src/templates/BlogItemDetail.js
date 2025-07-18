import React from "react"
import { graphql } from "gatsby"
import MarkdownView from "react-showdown"
import Layout from "../components/layout"
import { Seo, BannerTop, CustomImage } from "../components/index.js"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet" // Importa Helmet
import "./BlogItemDetail.scss"

const BlogDetail = ({ data }) => {
  const { title, description, image, imagePage, author, seo, published_at, updated_at } =
    data?.allStrapiArticle?.nodes[0] || {}

  const bannerTop = imagePage ? { title, imagePage } : { title, image }
const img       = imagePage || image;
const imgWidth  = img.width  || img.localFile.childImageSharp.original.width;
const imgHeight = img.height || img.localFile.childImageSharp.original.height;


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": seo?.pageTitle || title, 
    "description": seo?.pageDescription || description,
    "image": {
    "@type": "ImageObject",
    "url": img.url,
    "width": imgWidth,
    "height": imgHeight
  },
    "author": author?.map(auth => ({
      "@type": "Person",
      "name": auth.name,
    }
  )),
    
    "datePublished": published_at, 
    "dateModified": updated_at, 
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://es.bitlogic.io/blog/${data?.allStrapiArticle?.nodes[0]?.slug}`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bitlogic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bitlogic.io/static/64f396cb88cfcbfda46b86c5218242f2/de081/Logo_Bit_azul_7e725e9726.webp", // URL del logo del sitio
        "width": 633,
        "height": 187
      }
    },
  }

  return (
    <Layout>
      <Seo
        title={seo?.pageTitle}
        description={seo?.pageDescription}
        keywords={seo?.pageKeywords}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <BannerTop banner={bannerTop} />
      <div className="detail__container row">
        <div className="col-lg-12">
          <div className="detail__description">
            <MarkdownView
              markdown={description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="detail__description-author">
              {author?.map(author => (
                <div className="detail__box-author" key={author.name}>
                  <div className="detail__box-author-image">
                    <CustomImage
                      image={author?.image}
                      alt={author?.image?.alternativeText || author.name}
                      className=""
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
      </div>
    </Layout>
  )
}

BlogDetail.propTypes = {
  data: PropTypes.shape({
    allStrapiArticle: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          seo: PropTypes.shape({
            pageTitle: PropTypes.string,
            pageDescription: PropTypes.string,
            pageKeywords: PropTypes.string,
          }),
          image: PropTypes.shape({
            url: PropTypes.string.isRequired,
            alternativeText: PropTypes.string,
            localFile: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                gatsbyImageData: PropTypes.object.isRequired,
              }),
            }),
          }),
          imagePage: PropTypes.shape({
            url: PropTypes.string.isRequired,
            alternativeText: PropTypes.string,
            localFile: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                gatsbyImageData: PropTypes.object.isRequired,
              }),
            }),
          }),
          author: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              subTitle: PropTypes.string,
              summary: PropTypes.string,
              image: PropTypes.shape({
                url: PropTypes.string.isRequired,
                alternativeText: PropTypes.string,
                localFile: PropTypes.shape({
                  childImageSharp: PropTypes.shape({
                    gatsbyImageData: PropTypes.object.isRequired,
                  }),
                }),
              }),
            })
          ),
        })
      ),
    }),
  }),
}


export const query = graphql`
  query($slug: String!) {
    allStrapiArticle(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        description
        slug
        published_at
        updated_at
        destacado
        seo {
          pageTitle
          pageDescription
          pageKeywords
        }
        image {
          url
          alternativeText
          width
          height
          localFile {
            childImageSharp {
              gatsbyImageData
              original{
                width
                height
              }
            }
          }
        }
        imagePage {
          url
          alternativeText
          width
          height
          localFile {
            childImageSharp {
              gatsbyImageData
              original{
                width
                height
              }
            }
          }
        }
        author {
          name
          subTitle
          summary
          image {
            url
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 150, height: 150)
              }
            }
          }
        }
      }
    }
  }
`

export default BlogDetail
