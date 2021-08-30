// import { useStaticQuery, graphql } from "gatsby"

// const useEdTech = () => {
//   const query = useStaticQuery(graphql`
//     {
//       allStrapiBanners(filter: { page: { eq: "edtech" } }) {
//         nodes {
//           enable
//           page
//           type
//           title
//           summary
//           link {
//             pathTo
//             name
//           }
//           logo {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//           image {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//       }
//       allStrapiEdteches(sort: { fields: id, order: ASC }) {
//         nodes {
//           id
//           title
//           content
//           icon {
//             childImageSharp {
//               gatsbyImageData(height: 100)
//             }
//           }
//           edTechSubmodules {
//             ed_tech_submodules {
//               id
//               title
//               edTechType
//             }
//           }
//         }
//       }
//       allStrapiEdTechPage {
//         nodes {
//           seo: SEO {
//             pageDescription
//             pageKeywords
//             pageTitle
//           }
//         }
//       }
//     }
//   `)
//   return query
// }

// export default useEdTech
