import React, { useState } from "react"
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./DropdownContainer"
import Dropdown from "./DropdownContainer/Dropdown"

const getComponentTitle = component => {
  // TODO: falta definir los titulos para cada componente
  const titleReference = {
    "home.hero": () => "Bitlogic",
    "components.banner-list": () => "Dual section",
    "components.selected-grid": () => "Selected grid",
    "components.cases-section": () => " Cases section",
    "home.quote": () => "Quote",
    "home.video-background": () => "Video background",
    "home.dual-section": () => "Dual section",
  }
  return (
    (titleReference[component.strapi_component] &&
      titleReference[component.strapi_component]()) ||
    "Titulo no definido"
  )
}

const AnimatedNavbar = ({
  homeComponents,
  landingComponents,
  navbarItems,
  duration,
}) => {
  const navbarConfig = [
    {
      title: "Home",
      slug: "",
      dropdown: () => (
        <Dropdown
          sections={homeComponents
            .filter(
              component => component.strapi_component !== "home.transition"
            )
            .map(component => ({
              name: getComponentTitle(component),
              href: "#" + component.strapi_component + "-" + component.id,
            }))}
        />
      ),
    },
    ...navbarItems.map(navItem => {
      if (navItem.landing) {
        return {
          title: navItem.label,
          slug: navItem.landing.slug,
          dropdown: () => (
            <Dropdown
              sections={landingComponents
                .find(landing => landing.name === navItem.landing.name)
                .body.map(component => ({
                  name: getComponentTitle(component),
                  href:
                    "/" +
                    navItem.landing.slug +
                    "#" +
                    component.strapi_component +
                    "-" +
                    component.id,
                }))}
            />
          ),
        }
      } else if (navItem.url) {
        return {
          title: navItem.label,
          slug: navItem.url,
          dropdown: () => <Dropdown sections={[]} />,
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
              to={"/" + n.slug}
              key={n.title}
              title={n.title}
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
