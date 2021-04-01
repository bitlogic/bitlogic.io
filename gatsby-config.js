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
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`services`, `banners`],
      },
    },
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `src/images/gatsby-icon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
