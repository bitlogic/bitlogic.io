import React, { lazy, Suspense, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import ThemeProvider from "../context/themeContext"
import Footer from "./Footer/Footer"
import "./layout.scss"
import PropTypes from "prop-types"
import "./FontAwesomeOne/FontAwesomeOne"

const BannerRedirect = lazy(() => import("./BannerRedirect/BannerRedirect"))

const Layout = ({ children, options = {}, location }) => {
  const defaultOptions = { 
    hasHeader: true, 
    hasFooter: true,
   }
     options = { ...defaultOptions, ...options }

  
  const { allStrapiHome } = useStaticQuery(graphql`
    query PreloadDynamicHero {
      allStrapiHome {
        nodes {
          body {
            strapi_component
            backgroundImage {
              url
            }
          }
        }
      }
    }
  `)

  const heroBlock = allStrapiHome.nodes[0].body.find(
    b => b.strapi_component === "components.banner"
  )
  const raw = heroBlock?.backgroundImage?.url
  const heroUrl = raw
    ? raw.startsWith("http")
      ? raw
      : `https://strapi-s3-bitlogic.s3.sa-east-1.amazonaws.com${raw}`
    : null

  useEffect(() => {
    const hash = location?.state?.component
    if (hash) {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }, [location?.state?.component])

  const userLanguage =
    typeof window !== "undefined" ? navigator.language : undefined

  return (
    <ThemeProvider>
      <Helmet>
        {heroUrl && (
          <link key="preload-hero" rel="preload" as="image" href={heroUrl} />
        )}
        <style type="text/css">{`
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
        `}</style>
      </Helmet>

      {options.hasHeader && <Header />}

      {userLanguage?.startsWith("en") && (
        <Suspense fallback={null}>
          <BannerRedirect />
        </Suspense>
      )}
      <main>{children}</main>
      {options.hasFooter && <Footer />}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.shape({
    hasHeader: PropTypes.bool,
    hasFooter: PropTypes.bool,
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      component: PropTypes.string,
    }),
  }),
}

export default Layout
