import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/layout"
import { Seo } from "../components/index.js"

const Page = ({ data }) => {
    const { title } = data?.allStrapiPage?.nodes[0]

    return (
        <Layout>
            <Seo title={title} />
            <h1>Estamos en PAGE</h1>
        </Layout>
    );
}


export const query = graphql`
  query($slug: String!) {
    allStrapiPage(filter: { slug: { eq: $slug } }) {
        nodes {
          title
          slug
        }
    }
  }
`
export default Page
