import React from "react"
import FaIcon from "../../FaIcon/FaIcon"
import "./location.scss"
import PropTypes from "prop-types"

export default function Location({ locationData }) {
  if (!locationData) return null

  const location = locationData?.iconText?.map(item => {
    if (!item?.icon) return null
    return (
      <div className="icon-text d-flex" key={item.id}>
        <FaIcon type={item.icon.type} code={item.icon.code} />
        {item.name}
      </div>
    )
  })

  return (
    <div className="Footer__location">
      <h2>{locationData?.title}</h2>
      <div className="Footer__location__items">{location}</div>
    </div>
  )
}

Location.propTypes = {
  locationData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    iconText: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        icon: PropTypes.shape({
          type: PropTypes.string.isRequired,
          code: PropTypes.string.isRequired,
        }),
      })
    ),
  }),
}
