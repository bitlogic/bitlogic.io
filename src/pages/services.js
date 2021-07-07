import React from "react"
import {useServices, useBanner} from '../hooks'
import ServicesSection from "../components/Services/ServicesSection"
import Layout from "../components/layout"
import BannerTop from "../components/Banners/BannerTop"
import BannerActionCall from "../components/Banners/BannerActionCall"

const Services = () => {

    const servicesData = useServices()
    const servicesList = servicesData?.allStrapiServices?.nodes

    const bannerData = useBanner()
    const bannerTop = bannerData?.allStrapiBanners?.nodes
        .find(banner => banner.page === "services" && banner.type ==="top")
    const bannerActionCall = bannerData?.allStrapiBanners?.nodes
        .find(banner => banner.page === "services" && banner.type ==="actionCall")

    return (
        <Layout>
            <BannerTop banner={bannerTop} />
            <ServicesSection services={servicesList} />
            <BannerActionCall banner={bannerActionCall} />
        </Layout>
    )
}


export default Services
