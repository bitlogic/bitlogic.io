import { useStaticQuery, graphql } from "gatsby";

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
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
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
