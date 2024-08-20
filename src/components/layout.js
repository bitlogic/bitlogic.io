import React, { lazy, Suspense } from "react"
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

  React.useEffect(() => {
    const hash = location?.state?.component
    let el = hash && document.getElementById(hash)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [location?.state?.component])

  const userLanguage =
    typeof window !== "undefined" ? navigator.language : undefined

  return (
    <ThemeProvider>
      {options.hasHeader && <Header />}
      {userLanguage?.startsWith("en") && (
        <Suspense fallback>
          <BannerRedirect />
        </Suspense>
      )}
      <main>{children}</main>
      {options.hasFooter && <Footer />}
      {/*© {new Date().getFullYear()}, Built with*/}
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
