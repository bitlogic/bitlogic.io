import { useStaticQuery, graphql } from "gatsby";

const useBitwayPage = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiBitwayPage {
        nodes {
          Section {
            title
            Type
            body
            id
            enabled
            Image {
              Caption
              Image {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
              Text
            }
          }
          id
        }
      }
    }
  `);
  return query;
};

export default useBitwayPage;
