import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import { Seo } from "../index";
import useBitwayPage from "../../hooks/useBitwayPage";
import Gallery from "./Gallery/Gallery";
import Paragraph from "./Paragraph/Paragraph";
import "./BitwayContainer.scss";

const BitwayPage = () => {
  const {
    allStrapiBitwayPage: { nodes },
  } = useBitwayPage();

  const sections = nodes[0].Section;
  
  return (
    <Layout>
      <Seo title="Bitway" />
      <div className="bitway-body">
        {sections.map((elem, index, array) => {
          if (elem.Image) {
            if(array[index - 1]?.Image){
              return null
            }
            if (array[index + 1]?.Image) {
              return (
                <Gallery key={elem.id} content={[elem, array[index + 1]]} />
              );
            } else {
              return <Gallery key={elem.id} content={[elem]} />;
            }
          } else if (elem.body) {
            return <Paragraph key={elem.id} text={elem} />;
          } else {
            return null;
          }
        })}
      </div>
    </Layout>
  );
};

export default BitwayPage;
