import React from "react"
import Layout from "../layout"
import Helmet from "react-helmet"
import { Seo } from "../index"
import "./JobsPage.scss"

const JobsPage = () => {
  return (
    <Layout>
      <Seo />
      <div class="banner__head">
        <h2 id="teinvitamosaspanpcrearpspan">
          Te invitamos a{" "}
          <span>
            <p>crear</p>
          </span>
        </h2>
        <h3 id="conocnuestrasbsquedasydescubrtuprximodesafoconnosotros">
          Conocé nuestras búsquedas y descubrí tu próximo desafío con nosotros.
        </h3>
      </div>
      <div id="cats-portal-widget" className="container widget-container"></div>
      <Helmet>
        <script>
          {`window.cjw=window.cjw||function(){(cjw.instance=cjw.instance||[]).push(arguments[0])};
                    cjw({"id":91646,"domain":"catsone.com","target":"#cats-portal-widget"});`}
        </script>
        <script
          async
          src="https://app.catsone.com/resources/entry-jobwidget.js"
        ></script>
      </Helmet>
    </Layout>
  )
}

export default JobsPage
