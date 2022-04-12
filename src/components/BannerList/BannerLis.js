import { Link } from "gatsby"
import React from "react"
import "./Banner.scss"

export default function BannerLis({ data }) {
  const title = data?.title
  const image = data?.Card[0]?.icon?.url
  console.log(data)
  const cards = data?.Card.map(item => {
    return (
      <div className="card_item d-flex mb-4">
        <div className="card_item col-3 mt-3 mt-xl-1">
          <img class="mx-auto d-block" src={image} placeholder="blurred" />
        </div>
        <div className="card_item col-9 ps-2 pe-2">
          <Link to={item.landing_page ? "/" + item.landing_page?.slug : null}>
            <h4>{item.title}</h4>
          </Link>
          <p>{item.description}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="container py-5" id={data.strapi_component + "-" + data.id}>
      <div className="bannerList d-md-flex flex-row-reverse">
        <div className="bannerList__cards col-md-6 col-xl-6 pe-5">{cards}</div>
        <h1 className="bannerList__title col-md-6 col-xl-6 align-self-center ps-4 mb-4">
          {title}
          {data.contactForm && (
            <button>
              <a href={"#" + data.concactFormAnchor}>Contactanos</a>
            </button>
          )}
        </h1>
      </div>
    </div>
  )
}
