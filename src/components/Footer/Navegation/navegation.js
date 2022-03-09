import React from 'react';
import { useFooter } from '../../../hooks';
import { Link } from 'gatsby';
import './navegation.scss';

export default function Navegation() {
    const data = useFooter();
    const dataFooter = data?.allStrapiLayout?.nodes[0].footer;

    const navegationItems = dataFooter?.navegation?.pageLink;

    const navegationParts = navegationItems.map((section) =>
        <li>
            <Link to={section.pathTo}>{section.name}</Link>
        </li>
    );

    return (
        <div className='ContactData__Item ps-md-3'>
            <h3>{dataFooter.navegation?.title}</h3>
            <ul className='Navegation__Item'>
                {navegationParts}
            </ul>
        </div>
    )
}