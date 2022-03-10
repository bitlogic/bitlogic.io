import React from 'react';
import './Banner.scss';

export default function BannerLis({ data }) {
    const title = data?.title;
    const image = data?.Card[0]?.icon?.url;
    console.log(data)
    console.log(image)

    const cards = data?.Card.map((item) => {
        return (
            <div className="card_item d-flex mb-4">
                <div className="card_item col-3 mt-3 mt-xl-1">
                    <img
                        class="mx-auto d-block"
                        src={'http://localhost:1337/uploads/Mesa_de_trabajo_51_2x_8_39520255e7.png'}//OJO CAMBIAR POR {image}
                        placeholder="blurred"
                    />
                </div>
                <div className="card_item col-9 ps-2 pe-2">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            </div>
        )

    })

    return (
        <div className="bannerList container-fluid mt-4 d-md-flex flex-row-reverse">
            <div className="bannerList__title col-md-4 col-xl-5 align-self-center ps-3 pe-3 mb-4">{title}</div>
            <div className="bannerList__cards col-md-8 col-xl-5 ms-xl-4">{cards}</div>
        </div>

    )
}
