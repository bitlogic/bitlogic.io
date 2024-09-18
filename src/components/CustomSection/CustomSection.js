import React from "react"
import PropTypes from "prop-types"

/* Imports sections */
// import BlogContainer from '../BlogPage/BlogContainer'
import ListItems from "../ListItems/ListItems"
import VideoBackground from "../videoBackground/VideoBackground"
import PipedriveForm from "../Form/PipedriveForm"
import {
  AnimatedTransitionContinous,
  Banner,
  BannerList,
  Catsone,
  DualSection,
  OneSection,
  ExpandGrid,
  FeaturedBlogs,
  LogosSection,
  Professionals,
  Quote,
  Text,
  BannerTop,
} from "../"

const COMPONENTS = Object.freeze({
  "home.transition": AnimatedTransitionContinous,
  "components.banner-list": BannerList,
  "components.selected-grid": ExpandGrid,
  "components.featured-blogs": FeaturedBlogs,
  "components.pipedrive-form": PipedriveForm,
  "components.logos-section": LogosSection,
  "components.professionals-section": Professionals,
  "home.quote": Quote,
  "components.text": Text,
  "home.video-background": VideoBackground,
  "components.list-items": ListItems,
  "scripts.catsone": Catsone,
  "components.banner": ({ data }) =>
    data?.variant === "background" ? (
      <BannerTop banner={data} />
    ) : (
      <Banner data={data} />
    ),
  "home.dual-section": ({ data }) =>
    data?.dualSectionPart?.length === 1 ? (
      <OneSection data={data} />
    ) : (
      <DualSection data={data} />
    ),
})

const CustomSection = ({ sections }) => {
  if (!sections) return null

  const sectionResult = sections.map(section => {
    if (!section?.strapi_component) return null

    const Component = COMPONENTS[section.strapi_component]

    if (Component) {
      return (
        <Component
          data={section}
          key={`${section.strapi_component}-${section.id}`}
        />
      )
    }

    return null
  })

  return <>{sectionResult}</>
}

CustomSection.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
}

export default CustomSection
