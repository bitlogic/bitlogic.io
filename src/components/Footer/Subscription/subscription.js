import { Link } from "gatsby"
import React from "react"
import { useFooter, useLandingUrl } from "../../../hooks"
import "./subscription.scss"

export default function Subscription() {
  const data = useFooter()
  const getUrl = useLandingUrl()
  
  const dataSubscription = data?.allStrapiLayout?.nodes[0]?.footer?.subscription

  const subscriptionUrl = dataSubscription?.url
  const landing = getUrl(dataSubscription?.landing_page?.slug)

  if(!dataSubscription?.landing_page && !subscriptionUrl) return <></>

  const SubscriptionLink = ({ children }) => {
    const isExternalLink = subscriptionUrl?.startsWith('http')

    if (landing) return (
      <Link to={landing}>
        {children}
      </Link>
    )
    else if (isExternalLink) return (
      <a href={subscriptionUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
    else {
      <a href={subscriptionUrl}>
        {children}
      </a>
    }
  }

  return (
    <div className="ContactData__Item contactData-container">
      <h6 className="titleSubscription">{dataSubscription?.title}</h6>
      <div>
        <div className="ContactData__Form d-flex flex-md-column justify-content-between">
          <button className="col-5">
            <SubscriptionLink>{dataSubscription?.callToAction}</SubscriptionLink>
          </button>
        </div>
      </div>
      <button className="col-5 contactData-mobile_button">
        <SubscriptionLink>{dataSubscription?.title}</SubscriptionLink>
      </button>
    </div>
  )
}