import React from 'react';
import './Hero.scss';

export default function Hero({data}) {
    const richText = data.title
    const image = data.image.url

    const regexTitle = /(# )(.*)/g;

    const regexList = /(- )(.*)/g;

    const processRichText = () => {
        const processTitle = richText.match(regexTitle)[0].slice(2)
        const processList = richText.match(regexList).map(e => e.slice(2))

        return [processTitle, processList]
    }
    var [title, listOfWords] = processRichText()

    return (
        <>
            <div className="container hero d-flex flex-column flex-xl-row-reverse">

                <img
                    src={image}
                    placeholder="blurred"
                />

                <div className="content-text align-self-center">
                    <h2>{title}</h2>
                    <h2 className="visible">
                        <ul>
                            {listOfWords.map(word => <li>{word}</li>)}
                        </ul>
                    </h2>
                </div>

            </div>
        </>

    )
}
