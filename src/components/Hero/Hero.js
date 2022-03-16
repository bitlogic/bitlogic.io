import React from 'react';
import './Hero.scss';

export default function Hero({ data }) {
    const title = data.title;
    const richList = data.listAnimation;
    const image = data.image.url;

    console.log(richList, "lista")
    const regexList = /(- )(.*)/g;

    //Parametros en la funcion y validar el richText q acepte mas q h1
    const processRichText = () => {
        const processList = richList?.match(regexList)?.map(e => e.slice(2));
        return [processList];

    }

    let [listOfWords] = processRichText();

    return (
        <>
            <div className="hero">
                <div className="hero d-flex flex-column flex-xl-row-reverse justify-content-around">
                    <div className="hero__image col-xl-7">
                        <img
                            src={'http://localhost:1337' + image}
                            placeholder="blurred"
                        />
                    </div>
                    <div className="content-text d-flex align-self-center col-xl-5">
                        <h2>{title}</h2>
                        {listOfWords && (
                            <div className="visible">
                                <ul>
                                    {listOfWords.map(word => <li>{word}</li>)};
                                </ul>
                            </div>
                        )}

                    </div>
                </div>

                {data.button && (
                    <div className="hero__button">
                        <a href={data.button.url} target="_blank" rel="noreferrer" >
                            <button className="button-hero px-4">{data.button.content}</button>
                        </a>
                    </div>
                )}
            </div>
        </>

    )
}
