import React from 'react'
import './DualSection.scss'

export default function DualSection({ data }) {
    const dualSectionParts = data?.dualSectionPart

    const listSectionParts = dualSectionParts.map((section) =>
        <div className="dualSection p-3">
            <div className="dualSection__image">
                <img
                    src={section.image.url}
                    alt="naturaleza"
                />
            </div>

            <div className="dualSection__textContainer">
                <h1>{section.title}</h1>
                <p>{section.description}</p>
                <a href={section.button.url} target="_blank" rel="noreferrer" >
                    <button>{section.button.content}</button>
                </a>
            </div>

        </div>
    );

    return (

        <div className="d-flex flex-column flex-md-row">
            {listSectionParts}
        </div>

    )
}
