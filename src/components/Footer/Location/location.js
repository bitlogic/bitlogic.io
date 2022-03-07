import React from "react";
import { useFooter } from '../../../hooks';
import FaIcon from "../../FaIcon/FaIcon"
import "./location.scss";

export default function Location() {
    const data = useFooter();
    const dataFooter = data?.allStrapiLayout?.nodes[0].footer;

    const location = dataFooter.location?.iconText.map((item) => {
        return (
            <p className="icon-text d-flex">
                <FaIcon type={item.icon.type} code={item.icon.code} />
                {item.name}
            </p>
        )
    });
    return (
        <div className='ContactData__Item__location'>
            <h3>{dataFooter?.location?.title}</h3>
            <p>{location}</p>
        </div>
    )
}
