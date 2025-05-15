module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: `Bitlogic`,
    description: `Bitlogic Web es una empresa dedicada al diseño, ingeniería y desarrollo ágil de productos de software, especializada en la transformación digital de instituciones educativas .`,
    author: `Bitlogic.io`,
    siteUrl: process.env.SITE_URL,
    // siteUrl: "https://es.bitlogic.io",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
        query: `
        {
          allSitePage {
            nodes {
              path
              pageContext
            }
          }
          strapiBlogPage {
            updated_at
          }
          strapiHome {
            updated_at
          }
        }
        `,
        resolveSiteUrl: () => process.env.SITE_URL,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          strapiBlogPage: blogPage,
          strapiHome: homePage,
        }) => {
          const singlePages = [
            {
              path: "/",
              lastmod: homePage.updated_at,
            },
            {
              path: "/blog/",
              lastmod: blogPage.updated_at,
            },
          ]

          return allPages.map(page => {
            if (page.path === "/") return singlePages[0]
            else if (page.path === "/blog/") return singlePages[1]

            return {
              path: page.path,
              lastmod: page?.pageContext?.lastmod,
            }
          })
        },
        serialize: ({ path, lastmod }) => {
          return {
            url: path,
            lastmod: lastmod,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    ...(process.env.ENV_PROD === 'produccion'
      ? [
          {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: process.env.GTM_ID,
              includeInDevelopment: false,
              enableWebVitalsTracking: true,
            },
          },
        ]
      : []),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        stripQueryString: true,
        siteUrl: process.env.SITE_URL,
        // siteUrl: "https://es.bitlogic.io",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: `http://lb-bitlogic-strapi-dev-48805770.sa-east-1.elb.amazonaws.com:1337`,
        // apiURL: `https://strapi.bitlogic.io`,
        //apiURL: process.env.STRAPI_URL,
         apiURL: "http://127.0.0.1:1337",
        queryLimit: 1000,
        collectionTypes: [
          `article`,
          `blog-category`,
          `landing-page`,
          `case`,
          `icon`,
          `professional`,
        ],
        singleTypes: [
          `global-seo`,
          `home`,
          `blog-page`,
          `global-config`,
          `layout`,
        ],
      },
    },
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          // placeholder: `blurred`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `src/images/isotipo.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },

    "gatsby-plugin-offline",
    `gatsby-plugin-sass`,
    "gatsby-plugin-webpack-bundle-analyser-v2"
  ],
}
