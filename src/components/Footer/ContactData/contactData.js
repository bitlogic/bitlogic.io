import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { useFooter } from '../../../hooks';
import { Link } from 'gatsby';
import { FaIcon } from "../../FaIcon/FaIcon";
import "./contactData.scss";

export default function ContactData() {
  const data = useFooter();
  const dataFooter = data?.allStrapiLayout?.nodes[0].footer;

  const logo = getImage(dataFooter?.logo?.localFile?.childImageSharp?.gatsbyImageData);

  /* const location = dataFooter.location?.iconText.map((item) => {
   
  }) */

  const navegationItems = dataFooter?.navegation?.pageLink

  const navegationParts = navegationItems.map((section) =>
    <div className="ContactData__Item">
      <Link to={section.pathTo}>{section.name}</Link>
    </div>
  );

  return (
    <>
      <div className='ContactData__Item'>
        <h3>{dataFooter?.location?.title}</h3>
        <p> <FaIcon type="text" code="name"/> </p>
        
      </div>
      <div className='ContactData__Item'>
        <h3>{dataFooter.navegation?.title}</h3>
        <ul>
          <li>{navegationParts}</li>
        </ul>
      </div>
{/* 
      <div className='ContactData__Item'>
        <Link to={dataFooter.contact.internalLink.pathTo}>{dataFooter.contact.internalLink.name}</Link>
        <h3>{dataFooter.contact.title}</h3>
        <p>{dataFooter.contact.phone}</p>
        <p>{dataFooter.contact.email}</p>
      </div>

      <Link to="/">
        <GatsbyImage image={logo} />
      </Link> */}
    </>

  )
}


/* 
const CONTACT_ITEMS = [
  "José Roque Funes 1791",
  "Córdoba, Argentina",
  "+54 9 351 157 404 863",
]

const ContactData = () => {
  return (
    <ul className="ContactData">
      {CONTACT_ITEMS.map((data, i) => (
        <li className="ContactData__Item" key={i}>
          {data}
        </li>
      ))}
    </ul>
  )
}

export default ContactData
}*/