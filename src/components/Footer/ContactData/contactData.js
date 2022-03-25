import React from "react";
import { useFooter } from '../../../hooks';
import FaIcon from "../../FaIcon/FaIcon"
import "./contactData.scss";

export default function ContactData() {
  const data = useFooter();
  const dataFooter = data?.allStrapiLayout?.nodes[0].footer;

  const contact = dataFooter?.contact?.iconText.map((item) => {
    return (
      <p className="icon-text d-flex">
        <FaIcon type={item.icon.type} code={item.icon.code} />
        {item.name}
      </p>
    )
  });

  return (
    <>
      <div className='ContactData__Item'>
        <h6>{dataFooter.contact.title}</h6>
        <p className='ContactData__Item__contact'>{contact}</p>

        <div className='ContactData__Item__link'>
          <a href={dataFooter.internalLink?.pathTo}>{dataFooter.internalLink?.name}</a>
        </div>
      </div>
    </>

  )
}
