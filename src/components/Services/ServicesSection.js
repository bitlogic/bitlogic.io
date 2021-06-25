import React from 'react'
import "./ServicesSection.scss"
import ServiceCard from './ServiceCard'


const ServicesSection = ({services}) => {

    const servicesToDisplay = services?.map(
        service => (
            <ServiceCard 
                key={service.id} 
                service={service} 
            />
        )        
    )
    
    return (
        <div className="container-fluid servicesSection">
            <div className="container">
                {servicesToDisplay}
            </div>
        </div>
    )
}

export default ServicesSection
