import * as React from "react"
import Header from "./header"
import "./layout.scss"
import Footer from "./Footer/Footer"
import ScriptTag from "react-script-tag"
import useGlobalConfig from "../hooks/useGlobalConfig"
import ThemeProvider from '../context/themeContext'

const Layout = ({ children }) => {
  const config = useGlobalConfig()
  const scripts = config?.allStrapiGlobalConfig?.nodes.map(item =>
    item?.script?.map(script =>
      script.enable === true ? (
        <ScriptTag
          key={script.name}
          type="text/javascript"
          src={script.src}
          id={script.name}
          async
          defer
        />
      ) : null
    )
  )
  return (
    <ThemeProvider>
      {scripts}
      <Header />

      <main>{children}</main>
      <Footer />
      {/*© {new Date().getFullYear()}, Built with*/}
    </ThemeProvider>
  )
}

export default Layout
