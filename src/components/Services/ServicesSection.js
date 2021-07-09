import React from "react"

import ServiceCard from "./ServiceCard"
import "./ServicesSection.scss"

const ServicesSection = ({ services }) => {
  const servicesToDisplay = services?.map(service => (
    <ServiceCard key={service.id} service={service} />
  ))

  const servicesToDisplay = services?.map(service => (
    <ServiceCard key={service.id} service={service} />
  ))

  return (
    <div className="container-fluid servicesSection">
      <div className="container">{servicesToDisplay}</div>
    </div>
  )
}

export default ServicesSection
