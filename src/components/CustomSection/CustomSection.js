import React from "react";
import PropTypes from "prop-types"

/* Imports sections */
// import BlogContainer from '../BlogPage/BlogContainer'
import VideoBackground from "../videoBackground/VideoBackground";
import Hero from '../Hero/Hero';
import {
  AnimatedTransitionContinous,
  Banner,
  BannerList,
  CasesSection,
  CasesList,
  Catsone,
  DualSection,
  OneSection,
  ExpandGrid,
  FeaturedBlogs,
  PipedriveForm,
  LogosSection,
  Professionals,
  Quote,
  Text,
} from '../';

const CustomSection = ({ sections }) => {

  const sectionResult = sections.map((section) => {
    if (section?.strapi_component === null ||
      section?.strapi_component === undefined) {
      return <></>
    }

    if (section.strapi_component === 'home.transition') {
      return <AnimatedTransitionContinous data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.banner') {
      return <Banner data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.banner-list') {
      return <BannerList data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.cases-section'
      && !section?.allCases) {
      return <CasesSection data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.cases-section'
      && section?.allCases) {
      return <CasesList data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'scripts.catsone') {
      return <Catsone data={section}
        key={section.strapi_component + section.id}
      />
    }
    if (section.strapi_component === 'home.dual-section') {
      const sectionComponent = section?.dualSectionPart.length === 1
        ? <OneSection data={section}
          key={section.strapi_component + section.id}
        />
        : <DualSection data={section}
          key={section.strapi_component + section.id}
        />

      return sectionComponent
    }

    if (section.strapi_component === 'components.selected-grid') {
      return <ExpandGrid data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.featured-blogs') {
      return <FeaturedBlogs data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.pipedrive-form') {
      return <PipedriveForm data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.logos-section') {
      return <LogosSection data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.professionals-section') {
      return <Professionals data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'home.quote') {
      return <Quote data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'components.text') {
      return <Text data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'home.video-background') {
      return <VideoBackground data={section}
        key={section.strapi_component + section.id}
      />
    }

    if (section.strapi_component === 'home.hero') {
      return <Hero data={section}
        key={section.strapi_component + section.id}
      />
    }

    return <></>
  })

  return (
    <>
      {sectionResult}
    </>
  )
}

CustomSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.node
  )
}

export default CustomSection;