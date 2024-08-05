import * as React from "react"
import Header from "./header"
import "./layout.scss"
import Footer from "./Footer/Footer"
import ThemeProvider from "../context/themeContext"
import PropTypes from "prop-types"
import BannerRedirect from "./BannerRedirect/BannerRedirect"

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

  return (
    <ThemeProvider>
      {options.hasHeader && <Header />}
      <BannerRedirect />
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
