import React from 'react';
import MarkdownView from "react-showdown";
import './Text.scss';

export default function Text({ data }) {
    console.log(data)
    const title = data?.title;
    const description = data?.text;

    return (
        <div className="text container py-3 d-flex flex-column flex-lg-row">

            {title && (
                <h2 className="title me-3 mt-5 p-lg-2">{title}</h2>
            )}
            {description && (
                <MarkdownView markdown={description} className="description px-lg-5" />
            )}
        </div>
    )
}
