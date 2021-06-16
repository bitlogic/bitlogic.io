module.exports = {
  siteMetadata: {
    title: `Bitlogic`,
    description: `Bitlogic Web es una empresa dedicada al diseño, ingeniería y desarrollo ágil de productos de software, especializada en la transformación digital de instituciones educativas .`,
    author: `Bitlogic.io`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    /* {
      resolve: "gatsby-plugin-google-marketing-platform",
      options: {
        dataLayer: {
          // Preset dataLayer values
          gaPropertyId: "[Google Analytics ID]",
        },
        tagmanager: {
          id: "[Google Tag Manager ID]",
          params: {
            // GTM URL Parameters
            // Ex: https://www.googletagmanager.com/gtm.js?id=[ID]&gtm_cookies_win=x
            gtm_cookies_win: "x",
          },
        },
        analytics: {
          id: "[Google Analytics ID]",
        },
        optimize: {
          id: "[Google Optimize ID]",
        },
      },
    },
    {
      resolve: "gatsby-plugin-gdpr-tracking",
      options: {
        // logging to the console, if debug is true
        debug: false,
        googleAnalytics: {
          // The property ID; the tracking code won't be generated without it.
          trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
          // Defines it google analytics should be started with out the cookie consent
          autoStart: true, // <--- default
          // Setting this parameter is optional
          anonymize: true, // <--- default
          // Name of the cookie, that enables the tracking if it is true
          controlCookieName: "gdpr-analytics-enabled", // <--- default
          cookieFlags: "secure;samesite=none", // <--- default
        },
        googleAds: {
          // The property ID; the tracking code won't be generated without it.
          trackingId: "YOUR_GOOGLE_ADS_TRACKING_ID",
          // Setting this parameter is optional
          anonymize: true, // <--- default
          // Name of the cookie, that enables the tracking if it is true
          controlCookieName: "gdpr-marketing-enabled", // <--- default
          cookieFlags: "secure;samesite=none", // <--- default
        },
        facebookPixel: {
          // The property ID; the tracking code won't be generated without it.
          pixelId: "YOUR_FACEBOOK_PIXEL_TRACKING_ID",
          // Name of the cookie, that enables the tracking if it is true
          controlCookieName: "gdpr-marketing-enabled", // <--- default
        },
        hotjar: {
          // The Hotjar ID; the tracking code won't be generated without it.
          trackingId: "YOUR_HOTJAR_ID",
          // Your Hotjar snippet version
          snippetVersion: "6", // <--- default
          // Name of the cookie, that enables the tracking if it is true
          controlCookieName: "gdpr-analytics-enabled", // <--- default
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    }, */
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
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000,
        contentTypes: ["banners", "services", "edteches"],
        singleTypes: [`home-page`],
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
        icon: `src/images/isotipo.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
