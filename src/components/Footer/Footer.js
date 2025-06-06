import React, { memo } from "react"
import { useFooter } from "../../hooks"
import ContactData from "./ContactData/contactData"
import Location from "./Location/location"
import SocialLinks from "./SocialLinks/socialLinks"
import Navegation from "./Navegation/navegation"
import Subscription from "./Subscription/subscription"
import Sites from "./Sites/Sites"
import "./Footer.scss"

const Footer = memo(() => {
  const layoutData = useFooter()?.allStrapiLayout.nodes[0]

  const dataNavbar = layoutData?.navbar
  const dataFooter = layoutData?.footer
  const dataSites = layoutData?.Sites

  return (
    <section className="Footer">
      <div className="Footer__wrapper container-fluid" data-nosnippet>
        <Navegation
          items={dataNavbar?.navbarItem}
          title={dataFooter?.navegation?.title}
        />
        <ContactData
          contactData={dataFooter?.contact}
          internalLink={dataFooter?.internalLink}
          navButton={dataNavbar?.navButton}
        />
        <Location locationData={dataFooter?.location} />
        <Sites sitesData={dataSites} />
        <Subscription subscriptionData={dataFooter?.subscription} />
        <div>
          <SocialLinks
            image={dataFooter?.logo}
            socialMedia={dataFooter?.socialMedia?.socialMedia}
          />
        </div>
      </div>
    </section>
  )
})

export default Footer
