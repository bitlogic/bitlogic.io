import React from "react";
import { useFooter } from '../../../hooks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./contactData.scss";

export default function ContactData() {
  const data = useFooter();
  const dataFooter = data?.allStrapiLayout?.nodes[0].footer;

  const contact = dataFooter?.contact?.iconText.map((item) => {
    return (
      <p className="icon-text">
        <FontAwesomeIcon icon={item.icon.type, item.icon.code} />
        {item.name}
      </p>
    )
  });

  return (
    <>
      <div className='ContactData__Item'>
        <h3>{dataFooter.contact.title}</h3>
        <p className='ContactData__Item__contact'>{contact}</p>

        <div className='ContactData__Item__link'>
          <a href={dataFooter.internalLink.pathTo}>{dataFooter.internalLink.name}</a>
        </div>
      </div>
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