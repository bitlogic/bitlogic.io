import * as React from "react"
import Header from "./header"
import "./layout.scss"
import Footer from "./Footer/Footer"
import ScriptTag from "react-script-tag"
import useGlobalConfig from "../hooks/useGlobalConfig"
import ThemeProvider from "../context/themeContext"
import { Helmet } from 'react-helmet';
import PropTypes from "prop-types"
import BannerRedirect from "./BannerRedirect/BannerRedirect"

const Layout = ({ children, options = {}, location }) => {
  const defaultOptions = {
    hasHeader: true,
    hasFooter: true,
  }

  options = { ...defaultOptions, ...options }

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

  React.useEffect(() => {
    const hash = location?.state?.component
    let el = hash && document.getElementById(hash)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [location?.state?.component])

  return (
    <ThemeProvider>
      {scripts}
      {options.hasHeader && <Header />}
      <BannerRedirect />
      <Helmet>
        <script>
          {`
            window.pipedriveLeadboosterConfig = {
              base: 'leadbooster-chat.pipedrive.com',
              companyId: 10496688,
              playbookUuid: '40a6237e-a2d8-44df-847a-2e3095301529',
              version: 2
            };
            (function () {
              var w = window;
              if (w.LeadBooster) {
                console.warn('LeadBooster already exists');
              } else {
                w.LeadBooster = {
                  q: [],
                  on: function (n, h) {
                    this.q.push({ t: 'o', n: n, h: h });
                  },
                  trigger: function (n) {
                    this.q.push({ t: 't', n: n });
                  },
                };
              }
            })();
          `}
        </script>
        <script src="https://leadbooster-chat.pipedrive.com/assets/loader.js" async></script>
      </Helmet>
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
      component: PropTypes.string
    })
  })
}

export default Layout
