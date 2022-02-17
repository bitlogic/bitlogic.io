import React from 'react';
import { useHomePage } from "../../hooks/index"
import { StaticImage } from "gatsby-plugin-image"
import './Hero.scss';

export default function Hero() {
    const data = useHomePage()
    const richText = data?.allStrapiHome?.nodes[0].Hero[0].title
    console.log(richText)

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
            <div className="container">
                <StaticImage
                    src='../../../public/destinos-naturaleza-copia-640x400.jpg'
                    placeholder="blurred"
                />

                <div className="content-text">
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div>
                        <h2 className="visible">
                            <ul>
                                {listOfWords.map(word => <li>{word}</li>)}

                            </ul>
                        </h2>
                    </div>

                </div>

            </div>
        </>

    )
}
