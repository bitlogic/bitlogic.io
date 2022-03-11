import React from 'react';
import './Banner.scss';

export default function BannerLis({ data }) {
    const title = data?.title;
    const image = data?.Card[0]?.icon?.url;

    const cards = data?.Card.map((item) => {
        return (
            <div className="card_item d-flex mb-4">
                <div className="card_item col-3 mt-3 mt-xl-1">
                    <img
                        class="mx-auto d-block"
                        src={image}
                        placeholder="blurred"
                    />
                </div>
                <div className="card_item col-9 ps-2 pe-2">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        )

    })

    return (
        <div className="container my-3 py-3">
            <div className="bannerList d-md-flex flex-row-reverse">
            <h1 className="bannerList__title col-md-6 col-xl-5 align-self-center ps-4 mb-4">{title}</h1>
            <div className="bannerList__cards col-md-6 col-xl-5 pe-5">{cards}</div>
        </div>
        </div>
        

    )
}
