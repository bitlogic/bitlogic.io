import { Link } from "gatsby"
import React from "react"
import "./Banner.scss"

export default function BannerList({ data }) {
  const title = data?.title
  const cards = data?.Card.map(item => {
    return (
      <div className="card_item d-flex mb-2">
        {item.icon && (
          <div className="card_item ">
            <img class="d-block" src={item.icon?.url} placeholder="blurred" />
          </div>
        )}
        <div
          style={!item.icon ? { marginLeft: "2em" } : {}}
          className="card_item col-9 ps-2 pe-2"
        >
          {item.landing_page ? (
            <Link to={"/" + item.landing_page?.slug}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </Link>
          ) : (
            <>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </>
          )}
        </div>
      </div>
    )
  })

  return (
    <div className="container py-5" id={data.strapi_component + "-" + data.id}>
      <div className="bannerList d-md-flex flex-row">
        <h1 className="bannerList__title col-md-6 col-xl-6 align-self-center mb-4">
          {title}
          {data.contactForm && (
            <button>
              <a href={"#" + data.concactFormAnchor}>Contáctanos</a>
            </button>
          )}
        </h1>
        <div className="bannerList__cards col-md-6 col-xl-6">{cards}
        
        </div>
        {data.contactForm && (
            <button className="bannerList__buttonMobile">
              <a href={"#" + data.concactFormAnchor}>Contáctanos</a>
            </button>
          )}
        
      </div>
    </div>
  )
}
