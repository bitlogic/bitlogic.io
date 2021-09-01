import React from "react"
import { useServices, useBanner } from "../../hooks"
import Layout from "../layout"
import { BannerTop, BannerActionCall, ServiceCard, Seo } from "../index"

import "./ServicesSection.scss"

const ServicesSection = () => {
  const servicesData = useServices()
  const bannerData = useBanner()

  const servicesList = servicesData?.allStrapiServices?.nodes

  const servicesToDisplay = servicesList?.map(service => (
    <ServiceCard key={service.id} service={service} />
  ))

  const bannerTop = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "services" && banner.type === "top"
  )
  const bannerActionCall = bannerData?.allStrapiBanners?.nodes.find(
    banner => banner.page === "services" && banner.type === "actionCall"
  )

  const {
    pageDescription,
    pageKeywords,
    pageTitle,
  } = servicesData?.allStrapiServicesPage?.nodes[0]?.seo

  return (
    <Layout>
      {servicesData?.allStrapiServicesPage?.nodes[0]?.seo && (
        <Seo
          title={pageTitle}
          description={pageDescription}
          keywords={pageKeywords}
        />
      )}
      {bannerTop && <BannerTop banner={bannerTop} />}
      {servicesToDisplay.length > 0 && (
        <div className="container-fluid servicesSection">
          <div className="container">{servicesToDisplay}</div>
        </div>
      )}
      {bannerActionCall && <BannerActionCall banner={bannerActionCall} />}
    </Layout>
  )
}

export default ServicesSection
