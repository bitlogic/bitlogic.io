// gatsby-ssr.js
import React from "react"
import { StaticQuery, graphql } from "gatsby"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <StaticQuery
      key="critical-banner-hero"
      query={graphql`
        query CriticalBannerPoster {
          allStrapiHome {
            nodes {
              body {
                __typename
                ... on STRAPI__COMPONENT_SECTIONS_VIDEOBACKGROUND {
                  poster {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        // buscamos la sección de videoBackground en el array de body
        const section = data.allStrapiHome.nodes[0].body.find(
          node => node.__typename === "STRAPI__COMPONENT_SECTIONS_VIDEOBACKGROUND"
        )
        const posterUrl = section?.poster?.url

        const criticalCSS = `
          .banner.hero .title h1 {
            text-transform: uppercase;
            text-align: left;
            margin-bottom: 0.8rem;
            font-size: 52px;
            font-family: "Plain", sans-serif;
            word-wrap: initial;
          }
          .banner.hero .title p {
            font-size: 1rem;
            line-height: 1.5;
            margin: 0;
          }
        `

        return [
          // si existe URL de poster, lo preload
          posterUrl && (
            <link
              key="preload-video-poster"
              rel="preload"
              as="image"
              href={posterUrl}
            />
          ),
          // y siempre inyectamos el CSS crítico inline
          <style
            key="critical-banner-hero"
            dangerouslySetInnerHTML={{ __html: criticalCSS }}
          />,
        ]
      }}
    />,
  ])
}
