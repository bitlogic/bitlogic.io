import React from "react"
import { useServices, useBanner, useServicePage } from "../../hooks"
import Layout from "../layout"
import { BannerTop, BannerActionCall, ServiceCard, Seo } from "../index"

import "./ServicesSection.scss"

const ServicesSection = () => {
  const servicesData = useServices()
  const bannerData = useBanner()

  const servicesPageData = useServicePage()

  const servicesList = servicesData?.allStrapiServices?.nodes

  const servicesToDisplay = servicesList?.map(service => (
    <ServiceCard key={service.id} service={service} />
  ))

  const bannerTop = servicesPageData?.strapiServicesPage?.topBanner
  const bannerActionCall = servicesPageData?.strapiServicesPage?.actionCallBanner

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
