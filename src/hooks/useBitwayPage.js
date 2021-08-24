import { useStaticQuery, graphql } from "gatsby";
import { useEffect, useState } from "react";

const useBitwayPage = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBitwayPage {
        nodes {
          SEO {
            pageDescription
            pageTitle
            pageKeywords
          }
          sections {
            body
            id
            type
            galleryImage {
              caption
              text
              id
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `);
  return query;
};
export default useBitwayPage;
