import React from 'react'
import './Paragraph.scss'
import MarkdownView from 'react-showdown';
const Paragraph = ({text, ...extra}) => {
    const {body} = text
    return (
        <section {...extra} className={`bitway-paragraph ${extra.className}`}  >
            <MarkdownView markdown={body} />
        </section>
    )
}

export default Paragraph
