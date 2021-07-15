import React from "react"
import { ServiceCards, EdTechCards, BannerBgImage, BannerTop } from "../index"
import "./CustomSection.scss"

const CustomSection = ({ sections }) => {
  const section = sections.map((section, idx) => {
    return (
      <div key={idx} className="CustomSections">
        {(section?.enable && section?.services) !== null &&
        (section?.enable && section?.services) !== undefined ? (
          <ServiceCards
            key={idx}
            title={section.title}
            services={section.services}
          />
        ) : null}
        {(section?.enable && section?.edteches) !== null &&
        (section?.enable && section?.edteches) !== undefined ? (
          <EdTechCards
            key={idx}
            title={section.title}
            edteches={section.edteches}
          />
        ) : null}

        {(section?.enable && section?.banner) !== null &&
        (section?.enable && section?.banner) !== undefined &&
        section?.banner.type === "bgImage" ? (
          <BannerBgImage
            key={idx}
            title={section.title}
            banner={section.banner}
          />
        ) : null}
        {(section?.enable && section?.banner) !== null &&
        (section?.enable && section?.banner) !== undefined &&
        section?.banner.type === "bgColor" ? (
          <BannerBgImage
            key={idx}
            title={section.title}
            banner={section.banner}
          />
        ) : null}
      </div>
    )
  })

  return <div>{section}</div>
}

export default CustomSection
