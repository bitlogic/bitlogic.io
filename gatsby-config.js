module.exports = {
  siteMetadata: {
    title: `Bitlogic`,
    description: `Bitlogic Web es una empresa dedicada al diseño, ingeniería y desarrollo ágil de productos de software, especializada en la transformación digital de instituciones educativas .`,
    author: `Bitlogic.io`,
  },
  plugins: [
    
    "gatsby-plugin-react-helmet",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        // apiURL: `http://lb-bitlogic-strapi-dev-48805770.sa-east-1.elb.amazonaws.com:1337`,
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000,
        contentTypes: ["banners", "services", "edTeches", "ed-tech-submodules"],
        singleTypes: [`ed-tech-page`, `global-seo`, `services-page`, `home`, "bitway-page"],
      },
    },
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
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
    "gatsby-plugin-offline",
    `gatsby-plugin-sass`,
    /* {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "8668423",
        respectDNT: true,
        productionOnly: true,
      },
    }, */
  ],
}
