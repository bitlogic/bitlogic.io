import React from 'react'
import './Paragraph.scss'
import MarkdownView from 'react-showdown';
const Paragraph = ({text}) => {
    const {body} = text
    return (
        <section className="bitway-paragraph">
            <MarkdownView markdown={body} />
        </section>
    )
}

export default Paragraph
