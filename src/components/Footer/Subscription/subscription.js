import { Link } from "gatsby"
import React from "react"
import { useFooter } from "../../../hooks"
import "./subscription.scss"

export default function Subscription() {
  const data = useFooter()
  const dataSubscription = data?.allStrapiLayout?.nodes[0]?.footer?.subscription

  return (
    <div className="ContactData__Item contactData-container">
      <h6 className="titleSubscription">{dataSubscription?.title}</h6>
      <div>
        <div className="ContactData__Form d-flex flex-md-column justify-content-between">
          <button className="col-5">
            <Link to="/recibe-nuestra-newsletter" >¡Aquí!</Link>
          </button>
        </div>
      </div>
      <button className="col-5 contactData-mobile_button">
        <Link to="/recibe-nuestra-newsletter" >{dataSubscription?.title}</Link>
      </button>
    </div>
  )
}
