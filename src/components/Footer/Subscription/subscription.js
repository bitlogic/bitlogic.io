import { Link } from "gatsby"
import React from "react"
import { useFooter } from "../../../hooks"
import "./subscription.scss"

export default function Subscription() {
  const data = useFooter()
  const dataSubscription = data?.allStrapiLayout?.nodes[0]?.footer?.subscription
  const subscriptionUrl = dataSubscription?.url
  const subscriptionLanding = data?.allStrapiLayout?.nodes[0]?.footer?.subscription?.landing_page?.slug

  const isExternalLink = subscriptionUrl && subscriptionUrl.startsWith('http')

  return (
    <div className="ContactData__Item contactData-container">
      <h6 className="titleSubscription">{dataSubscription?.title}</h6>
      <div>
        <div className="ContactData__Form d-flex flex-md-column justify-content-between">
          <button className="col-5">
            {
              isExternalLink ? (
                <a href={subscriptionUrl} target="_blank" rel="noopener noreferrer">¡Aquí!</a>
              ) : (
                <Link to={subscriptionLanding}>¡Aquí!</Link>
              )
            }
            {/* <Link to="/recibe-nuestra-newsletter" >¡Aquí!</Link> */}
          </button>
        </div>
      </div>
      <button className="col-5 contactData-mobile_button">
        {
          isExternalLink ? (
            <a href={subscriptionUrl} target="_blank" rel="noopener noreferrer">{dataSubscription?.title}</a>
          ) : (
            <Link to={subscriptionLanding}>{dataSubscription?.title}</Link>
          )
        }
        {/* <Link to="/recibe-nuestra-newsletter" >{dataSubscription?.title}</Link> */}
      </button>
    </div>
  )
}