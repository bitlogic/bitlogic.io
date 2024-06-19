import { Link } from "gatsby"
import React from "react"
import "./Banner.scss"
import useLandingUrl from "../../hooks/useLandingUrl"
import PropTypes from "prop-types"

export default function BannerList({ data }) {
  const { title, Card, contactForm, concactFormAnchor, callToAction } = data
  const getUrl = useLandingUrl()
  const cards = Card.map(item => {
    return (
      <div className="card_item d-flex mb-2 gap-2" key={item.id}>
        {item?.icon && (
          <div className="card_item">
            <img className="d-block"
              alt={item?.icon?.alternativeText || 'card-icon'}
              src={item.icon.url}
              placeholder="blurred"
              width={60}
              height={60}
            />
          </div>
        )}
        <div className="card_item col-9 pe-2">
          {item.landing_page ? (
            <Link to={getUrl(item.landing_page.slug)}>
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
    <div className="container py-5">
      <div className="bannerList d-md-flex flex-row">
        <h2 className="bannerList__title col-md-6 col-xl-6 align-self-center mb-4">
          {title}
          {contactForm && concactFormAnchor && callToAction && (
            <button>
              <a href={concactFormAnchor}>{callToAction}</a>
            </button>
          )}
        </h2>
        <div className="bannerList__cards d-flex flex-column col-md-6 col-xl-6 gap-4">
          {cards}
        </div>
        {contactForm && concactFormAnchor && callToAction && (
          <button className="bannerList__buttonMobile">
            <a href={concactFormAnchor}>{callToAction}</a>
          </button>
        )}

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
          slug: PropTypes.string.isRequired
        }),
        icon: PropTypes.shape({
          alternativeText: PropTypes.string,
          url: PropTypes.string.isRequired
        })
      })
    )
  })
}
