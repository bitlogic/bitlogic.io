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
          actionCallBanner {
            title
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            imageDarkMode {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            link {
              name
              pathTo
            }
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
              imageDark {
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
