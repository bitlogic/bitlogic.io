import * as React from "react";

import Layout from "../components/layout";

import { Seo } from "../components/index";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <Seo />
    <div className="notFoundPage">
      <h1>404: No encontrado</h1>
      <Link to={`/`} className="bannerActCall__link" style={{ color: "#2a2c2e" }}>
        Volver al inicio
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
