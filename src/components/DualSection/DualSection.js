import React from 'react'
import './DualSection.scss'

export default function DualSection({ data }) {
    const dualSectionParts = data?.dualSectionPart

    const listSectionParts = dualSectionParts.map((section) =>
        <div className="dualSection p-4">
            <div className="dualSection__image">
                <img
                    src={section.image.url}
                    alt="naturaleza"
                />
            </div>

            <div className="dualSection__textContainer">
                <h4>{section.title}</h4>
                <p>{section.description}</p>
                <a href={section.button.url} target="_blank" rel="noreferrer" >
                    <button className="px-4">{section.button.content}</button>
                </a>
            </div>

        </div>
    );

    return (
        <div className="container my-3 py-3">
        <div className="d-flex flex-column flex-md-row">
            {listSectionParts}
        </div>        
        </div>



    )
}
