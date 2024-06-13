import React from "react";
import PropTypes from "prop-types"

/* Imports sections */
// import BlogContainer from '../BlogPage/BlogContainer'
import VideoBackground from "../videoBackground/VideoBackground";
import PipedriveForm from "../Form/PipedriveForm";
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
  LogosSection,
  Professionals,
  Quote,
  Text
} from '../';

const COMPONENTS = Object.freeze({
  'home.transition': AnimatedTransitionContinous,
  'components.banner': Banner,
  'components.banner-list': BannerList,
  'components.selected-grid': ExpandGrid,
  'components.featured-blogs': FeaturedBlogs,
  'components.pipedrive-form': PipedriveForm,
  'components.logos-section': LogosSection,
  'components.professionals-section': Professionals,
  'home.quote': Quote,
  'components.text': Text,
  'home.video-background': VideoBackground,
  'home.hero': Hero,
  'scripts.catsone': Catsone,
  'components.cases-section': ({ data }) => (data?.allCases
    ? <CasesList data={data} />
    : <CasesSection data={data} />
  ),
  'home.dual-section': ({ data }) => (data?.dualSectionPart?.length === 1
    ? <OneSection data={data} />
    : <DualSection data={data} />
  )
});

const CustomSection = ({ sections }) => {
  const sectionResult = sections.map((section) => {

    if (section?.strapi_component) return null

    const Component = COMPONENTS[section.strapi_component]

    if (Component) {
      return (
        <Component data={section}
          key={`${section.strapi_component}-${section.id}`}
        />
      )
    }

    return null
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