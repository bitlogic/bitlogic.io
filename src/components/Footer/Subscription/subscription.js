import React from "react"
import CustomLink from "../../CustomLink/CustomLink"
import "./subscription.scss"
import PropTypes from "prop-types"

export default function Subscription({ subscriptionData }) {
  if (!subscriptionData) return null

  const { title, url, callToAction, landing_page } = subscriptionData

  if (!url && !landing_page) return null

  return (
    <div className="Footer__subscription">
      <h6 className="Footer__subscription__title">{title}</h6>
      <CustomLink
        content={callToAction || "¡Aquí!"}
        url={url}
        landing={landing_page}
        className={`Footer__subscription__button`}
      />
      <CustomLink
        content={title}
        url={url}
        landing={landing_page}
        className="Footer__subscription__button mobile"
      />
    </div>
  )
}

Subscription.propTypes = {
  subscriptionData: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    callToAction: PropTypes.string,
    landing_page: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}
