import "./PartnersSection.scss"
import React from 'react'
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const PartnersSection = ({title, partners}) => {

    const partnerList = partners.map( partner => {
            const partnerImage = getImage(partner.image)
            return (
                <div className="partners__image">
                                    <GatsbyImage
                
                image={partnerImage}
                alt={partner.caption}
              />
                </div>

            )
        }
    )
    return (
        <div className="partners">
            <h2 className="partners__title">{title}</h2>
            <div className="partners__logos">
                {partnerList}
            </div>
        </div>
    )
}

export default PartnersSection
