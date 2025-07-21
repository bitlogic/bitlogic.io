import React, { lazy, Suspense, useEffect } from "react"
import Header from "./header"
import ThemeProvider from "../context/themeContext"
import Footer from "./Footer/Footer"
import "./layout.scss"
import PropTypes from "prop-types"
import "./FontAwesomeOne/FontAwesomeOne"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const BannerRedirect = lazy(() => import("./BannerRedirect/BannerRedirect"))

const Layout = ({ children, options = {}, location }) => {
  const defaultOptions = {
    hasHeader: true,
    hasFooter: true,
  }

  options = { ...defaultOptions, ...options }
  useEffect(() => {
    const hash = location?.state?.component
    let el = hash && document.getElementById(hash)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [location?.state?.component])
  const userLanguage =
    typeof window !== "undefined" ? navigator.language : undefined
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
    b => b.strapi_component === "home.video-background"
  )
  const raw = heroBlock?.backgroundImage?.url
  const heroUrl = raw
    ? raw.startsWith("http")
      ? raw
      : `https://strapi-s3-bitlogic.s3.sa-east-1.amazonaws.com${raw}`
    : null
  return (
    <ThemeProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {heroUrl && (
          <link
            rel="preload"
            as="image"
            href={heroUrl}
            imagesrcset={heroUrl}
            imagesizes="100vw"
            crossorigin="anonymous"
          />
        )}
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
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.object,
  location: PropTypes.shape({
    state: PropTypes.shape({
      component: PropTypes.string,
    }),
  }),
}

export default Layout
