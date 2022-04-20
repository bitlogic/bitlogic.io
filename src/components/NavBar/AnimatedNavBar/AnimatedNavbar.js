import React, { useState } from "react"
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./DropdownContainer"
import Dropdown from "./DropdownContainer/Dropdown"

const getComponentTitle = component => {
  // falta definir los titulos para cada componente y arreglar los vinculos internos
  const titleReference = {
    "home.hero": () => component.title,
    "components.banner-list": () => component.title,
    "components.selected-grid": () => component.title,
    "components.cases-section": () => component.title,
    "home.quote": () => component.title,
    "home.video-background": () => component.title,
    "home.dual-section": () =>
      component.dualSectionPart.map(section => section.title).join(" - "),
    "components.text": () => false,
    "banners.banner-head": () => component.title,
    "components.logos-section": () => component.title,
    "components.form": () => false,
    "components.banner": () => component.title,
  }
  console.log(
    (titleReference[component.strapi_component] &&
      titleReference[component.strapi_component]()) ||
      component.strapi_component
  )
  return (
    titleReference[component.strapi_component] &&
    titleReference[component.strapi_component]()
  )
}

const AnimatedNavbar = ({ landingComponents, navbarItems = [], duration }) => {
  const navbarConfig = [
    ...navbarItems.map(navItem => {
      if (navItem.singleType) {
        return {
          title: navItem.label,
          slug: navItem.singleType,
          dropdown: () => <Dropdown sections={null} />,
        }
      } else if (navItem.landing) {
        return {
          title: navItem.label,
          slug: navItem.landing.slug,
          dropdown: () =>
            navItem.dropdown ? (
              <Dropdown
                sections={landingComponents
                  .find(landing => landing.name === navItem.landing.name)
                  .body.map(component => ({
                    name: getComponentTitle(component) || "",
                    id: component.strapi_component + "-" + component.id,
                    slug: navItem.landing.slug,
                  }))}
              />
            ) : (
              <Dropdown sections={null} />
            ),
        }
      } else if (navItem.url) {
        return {
          title: navItem.label,
          slug: navItem.url,
          dropdown: () => <Dropdown sections={null} />,
        }
      }
    }),
  ]

  const [activeIndex, setActiveIndex] = useState([])
  const [animationOut, setAnimationOut] = useState(null)

  const [animatingOutTimeout, setAnimatingOutTimeout] = useState(null)

  const resetDropdownState = i => {
    setActiveIndex(typeof i === "number" ? [i] : [])
    setAnimationOut(false)

    setAnimatingOutTimeout(null)
  }

  const onMouseEnter = i => {
    if (animatingOutTimeout) {
      clearTimeout(animatingOutTimeout)
      resetDropdownState(i)
      return
    }
    if (activeIndex[activeIndex.length - 1] === i) return

    setActiveIndex(prev => prev.concat(i))
    setAnimationOut(false)
  }

  const onMouseLeave = () => {
    setAnimationOut(true)
    setAnimatingOutTimeout(setTimeout(resetDropdownState, duration))
  }

  let CurrentDropdown
  let PrevDropdown
  let direction

  const currentIndex = activeIndex[activeIndex.length - 1]
  const prevIndex =
    activeIndex.length > 1 && activeIndex[activeIndex.length - 2]

  if (typeof currentIndex === "number")
    CurrentDropdown = navbarConfig[currentIndex].dropdown
  if (typeof prevIndex === "number") {
    PrevDropdown = navbarConfig[prevIndex].dropdown
    direction = currentIndex > prevIndex ? "right" : "left"
  }

  return (
    <Flipper
      flipKey={currentIndex}
      spring={duration === 300 ? "noWobble" : { stiffness: 10, damping: 10 }}
    >
      <Navbar onMouseLeave={onMouseLeave}>
        {navbarConfig.map((n, index) => {
          return (
            <NavbarItem
              to={"/" + n?.slug}
              key={n?.title}
              title={n?.title}
              index={index}
              onMouseEnter={onMouseEnter}
            >
              {currentIndex === index && (
                <DropdownContainer
                  direction={direction}
                  animatingOut={animationOut}
                  duration={duration}
                >
                  <CurrentDropdown />
                  {PrevDropdown && <PrevDropdown />}
                </DropdownContainer>
              )}
            </NavbarItem>
          )
        })}
      </Navbar>
    </Flipper>
  )
}

export default AnimatedNavbar
