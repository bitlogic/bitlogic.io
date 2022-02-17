import React from 'react';
import { useHomePage } from "../../hooks/index"
import { StaticImage } from "gatsby-plugin-image"
import './Hero.scss';

export default function Hero() {
    const data = useHomePage()
    const dataDinamyc = data?.allStrapiHome?.nodes[0].body[0]
    const richText = dataDinamyc.title
    const image = dataDinamyc.image.url

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
            <div className="container d-flex flex-column flex-xl-row-reverse">

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
