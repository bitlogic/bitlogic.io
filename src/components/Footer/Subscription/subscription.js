import React from "react"
import { useFooter } from "../../../hooks"
import "./subscription.scss"

export default function Subscription() {
  const data = useFooter()
  const dataSubscription = data?.allStrapiLayout?.nodes[0]?.footer?.subscription

  return (
    <div className="ContactData__Item contactData-container">
      <h6 className="titleSubscription">{dataSubscription?.title}</h6>
      <form>
        <div className="ContactData__Form d-flex flex-md-column justify-content-between">
          <button className="col-5" type="submit">
            Subscribe
          </button>
        </div>
      </form>
      <button className="col-5 contactData-mobile_button" type="submit">
        {dataSubscription?.title}
      </button>
    </div>
  )
}
