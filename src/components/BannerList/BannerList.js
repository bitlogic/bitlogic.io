import { Link } from "gatsby"
import React from "react"
import "./Banner.scss"
import useLandingUrl from "../../hooks/useLandingUrl"
import PropTypes from "prop-types"
import CustomImage from "../CustomImage/CustomImage"

export default function BannerList({ data }) {
  const { title, Card, contactForm, concactFormAnchor, callToAction } = data
  const getUrl = useLandingUrl()

  const cards = Card.map(item => {
    return (
      <div className="card_item d-flex mb-2 gap-2" key={item.id}>
        {item?.icon && (
          <div className="card_item">
            <CustomImage
              image={item?.icon}
              className={"d-block"}
              alt={item?.icon?.alternativeText || "Card icon"}
              width={60}
              height={60}
            />
          </div>
        )}
        <div className="card_item col-9 pe-2">
          {item.landing_page ? (
            <Link to={getUrl(item.landing_page.slug)}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ) : (
            <>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </>
          )}
        </div>
      </div>
    )
  })

  return (
    <div className="container py-5">
      <div className="bannerList d-md-flex flex-row" data-nosnippet>
        <h2 className="bannerList__title col-md-6 col-xl-6 align-self-center mb-4">
          {title}
          {contactForm && concactFormAnchor && callToAction && (
            <a href={concactFormAnchor}>{callToAction}</a>
          )}
        </h2>
        <div className="bannerList__cards d-flex flex-column col-md-6 col-xl-6 gap-4">
          {cards}
        </div>
      </div>
    </div>
  )
}

BannerList.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    contactForm: PropTypes.bool,
    concactFormAnchor: PropTypes.string,
    callToAction: PropTypes.string,
    Card: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        landing_page: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
        icon: PropTypes.shape({
          alternativeText: PropTypes.string,
          url: PropTypes.string.isRequired,
        }),
      })
    ),
  }),
}
