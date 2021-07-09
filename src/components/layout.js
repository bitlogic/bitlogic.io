import * as React from "react"
import Header from "./header"
import "./layout.scss"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
      {/*© {new Date().getFullYear()}, Built with*/}
    </>
  )
}

export default Layout
