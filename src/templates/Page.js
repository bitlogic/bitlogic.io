import React from 'react'
import { graphql, Link } from "gatsby"
//import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Seo } from "../components/index.js"
import './Page.scss'

const Page = ({ data }) => {
  const { title, sections } = data?.allStrapiPage?.nodes[0]

  return (
    <Layout>
      <Seo title={title} />
      {sections?.map((section, idx) => (
        <div className="content__container">
          <div className="content__img">
            <img src='http://localhost:1337/uploads/Whats_App_Image_2020_01_22_at_11_23_1_dae1b32eaa.png'  key={idx}/>
          </div>
          <div className="content__description">
            <h5>{section?.title}</h5>
            <Link to={`/${section?.link?.pathTo}`} className="content__link">
              {section?.link?.name}
            </Link>
          </div>
        </div>
      ))}

    </Layout>
  );
}


export const query = graphql`
  query($slug: String!) {
    allStrapiPage(filter: { slug: { eq: $slug } }) {
        nodes {
          title
          slug
          sections
        }
    }
  }
`
export default Page

